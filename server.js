var webpack = require('webpack') ;
var conf = require("./webpack.config");
var webpackDevServer = require('webpack-dev-server');

var complier = webpack(conf) ;
new webpackDevServer(complier,{
	hot: true,
}).listen('3000');