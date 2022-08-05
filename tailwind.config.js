/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'termina': ['termina', 'sans-serif']
    },
    extend: {
      fontFamily: {
        'sans': ['termina', 'sans-serif'],
      },
      colors: {
        'shapeshift': '#14e39d',
        'mainDark': '#141414',
      }
    },
  },
  plugins: [],
}
