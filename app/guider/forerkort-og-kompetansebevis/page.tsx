import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { NextSteps } from "@/components/content/NextSteps";
import { ShortAnswer } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { articleSchema } from "@/lib/schema";

const path = routes.guide("forerkort-og-kompetansebevis");
const title = "Førerkort, YSK og kompetansebevis – hva er forskjellen?";
const description =
  "Førerkort, yrkessjåførkompetanse (YSK), truckførerbevis og maskinførerbevis forklart: hva hvert bevis gjelder, når du trenger dem og hvem som utsteder dem.";

export const metadata = buildMetadata({ title, description, path });

const faqItems = [
  {
    question: "Trenger jeg YSK for å kjøre lastebil privat?",
    answer:
      "Nei. YSK kreves når du transporterer gods eller personer mot betaling. Privat kjøring krever bare riktig førerkortklasse.",
  },
  {
    question: "Er truckførerbevis det samme som førerkort?",
    answer:
      "Nei. Truckførerbevis er dokumentert sikkerhetsopplæring etter arbeidsmiljøregelverket og gjelder bruk av truck på arbeidsplassen. Skal trucken kjøres på offentlig vei, kan førerkort kreves i tillegg.",
  },
  {
    question: "Hvem utsteder de ulike bevisene?",
    answer:
      "Førerkort utstedes av Statens vegvesen. YSK-utdanning gis av godkjente utdanningssteder og registreres på førerkortet. Truck- og maskinførerbevis utstedes gjennom sertifisert sikkerhetsopplæring i arbeidslivet.",
  },
  {
    question: "Hvor ofte må YSK fornyes?",
    answer: "Yrkessjåførkompetansen må fornyes med etterutdanning hvert femte år.",
  },
];

export default function KompetansebevisPage() {
  return (
    <div className="container page">
      <Breadcrumbs
        crumbs={[
          { name: "Guider", path: routes.guider },
          { name: "Førerkort og kompetansebevis", path },
        ]}
      />
      <h1>{title}</h1>
      <p className="lead">
        Førerkort, YSK, truckførerbevis og maskinførerbevis blandes ofte sammen. De
        regulerer forskjellige ting, kommer fra forskjellige regelverk – og du kan trenge
        flere av dem samtidig.
      </p>

      <ShortAnswer>
        <p>
          <strong>Førerkortet</strong> gir rett til å kjøre kjøretøy på vei.{" "}
          <strong>YSK</strong> kreves i tillegg for å kjøre gods eller passasjerer mot
          betaling. <strong>Truck- og maskinførerbevis</strong> er sikkerhetsopplæring
          for arbeidsutstyr på arbeidsplassen – ikke førerkort.
        </p>
      </ShortAnswer>

      <section className="prose">
        <h2>Oversikten</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Bevis</th>
                <th scope="col">Gjelder</th>
                <th scope="col">Kreves når</th>
                <th scope="col">Regelverk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Førerkort</th>
                <td>Kjøring av motorvogn på vei</td>
                <td>Alltid, etter kjøretøyets klasse</td>
                <td>Vegtrafikkloven og førerkortforskriften</td>
              </tr>
              <tr>
                <th scope="row">YSK (yrkessjåførkompetanse)</th>
                <td>Gods- eller persontransport mot betaling</td>
                <td>I tillegg til førerkort i tunge klasser</td>
                <td>Yrkessjåførforskriften</td>
              </tr>
              <tr>
                <th scope="row">Truckførerbevis</th>
                <td>Bruk av truck som arbeidsutstyr</td>
                <td>På arbeidsplassen, uavhengig av førerkort</td>
                <td>Arbeidsmiljøregelverket</td>
              </tr>
              <tr>
                <th scope="row">Maskinførerbevis</th>
                <td>Anleggsmaskiner som arbeidsutstyr</td>
                <td>På arbeidsplassen; førerkort kan kreves på vei</td>
                <td>Arbeidsmiljøregelverket</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="prose">
        <h2>Et praktisk eksempel</h2>
        <p>
          Skal du jobbe som lastebilsjåfør, trenger du typisk: førerkort i riktig klasse
          (for eksempel <a href={routes.klasse("klasse-c")}>klasse C</a>), YSK for
          godstransport, og – hvis du skal bruke truck på terminalen – truckførerbevis.
          Tre forskjellige bevis, tre forskjellige løp.
        </p>
        <p>
          Denne guiden gir oversikten. Detaljerte krav til YSK og sertifisert
          sikkerhetsopplæring ligger utenfor det Førerkortguiden dekker i dag – bruk
          Statens vegvesen og Arbeidstilsynet for detaljer.
        </p>
      </section>

      <NextSteps
        steps={[
          { label: "Klasse C1 – lett lastebil", href: routes.klasse("klasse-c1") },
          { label: "Klasse C – lastebil", href: routes.klasse("klasse-c") },
          { label: "Alle førerkortklasser", href: routes.klasser },
        ]}
      />

      <Faq items={faqItems} />

      <SourceBox
        sourceIds={["vegvesenForerkort", "vegtrafikkloven"]}
        caveat="Truck- og maskinførerbevis reguleres av arbeidsmiljøregelverket (Arbeidstilsynet), ikke av vegmyndighetene. Denne guiden gir en forenklet oversikt."
      />
      <JsonLd data={articleSchema({ title, description, path })} />
    </div>
  );
}
