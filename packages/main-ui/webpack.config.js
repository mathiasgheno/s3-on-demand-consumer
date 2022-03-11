const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  entry: {
    index: './src/index.js',
    'module-a': './node_modules/module-a',
  },
  devServer: {
    port: 3010,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      API_HOST: 'http://localhost:3020',
    })
  ]
}
