const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "baseUrl": path.resolve(__dirname, './.'),
    },
  },
};