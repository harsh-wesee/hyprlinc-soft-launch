/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveDots: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(33%)",
          },
        },
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      animation: {
        "move-dots": "moveDots 3s linear infinite",
        slide: "slide 30s linear infinite",
        pulse: "pulse 1.5s infinite",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        heading: [
          "72px",
          {
            lineHeight: "82.8px",
            letterSpacing: "-1.8px",
          },
        ],
        subheading: [
          "48px",
          {
            lineHeight: "48px",
            letterSpacing: "-0.96px",
          },
        ],
        content: [
          "18px",
          {
            lineHeight: "28px",
          },
        ],
      },
      fontWeight: {
        heading: "700",
        subheading: "700",
        content: "400",
      },
    },
  },
  plugins: [],
};
