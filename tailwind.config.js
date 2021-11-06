const resolveConfig = require('tailwindcss/resolveConfig')
const colors = require('tailwindcss/colors')
const lineClamp = require('@tailwindcss/line-clamp')
const aspectRatio = require('@tailwindcss/aspect-ratio')

const tailwindConfig = {
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
      minHeight: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
        screen: '100vh',
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'group-hover'],
      visibility: ['hover', 'group-focus', 'group-hover'],
    },
  },
  plugins: [lineClamp, aspectRatio],
}

module.exports = tailwindConfig
module.exports.fullConfig = resolveConfig(tailwindConfig)

// corePlugins: {},
// presets: {},
// variantOrder: {},
// prefix: '',
// important: false,
// separator: '',
