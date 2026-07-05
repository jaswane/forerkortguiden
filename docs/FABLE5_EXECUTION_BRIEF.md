# FABLE5_EXECUTION_BRIEF.md

## Project

**Domain:** https://forerkortguiden.no
**Brand name:** Førerkortguiden
**Owner / footer:** Et prosjekt fra Swane Creative
**Swane Creative URL:** https://swanecreative.no
**Contact:** [kontakt@swanecreative.no](mailto:kontakt@swanecreative.no)
**Language:** Norwegian only in version 1
**Primary task:** Build a production-ready first version of forerkortguiden.no from scratch.

This brief is the practical execution document. MASTER_PRD_FULL is the full background, quality standard and product philosophy. If the two conflict, follow this execution brief during implementation.

---

# 1. Mission

Build Norway’s most useful independent guide to driving licences.

The site must help users understand what licence they need, what they can drive, how the process works, what it may cost, and what next step they should take.

This is not a blog.

This is not a generic AI-generated SEO site.

This is a fast, trustworthy, modern Norwegian utility/product site about driving licences.

The user should leave with the feeling:

“Her fikk jeg svaret raskere og tydeligere enn andre steder.”

---

# 2. Absolute Rules

These rules must never be broken.

Do not invent facts.

Do not invent sources.

Do not invent prices.

Do not invent traffic schools.

Do not invent reviews, ratings or rankings.

Do not publish demo content, Lorem Ipsum, “coming soon”, TODOs or placeholder text.

Do not make the site look like Statens vegvesen or any public authority.

Do not claim the site is official.

Do not create fake local pages.

Do not build fake traffic school profiles.

Do not use false “best in test” claims.

Do not use Review or AggregateRating schema without real review data.

Do not use generic AI/Tailwind landing page design.

Do not overuse pill buttons, huge rounded cards, generic gradients or stock-photo style.

Do not build English language support in version 1.

Do not build login/account functionality in version 1.

Do not build database/backend unless truly necessary.

If information cannot be verified, either remove it, write it carefully with a clear caveat, or point users to official sources.

---

# 3. Source and Trust Rules

Factual driving licence information must be based on trustworthy sources.

Prioritize:

1. Statens vegvesen
2. Lovdata
3. Regjeringen.no
4. Politiet
5. Trygg Trafikk
6. Helsedirektoratet where health requirements are relevant
7. Other relevant Norwegian public sources

Every important rules-based page should include a calm source box with:

* sources used
* last updated date
* caveat where relevant
* reminder to check official information for final decisions

Use wording such as:

“Førerkortguiden er en uavhengig veiviser. Vi forklarer regler og prosesser basert på troverdige kilder, men er ikke en offentlig myndighetsside.”

---

# 4. Product Priorities

If the project becomes too large, cut breadth before quality.

Priority order:

1. Correctness
2. User value
3. Trust
4. Accessibility
5. Speed
6. Maintainability
7. SEO
8. Conversion
9. Visual wow

A polished core is better than a broad unfinished site.

---

# 5. Design Direction

The design must be:

* light
* fast
* modern
* Scandinavian
* clean
* trustworthy
* mobile-first
* useful before decorative
* better than typical Norwegian driving licence sites

Use a modern sans-serif font such as Inter, Geist, Manrope, IBM Plex Sans or similar.

Avoid:

* generic Tailwind look
* oversized pill buttons
* huge rounded cards everywhere
* random gradients
* fake startup landing page style
* heavy shadows
* decorative stock imagery
* AI-generated people pretending to be real users or experts

Use:

* clear typography
* calm colors
* strong contrast
* moderate radius
* useful SVG/illustrations/icons
* good spacing
* mobile-friendly tables
* source boxes
* comparison blocks
* “Kort forklart” boxes
* “Neste steg” blocks

The site should feel custom-designed for driving licence guidance.

---

# 6. Technical Stack

Recommended stack:

* Next.js App Router
* TypeScript
* React
* CSS Modules or global CSS with design tokens
* static TypeScript/JSON data files
* Vercel-ready
* sitemap.ts
* robots.ts
* JSON-LD schema helpers
* no database in MVP
* no login in MVP

Use server components by default.

Use client components only for:

* calculators
* guided tools
* checklists
* mobile menu
* search/theme finder if needed

Keep dependencies low.

