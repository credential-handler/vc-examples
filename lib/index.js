/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const contextsDir = path.resolve(__dirname, '..', 'contexts');
export const credentialsDir = path.resolve(__dirname, '..', 'credentials');
