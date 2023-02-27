#  @credential-handler/vc-examples _(@credential-handler/vc-examples)_

> Example Verifiable Credentials for the CHAPI Issuer Playground.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Background

Credentials added to this package are to be used with CHAPI Issuer Playground
tool.

## Install

- Node.js 16+ is required.

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

## Usage

### Add/Update a Verifiable Credential

Please add or update credentials in the `./credenitals` dir. When adding new
credential, make sure the directory name matches the credential name and
that they are camel-cased. The directory should contain a logo image (with
`.jpg` or `.png` file extensions) and a `.json` file containing the credential.

### Get the path to credentials directory
```
import {credentialsDir} from '@credential-handler/vc-examples';
```

## Contribute

See [the contribute file](https://github.com/digitalbazaar/bedrock/blob/master/CONTRIBUTING.md)!

PRs accepted.

If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[New BSD License (3-clause)](LICENSE) © Digital Bazaar
