const { resolve } = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Package = require('../package')
const commonConfig = require('./base')

const publicPath = resolve(__dirname, '..', 'docs')

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
  entry: {
    themeGenerator: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './index.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
    }),
    new HtmlWebpackPlugin({
      title: Package.title,
      cache: true,
      showErrors: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
})
