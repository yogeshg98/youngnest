# Cloudflare enquiry setup

The public Astro site submits to `POST /api/enquiries`. That Pages Function verifies Turnstile, then writes an enquiry record to D1. Production is configured on the `youngnest` Pages project at `https://youngnest.pages.dev`.

## 1. D1 database

```sh
npx wrangler d1 list
```

The production database is named `youngnest-enquiries`. Create a new database only when setting up a separate environment.

## 2. D1 binding

The Pages project uses the D1 binding:

```text
Variable name: ENQUIRIES_DB
Database: youngnest-enquiries
```

Apply committed migrations before deploying a change that depends on them:

```sh
npx wrangler d1 migrations apply youngnest-enquiries --remote
```

## 3. Turnstile

The production Turnstile widget allows `youngnest.pages.dev`. Its public site key is the `PUBLIC_TURNSTILE_SITE_KEY` build variable:

```text
PUBLIC_TURNSTILE_SITE_KEY=<widget site key>
```

Its private verification key is the `TURNSTILE_SECRET` Pages secret:

```text
TURNSTILE_SECRET=<widget secret key>
```

The secret must only be configured in the Pages environment. Do not put it in `.env`, the repository, or browser code.

## 4. Deploy and verify

Build with the public site key, deploy the `dist/` directory, then submit an authorised test enquiry and confirm that it appears in D1:

```sh
PUBLIC_TURNSTILE_SITE_KEY=<widget-site-key> npm run build
npx wrangler pages deploy dist --project-name youngnest
npx wrangler d1 execute youngnest-enquiries --remote --command="SELECT reference, name, email, status, created_at FROM enquiries ORDER BY created_at DESC LIMIT 10"
```

The function returns a reference such as `YN-1234ABCD` only after D1 confirms the insert. If D1 or Turnstile is unavailable, the site leaves the visitor's form values in place and shows a direct-contact fallback message.
