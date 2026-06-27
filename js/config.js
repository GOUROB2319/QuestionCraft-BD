// QuestionCraft BD - Main Configuration
// =====================================

const CONFIG = {
    // App Information
    APP_NAME: 'QuestionCraft BD',
    VERSION: '2.0.0',
    TAGLINE: 'স্মার্ট প্রশ্নপত্র, সহজ উপায়ে',

    // Hosting base path (works for localhost and GitHub Pages-style subpaths)
    // Example: "/" or "/QuestionCraft-BD/"
    APP_BASE_PATH: (() => {
        try {
            const pathname = window.location.pathname || '/';
            const pagesIndex = pathname.indexOf('/pages/');
            if (pagesIndex >= 0) return pathname.slice(0, pagesIndex + 1);
            return pathname.replace(/\/[^/]*$/, '/');
        } catch (_) {
            return '/';
        }
    })(),
    
    // ✅ Supabase Configuration (Already Provided)
    SUPABASE_URL: '',
    SUPABASE_ANON_KEY: '',
    
    // ✅ Google Gemini API (Already Provided)
    GEMINI_API_KEY: '',
    GEMINI_MODEL: 'gemini-1.5-flash',
    GEMINI_BASE_URL: 'https://generativelanguage.googleapis.com/v1beta',
    
    // ⚠️ Google Drive API (YOU NEED TO ADD THESE)
    // Get from: https://console.cloud.google.com
    GOOGLE_CLIENT_ID: '',
    GOOGLE_API_KEY: '',
    GOOGLE_SCOPES: 'https://www.googleapis.com/auth/drive.file',
    DRIVE_FOLDER_NAME: 'QuestionCraft BD',
    
    // Design System (Your Exact Colors)
    COLORS: {
        PRIMARY: '#1f3b61',      // Dark Blue (Sidebar)
        SECONDARY: '#10B981',    // Emerald Green
        ACCENT: '#FBBF24',       // Amber Yellow
        BACKGROUND_LIGHT: '#f6f7f8',
        BACKGROUND_DARK: '#14181e',
        SUCCESS: '#10B981',
        WARNING: '#FBBF24',
        ERROR: '#EF4444',
        INFO: '#3B82F6'
    },
    
    // Typography
    FONTS: {
        PRIMARY: 'Hind Siliguri',
        SECONDARY: 'Lexend',
        MONO: 'JetBrains Mono'
    },
    
    // Rate Limiting (Gemini Free Tier)
    RATE_LIMITS: {
        REQUESTS_PER_MINUTE: 60,
        REQUESTS_PER_DAY: 1500,
        MAX_QUESTIONS_PER_GENERATION: 20
    },
    
    // App Settings
    DEFAULT_LANGUAGE: 'bn',
    DEFAULT_THEME: 'light',
    ENABLE_DARK_MODE: true,
    ENABLE_ANALYTICS: false,
    
    // Question Types
    QUESTION_TYPES: {
        MCQ: 'mcq',
        CREATIVE: 'creative',
        SHORT: 'short',
        TRUE_FALSE: 'true_false',
        FILL_BLANK: 'fill_blank',
        MATCHING: 'matching'
    },
    
    // Difficulty Levels
    DIFFICULTY_LEVELS: {
        EASY: 'easy',
        MEDIUM: 'medium',
        HARD: 'hard'
    },
    
    // Classes Supported
    CLASSES: ['6', '7', '8', '9', '10', '11', '12'],
    
    // Subjects (NCTB Curriculum)
    SUBJECTS: {
        PHYSICS: 'পদার্থবিজ্ঞান',
        CHEMISTRY: 'রসায়ন',
        BIOLOGY: 'জীববিজ্ঞান',
        MATH: 'গণিত',
        BANGLA: 'বাংলা',
        ENGLISH: 'ইংরেজি',
        ICT: 'তথ্য ও যোগাযোগ প্রযুক্তি',
        ISLAM: 'ইসলাম শিক্ষা',
        HISTORY: 'ইতিহাস',
        CIVICS: 'পৌরনীতি',
        GEOGRAPHY: 'ভূগোল',
        AGRICULTURE: 'কৃষি শিক্ষা'
    },
    
    // PDF Settings
    PDF: {
        DEFAULT_SIZE: 'A4',
        DEFAULT_ORIENTATION: 'portrait',
        DEFAULT_FONT_SIZE: 12,
        DEFAULT_MARGINS: {
            top: 20,
            right: 15,
            bottom: 20,
            left: 15
        },
        FONTS: {
            BANGLA: 'SolaimanLipi',
            ENGLISH: 'Times New Roman'
        }
    },
    
    // Storage Limits
    STORAGE: {
        GOOGLE_DRIVE_LIMIT: 15 * 1024 * 1024 * 1024, // 15GB
        SUPABASE_LIMIT: 500 * 1024 * 1024,           // 500MB
        MAX_FILE_SIZE: 10 * 1024 * 1024,             // 10MB
        MAX_QUESTIONS: 10000,
        MAX_PAPERS: 1000
    },
    
    // API Endpoints
    ENDPOINTS: {
        GEMINI: (model) => `${CONFIG.GEMINI_BASE_URL}/models/${model}:generateContent`,
        SUPABASE_AUTH: () => `${CONFIG.SUPABASE_URL}/auth/v1`,
        SUPABASE_DB: () => `${CONFIG.SUPABASE_URL}/rest/v1`
    },

    // Common routes (relative to app root)
    PATHS: {
        LOGIN: 'login.html',
        SIGNUP: 'signup.html',
        DASHBOARD: 'pages/dashboard/index.html',
        QUESTION_BANK: 'pages/question-bank/index.html',
        CREATE_QUESTION: 'pages/create-question/ai-generator.html',
        CREATE_PAPER: 'pages/create-paper/index.html',
        MY_PAPERS: 'pages/my-papers/index.html',
        SETTINGS: 'pages/settings/index.html',
        NCTB_BOOKS: 'pages/nctb-books/index.html',
        RESET_PASSWORD: 'reset-password.html'
    },
    
    // Feature Flags
    FEATURES: {
        AI_GENERATION: true,
        PDF_EXPORT: true,
        GOOGLE_DRIVE: true,
        COLLABORATION: true,
        ANALYTICS: false,
        GAMIFICATION: true,
        DARK_MODE: true,
        MOBILE_APP: false
    },
    
    // Debug Mode
    DEBUG: false,
    
    // Logging
    LOG_LEVEL: 'info', // 'debug', 'info', 'warn', 'error'
    
    // Session
    SESSION_TIMEOUT: 30 * 24 * 60 * 60 * 1000, // 30 days
    
    // Pagination
    ITEMS_PER_PAGE: 20,
    
    // Notifications
    TOAST_DURATION: 3000, // 3 seconds
    
    // Animation
    TRANSITION_DURATION: 300, // 300ms
    
    // Local Storage Keys
    STORAGE_KEYS: {
        USER: 'qcbd_user',
        THEME: 'qcbd_theme',
        LANGUAGE: 'qcbd_language',
        QUESTIONS: 'qcbd_questions',
        PAPERS: 'qcbd_papers',
        SETTINGS: 'qcbd_settings'
    },
    
    // API Call Retry
    RETRY: {
        MAX_ATTEMPTS: 3,
        DELAY: 1000, // 1 second
        BACKOFF: 2   // Exponential backoff multiplier
    }
};

