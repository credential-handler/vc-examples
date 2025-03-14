#!/usr/bin/env node

import {contextsDir, credentialsDir} from '../lib/index.js';
import EleventyFetch from '@11ty/eleventy-fetch';
import fs from 'node:fs';
import {glob} from 'glob';
import jsonld from 'jsonld';
import {JsonLdDocumentLoader} from 'jsonld-document-loader';

// Pass in `extract` to get context list instead of safe mode check results
const method = process.argv.at(2);

const jdl = new JsonLdDocumentLoader();

// collection to track all loaded contexts
const contextUrls = new Set();

jdl.setProtocolHandler({
  protocol: 'https',
  handler: {
    async get({url}) {
      contextUrls.add(url);
      if(url.startsWith('https://examples.vcplayground.org/contexts/')) {
        const regex =
          /https\:\/\/examples\.vcplayground\.org\/contexts\/(.*)\/(.*)$/;
        const [, dir, file] = url.match(regex);
        const context = JSON.parse(
          fs.readFileSync(`${contextsDir}/${dir}/${file}`));
        jdl.addStatic(url, context);
        return context;
      }
      return EleventyFetch(url, {duration: '1d', type: 'json'});
    }
  }});
const loader = jdl.build();
jsonld.documentLoader = loader;

let failure = false;
const credentialPaths = await glob([`${credentialsDir}/**/credential.json`]);
await Promise.all(credentialPaths.map(async credentialPath => {
  const credential = JSON.parse(await fs.promises.readFile(credentialPath));
  try {
    await jsonld.expand(credential, {safe: true});
    if(method !== 'extract') {
      console.log('👍 All terms correctly defined in', credentialPath);
    }
  } catch(err) {
    if(method !== 'extract') {
      console.log('😢 Errors found in', credentialPath);
    }
    console.dir(err, {depth: 5});
    failure = true;
  }
}));

if(failure) {
  process.exit(1);
}

if(method === 'extract') {
  console.log(JSON.stringify([...contextUrls].sort(), null, 2));
}