Do not install large UI libraries unless there is a very strong reason.

---

# 7. Required MVP Pages

Build these first:

* `/`
* `/forerkortklasser`
* `/forerkortklasser/klasse-b`
* `/forerkortklasser/klasse-b96`
* `/forerkortklasser/klasse-be`
* `/ta-forerkort`
* `/trafikalt-grunnkurs`
* `/ovelseskjoring`
* `/teoriprove`
* `/oppkjoring`
* `/kostnad`
* `/tilhenger`
* `/verktoy`
* `/guider`
* `/kilder-og-metode`
* `/om`
* `/kontakt`
* `/personvern`

If capacity allows, also build:

* `/forerkortklasser/klasse-am`
* `/forerkortklasser/klasse-a1`
* `/forerkortklasser/klasse-a2`
* `/forerkortklasser/klasse-a`
* `/forerkortklasser/klasse-c1`
* `/forerkortklasser/klasse-c`
* `/forerkortklasser/klasse-t`
* `/motorsykkel-og-moped`
* `/guider/b96-eller-be`
* `/guider/hvordan-velge-trafikkskole`
* `/guider/forerkort-og-kompetansebevis`

Do not build local traffic school pages or fake traffic school profiles in MVP.

---

# 8. Required MVP Tools

Build at least some practical tools or checklists.

Prioritize:

1. `/verktoy/hvilket-forerkort-trenger-jeg`
2. `/verktoy/kostnadskalkulator`
3. `/verktoy/tilhengerkalkulator`
4. `/verktoy/veien-til-lappen`
5. `/verktoy/ovelseskjoring-sjekkliste`

Tools must be:

* simple
* fast
* mobile-first
* no login
* no sensitive data collection
* clear caveats
* useful even if not legally definitive

The tilhenger tool must not claim legal certainty unless the data is enough. Use careful wording such as:

“Dette peker mot at du bør lese om BE/B96, men du må alltid kontrollere bilens og tilhengerens vektgrenser.”

The cost calculator must clearly state that results are estimates.

---

# 9. Page Structure

Important pages should generally include:

1. H1
2. short intro
3. “Kort forklart” box
4. main explanation
5. table / checklist / example where useful
6. common misunderstandings
7. next steps
8. related links
9. FAQ where useful
10. source box / updated date where relevant

Avoid long generic introductions.

Answer first. Explain after.

---

# 10. Content Rules

All public content must be in Norwegian.

Tone:

* clear
* calm
* precise
* helpful
* adult
* practical
* not bureaucratic
* not salesy
* not fake-youthful

Avoid AI filler such as:

* “I dagens samfunn…”
* “Den ultimate guiden…”
* repeated generic summaries
* unnecessary long intros
* vague claims
* exaggerated promises

Separate clearly:

* documented facts
* practical advice
* estimates
* commercial content
* examples

---

# 11. SEO and AI Search

Optimize for both Google SEO and AI search engines.

Each important page needs:

* unique title
* unique meta description
* canonical using `https://forerkortguiden.no`
* one clear H1
* logical H2/H3 structure
* direct answer near top
* FAQ where useful
* internal links
* source/caveat where relevant
* structured data where appropriate
* breadcrumbs
* sitemap inclusion

Use schema honestly:

Allowed where appropriate:

* WebSite
* Organization
* WebPage
* Article
* BreadcrumbList
* FAQPage
* ItemList
* HowTo only for true step-by-step content

Do not use fake reviews, fake ratings or unsupported schema.

For AI search, make pages easy to understand with:

* definitions
* short summaries
* comparison tables
* FAQ
* consistent terminology
* source boxes
* entity relationships between licence classes, tools and guides

---

# 12. Internal Linking

Use hub-and-spoke structure.

Important hubs:

* `/forerkortklasser`
* `/ta-forerkort`
* `/tilhenger`
* `/ovelseskjoring`
* `/kostnad`
* `/verktoy`
* `/guider`

Examples:

`/forerkortklasser/klasse-b` should link to:

* trafikalt grunnkurs
* øvelseskjøring
* teoriprøve
* oppkjøring
* kostnad
* tilhenger
* B96
* BE
* relevant tools

`/tilhenger` should link to:

* klasse B
* B96
* BE
* tilhenger tool
* B96 vs BE guide
* official source

Internal links must help users, not just SEO.

