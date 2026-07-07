import { ConsentReset } from "@/components/analytics/ConsentReset";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { SITE_NAME } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Personvern – slik behandler Førerkortguiden data",
  description:
    "Førerkortguiden bruker Google Analytics kun hvis du samtykker. Krever ingen innlogging. Les hva som lagres lokalt i nettleseren din og hvordan du endrer analysevalget.",
  path: routes.personvern,
});

export default function PersonvernPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Personvern", path: routes.personvern }]} />
      <div className="prose">
        <h1>Personvern</h1>
        <p className="lead">
          Kort versjon: {SITE_NAME} krever ingen innlogging, og vi bruker Google
          Analytics kun hvis du selv godtar det. Du kan bruke hele nettstedet uten å
          godta analyse.
        </p>

        <h2>Hva vi ikke gjør</h2>
        <ul>
          <li>Ingen brukerkontoer eller innlogging</li>
          <li>Ingen kontaktskjemaer – kontakt skjer via din egen e-post</li>
          <li>Ingen analyse-lagring før du har samtykket</li>
          <li>Ingen annonser eller annonserettet sporing</li>
          <li>Ingen deling eller salg av data</li>
        </ul>

        <h2>Google Analytics (valgfritt)</h2>
        <p>
          Vi bruker Google Analytics for å forstå hvordan nettstedet brukes og forbedre
          innholdet – for eksempel hvilke sider som besøkes og hvordan folk navigerer.
          Google-taggen kan lastes for å håndtere samtykke og måling, men vi bruker{" "}
          <strong>samtykkemodus</strong> (Consent Mode): før du har samtykket, er
          analyse-lagring satt til «denied», og{" "}
          <strong>det settes ingen analyse-informasjonskapsel (som _ga)</strong>.
        </p>
        <ul>
          <li>
            Analyse knyttes og lagres først når du aktivt trykker «Godta analyse» i
            samtykkebanneret. Da settes analyse-lagring til «granted».
          </li>
          <li>
            Trykker du «Avvis», forblir analyse-lagring «denied», og nettstedet fungerer
            helt normalt.
          </li>
          <li>
            Vi bruker kun analyse – annonserelatert lagring holdes alltid avslått.
          </li>
          <li>
            Selve samtykkevalget ditt («godtatt» eller «avvist») lagres lokalt i
            nettleseren din med localStorage – det sendes ikke til oss.
          </li>
          <li>Du kan når som helst endre valget ditt (se under).</li>
        </ul>
        <h3>Endre analysevalget</h3>
        <ConsentReset />
        <p className="text-muted">
          Når du nullstiller valget, settes analyse-lagring tilbake til «denied», og
          banneret vises på nytt. Du kan også slette all nettstedsdata i nettleseren.
        </p>

        <h2>Lokal lagring i nettleseren (localStorage)</h2>
        <p>
          Sjekklistene våre – som{" "}
          <a href={routes.verktoyItem("veien-til-lappen")}>Veien til lappen</a> og{" "}
          <a href={routes.verktoyItem("ovelseskjoring-sjekkliste")}>
            sjekklisten for øvelseskjøring
          </a>{" "}
          – kan huske hva du har krysset av. Dette lagres med localStorage,{" "}
          <strong>kun i din egen nettleser på din egen enhet</strong>. Ingenting sendes
          til oss eller andre. Du kan slette dataene med «Nullstill»-knappen på verktøyet
          eller ved å slette nettstedsdata i nettleseren.
        </p>
        <p>
          Kalkulatorene (kostnad og tilhenger) regner alt lokalt i nettleseren og lagrer
          ingenting. Verktøyene har ingen fritekstfelter, og du skal ikke legge inn
          personopplysninger, helseopplysninger eller andre sensitive data noe sted på
          nettstedet.
        </p>

        <h2>Teknisk drift</h2>
        <p>
          Som alle nettsteder ligger {SITE_NAME} hos en driftsleverandør som av
          sikkerhets- og driftshensyn kan føre ordinære tjenerlogger (for eksempel
          IP-adresse og tidspunkt for forespørsler). Slike logger brukes ikke av oss til
          å identifisere eller spore enkeltpersoner.
        </p>

        <h2>Endringer i denne erklæringen</h2>
        <p>
          Hvis vi senere endrer hvordan data behandles – for eksempel tar i bruk nye
          verktøy – oppdateres denne siden før endringen tas i bruk.
        </p>

        <h2>Spørsmål?</h2>
        <p>
          Se <a href={routes.kontakt}>kontaktsiden</a> for hvordan du når oss.
        </p>
      </div>
    </div>
  );
}
