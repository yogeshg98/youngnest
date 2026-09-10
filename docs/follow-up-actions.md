# Follow-up actions

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
