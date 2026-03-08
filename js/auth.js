// js/auth.js

async function signUp(email, password, profile = {}, institutionName) {
    const normalizedProfile = typeof profile === 'object' && profile !== null
        ? profile
        : {
            full_name: profile,
            institution: institutionName
        };

    const { data, error } = await window.supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: normalizedProfile.full_name || '',
                institution: normalizedProfile.institution || ''
            }
        }
    });
    return { data, error };
}

async function signIn(email, password) {
    const { data, error } = await window.supabase.auth.signInWithPassword({
        email,
        password
    });
    return { data, error };
}

async function signOut() {
    const { error } = await window.supabase.auth.signOut();
    if (!error) {
        window.location.href = '/index.html';
    }
    return { error };
}

async function checkSession() {
    const { data: { session } } = await window.supabase.auth.getSession();
    return session;
}

// Global auth check for protected pages
window.auth = {
    signUp,
    signIn,
    signOut,
    checkSession
};
