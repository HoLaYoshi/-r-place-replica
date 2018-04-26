var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
	context: __dirname,
	
	entry: './accounts/static/js/index',
	
	output: {
		path: path.resolve('./accounts/static/bundles'),
		filename: "index.js",
	},
	
	plugins: [
		new BundleTracker({filename: './webpack-stats.json'}),
	],
	
	module: {
		rules: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/ }
		]
	},
	
	resolve: {
		modules: ['node_modules', 'bower_components'],
		extensions: ['.js', '.jsx']
	},
};
