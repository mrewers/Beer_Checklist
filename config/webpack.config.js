const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
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
          ? [
              new CompressionPlugin({
                filename: '[path].br[query]',
                algorithm: 'brotliCompress',
                test: /\.(js|css|html|svg)$/,
                compressionOptions: { level: 11 },
                threshold: 10240,
                minRatio: 0.8,
                deleteOriginalAssets: false,
              }),
              new OptimizeCSSAssetsPlugin({}),
              new UglifyJsPlugin({}),
            ]
          : [],
    },
    output: {
      chunkFilename:
        arvg.mode === 'production'
          ? 'js/[name].[contenthash].js'
          : 'js/[name].js',
      path: paths.appDist,
      publicPath: '/',
      filename:
        arvg.mode === 'production' ? 'js/rip.[contenthash].js' : 'js/rip.js',
      sourceMapFilename: 'js/rip.js.map',
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsFilename: './stats.json',
      }),
      new CopyPlugin([
        {
          from: `${paths.appStatic}/og.png`,
          to: `${paths.appDist}/static/og.png`,
        },
      ]),
      new Dotenv({
        path: paths.dotenv,
        safe: true,
      }),
      new HtmlWebpackPlugin({
        favicon: `${paths.appStatic}/favicon.png`,
        template: paths.appHtml,
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        moduleFilename: ({ name }) => `${name.replace('/js/', '/css/')}.css`,
      }),
    ],
    devServer: {
      contentBase: paths.appPublic,
      historyApiFallback: true,
      hot: true,
    },
  };
};
