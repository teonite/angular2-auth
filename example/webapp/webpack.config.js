'use strict';
var path = require("path");
let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  cache: true,
  entry: {
    boot: './src/boot.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          plugins: [
            'angular2-annotations',
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-flow-strip-types'
          ]
        }
      },
      {
        test: /\.html$/,
        loader: 'html?minimize=false'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: './src/index.html'}
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  debug: true,
  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true,
    open: true
  }
};
