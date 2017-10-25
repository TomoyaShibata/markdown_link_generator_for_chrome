const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const IS_PRODUCTION = process.env.NODE_ENV === 'production'
console.log(`IS_PRODUCTION: ${IS_PRODUCTION}`)

module.exports = {
  entry: './popup.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: IS_PRODUCTION ? [
    new UglifyJSPlugin()
  ] : [],
  module : {
    rules : [
      {
        test: /\.css/,
        loaders: [
          'style-loader', 
          {
            loader: 'css-loader'
          }
        ]
      },
    ]
  }
}
