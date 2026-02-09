/*!
 * Copyright (c) 2023-2026 Digital Bazaar, Inc. All rights reserved.
 */
import {fileURLToPath} from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const contextsDir = path.resolve(__dirname, '..', 'contexts');
export const credentialsDir = path.resolve(__dirname, '..', 'credentials');
/**
 * TODO: Add an async `loadExamples()` API as additional surface.
 * - Should be idempotent (loads once, caches result).
 * - Sync loading remains for backward compatibility.
 */
const entries = fs.readdirSync(credentialsDir, {withFileTypes: true});
const credentialDirs = entries.filter(e => e.isDirectory()).map(d => d.name);

const credentials = {};
for(const dirName of credentialDirs) {
  const dirPath = path.join(credentialsDir, dirName);
  const credentialJsonPath = path.join(dirPath, 'credential.json');
  const queriesJsonPath = path.join(dirPath, 'queries.json');

  let credential = null;
  let queries = null;

  try {
    const credText = fs.readFileSync(credentialJsonPath, 'utf8');
    credential = JSON.parse(credText);
  } catch(e) {
    throw new Error(`Failed to read/parse ${credentialJsonPath}: ${e.message}`);
  }

  try {
    const queriesText = fs.readFileSync(queriesJsonPath, 'utf8');
    queries = JSON.parse(queriesText);
  } catch{
    // if queries.json is missing or invalid, keep as null
    queries = null;
  }

  credentials[dirName] = {credential, queries};
}

export const examples = {credentials};
