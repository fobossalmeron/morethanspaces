const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  plugins: [
     new UglifyJSPlugin(),
     new webpack.DefinePlugin({
      'process.env': {
         'NODE_ENV': JSON.stringify('production')
       }
     })
  ]
});
