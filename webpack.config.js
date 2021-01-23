const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  // resolve: {
  //   extensions: ['.js']
  // },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/js'),
  },
}
