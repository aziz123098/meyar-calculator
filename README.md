<div align="center">

# معيار | Meyar
### Calculate, save, and share — in Arabic.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)
![Arabic RTL](https://img.shields.io/badge/Arabic-RTL-7B3CFF?style=for-the-badge)

**8 calculator views · PDF reports · Local history · Offline support**

</div>

Meyar is an Arabic calculator suite with a responsive web interface and an iOS project powered by Capacitor. Calculations and saved history stay on the device. No account or backend is required.

**Status:** iOS preparation build, version 0.2.0. The web bundle has been tested; native compilation, physical-device testing, signing, and App Store submission are still pending. Purchases are not implemented.

## Preview

<img src="docs/images/mobile-preview.png" alt="Meyar mobile web home screen" width="320">

Actual mobile web screenshot; not an App Store screenshot.

## Features

| View | Functionality |
| :--- | :--- |
| General | Addition, subtraction, multiplication, division, parentheses, powers, percent, factorial, roots, logarithms, and trigonometry in degrees or radians. |
| GPA | Semester and cumulative GPA; editable 4- and 5-point grade mappings. Verify the mapping against your university. |
| Age | Completed years and elapsed days. |
| Finance / Loans | Fixed monthly installment estimates with a zero-rate case. Fees and insurance are excluded. |
| VAT | Add tax or extract it from an inclusive amount. |
| Zakat | Calculate 2.5%; does not determine eligibility, nisab, or hawl. |
| Percentage | Calculate a part as a percentage of a total. |

Save up to 100 results locally, export PDF reports with inputs and timestamps, export history as CSV, and share results. PDF reports are personal calculation records, not certified documents. Clearing site/app data can remove history. Export copies remain wherever the user saves them.

## Structure

| Path | Purpose |
| :--- | :--- |
| `index.html`, `style.css` | Responsive RTL interface and styling. |
| `app.js` | Forms, routing, saved history, and report actions. |
| `calculations.js` | Validated calculation functions and expression parser; no `eval`. |
| `reports.js` | PDF, CSV, and browser/native sharing. |
| `assets/` | Icons, locally bundled PDF font, and font license. |
| `sw.js`, `manifest.webmanifest` | Offline web caching and install metadata. |
| `privacy.html` | Privacy policy draft for release review. |
| `ios/`, `capacitor.config.json` | Native iOS shell, app assets, and privacy manifest. |
| `scripts/build.mjs` | Builds the web distribution in `www/`. |
| `tests/` | Calculation and invalid-input tests. |
| `docs/IOS_RELEASE.md` | Native build and release checklist. |
| `docs/MONETIZATION.md` | Proposed commercial model; no checkout enabled. |
| `project -meyar-calculator/` | Legacy duplicate files, excluded from the application build. |

## Run locally

Use Node.js 22 or newer:

```bash
npm ci
npm test
npm run build
python3 -m http.server 8000 --directory www
```

Open <http://localhost:8000>. Serve `www/`; opening the source HTML directly will not resolve bundled dependencies. Offline web use becomes available after the initial assets are cached. The iOS app bundles these assets locally.

## Run on iOS

On a Mac with supported Xcode installed:

```bash
npm ci
npm run ios:sync
npm run ios:open
```

Select your Apple development team and device in Xcode. Review [the release checklist](docs/IOS_RELEASE.md) before distribution. The bundle ID `com.aziz123098.meyar` must be verified for the owner's account before release.

## Verification

- 39 automated calculation tests passed.
- Chromium smoke checks passed for calculation, invalid inputs, result invalidation, saved history persistence, PDF/CSV downloads, and offline reload.
- Layout checked at widths 320, 390, and 1280 pixels.
- Arabic PDF inspected visually, including preservation of mathematical expression order.
- `npm run ios:sync` succeeded; no Xcode build or physical-iPhone test has been performed in this environment.

## Author

**Abdulaziz Al-Anazi** · [GitHub](https://github.com/aziz123098)
