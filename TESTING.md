# Test the catalogue

On GitHub: Actions → Catalogue logic and browser tests → Run workflow → main → Run workflow. Read both the logic and browser steps. Download the artifact for the real browser screenshots, JSON results and self-contained demo.

Open dist/index.html after extraction. Search, category/saved filters, sorting, comparisons and local save/reset work without a server. Some browsers restrict local storage for file URLs; an explanatory status message appears when storage is unavailable.

Locally: `npm test`; for real browser checks, `npm install`, `npx playwright install chromium`, then `npm run test:browser`. `npm run build` creates the portable page.

Manual review: keyboard focus order after filtering, screen-reader table navigation, browser zoom, Safari/Firefox and storage-restricted browsing. The automated Chromium suite is only a defined subset of accessibility and compatibility checks.
