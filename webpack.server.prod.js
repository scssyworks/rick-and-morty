const merge = require('webpack-merge');
const serverConfig = require('./webpack.server');

const prodConfig = {
    mode: 'production',
    performance: {
        hints: false
    }
};

module.exports = merge(serverConfig, prodConfig);