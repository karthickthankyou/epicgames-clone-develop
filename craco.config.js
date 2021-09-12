const path = require('path')

module.exports = {
  style: {
    postcss: {
      // eslint-disable-next-line global-require
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    alias: {
      '@components': path.resolve('src/components'),
      '@atoms': path.resolve('src/components/atoms'),
      '@molecules': path.resolve('src/components/molecules'),
      '@organisms': path.resolve('src/components/organisms'),
      '@pages': path.resolve('src/components/pages'),
      '@hooks/index': path.resolve('src/hooks'),
      '@utils': path.resolve('src/utils'),
      '@store': path.resolve('src/store'),
      '@assets': path.resolve('src/assets'),
      '@epicfirebase': path.resolve('src/firebase'),
      '@epictypes': path.resolve('src/types'),
    },
  },
}
