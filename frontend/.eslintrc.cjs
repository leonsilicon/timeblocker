const path = require('path');
const createAliases = require('@leonzalion/configs/eslint/alias');

module.exports = {
	extends: '../.eslintrc.cjs',
	parserOptions: {
		project: [path.resolve(__dirname, './tsconfig.eslint.json')],
		extraFileExtensions: ['.vue'],
	},
	settings: createAliases({ '~': './src', '~test': './test' }),
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{
				packageDir: [__dirname, path.resolve(__dirname, '..')],
			},
		],
		'import/extensions': [
			'error',
			{
				ts: 'never',
				js: 'never',
				vue: 'always',
			},
		],
	},
};
