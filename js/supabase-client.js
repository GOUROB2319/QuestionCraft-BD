// js/supabase-client.js
// Initialize Supabase client
const { createClient } = supabase;

const supabaseClient = createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);

// Export for use in other files
window.supabase = supabaseClient;
