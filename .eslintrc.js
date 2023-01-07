/* eslint-disable no-undef */
module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint-config-prettier",
		"eslint:recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended"
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["prettier"],
	rules: {
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"prefer-arrow-callback": "off",
		"linebreak-style": ["off", "windows"],
		"no-unused-vars": "error",
		"no-console": ["error", { allow: ["warn", "error"] }],
		"react/react-in-jsx-scope": "error",
		"react/self-closing-comp": ["error", { component: true, html: true }],
		"prettier/prettier": [
			"error",
			{
				semi: true,
				tabWidth: 1,
				useTabs: true,
				printWidth: 100,
				singleQuote: false,
				trailingComma: "none",
				endOfLine: "auto",
				arrowParens: "avoid",
				bracketSpacing: true,
				jsxBracketSameLine: false
			}
		]
	},
	settings: {
		react: {
			version: "detect"
		}
	}
};
