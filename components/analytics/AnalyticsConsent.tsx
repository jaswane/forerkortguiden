"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { ANALYTICS_CONSENT_KEY, GA_MEASUREMENT_ID } from "@/lib/constants";
import { routes } from "@/lib/routes";

type Consent = "accepted" | "rejected" | null;

/** Leser samtykke trygt (kan feile i privat modus / blokkert lagring). */
function readConsent(): Consent {
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

/**
 * Analysesamtykke (opt-in) + betinget lasting av Google Analytics 4.
 *
 * - Ingen Google-tag lastes før brukeren aktivt godtar analyse.
 * - Consent Mode settes til «denied» som standard, «granted» først ved godkjenning.
 * - next/script dedupliserer på id, så GA lastes kun én gang – også ved
 *   klientnavigasjon mellom sider.
 */
export function AnalyticsConsent() {
  // «ready» skiller «ikke lest ennå» (server/før hydrering) fra «lest, ingen valg».
  // Før hydrering rendrer vi verken banner eller GA – unngår hydreringsavvik og
  // hindrer at GA lastes på serveren.
  const [state, setState] = useState<{ ready: boolean; consent: Consent }>({
    ready: false,
    consent: null,
  });
  const { ready, consent } = state;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydreringstrygg engangslesing fra localStorage; kan ikke leses under server-rendering
    setState({ ready: true, consent: readConsent() });

    // Lar /personvern nullstille/endre valget uten hard reload.
    function onReset() {
      try {
        window.localStorage.removeItem(ANALYTICS_CONSENT_KEY);
      } catch {
        // Ignorer.
      }
      setState({ ready: true, consent: null });
    }
    window.addEventListener("fkg:analytics-consent-reset", onReset);
    return () => window.removeEventListener("fkg:analytics-consent-reset", onReset);
  }, []);

  function choose(value: "accepted" | "rejected") {
    try {
      window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
    } catch {
      // Ignorer – valget gjelder for økten uansett.
    }
    setState({ ready: true, consent: value });
  }

  const showBanner = ready && consent === null;
  const loadGa = ready && consent === "accepted";

  return (
    <>
      {loadGa && (
        <>
          <Script
            id="ga4-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', { analytics_storage: 'denied' });
              gtag('js', new Date());
              gtag('consent', 'update', { analytics_storage: 'granted' });
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div
          className="consent"
          role="dialog"
          aria-modal="false"
          aria-labelledby="consent-title"
        >
          <div className="consent__inner container">
            <div className="consent__text">
              <p id="consent-title" className="consent__lead">
                Vi bruker Google Analytics for å forstå hvordan siden brukes og forbedre
                innholdet. Du kan bruke siden uten å godta analyse.
              </p>
              <p className="consent__link">
                <Link href={routes.personvern}>Les mer i personvernerklæringen</Link>
              </p>
            </div>
            <div className="consent__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => choose("accepted")}
              >
                Godta analyse
              </button>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => choose("rejected")}
              >
                Avvis
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
