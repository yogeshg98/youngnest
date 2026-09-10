# YoungNest homepage build plan

Implementation status: the English static first version is built with Astro 7.3.2, TypeScript and custom CSS. The warm editorial direction, generated imagery, new SVG logo, responsive interactions and enquiry preview are implemented. See `README.md` for local use and `VALIDATION.md` for completed checks and the additional production check blocked by the session usage limit. Database/CRM, German, CMS and hosting remain follow-up work.

Planning baseline: the supplied September 2026 brand and homepage guide, promotion flyer, and the user's subsequent scope decisions. The user's decisions supersede the guide's requirements for actual photography, bilingual launch and backend integration. The workspace has no existing application.

## 1. Outcome and scope

Help a first-time visitor understand the home, see credible evidence, assess suitability and send an enquiry. Treat an enquiry as an expression of interest, with no account creation or implied reservation.

Version 1 is a static, English-only responsive homepage with generated illustrative imagery, a new logo, gallery, location information, FAQs and an enquiry form interface. Include contact details and provision for approved legal content. Database storage, CRM integration, German translation, CMS, hosting setup, booking, payments and resident accounts are outside this version.

The eventual enquiry flow is website → database → CRM. Version 1 defines the form and its future submission contract; it does not implement persistence or claim that an enquiry has been delivered. Direct email and WhatsApp links can provide working contact alternatives while backend work is deferred.

## 2. Recommended design direction

Use Concept A, warm editorial, as the baseline: cream and white backgrounds, navy typography, selective coral calls to action, high-quality generated imagery, generous spacing and restrained organic shapes. Use Inter and the supplied spacing/radius tokens. Keep green confined to garden and location accents.

Create a consistent family of indicative home images with warm daylight, realistic proportions and welcoming interiors. Use a concise visible “Images are illustrative” caption with the imagery and in the gallery so visitors understand what they are viewing. Avoid describing generated scenes as photographs of Mozartstraße 80. Create a simple YoungNest wordmark and nest/home symbol, preferably as scalable vector assets with light/dark and compact variants. These assets do not require another approval to begin creating during implementation.

Produce the primary homepage at 1440px desktop and 390px mobile, plus a Concept B hero alternative using a stronger coral composition. Compare with the guide's scorecard: clarity 25%, distinctiveness 20%, trust 20%, conversion 20%, scalability 15%.

Test button contrast before choosing text colors. Prefer navy on the supplied coral unless an alternative passes the required contrast checks. Include visible focus, hover and pressed states.

## 3. Page structure

| Section | Content and visitor purpose |
| --- | --- |
| Header | New logo; Our Home, Location, About, FAQ anchors; Enquire now. Compact sticky desktop header and mobile menu. No language control in this version. |
| Hero | “Your new home in Ottobrunn”; “More than a room. A better everyday.”; furnished rooms for international students and young professionals; “Rooms from €799/month”; Enquire now; generated illustrative home image with a concise caption. Secondary text link: Explore the home. |
| Quick facts | Up to four verified facts: S-Bahn walk, everyday shopping, furnishing, Wi-Fi. No unsupported speed or travel claims. |
| More than a room | Short, concrete introduction to everyday life and the people the home serves. Explain the brand here to support the About anchor. |
| Explore the home | Lead image and supporting gallery of indicative living spaces. Visible illustrative-image caption; no claims that generated layouts show the actual rooms or facilities. Accessible lightbox. |
| Living here | Concise practical information and amenities, including private/shared facilities where confirmed. Avoid repeating gallery descriptions. |
| Location | Mozartstraße 80, 85521 Ottobrunn, subject to confirmation; readable location facts; map preview and directions link. Verify walking routes before publishing exact minutes. |
| Who it is for | Two short content blocks for international students and young professionals, addressing moving, study/work and shared living. |
| Pricing | “Rooms from €799/month” as the supplied starting-price anchor. Keep inclusions, extra charges, deposit and minimum stay out until confirmed. The component can accommodate a cost breakdown later without changing the page structure. |
| FAQ | Four to six priority questions covering costs, stay length, availability, shared facilities, Anmeldung and the enquiry/viewing process, once answers are confirmed. |
| Final invitation and enquiry | Navy CTA band leading into one clearly labelled enquiry form. Explain what happens next. Repeated Enquire now actions target this same form. |
| Footer | Brand, address and supplied email/WhatsApp contact details. Accommodate operator identity, Impressum and privacy content when provided; do not create dead legal links. |

Keep each section concise. Gallery, lifestyle and amenities must answer different questions; merge adjacent storytelling blocks if content would otherwise repeat.

## 4. Enquiry journey

Use an inline form so visitors can refer back to the property information. Primary buttons scroll to it and move focus appropriately. Email and WhatsApp remain secondary alternatives.

Proposed required fields: name, email and preferred move-in timing, with an “I'm flexible” option. Proposed optional fields: intended stay length, phone and a short message. Confirm whether the team needs other qualification details before adding them. Avoid asking for identity documents at this stage.

Show a short privacy explanation and link by the submit action. Determine any required acknowledgements from the agreed data flow and approved privacy content; keep any marketing opt-in separate and optional.

Implement and review these states:

- Empty, focused and completed fields with persistent labels.
- Invalid entries with field-specific messages and an accessible error summary.
- Submitting state that prevents duplicate clicks.
- A clearly labelled preview completion state in this static version, without claiming that data was saved or sent. Define a future success state for use after the database accepts the enquiry.
- Failure that preserves entries, allows retry and offers direct contact.
- No-availability state with clear waitlist wording and no suggestion that a room is reserved.

