/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: ['@mizdra/mizdra', '@mizdra/mizdra/+typescript', '@mizdra/mizdra/+prettier'],
  parserOptions: {
    ecmaVersion: 2022,
  },
  env: {
    node: true,
  },
  rules: {
    'import/no-unresolved': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
