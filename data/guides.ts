import { routes } from "@/lib/routes";

export type Guide = {
  slug: string;
  title: string;
  cardTitle: string;
  description: string;
  href: string;
};

export const guides: Guide[] = [
  {
    slug: "b96-eller-be",
    title: "B96 eller BE – hva bør du velge?",
    cardTitle: "B96 eller BE?",
    description:
      "De to utvidelsene for tilhenger sammenlignet: vektgrenser, krav, tidsbruk og hvilken som passer for campingvogn, hestehenger og båt.",
    href: routes.guide("b96-eller-be"),
  },
  {
    slug: "hvordan-velge-trafikkskole",
    title: "Hvordan velge trafikkskole",
    cardTitle: "Velge trafikkskole",
    description:
      "Hva du bør sjekke før du velger trafikkskole: priser, pakker, tilgjengelighet, instruktør og hvordan du sammenligner reelt.",
    href: routes.guide("hvordan-velge-trafikkskole"),
  },
  {
    slug: "forerkort-og-kompetansebevis",
    title: "Førerkort, YSK og kompetansebevis – hva er forskjellen?",
    cardTitle: "Førerkort vs. kompetansebevis",
    description:
      "Førerkort, yrkessjåførkompetanse, truckførerbevis og maskinførerbevis forklart – hva som kreves til hva.",
    href: routes.guide("forerkort-og-kompetansebevis"),
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
