module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['jest'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-plusplus': 'off',
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-exports': ['error', { restrictedNamedExports: ['then'] }],
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
    'react/function-component-definition': ['off'],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'react/jsx-props-no-spreading': 'off',
    'for-direction': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
  },
};
