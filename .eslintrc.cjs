/** @type {import('eslint').Linter.BaseConfig} **/
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'import',
    '@typescript-eslint/eslint-plugin',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  ignorePatterns: [
    'dist',
    'build',
    'node_modules',
    'public',
    '!.prettierrc.js',
    '!.eslintrc.js',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
