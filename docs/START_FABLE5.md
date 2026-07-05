# START_FABLE5.md

## Oppgave

Du er Claude Fable 5 i Claude Code.

Du skal bygge første produksjonsklare versjon av:

**forerkortguiden.no / Førerkortguiden**

Dette er ikke en enkel landingsside. Behandle prosjektet som et seriøst produktbygg.

Du skal tenke som et lite senior produktteam:

- produktleder
- UX-designer
- UI-designer
- frontendutvikler
- teknisk arkitekt
- SEO-spesialist
- AI-søk-spesialist
- tilgjengelighetsekspert
- performance engineer
- redaktør
- QA-ansvarlig

Målet er å bygge den beste første versjonen, ikke den største versjonen.

---

# 1. Les dokumentene først

Les disse filene før du begynner å kode:

1. `docs/FABLE5_EXECUTION_BRIEF.md`
2. `docs/MASTER_PRD_FULL.docx`

`FABLE5_EXECUTION_BRIEF.md` styrer implementeringen.

`MASTER_PRD_FULL.docx` er bakgrunn, produktfilosofi og kvalitetsstandard.

Hvis dokumentene er i konflikt, følg `FABLE5_EXECUTION_BRIEF.md`.

Hvis `.docx`-filen er vanskelig å lese direkte, fortsett med execution brief som primær kilde. Ikke stopp med mindre et kritisk krav er uklart.

---

# 2. Prosjektidentitet

**Prosjekt:** Førerkortguiden  
**Domene:** https://forerkortguiden.no  
**Merkenavn i UI:** Førerkortguiden  
**Canonical-domene:** https://forerkortguiden.no  
**Språk:** Norsk i versjon 1  
**Footer:** Et prosjekt fra Swane Creative  
**Swane Creative URL:** https://swanecreative.no  
**Kontakt:** kontakt@swanecreative.no  

Bruk ASCII-slugs i URL-er.

Bruk korrekt norsk med æ, ø og å i synlig tekst.

Eksempel:

URL:

`/ovelseskjoring`

Synlig tekst:

`Øvelseskjøring`

---

# 3. Start med å inspisere repoet

Før du endrer filer:

1. Inspiser nåværende mappe.
2. Sjekk om repoet er tomt eller eksisterende prosjekt.
3. Les `package.json` hvis den finnes.
4. Sjekk eksisterende scripts.
5. Sjekk `.gitignore`.
6. Sjekk eksisterende appstruktur.
7. Sjekk om det finnes sensitive filer.
8. Ikke overskriv eksisterende meningsfullt arbeid uten å forstå det først.

Hvis repoet er tomt eller nesten tomt, opprett et nytt moderne Next.js-prosjekt med App Router og TypeScript.

Anbefalt stack:

- Next.js App Router
- TypeScript
- React
- CSS / CSS Modules / global CSS med design tokens
- statiske TypeScript-datafiler
- `sitemap.ts`
- `robots.ts`
- JSON-LD schema helpers
- ingen database i MVP
- ingen innlogging i MVP

Bruk server components som standard.

Bruk client components kun der interaktivitet faktisk trengs.

---

# 4. Produktmål

Bygg en rask, nyttig, moderne og troverdig norsk nettside om førerkort.

Nettstedet skal hjelpe brukeren med å forstå:

- hvilket førerkort de trenger
- hva de kan kjøre
- hvordan førerkortløpet fungerer
- hva det kan koste
- hvilke regler som gjelder
- hva neste steg er

Nettstedet skal føles som et ekte produkt, ikke som en demo.

Det skal være:

- raskt
- lett
- moderne
- troverdig
- mobil-first
- faktabasert
- nyttig
- SEO-klart
- AI-søk-klart
- tilgjengelig
- lett å videreutvikle
- tydelig uavhengig fra offentlige myndigheter

Det skal ikke føles som:

- en generisk AI-generert side
- en Tailwind-demo
- et tynt affiliate-nettsted
- en offentlig myndighetsside
- en innholdsfarm
- en prototype

---

# 5. Absolutte regler

Disse reglene skal aldri brytes:

