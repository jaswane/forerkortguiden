import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { InfoBox } from "@/components/content/Boxes";
import { sources } from "@/data/sources";
import { CONTENT_UPDATED, INDEPENDENCE_NOTE, SITE_NAME } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Kilder og metode – slik jobber Førerkortguiden",
  description:
    "Hvilke kilder Førerkortguiden bygger på, hvordan innholdet kvalitetssikres, og hva vi gjør når regler endres. Full åpenhet om metode og uavhengighet.",
  path: routes.kilderOgMetode,
});

export default function KilderOgMetodePage() {
  const allSources = Object.values(sources);
  return (
    <div className="container page">
      <Breadcrumbs
        crumbs={[{ name: "Kilder og metode", path: routes.kilderOgMetode }]}
      />
      <div className="prose">
        <h1>Kilder og metode</h1>
        <p className="lead">{INDEPENDENCE_NOTE}</p>

        <h2>Prinsippene våre</h2>
        <ul>
          <li>
            <strong>Fakta bygger på offisielle kilder.</strong> Regler, aldersgrenser og
            krav hentes fra Statens vegvesen, Lovdata og andre offentlige kilder – aldri
            fra andres oppsummeringer.
          </li>
          <li>
            <strong>Vi skiller fakta fra råd.</strong> Dokumenterte krav, praktiske råd
            og estimater merkes og formuleres forskjellig.
          </li>
          <li>
            <strong>Vi oppgir ikke tall vi ikke kan stå for.</strong> Priser og gebyrer
            endres jevnlig, derfor lenker vi til offisielle satser i stedet for å gjengi
            dem, og merker alle anslag tydelig som estimater.
          </li>
          <li>
            <strong>Usikkerhet sies høyt.</strong> Der regelverket har detaljer vi ikke
            dekker, sier vi det og peker til offisiell kilde.
          </li>
        </ul>

        <h2>Kildene vi bruker</h2>
        <dl className="definition-list">
          {allSources.map((source) => (
            <div key={source.id}>
              <dt>
                <a href={source.url} rel="noopener">
                  {source.name}
                </a>
              </dt>
              <dd>{source.description}</dd>
            </div>
          ))}
        </dl>

        <h2>Slik vedlikeholdes innholdet</h2>
        <p>
          Hver regelside har en kildeboks med dato for siste gjennomgang. Når regelverket
          endres, oppdaterer vi berørte sider og datoen. Finner du noe som er utdatert
          eller upresist, setter vi stor pris på beskjed – se{" "}
          <a href={routes.kontakt}>kontaktsiden</a>.
        </p>
        <p className="text-muted">Siste helhetlige gjennomgang: {CONTENT_UPDATED}.</p>

        <h2>Uavhengighet</h2>
        <p>
          {SITE_NAME} drives av Swane Creative og er ikke tilknyttet Statens vegvesen
          eller andre myndigheter. Vi har ingen avtaler med trafikkskoler, publiserer
          ikke rangeringer av skoler, og har ingen betalt plassering i innholdet.
          Eventuelt fremtidig kommersielt innhold vil bli tydelig merket.
        </p>

        <InfoBox title="Ved motstrid">
          <p>
            Hvis noe på dette nettstedet skulle avvike fra informasjon hos Statens
            vegvesen eller gjeldende forskrift, er det alltid den offisielle kilden som
            gjelder.
          </p>
        </InfoBox>
      </div>
    </div>
  );
}
