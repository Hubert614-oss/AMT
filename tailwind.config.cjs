/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 on active le mode dark via une classe
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}