"use client";

import { useEffect, useState } from "react";
import { ANALYTICS_CONSENT_KEY } from "@/lib/constants";

const labels: Record<string, string> = {
  accepted: "Du har godtatt analyse.",
  rejected: "Du har avvist analyse.",
  none: "Du har ikke tatt et valg ennå.",
};

/**
 * Lar brukeren se og endre analysevalget sitt fra /personvern.
 * Nullstiller samtykket og ber banneret vise seg igjen via et vindusevent –
 * ingen hard reload nødvendig.
 */
export function ConsentReset() {
  const [status, setStatus] = useState<"accepted" | "rejected" | "none">("none");

  useEffect(() => {
    try {
      const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- engangslesing fra localStorage etter hydrering
      setStatus(value === "accepted" || value === "rejected" ? value : "none");
    } catch {
      // Ignorer.
    }
  }, []);

  function reset() {
    window.dispatchEvent(new Event("fkg:analytics-consent-reset"));
    setStatus("none");
  }

  return (
    <p>
      <span className="text-muted">{labels[status]}</span>{" "}
      {status === "none" ? null : (
        <button
          type="button"
          className="btn btn--secondary"
          style={{ marginLeft: "0.35rem", padding: "0.35rem 0.8rem", fontSize: "0.875rem" }}
          onClick={reset}
        >
          Endre analysevalg
        </button>
      )}
    </p>
  );
}
