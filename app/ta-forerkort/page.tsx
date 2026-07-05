import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { NextSteps } from "@/components/content/NextSteps";
import { ShortAnswer, InfoBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { StepList } from "@/components/content/StepList";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Slik tar du førerkort – hele løpet steg for steg",
  description:
    "Veien til førerkort klasse B forklart: trafikalt grunnkurs, øvelseskjøring, obligatorisk opplæring, teoriprøve og oppkjøring. Se rekkefølgen, aldersgrensene og tipsene.",
  path: routes.taForerkort,
});

const faqItems = [
  {
    question: "Hvor lang tid tar det å ta førerkort?",
    answer:
      "Det varierer mye. Mange bruker ett til to år fra trafikalt grunnkurs til oppkjøring, fordi øvelseskjøring over tid gir mengdetrening. Det er mulig å gjennomføre raskere ved å ta intensiv opplæring, men det krever at du består prøvene på første forsøk og får time til oppkjøring.",
  },
  {
    question: "Kan jeg øvelseskjøre uten trafikalt grunnkurs?",
    answer:
      "Nei, hvis du er under 25 år må du ha gjennomført trafikalt grunnkurs før du kan øvelseskjøre. Er du over 25 år, er du fritatt fra selve grunnkurset, men enkelte deler av opplæringen er fortsatt obligatoriske.",
  },
  {
    question: "Må jeg ta kjøretimer ved trafikkskole?",
    answer:
      "Deler av opplæringen er obligatorisk og må tas ved trafikkskole, blant annet sikkerhetskurs på øvingsbane og sikkerhetskurs på veg. Utover det bestemmer du selv fordelingen mellom kjøretimer og privat øvelseskjøring.",
  },
  {
    question: "Hva er riktig rekkefølge på teoriprøve og oppkjøring?",
    answer:
      "Teoriprøven må være bestått før du kan ta oppkjøringen. Teoriprøven kan tidligst tas seks måneder før du oppfyller alderskravet.",
  },
  {
    question: "Hvor mye øvelseskjøring bør jeg ha?",
    answer:
      "Det finnes ikke noe formelt minstekrav til antall timer, men mengdetrening gir tryggere førere og bedre odds på oppkjøringen. Mange anbefaler flere tusen kilometer med variert kjøring.",
  },
];

export default function TaForerkortPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Ta førerkort", path: routes.taForerkort }]} />
      <h1>Slik tar du førerkort – steg for steg</h1>
      <p className="lead">
        Førerkortløpet følger en fast rekkefølge med noen obligatoriske deler. Her får du
        oversikten for klasse B (personbil) – de fleste stegene er like for andre
        klasser.
      </p>

      <ShortAnswer>
        <p>
          Veien til førerkort klasse B: trafikalt grunnkurs (fra 15 år) → øvelseskjøring
          og opplæring (fra 16 år) → teoriprøve (fra 17,5 år) → obligatoriske
          sikkerhetskurs → oppkjøring (fra 18 år).
        </p>
      </ShortAnswer>

      <section className="prose">
        <h2>Hele løpet i 8 steg</h2>
        <StepList
          steps={[
            {
              title: "Trafikalt grunnkurs (fra 15 år)",
              description: (
                <p>
                  Obligatorisk startkurs på 17 timer, inkludert førstehjelp. Kurset gir
                  deg rett til å øvelseskjøre.{" "}
                  <Link href={routes.trafikaltGrunnkurs}>Les om trafikalt grunnkurs</Link>.
                </p>
              ),
            },
            {
              title: "Start øvelseskjøring (fra 16 år)",
              description: (
                <p>
                  Øv privat med ledsager og/eller ta kjøretimer ved trafikkskole.
                  Mengdetrening er den viktigste enkeltfaktoren for å lykkes.{" "}
                  <Link href={routes.ovelseskjoring}>Se reglene for øvelseskjøring</Link>.
                </p>
              ),
            },
            {
              title: "Grunnleggende opplæring (trinn 2)",
              description:
                "Du lærer å beherske bilen rent kjøreteknisk. Trinnet avsluttes med en obligatorisk veiledningstime ved trafikkskole.",
            },
            {
              title: "Trafikal opplæring (trinn 3)",
              description:
                "Kjøring i variert trafikk. Inkluderer obligatorisk sikkerhetskurs på øvingsbane (glattkjøring) og avsluttes med veiledningstime.",
            },
            {
              title: "Teoriprøve (fra 17,5 år)",
              description: (
                <p>
                  Teoriprøven tas hos Statens vegvesen og kan tidligst tas seks måneder
                  før du fyller 18. Bestått prøve er gyldig i tre år.{" "}
                  <Link href={routes.teoriprove}>Les om teoriprøven</Link>.
                </p>
              ),
            },
            {
              title: "Sikkerhetskurs på veg (trinn 4)",
              description:
                "Obligatorisk avsluttende kurs på 13 timer med langkjøring og refleksjon rundt risiko. Tas mot slutten av opplæringen.",
            },
            {
              title: "Bestill og ta oppkjøring (fra 18 år)",
              description: (
                <p>
                  Praktisk prøve hos Statens vegvesen. All obligatorisk opplæring må være
                  registrert og teoriprøven bestått.{" "}
                  <Link href={routes.oppkjoring}>Les om oppkjøringen</Link>.
                </p>
              ),
            },
            {
              title: "Få førerkortet",
              description:
                "Etter bestått prøve utstedes førerkortet. Du er fersk fører med prøveperiode – to år der reglene for prikkbelastning er strengere.",
            },
          ]}
        />
      </section>

      <InfoBox title="Over 25 år?">
        <p>
          Da er du fritatt fra trafikalt grunnkurs, men deler av opplæringen – som
          mørkekjøring – er fortsatt obligatorisk. Resten av løpet er likt. Sjekk
          detaljene hos Statens vegvesen eller en trafikkskole.
        </p>
      </InfoBox>

      <section className="prose">
        <h2>Hva koster det?</h2>
        <p>
          Totalkostnaden avhenger mest av hvor mange kjøretimer du trenger. Obligatoriske
          kurs, prøver og gebyrer kommer i tillegg. Mye privat øvelseskjøring kan
          redusere behovet for kjøretimer betydelig.
        </p>
        <p>
          <Link href={routes.kostnad}>Les hva som inngår i kostnaden</Link> eller prøv{" "}
          <Link href={routes.verktoyItem("kostnadskalkulator")}>kostnadskalkulatoren</Link>.
        </p>
      </section>

      <NextSteps
        steps={[
          {
            label: "Veien til lappen – interaktiv sjekkliste",
            href: routes.verktoyItem("veien-til-lappen"),
            description: "hold oversikt over hvor du er i løpet",
          },
          { label: "Trafikalt grunnkurs", href: routes.trafikaltGrunnkurs },
          { label: "Øvelseskjøring – regler og tips", href: routes.ovelseskjoring },
          { label: "Førerkort klasse B", href: routes.klasse("klasse-b") },
        ]}
      />

      <Faq items={faqItems} />

      <SourceBox
        sourceIds={["vegvesenForerkort", "trafikkopplaringsforskriften"]}
        caveat="Opplæringskravene er fastsatt i trafikkopplæringsforskriften. Trinninndelingen gjelder klasse B; andre klasser har egne obligatoriske deler."
      />
    </div>
  );
}
