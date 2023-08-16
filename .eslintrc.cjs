require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  env: {
    node: true,
    es6: true
  },
  globals: {
    fetch: false
  },
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'error',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx', '*.vue'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `vue` related packages come first.
              ['^vue', '^@vue', '^@', '^[a-z]'],
              // Internal packages.
              ['^@/constants.*', '^@/store.*'],
              ['^@/features.*', '^@/forms.*'],
              ['^@/services.*'],
              ['^@/components.*'],
              ['^@/types.*']
            ]
          }
        ]
      }
    }
  ],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/display-name': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits']
      }
    ],
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: ['-']
      }
    ]
  }
}
