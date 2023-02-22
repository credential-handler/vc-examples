/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const credentialsDir = path.resolve(__dirname, "credentials");
