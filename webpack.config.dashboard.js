/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const package = require('./package.json')

const { EsbuildPlugin } = require('esbuild-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entryPoints = package.nodecg.dashboardPanels.reduce((entries, panel) => {
  const name = panel.file.split('.')[0]

  return {
    ...entries,
    [name]: `./src/dashboard/scripts/${name}.js`,
  }
}, {})

const createTemplate = name =>
  new HtmlWebpackPlugin({
    filename: `${name}.html`,
    chunks: ['vendor', name],
    template: './src/dashboard/panel-template.html',
  })

const config = {
  entry: entryPoints,

  output: {
    filename: '[name].js',
    path: path.resolve('./dashboard'),
  },

  plugins: [
    new CleanWebpackPlugin(),
    ...Object.keys(entryPoints).map(createTemplate),
  ],
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
      new EsbuildPlugin({
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
