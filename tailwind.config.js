/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "yellow-bg":"#D1FD0A",
        "white-bg":"#E8E8E8",
        "black-bg":"#070707",
        
      },
      fontFamily:{
        "humane-black":"humane-black",
        "bruno-ace":"Bruno Ace",
        "days-one":"Days One",
        "allison":"Allison",
        "sansation":"sansation",
        "sansation-light":"sansation-light",
      }
    },
  },
  plugins: [],
} 

