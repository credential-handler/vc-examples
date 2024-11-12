# Example Verifiable Credentials _(@credential-handler/vc-examples)_

Example Verifiable Credentials. Beyond being useful for general testing, these
are also in use on the [Verifiable Credential Playground](https://vcplayground.org/).

> [!WARNING]
> The Verifiable Credentials in this repository are primarily created for the
> [Verifiable Credentials Playground](https://vcplayground.org/). Consequently,
> they should _not_ be considered production ready credentials and they may be
> missing many necessary production and stability focused features. Please only
> use them for experimentation.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Background

Credentials added to this package are used on the [VC Playground's Issuer](https://vcplayground.org/issuer)
tool.

## Install

- Node.js 18+ is required.

### Development

To install locally (for development):

```
git clone https://github.com/credential-handler/vc-examples.git
cd vc-examples
npm install
```

To run test:

```
npm test
```

To check credentials against local (and remote) contexts:

```sh
npm run check
```

This uses [jsonld.js](https://github.com/digitalbazaar/jsonld.js)'s
"[Safe Mode](https://github.com/digitalbazaar/jsonld.js?tab=readme-ov-file#safe-mode)"
to to check for missing terms.

All local example context files are added as static contexts mapped to their
future publication URLs via
[jsonld-document-loader](https://github.com/digitalbazaar/jsonld-document-loader).

## Usage

### Add / Update a Verifiable Credential

To add or update credentials in the `./credentials` directory:

1. Within the `./credentials` directory, create a new directory for the
credential. Make sure to use kebab case for the directory name.
2. Inside the newly created credential directory, add a `credential.json` file.
This file should contain all the necessary information for the credential,
including the issuer, credential subject, and other relevant data, for example
`./credentials/movie-ticket/credential.json`. The credential MUST be conformant
to [VC Data Model 1.1](https://www.w3.org/TR/vc-data-model#credentials).
3. Additionally, place a logo `image` file for the credential in the
corresponding directory. The image file should be in either `JPG` or `PNG`
format, for example `./credentials/movie-ticket/image.png`.

### Add / Update a Credential Context

To optionally add or update contexts in the `./contexts` directory:

1. If you wish to include a context for a credential, create a new directory
for the context in the `./contexts` directory. Make sure to use kebab case for
the directory name. It should contain a file `v1.json` that should contain the
JSON-LD context definition for the credential, for example
`./contexts/movie-ticket/v1.json`. The context MUST be conformant
to [VC Data Model 1.1](https://www.w3.org/TR/vc-data-model/#contexts).
2. Please note that once a context is created, it becomes locked and cannot be
modified. If you want to update or make changes to a context, you must create a
new context file with a new version within the context directory. For instance,
if you want to update the context for the "Alumni" credential, create a new file
named `v2.json` containing the updated JSON-LD context definition within
`./contexts/alumni`. The previous version,`v1.json`, should be retained in the
directory without any modifications.
3. Please make sure that the context URLs for the contexts created in the
`./contexts` directory follow the format:
`https://contexts.vcplayground.org/examples/foo-bar/v1.json`.
4. In case you need to add a custom vocabulary documentation, you can include a
`vocab` directory within your `./contexts/foo-bar` context directory. Inside the
`./contexts/foo-bar/vocab` directory, you can define the vocabularies within an
`index.html` file.

### Get the path to credentials directory
```
import {credentialsDir} from '@credential-handler/vc-examples';
```

### Get the path to contexts directory
```
import {contextsDir} from '@credential-handler/vc-examples';
```

## Tools

Use the `extract-contexts.js` script to generate an array of context URLs used
in by these examples.

```sh
$ node extract-contexts.js
```

## Contribute

See [the contribute file](https://github.com/digitalbazaar/bedrock/blob/master/CONTRIBUTING.md)!

PRs accepted.

If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[New BSD License (3-clause)](LICENSE) © Digital Bazaar
