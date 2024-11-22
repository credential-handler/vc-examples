# Vocabularies

These local vocabularies provide details of terms used in example contexts prior
to those credentials (their contexts and vocabularies) are yet to move toward
formal specifications.

Consequently, the URI's of all these terms are subject to change without notice.

## Usage

Install [yml2vocab](https://github.com/w3c/yml2vocab) and use it to generate the
HTML and Turtle vocabulary files for reference or use in other tooling.

```sh
$ npm i -g yml2vocab
$ yml2vocab -v birth-certificate-vc-v2/vocabulary.yml
```

The above will result in `vocabulary.html`, `vocabulary.jsonld`, and
`vocabulary.ttl` files being added parallel to the source file
(`vocabulary.yml`).

NOTE: Only `vocabulary.yml` should be edited as all other `vocabulary.*` files
are auto-generated.
