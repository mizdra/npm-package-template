/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: ['@mizdra/mizdra', '@mizdra/mizdra/+typescript', '@mizdra/mizdra/+prettier'],
  env: {
    node: true,
  },
  rules: {
    'import/no-unresolved': 'off',
  },
};
