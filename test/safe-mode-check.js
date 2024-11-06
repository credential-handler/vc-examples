import {contextsDir, credentialsDir} from '../lib/index.js';
import EleventyFetch from '@11ty/eleventy-fetch';
import fs from 'node:fs';
import {glob} from 'glob';
import jsonld from 'jsonld';
import {JsonLdDocumentLoader} from 'jsonld-document-loader';

const jdl = new JsonLdDocumentLoader();

// Loop all local context files and add them as static contexts at the base URL
const paths = await glob([`${contextsDir}/**/*.json`],
  {stat: true, withFileTypes: true});
const timeSortedFiles = paths
  .sort((a, b) => a.mtimeMs - b.mtimeMs)
  .map(path => path.fullpath());

const latestLocalContexts = new Map(timeSortedFiles.map(path => {
  const parts = path.split('/');
  return [parts[parts.length - 2], parts[parts.length - 1]];
}));

latestLocalContexts.forEach((file, dir) => {
  const context = JSON.parse(
    fs.readFileSync(`${contextsDir}/${dir}/${file}`));
  const oldUrl = `https://contexts.vcplayground.org/examples/${dir}/${file}`;
  jdl.addStatic(oldUrl, context);
  const newUrl = `https://examples.vcplayground.org/contexts/${dir}/${file}`;
  jdl.addStatic(newUrl, context);
});
jdl.setProtocolHandler({protocol: 'https',
  handler: {
    async get({url}) {
      return EleventyFetch(url, {duration: '1d', type: 'json'});
    }
  }});
const loader = jdl.build();
jsonld.documentLoader = loader;

const credentialPaths = await glob([`${credentialsDir}/**/credential.json`]);
credentialPaths.forEach(async credentialPath => {
  const credential = JSON.parse(await fs.readFileSync(credentialPath));
  try {
    await jsonld.expand(credential, {safe: true});
    console.log('👍 All terms correctly defined in',
      credentialPath);
  } catch(err) {
    console.log('😢 Errors found in', credentialPath);
    console.dir(err, {depth: 5});
  }
});
