import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist', 'build', 'node_modules', '*.config.js', '*.config.ts']
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.es2020
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module'
      }
    },
    settings: {
      react: {
        version: '18.2'
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescript,
      prettier
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      ...reactHooks.configs.recommended.rules
    }
  }
];