import config from '@digitalbazaar/eslint-config/node-recommended';
import {globalIgnores} from 'eslint/config';

export default [
  ...config,
  globalIgnores([
    '.wrangler/*',
    '_site/',
    'credentials/html-render-method-mustache/mustache.v4.2.0.js',
    'credentials/html-render-method-pdfmake/mustache.v4.2.0.js',
    'credentials/html-render-method-pdfmake/pdfmake.v0.3.8.js',
    'credentials/html-render-method-pdfmake/vfs_fonts.v0.3.8.js'
  ])
];
