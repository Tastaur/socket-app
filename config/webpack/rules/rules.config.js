const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: {
          loader: 'url-loader?limit=10240',
        },
      },
      {
        test: /\.(eot|otf|ttf|woff2?)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts',
        },
      },
    ],
  },
};
