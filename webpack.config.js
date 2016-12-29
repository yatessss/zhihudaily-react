/**
 * Created by yatessss on 16/11/18.
 */
var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.js')
    ],
    vendors: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/, // Only .css files
      loader: "style-loader!css-loader!postcss-loader"
    }, {
      test: /\.scss$/,
      loader: 'style!css!postcss-loader!sass'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }, {
      test: /\.woff$/,
      loader: 'url?limit=100000'
    }]
  },
  postcss: [require('postcss-px2rem')({
    baseDpr: 1,             // base device pixel ratio (default: 2)
    threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
    remVersion: true,       // whether to generate rem version (default: true)
    remUnit: 37.5,            // rem unit value (default: 75)
    remPrecision: 3         // rem precision (default: 6)
  })],
  autoprefixer: {
    browsers: ["Android >= 2.3", "iOS >= 4"], //, "ChromeAndroid > 1%"
    cascade: false  // 不美化输出 css
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = config;
