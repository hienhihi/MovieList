const path = require('path');

module.exports= {
  entry: './client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist'),
  },
  module : {
    rules: [
      {
        test: /\.m?js$|\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
}

// module.exports = {
//   entry: './src/index.tsx',
//   output: {
//       path: path.join(__dirname, 'dist'),
//       filename: 'bundle.js',
//       publicPath: '/public/'
//   }\