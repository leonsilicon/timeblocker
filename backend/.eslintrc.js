/* eslint-env node */

module.exports = {
	extends: ['../.eslintrc.js'],
	overrides: [
		{
			files: ['routes/**/*.ts'],
			rules: {
				'no-default-export': 'off',
			},
		},
	],
};
