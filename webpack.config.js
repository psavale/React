const webpack = require('webpack')
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const source_dir = path.resolve(__dirname, 'src');

const distination_dir = path.resolve(__dirname, 'src/dist');

const config = {


    mode: 'development',
    entry: {
        app: source_dir + "/html/index.js",
        print: source_dir + "/print.js",
    },

    devtool: 'inline-source-map',
    devServer: {
        contentBase: source_dir + '/dist',
    },

    output: {
        path: distination_dir,
        filename: '[name].storefront.js',
    },

    module: {
        rules: [

            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [                  
                    {
                        loader: 'ts-loader'
                       
                    },
                ],
            }


        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html',
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            // owl.carousel requires jQuery as global
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
        }),
        new MiniCssExtractPlugin({
            filename: 'storefront.css',
        })
    ]
}

module.exports = config;