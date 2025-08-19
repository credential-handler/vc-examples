/**!
 * Copyright 2025 Digital Bazaar, Inc.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {canonify} from 'canonify';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import fs from 'node:fs';
import {glob} from 'glob';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contextsDir = path.resolve(__dirname, '../../contexts');
const files = glob.sync('**/*.json', {cwd: contextsDir, nodir: true});

const contexts = [];

for(const file of files) {
  const filePath = path.join(contextsDir, file);
  const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const canonized = canonify(json);
  const hash = crypto.createHash('sha256').update(canonized).digest('hex');
  const relativePath = path.relative(__dirname, filePath);
  contexts.push({hash, path: relativePath.slice(5)});
}

export default contexts;
