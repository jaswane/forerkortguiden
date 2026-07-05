import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CardGrid } from "@/components/content/Card";
import { InfoBox } from "@/components/content/Boxes";
import { JsonLd } from "@/components/seo/JsonLd";
import { tools } from "@/data/tools";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { itemListSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Verktøy – kalkulatorer og sjekklister for førerkort",
  description:
    "Gratis verktøy for førerkortløpet: finn riktig førerkortklasse, estimer kostnaden, sjekk tilhengerreglene og hold oversikt med interaktive sjekklister.",
  path: routes.verktoy,
});

export default function VerktoyPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Verktøy", path: routes.verktoy }]} />
      <h1>Verktøy</h1>
      <p className="lead">
        Enkle, gratis verktøy som hjelper deg videre i førerkortløpet. Ingen innlogging,
        og ingenting du skriver inn sendes til oss.
      </p>

      <CardGrid
        items={tools.map((tool) => ({
          title: tool.cardTitle,
          href: tool.href,
          description: tool.description,
        }))}
      />

      <InfoBox title="Om verktøyene">
        <p>
          Verktøyene gir veiledende svar og estimater – de er ikke juridiske fasitsvar.
          Sjekklister lagrer fremdriften kun lokalt i nettleseren din (localStorage), se{" "}
          <a href={routes.personvern}>personvernsiden</a>. Kontroller alltid gjeldende
          regler hos Statens vegvesen.
        </p>
      </InfoBox>

      <JsonLd
        data={itemListSchema({
          name: "Verktøy fra Førerkortguiden",
          items: tools.map((tool) => ({ name: tool.title, path: tool.href })),
        })}
      />
    </div>
  );
}
