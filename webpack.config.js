const path = require('path');

module.exports = {
    node: {
        fs: 'empty',
        net: 'empty',
    },
    entry: {
        app: ['@babel/polyfill', './server/server.js'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
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
