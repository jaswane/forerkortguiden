import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { InfoBox } from "@/components/content/Boxes";
import { JsonLd } from "@/components/seo/JsonLd";
import { toolIcons } from "@/components/ui/icons";
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
        Fem verktøy som løser hver sin konkrete oppgave i førerkortløpet. Ingen
        innlogging, og ingenting du skriver inn sendes til oss.
      </p>

      <ul className="tool-panels">
        {tools.map((tool) => (
          <li key={tool.slug}>
            <span className="tool-panels__icon">{toolIcons[tool.slug]}</span>
            <div className="tool-panels__body">
              <h2>{tool.cardTitle}</h2>
              <p>{tool.helps}.</p>
              <p className="use-when">{tool.useWhen}</p>
            </div>
            <span className="tool-panels__cta">
              <Link className="btn btn--primary" href={tool.href}>
                {tool.cta}
              </Link>
            </span>
          </li>
        ))}
      </ul>

      <InfoBox title="Om verktøyene">
        <p>
          Verktøyene gir veiledende svar og estimater – de er ikke juridiske fasitsvar.
          Sjekklister lagrer fremdriften kun lokalt i nettleseren din (localStorage), se{" "}
          <Link href={routes.personvern}>personvernsiden</Link>. Kontroller alltid
          gjeldende regler hos Statens vegvesen.
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
