import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CardGrid } from "@/components/content/Card";
import { Faq } from "@/components/content/Faq";
import { NextSteps } from "@/components/content/NextSteps";
import { ShortAnswer } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { licenseClasses } from "@/data/licenseClasses";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Motorsykkel og moped – førerkortklassene forklart",
  description:
    "AM, A1, A2 og A forklart: aldersgrenser fra 16 til 24 år, effektgrenser og veien mellom klassene. Finn ut hvilken MC- eller mopedklasse du trenger.",
  path: routes.motorsykkelOgMoped,
});

const faqItems = [
  {
    question: "Hvilket førerkort trenger jeg for moped?",
    answer:
      "Klasse AM, som kan tas fra du er 16 år. Har du førerkort klasse B, kan du allerede kjøre moped.",
  },
  {
    question: "Når kan jeg kjøre motorsykkel?",
    answer:
      "Lett motorsykkel (A1) fra 16 år, mellomklasse (A2) fra 18 år, og tung motorsykkel (A) fra 24 år – eller fra 20 år hvis du har hatt A2 i to år.",
  },
  {
    question: "Må jeg gå gradene fra A1 til A?",
    answer:
      "Nei, du kan ta A2 direkte fra 18 år og A direkte fra 24 år. Fordelen med å gå gradene er at utvidelse fra A2 til A bare krever et kurs, ikke ny prøve.",
  },
];

export default function MotorsykkelOgMopedPage() {
  const mcClasses = licenseClasses.filter((klass) =>
    ["AM", "A1", "A2", "A"].includes(klass.code)
  );

  return (
    <div className="container page">
      <Breadcrumbs
        crumbs={[{ name: "Motorsykkel og moped", path: routes.motorsykkelOgMoped }]}
      />
      <h1>Motorsykkel og moped – hvilken klasse trenger du?</h1>
      <p className="lead">
        Tohjulingene har fire førerkortklasser, delt etter alder og motorstørrelse. Her
        er oversikten som hjelper deg å velge riktig.
      </p>

      <ShortAnswer>
        <p>
          Moped (AM) og lett motorsykkel (A1) kan tas fra 16 år. Mellomklasse motorsykkel
          (A2) krever 18 år, og tung motorsykkel (A) krever 24 år – eller 20 år hvis du
          har hatt A2 i minst to år.
        </p>
      </ShortAnswer>

      <div className="table-wrap">
        <table>
          <caption>MC- og mopedklassene</caption>
          <thead>
            <tr>
              <th scope="col">Klasse</th>
              <th scope="col">Gjelder</th>
              <th scope="col">Alderskrav</th>
            </tr>
          </thead>
          <tbody>
            {mcClasses.map((klass) => (
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

      <h2>Les mer om hver klasse</h2>
      <CardGrid
        items={mcClasses.map((klass) => ({
          title: `Klasse ${klass.code} – ${klass.name}`,
          href: routes.klasse(klass.slug),
          description: klass.cardSummary,
        }))}
        columns={2}
      />

      <section className="prose">
        <h2>Trappemodellen: fra A1 til A</h2>
        <p>
          MC-klassene bygger på hverandre. Hver klasse omfatter de mindre: A2 gir rett
          til alt i A1, og A gir rett til alt i A2. Går du gradene, kan du utvide fra A2
          til A med bare et obligatorisk kurs etter to år – uten ny teoriprøve eller
          oppkjøring.
        </p>
      </section>

      <NextSteps
        steps={[
          {
            label: "Hvilket førerkort trenger jeg?",
            href: routes.verktoyItem("hvilket-forerkort-trenger-jeg"),
            description: "svar på noen få spørsmål",
          },
          { label: "Hele førerkortløpet", href: routes.taForerkort },
          { label: "Alle førerkortklasser", href: routes.klasser },
        ]}
      />

      <Faq items={faqItems} />

      <SourceBox sourceIds={["vegvesenForerkort", "forerkortforskriften"]} />
    </div>
  );
}
