import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { NextSteps } from "@/components/content/NextSteps";
import { ShortAnswer, WarningBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Hva koster førerkortet? Kostnadene forklart",
  description:
    "Hva koster førerkort klasse B? Se hvilke kostnader som inngår – kjøretimer, obligatoriske kurs og gebyrer – hva som påvirker totalen mest, og hvordan du kan spare.",
  path: routes.kostnad,
});

const faqItems = [
  {
    question: "Hva koster førerkort klasse B totalt?",
    answer:
      "Det finnes ingen fastpris. Mange ender et sted mellom 30 000 og 50 000 kroner, men totalen avhenger av hvor mange kjøretimer du trenger og prisnivået der du bor. Dette er estimater, ikke offisielle tall.",
  },
  {
    question: "Hva er den største kostnaden?",
    answer:
      "Kjøretimene. Antallet du trenger varierer mye fra person til person, og mye privat øvelseskjøring kan redusere behovet betydelig.",
  },
  {
    question: "Hva koster teoriprøven og oppkjøringen?",
    answer:
      "Gebyrene for prøver og førerkortutstedelse fastsettes av Statens vegvesen og justeres jevnlig. Se vegvesen.no for gjeldende satser.",
  },
  {
    question: "Kan jeg ta førerkort billigere?",
    answer:
      "De mest effektive grepene er mye privat øvelseskjøring, å møte forberedt til kjøretimene, å sammenligne priser mellom trafikkskoler og å bestå prøvene på første forsøk.",
  },
];

export default function KostnadPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Kostnad", path: routes.kostnad }]} />
      <h1>Hva koster førerkortet?</h1>
      <p className="lead">
        Det finnes ingen fastpris på førerkort. Her får du oversikt over hva som inngår,
        hva som påvirker totalen mest – og hvor du kan spare.
      </p>

      <ShortAnswer>
        <p>
          For førerkort klasse B ender mange et sted mellom 30 000 og 50 000 kroner. Det
          er et estimat: totalen avhenger mest av hvor mange kjøretimer du trenger.
          Obligatoriske kurs og gebyrer kommer i tillegg til kjøretimene.
        </p>
      </ShortAnswer>

      <WarningBox title="Om tallene på denne siden">
        <p>
          Trafikkskolene setter prisene sine fritt, og gebyrene til Statens vegvesen
          justeres jevnlig. Vi oppgir derfor ikke eksakte priser. Innhent tilbud fra
          trafikkskoler der du bor, og sjekk gjeldende gebyrer hos{" "}
          <a href="https://www.vegvesen.no/forerkort/" rel="noopener">
            Statens vegvesen
          </a>
          .
        </p>
      </WarningBox>

      <section className="prose">
        <h2>Dette består kostnaden av</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Kostnadspost</th>
                <th scope="col">Hva det er</th>
                <th scope="col">Hva som påvirker prisen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Trafikalt grunnkurs</th>
                <td>Obligatorisk startkurs, 17 timer</td>
                <td>Trafikkskolens pris; tilbys noen steder gjennom skolen</td>
              </tr>
              <tr>
                <th scope="row">Kjøretimer</th>
                <td>Individuell opplæring med kjørelærer</td>
                <td>Antall timer – den klart største variabelen</td>
              </tr>
              <tr>
                <th scope="row">Sikkerhetskurs på øvingsbane</th>
                <td>Obligatorisk kurs («glattkjøring») med baneleie</td>
                <td>Trafikkskolens pris og baneleie</td>
              </tr>
              <tr>
                <th scope="row">Sikkerhetskurs på veg</th>
                <td>Obligatorisk avsluttende kurs, 13 timer</td>
                <td>Trafikkskolens pris</td>
              </tr>
              <tr>
                <th scope="row">Veiledningstimer</th>
                <td>Obligatoriske vurderingstimer i trinn 2 og 3</td>
                <td>Trafikkskolens timepris</td>
              </tr>
              <tr>
                <th scope="row">Teoriprøve</th>
                <td>Gebyr til Statens vegvesen</td>
                <td>Fast sats; betales på nytt ved stryk</td>
              </tr>
              <tr>
                <th scope="row">Praktisk prøve</th>
                <td>Gebyr til Statens vegvesen</td>
                <td>Fast sats; betales på nytt ved stryk</td>
              </tr>
              <tr>
                <th scope="row">Leie av bil til prøven</th>
                <td>De fleste leier trafikkskolens bil</td>
                <td>Trafikkskolens pris</td>
              </tr>
              <tr>
                <th scope="row">Førerkortutstedelse og bilde</th>
                <td>Gebyr for selve førerkortet</td>
                <td>Fast sats hos Statens vegvesen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="prose">
        <h2>Slik kan du redusere kostnaden</h2>
        <ul>
          <li>
            <strong>Øvelseskjør mye privat.</strong> Mengdetrening hjemme kan erstatte
            mange kjøretimer.{" "}
            <Link href={routes.ovelseskjoring}>Se reglene for øvelseskjøring</Link>.
          </li>
          <li>
            <strong>Møt forberedt til kjøretimene.</strong> Øv privat på det dere jobbet
            med sist, så bruker du ikke betalte timer på repetisjon.
          </li>
          <li>
            <strong>Sammenlign trafikkskoler.</strong> Prisene varierer – sjekk både
            timepris og pris på de obligatoriske kursene.{" "}
            <Link href={routes.guide("hvordan-velge-trafikkskole")}>
              Guide: hvordan velge trafikkskole
            </Link>
            .
          </li>
          <li>
            <strong>Bestå prøvene på første forsøk.</strong> Stryk betyr nye gebyrer, ny
            billeie og ofte flere kjøretimer i ventetiden.
          </li>
        </ul>
      </section>

      <NextSteps
        steps={[
          {
            label: "Kostnadskalkulator",
            href: routes.verktoyItem("kostnadskalkulator"),
            description: "estimer totalen med dine egne tall",
          },
          { label: "Hele førerkortløpet", href: routes.taForerkort },
          { label: "Guide: hvordan velge trafikkskole", href: routes.guide("hvordan-velge-trafikkskole") },
        ]}
      />

      <Faq items={faqItems} />

      <SourceBox
        sourceIds={["vegvesenForerkort", "trafikkopplaringsforskriften"]}
        caveat="Prisene på opplæring settes fritt av trafikkskolene og varierer geografisk. Beløpsanslag på denne siden er estimater basert på vanlige prisnivåer, ikke offisielle satser."
      />
    </div>
  );
}
