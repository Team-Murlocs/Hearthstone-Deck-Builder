const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        path: helpers.root('../dist'),
        publicPath: 'https://tranquil-beyond-86557.herokuapp.com/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        devtoolModuleFilenameTemplate: '[resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[resource-path]?[hash]'
    },

    devServer: {
        contentBase: "../dist",
        historyApiFallback: true,
        stats: 'minimal'
    }
});