# Version 1 validation

Completed on 10 September 2026.

## Passed

- Final `npm run build`: zero Astro/TypeScript errors, warnings or hints; static output generated successfully in `dist/`.
- Chrome layout checks at 1440, 1280, 1024, 768, 390, 375 and 320px widths: no horizontal overflow, broken loaded images or broken internal anchors; one H1 throughout.
- Visual review of desktop homepage, mobile hero, narrow 320px layout, tablet layout, mobile menu, mobile gallery and desktop/mobile enquiry states.
- Gallery opening, next/previous navigation, arrow keys, Escape dismissal and focus return.
- Mobile navigation opening, Escape dismissal, focus return and section navigation.
- Sticky mobile enquiry appears after the hero and hides when the enquiry section is visible.
- Empty-form validation identifies all three required fields. Valid fictitious entries complete the preview and create an encoded prefilled email link without sending it.
- Form interaction leaves localStorage and sessionStorage empty.
- Automated axe checks using WCAG A/AA tags: no violations in the desktop expanded-FAQ/form-completion state (29 passing rules) or mobile state (28 passing rules). These checks do not establish full WCAG conformance.
- Reduced-motion rendering used during responsive checks.
- Final production build served successfully at http://127.0.0.1:4322 and visually inspected, including the enquiry section.
- Normal desktop browser console check reported no errors or warnings.

## Limits

- An additional production interaction check for invalid email handling, preview completion and simulated image-load failure was not executed: automatic approval review rejected the browser command after the session usage limit was reached. Existing successful development-browser interaction checks remain valid; the extra production checks are not claimed as passed.
- No real enquiry delivery is tested or implemented. Database, CRM, CMS, German translation and hosting are intentionally deferred.
- Testing used Chrome with desktop and mobile emulation. Physical devices and other browser engines have not been tested.
- Exact location/travel claims and tenancy terms have not been independently verified. Images are explicitly illustrative.

## Review artifacts

Screenshots are under `output/playwright/`, including `desktop-final.png`, `mobile-final.png`, `mobile-hero-final.png`, `mobile-gallery.png`, `mobile-menu.png`, `mobile-form-errors.png`, `desktop-enquiry.png` and the viewport-specific screenshots.

The lightbox image sizing was corrected after the first review and rechecked at 390px: the image renders at 318 × 212px without the previous blank bands.

## Optional phone update — 14 September 2026

- Production build passed with zero Astro/TypeScript errors, warnings, or hints.
- Shared parsing checked with 14 cases: omitted/blank, German local mobile and
  landline, international +/00 formats, UK local, Italian retained leading zero,
  invalid text, short input, unsupported country, wrong type, and overlong input.
- Endpoint exercised locally with mocked Turnstile and D1: legacy/blank phones
  accepted as NULL, German/international phones normalized, invalid values rejected
  before external verification or insertion, SQL placeholder/binding counts aligned.
- Both SQL migrations applied in an in-memory SQLite database. An existing lead
  retained NULL phone and a new lead stored its phone successfully.
- Local production-build browser checks: Germany selected by default, country to
  phone keyboard order, invalid input feedback, clearing an invalid phone restores
  validity, UK country selection accepts UK local input. No console errors/warnings.
- Responsive checks at 1440, 390, and 320px: no horizontal overflow. The phone
  controls stack below 480px to keep the selected country and number readable.
- Screenshots: `output/playwright/phone-controls-*.png` and
  `output/playwright/phone-viewport-*.png`.

Limits: no production deployment, remote migration, real Turnstile verification,
or real enquiry submission was performed. Local static preview has no Turnstile
site key, so submission remains disabled as designed. Endpoint tests use mocks;
SQLite checks do not replace a deployed D1 verification. Phone checks establish
possible format/length, not ownership or reachability.
