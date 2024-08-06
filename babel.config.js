module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
  plugins: [['styled-components', { displayName: true, fileName: false }]],
};
