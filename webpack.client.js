const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    // Set current mode to development
    mode: 'development',
    // Set devtool to replace "eval-source-map" default
    devtool: 'source-map',
    // Tell root file of our server app
    entry: './src/client/index.js',
    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);