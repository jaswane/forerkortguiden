import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { NextSteps } from "@/components/content/NextSteps";
import { ShortAnswer, WarningBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Bil og tilhenger – hvilket førerkort trenger du?",
  description:
    "Tilhengerreglene for klasse B, B96 og BE forklart med eksempler: vektgrensene, hva vognkortet betyr, og hvilken klasse du trenger for campingvogn eller hestehenger.",
  path: routes.tilhenger,
});

const faqItems = [
  {
    question: "Hvor tung tilhenger kan jeg trekke med vanlig førerkort (klasse B)?",
    answer:
      "Tilhenger med tillatt totalvekt opptil 750 kg kan alltid trekkes med klasse B. Tyngre tilhenger er tillatt hvis bilens og tilhengerens tillatte totalvekt til sammen ikke overstiger 3 500 kg. I tillegg må bilens vognkort tillate vekten.",
  },
  {
    question: "Trenger jeg B96 eller BE for campingvogn?",
    answer:
      "Det avhenger av vektene. Bil pluss campingvogn ender ofte over 3 500 kg samlet tillatt totalvekt, og da trenger du minst B96 (opptil 4 250 kg samlet). Tyngre kombinasjoner krever BE.",
  },
  {
    question: "Hva betyr tillatt totalvekt?",
    answer:
      "Tillatt totalvekt er maksvekten kjøretøyet er registrert for i vognkortet – egenvekt pluss maksimal last. Det er disse vektene førerkortreglene regner med, ikke hva bilen eller hengeren faktisk veier på veien.",
  },
  {
    question: "Kan bilen min trekke tilhengeren selv om førerkortet tillater det?",
    answer:
      "Ikke nødvendigvis. Bilens vognkort angir maksimal tilhengervekt med og uten brems. Både førerkortreglene og vognkortets grenser må være oppfylt.",
  },
  {
    question: "Hva er forskjellen på B96 og BE?",
    answer:
      "B96 gir rett til vogntog med samlet tillatt totalvekt opptil 4 250 kg og krever bare et kurs. BE gir rett til tilhenger med tillatt totalvekt opptil 3 500 kg og krever praktisk prøve.",
  },
];

export default function TilhengerPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Tilhenger", path: routes.tilhenger }]} />
      <h1>Bil og tilhenger – hvilket førerkort trenger du?</h1>
      <p className="lead">
        Tilhengerreglene handler om <strong>tillatt totalvekt</strong> – vektene i
        vognkortet, ikke hva bilen og hengeren faktisk veier. Her er reglene for B, B96
        og BE forklart enkelt.
      </p>

      <ShortAnswer>
        <p>
          Med klasse B kan du trekke tilhenger opptil 750 kg. Tyngre tilhenger krever at
          bil + henger samlet holder seg under 3 500 kg – ellers trenger du B96 (samlet
          opptil 4 250 kg) eller BE (tilhenger opptil 3 500 kg).
        </p>
      </ShortAnswer>

      <section className="prose">
        <h2>Reglene i tabell</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Klasse</th>
                <th scope="col">Tilhengergrense</th>
                <th scope="col">Krav</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Link href={routes.klasse("klasse-b")}>B</Link>
                </th>
                <td>
                  Tilhenger opptil 750 kg (vogntog opptil 4 250 kg), eller tyngre
                  tilhenger hvis bil + henger samlet ≤ 3 500 kg
                </td>
                <td>Vanlig førerkort klasse B</td>
              </tr>
              <tr>
                <th scope="row">
                  <Link href={routes.klasse("klasse-b96")}>B96</Link>
                </th>
                <td>Bil + tilhenger samlet opptil 4 250 kg</td>
                <td>Obligatorisk kurs (minst 7 timer), ingen prøve</td>
              </tr>
              <tr>
                <th scope="row">
                  <Link href={routes.klasse("klasse-be")}>BE</Link>
                </th>
                <td>Tilhenger opptil 3 500 kg</td>
                <td>Lastsikringskurs og praktisk prøve</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <WarningBox title="Vognkortet setter egne grenser">
        <p>
          Førerkortklassen er bare halve svaret. Bilens vognkort angir hvor tung
          tilhenger bilen har lov til å trekke – ofte lavere enn førerkortreglene
          tillater. Sjekk alltid <strong>maksimal tilhengervekt</strong> i bilens
          vognkort og tilhengerens tillatte totalvekt før du kjører.
        </p>
      </WarningBox>

      <section className="prose">
        <h2>To eksempler</h2>
        <h3>Eksempel 1: Liten varehenger</h3>
        <p>
          Bil med tillatt totalvekt 2 200 kg og henger med tillatt totalvekt 750 kg.
          Hengeren er innenfor 750-kilosgrensen → <strong>klasse B holder</strong>, så
          lenge vognkortet tillater vekten.
        </p>
        <h3>Eksempel 2: Campingvogn</h3>
        <p>
          Bil med tillatt totalvekt 2 400 kg og campingvogn med tillatt totalvekt 1 600
          kg. Samlet 4 000 kg – over 3 500 kg, men innenfor 4 250 kg →{" "}
          <strong>B96 er nok</strong>. Hadde vognen hatt tillatt totalvekt 2 000 kg
          (samlet 4 400 kg), måtte du hatt <strong>BE</strong>.
        </p>
      </section>

      <section className="prose">
        <h2>Vanlige misforståelser</h2>
        <dl className="definition-list">
          <div>
            <dt>«Det er den faktiske vekten som teller.»</dt>
            <dd>
              Nei – førerkortreglene regner med tillatt totalvekt fra vognkortet. En tom
              hestehenger med tillatt totalvekt 2 000 kg regnes som 2 000 kg.
            </dd>
          </div>
          <div>
            <dt>«Har jeg BE, kan bilen trekke alt.»</dt>
            <dd>
              Nei, bilens vognkort setter egne tekniske grenser som gjelder uansett
              førerkortklasse.
            </dd>
          </div>
        </dl>
      </section>

      <NextSteps
        steps={[
          {
            label: "Tilhengerkalkulator",
            href: routes.verktoyItem("tilhengerkalkulator"),
            description: "legg inn vektene og se hvilken klasse de peker mot",
          },
          { label: "Guide: B96 eller BE?", href: routes.guide("b96-eller-be") },
          { label: "Klasse B96", href: routes.klasse("klasse-b96") },
          { label: "Klasse BE", href: routes.klasse("klasse-be") },
        ]}
      />

      <Faq items={faqItems} />

      <SourceBox
        sourceIds={["vegvesenForerkort", "forerkortforskriften"]}
        caveat="Vektgrensene følger av førerkortforskriften. Kontroller alltid bilens og tilhengerens vognkort i tillegg – tekniske grenser gjelder uavhengig av førerkortklasse."
      />
    </div>
  );
}
