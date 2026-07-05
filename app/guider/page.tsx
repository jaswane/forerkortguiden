import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CardGrid } from "@/components/content/Card";
import { JsonLd } from "@/components/seo/JsonLd";
import { guides } from "@/data/guides";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { itemListSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Guider – praktiske valg i førerkortløpet",
  description:
    "Redaksjonelle guider som hjelper deg å ta gode valg: B96 eller BE, hvordan velge trafikkskole, og forskjellen på førerkort, YSK og kompetansebevis.",
  path: routes.guider,
});

export default function GuiderPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Guider", path: routes.guider }]} />
      <h1>Guider</h1>
      <p className="lead">
        Guidene går i dybden på valg der det ikke finnes ett riktig svar for alle – med
        konkrete råd og tydelig skille mellom fakta og anbefalinger.
      </p>

      <CardGrid
        items={guides.map((guide) => ({
          title: guide.title,
          href: guide.href,
          description: guide.description,
        }))}
      />

      <JsonLd
        data={itemListSchema({
          name: "Guider fra Førerkortguiden",
          items: guides.map((guide) => ({ name: guide.title, path: guide.href })),
        })}
      />
    </div>
  );
}
