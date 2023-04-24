#!/usr/bin/env node
// @ts-check

import { run } from '../dist/index.js';

run().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
});
