'use strict'
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sourceMapContents: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|JPG|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            fallback: 'file-loader',
                            name: 'images/[name].[ext]'
                        }
                    },
                    {
                        loader: "image-webpack-loader"
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            title: "jontriestocode()",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin({
            // dry: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new FaviconsWebpackPlugin('./src/favicon.svg')
    ],
}
