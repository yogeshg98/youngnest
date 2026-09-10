# YoungNest Ottobrunn

An English-only, responsive Astro homepage for YoungNest. The first version includes a new SVG brand mark, three generated illustrative images, responsive gallery/lightbox, a neighbourhood illustration with directions link, FAQs, mobile navigation, sticky enquiry action and a validated enquiry preview.

## Run locally

Requires Node.js 22.12 or newer and npm.

```sh
npm install
npm run dev
```

Open the local address printed by Astro (normally http://127.0.0.1:4321).

```sh
npm run build    # Type checks and creates the static site in dist/
npm run preview  # Serves the production build locally
npm run check    # Astro/TypeScript diagnostics
```

Astro 7 runs its development server in the background. Use `npx astro dev status`, `npx astro dev logs` and `npx astro dev stop` to manage it. In restricted environments, prefix commands with `ASTRO_TELEMETRY_DISABLED=1` to prevent writes to the user preferences directory.

## Where to edit

| File | Responsibility |
| --- | --- |
| `src/pages/index.astro` | Homepage sections and English copy |
| `src/data/home.ts` | Starting price, contacts, gallery metadata and FAQs |
| `src/styles/global.css` | Brand tokens, layout, responsive rules and visual states |
| `src/components/Logo.astro` | Scalable logo with light/dark variants |
| `src/components/Icon.astro` | Small consistent line-icon library |
| `src/scripts/main.ts` | Menu, gallery, sticky CTA, validation and interaction events |
| `src/scripts/enquiry.ts` | Typed boundary for future submission integration |
| `assets/originals/` | Original generated PNG assets |
| `public/images/` | Optimized responsive WebP assets |
| `assets/IMAGE_PROMPTS.md` | Image prompts and provenance |

Run `node scripts/optimize-images.mjs` after replacing an original PNG. Original files remain intact. Page images use 640, 960 and up-to-1600px renditions; the generator preserves the original aspect ratio and does not upscale.

## Enquiry behavior

This version has no database, CRM connection or backend endpoint. The form explicitly identifies itself as a preview. It validates name, email and preferred move-in timing, preserves input on errors and displays a preview completion state. The visitor can then open a prefilled email in their own mail application. The site never sends an email automatically.

No personal information is stored in cookies, localStorage or sessionStorage. The browser holds the current form values in memory only. Client-side validation supports usability; a future server must perform its own validation.

For the next phase, replace `submitEnquiry` with a request to a server endpoint. Persist in the database before returning an accepted reference, then deliver to the CRM. Implement the real success UI alongside that change; the current interface deliberately rejects an unexpected accepted response rather than presenting the preview as real delivery. Add server-side validation, spam handling, duplicate protection and appropriate privacy content during integration.

The move-in/stay selections express visitor preferences and do not assert available tenancy durations.

## Design and content notes

- Baseline: cream, navy and coral warm editorial direction from the supplied guide.
- Images were generated with the built-in image generation tool. They are labelled illustrative and do not depict the actual property.
- The custom SVG neighbourhood graphic is schematic, not a geographical map. Google Maps directions use the supplied address.
- Price is defined once in `src/data/home.ts`. Detailed rent inclusions, minimum stay, deposit and availability are not invented.
- The core page, FAQ and direct contact links work without JavaScript. JavaScript enhances the gallery and navigation. The form submission button remains disabled when JavaScript is unavailable, with a direct email alternative.
- No analytics provider or external font service is activated. Fonts are bundled locally. Stable `youngnest:interaction` events contain interaction names and non-personal context only.
- No language toggle is shown until German content exists. No dead legal links or invented operator information are published.

## Follow-up scope

Database/CRM integration, German translations, CMS integration, hosting and production domain configuration remain deferred. Set final canonical/social URLs and sitemap when the domain is known. Supply the operator/legal/privacy content and confirm commercial/location claims before a public launch.

Browser review artifacts are saved under `output/playwright/`. See `VALIDATION.md` for the completed checks and their limits.
