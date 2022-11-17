const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');


module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'src/index.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(process.cwd(), 'src/favicon.ico'),
          to: path.join(process.cwd(), './build'),
        },
      ],
    }),
  ],
};