const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.
module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './client/src/js/index.js',
      install: './client/src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/src/index.html',
        title: 'PWA Text Editor',
      }),
      new InjectManifest({
        swSrc: './client/src/sw.js',
        swDest: 'service-worker.js',
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'PWA Text Editor',
        short_name: 'TextEditor',
        description: 'A progressive web application for text editing',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('client/src/assets/icons/icon.png'), 
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
