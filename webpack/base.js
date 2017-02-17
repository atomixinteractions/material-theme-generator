const { resolve } = require('path')
const webpack = require('webpack')

const publicPath = resolve(__dirname, '..', 'docs')

module.exports = {
  name: 'material-theme-generator',
  context: resolve(__dirname, '..', 'app'),
  target: 'web',
  entry: {
    themeGenerator: './index.js',
  },
  output: {
    path: resolve(__dirname, '..', 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.md'],
    alias: {
    },
    modules: [
      'app',
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
  ],
}
