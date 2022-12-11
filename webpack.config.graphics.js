/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const package = require('./package.json')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const entryPoints = package.nodecg.graphics.reduce((entries, graphic) => {
  const name = graphic.file.split('.')[0]

  return {
    ...entries,
    [name]: `./src/graphics/${name}.tsx`,
  }
}, {})

const createTemplate = (name) =>
  new HtmlWebpackPlugin({
    filename: `${name}.html`,
    chunks: ['vendor', name],
    template: './src/graphics/index.html',
  })

const config = {
  entry: entryPoints,

  output: {
    path: path.resolve('./graphics'),
    publicPath: `/bundles/${package.name}/graphics/`,
    filename: 'bundle/[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(webm|mp4|flac|eot|ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],

    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'bundle/[name].[contenthash].css' }),
    ...Object.keys(entryPoints).map(createTemplate),
  ],

  devtool: 'source-map',
}

const production = {
  ...config,
  mode: 'production',

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          minSize: 0,
          minChunks: 2,
        },
      },
    },

    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'chrome68',
        css: true,
      }),
    ],
  },
}

const development = {
  ...config,
  mode: 'development',
}

module.exports =
  process.env.NODE_ENV === 'development' ? development : production
