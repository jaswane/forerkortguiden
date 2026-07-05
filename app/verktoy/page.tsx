import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
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

/** Enkle strektegninger per verktøy – nyttige, ikke dekorative. */
const toolIcons: Record<string, React.ReactNode> = {
  "hvilket-forerkort-trenger-jeg": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 8.2c.2-1.2 1-1.9 2.1-1.9 1.2 0 2 .8 2 1.8 0 1.5-2 1.6-2 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="10" cy="13.7" r="0.9" fill="currentColor" />
    </svg>
  ),
  kostnadskalkulator: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="4" y="2.75" width="12" height="14.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M7 9.5h.01M10 9.5h.01M13 9.5h.01M7 12.5h.01M10 12.5h.01M13 12.5h.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  tilhengerkalkulator: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.75" y="6.75" width="9.5" height="6.5" rx="0.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12.25 10h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7.5" cy="15.5" r="1.4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.25" cy="10" r="0.9" fill="currentColor" />
    </svg>
  ),
  "veien-til-lappen": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 17c4-1 3-4 1.5-6C4 9 4.5 6.5 7 6c2.6-.5 3.5 1.5 6 1 2-.4 3-1.7 3-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2.6 2.2"
      />
      <circle cx="16" cy="3.5" r="1.4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="4" cy="17" r="1.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "ovelseskjoring-sjekkliste": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3.75" y="2.75" width="12.5" height="14.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 7l1.2 1.2L10 5.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 7.6h2.5M6.5 12l1.2 1.2 2.3-2.3M11.5 12.6h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

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
