const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebPackPlugin = require('html-webpack-plugin')
require('dotenv').config();

module.exports = {
  entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js'],
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
        enforce: 'pre',
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false,
        },
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            //options: { minimize: true }
          },
        ],
      },
      {
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
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
    // new HtmlWebPackPlugin({
    //   template: './src/html/index.html',
    //   filename: './index.html',
    //   excludeChunks: ['server']
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/html/index.html',
          to: '[name][ext]',
        },
        {
          from: './src/html.js',
          to: '[name][ext]',
        },
        {
          from: './src/img',
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
  ],
};
