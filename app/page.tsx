import Link from "next/link";
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

const intents = [
  {
    task: "Jeg skal ta billappen",
    hint: "Hele løpet fra trafikalt grunnkurs til oppkjøring",
    href: routes.taForerkort,
  },
  {
    task: "Jeg skal øvelseskjøre",
    hint: "Kravene til deg, ledsageren og bilen",
    href: routes.ovelseskjoring,
  },
  {
    task: "Jeg skal kjøre med tilhenger",
    hint: "Vektgrensene for B, B96 og BE – med kalkulator",
    href: routes.tilhenger,
  },
  {
    task: "Jeg lurer på hva det koster",
    hint: "Kostnadspostene forklart, og hvor du kan spare",
    href: routes.kostnad,
  },
  {
    task: "Jeg vet ikke hvilken klasse jeg trenger",
    hint: "Svar på noen få spørsmål og få pekt ut riktig klasse",
    href: routes.verktoyItem("hvilket-forerkort-trenger-jeg"),
  },
  {
    task: "Jeg er forelder eller ledsager",
    hint: "Kravene til ledsager og bil, med utskriftsvennlig sjekkliste",
    href: routes.verktoyItem("ovelseskjoring-sjekkliste"),
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
            Svar på førerkortspørsmålene dine – klasser, regler, kostnader og neste steg
            – forklart enkelt og bygget på offisielle kilder. {SITE_NAME} er uavhengig
            av myndigheter og trafikkskoler.
          </p>
          <div className="hero__actions">
            <Link
              className="btn btn--primary"
              href={routes.verktoyItem("hvilket-forerkort-trenger-jeg")}
            >
              Finn riktig klasse
            </Link>
            <Link className="btn btn--secondary" href={routes.taForerkort}>
              Se veien til billappen
            </Link>
          </div>
        </div>
      </section>

      <div className="container page">
        <section aria-labelledby="intensjoner" style={{ marginTop: 0 }}>
          <div className="intent">
            <div className="intent__head">
              <h2 id="intensjoner">Hva prøver du å finne ut?</h2>
            </div>
            <ul className="intent__grid">
              {intents.map((intent) => (
                <li key={intent.href + intent.task}>
                  <Link href={intent.href}>
                    <span>
                      <span className="intent__task">{intent.task}</span>
                      <span className="intent__hint">{intent.hint}</span>
                    </span>
                    <span className="intent__arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="klasser">
          <h2 id="klasser">Førerkortklassene</h2>
          <p className="prose">
            Norge har egne førerkortklasser for bil, moped, motorsykkel, lastebil og
            traktor. Her er de vanligste – se{" "}
            <Link href={routes.klasser}>hele klasseoversikten</Link> gruppert etter
            kjøretøytype.
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
            Enkle verktøy som hjelper deg videre – uten innlogging, og uten at noe lagres
            hos oss.
          </p>
          <ul className="link-list">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <Link href={tool.href}>{tool.cta}</Link>{" "}
                <span>– {tool.helps.toLowerCase()}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted">
            <Link href={routes.verktoy}>Se alle verktøyene samlet</Link>
          </p>
        </section>

        <section className="section" aria-labelledby="guider">
          <h2 id="guider">Guider for vanskelige valg</h2>
          <ul className="link-list">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link href={guide.href}>{guide.title}</Link>{" "}
                <span>– {guide.description}</span>
              </li>
            ))}
          </ul>
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
            {INDEPENDENCE_NOTE} Se{" "}
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
