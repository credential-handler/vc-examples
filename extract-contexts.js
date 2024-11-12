import {credentialsDir} from './lib/index.js';
import fs from 'node:fs';
import {glob} from 'glob';

const paths = await glob([`${credentialsDir}/**/credential.json`]);

const contexts = await Promise.all(paths.map(async credentialPath => {
  const credential = JSON.parse(await fs.promises.readFile(credentialPath));
  return credential['@context'];
}));

console.dir([...new Set(contexts.flat())].sort());
