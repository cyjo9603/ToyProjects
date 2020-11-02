module.exports = {
  plugins: ['react-hooks'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@src', './src']],
      },
    },
  },
};
