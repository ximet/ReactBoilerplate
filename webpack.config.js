const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackConfig = {
    context: __dirname + '/src',
    entry: './App.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            'react-jss': path.resolve('./src/vendor/react-jss.js'),
        },
        extensions: ['.js', '.jsx', '.json', '*']
    },
    node: {
        global: true
    },
    module: {
  		  rules: [
            {
                test: /\.js$/,
                use: [
                    {
                      loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                      loader: 'url-loader?limit=10000&name=images/[hash:12].[ext]'
                    }
                ]
  		    },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                          publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
      ],
    devServer: {
        historyApiFallback: true,
        inline:true,
        port: 9000
    }
};

module.exports = webpackConfig;
