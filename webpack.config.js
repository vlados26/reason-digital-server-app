const path = require('path');

module.exports = {
    node: {
        fs: 'empty',
        net: 'empty',
    },
    mode: 'development',
    entry: {
        app: ['@babel/polyfill', './server/server.js'],
    },
    output: {
        filename: 'app.bundle.js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        [
                            '@babel/plugin-proposal-class-properties',
                            { loose: true },
                        ],
                    ],
                },
            },
        ],
    },
};
