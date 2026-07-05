import { NextSteps } from "@/components/content/NextSteps";
import { PrintButton } from "@/components/content/PrintButton";
import { SourceBox } from "@/components/content/SourceBox";
import { InteractiveChecklist } from "@/components/tools/InteractiveChecklist";
import { ToolShell } from "@/components/tools/ToolShell";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const path = routes.verktoyItem("ovelseskjoring-sjekkliste");

export const metadata = buildMetadata({
  title: "Sjekkliste for øvelseskjøring – alt som må være på plass",
  description:
    "Utskriftsvennlig sjekkliste for privat øvelseskjøring med bil: krav til eleven, ledsageren og bilen – inkludert L-skilt, ekstra speil og mørkekjøring.",
  path,
});

const checklistItems = [
  {
    id: "alder",
    label: "Eleven har fylt 16 år",
    detail: "Aldersgrensen for øvelseskjøring med personbil (klasse B).",
  },
  {
    id: "grunnkurs",
    label: "Trafikalt grunnkurs er gjennomført",
    detail: "Gjelder elever under 25 år. Over 25 år er du fritatt.",
  },
  {
    id: "bevis",
    label: "Bevis for grunnkurs og legitimasjon er med i bilen",
    detail: "Begge deler skal kunne vises ved kontroll.",
  },
  {
    id: "morkekjoring",
    label: "Mørkekjøring er gjennomført (vinterhalvåret)",
    detail:
      "Kreves for å øve i perioden 1. november–15. mars hvis grunnkurset ble tatt uten mørkekjøringsdelen.",
  },
  {
    id: "ledsager-alder",
    label: "Ledsageren har fylt 25 år",
    detail: "Ledsageren regnes som bilens fører under øvelseskjøringen.",
  },
  {
    id: "ledsager-forerett",
    label: "Ledsageren har hatt førerett sammenhengende i minst 5 år",
    detail: "Gyldig førerett i klasse B de siste fem årene.",
  },
  {
    id: "l-skilt",
    label: "L-skilt er montert bak på bilen",
    detail: "Rød L på hvit bakgrunn, godt synlig bakover.",
  },
  {
    id: "speil",
    label: "Ekstra innvendig speil til ledsageren er montert",
    detail: "Ledsageren skal ha eget speil for å følge med bakover.",
  },
  {
    id: "plan",
    label: "Dere har en plan for økten",
    detail: "Avtal hva dere skal øve på – gjerne det kjøreskolen jobber med.",
  },
];

export default function OvelseskjoringSjekklistePage() {
  return (
    <ToolShell
      title="Sjekkliste for øvelseskjøring"
      lead="Gå gjennom listen før dere kjører. Fremdriften lagres kun i din egen nettleser, og listen kan skrives ut og legges i hanskerommet."
      toolName="Øvelseskjøring-sjekkliste"
      toolPath={path}
    >
      <InteractiveChecklist storageKey="ovelseskjoring" items={checklistItems} />
      <p>
        <PrintButton label="Skriv ut sjekklisten" />
      </p>

      <NextSteps
        steps={[
          {
            label: "Øvelseskjøring – reglene forklart",
            href: routes.ovelseskjoring,
            description: "bakgrunnen for punktene i listen",
          },
          { label: "Trafikalt grunnkurs", href: routes.trafikaltGrunnkurs },
          { label: "Veien til lappen – sjekkliste", href: routes.verktoyItem("veien-til-lappen") },
        ]}
      />

      <SourceBox
        sourceIds={["vegvesenForerkort", "trafikkopplaringsforskriften", "tryggTrafikk"]}
        caveat="Listen gjelder privat øvelseskjøring med personbil. Egne krav gjelder for motorsykkel og tunge klasser."
      />
    </ToolShell>
  );
}
