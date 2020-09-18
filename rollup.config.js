import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'playground/src/component-lib/index.js',
				format: 'esm',
				banner: '/* eslint-disable */',
			},
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'esm' },
		],
		plugins: [
			del({ targets: ['dist/*', 'playground/src/component-lib'] }),
			postcss({
				extract: false,
				modules: true,
				use: ['sass'],
			}),
			typescript({
				tsconfigOverride: { compilerOptions : { module: "es2015" } }
			}),
		],
		external: Object.keys(pkg.peerDependencies || {}),
	},
];
