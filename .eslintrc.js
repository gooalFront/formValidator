module.exports = {
	"root": true,
	"parserOptions":{
		"parser": "babel-eslint"
	},
	"env": {
		"browser": true
	},
	"extends": ['standard' ],
	"rules": {
		'generator-star-spacing': 'off',
		'no-debugger': 'off',
		"indent": [ 'error', 'tab' ],
		'no-tabs': 'off',
		'no-eval': 'off',
		'space-before-function-paren': [
			'error',
			{
				"anonymous": 'always',
				"named": 'always',
				"asyncArrow": 'always'
			}
		]
	}
}
