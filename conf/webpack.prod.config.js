var webpack = require('webpack'),
  path = require('path'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
  commonPath = require('./commonPath'),
  config = require('./base')

config.output.filename = '[name].[chunkhash:6].js'
config.output.chunkFilename = '[id].[chunkhash:6].js'

config.devtool = 'cheap-source-map'

config.module.rules.push({
  test: /\.css$/,
  use: ExtractTextWebpackPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader?minimize',
    publicPath: path.join(commonPath.public, 'assets/styles')
  })
})

config.plugins[0].options.minify = { removeComments: true, collapseWhitespace: true }

config.plugins.push(
  new CopyWebpackPlugin([
    { from: 'src/assets', to: 'assets' },
    { context: commonPath.rootPath, from: 'static/*', ignore: ['*.md'] }
  ]),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor']
  }),
  new ExtractTextWebpackPlugin({
    filename: '[name].[contenthash:6].css',
    allChunks: true
  })
)

module.exports = config
