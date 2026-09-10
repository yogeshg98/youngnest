**YOUNGNEST**

**Brand, Design & Homepage Guidelines**

Working design specification for the YoungNest product team, UX/UI designers and front-end developers.

| ENERGY | WARMTH | TRUST |
| :---: | :---: | :---: |

**MASTER TAGLINE**

**PLACES TO BELONG**

Brand promise: “More than a room. A better everyday.”

Version 1.0  |  September 2026

# **How to use this document**

This document is intentionally written as a design handoff rather than a generic brand manifesto. A designer should be able to take the rules below and create the first desktop and mobile homepage concepts without inventing the visual language from scratch.

Use the “non-negotiables” as hard constraints. Use the “direction” sections to guide creative exploration. When exploring alternative concepts, keep the same brand tokens, content hierarchy, accessibility requirements and conversion logic so concepts remain comparable.

| Section | What the team should get from it |
| :---- | :---- |
| 1\. Brand foundations | Positioning, promise, audience and brand personality. |
| 2\. Visual identity | Colors, typography, spacing, shapes, imagery, icons and UI tokens. |
| 3\. Homepage design principles | How the page should feel, behave and convert. |
| 4\. Desktop homepage | Recommended 1440px layout, modules, hierarchy and states. |
| 5\. Mobile homepage | Recommended 390px layout, sticky CTA and responsive behavior. |
| 6\. Content & messaging | Approved direction for copy and tone. |
| 7\. Components | Reusable UI building blocks and states. |
| 8\. Design handoff | What the first design review should contain. |
| 9\. Accessibility | Baseline for inclusive visual and interaction design. |

| Design north star YoungNest should feel like the best part of finding a new home online: clear enough to trust in 30 seconds, warm enough to imagine living there, and direct enough to take the next step without friction. |
| :---- |

# **1\. Brand foundations**

## **1.1 Brand purpose**

YoungNest exists to make the transition into a new city easier by giving students and young professionals a place that feels ready, social and genuinely like home.

The digital experience should never feel like a traditional real-estate listing. It should feel like a contemporary living brand: human, transparent, optimistic and easy to act on.

## **1.2 Audience**

| Primary audience | Need | Design implication |
| :---- | :---- | :---- |
| International students, typically 20–30 | A fast, understandable path to a real home near their study destination. | Plain international English, visual proof, clear pricing and location context. |
| Young professionals, typically 20–30 | A furnished place with convenience, privacy and a sense of community. | Do not make the experience look like a student dorm or campus service. |
| Parents / supporters / sponsors | Confidence that the offer is legitimate, safe and well described. | Trust signals, detailed FAQs, transparent policies and real property imagery. |
| Future residents across cultures | An intuitive service that does not assume German housing fluency. | Avoid unexplained jargon; explain German-specific terms in simple language. |

## **1.3 Brand positioning**

YoungNest sits between a high-quality shared home and a modern hospitality experience. It is more personal than a hotel, more considered than a room ad, and more welcoming than a conventional student residence.

| We are | We are not |
| :---- | :---- |
| Warm, modern, welcoming | Cold, corporate or bureaucratic |
| Simple and transparent | Clever, vague or salesy |
| Real and human | Over-staged or artificial |
| Social by design | Forced “community” marketing |
| Digital-native | Tech for tech’s sake |
| A home brand | A hostel or temporary accommodation brand |

## **1.4 Brand ethos**

| Principle | Meaning | Visible in the product |
| :---- | :---- | :---- |
| BELONG | A room is only the starting point; the experience should help people feel at home. | Human photography, inclusive language, shared-space storytelling. |
| SIMPLE | Remove uncertainty and needless steps. | Clear hierarchy, plain English, fewer competing CTAs. |
| REAL | Show the actual property and explain the real offer. | Real photos, useful details, honest availability and policies. |
| SOCIAL | Make shared living feel positive without forcing interaction. | Garden, kitchen and common-space stories; light community cues. |
| FORWARD | YoungNest is for the next chapter, not just the next night. | Optimistic copy, confident visual rhythm, future-oriented language. |

## **1.5 Personality**

| Trait | Target expression | Avoid |
| :---- | :---- | :---- |
| Warm | “Welcome home.” | “Dear applicant…” |
| Confident | “Rooms from €799/month.” | “Great prices\!\!\!” |
| Modern | Clean layouts and purposeful motion. | Trendy effects everywhere. |
| Human | Real people, real property, real words. | Stock-photo lifestyle clichés. |
| International | Easy English with German detail when needed. | Dense legal / local jargon on first view. |

