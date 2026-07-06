import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { NextSteps } from "@/components/content/NextSteps";
import { ShortAnswer, InfoBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Øvelseskjøring – krav til deg, ledsager og bil",
  description:
    "Reglene for privat øvelseskjøring: alderskrav, krav til ledsager (25 år og 5 års førerett), L-skilt, ekstra speil og hva som gjelder for bil, MC og tilhenger.",
  path: routes.ovelseskjoring,
});

const faqItems = [
  {
    question: "Når kan jeg begynne å øvelseskjøre med bil?",
    answer:
      "Fra du er 16 år, forutsatt at du har gjennomført trafikalt grunnkurs (eller er over 25 år og dermed fritatt).",
  },
  {
    question: "Hvem kan være ledsager?",
    answer:
      "Ledsageren må ha fylt 25 år og ha hatt gyldig førerett i klassen sammenhengende de siste fem årene.",
  },
  {
    question: "Må bilen ha ekstra utstyr?",
    answer:
      "Bilen skal være merket med L-skilt bak, og den må ha ekstra innvendig speil til ledsageren. Kjøreskolebiler har i tillegg egne pedaler, men det kreves ikke ved privat øvelseskjøring.",
  },
  {
    question: "Kan jeg øvelseskjøre på motorvei?",
    answer:
      "Øvelseskjøring skal ikke være til fare eller unødig ulempe for annen trafikk. Krevende miljøer bør vente til ferdighetene er gode nok – vurder det sammen med ledsager eller kjørelærer.",
  },
  {
    question: "Får jeg øvelseskjøre i utlandet?",
    answer:
      "Norske regler for øvelseskjøring gjelder i Norge. Andre land har egne regler, og norsk øvelseskjøring kan ikke uten videre tas med over grensen.",
  },
  {
    question: "Hvor mye bør jeg øvelseskjøre?",
    answer:
      "Det finnes ikke noe minstekrav, men mengdetrening reduserer ulykkesrisikoen som fersk fører. Mange fagmiljøer anbefaler god og variert mengdetrening gjennom hele opplæringsperioden.",
  },
];

export default function OvelseskjoringPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Øvelseskjøring", path: routes.ovelseskjoring }]} />
      <h1>Øvelseskjøring – reglene enkelt forklart</h1>
      <p className="lead">
        Privat øvelseskjøring er gratis mengdetrening – og mye variert øving er noe av
        det som bidrar mest til å gjøre deg til en trygg sjåfør. Her er kravene som må
        være på plass.
      </p>

      <ShortAnswer>
        <p>
          Du kan øvelseskjøre med bil fra du er 16 år når du har gjennomført trafikalt
          grunnkurs. Ledsageren må ha fylt 25 år og hatt førerett i klassen
          sammenhengende de siste fem årene. Bilen skal ha L-skilt bak og ekstra speil
          til ledsageren.
        </p>
      </ShortAnswer>

      <section className="prose">
        <h2>Kravene til deg</h2>
        <ul>
          <li>Fylt 16 år (for klasse B – andre klasser har egne aldersgrenser)</li>
          <li>
            Gjennomført <Link href={routes.trafikaltGrunnkurs}>trafikalt grunnkurs</Link>{" "}
            hvis du er under 25 år
          </li>
          <li>Ha med bevis for grunnkurset og gyldig legitimasjon</li>
          <li>
            I vinterhalvåret (1. november–15. mars): mørkekjøringsdemonstrasjonen må være
            gjennomført
          </li>
        </ul>

        <h2>Kravene til ledsageren</h2>
        <ul>
          <li>Fylt 25 år</li>
          <li>Gyldig førerett i klassen sammenhengende de siste fem årene</li>
          <li>Være edru og skikket – ledsageren regnes som fører av bilen</li>
        </ul>

        <h2>Kravene til bilen</h2>
        <ul>
          <li>Rød «L» på hvit bakgrunn, synlig bakover</li>
          <li>Ekstra innvendig speil til ledsageren</li>
        </ul>
      </section>

      <InfoBox title="Godt å vite">
        <p>
          Øvelseskjøringen skal ikke være til fare eller unødig ulempe for andre. Start i
          rolige omgivelser og øk vanskelighetsgraden gradvis – målet er variert erfaring
          med by, landevei, mørke og ulikt føre før oppkjøringen.
        </p>
      </InfoBox>

      <section className="prose">
        <h2>Slik får du mest ut av øvelseskjøringen</h2>
        <ul>
          <li>Kombiner privat øving med kjøretimer, og øv på det kjøreskolen jobber med</li>
          <li>Kjør jevnlig – korte, hyppige økter slår skippertak</li>
          <li>Varier: bytt mellom bytrafikk, landevei, mørke, regn og vinterføre</li>
          <li>La eleven kjøre til og fra hverdagsgjøremål – det gir realistisk trening</li>
        </ul>
      </section>

      <NextSteps
        steps={[
          {
            label: "Sjekkliste for øvelseskjøring",
            href: routes.verktoyItem("ovelseskjoring-sjekkliste"),
            description: "utskriftsvennlig liste over alle kravene",
          },
          { label: "Trafikalt grunnkurs", href: routes.trafikaltGrunnkurs },
          { label: "Hele førerkortløpet", href: routes.taForerkort },
          { label: "Teoriprøven", href: routes.teoriprove },
        ]}
      />

      <Faq items={faqItems} />

      <SourceBox
        sourceIds={[
          "vegvesenForerkort",
          "trafikkopplaringsforskriften",
          "vegtrafikkloven",
          "tryggTrafikk",
        ]}
        caveat="Kravene til øvelseskjøring følger av vegtrafikkloven § 26 og trafikkopplæringsforskriften. Egne regler gjelder for øvelseskjøring med motorsykkel og tunge klasser."
      />
    </div>
  );
}
