const path = require('path');

module.exports = {
    entry: './sources/js/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets/js/generated'),
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
            // Ensures hot reloading works even when the bundle.js isn't in the same folder as index.html
            writeToDisk: true,
        },
    },
};
