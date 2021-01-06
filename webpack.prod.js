const HtmlWebPackPlugin       = require('html-webpack-plugin'); 
const miniCssExtractPlugin    = require('mini-css-extract-plugin'); 
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); 
const minifyPlugin            = require('babel-minify-webpack-plugin');
const {CleanWebpackPlugin}    = require('clean-webpack-plugin');
// const copyPlugin           = require('copy-webpack-plugin'); 

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new optimizeCssAssetsPlugin()]
    },
    output: {
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false,
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new miniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
        new minifyPlugin()
        // new copyPlugin([
        //     {from: 'src/assets', to: 'assets/'}
        // ])
    ]

}