# **2\. Visual identity system**

## **2.1 Core palette**

The visual system is anchored by coral \+ warm cream \+ deep navy. Coral is the energy color; cream creates warmth; navy provides trust and legibility. Green is a secondary natural accent only and should never replace the coral-led identity.

| Primary Coral\#FF5C5C | Primary brand accent. Use for the main CTA, emphasis, selected states, key badges and occasional graphic blocks. |
| :---- | :---- |
| **Warm Cream**\#FFF9F3 | Primary warm background. Use to soften large page areas and give the site a residential, premium feel. |
| **Deep Navy**\#10212B | Primary text and structural color. Use for headings, body copy, navigation, footer and high-trust surfaces. |
| **Soft Peach**\#FFE8E1 | Supporting surface for cards, messages, highlighted quotes and gentle visual transitions. |
| **Natural Green**\#2F5D50 | Optional secondary accent for location / nature / garden cues. Keep usage small and supportive. |
| **White**\#FFFFFF | Clean utility surface for cards, forms, room information and photo areas. |

## **2.2 Recommended color ratios**

| Color | Target share | Primary role |
| :---- | :---- | :---- |
| Cream / White | \~65% | Page background, cards, whitespace, image framing. |
| Deep Navy | \~25% | Type, footer, navigation, strong content sections. |
| Coral | \~8% | CTA, active states, key highlights, branded moments. |
| Green / other support | \~2% | Subtle natural / informational accents. |

| Important Do not turn the site into a “coral background everywhere” experience. Coral works because it is selective. The premium feeling comes from restraint, photography and space. |
| :---- |

## **2.3 Contrast & accessibility**

The design team should target WCAG 2.2 Level AA for the public site. Color must not be the only way status is communicated; controls need visible labels, clear focus states and readable contrast.

| Pairing | Recommended use |
| :---- | :---- |
| Navy on Cream | Primary body copy, headings, labels. |
| Navy on White | Forms, cards, long-form content. |
| White on Navy | Navigation, footer, dark CTA bands. |
| Navy on Coral | Headline / copy on coral surfaces only after contrast testing. |
| White on Coral | Use for short button labels / UI text after contrast testing. |
| Coral on Cream | Accent text, rules, small highlights; do not rely on it for long body copy. |

Reference for designers: W3C describes WCAG as the shared international standard for accessible web content and recommends using the latest version; it covers mobile and desktop web experiences.

## **2.4 Typography**

| Role | Font | Weight | Guidance |
| :---- | :---- | :---- | :---- |
| Display / H1 | Inter | 700–800 | Short, confident, max 8–10 words where possible. |
| H2 | Inter | 700 | Section-level statements; avoid paragraph-length headings. |
| H3 | Inter | 600–700 | Card and component headings. |
| Body | Inter | 400 | Comfortable line-height, 16–18px web equivalent. |
| Labels / meta | Inter | 500–600 | Used sparingly; clear hierarchy. |
| Optional editorial accent | DM Serif Display | 400 | Rarely used for emotional campaign moments, not core product UI. |

| Typography rule The page should feel confident because of hierarchy, not because every headline is huge. Use one primary type family consistently across the product. |
| :---- |

## **2.5 Shape language**

| Token | Recommended value | Use |
| :---- | :---- | :---- |
| Card radius | 16–20px | Room cards, feature cards, content modules. |
| Control radius | 10–14px | Buttons, inputs, chips, filters. |
| Pill radius | 999px | Status tags, “from €799” badges, small metadata. |
| Image radius | 16–20px | Photography and gallery modules. |
| Borders | 1px neutral / low-contrast | Use to define structure; avoid heavy boxed-in UI. |

## **2.6 Spacing**

Base spacing should use an 8px rhythm. Create tokens at 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96px and use them consistently. Large hero and section gaps should be 64–96px on desktop, typically 40–64px on mobile.

## **2.7 Shadows**

Use shadows sparingly. YoungNest should feel architectural and editorial, not like a dashboard. Prefer a subtle elevation only for floating controls, dropdowns and key cards that overlap imagery.

# **3\. Imagery & art direction**

