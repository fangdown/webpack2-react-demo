const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/build/',
    filename: "[name]-[hash:5].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?modules"
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),// 为组件分配 ID
    new webpack.optimize.UglifyJsPlugin(), // 压缩js代码
    new ExtractTextPlugin('[name]-[hash:5].css') // 分离js和css文件
  ]
}