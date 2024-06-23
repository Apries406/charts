// rollup.config.mjs
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'

export default {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/bundle.js',
			format: 'cjs',
		},
		{
			file: 'dist/bundle.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()],
		},
		{
			file: 'dist/sparrow.min.js',
			name: 'sp',
			format: 'umd',
		},
	],
	plugins: [json(), babel()],
}
