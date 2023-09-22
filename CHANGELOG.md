# vc-examples Changelog

## 5.3.0 - 2023-09-xx

### Added
- Add context example for `first-responder`.


## 5.2.0 - 2023-09-14

### Added
- Add context example for `customer-loyalty`.

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
