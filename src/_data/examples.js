/**!
 * Copyright 2025 Digital Bazaar, Inc.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {fileURLToPath} from 'node:url';
import fs from 'node:fs';
import {glob} from 'glob';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const credentialsDir = path.resolve(__dirname, '../../credentials');
const directories = glob.sync(`${credentialsDir}/*`)
  .filter(dir => fs.statSync(dir).isDirectory());

const examples = {};

for(const dir of directories) {
  const credentialPath = path.join(dir, 'credential.json');
  const queriesPath = path.join(dir, 'queries.json');
  // TODO: gather images also
  const credential = JSON.parse(fs.readFileSync(credentialPath, 'utf8'));
  const queries = JSON.parse(fs.readFileSync(queriesPath, 'utf8'));
  const dirname = path.basename(dir);
  examples[dirname] = {
    credential,
    queries
  };
}

export default examples;
