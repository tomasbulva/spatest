var webpack = require('webpack')

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:5000/public/',
    filename: 'bundle.js',
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
    'classnames': 'classnames'
  }
}
