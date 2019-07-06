const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: paths.appIndexJs,
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.html/,
        use: ['html-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: paths.appDist,
    publicPath: '/',
    filename: './js/rip.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      favicon: `${paths.appStatic}/iip_logo.png`,
      template: paths.appHtml,
    }),
    new MiniCssExtractPlugin({
      filename: './css/rip.css',
    }),
    new Dotenv({
      path: paths.dotenv,
      safe: true,
    }),
  ],
  devServer: {
    contentBase: paths.appPublic,
    historyApiFallback: true,
    hot: true,
  },
};
