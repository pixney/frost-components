const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    devtool: 'inline-source-map',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src/css'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    devServer: {
        static: 'dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
          template: 'src/index.html'
        }),
      ],
};