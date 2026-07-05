import { NextSteps } from "@/components/content/NextSteps";
import { PrintButton } from "@/components/content/PrintButton";
import { SourceBox } from "@/components/content/SourceBox";
import { InteractiveChecklist } from "@/components/tools/InteractiveChecklist";
import { ToolShell } from "@/components/tools/ToolShell";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const path = routes.verktoyItem("veien-til-lappen");

export const metadata = buildMetadata({
  title: "Veien til lappen – interaktiv sjekkliste for klasse B",
  description:
    "Hold oversikt over førerkortløpet for klasse B med en interaktiv sjekkliste: trafikalt grunnkurs, øvelseskjøring, obligatoriske kurs, teoriprøve og oppkjøring.",
  path,
});

const checklistItems = [
  {
    id: "grunnkurs",
    label: "Gjennomført trafikalt grunnkurs",
    detail: "Fra 15 år. Obligatorisk før øvelseskjøring hvis du er under 25.",
  },
  {
    id: "morkekjoring",
    label: "Gjennomført mørkekjøringsdemonstrasjon",
    detail:
      "Kreves for å øvelseskjøre i perioden 1. november–15. mars hvis grunnkurset ble tatt uten mørkekjøring.",
  },
  {
    id: "ovelseskjoring",
    label: "Godt i gang med øvelseskjøring",
    detail: "Fra 16 år. Kombiner privat øving med kjøretimer for best effekt.",
  },
  {
    id: "trinn2",
    label: "Fullført trinn 2 med veiledningstime",
    detail: "Grunnleggende kjøretøybehandling, avsluttes med obligatorisk veiledningstime.",
  },
  {
    id: "bane",
    label: "Gjennomført sikkerhetskurs på øvingsbane",
    detail: "Obligatorisk kurs i trinn 3 («glattkjøring»).",
  },
  {
    id: "trinn3",
    label: "Fullført trinn 3 med veiledningstime",
    detail: "Kjøring i variert trafikk, avsluttes med obligatorisk veiledningstime.",
  },
  {
    id: "teoriprove",
    label: "Bestått teoriprøven",
    detail: "Kan tas fra 17,5 år hos Statens vegvesen. Gyldig i 3 år.",
  },
  {
    id: "sikkerhetskurs-veg",
    label: "Gjennomført sikkerhetskurs på veg",
    detail: "Obligatorisk avsluttende kurs på 13 timer (trinn 4).",
  },
  {
    id: "bestilt-oppkjoring",
    label: "Bestilt oppkjøring",
    detail: "Bestilles hos Statens vegvesen. Ventetiden varierer – bestill i god tid.",
  },
  {
    id: "oppkjoring",
    label: "Bestått oppkjøringen",
    detail: "Fra 18 år. Husk gyldig legitimasjon og godkjent prøvebil.",
  },
];

export default function VeienTilLappenPage() {
  return (
    <ToolShell
      title="Veien til lappen – sjekkliste for klasse B"
      lead="Kryss av etter hvert som du fullfører stegene i førerkortløpet. Fremdriften lagres kun i din egen nettleser."
      toolName="Veien til lappen"
      toolPath={path}
    >
      <InteractiveChecklist storageKey="veien-til-lappen" items={checklistItems} />
      <p>
        <PrintButton label="Skriv ut sjekklisten" />
      </p>

      <NextSteps
        steps={[
          {
            label: "Hele førerkortløpet forklart",
            href: routes.taForerkort,
            description: "les mer om hvert steg",
          },
          { label: "Teoriprøven", href: routes.teoriprove },
          { label: "Oppkjøringen", href: routes.oppkjoring },
        ]}
      />

      <SourceBox
        sourceIds={["vegvesenForerkort", "trafikkopplaringsforskriften"]}
        caveat="Sjekklisten gjelder klasse B og følger trinnene i trafikkopplæringsforskriften. Rekkefølgen på enkelte punkter kan variere – trafikkskolen din vet hva som passer for deg."
      />
    </ToolShell>
  );
}
