const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    optimization: {
        runtimeChunk: 'single',
        moduleIds: 'deterministic',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
})
