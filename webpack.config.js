const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
              test: /\.(sa|sc|c)ss$/i,
              use: [
                  {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                          hmr: process.env.NODE_ENV === 'development',
                      },
                  },
                'css-loader',
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
      }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}