/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary: '#2E8A99',
        input: '#9AD0C2',
        dark: '#0f172a',
        secondary:'#64748b',
      },
      screens:{
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}

