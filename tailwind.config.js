/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : '#222224',
        detail: '#FAFE00',
        secondary: '#FAFAFA',
        Border: '#eee2',

      },
      fontFamily: {
        "Amsterdam" : ["New Amsterdam", "sans-serif"],
        "Roboto" : ["Roboto", "sans-serif"],
        
      }
    },
  },
  plugins: [],
}

