'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new CleanWebpackPlugin({
            // dry: true
        }),
        new HtmlWebpackPlugin({
            title: "Perspectives Conference 2019",
            template: "./src/index.html",
            filename: "index.html",
            // favicon: "./src/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new FaviconsWebpackPlugin('./src/favicon.svg')
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ],
                include: [resolve('src'), resolve('node_modules/bootstrap'), resolve('node_modules/aos'), resolve('node_modules/animate.css')]
            },
            {
                test: /\.(png|jpg|JPG|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: 'images/[name].[ext]'
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            // bypassOnDebug: true,
                            // disable: true
                        }
                    },
                ],
                include: [resolve('src/images')]
            }
        ]
    }
};
