var webpack = require('webpack'),
  path = require("path"),
  commonPath = require('./commonPath'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
  config = require('./base')

config.devtool = 'cheap-eval-source-map'

config.entry.index = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client?reload=true',
  'webpack/hot/only-dev-server',
  path.join(commonPath.rootPath, 'mock/index.js'),
  path.join(commonPath.srcPath, 'index.js')
]

config.output.filename = '[name].js'
config.output.chunkFilename = '[id].js'
config.output.publicPath = '/'

config.module.rules.push({
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
})

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new BrowserSyncPlugin({
    host: '127.0.0.1',
    port: 9090,
    proxy: 'http://127.0.0.1:9000/',
    logConnections: false,
    notify: false
  }, {
    reload: false
  })
)

config.devServer = {
  contentBase: commonPath.public,
  stats: {
    colors: true
  },
  historyApiFallback: true,
  inline: true,
  hot: true,
  port: 9000
}

module.exports = config
