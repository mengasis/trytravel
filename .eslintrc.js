module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error'
	}
}
