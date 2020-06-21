const expect = require('chai').expect;
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const webpackPackage = fs.readFileSync(path.join(process.cwd(), 'node_modules/webpack/package.json'), 'utf-8');

describe('Webpack version', () => {
  it('not support webpack < 4 or later older', function (done) {
    try {
      const version4Package = webpackPackage.replace(/"version":\s"(.+?)"/, '"version": "3.0.0"');
      fs.writeFileSync(path.join(process.cwd(), 'node_modules/webpack/package.json'), version4Package);
      webpack(webpackConfig({filename: 'bundle'}), (err, stats) => {
      });
    } catch (e) {
      expect(e.message === 'support webpack 4 or later version').to.be.true;
      // reset webpack version
      fs.writeFileSync(path.join(process.cwd(), 'node_modules/webpack/package.json'), webpackPackage);
      done();
    }
  });
})
