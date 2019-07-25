const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:"production",
    entry:"./index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"formValidator.js",
        libraryTarget: "umd", 
    },
    module:{
        rules: [
            {
              test: /\.js$/,
              include: [
                path.resolve(__dirname, "src")
              ],
              exclude: /node_modules/,
              loader: "babel-loader",
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}