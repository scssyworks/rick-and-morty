const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    // Set current mode to development
    mode: 'development',
    // Change devtool to change default "eval-source-map" to (none)
    devtool: '(none)',
    // Inform webpack that we're building bundle for NodeJS
    target: 'node',
    // Set externals to remove warning
    externals: [nodeExternals()],
    // Tell root file of our server app
    entry: './src/index.js',
    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};

module.exports = merge(baseConfig, config);