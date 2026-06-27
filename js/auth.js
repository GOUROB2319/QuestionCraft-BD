// QuestionCraft BD - Authentication Module
// =========================================

class AuthManager {
    constructor() {
        this.supabase = null;
        this.currentUser = null;
        this.initialized = false;
    }

    formatError(error) {
        const message = error?.message || String(error || 'Unknown error');
        const code = error?.code ? ` (${error.code})` : '';
        const details = error?.details ? ` | ${error.details}` : '';
        return `${message}${code}${details}`;
    }

    // Bengali-friendly summaries for common Supabase Auth failures
    humanizeError(error) {
        const raw = this.formatError(error);
        const msg = (error?.message || raw || '').toLowerCase();

        if (msg.includes('database error saving new user')) {
            return 'নিবন্ধন হচ্ছে, কিন্তু Supabase ডাটাবেসে নতুন ইউজারের প্রোফাইল/ট্রিগার সংরক্ষণে সমস্যা হচ্ছে। Supabase-এ `auth.users` ট্রিগার (যেমন `handle_new_user`) বা `profiles/users` টেবিলের RLS/constraint ঠিক আছে কিনা দেখুন। Error: ' + raw;
        }
        if (msg.includes('invalid login credentials')) {
            return 'ইমেইল বা পাসওয়ার্ড ভুল। Error: ' + raw;
        }
        if (msg.includes('email not confirmed')) {
            return 'ইমেইল যাচাই করা হয়নি। ইনবক্সে ভেরিফিকেশন লিঙ্ক চেক করুন। Error: ' + raw;
        }
        if (msg.includes('user already registered') || msg.includes('already') && msg.includes('registered')) {
            return 'এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট তৈরি আছে। লগইন করুন। Error: ' + raw;
        }
        return raw;
    }

    async ensureInit() {
        if (!this.initialized) {
            await this.init();
        }
    }
    
    /**
     * Initialize Supabase client
     */
    async init() {
        try {
            // Load Supabase if not already loaded
            if (typeof window.supabase === 'undefined') {
                console.error('❌ Supabase library not loaded');
                throw new Error('Supabase library not found');
            }

            if (!CONFIG.SUPABASE_URL || !CONFIG.SUPABASE_ANON_KEY) {
                throw new Error('Supabase config missing (SUPABASE_URL / SUPABASE_ANON_KEY)');
            }
            
            this.supabase = window.supabase.createClient(
                CONFIG.SUPABASE_URL,
                CONFIG.SUPABASE_ANON_KEY
            );
            
            // Check current session
            const { data: { session } } = await this.supabase.auth.getSession();
            
            if (session) {
                this.currentUser = session.user;
                console.log('✅ User already logged in:', this.currentUser.email);
            }
            
            // Listen to auth state changes
            this.supabase.auth.onAuthStateChange((event, session) => {
                console.log('🔐 Auth state changed:', event);
                
                if (session) {
                    this.currentUser = session.user;
                    this.onAuthStateChange(event, session);
                } else {
                    this.currentUser = null;
                }
            });
            
            this.initialized = true;
            console.log('✅ Auth Manager initialized');
            
            return true;
        } catch (error) {
            console.error('❌ Auth initialization failed:', error);
            throw error;
        }
    }
    
