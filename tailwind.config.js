/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#10B981",
        "secondary": "#FBBF24",
        "accent": "#059669",
        "background-light": "#f2f4f1",
        "background-dark": "#22252a",
      },
      fontFamily: {
        "display": ["Public Sans", "sans-serif"],
        "bengali": ["Hind Siliguri", "sans-serif"],
        "math": ["Times New Roman", "serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
