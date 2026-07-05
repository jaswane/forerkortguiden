import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CardGrid } from "@/components/content/Card";
import { Faq } from "@/components/content/Faq";
import { InfoBox } from "@/components/content/Boxes";
import { JsonLd } from "@/components/seo/JsonLd";
import { licenseClasses } from "@/data/licenseClasses";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { itemListSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Førerkortklasser i Norge – full oversikt",
  description:
    "Oversikt over alle vanlige førerkortklasser i Norge: B, B96, BE, AM, A1, A2, A, C1, C og T. Se alderskrav og hva hver klasse gir rett til å kjøre.",
  path: routes.klasser,
});

const hubFaq = [
  {
    question: "Hvilken førerkortklasse trenger jeg for vanlig bil?",
    answer:
      "Klasse B er den vanlige klassen for personbil med tillatt totalvekt opptil 3 500 kg. Skal du trekke tyngre tilhenger, kan du utvide med B96 eller BE.",
  },
  {
    question: "Hva er laveste alder for førerkort i Norge?",
    answer:
      "Flere klasser kan tas fra 16 år, blant annet moped (AM), lett motorsykkel (A1) og traktor (T). Personbil (klasse B) krever 18 år.",
  },
  {
    question: "Gir én klasse rett til å kjøre flere kjøretøy?",
    answer:
      "Ja. For eksempel gir klasse B også rett til å kjøre moped, og klasse A omfatter alt som inngår i A1 og A2. Detaljene står på hver klasseside.",
  },
];

export default function KlasserPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Førerkortklasser", path: routes.klasser }]} />
      <h1>Førerkortklasser i Norge</h1>
      <p className="lead">
        Hver førerkortklasse gir rett til å kjøre bestemte kjøretøy. Her finner du
        oversikten – med alderskrav og hva hver klasse dekker – slik at du raskt ser
        hvilken klasse du bør lese mer om.
      </p>

      <InfoBox title="Usikker på hvilken klasse du trenger?">
        <p>
          Prøv verktøyet{" "}
          <Link href={routes.verktoyItem("hvilket-forerkort-trenger-jeg")}>
            «Hvilket førerkort trenger jeg?»
          </Link>{" "}
          – svar på noen få spørsmål og få pekt ut riktig klasse.
        </p>
      </InfoBox>

      <div className="table-wrap">
        <table>
          <caption>Førerkortklassene i oversikt</caption>
          <thead>
            <tr>
              <th scope="col">Klasse</th>
              <th scope="col">Gjelder</th>
              <th scope="col">Alderskrav</th>
            </tr>
          </thead>
          <tbody>
            {licenseClasses.map((klass) => (
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
      <p className="text-muted">
        Tabellen er forenklet. Se hver klasseside for begrensninger og detaljer, og
        kontroller alltid gjeldende regler hos Statens vegvesen.
      </p>

      <h2>Alle klassesidene</h2>
      <CardGrid
        items={licenseClasses.map((klass) => ({
          title: `Klasse ${klass.code} – ${klass.name}`,
          href: routes.klasse(klass.slug),
          description: klass.cardSummary,
        }))}
      />

      <Faq items={hubFaq} />

      <JsonLd
        data={itemListSchema({
          name: "Førerkortklasser i Norge",
          items: licenseClasses.map((klass) => ({
            name: `Førerkort klasse ${klass.code}`,
            path: routes.klasse(klass.slug),
          })),
        })}
      />
    </div>
  );
}
