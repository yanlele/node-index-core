module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-use-before-define': [2, { functions: false }],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        varsIgnorePattern: 'React|wiredRegeneratorRuntimePolyfill',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-triple-slash-reference': 1,
    '@typescript-eslint/explicit-member-accessibility': 0,
    camelcase: 0,
    '@typescript-eslint/camelcase': [
      1,
      {
        allow: [],
      },
    ],
  },
};
