/** @type {import("eslint").Linter.Config} */
const config = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'plugin:tailwindcss/recommended'],
	plugins: ['@typescript-eslint', 'tailwindcss'],
	rules: {
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
			},
		],
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'tailwindcss/no-custom-classname': 'off',
		'tailwindcss/classnames-order': 'error',
		'react/self-closing-comp': ['error', { 'component': true, 'html': true }],
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				'allowTemplateLiterals': true
			}
		],
		'object-curly-spacing': ['error', 'always'],
		'semi': ['error', 'never'],
		'indent': ['error', 'tab'],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				'groups': [
					'external',
					'type',
					'index',
					'builtin',
					['parent', 'sibling',],
					'object',
				],
				'pathGroups': [
					{
						'pattern': '@/**/**',
						'group': 'parent',
						'position': 'before'
					},
					{
						'pattern': '~/**/**',
						'group': 'parent',
						'position': 'before'
					}
				],
				'alphabetize': { 'order': 'asc' }
			}
		],
	},
	overrides: [
		{
			extends: [
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: 'tsconfig.json',
			},
		},
	],
	'settings': {
		'tailwindcss': {
			'callees': ['cn']
		},
	}
}

module.exports = config
