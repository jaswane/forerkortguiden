import Link from "next/link";
import { CardGrid } from "@/components/content/Card";
import { InfoBox } from "@/components/content/Boxes";
import { JsonLd } from "@/components/seo/JsonLd";
import { guides } from "@/data/guides";
import { licenseClasses } from "@/data/licenseClasses";
import { synonyms } from "@/data/synonyms";
import { tools } from "@/data/tools";
import { INDEPENDENCE_NOTE, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { webPageSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: `${SITE_NAME} – uavhengig veiviser til førerkort i Norge`,
  description: SITE_DESCRIPTION,
  path: "/",
});

const popularTasks = [
  {
    title: "Hvilket førerkort trenger jeg?",
    href: routes.verktoyItem("hvilket-forerkort-trenger-jeg"),
    description: "Svar på noen få spørsmål og få pekt ut riktig klasse.",
    meta: "Verktøy",
  },
  {
    title: "Ta førerkort klasse B",
    href: routes.klasse("klasse-b"),
    description: "Alderskrav, hva du kan kjøre og veien fra grunnkurs til oppkjøring.",
    meta: "Personbil",
  },
  {
    title: "Hva koster førerkortet?",
    href: routes.kostnad,
    description: "Kostnadene som inngår, hva som påvirker prisen og hvordan du kan spare.",
    meta: "Kostnad",
  },
  {
    title: "Kan jeg trekke denne tilhengeren?",
    href: routes.tilhenger,
    description: "Vektgrensene for B, B96 og BE forklart – med kalkulator.",
    meta: "Tilhenger",
  },
  {
    title: "Øvelseskjøring – reglene",
    href: routes.ovelseskjoring,
    description: "Krav til deg, ledsageren og bilen før du kan øve privat.",
    meta: "Øvelseskjøring",
  },
  {
    title: "Teoriprøven",
    href: routes.teoriprove,
    description: "Slik fungerer prøven, når du kan ta den og hvordan du forbereder deg.",
    meta: "Teoriprøve",
  },
];

export default function HomePage() {
  const mainClasses = licenseClasses.filter((klass) =>
    ["B", "B96", "BE", "AM", "A1", "A"].includes(klass.code)
  );

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Finn ut hvilket førerkort du trenger – og hva neste steg er</h1>
          <p className="lead">
            {SITE_NAME} forklarer førerkortklasser, opplæring, prøver, kostnader og
            tilhengerregler i klart språk, basert på troverdige kilder. Uavhengig av
            myndigheter og trafikkskoler.
          </p>
          <div className="hero__actions">
            <Link
              className="btn btn--primary"
              href={routes.verktoyItem("hvilket-forerkort-trenger-jeg")}
            >
              Hvilket førerkort trenger jeg?
            </Link>
            <Link className="btn btn--secondary" href={routes.taForerkort}>
              Slik tar du førerkortet
            </Link>
          </div>
        </div>
      </section>

      <div className="container page">
        <section aria-labelledby="oppgaver">
          <h2 id="oppgaver" style={{ marginTop: 0 }}>
            Hva lurer du på?
          </h2>
          <CardGrid items={popularTasks} />
        </section>

        <section className="section" aria-labelledby="klasser">
          <h2 id="klasser">Førerkortklassene</h2>
          <p className="prose">
            Norge har egne førerkortklasser for bil, moped, motorsykkel, lastebil og
            traktor. Her er de vanligste – se{" "}
            <Link href={routes.klasser}>alle klassene</Link> for full oversikt.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Klasse</th>
                  <th scope="col">Gjelder</th>
                  <th scope="col">Alderskrav</th>
                </tr>
              </thead>
              <tbody>
                {mainClasses.map((klass) => (
                  <tr key={klass.slug}>
                    <th scope="row">
                      <Link href={routes.klasse(klass.slug)}>{klass.code}</Link>
                    </th>
                    <td>{klass.tableFacts.vehicles}</td>
                    <td>{klass.tableFacts.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section" aria-labelledby="verktoy">
          <h2 id="verktoy">Praktiske verktøy</h2>
          <p className="prose">
            Enkle verktøy som hjelper deg videre – uten innlogging og uten at noe lagres
            hos oss.
          </p>
          <CardGrid
            items={tools.map((tool) => ({
              title: tool.cardTitle,
              href: tool.href,
              description: tool.description,
            }))}
          />
        </section>

        <section className="section" aria-labelledby="guider">
          <h2 id="guider">Guider</h2>
          <CardGrid
            items={guides.map((guide) => ({
              title: guide.cardTitle,
              href: guide.href,
              description: guide.description,
            }))}
          />
        </section>

        <section className="section prose" aria-labelledby="ordliste">
          <h2 id="ordliste">Vanlige ord, kort forklart</h2>
          <dl className="definition-list">
            {synonyms.slice(0, 6).map((synonym) => (
              <div key={synonym.term}>
                <dt>{synonym.term}</dt>
                <dd>{synonym.meaning}</dd>
              </div>
            ))}
          </dl>
        </section>

        <InfoBox title="Uavhengig veiviser">
          <p>
            {INDEPENDENCE_NOTE} Les mer om{" "}
            <Link href={routes.kilderOgMetode}>kildene og metoden vår</Link>.
          </p>
        </InfoBox>
      </div>
      <JsonLd
        data={webPageSchema({
          title: `${SITE_NAME} – uavhengig veiviser til førerkort i Norge`,
          description: SITE_DESCRIPTION,
          path: "/",
        })}
      />
    </>
  );
}
