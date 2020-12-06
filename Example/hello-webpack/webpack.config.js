var path = require('path');

module.exports = {
	context: path.resolve(__dirname, './src'),
    entry: {
        main : './main.js',
    },
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};