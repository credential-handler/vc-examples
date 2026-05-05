# HTML Render Method Mustache Example VC

This example contains an HTML-based template following the forthcoming
[HTML Render Method](https://github.com/w3c/vc-render-method/pull/42)
change to the
[Verifiable Credential Render Methods v1.0](https://w3c.github.io/vc-render-method/)
specification.

It also includes [Mustache.js](https://github.com/janl/mustache.js/) to handle
rendering within the HTML Render Method.

Mustache.js must be injected into the HTML template which in turn must be
injected into the credential's render method.

To do the above, the `./build.js` file is provided. If any changes are made to
the following files, `node ./build.js` must be rerun to update
`credential.json`:
* `./template.html` (the one most likely to be changed frequently)
* `./template-credential.json` (changes here might require changes to `./build.js`)
* `./mustache.v4.2.0.js` (updates to Mustache require changing `./build.js`)

## `image.png` Attribution

The HTML file icon used in the `image.png` file was
[created by Smashicons and found via Flaticon.com](https://www.flaticon.com/free-icons/html-file).
