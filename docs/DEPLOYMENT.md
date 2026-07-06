# Deployment – forerkortguiden.no

Intern driftsnotat. Ikke publisert som side.

## Oppsett

- **Anbefalt host:** Vercel
- **Rammeverk:** Next.js (App Router, versjon 16) – autodetekteres av Vercel
- **Byggkommando:** `npm run build`
- **Node:** 20.9+ (Next 16-krav)
- **Miljøvariabler:** ingen kreves
- **Produksjonsdomene:** forerkortguiden.no
- **Canonical-domene:** https://forerkortguiden.no (hardkodet i `lib/constants.ts`;
  www bør redirecte til apex)

## Stegvis

1. Importer GitHub-repoet `jaswane/forerkortguiden` i Vercel (standardinnstillinger holder).
2. Koble domenet forerkortguiden.no i Vercel og oppdater DNS hos registraren.
3. Sett www.forerkortguiden.no som redirect til https://forerkortguiden.no.

## Sjekkliste etter deploy

- [ ] https://forerkortguiden.no/sitemap.xml svarer og lister 34 URL-er
- [ ] https://forerkortguiden.no/robots.txt peker på sitemap
- [ ] Nøkkelsider rendrer: `/`, `/forerkortklasser`, `/forerkortklasser/klasse-b`,
      `/tilhenger`, `/verktoy`, `/kostnad`
- [ ] Verktøyene fungerer (tilhengerkalkulator, kostnadskalkulator, sjekklister)
- [ ] OG-bildet vises i en delingsdebugger (f.eks. opengraph.xyz): `/opengraph-image`
- [ ] Kildelenkene (vegvesen.no, lovdata.no) i kildeboksene åpner riktige sider
- [ ] Mobilvisning: ingen horisontal scroll, menyen fungerer
- [ ] Kjør gjerne `npm run check:routes https://forerkortguiden.no` og
      `npm run check:links https://forerkortguiden.no` mot produksjon

## Vedlikehold

- Gebyrsatser og regelendringer: se `docs/FACT_CHECK_NOTES.md` for revisjonspunkter
- Oppdater `CONTENT_UPDATED` i `lib/constants.ts` ved innholdsrevisjon
