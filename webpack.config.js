var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./assets/index'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.js|jsx$/, loaders: ['babel']}
    ]
  }
};
