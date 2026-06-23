/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        blush: '#F3E5E3',
        champagne: '#EADACA',
        taupe: '#D5C7BC',
        'warm-white': '#FAF9F6',
        'soft-brown': '#8C7A6B',
        'dark-brown': '#4A3F35',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
