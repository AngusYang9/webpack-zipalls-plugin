const path = require('path');

module.exports = function (options) {
  delete require.cache[require.resolve('../lib/index.js')];
  delete require.cache[require.resolve(path.resolve(process.cwd(), 'node_modules/webpack/package.json'))];
  const WebpackZipallsPlugin = require('../lib/index');
  
  return {
    entry: './src/index.js',
    output: {
      path: path.join(process.cwd(), 'dist'),
      filename: 'main.js'
    },
    mode: 'production',
    plugins: [
      new WebpackZipallsPlugin(options)
    ]
  }
}
