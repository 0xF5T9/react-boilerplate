/**
 * @file webpack.config.ts
 * @description Webpack production configuration file.
 */

import path from 'path';
import CopyPlugin from 'copy-webpack-plugin'; // CopyPlugin: Copy files.
import HtmlWebpackPlugin from 'html-webpack-plugin'; // HtmlWebpackPlugin: Generate HTML files from template files.
import Dotenv from 'dotenv-webpack'; // Dotenv: Enable support for environment files.

console.log('Using Webpack production configuration ...');

export default {
    target: ['web', 'es5'],
    entry: {
        style: './sources/js/style.ts',
        index: './sources/js/entry.tsx',
    },
    output: {
        filename: '[name].[contenthash].bundle.js', // [contenthash] used to purge caches on file content changes.
        path: path.resolve(__dirname, 'public'), // Build directly to 'public' folder.
        publicPath: '/',
        clean: true,
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
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
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        // Generate 'index.html' file.
        new HtmlWebpackPlugin({
            filename: `${path.resolve(__dirname, 'public')}/index.html`,
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
        // Enable support for environment files.
        new Dotenv({
            // path: './.env.production', // Use specific environment file.
        }),
    ],
    // Optimizations:
    performance: {
        // Increase entry point size.
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
        hints: false, // Disable hints for now.
    },
    optimization: {
        // Enable chunk spliting.
        splitChunks: {
            maxSize: 250000,
            chunks: 'all',
        },
    },
};
