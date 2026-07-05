import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { InfoBox } from "@/components/content/Boxes";
import { CONTACT_EMAIL, OWNER_NAME, OWNER_URL, SITE_NAME } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Kontakt Førerkortguiden",
  description:
    "Kontakt Førerkortguiden på e-post – for feilmeldinger, innspill til innholdet eller samarbeidsforespørsler. Vi svarer på kontakt@swanecreative.no.",
  path: routes.kontakt,
});

export default function KontaktPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Kontakt", path: routes.kontakt }]} />
      <div className="prose">
        <h1>Kontakt</h1>
        <p className="lead">
          Enkleste vei til oss er e-post:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>

        <h2>Funnet en feil?</h2>
        <p>
          Presisjon er det viktigste vi har. Hvis du har funnet noe som er utdatert,
          upresist eller direkte feil, send oss gjerne lenken til siden og hva som bør
          rettes. Vi prioriterer slike henvendelser høyt.
        </p>

        <h2>Spørsmål om førerkortet ditt?</h2>
        <p>
          Vi kan dessverre ikke svare på enkeltsaker om førerkort, helsekrav eller
          gebyrer. Slike spørsmål må rettes til{" "}
          <a href="https://www.vegvesen.no/forerkort/" rel="noopener">
            Statens vegvesen
          </a>
          , som er riktig myndighet.
        </p>

        <h2>Samarbeid</h2>
        <p>
          {SITE_NAME} er under utvikling, og vi er åpne for samarbeid som gir reell verdi
          for folk som skal ta førerkort – for eksempel med trafikkskoler,
          teoriprøve-aktører eller kursleverandører. Eventuelt kommersielt innhold vil
          alltid bli tydelig merket, og vi kommer ikke til å publisere rangeringer eller
          «best i test» uten reelt datagrunnlag. Ta kontakt på e-post for en prat.
        </p>

        <InfoBox title="Hvem svarer?">
          <p>
            {SITE_NAME} drives av{" "}
            <a href={OWNER_URL} rel="noopener">
              {OWNER_NAME}
            </a>
            . Henvendelser besvares fortløpende.
          </p>
        </InfoBox>
      </div>
    </div>
  );
}
