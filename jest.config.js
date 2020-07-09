const path = require('path')

const source_dir = path.resolve(__dirname, 'src/tests/setupTests.js');

module.exports = {
  verbose: true,
  setupFiles: [
    source_dir,
  ]
};