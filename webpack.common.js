const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line

module.exports = {
    entry: ['babel-polyfill', 'react-hot-loader/patch', './src/index.js'],
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.html',
            title: 'My Project',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