// Merge uncommitted local secrets (optional)
(() => {
    const secrets = window.CONFIG_SECRETS || {};
    CONFIG.SUPABASE_URL = secrets.SUPABASE_URL || CONFIG.SUPABASE_URL;
    CONFIG.SUPABASE_ANON_KEY = secrets.SUPABASE_ANON_KEY || CONFIG.SUPABASE_ANON_KEY;
    CONFIG.GEMINI_API_KEY = secrets.GEMINI_API_KEY || CONFIG.GEMINI_API_KEY;
    CONFIG.GOOGLE_CLIENT_ID = secrets.GOOGLE_CLIENT_ID || CONFIG.GOOGLE_CLIENT_ID;
    CONFIG.GOOGLE_API_KEY = secrets.GOOGLE_API_KEY || CONFIG.GOOGLE_API_KEY;
})();

// URL helper (absolute)
CONFIG.resolvePath = (relativePath) => {
    const cleaned = String(relativePath || '').replace(/^\/+/, '');
    return new URL(cleaned, window.location.origin + CONFIG.APP_BASE_PATH).toString();
};

// Freeze configuration to prevent modifications
Object.freeze(CONFIG);

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Make available globally
window.CONFIG = CONFIG;

// Log configuration loaded
if (CONFIG.DEBUG) {
    console.log('✅ QuestionCraft BD Configuration Loaded');
    console.log('📦 Version:', CONFIG.VERSION);
    console.log('🎨 Primary Color:', CONFIG.COLORS.PRIMARY);
    console.log('🔑 Supabase URL:', CONFIG.SUPABASE_URL);
    console.log('🤖 Gemini Model:', CONFIG.GEMINI_MODEL);
}
