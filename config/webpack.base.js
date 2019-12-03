'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const vars = require('./props/vars')

function resolve(dir) {
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
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Faster on Fire | Lessons Learned',
            template: './src/index.html',
            filename: 'index.html',
            meta: {
                //TODO: Add date
                'description': 'The Official Website of Raleigh, NC Pop Punk band Faster on Fire, stream Lessons Learned on all major platforms November 11, 2019',
                // TODO: Maybe change this
                'theme-color': '#000',
                'robots': vars.meta.bots.prod,
                'googlebot': vars.meta.bots.prod,
                'rating': 'General'
            }
        }),
        new CopyPlugin([
            {from: './src/sitemap.xml', to: './'}
        ]),
        new FaviconsWebpackPlugin('./src/favicon.svg')
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
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
                            // mozjpeg: {
                            //     progressive: true,
                            //     quality: 65
                            // },
                            // // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: true,
                            },
                            // pngquant: {
                            //     // quality: 65-80,
                            //     speed: 11
                            // },
                            // gifsicle: {
                            //     interlaced: false,
                            // },
                            // // the webp option will enable WEBP
                            // webp: {
                            //     quality: 75
                            // }
                        }
                    },
                ],
                include: [resolve('src/images')]
            }
        ]
    }
};
