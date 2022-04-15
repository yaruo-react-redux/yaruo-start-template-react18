module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'import/extensions': [
            'error',
            {
              js: 'never',
              jsx: 'never',
              ts: 'never',
              tsx: 'never',
            },
          ],
          'react/jsx-filename-extension': [
            'error',
            {
              extensions: ['.jsx', '.tsx'],
            },
          ],
          'react/react-in-jsx-scope': 'off',
          'react/function-component-definition': [
            'error',
            {
              namedComponents: 'arrow-function',
              unnamedComponents: 'arrow-function',
            },
          ],
          'no-void': [
            'error',
            {
              allowAsStatement: true,
            },
          ],
    }
}
