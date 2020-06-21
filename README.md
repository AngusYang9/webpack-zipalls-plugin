<h1 align="center" style="margin: 30px 0 35px;">webpack-zipalls-plugin</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/webpack-zipalls-plugin"><img alt="npm" src="https://img.shields.io/npm/v/webpack-zipalls-plugin"></a>
  <a href='https://coveralls.io/github/AngusYang9/webpack-zipalls-plugin'><img src='https://coveralls.io/repos/github/AngusYang9/webpack-zipalls-plugin/badge.svg?branch=master' alt='Coverage Status' /></a>
  <a href="https://www.npmjs.com/package/webpack-zipalls-plugin"><img alt="npm" src="https://img.shields.io/npm/dm/webpack-zipalls-plugin?color=orange"></a>
</p>

**Webpack plugin to zip all output files.**

## Getting Started

To begin, you'll need to install `webpack-zipalls-plugin`:

```bash
npm install webpack-zipalls-plugin -D
```

## Config

Add the plugin to your `webpack` config. For example:

**webpack.config.js**

```javascript
module.exports = {
  plugins: [
    new WebpackZipallsPlugin({
      filename: 'bundle'
    })
  ]
};
```

then the `bundle.zip` file will be in the webpack output root directory.

## License

[MIT](https://github.com/angusyang9/webpack-zipalls-plugin/blob/master/LICENSE)