---

# 13. Data Structure

Use static data files for:

* licence classes
* guides
* tools
* FAQ
* sources
* navigation
* related links
* synonyms

Suggested folders:

```txt
data/
  licenseClasses.ts
  guides.ts
  tools.ts
  sources.ts
  navigation.ts
  faq.ts
  synonyms.ts

components/
  layout/
  ui/
  content/
  tools/
  seo/

lib/
  metadata.ts
  schema.ts
  routes.ts
  utils.ts
  constants.ts
```

Data must be easy to maintain and should not contain unverified claims.

---

# 14. Components to Build

Core components:

* Header
* Footer
* Breadcrumbs
* PageHero
* ShortAnswerBox
* SourceBox
* UpdatedDate
* NextSteps
* RelatedLinks
* FAQ
* ComparisonTable
* InfoBox
* WarningBox
* StepList
* Checklist
* PrintButton
* ToolShell
* LicenseClassCard
* GuideCard
* ToolCard

Footer must include:

“Et prosjekt fra Swane Creative”

with link to:

https://swanecreative.no

Om/Kontakt must include:

[kontakt@swanecreative.no](mailto:kontakt@swanecreative.no)

---

# 15. Monetization

Do not aggressively monetize MVP.

Build trust first.

MVP may include:

* cooperation text on Contact page
* structure for future partner boxes
* editorial guide to choosing traffic school
* editorial guide to theory test preparation

MVP must not include:

* fake partners
* fake ads
* fake sponsored profiles
* fake discounts
* fake traffic school rankings
* hidden affiliate links

Future monetization areas:

* theory test partners
* traffic school leads
* sponsored traffic school profiles
* course providers
* truck/competence certificate content
* premium print/checklist products
* ads after trust and traffic are established

All commercial content must be clearly marked.

---

# 16. Adjacent Roadmap Areas

Do not prioritize these in MVP unless simple and safe:

* traffic school database
* local SEO pages
* sponsored traffic school profiles
* full truck certificate section
* machine operator certificate
* crane/lift/ADR courses
* advanced YSK content
* English language version
* login/account features
* premium tools

However, architecture should not block future expansion.

A single guide about the difference between driving licences, YSK, truckførerbevis and other competence certificates is useful if fact-based and cautious.

---

# 17. QA Requirements

Before reporting done, run relevant QA.

Inspect package.json and run available scripts.

Typical:

```bash
npm run lint
npm run typecheck
npm run build
```

If scripts differ, use the actual scripts.

Do not claim success unless commands were attempted.

Fix errors.

Also check:

* important routes render
* mobile layout works
* no horizontal overflow
* header/footer work
* Swane Creative footer exists
* [kontakt@swanecreative.no](mailto:kontakt@swanecreative.no) exists on Om/Kontakt
* sitemap works
* robots works
* metadata exists
* canonical uses forerkortguiden.no
* schema is honest
* no demo/filler content
* no fake traffic schools
* no fake prices
* no fake ratings
* tools work
* print works where relevant
* source boxes appear where needed

---

# 18. Build Order

Recommended order:

1. Inspect repo
2. Set up Next.js/TypeScript structure
3. Build design tokens and global layout
4. Build Header/Footer
5. Build data models
6. Build homepage
7. Build licence class hub
8. Build class B, B96 and BE
9. Build tilhenger hub
10. Build ta førerkort / trafikalt grunnkurs / øvelseskjøring
11. Build teoriprøve / oppkjøring / kostnad
12. Build tools hub and priority tools
13. Build guides
14. Build Om/Kontakt/Personvern/Kilder og metode
15. Add metadata/schema/sitemap/robots
16. Run QA
17. Fix issues
18. Report honestly

---

# 19. Final Report Required

When finished, report:

* what was built
* which pages exist
* which tools exist
* major files created/changed
* QA commands run
* QA results
* known limitations
* recommended next steps

Be honest.

Do not overstate.

Do not say “alt er perfekt” if anything remains.

---

# 20. Final Instruction

Build the best first version, not the largest version.

If a feature increases complexity more than user value, cut it.

If a page cannot be made factually safe, postpone it.

If data is missing, do not fake it.

If design feels generic, improve it.

If the project becomes too broad, reduce scope and increase quality.

The goal is a fast, trustworthy, useful, modern Norwegian product that can grow.