    /**
     * Sign up with email and password
     */
    async signUp(email, password, userData = {}) {
        try {
            await this.ensureInit();
            const { data, error } = await this.supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        full_name: userData.fullName || '',
                        institution: userData.institution || '',
                        designation: userData.designation || '',
                        phone: userData.phone || '',
                        classes_taught: userData.classes || [],
                        primary_subject: userData.subject || ''
                    }
                }
            });
            
            if (error) throw error;
            
            console.log('✅ Signup successful:', data);
            return { success: true, data };
            
        } catch (error) {
            console.error('❌ Signup failed:', error);
            return { success: false, error: this.humanizeError(error) };
        }
    }
    
    /**
     * Sign in with email and password
     */
    async signIn(email, password) {
        try {
            await this.ensureInit();
            const { data, error } = await this.supabase.auth.signInWithPassword({
                email: email,
                password: password
            });
            
            if (error) throw error;
            
            this.currentUser = data.user;
            console.log('✅ Login successful:', this.currentUser.email);
            
            return { success: true, user: data.user };
            
        } catch (error) {
            console.error('❌ Login failed:', error);
            return { success: false, error: this.humanizeError(error) };
        }
    }
    
    /**
     * Sign in with Google OAuth
     */
    async signInWithGoogle() {
        try {
            await this.ensureInit();
            const { data, error } = await this.supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: CONFIG.resolvePath(CONFIG.PATHS.DASHBOARD),
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent'
                    }
                }
            });
            
            if (error) throw error;
            
            console.log('✅ Google OAuth initiated');
            return { success: true };
            
        } catch (error) {
            console.error('❌ Google OAuth failed:', error);
            return { success: false, error: this.humanizeError(error) };
        }
    }
    
    /**
     * Sign out
     */
    async signOut() {
        try {
            await this.ensureInit();
            const { error } = await this.supabase.auth.signOut();
            
            if (error) throw error;
            
            this.currentUser = null;
            console.log('✅ Logout successful');
            
            // Clear user-only local storage (don’t wipe app content like questions/papers)
            localStorage.removeItem(CONFIG.STORAGE_KEYS.USER);
            
            return { success: true };
            
        } catch (error) {
            console.error('❌ Logout failed:', error);
            return { success: false, error: this.humanizeError(error) };
        }
    }
    
    /**
     * Send password reset email
     */
    async resetPassword(email) {
        try {
            await this.ensureInit();
            const { error } = await this.supabase.auth.resetPasswordForEmail(email, {
                redirectTo: CONFIG.resolvePath(CONFIG.PATHS.RESET_PASSWORD)
            });
            
            if (error) throw error;
            
            console.log('✅ Password reset email sent');
            return { success: true };
            
        } catch (error) {
            console.error('❌ Password reset failed:', error);
            return { success: false, error: this.humanizeError(error) };
        }
    }
    
    /**
     * Update user password
     */
    async updatePassword(newPassword) {
        try {
            await this.ensureInit();
            const { error } = await this.supabase.auth.updateUser({
                password: newPassword
            });
            
            if (error) throw error;
            
            console.log('✅ Password updated');
            return { success: true };
            
        } catch (error) {
            console.error('❌ Password update failed:', error);
            return { success: false, error: this.humanizeError(error) };
        }
    }
    
    /**
     * Update user profile
     */
    async updateProfile(userData) {
        try {
            await this.ensureInit();
            const { error } = await this.supabase.auth.updateUser({
                data: userData
            });
            
            if (error) throw error;
            
            console.log('✅ Profile updated');
            return { success: true };
            
        } catch (error) {
            console.error('❌ Profile update failed:', error);
            return { success: false, error: this.humanizeError(error) };
        }
    }
    
    /**
     * Get current user
     */
    async getCurrentUser() {
        try {
            await this.ensureInit();
            const { data: { user }, error } = await this.supabase.auth.getUser();
            
            if (error) throw error;
            
            this.currentUser = user;
            return user;
            
        } catch (error) {
            console.error('❌ Get user failed:', error);
            return null;
        }
    }
    
    /**
     * Check if user is authenticated
     */
    isAuthenticated() {
        return this.currentUser !== null;
    }
    
    /**
     * Require authentication (redirect if not logged in)
     */
    async requireAuth(redirectUrl = '/login.html') {
        const user = await this.getCurrentUser();
        
        if (!user) {
            console.warn('⚠️ User not authenticated, redirecting...');
            const target = (() => {
                try {
                    if (/^https?:\/\//i.test(redirectUrl)) return redirectUrl;
                    if (String(redirectUrl).startsWith('/')) {
                        return CONFIG.resolvePath(String(redirectUrl).replace(/^\/+/, ''));
                    }
                    return new URL(redirectUrl, window.location.href).toString();
                } catch (_) {
                    return CONFIG.resolvePath(CONFIG.PATHS.LOGIN);
                }
            })();
            window.location.href = target;
            return false;
        }
        
        return true;
    }
    
    /**
     * Get user metadata
     */
    getUserMetadata() {
        if (!this.currentUser) return null;
        
        return {
            id: this.currentUser.id,
            email: this.currentUser.email,
            fullName: this.currentUser.user_metadata?.full_name || '',
            institution: this.currentUser.user_metadata?.institution || '',
            designation: this.currentUser.user_metadata?.designation || '',
            phone: this.currentUser.user_metadata?.phone || '',
            classesTaught: this.currentUser.user_metadata?.classes_taught || [],
            primarySubject: this.currentUser.user_metadata?.primary_subject || '',
            createdAt: this.currentUser.created_at
        };
    }
    
    /**
     * Save user data to local storage
     */
    saveUserToStorage() {
        if (this.currentUser) {
            localStorage.setItem(
                CONFIG.STORAGE_KEYS.USER,
                JSON.stringify(this.getUserMetadata())
            );
        }
    }
    
    /**
     * Load user data from local storage
     */
    loadUserFromStorage() {
        const userData = localStorage.getItem(CONFIG.STORAGE_KEYS.USER);
        return userData ? JSON.parse(userData) : null;
    }
    
    /**
     * Auth state change handler (can be overridden)
     */
    onAuthStateChange(event, session) {
        console.log('🔐 Auth event:', event);
        
        switch (event) {
            case 'SIGNED_IN':
                this.saveUserToStorage();
                break;
            case 'SIGNED_OUT':
                localStorage.removeItem(CONFIG.STORAGE_KEYS.USER);
                break;
            case 'USER_UPDATED':
                this.saveUserToStorage();
                break;
        }
    }
    
    /**
     * Verify email with OTP
     */
    async verifyOTP(email, token, type = 'signup') {
        try {
            await this.ensureInit();
            const { data, error } = await this.supabase.auth.verifyOtp({
                email: email,
                token: token,
                type: type
            });
            
            if (error) throw error;
            
            console.log('✅ OTP verified');
            return { success: true, data };
            
        } catch (error) {
            console.error('❌ OTP verification failed:', error);
            return { success: false, error: this.humanizeError(error) };
        }
    }
    
    /**
     * Resend OTP
     */
    async resendOTP(email, type = 'signup') {
        try {
            await this.ensureInit();
            const { error } = await this.supabase.auth.resend({
                type: type,
                email: email
            });
            
            if (error) throw error;
            
            console.log('✅ OTP resent');
            return { success: true };
            
        } catch (error) {
            console.error('❌ OTP resend failed:', error);
            return { success: false, error: this.humanizeError(error) };
        }
    }
}

// Create global instance
const auth = new AuthManager();

// Auto-initialize on page load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', async () => {
        try {
            await auth.init();
        } catch (error) {
            console.error('❌ Auth auto-init failed:', error);
        }
    });
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AuthManager;
}

window.auth = auth;
