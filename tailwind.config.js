/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // colori principali
        primary: "#fffcf7",
        primaryDarker: "#eae8e4",
        accent: "#242d1b",
      },
      fontFamily: {
        main: ["Barlow Condensed", "sans-serif"],
        secondary: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
};
