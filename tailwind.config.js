/* eslint-disable global-require */
const colors = require('tailwindcss/colors')

// #0074e4
// hsl(209, 100%, 45%)

const primaryPallete = {
  DEFAULT: 'hsl(209, 100%, 45%)',
  25: 'hsl(209, 100%, 98%)',
  50: 'hsl(209, 100%, 92%)',
  100: 'hsl(209, 100%, 85%)',
  200: 'hsl(209, 100%, 75%)',
  300: 'hsl(209, 100%, 65%)',
  400: 'hsl(209, 100%, 55%)',
  500: 'hsl(209, 100%, 45%)',
  600: 'hsl(209, 100%, 33%)',
  700: 'hsl(209, 100%, 20%)',
  800: 'hsl(209, 100%, 10%)',
  900: 'hsl(209, 100%, 04%)',
}

const grayPallete = {
  DEFAULT: 'hsl(209, 10%, 45%)',
  25: 'hsl(209, 10%, 98%)',
  50: 'hsl(209, 10%, 92%)',
  100: 'hsl(209, 10%, 85%)',
  200: 'hsl(209, 10%, 75%)',
  300: 'hsl(209, 10%, 65%)',
  400: 'hsl(209, 10%, 55%)',
  500: 'hsl(209, 10%, 45%)',
  600: 'hsl(209, 10%, 33%)',
  700: 'hsl(209, 10%, 20%)',
  800: 'hsl(209, 10%, 10%)',
  900: 'hsl(209, 10%, 04%)',
}

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
        primary: primaryPallete,
        gray: grayPallete,
      },
      transitionProperty: {
        width: 'width',
      },
      height: {
        'screen/2': '50vh',
      },
      minHeight: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
        screen: '100vh',
      },
      maxWidth: {
        xxs: '10rem',
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