- Ikke finn på fakta.
- Ikke finn på kilder.
- Ikke finn på priser.
- Ikke finn på trafikkskoler.
- Ikke finn på anmeldelser.
- Ikke finn på ratings.
- Ikke finn på rangeringer.
- Ikke lag falske lokale sider.
- Ikke lag falske trafikkskoleprofiler.
- Ikke bruk falske “best i test”-påstander.
- Ikke publiser Lorem Ipsum.
- Ikke publiser TODO-er.
- Ikke publiser placeholder-tekst.
- Ikke publiser “kommer snart”.
- Ikke bruk Review- eller AggregateRating-schema uten ekte data.
- Ikke gi inntrykk av at nettstedet er offisielt.
- Ikke bygg engelsk språkversjon i MVP.
- Ikke bygg konto/innlogging i MVP.
- Ikke bygg store funksjoner som krever ekte data hvis dataene ikke finnes.

Hvis informasjon ikke kan verifiseres, skal du:

1. fjerne den,
2. skrive den med tydelig forbehold,
3. eller sende brukeren videre til offisiell kilde.

Ikke gjett.

---

# 6. Kilder og tillit

Faktainnhold om regler og krav skal bygge på troverdige norske kilder.

Prioriter:

1. Statens vegvesen
2. Lovdata
3. Regjeringen.no
4. Politiet
5. Trygg Trafikk
6. Helsedirektoratet der helsekrav er relevant
7. Andre relevante norske offentlige kilder

Viktige regelsider skal ha kilde-/forbeholdsboks.

Ikke finn på kildelenker.

Ikke kopier store mengder tekst fra offentlige kilder. Forklar med egne ord, men baser fakta på troverdige kilder.

Bruk gjerne formuleringer som:

> Førerkortguiden er en uavhengig veiviser. Vi forklarer regler og prosesser basert på troverdige kilder, men er ikke en offentlig myndighetsside.

---

# 7. Designretning

Lag et moderne, spesialdesignet, skandinavisk produktdesign.

Designet skal være:

- lyst
- rent
- raskt
- rolig
- presist
- troverdig
- mobilvennlig
- nyttig før dekorativt

Bruk en moderne sans-serif-font.

Aktuelle retninger:

- Inter
- Geist
- Manrope
- IBM Plex Sans
- tilsvarende moderne sans-serif

Unngå:

- generisk Tailwind-look
- enorme pilleknapper
- store avrundede kort overalt
- tilfeldige gradienter
- tunge skygger
- stockfoto-preg
- startup-template-følelse
- AI-genererte personer som later som de er ekte brukere eller eksperter

Bruk:

- tydelig typografi
- god kontrast
- rolige farger
- moderat border-radius
- nyttige SVG-er, ikoner og illustrasjoner
- god spacing
- mobilvennlige tabeller
- “Kort forklart”-bokser
- kildebokser
- “Neste steg”-blokker
- sammenligningstabeller
- sjekklister
- printvennlige flater

Nettstedet skal se bedre og mer nyttig ut enn typiske norske sider om førerkort og førerkortklasser.

---

# 8. Obligatoriske MVP-sider

Bygg disse først:

- `/`
- `/forerkortklasser`
- `/forerkortklasser/klasse-b`
- `/forerkortklasser/klasse-b96`
- `/forerkortklasser/klasse-be`
- `/ta-forerkort`
- `/trafikalt-grunnkurs`
- `/ovelseskjoring`
- `/teoriprove`
- `/oppkjoring`
- `/kostnad`
- `/tilhenger`
- `/verktoy`
- `/guider`
- `/kilder-og-metode`
- `/om`
- `/kontakt`
- `/personvern`

Hvis kvaliteten fortsatt er høy, bygg også:

- `/forerkortklasser/klasse-am`
- `/forerkortklasser/klasse-a1`
- `/forerkortklasser/klasse-a2`
- `/forerkortklasser/klasse-a`
- `/forerkortklasser/klasse-c1`
- `/forerkortklasser/klasse-c`
- `/forerkortklasser/klasse-t`
- `/motorsykkel-og-moped`
- `/guider/b96-eller-be`
- `/guider/hvordan-velge-trafikkskole`
- `/guider/forerkort-og-kompetansebevis`

Ikke bygg lokale trafikkskolesider uten ekte data.

Ikke bygg falske trafikkskoleprofiler.

---

# 9. Obligatoriske verktøy

