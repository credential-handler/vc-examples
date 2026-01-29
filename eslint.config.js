import config from '@digitalbazaar/eslint-config/node-recommended';
import {globalIgnores} from 'eslint/config';

export default [
  ...config,
  globalIgnores([
    '.wrangler/*',
    '_site/'
  ])
];
