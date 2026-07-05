import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import {
  CONTACT_EMAIL,
  INDEPENDENCE_NOTE,
  OWNER_NAME,
  OWNER_URL,
  SITE_NAME,
} from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Om Førerkortguiden",
  description:
    "Førerkortguiden er en uavhengig norsk veiviser om førerkort, laget av Swane Creative. Les hvorfor nettstedet finnes, hva det dekker og hvordan du når oss.",
  path: routes.om,
});

export default function OmPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Om", path: routes.om }]} />
      <div className="prose">
        <h1>Om {SITE_NAME}</h1>
        <p className="lead">
          {SITE_NAME} hjelper deg å forstå førerkortreglene: hvilken klasse du trenger,
          hvordan løpet fungerer, hva det kan koste og hva neste steg er.
        </p>

        <h2>Hvorfor nettstedet finnes</h2>
        <p>
          Reglene om førerkort er spredt over forskrifter, offentlige nettsider og
          trafikkskolenes markedsføring. Det gjør enkle spørsmål – «kan jeg trekke denne
          hengeren?», «når kan jeg øvelseskjøre?» – unødvendig vanskelige å få svar på.
          {" "}
          {SITE_NAME} samler svarene, forklarer dem i klart språk og peker alltid videre
          til offisiell kilde.
        </p>

        <h2>Hva nettstedet er – og ikke er</h2>
        <ul>
          <li>{INDEPENDENCE_NOTE}</li>
          <li>Vi selger ikke kjøretimer og har ingen avtaler med trafikkskoler.</li>
          <li>Vi publiserer ikke rangeringer, anmeldelser eller «best i test».</li>
          <li>
            Vi erstatter ikke offisiell informasjon – endelige beslutninger skal alltid
            kontrolleres hos <a href="https://www.vegvesen.no/forerkort/" rel="noopener">Statens vegvesen</a>.
          </li>
        </ul>
        <p>
          Hvordan vi jobber med fakta kan du lese i{" "}
          <a href={routes.kilderOgMetode}>kilder og metode</a>.
        </p>

        <h2>Hvem står bak</h2>
        <p>
          {SITE_NAME} er et prosjekt fra{" "}
          <a href={OWNER_URL} rel="noopener">
            {OWNER_NAME}
          </a>
          . Har du innspill, funnet en feil, eller ønsker du å samarbeide? Send en e-post
          til <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> – vi leser alt.
        </p>
      </div>
    </div>
  );
}
