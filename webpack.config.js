const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: './src/components/index.ts',
	externals: [nodeExternals()],
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		library: '',
		libraryTarget: 'commonjs'
	},
	optimization: {
		minimize: false
	},
	plugins: [new CleanWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				exclude: /\.module\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: false,
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								ident: 'postcss',
								sourceMap: true,
								plugins: () => [autoprefixer({})],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [
									`${__dirname}/node_modules`,
									`${__dirname}/src/`,
									`${__dirname}/src/styles`,
								],
							},
						},
					},
				],
			},
			{
				test: /\.module\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								exportLocalsConvention: 'camelCase',
								localIdentName: '[local]__[hash:base64:5]',
							},
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								ident: 'postcss',
								sourceMap: true,
								plugins: () => [autoprefixer({})],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [
									`${__dirname}/node_modules`,
									`${__dirname}/src/`,
									`${__dirname}/src/styles`,
								],
							},
						},
					},
				],
			}
		]
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, '../src/components'),
			'@reducers': path.resolve(__dirname, '../src/reducers'),
			'@helpers': path.resolve(__dirname, '../src/helpers'),
			'@actions': path.resolve(__dirname, '../src/actions'),
			'@images': path.resolve(__dirname, '../src/images'),
			'@styles': path.resolve(__dirname, '../src/styles'),
			'@fonts': path.resolve(__dirname, '../src/fonts'),
			'@views': path.resolve(__dirname, '../src/views'),
			'@store': path.resolve(__dirname, '../src/store.js'),
		},
		extensions: ['.tsx', '.ts', '.js'],
	}
}