## **3.1 Photography hierarchy**

The property itself is the proof. The actual Mozartstraße 80 photography should lead the experience. Do not substitute generic “luxury apartment” images when the real property is available.

| Content type | Target share | Art direction |
| :---- | :---- | :---- |
| People | \~40% eventually | Natural, candid, diverse, everyday moments; never “posed stock photo” energy. |
| Spaces | \~40% | Real bedroom, kitchen, garden, terrace, common spaces, details and useful dimensions where known. |
| Neighborhood / lifestyle | \~20% | Walkability, S-Bahn, cafés, greenery, everyday convenience. |

## **3.2 Property photography rules**

* Use consistent daylight and realistic color grading; avoid heavy HDR or over-saturated interiors.  
* Show enough context that people can understand room size and circulation.  
* Keep photographs straight where architecture permits; avoid extreme wide-angle distortion.  
* Prioritize the strongest hero property image, then a clear sequence: exterior → room → kitchen/common → garden/terrace → practical details.  
* Never digitally remove signs, fixtures or building elements in a way that misrepresents the property. Crop or choose another frame when necessary.  
* Add descriptive alternative text for meaningful imagery.

## **3.3 Graphic motifs**

* Organic “nest” shapes can frame photography or pull quotes, but should not become a decorative pattern on every section.  
* Use simple hand-drawn or rounded icons only when they help scanning.  
* Use coral stickers / badges for energy: “NEW”, “FROM €799”, “3 MIN TO S-BAHN”.  
* Use green only when communicating nature, garden or location themes.  
* Keep visual noise low: one strong graphic gesture per viewport is enough.

## **3.4 Motion**

| Interaction | Suggested motion | Constraint |
| :---- | :---- | :---- |
| Hero image / card hover | Very small scale or position shift | 150–220ms; never distract from CTA. |
| Button hover | Color/contrast shift \+ 1–2px lift | No bounce or elastic animation. |
| Section reveal | Fade \+ 8–16px rise | Use once per content block; respect reduced motion. |
| Gallery | Smooth slide / fade | No autoplay unless muted, purposeful and accessible. |

# **4\. Homepage strategy & design principles**

## **4.1 Homepage job to be done**

Within the first 30–45 seconds, a new visitor should understand: what YoungNest is, where it is, who it is for, roughly what it costs, why the home is attractive, and what to do next.

## **4.2 The emotional sequence**

| Stage | User thought | Design response |
| :---- | :---- | :---- |
| Orient | “What is this?” | One-line positioning above the fold. |
| Trust | “Is this real?” | Actual property photography \+ specific location proof. |
| Imagine | “Could I live here?” | Bedroom / kitchen / garden / terrace storytelling. |
| Validate | “Does it fit me?” | Audience cues, practical benefits and FAQs. |
| Act | “How do I get a room?” | Single dominant CTA: Enquire now. |

## **4.3 Conversion hierarchy**

| Priority | Element | Rule |
| :---- | :---- | :---- |
| P0 | Enquire now | Primary conversion action; always visually dominant. |
| P0 | Rooms from €799/month | Show early, without requiring a click. |
| P0 | Actual property | Visual proof in first screen and again later. |
| P1 | Location | Make “3 min to S-Bahn” scannable. |
| P1 | What is included | Answer uncertainty fast. |
| P1 | FAQ | Reduce hesitation before contact. |
| P2 | About YoungNest | Humanize and explain the brand. |

| Design rule One page, one primary action. Secondary actions can exist, but the hierarchy should never make visitors decide between five equally strong buttons. |
| :---- |

## **4.4 Homepage section order — recommended**

1\.  Global navigation

2\.  Hero: value proposition \+ real property image \+ Enquire CTA

3\.  Quick proof strip: location / price / furnished / audience

4\.  “More than a room” lifestyle section

5\.  Property gallery / home highlights

6\.  Living at YoungNest: room \+ kitchen \+ garden / terrace \+ practicals

7\.  Location snapshot with S-Bahn and everyday convenience

8\.  Who it is for: students \+ young professionals

9\.  What is included / monthly cost clarity

10\.  FAQ preview

11\.  Final CTA band

12\.  Footer with legal, contact and language controls

## **4.5 What the homepage should NOT become**

