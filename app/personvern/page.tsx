import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Personvern – slik behandler Førerkortguiden data",
  description:
    "Førerkortguiden samler ikke inn personopplysninger, bruker ikke sporingscookies og krever ingen innlogging. Les hva som lagres lokalt i nettleseren din og hvorfor.",
  path: routes.personvern,
});

export default function PersonvernPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Personvern", path: routes.personvern }]} />
      <div className="prose">
        <h1>Personvern</h1>
        <p className="lead">
          Kort versjon: {SITE_NAME} samler ikke inn personopplysninger, bruker ikke
          sporingscookies og krever ingen innlogging.
        </p>

        <h2>Hva vi ikke gjør</h2>
        <ul>
          <li>Ingen brukerkontoer eller innlogging</li>
          <li>Ingen kontaktskjemaer – kontakt skjer via din egen e-post</li>
          <li>Ingen besøksstatistikk eller analyseverktøy per i dag</li>
          <li>Ingen annonser eller tredjeparts sporingsskript</li>
          <li>Ingen deling eller salg av data</li>
        </ul>

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
          Hvis vi senere innfører for eksempel besøksstatistikk, oppdateres denne siden
          før endringen tas i bruk.
        </p>

        <h2>Spørsmål?</h2>
        <p>
          Kontakt oss på <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    </div>
  );
}
