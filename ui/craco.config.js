const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@core': path.resolve(__dirname, './src/core'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
};