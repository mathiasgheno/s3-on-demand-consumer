const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.bundle.js',
    libraryTarget: 'system',
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
  ],
  externals: {
    "react": "React",
  }
}
