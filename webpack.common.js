const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: devMode
        ? [
              new HtmlWebpackPlugin({
                  title: 'Fibonacci Numbers Calculator',
              }),
          ]
        : [
              new HtmlWebpackPlugin({
                  title: 'Fibonacci Numbers Calculator',
              }),
              new MiniCssExtractPlugin(),
          ],
    module: {
        rules: [
            {
                test: /\.css$|\.scss$/i,
                use: [
                    {
                        loader: devMode
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['autoprefixer']],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
}
