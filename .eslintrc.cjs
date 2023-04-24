/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: ['@mizdra/mizdra', '@mizdra/mizdra/+prettier'],
  parserOptions: {
    ecmaVersion: 2022,
  },
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      extends: ['@mizdra/mizdra/+typescript', '@mizdra/mizdra/+prettier'],
    },
  ],
};
