import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { NextSteps } from "@/components/content/NextSteps";
import { ShortAnswer, WarningBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { articleSchema } from "@/lib/schema";

const path = routes.guide("b96-eller-be");
const title = "B96 eller BE – hva bør du velge?";
const description =
  "B96 og BE sammenlignet: vektgrenser, krav, tidsbruk og pris. Se hvilken tilhengerutvidelse som passer for campingvogn, hestehenger og båthenger.";

export const metadata = buildMetadata({ title, description, path });

const faqItems = [
  {
    question: "Er BE alltid bedre enn B96?",
    answer:
      "BE dekker tyngre kombinasjoner enn B96, men krever praktisk prøve. Trenger du aldri mer enn 4 250 kg samlet, er B96 raskere å skaffe. Er du usikker på fremtidige behov, gir BE mest fleksibilitet.",
  },
  {
    question: "Kan jeg ta BE direkte uten å ta B96 først?",
    answer: "Ja. B96 og BE er uavhengige utvidelser av klasse B – du velger den ene eller den andre.",
  },
  {
    question: "Hva trenger jeg for vanlig campingvogn?",
    answer:
      "Regn ut samlet tillatt totalvekt for bil og vogn. Mange kombinasjoner lander mellom 3 500 og 4 250 kg, der B96 holder. Tunge biler med store vogner går over 4 250 kg og krever BE.",
  },
  {
    question: "Trekker hestehengere mot B96 eller BE?",
    answer:
      "Hestehengere har ofte tillatt totalvekt på 2 000–2 700 kg. Sammen med en vanlig SUV overstiger kombinasjonen fort 4 250 kg, og da trengs BE. Regn alltid på dine faktiske vekter.",
  },
];

export default function B96EllerBePage() {
  return (
    <div className="container page">
      <Breadcrumbs
        crumbs={[
          { name: "Guider", path: routes.guider },
          { name: "B96 eller BE?", path },
        ]}
      />
      <h1>{title}</h1>
      <p className="lead">
        Skal du trekke tyngre tilhenger enn klasse B tillater, står valget mellom
        utvidelsene B96 og BE. Valget avhenger av vektene du skal trekke – ikke av hva
        som er «best».
      </p>

      <ShortAnswer>
        <p>
          Velg <strong>B96</strong> hvis bil + tilhenger aldri overstiger 4 250 kg samlet
          tillatt totalvekt – det krever bare obligatorisk opplæring. Velg{" "}
          <strong>BE</strong> hvis du skal trekke tyngre, eller vil ha fleksibilitet –
          det krever i tillegg praktisk prøve, men dekker tilhengere opptil 3 500 kg.
        </p>
      </ShortAnswer>

      <section className="prose">
        <h2>Sammenligningen</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">B96</th>
                <th scope="col">BE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Vektgrense</th>
                <td>Bil + henger samlet opptil 4 250 kg</td>
                <td>Tilhenger opptil 3 500 kg</td>
              </tr>
              <tr>
                <th scope="row">Krav</th>
                <td>Minst 7 timer obligatorisk opplæring</td>
                <td>Minst 7 timer obligatorisk opplæring + praktisk prøve</td>
              </tr>
              <tr>
                <th scope="row">Prøve</th>
                <td>Ingen</td>
                <td>Oppkjøring med bil og tilhenger</td>
              </tr>
              <tr>
                <th scope="row">Tidsbruk</th>
                <td>Kort opplæringsløp hos trafikkskole</td>
                <td>Opplæring + prøve, ofte over noe lengre tid</td>
              </tr>
              <tr>
                <th scope="row">Typisk brukstilfelle</th>
                <td>Middels campingvogn, større varehenger</td>
                <td>Hestehenger, stor campingvogn, tung båthenger</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted">
          Prisene settes av trafikkskolene og varierer – innhent tilbud lokalt.
        </p>
      </section>

      <section className="prose">
        <h2>Slik regner du</h2>
        <ol>
          <li>Finn bilens tillatte totalvekt i vognkortet.</li>
          <li>Finn tilhengerens tillatte totalvekt i vognkortet.</li>
          <li>Legg sammen. Under 3 500 kg? Klasse B holder. 3 500–4 250 kg? B96. Over? BE.</li>
          <li>
            Sjekk til slutt bilens maksimale tilhengervekt i vognkortet – den gjelder i
            tillegg.
          </li>
        </ol>
        <p>
          <Link href={routes.verktoyItem("tilhengerkalkulator")}>
            Bruk tilhengerkalkulatoren
          </Link>{" "}
          for å gjøre regnestykket automatisk.
        </p>
      </section>

      <WarningBox title="Tenk på neste tilhenger også">
        <p>
          Mange velger B96 for dagens campingvogn og må likevel ta BE når de bytter til
          en større. Vet du at behovet kan vokse, kan det lønne seg å ta BE med en gang.
          Dette er et praktisk råd, ikke et krav.
        </p>
      </WarningBox>

      <NextSteps
        steps={[
          { label: "Tilhengerkalkulator", href: routes.verktoyItem("tilhengerkalkulator") },
          { label: "Klasse B96 i detalj", href: routes.klasse("klasse-b96") },
          { label: "Klasse BE i detalj", href: routes.klasse("klasse-be") },
          { label: "Tilhengerreglene forklart", href: routes.tilhenger },
        ]}
      />

      <Faq items={faqItems} />

      <SourceBox
        sourceIds={["vegvesenForerkort", "forerkortforskriften", "trafikkopplaringsforskriften"]}
        caveat="Vektgrensene er fastsatt i førerkortforskriften. Anbefalingene i denne guiden er redaksjonelle råd basert på vanlige brukstilfeller."
      />
      <JsonLd data={articleSchema({ title, description, path })} />
    </div>
  );
}
