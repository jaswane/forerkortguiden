import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLicenseClass, licenseClasses } from "@/data/licenseClasses";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { itemListSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Førerkortklasser i Norge – full oversikt",
  description:
    "Oversikt over alle vanlige førerkortklasser i Norge: B, B96, BE, AM, A1, A2, A, C1, C og T. Se alderskrav og hva hver klasse gir rett til å kjøre.",
  path: routes.klasser,
});

const classGroups: { title: string; intro: string; slugs: string[] }[] = [
  {
    title: "Bil og tilhenger",
    intro:
      "Klasse B er det vanlige bilførerkortet. B96 og BE er utvidelser for deg som skal trekke tyngre tilhenger.",
    slugs: ["klasse-b", "klasse-b96", "klasse-be"],
  },
  {
    title: "Moped og motorsykkel",
    intro:
      "Tohjulingene er delt etter alder og motorstørrelse – fra moped ved 16 år til tung motorsykkel ved 24 (eller 20 via A2).",
    slugs: ["klasse-am", "klasse-a1", "klasse-a2", "klasse-a"],
  },
  {
    title: "Tunge kjøretøy",
    intro:
      "Lastebilklassene bygger på klasse B og krever helseattest. Yrkeskjøring krever i tillegg YSK.",
    slugs: ["klasse-c1", "klasse-c"],
  },
  {
    title: "Traktor",
    intro: "Klasse T gjelder traktor og motorredskap, og kan tas fra 16 år.",
    slugs: ["klasse-t"],
  },
];

const hubFaq = [
  {
    question: "Hvilken førerkortklasse trenger jeg for vanlig bil?",
    answer:
      "Klasse B er den vanlige klassen for personbil med tillatt totalvekt opptil 3 500 kg. Skal du trekke tyngre tilhenger, kan du utvide med B96 eller BE.",
  },
  {
    question: "Hva er laveste alder for førerkort i Norge?",
    answer:
      "Flere klasser kan tas fra 16 år, blant annet moped (AM), lett motorsykkel (A1) og traktor (T). Personbil (klasse B) krever 18 år.",
  },
  {
    question: "Gir én klasse rett til å kjøre flere kjøretøy?",
    answer:
      "Ja. For eksempel gir klasse B også rett til å kjøre moped, og klasse A omfatter alt som inngår i A1 og A2. Detaljene står på hver klasseside.",
  },
];

export default function KlasserPage() {
  return (
    <div className="container page">
      <Breadcrumbs crumbs={[{ name: "Førerkortklasser", path: routes.klasser }]} />
      <h1>Førerkortklasser i Norge</h1>
      <p className="lead">
        Hver klasse gir rett til å kjøre bestemte kjøretøy. Oversikten er gruppert etter
        hva du skal kjøre – med alderskrav og det viktigste hver klasse dekker.
      </p>

      <div className="cta-panel no-print">
        <p>
          <strong>Usikker på hvilken klasse du trenger?</strong>
          Svar på noen få spørsmål om hva du skal kjøre.
        </p>
        <Link
          className="btn btn--primary"
          href={routes.verktoyItem("hvilket-forerkort-trenger-jeg")}
        >
          Finn riktig klasse
        </Link>
      </div>

      {classGroups.map((group) => (
        <section className="class-group" key={group.title}>
          <h2>{group.title}</h2>
          <p className="class-group__intro">{group.intro}</p>
          <ul className="class-rows">
            {group.slugs.map((slug) => {
              const klass = getLicenseClass(slug);
              if (!klass) return null;
              return (
                <li key={slug}>
                  <Link href={routes.klasse(slug)}>
                    <span className="class-code">{klass.code}</span>
                    <span className="class-rows__name">
                      <strong>{klass.name}</strong>
                      <span>{klass.tableFacts.vehicles}</span>
                    </span>
                    <span className="class-rows__age">Fra {klass.tableFacts.age}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <p className="text-muted" style={{ marginTop: "1.25rem" }}>
        Oversikten er forenklet. Hver klasseside beskriver begrensninger og veien til
        klassen – og kontroller alltid gjeldende regler hos Statens vegvesen. Skal du
        kjøre tohjuling, se også{" "}
        <Link href={routes.motorsykkelOgMoped}>motorsykkel- og mopedoversikten</Link>.
      </p>

      <Faq items={hubFaq} />

      <JsonLd
        data={itemListSchema({
          name: "Førerkortklasser i Norge",
          items: licenseClasses.map((klass) => ({
            name: `Førerkort klasse ${klass.code}`,
            path: routes.klasse(klass.slug),
          })),
        })}
      />
    </div>
  );
}
