var webpack = require('webpack');
var path = require('path');

const VENDOR_LIBS = [
  'lodash', 'redux', 'react-redux', 'react-dom',
  'react', 'react-router', 'react-router-dom', 'axios', 'redux-form'
];

module.exports = {
  entry: {
    bundle: './src/js/index.js',
    vendor: VENDOR_LIBS,
	server: './src/server.js'
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js'
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
      names: ['vendor', 'manifest'],
      chunks: ['bundle', 'vendor']
    }),
  ]
};
