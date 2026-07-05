"use client";

import Link from "next/link";
import { useState } from "react";
import { routes } from "@/lib/routes";

type Verdict = {
  heading: string;
  body: string;
  links: { label: string; href: string }[];
};

const formatter = new Intl.NumberFormat("nb-NO");

/**
 * Vektgrensene fra førerkortforskriften for B/B96/BE:
 * - B: tilhenger ≤ 750 kg, eller tyngre hvis bil+henger ≤ 3 500 kg samlet
 * - B96: bil+henger ≤ 4 250 kg samlet
 * - BE: tilhenger ≤ 3 500 kg
 * Svaret er veiledende – vognkortets grenser gjelder i tillegg.
 */
function evaluate(car: number, trailer: number): Verdict {
  const combined = car + trailer;

  if (trailer <= 750) {
    return {
      heading: "Dette peker mot at klasse B er nok",
      body: `Tilhenger med tillatt totalvekt opptil 750 kg kan trekkes med klasse B. Samlet vekt i ditt eksempel: ${formatter.format(combined)} kg.`,
      links: [{ label: "Les om klasse B", href: routes.klasse("klasse-b") }],
    };
  }
  if (combined <= 3500) {
    return {
      heading: "Dette peker mot at klasse B er nok",
      body: `Tilhengeren er over 750 kg, men bil og tilhenger har samlet tillatt totalvekt på ${formatter.format(combined)} kg – innenfor grensen på 3 500 kg for klasse B.`,
      links: [{ label: "Les om klasse B", href: routes.klasse("klasse-b") }],
    };
  }
  if (combined <= 4250) {
    return {
      heading: "Dette peker mot B96 (eller BE)",
      body: `Samlet tillatt totalvekt er ${formatter.format(combined)} kg – over 3 500 kg, men innenfor 4 250 kg. Da holder utvidelsen B96. BE dekker også kombinasjonen.`,
      links: [
        { label: "Les om B96", href: routes.klasse("klasse-b96") },
        { label: "Guide: B96 eller BE?", href: routes.guide("b96-eller-be") },
      ],
    };
  }
  if (trailer <= 3500) {
    return {
      heading: "Dette peker mot BE",
      body: `Samlet tillatt totalvekt er ${formatter.format(combined)} kg – over grensen for B96. Tilhengeren er innenfor BE-grensen på 3 500 kg, så dette peker mot at du bør lese om BE.`,
      links: [
        { label: "Les om BE", href: routes.klasse("klasse-be") },
        { label: "Guide: B96 eller BE?", href: routes.guide("b96-eller-be") },
      ],
    };
  }
  return {
    heading: "Dette er tyngre enn BE dekker",
    body: `Tilhengeren har tillatt totalvekt over 3 500 kg. Da er du utenfor B-klassene, og kombinasjonen krever normalt tyngre klasser (for eksempel C1E). Sjekk kravene hos Statens vegvesen.`,
    links: [{ label: "Les om klasse C1", href: routes.klasse("klasse-c1") }],
  };
}

export function TrailerCalculator() {
  const [car, setCar] = useState(2200);
  const [trailer, setTrailer] = useState(1300);

  const valid =
    !Number.isNaN(car) && !Number.isNaN(trailer) && car >= 500 && car <= 7500 && trailer > 0 && trailer <= 10000;
  const verdict = valid ? evaluate(car, trailer) : null;

  return (
    <div className="tool-form">
      <div className="field">
        <label htmlFor="bil-vekt">Bilens tillatte totalvekt (kg)</label>
        <input
          id="bil-vekt"
          type="number"
          inputMode="numeric"
          min={500}
          max={7500}
          value={Number.isNaN(car) ? "" : car}
          onChange={(event) => setCar(event.target.valueAsNumber)}
        />
        <p className="hint">Står i bilens vognkort. Ikke egenvekten – den registrerte maksvekten.</p>
      </div>
      <div className="field">
        <label htmlFor="henger-vekt">Tilhengerens tillatte totalvekt (kg)</label>
        <input
          id="henger-vekt"
          type="number"
          inputMode="numeric"
          min={1}
          max={10000}
          value={Number.isNaN(trailer) ? "" : trailer}
          onChange={(event) => setTrailer(event.target.valueAsNumber)}
        />
        <p className="hint">
          Står i tilhengerens vognkort. Gjelder også om hengeren kjøres tom.
        </p>
      </div>

      {verdict ? (
        <div className="tool-result" role="status" aria-live="polite">
          <h2>{verdict.heading}</h2>
          <p>{verdict.body}</p>
          <ul>
            {verdict.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <p className="text-muted">
            Veiledende svar basert på førerkortforskriftens vektgrenser. Du må alltid
            kontrollere bilens og tilhengerens vektgrenser i vognkortet – de gjelder i
            tillegg til førerkortreglene.
          </p>
        </div>
      ) : (
        <p className="text-muted">Fyll inn begge vektene for å få et veiledende svar.</p>
      )}
    </div>
  );
}