Keep the submission behavior behind a replaceable adapter with a documented payload: name, email, move-in timing, optional stay length, phone, message and page language. Use local mock responses only for reviewing states; do not persist personal information in browser storage as a substitute for the deferred database.

Future integration: persist the enquiry in the database, then pass it to the CRM. Add server-side validation, duplicate protection and spam controls in that phase. CRM delivery failure must not discard an enquiry already accepted by the database. No backend provider decision is needed for version 1.

## 5. Implementation architecture

Build a static public site with small interactive components for the menu, gallery, FAQs and form. Choose a lightweight build setup during implementation and keep the output independent of a hosting provider. No server endpoint, hosting account or CMS is required for this version.

Keep property details, price, amenities, gallery metadata, FAQs and translations in structured content separate from presentation. Give property and room types stable identifiers for future inventory expansion. Store the starting price once so every placement stays consistent. Begin with local content files; add a CMS if the operating team needs direct editing.

Serve English at the homepage route. Keep UI and page copy organized so German can be added later, without implementing translated routes or a language switch now.

Build reusable navigation, buttons, badges, gallery/lightbox, fact strip, amenity items, accordion and form fields. Use CSS tokens for the provided visual system and lightweight motion that respects reduced-motion preferences.

Serve responsive, optimized images with reserved dimensions. Prioritize the hero, lazy-load lower images, and keep fonts predictable. Start with a simple location block and directions link; an interactive map is optional.

Include one clear H1, descriptive metadata, a social preview and indexable property facts. Finalize domain-dependent canonical URLs and sitemap during hosting setup. Add stable interaction hooks for enquiry CTA source, form start and contact clicks; keep mock completion separate from future successful-enquiry events. Do not activate an analytics service in this version or put contact details/messages into event payloads.

## 6. Trust and content preparation

Create a content checklist with each claim marked confirmed, awaiting confirmation or omitted. The supplied flyer is a source of proposed copy, not independent evidence that every claim is current.

Content handling for version 1 and later publication:

- Generate the imagery and new logo as authorized. Flyer images are confirmed to be indicative. Identify indicative imagery clearly; replace with authentic photography later if available.
- Use the supplied starting price now. Detailed rent inclusions/exclusions, deposit and minimum stay can follow; they do not block layout or implementation.
- Private versus shared bathrooms and facilities; confirmed amenities and any restrictions relevant to residents.
- Current availability process, viewing options, application steps and confirmed Anmeldung information.
- Verified address, walking routes and contact details.
- Operator identity and approved legal/privacy content can be supplied for publication. Storage, retention and follow-up details belong to the future database/CRM integration.
- English copy in this version; German translation is a follow-up.

Use testimonials only if authentic and cleared for publication. A new property can build trust through specific details, real imagery and an understandable process without testimonials.

## 7. Work sequence and deliverables

1. **Content and assets:** prepare English copy, generate a coordinated image set, create the logo and specify the enquiry fields. Use the supplied starting price without inventing a breakdown.
2. **Design concepts:** create the token foundation, complete Concept A desktop/mobile layouts and alternative Concept B hero. Include menu, gallery, FAQ, sticky CTA and form states. Compare using the brief's scorecard.
3. **Responsive build:** implement the sections, reusable components, structured local content and English copy. Add responsive images, metadata and clear illustrative-image captions.
4. **Enquiry interface:** implement validation, reviewable mock states, the future submission contract and direct contact links. Database and CRM work remain deferred.
5. **Verification and handoff:** inspect desktop/mobile screenshots, keyboard interactions and content; test form validation and mock error handling. Deliver the static site, local preview instructions, assets and integration notes.

Do not publish unconfirmed claims to make a preview appear finished. Missing facts can be labelled in the internal review notes while independent layout and interaction work continues.

## 8. Acceptance checks

- At 1440, 1280, 1024, 390, 375 and 320px widths, no unintended horizontal scrolling or obscured controls.
- At agreed representative desktop and mobile viewport heights, visitors can immediately find location, audience, price, primary action and illustrative home imagery. The guide asks for both a stacked mobile hero and first-viewport imagery: tune copy, spacing and image height together, and document the tradeoff on very short screens.
- Sticky mobile enquiry appears after the hero and does not cover content, the form, the keyboard or privacy controls.
- Gallery and mobile menu have correct keyboard focus handling, Escape dismissal and focus return; FAQs and forms work by keyboard and with clear labels.
- Contrast and interaction behavior are checked against the guide's WCAG 2.2 AA target; reduced motion is respected. Automated checks supplement manual review.
- Long English content, missing images, price updates and no-availability messages fit without redesign.
- Form validation and mock pending/error/completion states work without losing typed content unnecessarily. No preview state falsely reports database storage or CRM delivery.
- Generated imagery is presented as illustrative, and the new logo remains readable at mobile-header size.
- Optimized media, stable layout and sensible loading behavior are checked on a mobile connection.
- Only approved pricing, features, location claims and response promises appear in the public build.

## 9. Settled decisions and follow-ups

- Imagery: generated, high-quality and indicative; new logo creation is authorized.
- Pricing: retain “Rooms from €799/month”; a detailed breakdown is optional for this version and awaits confirmed facts.
- Enquiries: form interface now; database → CRM integration later.
- Language: English now; German later.
- Content management: structured local files now; CMS later.
- Hosting and technology: no existing constraints; choose a simple static implementation, with hosting setup deferred.

No further answers are required to begin the static first version. Later commercial details can refine pricing and FAQs without changing the visual direction or page architecture.
