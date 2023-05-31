# vc-examples Changelog

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
