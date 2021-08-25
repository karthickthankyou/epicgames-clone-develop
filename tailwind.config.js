/* eslint-disable global-require */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '-50': -50,
      '-40': -40,
      '-30': -30,
      '-20': -20,
      '-10': -10,
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      auto: 'auto',
    },
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
      },
      transitionProperty: {
        width: 'width',
      },
      height: {
        'screen/2': '50vh',
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'group-hover'],
      visibility: ['hover', 'group-focus', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