* Not a real-estate listing wall with endless text and no emotional entry point.  
* Not a student-dorm microsite that excludes young professionals.  
* Not a “startup landing page” with oversized animations and generic claims.  
* Not a luxury-hotel page where the property details are hard to find.  
* Not a page that hides pricing until after the enquiry form.

# **5\. Desktop homepage design specification**

## **5.1 Artboard**

| Breakpoint | Design target | Notes |
| :---- | :---- | :---- |
| 1440px | Primary desktop review artboard | Use 1200–1280px content max-width. |
| 1280px | Desktop fallback | Preserve hierarchy; tighten gutters before shrinking type. |
| 1024px | Tablet / small desktop | Convert multi-column areas early; keep hero simple. |

## **5.2 Desktop header**

| Element | Behavior |
| :---- | :---- |
| Logo | Left aligned; routes to homepage. Do not over-size. |
| Nav | Our Home · Location · About · FAQ. Keep to 4–5 items maximum. |
| Language | EN primary; DE available. Use short, recognizable control. |
| Primary CTA | “Enquire now” as coral button. Visible in header on desktop. |
| Sticky behavior | On scroll, reduce header height but keep CTA visible. |

## **5.3 Desktop hero**

| Layer | Specification |
| :---- | :---- |
| Eyebrow | YOUR NEW HOME IN OTTOBRUNN |
| H1 | A concise value proposition. Recommended: “More than a room. A better everyday.” |
| Support copy | Modern, fully furnished rooms for international students and young professionals. |
| Price proof | “Rooms from €799/month” as a clear visual line. |
| Primary CTA | ENQUIRE NOW |
| Secondary link | Explore the home / See location, optional and lower emphasis. |
| Hero image | Real Mozartstraße 80 exterior or strongest property image; should show the character of the home. |
| Badge / micro-proof | “3 min walk to Ottobrunn S-Bahn” or similar, only if verified and current. |

## **5.4 Desktop wireframe sketch**

| HEADER | Logo                 Our Home   Location   About   FAQ                EN   \[ ENQUIRE NOW \] |
| :---- | :---- |
| **HERO COPY** | YOUR NEW HOME IN OTTOBRUNNMore than a room. A better everyday.Modern, fully furnished rooms for international students \+ young professionals.Rooms from €799/month\[ ENQUIRE NOW \] |
| **HERO IMAGE** | \[ REAL PROPERTY IMAGE \]optional coral location badge |
| **PROOF STRIP** | 3 min S-Bahn   |   3 min EDEKA/PENNY   |   Furnished   |   High-speed Wi-Fi |
| **LIFESTYLE** | \[ PEOPLE / ROOM \]     “A place that feels ready from day one.”     \[ HOME DETAIL \] |
| **FINAL CTA** | READY FOR YOUR NEXT CHAPTER?   \[ ENQUIRE NOW \] |

## **5.5 Desktop section details**

| Module | Recommended composition | Primary user question |
| :---- | :---- | :---- |
| Proof strip | 4 compact facts in a single row. | “What are the basics?” |
| Lifestyle section | Split 40/60 image \+ text; allow one emotional headline. | “What does living here feel like?” |
| Gallery | Large lead image \+ 3–4 smaller images, not a masonry wall. | “Can I really see the place?” |
| Amenities | Icon \+ short label grid; 6–8 items max. | “What do I get?” |
| Location | Map / simplified map visual \+ commute / convenience bullets. | “Where is it?” |
| FAQ preview | 4–6 questions, expandable. | “What could stop me?” |
| CTA band | Navy surface, short copy, coral CTA. | “What do I do now?” |

# **6\. Mobile homepage design specification**

## **6.1 Mobile artboard**

| Viewport | Primary design target | Notes |
| :---- | :---- | :---- |
| 390px | Primary design review | Optimize for iPhone-sized devices; keep content breathable. |
| 375px | Secondary | Nothing important should wrap badly or feel cramped. |
| 320px | Minimum support | Do not break navigation, CTAs or forms. |

## **6.2 Mobile header**

| Element | Behavior |
| :---- | :---- |
| Logo | Compact, left aligned. |
| Menu | Right-side menu button; open full-screen or compact drawer. |
| CTA | Do not rely only on header CTA. Provide a sticky bottom “Enquire now” action after the hero. |
| Language | Inside menu; do not force language switching into a cramped header. |

## **6.3 Mobile hero**

