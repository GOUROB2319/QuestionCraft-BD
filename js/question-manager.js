// Question Management Module
class QuestionManager {
    constructor() {
        this.questions = [];
        this.loaded = false;
    }

    loadFromStorage() {
        try {
            const raw = localStorage.getItem(CONFIG.STORAGE_KEYS.QUESTIONS);
            this.questions = raw ? JSON.parse(raw) : [];
        } catch (_) {
            this.questions = [];
        }
        this.loaded = true;
    }

    saveToStorage() {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEYS.QUESTIONS, JSON.stringify(this.questions));
        } catch (_) {
            // ignore storage failures (quota/private mode)
        }
    }

    async getCurrentUser() {
        try {
            return window.auth ? await window.auth.getCurrentUser() : null;
        } catch (_) {
            return null;
        }
    }

    async refreshFromSupabase() {
        const user = await this.getCurrentUser();
        const supabase = window.auth?.supabase;
        if (!user || !supabase) return { success: false, error: 'Not authenticated' };

        const { data, error } = await supabase
            .from('questions')
            .select('*')
            .eq('user_id', user.id)
            .order('createdAt', { ascending: false });

        if (error) return { success: false, error: error.message };

        // Normalize fields to match client shape
        this.questions = (data || []).map((row) => ({
            id: row.id,
            userId: row.user_id,
            question: row.question,
            type: row.type,
            subject: row.subject,
            class: row.class,
            options: row.options || null,
            correctAnswer: row.correctAnswer || null,
            marks: row.marks || null,
            difficulty: row.difficulty || null,
            explanation: row.explanation || null,
            source: row.source || null,
            createdAt: row.createdAt || row.created_at || new Date().toISOString(),
            createdBy: row.createdBy || null
        }));
        this.saveToStorage();
        return { success: true };
    }
    
    async create(questionData) {
        if (!this.loaded) this.loadFromStorage();
        const user = await this.getCurrentUser();

        const id = questionData?.id || (globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `q_${Date.now()}_${Math.random().toString(16).slice(2)}`);
        const question = {
            ...questionData,
            id,
            createdAt: new Date().toISOString(),
            userId: user?.id || null,
            createdBy: user?.email || null
        };
        this.questions.push(question);
        this.saveToStorage();

        // Best-effort Supabase persistence
        const supabase = window.auth?.supabase;
        if (user && supabase) {
            const { error } = await supabase.from('questions').insert([{
                id: question.id,
                user_id: user.id,
                question: question.question || '',
                type: question.type || 'mcq',
                subject: question.subject || null,
                class: question.class || null,
                options: question.options || null,
                correctAnswer: question.correctAnswer || null,
                marks: question.marks || null,
                difficulty: question.difficulty || null,
                explanation: question.explanation || null,
                source: question.source || null,
                createdAt: question.createdAt,
                createdBy: question.createdBy
            }]);
            if (error) {
                return { success: false, error: error.message, question };
            }
        }
        return { success: true, question };
    }
    
    async update(id, data) {
        if (!this.loaded) this.loadFromStorage();
        const index = this.questions.findIndex(q => q.id === id);
        if (index !== -1) {
            this.questions[index] = { ...this.questions[index], ...data };
            this.saveToStorage();

            const user = await this.getCurrentUser();
            const supabase = window.auth?.supabase;
            if (user && supabase) {
                const updated = this.questions[index];
                const { error } = await supabase
                    .from('questions')
                    .update({
                        question: updated.question || '',
                        type: updated.type || 'mcq',
                        subject: updated.subject || null,
                        class: updated.class || null,
                        options: updated.options || null,
                        correctAnswer: updated.correctAnswer || null,
                        marks: updated.marks || null,
                        difficulty: updated.difficulty || null,
                        explanation: updated.explanation || null
                    })
                    .eq('id', id)
                    .eq('user_id', user.id);
                if (error) return { success: false, error: error.message };
            }
            return { success: true };
        }
        return { success: false, error: 'Question not found' };
    }
    
    async delete(id) {
        if (!this.loaded) this.loadFromStorage();
        this.questions = this.questions.filter(q => q.id !== id);
        this.saveToStorage();

        const user = await this.getCurrentUser();
        const supabase = window.auth?.supabase;
        if (user && supabase) {
            const { error } = await supabase
                .from('questions')
                .delete()
                .eq('id', id)
                .eq('user_id', user.id);
            if (error) return { success: false, error: error.message };
        }
        return { success: true };
    }
    
    async get(id) {
        if (!this.loaded) this.loadFromStorage();
        return this.questions.find(q => q.id === id);
    }
    
    async list(filters = {}) {
        if (!this.loaded) this.loadFromStorage();
        let filtered = [...this.questions];

        // Default: if logged in, show only your questions
        const user = await this.getCurrentUser();
        if (user && !filters.includeAllUsers) {
            filtered = filtered.filter(q => q.userId === user.id);
        }
        
        if (filters.subject) {
            filtered = filtered.filter(q => q.subject === filters.subject);
        }
        if (filters.class) {
            filtered = filtered.filter(q => q.class === filters.class);
        }
        if (filters.type) {
            filtered = filtered.filter(q => q.type === filters.type);
        }
        
        return filtered;
    }
}

window.questionManager = new QuestionManager();
