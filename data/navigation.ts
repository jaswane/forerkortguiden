import { routes } from "@/lib/routes";

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Førerkortklasser", href: routes.klasser },
  { label: "Ta førerkort", href: routes.taForerkort },
  { label: "Kostnad", href: routes.kostnad },
  { label: "Tilhenger", href: routes.tilhenger },
  { label: "Verktøy", href: routes.verktoy },
  { label: "Guider", href: routes.guider },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Temaer",
    items: [
      { label: "Førerkortklasser", href: routes.klasser },
      { label: "Ta førerkort", href: routes.taForerkort },
      { label: "Trafikalt grunnkurs", href: routes.trafikaltGrunnkurs },
      { label: "Øvelseskjøring", href: routes.ovelseskjoring },
      { label: "Teoriprøve", href: routes.teoriprove },
      { label: "Oppkjøring", href: routes.oppkjoring },
      { label: "Kostnad", href: routes.kostnad },
      { label: "Tilhenger", href: routes.tilhenger },
    ],
  },
  {
    heading: "Verktøy og guider",
    items: [
      { label: "Alle verktøy", href: routes.verktoy },
      {
        label: "Hvilket førerkort trenger jeg?",
        href: routes.verktoyItem("hvilket-forerkort-trenger-jeg"),
      },
      { label: "Kostnadskalkulator", href: routes.verktoyItem("kostnadskalkulator") },
      { label: "Tilhengerkalkulator", href: routes.verktoyItem("tilhengerkalkulator") },
      { label: "Alle guider", href: routes.guider },
    ],
  },
  {
    heading: "Om nettstedet",
    items: [
      { label: "Om Førerkortguiden", href: routes.om },
      { label: "Kilder og metode", href: routes.kilderOgMetode },
      { label: "Kontakt", href: routes.kontakt },
      { label: "Personvern", href: routes.personvern },
    ],
  },
];
