/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#0A192F',
        cardDark: '#112240',
        cyanNeon: '#64FFDA',
        indigoNeon: '#6C63FF',
        coralRed: '#FF6B6B',
        textPrimary: '#CCD6F6',
        textSecondary: '#8892B0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
