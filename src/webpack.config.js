const path = require('path');
const WebpackZipallsPlugin = require('../lib/index');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'main.js'
  },
  mode: 'production',
  plugins: [
    new WebpackZipallsPlugin({
      filename: 'bundle'
    })
  ]
}
