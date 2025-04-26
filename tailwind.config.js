/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Dark blue (indigo-800) similar to IUH's blue
        secondary: '#e11d48', // Red accent color
      },
    },
  },
  plugins: [],
} 