var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['webpack/hot/only-dev-server', path.resolve(__dirname, './src/js/app.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.js',
        publicPath:''
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'aaaa',
            template: 'index.html',
            filename: 'index.html'
        })
    ], resolve: {
        extensions: ['', '.js', '.jsx','.png']
    },
    module: {
        loaders: [

            {test: /\.js(x)$/, loader: 'babel', query: {presets: ['es2015', 'react', 'stage-1']}},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.(png|jpg)$/, loader: 'url?limit=100000'}
        ]
    }
};