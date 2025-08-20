/**!
 * Copyright 2025 Digital Bazaar, Inc.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('contexts/');
  eleventyConfig.addPassthroughCopy('credentials/');
  return {
    dir: {
      input: 'src/',

      // relative to the input directory
      layouts: '_layouts'
    }
  };
}
