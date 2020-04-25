const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const clientConfig = require('./webpack.client');

const config = {
    mode: 'production',
    devtool: '(none)',
    plugins: [
        new OptimizeCSSAssetsPlugin({})
    ],
    performance: {
        hints: false
    }
};

module.exports = merge(clientConfig, config);