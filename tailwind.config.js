/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          navy: '#0F2C59',
          deep: '#0A192F',
          darkBg: '#070F1E',
          darkSurface: '#0F223D',
          darkCard: '#132A4A',
          teal: '#0D9488',
          tealLight: '#14B8A6',
          tealGlow: '#2DD4BF',
          mint: '#10B981',
          textDark: '#F8FAFC',
          textMuted: '#94A3B8',
          border: '#1E3A5F',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        dari: ['Vazirmatn', '"Noto Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 30px -10px rgba(13, 148, 136, 0.3)',
        'teal-glow': '0 0 25px rgba(20, 184, 166, 0.25)',
      }
    },
  },
  plugins: [],
}
