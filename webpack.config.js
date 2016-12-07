const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
  entry: './src/app.js', 
  output: {
    path: './build',
    filename: 'main.js'
  },
  devtool: 'source-map', 
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }), 
    new ExtractTextPlugin('main.css')
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }], 
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']//,
        // cacheDirectory: true,
        // plugins: ['transform-runtime']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  }
};