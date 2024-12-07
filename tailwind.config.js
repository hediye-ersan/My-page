/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        pink: '#E92577',
        'dark-bg1': '#2A262B',
        'dark-bg2': '#484148',
        'dark-text': '#FFFFFF'
        
        
      },
      screens:{
        sm: "640px",
        md:"760px",
        
      }
    },
  },
  plugins: [],
}

