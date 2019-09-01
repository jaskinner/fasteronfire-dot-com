'use strict'
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        filename: "[name].[chunkhash].js",
        // publicPath: "/dist"
    },
    optimization: {
        minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
        splitChunks: {
            chunks: 'all'
        }
    }
})

module.exports = prodWebpackConfig
