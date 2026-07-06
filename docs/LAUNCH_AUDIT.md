# Lanseringsrevisjon – forerkortguiden.no

Intern samsvarsrevisjon mot MASTER_PRD_FULL.docx og FABLE5_EXECUTION_BRIEF.md.
Gjennomført 6. juli 2026, mot commit `ecf6543` (live på https://forerkortguiden.no).
Merk: felles Swane Creative-sjekkliste finnes ikke i docs/ og er derfor ikke brukt
som grunnlag (ikke gjenskapt, jf. instruks).

## 1. Dekket

**Ruter og struktur**
- Alle 18 obligatoriske MVP-ruter + alle 16 valgfrie (10 klassesider, MC-hub,
  3 guider, 5 verktøy) – 34/34 svarer 200 i produksjon
- Hub-and-spoke-internlenking: 35/35 interne lenker OK; 404-side med gyldige lenker
- Brødsmuler med samsvarende BreadcrumbList-schema

**Innhold og tillit**
- Faktainnhold live-verifisert mot vegvesen.no/lovdata.no (se FACT_CHECK_NOTES.md);
  10 presiseringer rettet i sluttpasset
- Kildebokser med «sist gjennomgått»-dato på alle regelsider; siterte kilder brukes reelt
- Ingen falske trafikkskoler, priser, ratings, rangeringer eller «best i test»;
  alle estimater tydelig merket; uavhengighet fra myndigheter kommunisert
  (footer, /om, /kilder-og-metode, Organization-schema = Swane Creative)
- Svar-først-struktur med «Kort forklart»-bokser, tabeller, steglister og FAQ

**Verktøy** (PRD kap. om kalkulatorer/sjekklister)
- Alle 5 prioriterte verktøy bygget og produksjonsverifisert; localStorage-sjekklister
  med nullstill-knapp; printvennlige sjekklister (print-CSS + PrintButton);
  forsiktig språk og forbehold i alle verktøysvar

**SEO/AI-søk**
- Unike titler/beskrivelser på alle 34 sider (verifisert i produksjon), korrekte
  canonicals på https://forerkortguiden.no, lang="nb", ingen noindex
- sitemap.xml (34 URL-er) og robots.txt fungerer; www → apex-redirect
- Ærlig schema: WebSite, Organization, WebPage, Article (kun guider), BreadcrumbList,
  FAQPage (kun ved synlig FAQ), ItemList; ingen Review/AggregateRating
- og:image + twitter:card på alle sider (fikset i ecf6543)

**Design og tilgjengelighet**
- Eget designsystem uten UI-biblioteker; lav radius, ingen pilleknapper; strekikoner
  (linje-/kjøretøyikoner per PRD 4.12/8.33), aria-hidden på dekorative SVG-er
- A11y-sveip: 1 h1/side, logisk overskriftsrekkefølge, alle felter med label,
  alle knapper navngitt, synlig fokus, aria-expanded/-controls på mobilmeny
- Null horisontal overflow ved 375/768/1280/1440 px

**Ytelse og drift**
- Kun statiske sider; TTFB 96–408 ms i produksjon med CDN-cache HIT; ingen
  tredjepartsskript; ingen konsoll-/hydreringsfeil (verifisert mot lokal prod-bygg
  av samme kode); avhengigheter kun Next/React/TypeScript/ESLint
- Kontakt-e-post synlig KUN på /kontakt (verifisert i produksjon); Swane
  Creative-lenke i footer fungerer
- Personvern: ærlig om ingen analyse/statistikk, localStorage forklart med
  slettemulighet, advarsel mot å legge inn sensitive data (PRD-krav om nøktern
  forklaring ved analysebruk er ikke utløst – ingen analyse er installert)
- QA-skript i repo: check:routes og check:links, begge kjørbare mot produksjon

## 2. Delvis dekket

- **Favicons:** SVG-ikon fungerer i moderne nettlesere (`/icon.svg`, lenket i head),
  men `favicon.ico`-fallback og `apple-touch-icon` mangler (404). Konsekvens: eldre
  nettlesere og iOS «legg til på hjemskjerm» får ikke ikon. Ikke blokkerende.
- **Core Web Vitals:** rask etter alle praktiske målinger, men Lighthouse/felt-data
  er ikke kjørt (verktøyet var ikke tilgjengelig lokalt). Bør måles etter lansering.
- **Schema-validitet:** JSON-LD er bygget etter schema.org-typene og er ærlig, men
  er ikke kjørt gjennom Googles Rich Results-test. Antas gyldig; bør bekreftes.
- **Interaktiv test på live domene:** verktøy/meny/localStorage er verifisert
  interaktivt mot lokal produksjonsbygg av samme commit og alle JS-chunks laster i
  produksjon, men et menneskelig klikk gjennom på selve domenet gjenstår.

## 3. Ikke relevant for MVP (bevisst utelatt, i tråd med brief)

- Monetisering, partnerbokser med reelt innhold, /go-ruter
- Trafikkskoleregister, lokale SEO-sider, sponsede profiler
- Analyse/statistikk (kan legges til senere; /personvern må da oppdateres først)
- Engelsk språkversjon, innlogging/konto, database
- Truckførerbevis-/maskinførerbevis-seksjoner utover oversiktsguiden
- Blogg/nyhetsstrøm (PRD beskriver innholdsvekst som fase 2+)

## 4. Manuelle oppgaver som gjenstår

1. Google Search Console: registrer eiendom, send inn sitemap.xml
2. Klikk gjennom verktøyene og mobilmenyen på en fysisk mobil mot live domene
3. Test delingsbilde i OG-debugger (opengraph.xyz e.l.)
4. Valider et par sider i Googles Rich Results-test
5. Kjør Lighthouse mot produksjon (mobil + desktop)
6. Vurder å legge til apple-touch-icon/favicon.ico i neste vedlikeholdsrunde
7. Årlig/halvårlig: revider gebyrsatser og regelendringer per FACT_CHECK_NOTES.md,
   oppdater CONTENT_UPDATED i lib/constants.ts

## 5. Reelle blokkere

Ingen. Bygg, rute-, lenke- og metadatasjekker er grønne i produksjon, faktainnholdet
er kildeverifisert, og ingen av punktene under «delvis dekket» hindrer lansering
eller indeksering.
