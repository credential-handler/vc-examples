/**!
 * Copyright 2025 Digital Bazaar, Inc.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as Block from 'multiformats/block';
import * as codec from 'multiformats/codecs/raw';
import {fileTypeFromBuffer} from 'file-type';
import fs from 'node:fs/promises';
import {glob} from 'glob';
import {sha256 as hasher} from 'multiformats/hashes/sha2';

// Function to get digestMultibase for a given buffer
export async function getDigestMultibase(buffer) {
  const block = await Block.encode({value: buffer, codec, hasher});
  const cid = await block.cid.toString();
  return cid;
}

// Function to generate relatedResource object for an image file
export async function generateRelatedResourceEntry(imagePath) {
  // Read image file as buffer
  const imageBuffer = await fs.readFile(imagePath);

  // Encode digest using multibase
  const digestMultibase = await getDigestMultibase(imageBuffer);

  // Construct relatedResource entry
  // Use 'file-type' library to detect media type from buffer
  const type = await fileTypeFromBuffer(imageBuffer);
  const mediaType = type ? type.mime : 'application/octet-stream';

  const relatedResource = {
    id: `https://examples.vcplayground.org/${imagePath}`,
    digestMultibase,
    mediaType
  };

  return relatedResource;
}

const imagePaths = glob.sync(
  'credentials/**/*.{png,jpg,jpeg,gif,webp,bmp,tiff,svg}', {nodir: true});

for(const imagePath of imagePaths) {
  const entry = await generateRelatedResourceEntry(imagePath);
  console.log(JSON.stringify(entry, null, 2));
}
