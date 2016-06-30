var path = require("path");
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin') ;
var BowerWebpackPlugin = new webpack.ResolverPlugin(
    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
);
module.exports = {
     entry: {
         'index':['./src/index.js'],
         'other':['./src/other.js']
     },
     plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: ['index', 'other']
        }),
        new HtmlWebpackPlugin({
            title:"webpack other",
            favicon:'./src/favicon.ico',
            inject : 'body',
            filename:'other.html',
            template:'./src/other.html',
            chunks:['common','other']
        }),
        new HtmlWebpackPlugin({
            title:"webpack demossss",
            inject : 'body',
            filename:'index.html',
            template:'./src/index.html',
            chunks:['common','index']
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        BowerWebpackPlugin,
        new webpack.ProvidePlugin({
          $:      "jquery",
          jQuery: "jquery"
        })
        
     ],
     output: {
         path: BUILD_PATH,
         filename: '[name].js',
         publicPath: "/"
     },
     module: {
        noParse: /babel-core\/browser/,
        loaders: [
        {
            test: /\.css$/, 
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },

        {
            test: /\.less$/,
            loader:ExtractTextPlugin.extract("style-loader", "css-loader","less-loader")
        },
        {
            test: /\.js$/,
            loader: 'babel-loader!jsx-loader?harmony'
        },
        {
            test: /\.jsx?$/,
            loader: "jsx-loader?insertPragma=React.DOM",
            include: SRC_PATH
        }
        ]
     },
     resolve:{
        root:[SRC_PATH,path.resolve(__dirname,'./bower_components')],
        extensions: ['', '.js','.jsx','.json', '.css','.less'],
     },
     devServer: {
        hot: true,
        contentBase:'/'
    }
 }