The mobile hero should lead with the promise and the real property. Avoid placing four different CTAs beside or above the image. A vertically stacked sequence should read: label → headline → support → price → CTA → image → quick proof.

## **6.4 Mobile wireframe sketch**

| \[ LOGO \]                                   \[ MENU \] |
| :---: |
| **YOUR NEW HOME IN OTTOBRUNN** |
| **More than a room. A better everyday.** |
| Rooms from €799/monthModern, fully furnished rooms for international students and young professionals.\[ ENQUIRE NOW \] |
| \[ REAL PROPERTY IMAGE \] |
| 3 min S-Bahn · Furnished · Wi-Fi |
| \[ IMAGE \] “Live well. Go further.” |
| **\[ STICKY CTA \]  ENQUIRE NOW** |

## **6.5 Mobile-specific rules**

* Use full-width or near-full-width CTA buttons with at least 44px comfortable touch target.  
* Keep important content within a single scroll path; avoid horizontal carousels for critical information.  
* Use swipe galleries only for supplemental photography, not for core room facts.  
* Use accordions for FAQs, but keep the first answers short.  
* Never hide the price until after the form.  
* Keep contact methods accessible: Enquire, WhatsApp and email/phone as appropriate.  
* Keep sticky CTA within thumb reach and never cover content or cookie controls.

# **7\. Homepage content & messaging guidelines**

## **7.1 Core messaging hierarchy**

| Level | Preferred message | Purpose |
| :---- | :---- | :---- |
| Master brand | PLACES TO BELONG | Long-term brand signature. |
| Hero context | YOUR NEW HOME IN OTTOBRUNN | Instant orientation. |
| Brand promise | More than a room. A better everyday. | Emotional value. |
| Commercial proof | Rooms from €799/month | Price anchor. |
| Audience | For international students and young professionals | Qualification / inclusion. |
| CTA | ENQUIRE NOW | Action. |

## **7.2 Voice examples**

| Use | Good | Avoid |
| :---- | :---- | :---- |
| Headline | More than a room. A better everyday. | Premium accommodation for discerning modern residents. |
| CTA | Enquire now | Submit application request for accommodation. |
| Location | 3 min walk to Ottobrunn S-Bahn | Conveniently located close to public transportation. |
| Community | Made for living, not just staying. | Join our vibrant, thriving community of like-minded individuals\! |
| Pricing | Rooms from €799/month | Affordable rooms available. |

## **7.3 Writing rules**

* Use sentence case for most UI and body copy. Use uppercase sparingly for labels and campaign-style microcopy.  
* Use short sentences. Lead with the useful fact.  
* Prefer “home”, “room”, “kitchen”, “garden”, “terrace”, “move in” over real-estate jargon.  
* Explain German terms when they matter: “Anmeldung (address registration)”.  
* Never promise features or legal terms that are not yet confirmed.  
* Do not imply a “studio” option until a valid studio configuration is actually available.  
* Do not use “GEZ included” unless the commercial/legal structure explicitly supports it.

## **7.4 International English**

The primary language should be international English: plain, friendly and easy to scan. German is secondary and should be offered consistently across the public site. Avoid idioms that are hard for non-native speakers.

# **8\. Reusable component library — initial set**

## **8.1 Core components**

| Component | Variants | States / notes |
| :---- | :---- | :---- |
| Button | Primary / secondary / text | Default, hover, pressed, disabled, focus. |
| Badge | Coral / neutral / green | Use for quick proof such as price, location, furnished. |
| Card | Feature / room / FAQ / article | Consistent radius, spacing and image treatment. |
| Gallery | Hero / grid / lightbox | Keyboard access; alt text; captions when useful. |
| Accordion | FAQ / policy | One active item or multiple based on content; accessible labels. |
| Pill / chip | Filter / attribute | Never use color alone to indicate selection. |
| Input | Text / select / date / phone | Visible labels, error and helper states. |
| Toast / banner | Info / success / warning | Reserve color semantics for meaning. |
| Navigation | Desktop / mobile | Same page model, responsive presentation. |
| Map block | Static / interactive later | Avoid map being the only source of location information. |

## **8.2 Button system**

| Property | Primary button | Secondary button |
| :---- | :---- | :---- |
| Fill | Coral | White / cream with border |
| Text | Navy or white depending on tested contrast | Navy |
| Radius | 12–14px | 12–14px |
| Height | 48–52px desktop; 48–56px mobile | Same |
| Label | Sentence case preferred; “Enquire now” | “Explore the home”, etc. |
| Icon | Optional arrow / chevron at right | Optional |

