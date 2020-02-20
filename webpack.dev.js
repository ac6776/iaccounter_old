const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "src", "main", "resources", "static"),
        compress: true,
        port: 8000,
        allowedHosts: [
            'localhost:8081'
        ],
        stats: 'errors-only',
        clientLogLevel: 'error',
    },
});
