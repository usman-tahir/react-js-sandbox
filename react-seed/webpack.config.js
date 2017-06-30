var webpack = require('webpack'),
		path = require('path'),
		BUILD_DIR = path.resolve(__dirname, 'src/client/public'),
		APP_DIR = path.resolve(__dirname, 'src/client/app'),
		config;

config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	}
};

module.exports = config;