## **8.3 Form field states**

* Label always visible above or clearly associated with the control.  
* Use helper text before the field where it reduces uncertainty.  
* Error state includes text explanation, not just red border.  
* Success state should confirm the action and what happens next.  
* Focus state must be visually obvious and not rely on color alone.

# **9\. Homepage functional design requirements**

These are design-facing functional requirements. They should map directly to the broader Phase 1 product requirements and should be represented in the design file with responsive, interactive and edge-state variants.

| ID | Requirement | Priority | Acceptance direction |
| :---- | :---- | :---- | :---- |
| DS-01 | Homepage is fully responsive | P0 | Desktop, tablet and mobile layouts preserve hierarchy without horizontal scroll. |
| DS-02 | Hero CTA | P0 | Primary CTA is visible above the fold on desktop and mobile. |
| DS-03 | Price visibility | P0 | “Rooms from €799/month” is visible without interaction, subject to current approved pricing. |
| DS-04 | Real property photography | P0 | At least one actual property image appears in hero / first viewport. |
| DS-05 | Location proof | P0 | S-Bahn proximity and everyday convenience are easy to find; claims must be validated. |
| DS-06 | Gallery interaction | P1 | Users can inspect property images without leaving page. |
| DS-07 | FAQ accordion | P1 | Users can expand/collapse answers; keyboard accessible. |
| DS-08 | Sticky mobile CTA | P1 | CTA remains reachable after hero, without blocking content. |
| DS-09 | Language switch | P1 | English and German maintain equivalent information hierarchy. |
| DS-10 | Reduced motion | P1 | Animation can be reduced / disabled according to user preference. |
| DS-11 | Analytics-ready states | P0 | Primary interactions have stable design/state names for analytics implementation. |
| DS-12 | Error / empty states | P1 | Form, gallery and dynamic content have documented fallback states. |

## **9.1 Above-the-fold acceptance test**

1\.  Can a new visitor identify YoungNest and Ottobrunn immediately?

2\.  Can they tell the offer is furnished housing for international students and young professionals?

3\.  Can they see the starting price?

4\.  Can they see real property imagery?

5\.  Can they find one clear next action?

6\.  Is the page visually branded without requiring them to scroll?

# **10\. Initial design concepts to produce for review**

The first design sprint should not try to finish every page. It should prove the visual language and homepage hierarchy first.

## **10.1 Required design outputs**

| Deliverable | Desktop | Mobile |
| :---- | :---- | :---- |
| Homepage — primary concept | 1440px | 390px |
| Homepage — alternative hero concept | 1440px | 390px |
| Header / navigation states | default \+ sticky | default \+ menu open |
| Hero states | default \+ hover CTA | default \+ sticky CTA |
| Gallery module | open / lightbox | swipe \+ lightbox |
| FAQ module | collapsed \+ open | collapsed \+ open |
| Final CTA | default \+ hover | default \+ sticky interaction |

## **10.2 Concept A — warm editorial**

Cream-heavy page, large real-house photography, coral CTA, navy type, subtle organic shapes. The home is the hero; the brand stays quiet but recognizable. This should be the baseline concept.

## **10.3 Concept B — bolder coral campaign**

Cream and navy remain structural, but one large coral band carries the main message or social proof. Use strong type and larger campaign-style blocks. This is the more expressive option and should still preserve legibility and premium restraint.

## **10.4 Design selection criteria**

| Criterion | Weight | Question |
| :---- | :---- | :---- |
| Clarity | 25% | Can a first-time visitor understand the offer quickly? |
| Brand distinctiveness | 20% | Does it feel recognizably YoungNest rather than generic real estate? |
| Trust | 20% | Does real photography and detail feel credible? |
| Conversion | 20% | Is the enquiry action obvious without being aggressive? |
| Scalability | 15% | Can this visual system expand into room listings and a resident portal? |

## **10.5 Do not approve based only on “looks good”**

The design review should score each concept against the criteria above. The winning direction should be the one that best balances brand, comprehension, trust and action—not simply the most visually dramatic screen.

# **11\. Accessibility, responsive & implementation guidance**

## **11.1 Accessibility baseline**

