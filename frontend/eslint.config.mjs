import js from '@eslint/js'
import next from '@next/eslint-plugin-next'

export default [
    js.configs.recommended,
    next.recommended,
    {
        rules: {
            '@next/next/no-html-link-for-pages': 'off',
            'no-console': 'warn',
            eqeqeq: 'error',
            curly: 'error',
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-floating-promises': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'warn'
        }
    }
]
