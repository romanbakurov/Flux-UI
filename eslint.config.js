import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'dist/**',
      'coverage/**',
      'node_modules/**',
      'storybook-static/**',
      '.storybook/**',
    ],
  },

  js.configs.recommended,

  {
    files: ['src/**/*.{ts,tsx}'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      //
      // отключаем JS версии правил
      //
      'no-undef': 'off',
      'no-unused-vars': 'off',

      //
      // TS
      //
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      //
      // React
      //
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',

      //
      // Hooks
      //
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      //
      // Imports
      //
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            ['^@web', '^@native'],
            ['^@shared', '^@assets'],
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      //
      // General
      //
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },

  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'no-console': 'off',
    },
  },

  prettierConfig,
];
