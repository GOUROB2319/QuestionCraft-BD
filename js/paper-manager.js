// Paper Management Module
class PaperManager {
    constructor() {
        this.papers = [];
        this.loaded = false;
    }

    loadFromStorage() {
        try {
            const raw = localStorage.getItem(CONFIG.STORAGE_KEYS.PAPERS);
            this.papers = raw ? JSON.parse(raw) : [];
        } catch (_) {
            this.papers = [];
        }
        this.loaded = true;
    }

    saveToStorage() {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEYS.PAPERS, JSON.stringify(this.papers));
        } catch (_) {
            // ignore storage failures
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
            .from('papers')
            .select('*')
            .eq('user_id', user.id)
            .order('createdAt', { ascending: false });

        if (error) return { success: false, error: error.message };

        this.papers = (data || []).map((row) => ({
            id: row.id,
            userId: row.user_id,
            title: row.title,
            subject: row.subject,
            class: row.class,
            totalMarks: row.totalMarks,
            duration: row.duration,
            institution: row.institution,
            questions: row.questions || [],
            createdAt: row.createdAt || row.created_at || new Date().toISOString(),
            status: row.status || 'draft'
        }));
        this.saveToStorage();
        return { success: true };
    }
    
    async createPaper(paperData) {
        if (!this.loaded) this.loadFromStorage();
        const user = await this.getCurrentUser();
        const id = paperData?.id || (globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `p_${Date.now()}_${Math.random().toString(16).slice(2)}`);
        const paper = {
            ...paperData,
            id,
            createdAt: new Date().toISOString(),
            status: 'draft',
            userId: user?.id || null
        };
        this.papers.push(paper);
        this.saveToStorage();

        const supabase = window.auth?.supabase;
        if (user && supabase) {
            const { error } = await supabase.from('papers').insert([{
                id: paper.id,
                user_id: user.id,
                title: paper.title || '',
                subject: paper.subject || null,
                class: paper.class || null,
                totalMarks: paper.totalMarks || null,
                duration: paper.duration || null,
                institution: paper.institution || null,
                questions: paper.questions || [],
                createdAt: paper.createdAt,
                status: paper.status
            }]);
            if (error) return { success: false, error: error.message, paper };
        }
        return { success: true, paper };
    }
    
    async updatePaper(id, data) {
        if (!this.loaded) this.loadFromStorage();
        const index = this.papers.findIndex(p => p.id === id);
        if (index !== -1) {
            this.papers[index] = { ...this.papers[index], ...data };
            this.saveToStorage();

            const user = await this.getCurrentUser();
            const supabase = window.auth?.supabase;
            if (user && supabase) {
                const updated = this.papers[index];
                const { error } = await supabase
                    .from('papers')
                    .update({
                        title: updated.title || '',
                        subject: updated.subject || null,
                        class: updated.class || null,
                        totalMarks: updated.totalMarks || null,
                        duration: updated.duration || null,
                        institution: updated.institution || null,
                        questions: updated.questions || [],
                        status: updated.status || 'draft'
                    })
                    .eq('id', id)
                    .eq('user_id', user.id);
                if (error) return { success: false, error: error.message };
            }
            return { success: true };
        }
        return { success: false, error: 'Paper not found' };
    }
    
    async deletePaper(id) {
        if (!this.loaded) this.loadFromStorage();
        this.papers = this.papers.filter(p => p.id !== id);
        this.saveToStorage();

        const user = await this.getCurrentUser();
        const supabase = window.auth?.supabase;
        if (user && supabase) {
            const { error } = await supabase
                .from('papers')
                .delete()
                .eq('id', id)
                .eq('user_id', user.id);
            if (error) return { success: false, error: error.message };
        }
        return { success: true };
    }

    async listPapers() {
        if (!this.loaded) this.loadFromStorage();
        const user = await this.getCurrentUser();
        if (user) return this.papers.filter(p => p.userId === user.id);
        return [...this.papers];
    }
}

window.paperManager = new PaperManager();
