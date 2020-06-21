const expect = require('chai').expect;
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const JSZip = require('jszip');
const webpackConfig = require('../../webpack.config');

describe('Exec', () =>{
  it('options with a filename, zip correctly', function (done) {
    webpack(webpackConfig({filename: 'bundle'}), (err, stats) => {
      fs.readFile(path.join(process.cwd(), 'dist/bundle.zip'), (err, data) => {
        if (err) throw err;
        JSZip.loadAsync(data).then(function (zip) {
          const content = zip.files['bundle/main.js']['_data'].compressedContent.toString('utf-8');
          expect(content.includes('console.log("test")')).to.be.true;
          done();
        });
      })
    })
  });
  
  it('options not include a filename, zip incorrect', function (done) {
    try {
      webpack(webpackConfig(), (err, stats) => {
      });
    } catch (e) {
      expect(e.message === 'filename is necessary!').to.be.true;
      done();
    }
  });
})