* Target WCAG 2.2 Level AA for public experiences. W3C identifies WCAG as the shared technical standard for accessible web content and notes that it applies across desktop and mobile.  
* Do not rely on color alone for selection, errors, status or meaning.  
* Provide visible keyboard focus states.  
* Use semantic heading order and meaningful link text.  
* Provide text alternatives for informative images; decorative images should be treated as decorative.  
* Ensure form controls have associated labels.  
* Keep interaction targets comfortably touchable on mobile.  
* Support reduced-motion preferences.

## **11.2 Responsive behavior matrix**

| Pattern | Desktop | Tablet | Mobile |
| :---- | :---- | :---- | :---- |
| Hero | 2-column | 1.5-column / stacked | Stacked |
| Proof strip | 4 across | 2 × 2 | Horizontal / stacked |
| Gallery | Large lead \+ thumbnails | 2–3 images | Swipe / stacked |
| Amenities | 6–8 across / grid | 3–4 grid | 2-column grid |
| Location | Text \+ map | Stacked | Stacked |
| CTA | Inline / wide band | Wide band | Full-width \+ sticky CTA |

## **11.3 Performance design rules**

* Optimize hero imagery aggressively; the first image is the highest-priority media asset.  
* Use responsive image sizes and modern formats where supported.  
* Avoid shipping decorative animation libraries for small interactions.  
* Lazy-load below-the-fold galleries and non-critical media.  
* Keep font loading predictable and avoid layout shift caused by late font swaps.

## **11.4 SEO design implications**

* Use one clear H1 on the homepage.  
* Use descriptive page titles and meta descriptions.  
* Ensure meaningful property/location facts are indexable text, not only embedded in images.  
* Keep room / location content structured so Phase 2 can later expose room-detail pages without redesigning the information architecture.

# **12\. Design token starter sheet**

## **12.1 Color tokens**

| Token | Value | Use |
| :---- | :---- | :---- |
| color.brand.coral | \#FF5C5C | Primary accent / CTA |
| color.brand.cream | \#FFF9F3 | Warm background |
| color.brand.navy | \#10212B | Text / structural |
| color.brand.peach | \#FFE8E1 | Soft surface |
| color.support.green | \#2F5D50 | Nature / secondary accent |
| color.neutral.white | \#FFFFFF | Cards / utility surfaces |

## **12.2 Typography tokens**

| Token | Desktop | Mobile | Weight |
| :---- | :---- | :---- | :---- |
| type.display.xl | 56–64px | 40–44px | 700–800 |
| type.display.l | 44–52px | 34–38px | 700–800 |
| type.heading.m | 30–36px | 26–30px | 700 |
| type.heading.s | 22–26px | 20–24px | 600–700 |
| type.body.l | 18px | 17px | 400 |
| type.body.m | 16px | 16px | 400 |
| type.meta | 13–14px | 13–14px | 500–600 |

## **12.3 Spacing tokens**

| Token | Value | Typical use |
| :---- | :---- | :---- |
| space.1 | 4px | Icon gap / micro |
| space.2 | 8px | Compact component gaps |
| space.3 | 12px | Label / control gaps |
| space.4 | 16px | Default component gap |
| space.5 | 24px | Card internal / module gap |
| space.6 | 32px | Section internals |
| space.7 | 48px | Major content separation |
| space.8 | 64px | Section separation |
| space.9 | 80px | Large section separation |
| space.10 | 96px | Hero / campaign breathing room |

## **12.4 Radius tokens**

| Token | Value | Typical use |
| :---- | :---- | :---- |
| radius.control | 12px | Buttons, inputs |
| radius.card | 16px | Cards |
| radius.media | 18–20px | Photography |
| radius.pill | 999px | Badges / chips |

# **13\. Figma / development handoff expectations**

## **13.1 Required file structure**

| Page / section | Contents |
| :---- | :---- |
| 00 Cover | Brand intro \+ file rules |
| 01 Foundations | Colors, type, spacing, grids, icons, imagery |
| 02 Components | Buttons, cards, inputs, nav, accordion, badges |
| 03 Homepage Desktop | 1440, 1280, responsive examples |
| 04 Homepage Mobile | 390, 375, 320, menu / sticky CTA states |
| 05 Prototypes | Hero, gallery, FAQ, enquiry CTA interactions |
| 06 Handoff | Specs, tokens, content rules, accessibility annotations |

