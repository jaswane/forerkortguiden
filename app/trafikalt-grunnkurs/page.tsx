import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { NextSteps } from "@/components/content/NextSteps";
import { ShortAnswer, InfoBox, WarningBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Trafikalt grunnkurs – alder, innhold og regler",
  description:
    "Trafikalt grunnkurs er obligatorisk før du kan øvelseskjøre. Se alderskrav (15 år), hva kurset inneholder, reglene for mørkekjøring og unntaket for deg over 25.",
  path: routes.trafikaltGrunnkurs,
});

const faqItems = [
  {
    question: "Hvor gammel må jeg være for å ta trafikalt grunnkurs?",
    answer: "Du kan ta trafikalt grunnkurs fra du er 15 år.",
  },
  {
    question: "Hvor langt er trafikalt grunnkurs?",
    answer:
      "Kurset er på 17 timer og går som regel over flere kvelder. Førstehjelp inngår, og mørkekjøringsdemonstrasjon kommer i tillegg i vinterhalvåret.",
  },
  {
    question: "Trenger jeg trafikalt grunnkurs hvis jeg er over 25?",
    answer:
      "Nei, er du over 25 år er du fritatt fra selve grunnkurset og kan øvelseskjøre med gyldig legitimasjon. Mørkekjøring er likevel en obligatorisk del av opplæringen.",
  },
  {
    question: "Gjelder kurset for alle førerkortklasser?",
    answer:
      "Ja, trafikalt grunnkurs er felles første del av føreropplæringen for alle klasser, inkludert moped og motorsykkel.",
  },
  {
    question: "Hva skjer hvis jeg mister beviset for trafikalt grunnkurs?",
    answer:
      "Kurset registreres hos Statens vegvesen. Trenger du nytt bevis, kan du kontakte Statens vegvesen.",
  },
];

export default function TrafikaltGrunnkursPage() {
  return (
    <div className="container page">
      <Breadcrumbs
        crumbs={[{ name: "Trafikalt grunnkurs", path: routes.trafikaltGrunnkurs }]}
      />
      <h1>Trafikalt grunnkurs</h1>
      <p className="lead">
        Trafikalt grunnkurs er startpunktet for all føreropplæring i Norge. Uten kurset
        kan du ikke øvelseskjøre – verken privat eller med trafikkskole.
      </p>

      <ShortAnswer>
        <p>
          Trafikalt grunnkurs er et obligatorisk kurs på 17 timer som du kan ta fra du er
          15 år. Kurset gir deg rett til å øvelseskjøre, og beviset må være med når du
          øver. Er du over 25 år, er du fritatt fra kurset.
        </p>
      </ShortAnswer>

      <section className="prose">
        <h2>Hva inneholder kurset?</h2>
        <p>Kurset tas ved trafikkskole eller gjennom skolen, og dekker blant annet:</p>
        <ul>
          <li>trafikkopplæringens mål og hvordan du lærer å kjøre</li>
          <li>grunnleggende forståelse av trafikk og risiko</li>
          <li>mennesket i trafikken – hvorfor ulykker skjer</li>
          <li>plikter ved trafikkuhell og førstehjelp</li>
          <li>tiltak ved trafikkulykke, med praktiske øvelser</li>
          <li>mørkekjøringsdemonstrasjon (egen del, se under)</li>
        </ul>
        <p>Det er ingen eksamen – du må delta på alle delene for å få kurset godkjent.</p>
      </section>

      <WarningBox title="Mørkekjøring og vinterhalvåret">
        <p>
          Tar du grunnkurset i sommerhalvåret, gjennomføres kurset uten
          mørkekjøringsdemonstrasjonen. Da kan du ikke øvelseskjøre i perioden fra og med
          1. november til og med 15. mars før mørkekjøringen er gjennomført.
        </p>
      </WarningBox>

      <InfoBox title="Over 25 år?">
        <p>
          Da er du fritatt fra trafikalt grunnkurs og kan øvelseskjøre med gyldig
          legitimasjon. Mørkekjøring er likevel obligatorisk før førerprøven, som del av
          den øvrige opplæringen.
        </p>
      </InfoBox>

      <section className="prose">
        <h2>Etter kurset: klar for øvelseskjøring</h2>
        <p>
          Når kurset er registrert, kan du øvelseskjøre fra du oppfyller alderskravet for
          klassen – 16 år for personbil. Husk gyldig bevis og legitimasjon når du øver.
        </p>
      </section>

      <NextSteps
        steps={[
          {
            label: "Øvelseskjøring – regler og krav",
            href: routes.ovelseskjoring,
            description: "hva som må være på plass før du kan øve",
          },
          {
            label: "Sjekkliste for øvelseskjøring",
            href: routes.verktoyItem("ovelseskjoring-sjekkliste"),
          },
          { label: "Hele førerkortløpet", href: routes.taForerkort },
        ]}
      />

      <Faq items={faqItems} />

      <SourceBox
        sourceIds={["vegvesenForerkort", "trafikkopplaringsforskriften"]}
        caveat="Kravene til trafikalt grunnkurs er fastsatt i trafikkopplæringsforskriften kapittel 8. Datogrensene for mørkekjøring står i forskriften."
      />
    </div>
  );
}
