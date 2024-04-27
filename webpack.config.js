/**
 * @file webpack.config.js
 * @description Webpack development configuration file.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('Using Webpack development configuration ...');

module.exports = {
    entry: {
        style: './sources/js/style.js',
        index: './sources/js/entry.js',
        index404: './sources/js/entry404.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName:
                                    // '[path][name]__[local]--[hash:base64:5]',
                                    '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 8080,
        hot: true,
        open: true,
        devMiddleware: {
            writeToDisk: false,
        },
        watchFiles: ['sources/**/*'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './sources/html/index.html',
            chunks: ['index', 'style'],
        }),
        new HtmlWebpackPlugin({
            template: './sources/html/404.html',
            filename: '404.html',
            chunks: ['index404', 'style'],
        }),
    ],
};
