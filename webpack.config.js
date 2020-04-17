const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
              ],
            },
            {
              test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
          }, {
              test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              include: [/node_modules/],
              loader: 'file-loader'
          },
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
}