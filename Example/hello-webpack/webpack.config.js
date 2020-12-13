var path = require('path');

module.exports = {
	context: path.resolve(__dirname, './src'),
    entry: {
		main: './main.js',
		module: './module-1.js',
    },
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					minChunks: 2,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	}
};