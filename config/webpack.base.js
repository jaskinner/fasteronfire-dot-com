'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const vars = require('./props/vars')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = env => {
    const isProduction = env.production === true;

    return {
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
                template: './src/index.pug',
                filename: 'index.html',
                meta: {
                    //TODO: Add date
                    'description': 'The Official Website of Raleigh, NC Pop Punk band Faster on Fire, stream Lessons Learned on all major platforms October XX, 2019',
                    // TODO: Maybe change this
                    'theme-color': '#000',
                    'robots': isProduction ? vars.meta.bots.prod : vars.meta.bots.dev,
                    'googlebot': isProduction ? vars.meta.bots.prod : vars.meta.bots.dev,
                    'rating': 'General'
                }
            }),
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
                            options: {}
                        },
                    ],
                    include: [resolve('src/images')]
                },
                {
                    test: /\.pug$/,
                    use: ["pug-loader"]
                }
            ]
        }
    }
};
