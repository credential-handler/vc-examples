import fs from 'node:fs';
import path from 'node:path';

const svgPath = path.join(import.meta.dirname, 'birthcert.svg');
const jsonPath = path.join(import.meta.dirname, 'credential.json');

const svgContent = fs.readFileSync(svgPath, 'utf8');
// put SVG on a single line and remove excess whitespace
const minifiedSvg = svgContent
  .replace(/\r?\n|\r/g, ' ')
  .replace(/\s{2,}/g, ' ')
  .replace(/>\s+</g, '><')
  .trim();

// add the SVG as the `template` value of the first `renderMethod` property
const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
json.renderMethod[0].template = minifiedSvg;
fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
