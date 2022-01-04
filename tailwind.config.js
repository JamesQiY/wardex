const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        body: ['Helvetica']
      },
      minWidth: {
        '100': '100px',
        '250': '250px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '600': '600px',
        '1/4': '25%',
        '1/2': '50%',
        'sm' : '24rem',
        'lg' : '32rem',
        'xl' : '36rem',
      },
      maxWidth: {
        '100': '100px',
        '250': '250px',
        '350': '350px',
        '500': '500px',
      },
    },
  },
  plugins: [],
}
