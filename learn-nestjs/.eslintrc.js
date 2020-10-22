module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 0,
  },
};
