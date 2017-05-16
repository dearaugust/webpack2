
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  //入口
  output: {
    path: path.resolve(__dirname,"build"),
    filename: "bundle.js",
    publicPath: 'build/'
  },
  // watch: true,               //监听
  // devtool: "source-map",     // 生成 .map 文件
  module: {  //入口到出口中间环节,打包规则
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "postcss-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['postcss-loader','less-loader'] //先执行less-loader,再执行postcss-loader
        })
      },
      { test: /\.(jpe?g|png)$/,use: 'file-loader'},
      {
        test:require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      filename: path.resolve(__dirname,'index.html')
    })
  ]
}
