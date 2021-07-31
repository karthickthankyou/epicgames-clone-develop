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
      transitionProperty: {
        width: 'width',
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover'],
    },
  },
  plugins: [],
}
