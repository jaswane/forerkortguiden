import { CONTENT_UPDATED, INDEPENDENCE_NOTE } from "@/lib/constants";
import { getSources, type SourceId } from "@/data/sources";

type SourceBoxProps = {
  sourceIds: SourceId[];
  /** Ekstra forbehold spesifikt for siden. */
  caveat?: string;
  updated?: string;
};

/**
 * Kilde- og forbeholdsboks for regelsider. Viser hvilke kilder innholdet
 * bygger på, når det sist ble gjennomgått, og minner om offisiell informasjon.
 */
export function SourceBox({ sourceIds, caveat, updated = CONTENT_UPDATED }: SourceBoxProps) {
  const list = getSources(sourceIds);
  return (
    <aside className="box box--source" aria-label="Kilder og forbehold">
      <p className="box__title">Kilder og forbehold</p>
      <p>Innholdet på denne siden bygger på:</p>
      <ul>
        {list.map((source) => (
          <li key={source.id}>
            <a href={source.url} rel="noopener">
              {source.name}
            </a>
          </li>
        ))}
      </ul>
      {caveat ? <p>{caveat}</p> : null}
      <p>
        {INDEPENDENCE_NOTE} Regler og satser kan endres – kontroller alltid offisiell
        informasjon før du tar endelige beslutninger.
      </p>
      <p className="updated-note">Sist gjennomgått: {updated}</p>
    </aside>
  );
}
