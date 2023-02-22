/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const credentialsDir = path.resolve(__dirname, 'credentials');
