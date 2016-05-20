/**
 * Created by Sean on 16/1/20.
 */
var webpack = require('webpack');
//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle-node.js"
    },
    module: {
        loaders: [
            {
                test: /validate.js$/,
                include: /node_modules\/json-schema/,
                loader: StringReplacePlugin.replace({ // from the 'string-replace-webpack-plugin'
                    replacements: [{
                        pattern: /\(\{define:typeof define!="undefined"\?define:function\(deps, factory\)\{module\.exports = factory\(\);\}\}\)\./ig,
                        replacement: function (match, p1, offset, string) {
                            return false;
                        }
                    }]
                })
            },
            {test: /\.tpl$/, loader: "raw"},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")},

            //{test: /\.css$/, loader: "style!css"},
            //{test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.js$/, include: /node_modules\/json-schema/, loader: 'strict-loader'},
            //{test: /\.jsx?$/, loaders: ['jsx?harmony']},
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.json$/, loader: 'json-loader'}
        ]
    },
    plugins: [
        //new CommonsChunkPlugin("commons.chunk.js"),
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin("[name].css"),
        new StringReplacePlugin(),
        new webpack.DefinePlugin({
            OENV: JSON.stringify('node')
        })
    ],
    target: 'node'
};