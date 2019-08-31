'use strict'
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const webpackProdConfig = merge(webpackBaseConfig, {
    mode: 'production',
    output: {
        filename: "[name].[chunkhash].js"
    },
    optimization: {
        minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
        splitChunks: {chunks: "all"}
    }
})

module.exports = webpackProdConfig
