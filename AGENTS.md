# YoungNest Repository Guide

YoungNest is an English-language marketing and enquiry website for furnished
rooms in Ottobrunn, Germany. It presents the property, audience, pricing,
location, FAQs, and an enquiry form. The frontend is a static Astro site;
Cloudflare Pages Functions, Turnstile, and D1 provide the enquiry backend.

## Required Reading

- `README.md` - current local setup, feature overview, and content constraints.
- `cloudflare/README.md` - Cloudflare D1, Turnstile, and deployment setup.
- `VALIDATION.md` - completed browser checks, known limits, and review artifacts.
- `docs/YoungNest_Brand_Design_and_Homepage_Guidelines.md` - visual and brand direction.
- `assets/IMAGE_PROMPTS.md` - image provenance and regeneration context.
- `HOMEPAGE_BUILD_PLAN.md` is historical planning context. Where it says hosting
  or persistence is deferred, the current README and implementation take precedence.

## Astro

Astro 7 is used to generate a lightweight static site. `astro.config.mjs` sets
`output: 'static'`, so production serves the generated HTML, CSS, and JavaScript
from `dist/`; no Astro application server runs in production. Cloudflare executes
the separate code under `functions/`.

Astro is installed as a local npm dependency. Use the npm scripts below or
`npx astro <command>` from the repository root. Do not require a global Astro
installation. Documentation:

- Astro documentation: https://docs.astro.build/
- Astro CLI: https://docs.astro.build/en/reference/cli-reference/
- Astro files and components: https://docs.astro.build/en/basics/astro-components/
- Cloudflare Pages Functions: https://developers.cloudflare.com/pages/functions/

In `.astro` files, the fenced frontmatter runs at build time and the template
produces HTML. Browser behavior belongs in `src/scripts/`; content and property
facts belong in `src/data/home.ts`.

## Prerequisites

- Node.js 22.12 or newer
- npm
- A Cloudflare account with access to the YoungNest Pages project for deployment
  or enquiry-backend work
- Wrangler authentication (`npx wrangler login`) for D1 operations or direct deploys

## Commands

Run all commands from the repository root.

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the exact dependencies from `package-lock.json`. |
| `npm run dev` | Start Astro at the printed address, normally `http://127.0.0.1:4321`. |
| `npm run check` | Run Astro and TypeScript diagnostics. |
| `npm run build` | Run diagnostics and generate the static site in `dist/`. |
| `npm run preview` | Serve the current production build locally. Run the build first. |
| `node scripts/optimize-images.mjs` | Regenerate responsive WebP files after replacing an original PNG. |
| `npx astro dev status` | Show the Astro development-server status. |
| `npx astro dev logs` | Show development-server logs. |
| `npx astro dev stop` | Stop the Astro development server. |

Set `ASTRO_TELEMETRY_DISABLED=1` before Astro commands in restricted environments
that cannot write to the user preferences directory.

There is currently no automated test or lint script. The minimum validation for
every code change is `npm run build`; use `npm run check` for a faster diagnostic
pass while iterating. UI changes also require focused browser checks at desktop
and mobile widths, keyboard interaction checks, and a console-error check.

## Architecture

| Path | Responsibility |
| --- | --- |
| `src/pages/index.astro` | Single page, metadata, semantic structure, and English copy. |
| `src/data/home.ts` | Shared property facts, price, contacts, gallery data, and FAQs. |
| `src/components/` | Reusable Astro logo and icon components. |
| `src/styles/global.css` | Design tokens, layout, responsive behavior, and UI states. |
| `src/scripts/main.ts` | Menu, gallery, sticky CTA, form UI, and non-personal interaction events. |
| `src/scripts/enquiry.ts` | Typed browser-side contract for `POST /api/enquiries`. |
| `functions/api/enquiries.ts` | Cloudflare Pages Function: validation, Turnstile, and D1 insert. |
| `migrations/` | D1 schema migrations. |
| `assets/originals/` | Source PNG images; preserve these when optimizing. |
| `public/` | Files copied directly into the static build. |
| `dist/` | Generated output; do not edit or commit it. |
| `output/playwright/` | Generated browser-review artifacts; do not treat them as source. |

