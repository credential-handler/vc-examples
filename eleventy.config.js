/**!
 * Copyright 2025 Digital Bazaar, Inc.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {RenderPlugin} from '@11ty/eleventy';

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(RenderPlugin);

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
