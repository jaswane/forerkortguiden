import { routes } from "@/lib/routes";

export type Tool = {
  slug: string;
  title: string;
  cardTitle: string;
  description: string;
  /** Hva verktøyet hjelper deg med – én setning. */
  helps: string;
  /** Når det er lurt å bruke verktøyet. */
  useWhen: string;
  /** Oppgavespesifikk handlingstekst, brukes som lenke-/knappetekst. */
  cta: string;
  href: string;
};

export const tools: Tool[] = [
  {
    slug: "hvilket-forerkort-trenger-jeg",
    title: "Hvilket førerkort trenger jeg?",
    cardTitle: "Hvilket førerkort trenger jeg?",
    description:
      "Svar på noen få spørsmål om hva du skal kjøre, og få pekt ut hvilken førerkortklasse du bør lese om.",
    helps: "Peker ut riktig førerkortklasse ut fra hva du skal kjøre",
    useWhen: "Bruk når du er usikker på om du trenger B, BE, A1, C1 eller noe annet.",
    cta: "Finn riktig klasse",
    href: routes.verktoyItem("hvilket-forerkort-trenger-jeg"),
  },
  {
    slug: "kostnadskalkulator",
    title: "Kostnadskalkulator for førerkort",
    cardTitle: "Kostnadskalkulator",
    description:
      "Estimer hva førerkort klasse B kan koste deg, basert på dine egne tall for kjøretimer, kurs og gebyrer.",
    helps: "Estimerer totalkostnaden for klasse B med dine egne tall",
    useWhen:
      "Bruk når du skal budsjettere billappen eller sammenligne tilbud fra trafikkskoler.",
    cta: "Beregn cirka kostnad",
    href: routes.verktoyItem("kostnadskalkulator"),
  },
  {
    slug: "tilhengerkalkulator",
    title: "Tilhengerkalkulator",
    cardTitle: "Tilhengerkalkulator",
    description:
      "Legg inn vektene på bil og tilhenger og se hvilken førerkortklasse kombinasjonen peker mot: B, B96 eller BE.",
    helps: "Viser om vektene dine peker mot B, B96 eller BE",
    useWhen:
      "Bruk før du leier henger eller kjøper campingvogn – med vektene fra vognkortene.",
    cta: "Sjekk tilhengerreglene",
    href: routes.verktoyItem("tilhengerkalkulator"),
  },
  {
    slug: "veien-til-lappen",
    title: "Veien til lappen – steg for steg",
    cardTitle: "Veien til lappen",
    description:
      "Interaktiv sjekkliste over hele førerkortløpet for klasse B, fra trafikalt grunnkurs til oppkjøring.",
    helps: "Holder oversikt over hvor du er i førerkortløpet for klasse B",
    useWhen: "Bruk underveis i opplæringen – fremdriften lagres i nettleseren din.",
    cta: "Følg veien til lappen",
    href: routes.verktoyItem("veien-til-lappen"),
  },
  {
    slug: "ovelseskjoring-sjekkliste",
    title: "Sjekkliste for øvelseskjøring",
    cardTitle: "Øvelseskjøring-sjekkliste",
    description:
      "Alt som må være på plass før du øvelseskjører privat: krav til deg, ledsageren og bilen. Kan skrives ut.",
    helps: "Sjekker at alt er på plass før privat øvelseskjøring",
    useWhen:
      "Bruk før første tur – og skriv den gjerne ut til hanskerommet. Nyttig for foreldre og ledsagere.",
    cta: "Gå gjennom sjekklisten",
    href: routes.verktoyItem("ovelseskjoring-sjekkliste"),
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}
