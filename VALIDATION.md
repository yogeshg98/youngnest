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
