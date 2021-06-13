const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // uglifyjs-webpack-plugin@1.3.0

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
  },
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      () => ({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new UglifyJsPlugin({
        exclude: /node_modules/,
        uglifyOptions: {
          compress: {
            warnings: false,
          },
          sourceMap: true,
        },
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
    ],
  },
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        // Loads CSS into a file when you import it via Javascript. Rules are set in MiniCssExtractPlugin
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
        sideEffects: true,
      },
      {
        // Loads images into CSS and Javascript files
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader', 'file-loader'],
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
      chunkFilename: 'css/[id].css',
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
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
