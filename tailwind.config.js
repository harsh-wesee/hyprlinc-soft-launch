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
        },
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'move-dots': 'moveDots 3s linear infinite',
        'slide': 'slide 20s linear infinite',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        'heading': ['72px', {
          lineHeight: '82.8px',
          letterSpacing: '-1.8px',
        }],
        'subheading': ['48px', {
          lineHeight: '48px',
          letterSpacing: '-0.96px',
        }],
        'content': ['18px', {
          lineHeight: '28px',
        }],
      },
      fontWeight: {
        heading: '700',
        subheading: '700',
        content: '400',
      },
    }
  },
  plugins: [],
}