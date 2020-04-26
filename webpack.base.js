module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js?$/,
                use: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};