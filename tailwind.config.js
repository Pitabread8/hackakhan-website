/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#3A4852',
        'white': '#EDEDED',
        'red': '#F26644',
        'yellow': '#E8B12D',
        'dark-blue': '#5FB3B1',
        'light-blue': '#98D6D3'
      },
    },
  },
  plugins: [],
};