Bygg minst noen praktiske verktøy eller sjekklister.

Prioriter:

1. `/verktoy/hvilket-forerkort-trenger-jeg`
2. `/verktoy/kostnadskalkulator`
3. `/verktoy/tilhengerkalkulator`
4. `/verktoy/veien-til-lappen`
5. `/verktoy/ovelseskjoring-sjekkliste`

Verktøyene skal være:

- enkle
- raske
- mobil-first
- uten innlogging
- uten sensitiv datainnsamling
- tydelig merket med forbehold

Kostnadskalkulatoren må si tydelig at resultatet er et estimat.

Tilhengerverktøyet må ikke gi juridisk fasit hvis det ikke har nok data.

Bruk forsiktig språk, for eksempel:

> Dette peker mot at du bør lese om BE/B96, men du må alltid kontrollere bilens og tilhengerens vektgrenser.

Sjekklister kan bruke localStorage.

Hvis localStorage brukes, må `/personvern` forklare det.

---

# 10. Standard sidestruktur

Viktige sider bør vanligvis ha:

1. H1
2. kort intro
3. “Kort forklart”-boks
4. hovedforklaring
5. tabell, sjekkliste eller eksempel der det er nyttig
6. vanlige misforståelser
7. neste steg
8. relaterte lenker
9. FAQ der det er nyttig
10. kilde-/forbeholdsboks der det er relevant

Svar først.

Forklar etterpå.

Unngå lange generiske SEO-innledninger.

---

# 11. SEO og AI-søk

Optimaliser for både Google SEO og AI-søkemotorer.

Hver viktig side skal ha:

- unik title
- unik meta description
- canonical med `https://forerkortguiden.no`
- én tydelig H1
- logisk H2/H3-struktur
- direkte svar nær toppen
- interne lenker
- breadcrumbs der det er relevant
- FAQ der det er nyttig
- kilde/forbehold der det er relevant
- strukturert data der det passer
- inkludering i sitemap

Bruk schema ærlig.

Tillatte schema-typer der det passer:

- WebSite
- Organization
- WebPage
- Article
- BreadcrumbList
- FAQPage
- ItemList
- HowTo, men bare for ekte steg-for-steg-innhold

Ikke bruk falske ratings, falske anmeldelser eller unsupported schema.

AI-søk-vennlige sider bør ha:

- definisjoner
- korte sammendrag
- sammenligningstabeller
- FAQ
- konsistent terminologi
- kildebokser
- relasjoner mellom førerkortklasser, verktøy og guider

---

# 12. Internlenking

Bruk hub-and-spoke-struktur.

Viktige hubber:

- `/forerkortklasser`
- `/ta-forerkort`
- `/tilhenger`
- `/ovelseskjoring`
- `/kostnad`
- `/verktoy`
- `/guider`

Eksempel:

`/forerkortklasser/klasse-b` bør naturlig lenke til:

- trafikalt grunnkurs
- øvelseskjøring
- teoriprøve
- oppkjøring
- kostnad
- tilhenger
- B96
- BE
- relevante verktøy

`/tilhenger` bør naturlig lenke til:

- klasse B
- B96
- BE
- tilhengerverktøy
- B96 vs BE-guide
- offisiell kilde

Internlenker skal hjelpe brukeren, ikke bare SEO.

---

# 13. Data og komponenter

Bruk statiske datafiler for:

- førerkortklasser
- guider
- verktøy
- FAQ
- kilder
- navigasjon
- relaterte lenker
- synonymer

Foreslått struktur:

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

15. Monetization

Ikke bygg aggressiv monetization i MVP.

Bygg tillit først.

MVP kan inneholde:

samarbeidstekst på Kontakt
struktur for fremtidige partnerbokser
redaksjonell guide til valg av trafikkskole
redaksjonell guide til teoriprøveforberedelse

MVP skal ikke inneholde:

falske partnere
falske annonser
falske sponsede profiler
falske rabatter
falske trafikkskolerangeringer
skjulte affiliate-lenker

Alt fremtidig kommersielt innhold skal merkes tydelig.

16. Roadmap-områder

Ikke prioriter disse i MVP med mindre de kan bygges enkelt og trygt:

