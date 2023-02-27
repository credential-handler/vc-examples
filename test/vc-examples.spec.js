/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
import chai from 'chai';
import {credentialsDir} from '../lib/index.js';

const should = chai.should();

describe('credentialsDir', () => {
  it('should exist path to credentials directory.', async () => {
    should.exist(credentialsDir);
    credentialsDir.should.be.a('string');
  });
});
