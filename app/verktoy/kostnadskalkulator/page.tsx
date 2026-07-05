import { NextSteps } from "@/components/content/NextSteps";
import { WarningBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { CostCalculator } from "@/components/tools/CostCalculator";
import { ToolShell } from "@/components/tools/ToolShell";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const path = routes.verktoyItem("kostnadskalkulator");

export const metadata = buildMetadata({
  title: "Kostnadskalkulator – estimer prisen på førerkort klasse B",
  description:
    "Estimer hva førerkort klasse B kan koste med dine egne tall: kjøretimer, obligatoriske kurs og gebyrer. Alle beløp kan justeres – resultatet er et estimat.",
  path,
});

export default function KostnadskalkulatorPage() {
  return (
    <ToolShell
      title="Kostnadskalkulator for førerkort"
      lead="Legg inn dine egne tall og få et estimat på hva førerkort klasse B kan koste. Alt regnes lokalt i nettleseren – ingenting sendes til oss."
      toolName="Kostnadskalkulator"
      toolPath={path}
    >
      <WarningBox title="Resultatet er et estimat">
        <p>
          Standardverdiene i kalkulatoren er runde anslag, ikke offisielle priser.
          Trafikkskolene setter prisene sine fritt, og gebyrene til Statens vegvesen
          justeres jevnlig. Juster feltene med reelle priser fra trafikkskoler der du bor
          og gjeldende gebyrer fra{" "}
          <a href="https://www.vegvesen.no/forerkort/" rel="noopener">
            vegvesen.no
          </a>
          .
        </p>
      </WarningBox>

      <CostCalculator />

      <NextSteps
        steps={[
          {
            label: "Hva koster førerkortet?",
            href: routes.kostnad,
            description: "kostnadspostene forklart",
          },
          {
            label: "Øvelseskjøring",
            href: routes.ovelseskjoring,
            description: "gratis mengdetrening som kan spare deg for kjøretimer",
          },
          {
            label: "Guide: hvordan velge trafikkskole",
            href: routes.guide("hvordan-velge-trafikkskole"),
          },
        ]}
      />

      <SourceBox
        sourceIds={["vegvesenForerkort"]}
        caveat="Kalkulatoren gjelder klasse B og dekker de vanligste kostnadspostene. Den tar ikke høyde for stryk på prøver, avbestillingsgebyrer eller lokale variasjoner."
      />
    </ToolShell>
  );
}
