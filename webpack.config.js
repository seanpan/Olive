/**
 * Created by Sean on 16/1/20.
 */
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.tpl$/, loader: "raw"},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.jsx?$/, loaders: ['jsx?harmony']}
        ]
    }
};