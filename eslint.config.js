import config from '@digitalbazaar/eslint-config/node-recommended';
import {globalIgnores} from 'eslint/config';

export default [
  ...config,
  globalIgnores([
    '.wrangler/*',
    '_site/',
    'credentials/html-render-method-mustache/mustache.v4.2.0.js'
  ])
];
