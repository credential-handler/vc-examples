/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import * as chai from 'chai';
import {contextsDir, credentialsDir} from '../lib/index.js';
import {credentialMatches, queryByExample}
  from '@digitalbazaar/vc-querybyexample';
import fs from 'node:fs';
import {join} from 'node:path';

const should = chai.should();
const expect = chai.expect;

describe('credentialsDir & contextsDir', () => {
  it('should exist path to credentials directory.', async () => {
    should.exist(credentialsDir);
    credentialsDir.should.be.a('string');
    fs.existsSync(credentialsDir).should.be.true;
  });
  it('should exist path to contexts directory.', async () => {
    should.exist(contextsDir);
    contextsDir.should.be.a('string');
    fs.existsSync(contextsDir).should.be.true;
  });
});

describe('credential and queries work together', () => {
  const dirents = fs.readdirSync(credentialsDir, {withFileTypes: true});
  const subdirs = dirents.filter(d => d.isDirectory()).map(d => d.name);

  for(const sub of subdirs) {
    const dirPath = join(credentialsDir, sub);
    const credentialPath = join(dirPath, 'credential.json');
    const queriesPath = join(dirPath, 'queries.json');
    if(!fs.existsSync(credentialPath) || !fs.existsSync(queriesPath)) {
      continue;
    }

    it(`${sub} should have one or more queries that match it's credential`,
      async () => {
        const credential = JSON.parse(fs.readFileSync(credentialPath, 'utf8'));
        const queries = JSON.parse(fs.readFileSync(queriesPath, 'utf8'));
        for(const [name, q] of Object.entries(queries)) {
          // a list of queries is an `AND` operation, so these should all pass
          const queriesList = !Array.isArray(q.credentialQuery) ?
            [q.credentialQuery] : q.credentialQuery;
          for(const exampleQuery of queriesList) {
            const pointers = queryByExample.toJsonPointerMap(exampleQuery);
            try {
              expect(credentialMatches({credential, map: pointers}),
                `${sub}'s ${name} queries do not match it's credential`
              ).to.be.true;
            } catch(e) {
              console.error(e);
              console.dir(credential);
              console.dir(pointers);
              process.exit();
            }
          }
        }
      }
    );
  }
});
