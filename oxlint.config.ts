import mizdra from '@mizdra/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [mizdra.base, mizdra.typescript, mizdra.node],
  ignorePatterns: ['**/dist'],
});
