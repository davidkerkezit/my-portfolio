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
    },
  },
  plugins: [],
};
