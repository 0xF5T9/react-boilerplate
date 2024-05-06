/**
 * @file webpack.config.js
 * @description Webpack production configuration file.
 */

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin'); // CopyPlugin: Copy files.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // HtmlWebpackPlugin: Generate HTML files from template files.

console.log('Using Webpack production configuration ...');

module.exports = {
    entry: {
        style: './sources/js/style.js',
        index: './sources/js/entry.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'), // Build directly to 'public' folder.
        publicPath: '/',
        clean: true,
    },
    mode: 'production',
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
        // Generate 'index.html' file.
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
        // Copy static assets to 'public' folder.
        new CopyPlugin({
            patterns: [{ from: 'sources/static' }],
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
