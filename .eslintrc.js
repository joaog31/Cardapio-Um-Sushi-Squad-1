module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'next/core-web-vitals'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      plugins: ['@babel/plugin-syntax-jsx'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'no-console': 'warn',
    eqeqeq: 'error',
    curly: 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
  },
};
