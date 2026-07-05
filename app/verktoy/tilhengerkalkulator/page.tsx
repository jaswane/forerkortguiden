import { NextSteps } from "@/components/content/NextSteps";
import { WarningBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { ToolShell } from "@/components/tools/ToolShell";
import { TrailerCalculator } from "@/components/tools/TrailerCalculator";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const path = routes.verktoyItem("tilhengerkalkulator");

export const metadata = buildMetadata({
  title: "Tilhengerkalkulator – trenger du B, B96 eller BE?",
  description:
    "Legg inn tillatt totalvekt for bil og tilhenger og se hvilken førerkortklasse kombinasjonen peker mot: B, B96 eller BE. Veiledende svar med tydelige forbehold.",
  path,
});

export default function TilhengerkalkulatorPage() {
  return (
    <ToolShell
      title="Tilhengerkalkulator"
      lead="Se hvilken førerkortklasse vektene dine peker mot. Bruk tillatt totalvekt fra vognkortene – ikke faktisk vekt. Alt regnes lokalt i nettleseren."
      toolName="Tilhengerkalkulator"
      toolPath={path}
    >
      <TrailerCalculator />

      <WarningBox title="Ikke et juridisk fasitsvar">
        <p>
          Kalkulatoren bruker kun vektgrensene i førerkortforskriften. Den vet ikke hva
          bilen din faktisk har lov til å trekke – det står i bilens vognkort som
          maksimal tilhengervekt, og den grensen gjelder i tillegg. Er du i tvil, sjekk
          vognkortet og Statens vegvesen.
        </p>
      </WarningBox>

      <NextSteps
        steps={[
          {
            label: "Tilhengerreglene forklart",
            href: routes.tilhenger,
            description: "med eksempler og vanlige misforståelser",
          },
          { label: "Guide: B96 eller BE?", href: routes.guide("b96-eller-be") },
        ]}
      />

      <SourceBox
        sourceIds={["vegvesenForerkort", "forerkortforskriften"]}
        caveat="Kalkulatoren dekker kombinasjoner av personbil og tilhenger (klassene B, B96 og BE). Tyngre kjøretøy og spesialtilfeller er ikke dekket."
      />
    </ToolShell>
  );
}
