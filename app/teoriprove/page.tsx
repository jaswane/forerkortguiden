import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { NextSteps } from "@/components/content/NextSteps";
import { ShortAnswer, InfoBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Teoriprøven – slik fungerer den og slik består du",
  description:
    "Alt om teoriprøven for førerkort: når du kan ta den, hvordan prøven foregår hos Statens vegvesen, gyldighet, ventetid ved stryk og hvordan du bør forberede deg.",
  path: routes.teoriprove,
});

const faqItems = [
  {
    question: "Når kan jeg ta teoriprøven?",
    answer:
      "Du kan ta teoriprøven tidligst seks måneder før du oppfyller alderskravet for klassen. For klasse B betyr det fra du er 17 år og 6 måneder.",
  },
  {
    question: "Hvor lenge er bestått teoriprøve gyldig?",
    answer:
      "Bestått teoriprøve er gyldig i tre år. Oppkjøringen må bestås innen den tid, ellers må teoriprøven tas på nytt.",
  },
  {
    question: "Hva skjer hvis jeg stryker på teoriprøven?",
    answer: "Da må du vente to uker før du kan ta ny prøve.",
  },
  {
    question: "Hva må jeg ha med til teoriprøven?",
    answer:
      "Gyldig legitimasjon. Prøven betales med gebyr til Statens vegvesen – se oppdaterte satser på vegvesen.no.",
  },
  {
    question: "Kan jeg ta teoriprøven på andre språk enn norsk?",
    answer:
      "Teoriprøven tilbys på flere språk, og det finnes tilrettelegging som opplest prøve eller ekstra tid for dem som trenger det. Sjekk mulighetene og eventuelle krav hos Statens vegvesen.",
  },
];

export default function TeoriprovePage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Teoriprøve", path: routes.teoriprove }]} />
      <h1>Teoriprøven</h1>
      <p className="lead">
        Teoriprøven er den elektroniske kunnskapsprøven du må bestå før oppkjøringen. Den
        tas på en av Statens vegvesens trafikkstasjoner.
      </p>

      <ShortAnswer>
        <p>
          Teoriprøven for klasse B kan tas fra du er 17 år og 6 måneder. Prøven tas
          elektronisk hos Statens vegvesen, og bestått prøve er gyldig i tre år. Stryker
          du, må du vente to uker før nytt forsøk.
        </p>
      </ShortAnswer>

      <section className="prose">
        <h2>Slik foregår prøven</h2>
        <ul>
          <li>Prøven tas elektronisk på en trafikkstasjon</li>
          <li>Du må ha med gyldig legitimasjon og betale gebyr</li>
          <li>
            Spørsmålene dekker trafikkregler, skilt, risikoforståelse, kjøretøyteknikk og
            miljøvennlig kjøring
          </li>
          <li>Resultatet får du med en gang</li>
        </ul>
        <p>
          Antall spørsmål, tidsramme og krav til riktige svar varierer mellom klassene –
          detaljene for din klasse finner du hos Statens vegvesen.
        </p>
      </section>

      <InfoBox title="Rekkefølgen">
        <p>
          Teoriprøven må være bestått før du kan ta{" "}
          <Link href={routes.oppkjoring}>oppkjøringen</Link>, og for de fleste klasser må
          også obligatorisk opplæring være registrert. Ta teoriprøven i god tid, men husk
          at den bare er gyldig i tre år.
        </p>
      </InfoBox>

      <section className="prose">
        <h2>Slik forbereder du deg</h2>
        <ul>
          <li>
            Les teoriboka eller bruk en teoriapp systematisk – ikke bare øvingsprøver
          </li>
          <li>
            Ta øvingsprøver under realistiske forhold: uten hjelpemidler og på tid
          </li>
          <li>
            Fokuser på forståelse av <em>hvorfor</em> reglene er som de er – spørsmålene
            tester vurdering, ikke bare pugg
          </li>
          <li>Knytt teorien til øvelseskjøringen – da fester kunnskapen seg</li>
          <li>Er du jevnt over 90 % riktig på øvingsprøver, er du normalt klar</li>
        </ul>
      </section>

      <section className="prose">
        <h2>Vanlige misforståelser</h2>
        <dl className="definition-list">
          <div>
            <dt>«Teoriprøven må tas før jeg kan øvelseskjøre.»</dt>
            <dd>
              Nei. Øvelseskjøring krever bare trafikalt grunnkurs (under 25 år).
              Teoriprøven kommer senere i løpet.
            </dd>
          </div>
          <div>
            <dt>«Består jeg teorien, er jeg nesten i mål.»</dt>
            <dd>
              Teoriprøven er ett av flere krav. Obligatorisk opplæring og praktisk prøve
              gjenstår – og de fleste bruker lengst tid på kjøreferdighetene.
            </dd>
          </div>
        </dl>
      </section>

      <NextSteps
        steps={[
          { label: "Oppkjøring – praktisk prøve", href: routes.oppkjoring },
          { label: "Hele førerkortløpet", href: routes.taForerkort },
          {
            label: "Veien til lappen – sjekkliste",
            href: routes.verktoyItem("veien-til-lappen"),
          },
        ]}
      />

      <Faq items={faqItems} />

      <SourceBox
        sourceIds={["vegvesenForerkort", "trafikkopplaringsforskriften"]}
        caveat="Gebyrer og praktiske detaljer for teoriprøven fastsettes av Statens vegvesen og kan endres – sjekk vegvesen.no for oppdaterte satser og bestillingsregler."
      />
    </div>
  );
}