trafikkskoleregister
lokale SEO-sider
sponsede trafikkskoleprofiler
full truckførerbevis-seksjon
maskinførerbevis
kran/lift/ADR-kurs
avansert YSK-innhold
engelsk språkversjon
innlogging/konto
premium-verktøy

En enkel guide om forskjellen på førerkort, YSK, truckførerbevis og andre kompetansebevis er nyttig hvis den er faktabasert og forsiktig.

17. Anbefalt byggerekkefølge

Følg denne rekkefølgen:

Inspiser repoet
Sett opp Next.js/TypeScript-struktur
Bygg design tokens og global layout
Bygg Header/Footer
Bygg datamodeller
Bygg forsiden
Bygg førerkortklasse-hub
Bygg klasse B, B96 og BE
Bygg tilhenger-hub
Bygg ta førerkort / trafikalt grunnkurs / øvelseskjøring
Bygg teoriprøve / oppkjøring / kostnad
Bygg verktøy-hub og prioriterte verktøy
Bygg guider
Bygg Om/Kontakt/Personvern/Kilder og metode
Legg til metadata/schema/sitemap/robots
Kjør QA
Rett feil
Rapporter ærlig

Ikke start med lavprioriterte artikler.

Bygg grunnmuren først.

18. Arbeidsstil

Jobb selvstendig.

Ikke stopp for små beslutninger som kan løses med god faglig vurdering.

Ikke spør om godkjenning for hvert lille designvalg, filnavn eller komponentvalg.

Ta fornuftige produktbeslutninger og dokumenter dem kort.

Stopp bare hvis:

du risikerer å slette meningsfullt eksisterende arbeid
du finner secrets eller produksjonsnøkler
en beslutning krever betaling, ekstern konto eller deploy
en stor PRD-konflikt blokkerer fremdrift
du trenger informasjon som ikke kan tolkes trygt

Ellers: fortsett.

19. Permission mode

Hvis Claude Code spør om godkjenning for hver kommando, kan brukeren bruke en trygg allowlist eller mer permissive mode i et rent sandbox-repo.

Ikke be om full permission bypass i et repo med secrets, produksjonsnøkler eller ukjente sensitive filer.

I et rent nytt repo uten secrets kan du spørre brukeren om de vil aktivere mer permissive mode eller allowliste trygge kommandoer.

Trygge kommandoer kan være:

npm install
npm run lint
npm run typecheck
npm run build
npm run dev
git status
git diff
git log
git add
git commit

Ikke kjør destruktive kommandoer uten at det er tydelig nødvendig og trygt.

20. QA-krav

Før du rapporterer ferdig, inspiser package.json og kjør relevante QA-kommandoer.

Typisk:

npm run lint
npm run typecheck
npm run build

Hvis scripts heter noe annet, bruk faktiske scripts.

Ikke påstå suksess hvis kommandoene ikke er forsøkt.

Rett feil.

Sjekk også:

viktige ruter rendrer
mobilvisning fungerer
ingen horisontal overflow
header/footer fungerer
Swane Creative-footer finnes
kontakt@swanecreative.no finnes på Om/Kontakt
sitemap fungerer
robots fungerer
metadata finnes
canonical bruker forerkortguiden.no
schema er ærlig
ingen demo/filler-tekst finnes
ingen falske trafikkskoler finnes
ingen falske priser finnes
ingen falske ratings finnes
verktøy fungerer
print fungerer der det er relevant
kildebokser finnes der de trengs
21. Sluttrapport

Når du er ferdig, rapporter:

hva som ble bygget
hvilke sider som finnes
hvilke verktøy som finnes
viktige filer som ble opprettet/endret
QA-kommandoer som ble kjørt
QA-resultater
kjente begrensninger
anbefalte neste steg

Vær ærlig.

Ikke overdriv.

Ikke si at alt er perfekt hvis noe gjenstår.

22. Endelig instruks

Bygg den beste første versjonen, ikke den største versjonen.

Hvis en funksjon øker kompleksiteten mer enn brukerverdien, kutt den.

Hvis en side ikke kan gjøres faktamessig trygg, utsett den.

Hvis data mangler, ikke lat som de finnes.

Hvis designet føles generisk, forbedre det.

Hvis prosjektet blir for bredt, reduser scope og øk kvalitet.

Start nå med å inspisere repoet og lese dokumentene.