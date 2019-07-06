const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  js: {
    test: /.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
  css: env => ({
    test: /\.(s*)css$/,
    use: [
      env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'sass-loader',
    ],
  }),
  html: {
    test: /\.html/,
    use: ['html-loader'],
  },
};
