const path = require('path');

module.exports = {
	entry: path.resolve(__dirname,'src2/index.ts'),
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
