# vc-examples Changelog

## x.x.x - 2024-mm-dd

### Added
- Add `npm -s run extract` script for extracting context URLs used in examples.

## 6.13.0 - 2024-11-08

### Changed
- Removed all uses of `https://www.w3.org/ns/credentials/examples/v2` context.
- Defined any missing term definitions in local context definitions if standard
  contexts did not exist.
- Created two shim contexts for commonly used terms absent from the VC v1.1
  context.
- All credentials now point to their example contexts at
  `https://examples.vcplayground.org/contexts/` based URLs.

### Fixed
- Fix change from `naturalizedOn` to `ceremonyDate` in natcert-vc-v2 SVG.

## 6.12.0 - 2024-11-01

### Changed
- Add `validFrom` and `validUntil` with empty strings for PRC example.

### Removed
- Deleted `id` fields for person specific credentials.

## 6.11.1 - 2024-10-31

### Fixed
- Fixed missing comma in Permanent Resident Card query.

## 6.11.0 - 2024-10-31

### Added
- Added a new Verifiable Credential v2.0 version of the Permanent Resident
  Card.
- Added a new Verifiable Credential v2.0 version of the Utopia Naturalization
  Certificate.
- Added a new Verifiable Credential v2.0 version of the Utopia Employment
  Authorization Document.

### Changed
- Use generic issuer URLs.

## 6.10.0 - 2024-10-22

### Changed
- Moved Movie Ticket VCDM v2 credential into `credentials/movie-ticket-vcdm-v2/`.
- Created a parallel `contexts/movie-ticket-vcdm-v2/` folder for VCDMv2
  compatible Movie Ticket context file versions.
- Set datatype for `startDate` in Movie Ticket VCDMv2 context.

## 6.9.0 - 2024-10-10

### Added
- Added a new Verifiable Credential v2 Movie Credential.
- Added a new Movie Credential Context to fix #11 by correcting the `address`
  term mapping.

## 6.8.1 - 2024-08-09

### Fixed
- Updated issuer icons for Utopia credentials.
- Fixed photo stretching issues on Utopia DL and NatCert.

## 6.8.0 - 2024-08-08

### Added
- Add `renderMethod` for back of card and PDF417 only view to Utopia DL.

### Changed
- Values in the Utopia Driver's License now reflect the values encoded in their
  associated PDF417.

## 6.7.0 - 2024-08-06

### Added
- Include selective disclosure query for DL.

## 6.6.1 - 2024-07-19

### Fixed
- Update DL & EAD queries to match their credentials.

## 6.6.0 - 2024-07-19

### Added
- Add Medical First Responder credential.

### Fixed
- Inline fonts and compressed SVGs for EAD, DL, and NatCert.
- Correct context URL for Driver's License.
- Use citizenship v3 context for Utopia Naturalization Certificate.

## 6.5.1 - 2024-06-13

### Fixed
- Include svg resources in package.

## 6.5.0 - 2024-06-11

### Added
- Add queries.json to each credential.

### Changed
- Allow for multiple queries per credential.

## 6.4.0 - 2024-06-10

### Added
- Add Utopia Employment Authorization Document (EAD).
- Add Utopia Driver's License (DL).
- Add Utopia Naturalization Certificate (NatCert).

## 6.3.1 - 2023-11-06

### Added
- Bump `gs1-8110-coupon` context to v2
- Add https://schema.org/description and rename original `description` to
`offerDescription`

### Changed
- Update `gs1-8110-coupon` with square images

## 6.3.0 - 2023-10-30

### Added
- Add GS1 8110 coupon credential.

### Changed
- Make `jff3` credential use open badge 3.0.2 context by default.
- Update credential example for `customer-loyalty`.

## 6.2.1 - 2023-10-04

### Fixed
- Use standard image naming convention.

## 6.2.0 - 2023-10-04

### Added
- Add academic course credential.

## 6.1.0 - 2023-09-25

### Added
- Created v2 `jff3` credential with open badge 3.0.2 context.

### Changed
- Reverted context in credential for `jff3`.

## 6.0.0 - 2023-09-25

### Changed
- **BREAKING**: Changed context in credential for `jff3`.

## 5.3.0 - 2023-09-22

### Added
- Add context example for `first-responder`.

## 5.2.0 - 2023-09-14

### Added
- Add context and example for `customer-loyalty`.

## 5.1.0 - 2023-08-10

### Added
- Add context, vocab, and credential example for `retail-coupon`.
- Add credential example for `jff-3`.

## 5.0.1 - 2023-06-22

### Fixed
- Fix `examDate` type URL to use `http` instead of `https`.

## 5.0.0 - 2023-06-22

### Changed
- **BREAKING**: Update dir names for `movieTicket`, `introToChapi` and
  `safechef` to kebab case.

### Fixed
- Update context URLs to a cleaner format
  `https://contexts.vcplayground.org/examples/foo-bar/v1.json`.
- Fix vocab URLs.

## 4.0.0 - 2023-05-31

### Added
- Move context files into `contexts` dir and export its path.

### Changed
- **BREAKING**: Update context URLs for `movieTicket`, `alumni` and `safechef`
  credentials.
- **BREAKING**: Drop support for node <= 16.x. Node.js 18+ is required.

## 3.0.0 - 2023-05-19

### Added
- Add context files for `movieTicket`, `alumni` and `safechef` credentials.

### Changed
- **BREAKING**: Update context URLs for `movieTicket`, `alumni` and `safechef`
  credentials.

## 2.1.0 - 2023-03-15

### Added
- Add new `Safe Chef` VC example.

## 2.0.0 - 2023-03-09

### Added
- Add test.
- Add image for `jff`.

### Changed
- **BREAKING**: Update names of `.json` files containing credentials to
  `credential.json`.
- Update `Usage` section in `README.md`.

## 1.0.0 - 2023-02-23

### Added
- Add credentials dir containing example credentials: `alumni`, `jff`, `jff2`,
  `movieTicket`, `introToChapi` and `prc`. `lib/index.js` exports the path to
  the `credentials` dir.
