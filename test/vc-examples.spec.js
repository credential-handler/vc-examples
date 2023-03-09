/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import chai from 'chai';
import {credentialsDir} from '../lib/index.js';
import fs from 'node:fs';

const should = chai.should();

describe('credentialsDir', () => {
  it('should exist path to credentials directory.', async () => {
    should.exist(credentialsDir);
    credentialsDir.should.be.a('string');

    const exists = fs.existsSync(credentialsDir);

    exists.should.equal(true);
  });
});