## **13.2 Every major component should include**

* Default state  
* Hover / focus / pressed state where applicable  
* Disabled or unavailable state where applicable  
* Error / validation state for forms  
* Mobile adaptation  
* Content length stress case  
* Accessibility annotation  
* Analytics event name or implementation note where interaction is trackable

## **13.3 Content stress tests**

| Test | What to validate |
| :---- | :---- |
| Long headline | Does layout wrap gracefully at 320–390px? |
| Long FAQ answer | Does accordion remain readable and scannable? |
| Long German translation | Does German create overflow or awkward card heights? |
| Missing image | Does the page still look intentional? |
| No availability | Can CTA / waitlist state be shown without redesign? |
| Price update | Can “from €799” change via CMS without layout break? |

# **14\. Content model implications for design**

Even in Phase 1, the design should anticipate future Phase 2 room inventory. Avoid layouts that hard-code one room or one image sequence. The design system should support multiple properties and room types later.

| Entity | Initial fields relevant to design | Phase 2 extension |
| :---- | :---- | :---- |
| Property | Name, address, hero image, gallery, short description, highlights, location facts | property\_id, live inventory, availability |
| Room type | Name, short description, price from, image, features | room\_type\_id, pricing rules, availability |
| Amenity | Name, icon, short description | property/room mapping |
| FAQ | Question, answer, category | Property / applicant / tenant category |
| Testimonial / story | Optional quote, image, profile info | Resident profile / review status |

## **14.1 Design should allow these future homepage modules**

* “Available rooms” preview with starting price and move-in date.  
* Room cards with size / furnishing / private vs shared bathroom status.  
* Virtual tour / image gallery expansion.  
* Application progress and “check availability” pathways.  
* Property-level availability / occupancy messages.

# **15\. Design review checklist**

## **15.1 Brand**

* Coral \+ cream \+ navy are unmistakably present.  
* Green is secondary, not the dominant identity.  
* The tone feels warm, confident and modern.  
* The design feels like YoungNest, not a property portal or student dorm.  
* The actual property is visually central.

## **15.2 UX**

* Visitor knows location, audience and price quickly.  
* Primary CTA is obvious.  
* Important details are not hidden behind accordions or hover states.  
* Mobile does not feel like compressed desktop.  
* The page has a clear emotional-to-functional flow.

## **15.3 UI**

* Typography hierarchy is disciplined.  
* Card radii and spacing are consistent.  
* Buttons have visible state changes.  
* Photography has consistent treatment.  
* No section is visually over-designed relative to its importance.

## **15.4 Build readiness**

* All breakpoints reviewed.  
* All interactive states specified.  
* Content length stress-tested.  
* Accessibility notes added.  
* Tokens documented for engineering.  
* Analytics events identified for key interactions.

## **15.5 Final approval questions**

1\.  Would an international student understand the offer without speaking German?

2\.  Would a young professional still feel this was made for them?

3\.  Would a parent feel there is enough information to trust the brand?

4\.  Does the page make the actual house desirable without over-selling it?

5\.  Does the first interaction naturally lead to an enquiry?

# **16\. Reference notes**

Accessibility reference: W3C Web Content Accessibility Guidelines (WCAG) 2.2 overview and Level AA conformance guidance.

Benchmark context: the wider YoungNest product requirements document contains the earlier benchmark-informed research for Home & Co, THE FIZZ and Easy Street. This document deliberately focuses on YoungNest’s own differentiated visual and UX language rather than copying those experiences.

# **17\. Immediate design sprint plan**

| Day | Output | Owner |
| :---- | :---- | :---- |
| Day 1 | Foundations page in Figma: colors, typography, grid, buttons, cards, imagery rules. | Designer |
| Day 2 | Homepage desktop Concept A \+ responsive content hierarchy. | Designer \+ PM |
| Day 3 | Homepage mobile Concept A \+ sticky CTA \+ menu. | Designer |
| Day 4 | Concept B exploration \+ compare against scorecard. | Designer \+ PM |
| Day 5 | Review, select direction, create component starter library and developer handoff notes. | PM \+ Designer \+ Engineer |

| Review outcome By the end of the first review, the team should have one approved visual direction, a reusable token set, an approved homepage information hierarchy, and enough component definition to begin implementation without re-inventing the brand in code. |
| :---- |

