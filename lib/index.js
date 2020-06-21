const path = require('path')
const JSZip = require('jszip')
const { RawSource } = require('webpack-sources')
const zip = new JSZip()

module.exports = class WebpackZipallsPlugin{
  constructor(options){
    this.options = options || {}
  }
  apply(compiler){
    if(!this.options.filename) {
      throw new Error('filename is necessary!')
    }
    
    compiler.hooks.emit.tapAsync('WebpackZipallsPlugin', (compilation, callback) => {
      const folder = zip.folder(this.options.filename);
      for(let filename in compilation.assets){
        const source = compilation.assets[filename].source();
        folder.file(filename, source);
      }
      
      zip.generateAsync({
        type: 'nodebuffer'
      }).then((content) => {
        const outputPath = path.join(
          compilation.options.output.path,
          this.options.filename + '.zip'
        )
        const outputRelativePath = path.relative(
          compilation.options.output.path,
          outputPath
        )
        
        compilation.assets[outputRelativePath] = new RawSource(content);
        callback()
      })
    })
  }
}