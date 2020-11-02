module.exports = (api) => {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', { targets: '> 2%, not dead' }],
    '@babel/preset-react',
  ];
  const plugins = [
    '@babel/plugin-proposal-optional-chaining',
    'react-hot-loader/babel',
  ];

  return { presets, plugins };
};
