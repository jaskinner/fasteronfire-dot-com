'use strict'
const merge = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.config')

const webpackDevConf = merge(webpackBaseConf, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: 'dist',
        host: '0.0.0.0'
    }
})

module.exports = webpackDevConf