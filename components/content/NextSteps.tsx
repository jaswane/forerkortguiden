import Link from "next/link";

export type NextStep = {
  label: string;
  href: string;
  description?: string;
};

export function NextSteps({ steps, title = "Neste steg" }: { steps: NextStep[]; title?: string }) {
  return (
    <div className="box box--next">
      <p className="box__title">{title}</p>
      <ul>
        {steps.map((step) => (
          <li key={step.href + step.label}>
            <Link href={step.href}>{step.label}</Link>
            {step.description ? <> – {step.description}</> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RelatedLinks({ links, title = "Relatert innhold" }: { links: NextStep[]; title?: string }) {
  return (
    <nav className="box box--info" aria-label={title}>
      <p className="box__title">{title}</p>
      <ul>
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href}>{link.label}</Link>
            {link.description ? <> – {link.description}</> : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
