/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveDots: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(33%)'
          }
        }
      },
      animation: {
        'move-dots': 'moveDots 3s linear infinite'
      }
    }
  },
  plugins: [],
}