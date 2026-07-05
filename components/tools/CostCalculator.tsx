"use client";

import { useState } from "react";

type CostField = {
  id: string;
  label: string;
  hint?: string;
  default: number;
};

/**
 * Alle beløp er redigerbare estimater – ikke offisielle satser.
 * Standardverdiene er runde anslag som brukeren skal justere selv.
 */
const courseFields: CostField[] = [
  {
    id: "grunnkurs",
    label: "Trafikalt grunnkurs (kr)",
    hint: "Prisen varierer mellom trafikkskoler.",
    default: 2000,
  },
  {
    id: "bane",
    label: "Sikkerhetskurs på øvingsbane (kr)",
    hint: "Inkluderer vanligvis baneleie.",
    default: 5000,
  },
  {
    id: "veg",
    label: "Sikkerhetskurs på veg (kr)",
    hint: "Obligatorisk avsluttende kurs på 13 timer.",
    default: 9000,
  },
  {
    id: "veiledning",
    label: "Veiledningstimer, trinn 2 og 3 (kr)",
    hint: "To obligatoriske vurderingstimer.",
    default: 1600,
  },
];

const feeFields: CostField[] = [
  {
    id: "teoriprove",
    label: "Teoriprøve, gebyr (kr)",
    default: 700,
  },
  {
    id: "oppkjoring",
    label: "Praktisk prøve, gebyr (kr)",
    default: 1400,
  },
  {
    id: "leiebil",
    label: "Leie av bil til oppkjøringen (kr)",
    hint: "De fleste leier trafikkskolens bil.",
    default: 2500,
  },
  {
    id: "utstedelse",
    label: "Førerkortutstedelse og bilde (kr)",
    default: 700,
  },
];

const formatter = new Intl.NumberFormat("nb-NO");

function NumberInput({
  id,
  label,
  hint,
  value,
  min = 0,
  max = 200000,
  onChange,
}: {
  id: string;
  label: string;
  hint?: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={Number.isNaN(value) ? "" : value}
        onChange={(event) => onChange(event.target.valueAsNumber)}
      />
      {hint ? <p className="hint">{hint}</p> : null}
    </div>
  );
}

export function CostCalculator() {
  const [lessons, setLessons] = useState(20);
  const [lessonPrice, setLessonPrice] = useState(800);
  const [amounts, setAmounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(
      [...courseFields, ...feeFields].map((field) => [field.id, field.default])
    )
  );

  const safe = (value: number) => (Number.isNaN(value) ? 0 : value);

  const lessonsTotal = safe(lessons) * safe(lessonPrice);
  const othersTotal = [...courseFields, ...feeFields].reduce(
    (sum, field) => sum + safe(amounts[field.id]),
    0
  );
  const total = lessonsTotal + othersTotal;

  return (
    <div className="tool-form">
      <h2 style={{ marginTop: 0 }}>Kjøretimer</h2>
      <NumberInput
        id="antall-timer"
        label="Antall kjøretimer"
        hint="Behovet varierer mye. Mye privat øvelseskjøring reduserer antallet."
        value={lessons}
        max={200}
        onChange={setLessons}
      />
      <NumberInput
        id="timepris"
        label="Pris per kjøretime (kr)"
        hint="Sjekk prisene hos trafikkskoler der du bor."
        value={lessonPrice}
        max={5000}
        onChange={setLessonPrice}
      />

      <h2>Obligatoriske kurs</h2>
      {courseFields.map((field) => (
        <NumberInput
          key={field.id}
          id={field.id}
          label={field.label}
          hint={field.hint}
          value={amounts[field.id]}
          onChange={(value) => setAmounts((prev) => ({ ...prev, [field.id]: value }))}
        />
      ))}

      <h2>Gebyrer og prøver</h2>
      <p className="text-muted">
        Gebyrsatsene justeres jevnlig – sjekk gjeldende satser hos Statens vegvesen og
        juster feltene.
      </p>
      {feeFields.map((field) => (
        <NumberInput
          key={field.id}
          id={field.id}
          label={field.label}
          hint={field.hint}
          value={amounts[field.id]}
          onChange={(value) => setAmounts((prev) => ({ ...prev, [field.id]: value }))}
        />
      ))}

      <div className="tool-result" role="status" aria-live="polite">
        <h2>Estimert totalkostnad: {formatter.format(total)} kr</h2>
        <p>
          Kjøretimer: {formatter.format(lessonsTotal)} kr · Kurs og gebyrer:{" "}
          {formatter.format(othersTotal)} kr
        </p>
        <p className="text-muted">
          Dette er et estimat basert på tallene du selv har lagt inn – ikke en fasit
          eller et pristilbud. Faktiske priser varierer mellom trafikkskoler og over tid.
        </p>
      </div>
    </div>
  );
}
