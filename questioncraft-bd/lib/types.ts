// ============================================
// QuestionCraft BD — TypeScript Type Definitions
// ============================================

// ----- User -----
export interface User {
    id: string;
    email: string;
    full_name: string;
    institution: string | null;
    role: 'teacher' | 'admin' | 'institution';
    avatar_url: string | null;
    created_at: string;
    updated_at: string;
}

// ----- MCQ Option -----
export interface MCQOption {
    id: string; // 'A' | 'B' | 'C' | 'D'
    text: string;
}

// ----- Question Content -----
export interface MCQContent {
    type: 'mcq';
    question: string;
    options: MCQOption[];
    correct_answer: string; // 'A' | 'B' | 'C' | 'D'
    explanation?: string;
}

export interface ShortContent {
    type: 'short';
    question: string;
    hints?: string;
    model_answer?: string;
}

export interface SubQuestion {
    label: string; // ক, খ, গ, ঘ
    text: string;
    marks: number;
}

export interface BroadContent {
    type: 'broad';
    stem: string;
    sub_questions: SubQuestion[];
}

export type QuestionContent = MCQContent | ShortContent | BroadContent;

// ----- Question -----
export interface Question {
    id: string;
    user_id: string;
    title: string;
    type: 'mcq' | 'short' | 'broad';
    subject: string;
    topic: string | null;
    class_level: string;
    difficulty: 'easy' | 'medium' | 'hard';
    language: 'bangla' | 'english' | 'both';
    content: QuestionContent;
    marks: number;
    tags: string[];
    created_at: string;
    updated_at: string;
}

// ----- Paper -----
export type PaperStatus = 'draft' | 'published' | 'archived';

export interface PaperMetadata {
    institution_name?: string;
    exam_title?: string;
    instructions?: string;
    logo_url?: string;
    include_watermark?: boolean;
    include_page_numbers?: boolean;
    include_answer_key?: boolean;
    font_size?: number;
    layout?: 'one-column' | 'two-column';
    paper_size?: 'A4' | 'letter' | 'legal';
}

export interface Paper {
    id: string;
    user_id: string;
    title: string;
    subject: string;
    class_level: string;
    exam_type: string | null;
    total_marks: number;
    duration_minutes: number;
    status: PaperStatus;
    metadata: PaperMetadata;
    created_at: string;
    updated_at: string;
}

// ----- Question Paper Association -----
export interface QuestionPaperAssociation {
    id: string;
    question_id: string;
    paper_id: string;
    order_index: number;
    section: string | null;
    question?: Question;
}

// ----- Paper with Questions -----
export interface PaperWithQuestions extends Paper {
    questions: QuestionPaperAssociation[];
    question_count?: number;
}

// ----- Dashboard Stats -----
export interface DashboardStats {
    total_questions: number;
    total_papers: number;
    bank_questions: number;
    ai_questions: number;
}

// ----- API Response -----
export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
    success: boolean;
}

// ----- Form Types -----
export interface RegisterFormData {
    full_name: string;
    email: string;
    institution: string;
    password: string;
    agree_terms: boolean;
}

export interface LoginFormData {
    email: string;
    password: string;
    remember_me: boolean;
}

// ----- Supabase Database Types -----
export type Database = {
    public: {
        Tables: {
            users: {
                Row: User;
                Insert: Omit<User, 'id' | 'created_at' | 'updated_at'>;
                Update: Partial<Omit<User, 'id' | 'created_at'>>;
            };
            questions: {
                Row: Question;
                Insert: Omit<Question, 'id' | 'created_at' | 'updated_at'>;
                Update: Partial<Omit<Question, 'id' | 'created_at'>>;
            };
            papers: {
                Row: Paper;
                Insert: Omit<Paper, 'id' | 'created_at' | 'updated_at'>;
                Update: Partial<Omit<Paper, 'id' | 'created_at'>>;
            };
            question_paper_association: {
                Row: QuestionPaperAssociation;
                Insert: Omit<QuestionPaperAssociation, 'id'>;
                Update: Partial<Omit<QuestionPaperAssociation, 'id'>>;
            };
        };
    };
};
