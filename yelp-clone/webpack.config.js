const webpack = require('webpack'),
			fs = require('fs'),
			path = require('path'),
			join = path.join,
			resolve = path.resolve,
			getConfig = require('hjs-webpack'),
			root = resolve(__dirname),
			src = join(root, 'src'),
			modules = join(root, 'node_modules'),
			dest = join(root, 'dist'),
			NODE_ENV = process.env.NODE_ENV,
			isDev = NODE_ENV === 'development',
			isTest = NODE_ENV === 'test';

let config = getConfig({
	in: join(__dirname, 'src/app.js'),
	out: join(__dirname, 'dist'),
	clearBeforeBuild: true
});

module.exports = config;