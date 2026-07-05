import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { ShortAnswer, WarningBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { StepList } from "@/components/content/StepList";
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

const comparePanels = [
  {
    code: "B",
    name: "Vanlig førerkort",
    figure: "750 kg",
    figureNote: "tilhengerens tillatte totalvekt – alltid lov",
    rows: [
      {
        label: "Unntak",
        value: "Tyngre henger er OK hvis bil + henger samlet er maks 3 500 kg",
      },
      { label: "Krav", value: "Ingen utover klasse B" },
      { label: "Typisk", value: "Liten varehenger, liten båthenger" },
    ],
    linkLabel: "Se klasse B",
    href: routes.klasse("klasse-b"),
  },
  {
    code: "B96",
    name: "Utvidelse med kurs",
    figure: "4 250 kg",
    figureNote: "bil + tilhenger samlet tillatt totalvekt",
    rows: [
      { label: "Unntak", value: "Over 4 250 kg samlet? Da trenger du BE" },
      { label: "Krav", value: "Obligatorisk kurs på minst 7 timer – ingen prøve" },
      { label: "Typisk", value: "Middels campingvogn, større varehenger" },
    ],
    linkLabel: "Se klasse B96",
    href: routes.klasse("klasse-b96"),
  },
  {
    code: "BE",
    name: "Utvidelse med prøve",
    figure: "3 500 kg",
    figureNote: "tilhengerens tillatte totalvekt",
    rows: [
      { label: "Unntak", value: "Tyngre henger enn 3 500 kg krever C1E" },
      { label: "Krav", value: "Lastsikringskurs og praktisk prøve" },
      { label: "Typisk", value: "Hestehenger, stor campingvogn, tung båt" },
    ],
    linkLabel: "Se klasse BE",
    href: routes.klasse("klasse-be"),
  },
];

export default function TilhengerPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Tilhenger", path: routes.tilhenger }]} />
      <h1>Bil og tilhenger – hvilket førerkort trenger du?</h1>
      <p className="lead">
        Tilhengerreglene handler om <strong>tillatt totalvekt</strong> – vektene i
        vognkortet, ikke hva bilen og hengeren faktisk veier. Her er grensene for B, B96
        og BE, forklart så du kan lese av svaret selv.
      </p>

      <ShortAnswer>
        <p>
          Med klasse B kan du trekke tilhenger opptil 750 kg. Tyngre tilhenger krever at
          bil + henger samlet holder seg under 3 500 kg – ellers trenger du B96 (samlet
          opptil 4 250 kg) eller BE (tilhenger opptil 3 500 kg).
        </p>
      </ShortAnswer>

      <section aria-labelledby="sammenligning">
        <h2 id="sammenligning">B, B96 eller BE – grensene side om side</h2>
        <div className="compare">
          {comparePanels.map((panel) => (
            <div className="compare__panel" key={panel.code}>
              <div className="compare__head">
                <span className="class-code">{panel.code}</span>
                <span>{panel.name}</span>
              </div>
              <p className="compare__figure">
                <strong>{panel.figure}</strong>
                <span>{panel.figureNote}</span>
              </p>
              <ul className="compare__rows">
                {panel.rows.map((row) => (
                  <li key={row.label}>
                    <strong>{row.label}</strong>
                    {row.value}
                  </li>
                ))}
              </ul>
              <Link className="compare__link" href={panel.href}>
                {panel.linkLabel} →
              </Link>
            </div>
          ))}
        </div>
        <p className="text-muted">
          Grensene gjelder tillatt totalvekt fra vognkortene. Bilens registrerte
          maksimale tilhengervekt gjelder i tillegg.
        </p>
      </section>

      <section className="prose">
        <h2>Slik leser du av svaret selv</h2>
        <StepList
          steps={[
            {
              title: "Finn tillatt totalvekt i begge vognkort",
              description:
                "Både bilen og tilhengeren har en registrert tillatt totalvekt. Det er disse tallene som teller – ikke faktisk vekt.",
            },
            {
              title: "Legg sammen de to tallene",
              description:
                "Summen avgjør: under 3 500 kg holder klasse B, 3 500–4 250 kg peker mot B96, og over det trenger du BE (så lenge hengeren er maks 3 500 kg).",
            },
            {
              title: "Sjekk bilens maksimale tilhengervekt",
              description:
                "Vognkortet angir hvor tung henger bilen har lov til å trekke, med og uten brems. Den grensen gjelder uansett førerkortklasse.",
            },
          ]}
        />
      </section>

      <div className="cta-panel no-print">
        <p>
          <strong>Slipp å regne selv</strong>
          Legg inn de to vektene, så leser kalkulatoren av grensene for deg.
        </p>
        <Link
          className="btn btn--primary"
          href={routes.verktoyItem("tilhengerkalkulator")}
        >
          Sjekk vektene dine
        </Link>
      </div>

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
        <p>
          Står valget mellom utvidelsene, hjelper guiden{" "}
          <Link href={routes.guide("b96-eller-be")}>B96 eller BE – hva bør du velge?</Link>{" "}
          deg videre.
        </p>
      </section>

      <Faq items={faqItems} />

      <SourceBox
        sourceIds={["vegvesenForerkort", "forerkortforskriften"]}
        caveat="Vektgrensene følger av førerkortforskriften. Kontroller alltid bilens og tilhengerens vognkort i tillegg – tekniske grenser gjelder uavhengig av førerkortklasse."
      />
    </div>
  );
}
