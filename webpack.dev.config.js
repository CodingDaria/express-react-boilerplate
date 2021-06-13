const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

require('dotenv').config();

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
  },
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  optimization: {
    usedExports: true,
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    host: 'localhost',
    port: 8000,
    disableHostCheck: true,
    historyApiFallback: true,
    publicPath: '/',
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: [
      {
        context: ['/api', '/auth', '/ws', '/favicon.ico'],
        target: `http://localhost:${process.env.PORT || 8080}`,
        secure: false,
        changeOrigin: true,
        ws: process.env.ENABLE_SOCKETS || false,
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      emitWarning: true,
      failOnError: true,
      failOnWarning: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/html/index.html',
          to: '[name][ext]',
        },
        {
          from: './src/html.js',
          to: '[name][ext]',
        },
        {
          from: './src/assets/img',
          to: 'images',
        },
        {
          from: './server/public/favicon.ico',
          to: '[name][ext]',
        },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
