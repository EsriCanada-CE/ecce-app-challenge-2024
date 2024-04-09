/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "raisin": "#161925",
      "delft": "#23395B",
      "ucla": "#406E8E",
      "powder": "#3A566A"
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {}
  },
  plugins: [],
}

