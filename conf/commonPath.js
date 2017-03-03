var path = require("path"),
  rootPath = path.resolve(__dirname, '..'),
  srcPath = path.join(rootPath, 'src')

module.exports = {
  rootPath: rootPath,
  srcPath: srcPath,
  public: path.join(rootPath, 'public'),
  indexHTML: path.join(srcPath, 'index.html')
}
