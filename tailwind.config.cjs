/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple100: "#E0D7FF",
        purple500: "#6A4EC7",
        yellow100: "#FFF7CC",
        yellow500: "#F9C22E",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
