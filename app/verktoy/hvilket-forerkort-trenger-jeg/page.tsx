import { NextSteps } from "@/components/content/NextSteps";
import { SourceBox } from "@/components/content/SourceBox";
import { LicensePicker } from "@/components/tools/LicensePicker";
import { ToolShell } from "@/components/tools/ToolShell";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const path = routes.verktoyItem("hvilket-forerkort-trenger-jeg");

export const metadata = buildMetadata({
  title: "Hvilket førerkort trenger jeg? Finn riktig klasse",
  description:
    "Svar på noen få spørsmål om hva du skal kjøre, og få pekt ut hvilken førerkortklasse du bør lese om – bil, moped, MC, tilhenger, lastebil eller traktor.",
  path,
});

export default function HvilketForerkortPage() {
  return (
    <ToolShell
      title="Hvilket førerkort trenger jeg?"
      lead="Velg hva du skal kjøre, så peker vi deg til riktig førerkortklasse. Verktøyet er veiledende og samler ikke inn data."
      toolName="Hvilket førerkort trenger jeg?"
      toolPath={path}
    >
      <LicensePicker />

      <NextSteps
        steps={[
          { label: "Alle førerkortklasser", href: routes.klasser },
          { label: "Slik tar du førerkortet", href: routes.taForerkort },
          { label: "Hva koster førerkortet?", href: routes.kostnad },
        ]}
      />

      <SourceBox
        sourceIds={["vegvesenForerkort", "forerkortforskriften"]}
        caveat="Verktøyet gir en forenklet anbefaling basert på kjøretøytype. Klassekrav har flere detaljer enn verktøyet dekker – les klassesiden og sjekk Statens vegvesen før du bestemmer deg."
      />
    </ToolShell>
  );
}
