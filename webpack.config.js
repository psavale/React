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
        app: source_dir + "/html/index.js"
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
},

const customizeClientConfig = {
    entry: {
        server: ['@babel/polyfill', resolvePath(process.cwd(), 'src/client/packageNameca.jsx')],
        client: ['@babel/polyfill', resolvePath(process.cwd(), 'src/client/client.jsx')]
    },
    // Can't resolve 'child_process'
    node: {
        // eslint-disable-next-line camelcase
        child_process: 'empty',
        // eslint-disable-next-line camelcase
        worker_threads: 'empty'
    },
    plugins: [
        !devMode && new InjectManifest({
            swDest: 'sw.js',
            swSrc: path.resolve(__dirname, '..', 'src/common/workbox-sw.js'),
            exclude: [/\.map$/, /asset-manifest\.json$/]
        })
    ].filter(Boolean)
    // Uncomment block to use common components locally.
    // resolve: devMode
    //     ? {
    //         alias: {
    //             // '@packageName/change-store': path.resolve(
    //             //     __dirname,
    //             //     '../../components-ca/packages/ChangeStore/src'
    //             // ),
    //             // '@packageName/change-store': path.resolve(
    //             //     __dirname,
    //             //     '../../components-ca/packages/ChangeStore/src'
    //             // ),
    //             // '@packageName/button': path.resolve(
    //             //   __dirname,
    //             //   '../../react-components/packages/Button/src/Button.jsx'
    //             // ),
    //             react: path.join(__dirname, '../node_modules/react'),
    //             'react-dom': path.join(__dirname, '../node_modules/react-dom'),
    //             'styled-components': path.join(
    //                 __dirname,
    //                 '../node_modules/styled-components'
    //             )
    //         }
    //     }
    //     : {}
};

module.exports = config;