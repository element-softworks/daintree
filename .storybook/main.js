const path = require('path');
const autoprefixer = require('autoprefixer');

// Export a function. Accept the base config as the only param.
module.exports = {
	"stories": [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
		"../src/*.stories.@(js|jsx|ts|tsx)"
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-a11y",
		"@storybook/addon-storysource",
		'./my-addon/register.jsx'
	],
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		config.module.rules.push({
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
								`${__dirname}/../node_modules`,
								`${__dirname}/../src/`,
								`${__dirname}/../src/styles`,
							],
						},
					},
				},
			],
		});

		config.module.rules.push({
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
								`${__dirname}/../node_modules`,
								`${__dirname}/../src/`,
								`${__dirname}/../src/styles`,
							],
						},
					},
				},
			],
		});

		config.resolve.alias = {
			'@components': path.resolve(__dirname, '../src/components'),
			'@reducers': path.resolve(__dirname, '../src/reducers'),
			'@helpers': path.resolve(__dirname, '../src/helpers'),
			'@actions': path.resolve(__dirname, '../src/actions'),
			'@images': path.resolve(__dirname, '../src/images'),
			'@styles': path.resolve(__dirname, '../src/styles'),
			'@fonts': path.resolve(__dirname, '../src/fonts'),
			'@views': path.resolve(__dirname, '../src/views'),
			'@store': path.resolve(__dirname, '../src/store.js'),
		};
		// Return the altered config
		return config;
	},
};
