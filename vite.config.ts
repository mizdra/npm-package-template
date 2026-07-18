import mizdraOxfmtConfig from '@mizdra/oxfmt-config';
import mizdraOxlintConfig from '@mizdra/oxlint-config';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    ...mizdraOxfmtConfig,
  },
  lint: {
    extends: [mizdraOxlintConfig.base, mizdraOxlintConfig.typescript, mizdraOxlintConfig.node],
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
    options: { typeAware: true, typeCheck: true },
  },
  test: {},
});
