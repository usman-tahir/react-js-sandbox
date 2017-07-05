var webpack = require('webpack'),
		path = require('path'),
		BUILD_DIR = path.resolve(__dirname, 'src/client/public'),
		APP_DIR = path.resolve(__dirname, 'src/client/app'),
		config;

config = {
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	}
};

module.exports = config;