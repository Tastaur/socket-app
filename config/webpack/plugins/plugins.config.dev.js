const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = {
    plugins: [
        new MiniCssExtractPlugin({}),
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin({}),
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), 'src/index.html'),
            minify: {
                collapseWhitespace: false,
            },
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(process.cwd(), 'src/favicon.ico'),
                    to: path.join(process.cwd(), './build')
                },
            ],
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: { configFile: path.join(process.cwd(), 'tsconfig.json') }
        }),
    ],
};
