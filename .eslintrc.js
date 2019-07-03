module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/babel',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['eslint-plugin-babel', 'eslint-plugin-react', 'eslint-plugin-jsx-a11y'],
  rules: {
    'jsx-a11y/anchor-is-valid': ['warn'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
