module.exports = {
  style: {
    postcss: {
      // eslint-disable-next-line global-require
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
}
