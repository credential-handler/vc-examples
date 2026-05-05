import fs from 'node:fs';
import path from 'node:path';

// Load the raw Mustache code to inject into the HTML template
const mustachePath = path.join(import.meta.dirname, 'mustache.v4.2.0.js');
const mustacheCode = fs.readFileSync(mustachePath, 'utf8');

// Load the HTML template to inject into the credential template
const htmlPath = path.join(import.meta.dirname, 'template.html');
const htmlCode = fs.readFileSync(htmlPath, 'utf8');
const htmlWithMustache = `<script>${mustacheCode}</script>${htmlCode}`;

// add the SVG as the `template` value of the first `renderMethod` property
const credentialPath = path.join(import.meta.dirname,
  'template-credential.json');
const credentialText = fs.readFileSync(credentialPath, 'utf8');
const credential = JSON.parse(credentialText);
credential.renderMethod.template =
  `data:text/html,${htmlWithMustache}`;

// Output the final credential
const outputPath = path.join(import.meta.dirname, 'credential.json');
fs.writeFileSync(outputPath, JSON.stringify(credential, null, 2));
