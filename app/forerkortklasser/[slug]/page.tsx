import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { NextSteps, RelatedLinks } from "@/components/content/NextSteps";
import { ShortAnswer, WarningBox } from "@/components/content/Boxes";
import { SourceBox } from "@/components/content/SourceBox";
import { StepList } from "@/components/content/StepList";
import { getLicenseClass, licenseClasses } from "@/data/licenseClasses";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export function generateStaticParams() {
  return licenseClasses.map((klass) => ({ slug: klass.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/forerkortklasser/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const klass = getLicenseClass(slug);
  if (!klass) return {};
  return buildMetadata({
    title: klass.metaTitle,
    description: klass.metaDescription,
    path: routes.klasse(klass.slug),
  });
}

export default async function KlassePage({
  params,
}: PageProps<"/forerkortklasser/[slug]">) {
  const { slug } = await params;
  const klass = getLicenseClass(slug);
  if (!klass) notFound();

  return (
    <div className="container page">
      <Breadcrumbs
        crumbs={[
          { name: "Førerkortklasser", path: routes.klasser },
          { name: `Klasse ${klass.code}`, path: routes.klasse(klass.slug) },
        ]}
      />
      <p>
        <span className="badge">Alderskrav: {klass.minAge}</span>
      </p>
      <h1>{klass.title}</h1>

      <ShortAnswer>
        {klass.shortAnswer.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ShortAnswer>

      <section className="prose">
        <h2>Hva kan du kjøre med klasse {klass.code}?</h2>
        <ul>
          {klass.covers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {klass.limits && klass.limits.length > 0 ? (
        <WarningBox title="Viktige begrensninger">
          <ul>
            {klass.limits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </WarningBox>
      ) : null}

      <section className="prose">
        <h2>Veien til klasse {klass.code}</h2>
        <StepList
          steps={klass.process.map((step) => ({
            title: step.title,
            description: step.description,
          }))}
        />
      </section>

      {klass.misunderstandings && klass.misunderstandings.length > 0 ? (
        <section className="prose">
          <h2>Vanlige misforståelser</h2>
          <dl className="definition-list">
            {klass.misunderstandings.map((item) => (
              <div key={item.claim}>
                <dt>{item.claim}</dt>
                <dd>{item.reality}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <NextSteps steps={klass.nextSteps} />
      <Faq items={klass.faq} />
      <RelatedLinks links={klass.related} />
      <SourceBox sourceIds={klass.sources} caveat={klass.caveat} />
    </div>
  );
}
