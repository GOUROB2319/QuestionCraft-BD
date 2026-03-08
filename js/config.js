// config.js
const CONFIG = {
  // Supabase Configuration
  SUPABASE_URL: 'https://lfqqzrvubtwwrsoulaqj.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_mQdj0j8EUCc5vx6wWJy2xg_FPLBLHt',

  // Google Gemini API (FREE)
  GEMINI_API_KEY: "AIzaSyBEZpCw105eRnkPRV-iVNeLKkON8TyRovI",
  // Placeholder for user input
  GEMINI_MODEL: 'gemini-1.5-flash', // Try flash first, can be changed to gemini-1.5-flash-latest if needed

  // Google Drive API
  GOOGLE_CLIENT_ID: 'USER_TO_PROVIDE',
  GOOGLE_API_KEY: 'USER_TO_PROVIDE',

  // App Configuration
  APP_NAME: 'QuestionCraft BD',
  VERSION: '1.0.0',
  DRIVE_FOLDER_NAME: 'QuestionCraft BD'
};

// Export if using modules, otherwise it will be globally available
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
