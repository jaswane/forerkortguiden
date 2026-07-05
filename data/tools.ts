import { routes } from "@/lib/routes";

export type Tool = {
  slug: string;
  title: string;
  cardTitle: string;
  description: string;
  href: string;
};

export const tools: Tool[] = [
  {
    slug: "hvilket-forerkort-trenger-jeg",
    title: "Hvilket førerkort trenger jeg?",
    cardTitle: "Hvilket førerkort trenger jeg?",
    description:
      "Svar på noen få spørsmål om hva du skal kjøre, og få pekt ut hvilken førerkortklasse du bør lese om.",
    href: routes.verktoyItem("hvilket-forerkort-trenger-jeg"),
  },
  {
    slug: "kostnadskalkulator",
    title: "Kostnadskalkulator for førerkort",
    cardTitle: "Kostnadskalkulator",
    description:
      "Estimer hva førerkort klasse B kan koste deg, basert på dine egne tall for kjøretimer, kurs og gebyrer.",
    href: routes.verktoyItem("kostnadskalkulator"),
  },
  {
    slug: "tilhengerkalkulator",
    title: "Tilhengerkalkulator",
    cardTitle: "Tilhengerkalkulator",
    description:
      "Legg inn vektene på bil og tilhenger og se hvilken førerkortklasse kombinasjonen peker mot: B, B96 eller BE.",
    href: routes.verktoyItem("tilhengerkalkulator"),
  },
  {
    slug: "veien-til-lappen",
    title: "Veien til lappen – steg for steg",
    cardTitle: "Veien til lappen",
    description:
      "Interaktiv sjekkliste over hele førerkortløpet for klasse B, fra trafikalt grunnkurs til oppkjøring.",
    href: routes.verktoyItem("veien-til-lappen"),
  },
  {
    slug: "ovelseskjoring-sjekkliste",
    title: "Sjekkliste for øvelseskjøring",
    cardTitle: "Øvelseskjøring-sjekkliste",
    description:
      "Alt som må være på plass før du øvelseskjører privat: krav til deg, ledsageren og bilen. Kan skrives ut.",
    href: routes.verktoyItem("ovelseskjoring-sjekkliste"),
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}
