const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const paths = require('./paths');
const rules = require('./rules');

module.exports = (env, arvg) => {
  return {
    devtool: arvg.mode === 'production' ? 'source-map' : 'eval',
    entry: paths.appIndexJs,
    module: {
      rules: [rules.css(arvg.mode), rules.html, rules.js],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    optimization: {
      minimizer:
        arvg.mode === 'production'
          ? [new UglifyJsPlugin({}), new OptimizeCSSAssetsPlugin({})]
          : [],
    },
    output: {
      path: paths.appDist,
      publicPath: '/',
      filename: 'js/rip.js',
      sourceMapFilename: 'js/rip.js.map',
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsFilename: './stats.json',
      }),
      new Dotenv({
        path: paths.dotenv,
        safe: true,
      }),
      new HtmlWebpackPlugin({
        favicon: `${paths.appStatic}/iip_logo.png`,
        template: paths.appHtml,
      }),
      new MiniCssExtractPlugin({
        filename:
          arvg.mode === 'production' ? 'css/rip.min.css' : 'css/rip.css',
      }),
    ],
    devServer: {
      contentBase: paths.appPublic,
      historyApiFallback: true,
      hot: true,
    },
  };
};
