const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require('webpack-merge')

const getCommonConfig = (isProd) => ({
  resolve: {
    extensions: ['.js', '.tsx', 'ts', '.json']
  },
  entry: { app: "./src/index" },
  module: {
    rules: [{
      test: /\.(js|jsx|ts|tsx)$/,
      use: { loader: 'babel-loader' },
      exclude: /node_modules/
    },
    {
      test: /\.(ts|tsx)?$/,
      use: { loader: 'ts-loader' },
      exclude: /node_modules/
    },
    {
      test: /\.s[ac]ss$/,
      use: [...(isProd ? [MiniCssExtractPlugin.loader] : []), "style-loader", "css-loader", "sass-loader"],
      exclude: /node_modules/
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin()
  ],
})

module.exports = (env) => {
  const isProd = env?.production
  const _env = isProd ? 'production' : 'development'
  const config = require(`./webpack.${_env}`)
  
  config.mode = _env

  return merge(getCommonConfig(isProd), config)
}