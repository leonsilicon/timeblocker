const path = require('path');
const createAliases = require('@leonzalion/configs/eslint/alias');

module.exports = {
	extends: '../.eslintrc.cjs',
	parserOptions: {
		project: [path.resolve(__dirname, './tsconfig.eslint.json')],
		extraFileExtensions: ['.vue'],
	},
	settings: createAliases({
		'~f': './src',
		'~test': './test',
		'~b': '../backend/src',
	}),
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				'@typescript-eslint/consistent-type-imports': 'off',
			},
		},
	],
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
