module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prefer-spread': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': [2, { functions: false }],
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        varsIgnorePattern: 'React|wiredRegeneratorRuntimePolyfill',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      1,
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
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
