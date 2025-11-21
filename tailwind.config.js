/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#151412",
        "orange-light": "#F36C38",
        "green-light": "#C5FF41",
      },
      keyframes: {
        pulseRing: {
          "0%": { opacity: 1 },
          "70%": { opacity: 0.8 },

          "100%": { opacity: 0 },
        },
      },
      animation: {
        pulseRing:
          "pulseRing 900ms cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
      },
    },
  },
  plugins: [],
};
