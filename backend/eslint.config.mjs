import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import sonar from 'eslint-plugin-sonarjs';
import jest from 'eslint-plugin-jest';

export default [
  ...tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic
  ),
  {
    ignores: ['.eslint.config.mjs', '/*.spec.ts', 'jest.setup.ts'],

    plugins: {
      sonarjs: sonar,
      jest: jest,
    },

    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: new URL('.', import.meta.url),
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        NodeJS: 'readonly',
        jest: 'readonly',
      },
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      complexity: ['error', { max: 15 }],
      'sonarjs/cognitive-complexity': ['error', 20],
      'max-lines-per-function': ['error', { max: 40, skipComments: false, skipBlankLines: true }],
      'max-params': ['warn', 6],
      'max-depth': ['warn', 4],
      'max-nested-callbacks': ['warn', 3],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'jest/require-top-level-describe': 'error', 
      'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'it' }],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
    },
  },
];