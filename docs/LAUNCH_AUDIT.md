# Lanseringsrevisjon – forerkortguiden.no

Intern samsvarsrevisjon mot MASTER_PRD_FULL.docx og FABLE5_EXECUTION_BRIEF.md.
Gjennomført 6. juli 2026, oppdatert etter analyse- og ikontillegg (siste commit
`7ac9eaa`, live på https://forerkortguiden.no).
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
- Kun statiske sider; TTFB 96–408 ms i produksjon med CDN-cache HIT; eneste
  tredjepartsskript er Google-taggen (Consent Mode, analyse denied før samtykke);
  ingen konsoll-/hydreringsfeil (verifisert mot lokal prod-bygg av samme kode);
  avhengigheter kun Next/React/TypeScript/ESLint
- Kontakt-e-post synlig KUN på /kontakt (verifisert i produksjon); Swane
  Creative-lenke i footer fungerer
- QA-skript i repo: check:routes og check:links, begge kjørbare mot produksjon

**Analyse og samtykke** (Consent Mode v2, endret i commit `8c7b4a1`+)
- Google Analytics 4 (`G-E7JQ1EJ0VH`) med **Google Consent Mode v2**. Google-taggen
  (`googletagmanager.com/gtag/js`) lastes på hver side slik at Googles tag-detektor
  finner den. Consent Mode settes til `denied` som standard FØR `config`
  (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization` alle
  denied), så ingen analyse-cookie (`_ga`) settes før samtykke.
- Analyse-lagring oppgraderes til `granted` kun etter opt-in: init-skriptet leser
  lagret samtykke og oppgraderer umiddelbart hvis brukeren allerede har godtatt,
  og «Godta analyse» kaller `gtag('consent','update',{analytics_storage:'granted'})`
  i sanntid. Annonserelatert lagring holdes alltid `denied`.
- Endringen fra «last først etter samtykke» til Consent Mode default-denied ble
  gjort fordi Googles tag-detektor ikke fant taggen når den ikke lastet før
  samtykke. Brukeren kan fortsatt avvise, og «Avvis» beholder `denied`.
- Samtykke lagres lokalt under nøkkelen `forerkortguiden:analytics-consent`
  (`accepted`/`rejected`). next/script dedupliserer taggen på id (ingen
  dobbeltlasting ved klientnavigasjon).
- Banneret er fast i bunnen, mobilvennlig, uten horisontal overflow, med synlige
  fokusstiler; skjult i print. Runtime-flyten er verifisert interaktivt mot lokal
  prod-bygg av samme commit.
- /personvern forklarer at taggen kan lastes for samtykke/måling, at analyse-
  lagring er denied før samtykke (ingen `_ga`-cookie), lokalt lagret valg, at man
  kan avvise og bruke siden normalt, og har en «Endre analysevalg»-knapp.

## 2. Delvis dekket

- **Core Web Vitals:** rask etter alle praktiske målinger, men Lighthouse/felt-data
  er ikke kjørt (verktøyet var ikke tilgjengelig lokalt). Bør måles etter lansering.
- **Schema-validitet:** JSON-LD er bygget etter schema.org-typene og er ærlig, men
  er ikke kjørt gjennom Googles Rich Results-test. Antas gyldig; bør bekreftes.
- **Interaktiv test på live domene:** verktøy/meny/localStorage og samtykkebanneret
  er verifisert interaktivt mot lokal produksjonsbygg av samme commit, og deployet
  JS i produksjon inneholder identisk logikk (bekreftet ved å inspisere klient-
  bundelen). Et menneskelig klikk-gjennom på selve domenet gjenstår fordi
  automatisert nettleser mot eksternt domene ikke var tilgjengelig i økten.

**Ikoner (nå dekket):** `favicon.ico` (16+32 px) og `apple-touch-icon` (180×180)
er lagt til (commit `d8f32ef`) og svarer 200 i produksjon, sammen med `icon.svg`.

## 3. Ikke relevant for MVP (bevisst utelatt, i tråd med brief)

- Monetisering, partnerbokser med reelt innhold, /go-ruter
- Trafikkskoleregister, lokale SEO-sider, sponsede profiler
- Engelsk språkversjon, innlogging/konto, database
- Truckførerbevis-/maskinførerbevis-seksjoner utover oversiktsguiden
- Blogg/nyhetsstrøm (PRD beskriver innholdsvekst som fase 2+)

## 4. Manuelle oppgaver som gjenstår

1. Google Search Console: registrer eiendom, send inn sitemap.xml
2. Klikk gjennom verktøyene, mobilmenyen og samtykkebanneret på en fysisk mobil
   mot live domene; bekreft i Nettverk-fanen at `gtag/js` ikke lastes før «Godta»
   og at GA registrerer treff i sanntidsrapporten etter samtykke
3. Test delingsbilde i OG-debugger (opengraph.xyz e.l.)
4. Valider et par sider i Googles Rich Results-test
5. Kjør Lighthouse mot produksjon (mobil + desktop)
6. Årlig/halvårlig: revider gebyrsatser og regelendringer per FACT_CHECK_NOTES.md,
   oppdater CONTENT_UPDATED i lib/constants.ts

## 5. Reelle blokkere

Ingen. Bygg, rute-, lenke- og metadatasjekker er grønne i produksjon, faktainnholdet
er kildeverifisert, og ingen av punktene under «delvis dekket» hindrer lansering
eller indeksering.
