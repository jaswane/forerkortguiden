"use client";

import { useEffect, useState } from "react";

export type ChecklistItem = {
  id: string;
  label: string;
  detail?: string;
};

type InteractiveChecklistProps = {
  /** Nøkkel i localStorage. Prefikses med «fkg:». */
  storageKey: string;
  items: ChecklistItem[];
};

/**
 * Sjekkliste med fremdrift lagret lokalt i nettleseren (localStorage).
 * Ingen data sendes noe sted – se /personvern.
 */
export function InteractiveChecklist({ storageKey, items }: InteractiveChecklistProps) {
  const key = `fkg:${storageKey}`;
  const [state, setState] = useState<{
    loaded: boolean;
    checked: Record<string, boolean>;
  }>({ loaded: false, checked: {} });
  const { loaded, checked } = state;

  useEffect(() => {
    let stored: Record<string, boolean> = {};
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) stored = JSON.parse(raw) as Record<string, boolean>;
    } catch {
      // Ignorer – f.eks. blokkert lagring i privat modus.
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydreringstrygg engangslasting fra localStorage; kan ikke leses under server-rendering
    setState({ loaded: true, checked: stored });
  }, [key]);

  function toggle(id: string) {
    setState((prev) => {
      const next = { ...prev.checked, [id]: !prev.checked[id] };
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        // Ignorer – sjekklisten fungerer fortsatt uten lagring.
      }
      return { loaded: true, checked: next };
    });
  }

  function reset() {
    setState({ loaded: true, checked: {} });
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Ignorer.
    }
  }

  const done = items.filter((item) => checked[item.id]).length;
  const percent = Math.round((done / items.length) * 100);

  return (
    <div>
      <p className="checklist-progress" role="status">
        {done} av {items.length} punkter fullført
      </p>
      <div className="checklist-bar" aria-hidden="true">
        <span style={{ width: `${percent}%` }} />
      </div>
      <ul className="checklist">
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={loaded ? Boolean(checked[item.id]) : false}
                onChange={() => toggle(item.id)}
              />
              <span className="checklist__text">
                <strong>{item.label}</strong>
                {item.detail ? <span>{item.detail}</span> : null}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p className="text-muted no-print">
        Fremdriften lagres bare i din egen nettleser og sendes ikke til oss.{" "}
        <button
          type="button"
          onClick={reset}
          className="btn btn--secondary"
          style={{ marginLeft: "0.35rem", padding: "0.25rem 0.7rem", fontSize: "0.8125rem" }}
        >
          Nullstill
        </button>
      </p>
    </div>
  );
}
