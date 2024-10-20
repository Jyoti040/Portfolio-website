/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        black:'#0b0c10',
        darkBlue:'#1f2833',
        gray:'#c5c6c7',
        lightBlue:'#66fcf1',
        peacockGreen:'#45a29e'
      }
    },
  },
  plugins: [],
}

