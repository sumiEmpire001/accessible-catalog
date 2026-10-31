# Object / Supply — Accessible Catalogue

A responsive HTML/CSS catalogue with JavaScript enhancements for search, saved items, sorting and side-by-side comparisons. Built for Lord_Sumi's portfolio. Every product, price and specification is explicitly synthetic; no checkout, payment or real inventory service is provided.

## Run or download

Open the repository's index.html through a local static server to use the modular source, or run `npm run build` and open the generated self-contained dist/index.html directly. No runtime libraries, external fonts, remote images, accounts or API keys are needed.

On GitHub: **Actions → Catalogue logic and browser tests → Run workflow → main → Run workflow**. Download the resulting artifact for the portable page, browser screenshots and JSON evidence. See TESTING.md for exact steps.

## Features

- Multiword, case-insensitive search across product content, category and power/availability fields.
- Category, saved-only and deterministic sorting controls with a visible empty state and reset.
- Local saved items and up to three comparison selections, restored after reload when browser storage permits.
- A labelled comparison table with row/column headers and a horizontally scrollable region on narrow screens.
- Visible focus rings, a skip link, native controls, live result/status messages and retained focus after card toggles.
- Explicit corrupt-storage recovery, storage-unavailable feedback and a clear-local-data control.

CSS creates the abstract product artwork; it is not a set of real product photographs. The interface labels all specifications and prices as demo data.

## Architecture

src/products.mjs holds validated synthetic products. src/catalog.mjs contains pure filtering, sorting, selection and persistence serialization functions. src/app.mjs renders with DOM text APIs, keeps saved/compared IDs in local storage and exposes errors through a live status region. build.mjs embeds the same modules and stylesheet into a portable HTML file. User input is never interpolated into HTML markup.

## Verification

Twelve local Node tests cover catalogue validation, query/filter composition, price and weight sorting, comparison limits, persistence normalization, corrupt data, exact cents, page controls and the offline build. Thirteen Chromium scenarios cover keyboard navigation, real filtering, persisted selections, comparison feedback, clearing data, corrupt-storage recovery and layout screenshots at 320, 390, 768 and 1280 pixels. Browser results must be read from a successful CI run separately from the local logic tests.

## Limits

This is a local catalogue application, not an e-commerce backend. Saved selections belong to the current browser profile and can be cleared or modified by its owner. There is no authentication, shared account, server database, stock update or checkout. Privacy/storage settings may prevent persistence. Data validation is for this bundled catalogue, not a complete schema system for arbitrary external products. Automated browser coverage is Chromium only; screen-reader, browser zoom, Safari/Firefox and platform high-contrast review remain manual. Screenshots are review artifacts rather than an accessibility certification or universal visual guarantee.

MIT license; see LICENSE.
