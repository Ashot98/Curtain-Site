var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'lodash', 'redux', 'react-redux', 'react-dom',
  'react', 'react-router', 'react-router-dom', 'axios', 'redux-form'
];

module.exports = {
  entry: {
    bundle: './src/js/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react', 'stage-1']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/index.html'
    })
  ]
};
