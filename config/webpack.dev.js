'use strict'
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: 'dist',
        host: '0.0.0.0'
    }
})

module.exports = devWebpackConfig
