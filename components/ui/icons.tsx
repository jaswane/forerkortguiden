import type { ReactNode } from "react";

/**
 * Felles ikonbibliotek: enkle strektegninger, 20×20, currentColor.
 * Alle er dekorative og rendres med aria-hidden der de brukes.
 */

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

/** Førerkort: kort med bilde og linjer. */
export const LicenceIcon = (
  <Svg>
    <rect x="2.25" y="4.25" width="15.5" height="11.5" rx="1.25" {...stroke} />
    <rect x="4.75" y="7" width="3.5" height="4.5" rx="0.5" {...stroke} />
    <path d="M10.75 8h4.5M10.75 10.5h4.5M4.75 13.5h10.5" {...stroke} />
  </Svg>
);

/** Øvelseskjøring: L-skilt. */
export const LPlateIcon = (
  <Svg>
    <rect x="3.25" y="3.25" width="13.5" height="13.5" rx="1.25" {...stroke} />
    <path d="M8 6.5v7h4.5" {...stroke} strokeWidth={1.8} />
  </Svg>
);

/** Bil med tilhenger. */
export const TrailerIcon = (
  <Svg>
    <rect x="2.75" y="6.75" width="9.5" height="6.5" rx="0.75" {...stroke} />
    <path d="M12.25 10h5" {...stroke} />
    <circle cx="7.5" cy="15.5" r="1.4" {...stroke} />
    <circle cx="17.25" cy="10" r="0.9" fill="currentColor" />
  </Svg>
);

/** Kostnad: prislapp. */
export const PriceTagIcon = (
  <Svg>
    <path
      d="M3.25 4.5c0-.7.56-1.25 1.25-1.25h5.06c.33 0 .65.13.88.37l6.06 6.05a1.25 1.25 0 0 1 0 1.77l-5.06 5.06a1.25 1.25 0 0 1-1.77 0L3.62 10.44a1.25 1.25 0 0 1-.37-.88V4.5Z"
      {...stroke}
    />
    <circle cx="7.4" cy="7.4" r="1.1" {...stroke} />
  </Svg>
);

/** Finn riktig klasse: spørsmålstegn i sirkel. */
export const QuestionIcon = (
  <Svg>
    <circle cx="10" cy="10" r="7.25" {...stroke} />
    <path d="M8 8.2c.2-1.2 1-1.9 2.1-1.9 1.2 0 2 .8 2 1.8 0 1.5-2 1.6-2 3" {...stroke} />
    <circle cx="10" cy="13.7" r="0.9" fill="currentColor" />
  </Svg>
);

/** Ledsager: to enkle figurer (ikon, ikke portrett). */
export const CompanionsIcon = (
  <Svg>
    <circle cx="7" cy="6.5" r="2" {...stroke} />
    <path d="M3.5 15.5c0-2.2 1.6-3.8 3.5-3.8s3.5 1.6 3.5 3.8" {...stroke} />
    <circle cx="13.75" cy="7.75" r="1.6" {...stroke} />
    <path d="M11.9 15.5c.2-1.9 1.5-3.1 3.1-3 1.2.06 2.2.9 2.6 2.2" {...stroke} />
  </Svg>
);

/** Kalkulator. */
export const CalculatorIcon = (
  <Svg>
    <rect x="4" y="2.75" width="12" height="14.5" rx="1" {...stroke} />
    <path d="M7 6h6" {...stroke} />
    <path
      d="M7 9.5h.01M10 9.5h.01M13 9.5h.01M7 12.5h.01M10 12.5h.01M13 12.5h.01"
      {...stroke}
      strokeWidth={1.8}
    />
  </Svg>
);

/** Vei/rute med start og mål. */
export const RouteIcon = (
  <Svg>
    <path
      d="M4 17c4-1 3-4 1.5-6C4 9 4.5 6.5 7 6c2.6-.5 3.5 1.5 6 1 2-.4 3-1.7 3-3.5"
      {...stroke}
      strokeDasharray="2.6 2.2"
    />
    <circle cx="16" cy="3.5" r="1.4" {...stroke} />
    <circle cx="4" cy="17" r="1.4" {...stroke} />
  </Svg>
);

/** Sjekkliste. */
export const ChecklistIcon = (
  <Svg>
    <rect x="3.75" y="2.75" width="12.5" height="14.5" rx="1" {...stroke} />
    <path d="M6.5 7l1.2 1.2L10 5.9" {...stroke} />
    <path d="M11.5 7.6h2.5M6.5 12l1.2 1.2 2.3-2.3M11.5 12.6h2.5" {...stroke} />
  </Svg>
);

/** Personbil. */
export const CarIcon = (
  <Svg>
    <path
      d="M3 12.5v-1.6c0-.5.2-1 .5-1.3L5 8c.4-.5 1-.75 1.6-.75h5.6c.7 0 1.3.3 1.7.9l1.5 1.9c.4.4.6 1 .6 1.5v1"
      {...stroke}
    />
    <path d="M2.75 12.5h14.5" {...stroke} />
    <circle cx="6.4" cy="14.4" r="1.5" {...stroke} />
    <circle cx="13.6" cy="14.4" r="1.5" {...stroke} />
  </Svg>
);

/** Motorsykkel/moped (forenklet). */
export const MotorcycleIcon = (
  <Svg>
    <circle cx="5" cy="14" r="2.4" {...stroke} />
    <circle cx="15" cy="14" r="2.4" {...stroke} />
    <path d="M5 14l3-5h3.5L15 14M8 9 6.75 6.75h2.5M11.5 9l1.4-2.4h1.85" {...stroke} />
  </Svg>
);

/** Lastebil. */
export const TruckIcon = (
  <Svg>
    <rect x="2.25" y="6.25" width="9.5" height="7.5" rx="0.75" {...stroke} />
    <path d="M11.75 8.75h3.1c.4 0 .77.19 1 .5l1.4 1.9c.16.2.25.47.25.74v1.86h-5.75" {...stroke} />
    <circle cx="6" cy="15.4" r="1.5" {...stroke} />
    <circle cx="14.5" cy="15.4" r="1.5" {...stroke} />
  </Svg>
);

/** Traktor. */
export const TractorIcon = (
  <Svg>
    <circle cx="6" cy="13" r="3.1" {...stroke} />
    <circle cx="14.75" cy="14.25" r="1.9" {...stroke} />
    <path d="M9.1 13h3.75M6.5 9.9V6.75h4l1.5 3.4 3.75 1v3.1" {...stroke} />
  </Svg>
);

/** Ikon per verktøy-slug. */
export const toolIcons: Record<string, ReactNode> = {
  "hvilket-forerkort-trenger-jeg": QuestionIcon,
  kostnadskalkulator: CalculatorIcon,
  tilhengerkalkulator: TrailerIcon,
  "veien-til-lappen": RouteIcon,
  "ovelseskjoring-sjekkliste": ChecklistIcon,
};
