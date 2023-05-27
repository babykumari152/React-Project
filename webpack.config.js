const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/App.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react.js',
    library: 'React',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{ test: /\.js$/,
    exclude: /node_modules/,
     use:{loader: 'babel-loader' ,options: {
        presets: ["@babel/preset-env", "@babel/preset-react"]
      }}
    }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[hash].[ext]', // Rename the file with a hash for cache-busting
            outputPath: 'images/', // Output path for the images
            publicPath: '/' // Public path to be used in the HTML file
          }
        },
      }],
     
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
