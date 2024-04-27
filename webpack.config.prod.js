/**
 * @file webpack.config.js
 * @description Webpack production configuration file.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('Using Webpack production configuration ...');

module.exports = {
    entry: {
        style: './sources/js/style.js',
        index: './sources/js/entry.js',
        index404: './sources/js/entry404.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public/assets/generated'), // *
        clean: true,
    },
    mode: 'production', // *
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
                                localIdentName: '[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // Enable minify for generated html files.
        new HtmlWebpackPlugin({
            filename: `${path.resolve(__dirname, 'public')}\\index.html`,
            template: './sources/html/index.html',
            chunks: ['index', 'style'],
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: false,
                removeComments: true,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkTypeAttributes: false,
                useShortDoctype: false,
            },
        }),
        new HtmlWebpackPlugin({
            filename: `${path.resolve(__dirname, 'public')}\\404.html`,
            template: './sources/html/404.html',
            chunks: ['index404', 'style'],
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: false,
                removeComments: true,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkTypeAttributes: false,
                useShortDoctype: false,
            },
        }),
    ],
    // Optimizations:
    performance: {
        // Increase entry point size.
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    optimization: {
        // Enable chunk spliting.

        splitChunks: {
            maxSize: 250000,
            chunks: 'all',
        },
    },
};
