import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { NextSteps } from "@/components/content/NextSteps";
import { ShortAnswer, InfoBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { articleSchema } from "@/lib/schema";

const path = routes.guide("hvordan-velge-trafikkskole");
const title = "Hvordan velge trafikkskole";
const description =
  "Slik sammenligner du trafikkskoler på en fornuftig måte: totalpris fremfor timepris, tilgjengelighet, instruktørmatch og spørsmålene du bør stille før du velger.";

export const metadata = buildMetadata({ title, description, path });

const faqItems = [
  {
    question: "Er den billigste trafikkskolen det beste valget?",
    answer:
      "Ikke nødvendigvis. Lav timepris hjelper lite hvis du trenger flere timer, får lange ventetider eller må reise langt. Sammenlign forventet totalkostnad og kvalitet, ikke bare timeprisen.",
  },
  {
    question: "Kan jeg bytte trafikkskole underveis?",
    answer:
      "Ja. Gjennomført obligatorisk opplæring registreres hos Statens vegvesen og følger deg, ikke skolen. Sjekk eventuelle bindinger i pakker du har forhåndsbetalt.",
  },
  {
    question: "Bør jeg kjøpe pakke med mange kjøretimer?",
    answer:
      "Vær forsiktig med store forhåndsbetalte pakker før du vet hvor mange timer du faktisk trenger, og hvor godt du trives med skolen. Start gjerne med noen enkelttimer først.",
  },
  {
    question: "Hvordan finner jeg godkjente trafikkskoler?",
    answer:
      "Alle trafikkskoler i Norge må være godkjent av Statens vegvesen. Bruk Statens vegvesens oversikter og sjekk skolens godkjenning hvis du er i tvil.",
  },
];

export default function VelgeTrafikkskolePage() {
  return (
    <div className="container page">
      <Breadcrumbs
        crumbs={[
          { name: "Guider", path: routes.guider },
          { name: "Velge trafikkskole", path },
        ]}
      />
      <h1>{title}</h1>
      <p className="lead">
        Valget av trafikkskole påvirker både hvor mye førerkortet koster og hvor god
        sjåfør du blir. Her er en nøktern fremgangsmåte – uten rangeringer og uten
        anbefalinger av enkeltskoler.
      </p>

      <ShortAnswer>
        <p>
          Sammenlign totalkostnad (ikke bare timepris), sjekk tilgjengelighet på timer og
          obligatoriske kurs, og prøv en kjøretime før du binder deg til en pakke. God
          kjemi med instruktøren betyr ofte færre timer totalt.
        </p>
      </ShortAnswer>

      <InfoBox title="Om denne guiden">
        <p>
          Førerkortguiden er uavhengig og har ingen avtaler med trafikkskoler. Vi
          anbefaler ingen enkeltskoler og publiserer ikke rangeringer. Guiden gir deg
          kriteriene, så gjør du vurderingen lokalt.
        </p>
      </InfoBox>

      <section className="prose">
        <h2>1. Regn på totalen, ikke timeprisen</h2>
        <p>
          Timeprisen er bare én brikke. Be om priser på det komplette løpet: kjøretimer,
          veiledningstimer, sikkerhetskurs på bane og veg, og leie av bil til
          oppkjøringen. En skole med høyere timepris, men effektiv undervisning, kan bli
          billigere totalt. Bruk{" "}
          <Link href={routes.verktoyItem("kostnadskalkulator")}>kostnadskalkulatoren</Link>{" "}
          til å sammenligne tilbudene.
        </p>

        <h2>2. Sjekk tilgjengelighet</h2>
        <ul>
          <li>Hvor lang ventetid er det på kjøretimer – og på de obligatoriske kursene?</li>
          <li>Finnes det timer som passer skolehverdag eller jobb?</li>
          <li>Henter/leverer skolen ved skole eller hjem, eller møter du opp?</li>
        </ul>

        <h2>3. Vurder instruktørmatch</h2>
        <p>
          Læring krever trygghet. Ta én eller to enkelttimer før du kjøper noe større, og
          bytt instruktør hvis kommunikasjonen ikke fungerer. Det er vanlig og helt greit.
        </p>

        <h2>4. Spørsmål å stille skolen</h2>
        <ul>
          <li>Hva er samlet pris for et typisk løp hos dere?</li>
          <li>Hvor lang ventetid er det på sikkerhetskurs på bane og veg?</li>
          <li>Hvordan følger dere opp fremdriften min mellom timene?</li>
          <li>Hvordan samarbeider dere med ledsageren min om privat øving?</li>
          <li>Hva skjer med forhåndsbetalte timer hvis jeg vil bytte skole?</li>
        </ul>

        <h2>5. Kombiner med privat øvelseskjøring</h2>
        <p>
          De beste resultatene kommer når kjøretimer og privat øving spiller sammen. En
          god skole gir konkrete «lekser» til øvelseskjøringen.{" "}
          <Link href={routes.ovelseskjoring}>Les reglene for øvelseskjøring</Link>.
        </p>
      </section>

      <NextSteps
        steps={[
          { label: "Kostnadskalkulator", href: routes.verktoyItem("kostnadskalkulator") },
          { label: "Hva koster førerkortet?", href: routes.kostnad },
          { label: "Hele førerkortløpet", href: routes.taForerkort },
        ]}
      />

      <Faq items={faqItems} />

      <SourceBox
        sourceIds={["vegvesenForerkort", "trafikkopplaringsforskriften"]}
        caveat="Denne guiden er redaksjonelle råd. Krav til trafikkskoler og obligatorisk opplæring er regulert i trafikkopplæringsforskriften."
      />
      <JsonLd data={articleSchema({ title, description, path })} />
    </div>
  );
}
