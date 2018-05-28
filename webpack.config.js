const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.jsx'
  },

  output: {
    path: path.resolve(__dirname, 'graphics'),
    publicPath: '/bundles/nodecg-yendraws/graphics/',
    filename: 'bundle/[name].[hash].js',
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: modulePath => (
        /node_modules/.test(modulePath) &&
        !/twitchie/.test(modulePath)
      ),
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      }],
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      }],
    }, {
      test: /\.(eot|ttf|otf|woff|woff2)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          context: path.resolve(__dirname, 'src'),
          name: 'assets/[path][name].[ext]',
        }
      }],
    }, {
      test: /\.s?css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [
              autoprefixer(),
            ],
          },
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: ['node_modules'],
            sourceMap: true,
          },
        },
      ],
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            context: path.resolve('./src/'),
            name: 'assets/[path][name].[ext]',
          }
        },
        {
          loader: 'img-loader',
          options: {
            optipng: false,
            pngquant: {
              floyd: 0.5,
              speed: 2,
            },
          },
        },
      ]
    }, {
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-sprite-loader',
        },
        {
          loader: 'img-loader',
          options: {
            svgo: {
              plugins: [
                { removeTitle: true },
                { convertPathData: false },
              ],
            },
          },
        },
      ],
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle/[name].[hash].css',
      chunkFilename: 'bundle/[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        extractComments: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
}
