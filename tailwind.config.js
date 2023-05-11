/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#4B4E83',
        'white': '#EDEDED',
        'purple': '#7691CB',
        'green': '#CADD3C',
        'dark-blue': '#1ABFDA',
        'light-blue': '#5ECBE1'
      },
    },
  },
  plugins: [],
}
