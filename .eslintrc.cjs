module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
      'eslint:recommended',
      'plugin:mocha/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
      'mocha'
    ],
    'rules': {
        'indent':
          [0, 2, {'SwitchCase': 1, 'VariableDeclarator': 1, 'outerIIFEBody': 1, 'FunctionDeclaration': {'parameters': 'first', 'body': 1}, 'FunctionExpression': {'parameters': 'first', 'body': 1}, 'ArrayExpression': 1, 'MemberExpression': 'off', 'ObjectExpression': 1, 'ignoreComments': true, 'flatTernaryExpressions': true, 'ignoredNodes': ['CallExpression', 'ConditionalExpression']}
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
