/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import * as chai from 'chai';
import {contextsDir, credentialsDir} from '../lib/index.js';
import fs from 'node:fs';

const should = chai.should();

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
