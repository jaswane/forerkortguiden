import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { NextSteps } from "@/components/content/NextSteps";
import { ShortAnswer, InfoBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { StepList } from "@/components/content/StepList";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Oppkjøring – slik foregår den praktiske prøven",
  description:
    "Oppkjøringen for klasse B forklart: krav før prøven, hvordan prøven foregår, sikkerhetskontroll, hva sensor vurderer og ventetid hvis du ikke består.",
  path: routes.oppkjoring,
});

const faqItems = [
  {
    question: "Hva må være på plass før jeg kan ta oppkjøring?",
    answer:
      "Du må oppfylle alderskravet, ha bestått teoriprøven og ha all obligatorisk opplæring registrert. Prøven bestilles hos Statens vegvesen.",
  },
  {
    question: "Hvor lenge varer oppkjøringen for klasse B?",
    answer:
      "Sett av rundt 75 minutter totalt. Selve kjøringen utgjør størstedelen, i tillegg kommer sikkerhetskontroll og tilbakemelding.",
  },
  {
    question: "Hva skjer hvis jeg ikke består oppkjøringen?",
    answer:
      "Da må du vente fire uker før du kan ta ny praktisk prøve, og du må betale nytt gebyr.",
  },
  {
    question: "Hvilken bil brukes til oppkjøringen?",
    answer:
      "Du stiller med egen bil – som regel trafikkskolens bil, men privat bil kan brukes hvis den oppfyller kravene til prøvekjøretøy. Sjekk kravene hos Statens vegvesen.",
  },
  {
    question: "Hva ser sensoren etter?",
    answer:
      "Sensor vurderer helheten: selvstendig og trygg kjøring, samhandling med annen trafikk, observasjon, plassering, fartstilpasning og kjøretøybehandling. Små feil betyr ikke automatisk stryk.",
  },
];

export default function OppkjoringPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Oppkjøring", path: routes.oppkjoring }]} />
      <h1>Oppkjøring – den praktiske prøven</h1>
      <p className="lead">
        Oppkjøringen er siste steg i førerkortløpet. Her får du vite hvordan prøven
        foregår, hva sensor vurderer og hvordan du stiller best forberedt.
      </p>

      <ShortAnswer>
        <p>
          Oppkjøringen for klasse B tas hos Statens vegvesen og tar rundt 75 minutter,
          inkludert sikkerhetskontroll. Krav: alderskravet oppfylt, bestått teoriprøve og
          all obligatorisk opplæring registrert. Består du ikke, er ventetiden fire uker.
        </p>
      </ShortAnswer>

      <section className="prose">
        <h2>Slik foregår prøven</h2>
        <StepList
          steps={[
            {
              title: "Oppmøte og legitimasjon",
              description:
                "Møt opp i god tid på trafikkstasjonen med gyldig legitimasjon. Gebyret må være betalt.",
            },
            {
              title: "Sikkerhetskontroll",
              description:
                "Du får spørsmål om og skal vise kontroll av bilen – for eksempel lys, bremser, dekk eller væsker.",
            },
            {
              title: "Kjøring i variert trafikk",
              description:
                "Du kjører en rute sensor angir, med vanlige trafikksituasjoner. Deler av prøven kjøres ofte selvstendig etter skilt eller GPS.",
            },
            {
              title: "Tilbakemelding og resultat",
              description:
                "Etter kjøringen får du beskjed om du har bestått, med begrunnelse. Består du, utstedes førerkortet.",
            },
          ]}
        />
      </section>

      <InfoBox title="Godt å vite om ventetid">
        <p>
          Ventetiden på ledige oppkjøringstimer varierer mye mellom trafikkstasjoner og
          gjennom året. Bestill i god tid – men ikke før du faktisk er klar. Trafikkskolen
          din kan hjelpe deg å vurdere om du er prøveklar.
        </p>
      </InfoBox>

      <section className="prose">
        <h2>Vanlige grunner til stryk</h2>
        <ul>
          <li>Manglende observasjon i kryss og ved feltskifte</li>
          <li>For passiv eller for aggressiv samhandling med annen trafikk</li>
          <li>Feil fartstilpasning – både for fort og unødig sakte</li>
          <li>Usikker plassering i rundkjøringer</li>
          <li>Nervøsitet som fører til ulogiske valg – tren på prøvesituasjonen</li>
        </ul>
        <p>
          Husk: sensor vurderer helheten. Én liten feil betyr ikke stryk, men
          gjennomgående usikkerhet gjør det.
        </p>
      </section>

      <NextSteps
        steps={[
          { label: "Teoriprøven – må bestås først", href: routes.teoriprove },
          {
            label: "Veien til lappen – sjekkliste",
            href: routes.verktoyItem("veien-til-lappen"),
          },
          { label: "Hva koster førerkortet?", href: routes.kostnad },
        ]}
      />

      <Faq items={faqItems} />

      <SourceBox
        sourceIds={["vegvesenForerkort", "trafikkopplaringsforskriften"]}
        caveat="Krav til prøvekjøretøy, gebyrer og bestilling fastsettes av Statens vegvesen. Prøvens lengde og innhold varierer mellom førerkortklassene."
      />
    </div>
  );
}