Keep the site progressively enhanced: core content, FAQ disclosure, anchors, and
direct contact links must remain useful without JavaScript. The enquiry form may
require JavaScript, but its direct email fallback must remain available.

## Content and Design Constraints

- Keep the public site English-only until complete German content and routes exist.
- Define changing property facts once in `src/data/home.ts`; do not duplicate the
  starting price or contact details in presentation code.
- Do not invent availability, rent inclusions, deposit, minimum stay, legal terms,
  operator information, or travel claims.
- Generated property imagery is illustrative, not evidence of the actual property;
  keep the visible disclosures and accurate alternative text.
- Preserve one clear H1, semantic landmarks, keyboard support, focus return for
  dialogs, reduced-motion behavior, and layouts down to 320px.
- Fonts are bundled locally. Do not introduce an external font or analytics provider
  without an explicit requirement and privacy review.
- `youngnest:interaction` events must contain only event names and non-personal context.

## Environment and Enquiries

- `PUBLIC_TURNSTILE_SITE_KEY` is a public build-time variable used by Astro to
  render the Turnstile widget. Changing it requires a new build/deployment.
- `TURNSTILE_SECRET` is a server-only Cloudflare Pages secret.
- `ENQUIRIES_DB` is the Cloudflare Pages D1 binding.
- Never commit secrets or put `TURNSTILE_SECRET` in `.env` or browser code.
- Without the public site key, the submit button intentionally remains disabled and
  direct email/WhatsApp contact is shown. Astro development and preview do not by
  themselves reproduce the deployed Pages Function and D1 environment.
- Keep browser and server validation aligned. Preserve same-origin checks, the
  honeypot, Turnstile action verification, bounded input lengths, parameterized SQL,
  and generic failure responses.
- Do not store enquiry personal data in cookies, localStorage, sessionStorage,
  analytics events, or browser logs.

See `cloudflare/README.md` for initial account setup. Apply committed migrations with:

```sh
npx wrangler d1 migrations apply youngnest-enquiries --remote
```

## Deployment

The intended production platform is Cloudflare Pages. Static files come from
`dist/`, and Cloudflare deploys `functions/` as Pages Functions. Access the service
through Cloudflare Dashboard under **Workers & Pages**, then select the YoungNest
Pages project. The Pages project is `youngnest`, served at
`https://youngnest.pages.dev`. Its production branch is `main`; `wrangler.toml`
records the Pages and D1 configuration. Verify the Dashboard bindings and secrets
before deploying.

Recommended Pages build settings:

- Repository: `yogeshg98/youngnest`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22.12 or newer

Before a deployment:

1. Run `npm ci` and `npm run build`.
2. Apply any new D1 migrations.
3. Confirm `ENQUIRIES_DB`, `PUBLIC_TURNSTILE_SITE_KEY`, and `TURNSTILE_SECRET` in
   the target Pages environment.
4. If the Pages project uses Git integration, push or merge to its configured
   production branch and monitor the deployment in Cloudflare.
5. If it uses direct upload, obtain the project name from Cloudflare and run
   `npx wrangler pages deploy dist --project-name <project-name>` from the root.

After deployment, inspect the production page at desktop and mobile widths, check
the browser console, submit one authorized test enquiry, and verify the record:

```sh
npx wrangler d1 execute youngnest-enquiries --remote \
  --command="SELECT reference, name, email, status, created_at FROM enquiries ORDER BY created_at DESC LIMIT 10"
```

Do not perform a production deployment, migration, or real enquiry submission
unless the user explicitly requests it.

## Change Checklist

- Content/data change: update `src/data/home.ts` where a shared fact already exists.
- Image change: replace the matching source in `assets/originals/`, run the optimizer,
  verify all renditions, and retain the illustrative-image disclosure.
- Form contract change: update the page fields, `src/scripts/enquiry.ts`,
  `functions/api/enquiries.ts`, and any required D1 migration together.
- UI change: run `npm run build` and repeat the relevant checks documented in
  `VALIDATION.md`; do not claim checks that were not actually run.
- Deployment change: update `cloudflare/README.md` and this file if commands,
  bindings, platform, project identification, or production access changes.
