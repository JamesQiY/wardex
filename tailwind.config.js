const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        truegray: colors.trueGray,
        lightBlue: colors.sky,
      },
      fontFamily:{
        body: ['Helvetica']
      },
      minWidth: {
        '100': '100px',
        '250': '250px',
        '300': '300px',
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
        '500': '500px',
      },
      flex: {
        nostrink: '1 0 auto',
        one: '1'
      },
      zIndex:{
        '-5': '-5',
        '-10': '-10',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
