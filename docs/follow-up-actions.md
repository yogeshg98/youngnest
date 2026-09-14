# Follow-up actions

## Confirmed priorities (14 September 2026)

1. Add optional phone capture to the homepage, with Germany (+49) selected by
   default and a balanced desktop/mobile form layout. Local implementation comes
   first; release requires migration 0002 before deploying the updated endpoint.
2. Build a new sales back office as a separate track after the phone update. The
   user will supply a design reference. Required: view/search leads, update status,
   add internal notes, assign an owner, and show who changed what and when.
3. Add Payload CMS with approved section templates for homepages, landing pages,
   reusable FAQs, and help articles. SEO staff may publish directly initially.
   Keep roles extensible for an approval workflow later; do not build approvals now.
4. Research FAQ/help SEO structure and update approved answers later. A reusable
   FAQ record does not predetermine whether it has a standalone public URL.
5. Discover the booking funnel before implementing it: catalog, applications,
   bookings, documents, modifications, and personalization. Booking rules remain
   undecided.

The proposed longer-term target is Next.js/Payload on Cloudflare Workers, subject
to a compatibility prototype. Do not block phone capture or sales access on a
public-site migration. The Pages architecture below is the earlier CRM proposal,
not a finalized choice for the new back-office track. Existing D1 enquiries must
remain accessible through any transition.

## Next: build the back-office CRM

Build a private YoungNest workspace for staff to manage website enquiries. The first version should let an authorised team member view new enquiries, open a record, add notes, change its status, and assign an owner.

### Cloudflare architecture

- Keep the public website on Cloudflare Pages.
- Add protected `/admin` pages to the Astro project, or place the CRM in a separate Pages project if it grows independently.
- Protect all CRM routes with Cloudflare Access. Staff should authenticate before the browser can load the admin interface.
- Add server-side Pages Function endpoints under `/api/admin/*`. They validate the Access identity and read or update data through the existing `ENQUIRIES_DB` D1 binding.
- Keep D1 as the source of truth. Add migrations for enquiry notes, activity history, assignment, and staff-facing statuses. The browser must never connect to D1 directly.
- When sending staff notifications or synchronising a future external CRM, write to D1 first and process the follow-up through a Cloudflare Queue. This makes retries safe if an email or third-party CRM is unavailable.
- Use R2 only if staff later need to attach documents or files to an enquiry.

### Suggested first release

1. Define the CRM enquiry lifecycle: `new`, `contacted`, `qualified`, `viewing`, `closed`.
2. Add D1 migrations for notes and an immutable activity log.
3. Configure Cloudflare Access for the initial YoungNest staff members.
4. Build the protected enquiry list with search, status filters, and pagination.
5. Build the enquiry detail page with status, assignee, notes, and activity history.
6. Add server-side authorisation and audit entries for every staff update.
7. Add an email notification or an external CRM synchronisation only after the core workflow is working.

### Definition of done

An authorised staff member can sign in, find an enquiry submitted from the public site, see its history, update its status, leave an internal note, and safely return to the queue. The public form and CRM use the same D1 record; no manual data import is required.
