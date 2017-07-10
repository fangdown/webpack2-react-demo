const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    })
  ],
  // devtool: "source-map", // 配置生成Source Maps的选项
  devServer: {
    contentBase: './public',
    port: '9000',
    inline: true,
    historyApiFallback: true,
    hot: true
  }
}