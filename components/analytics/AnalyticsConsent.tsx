"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { ANALYTICS_CONSENT_KEY, GA_MEASUREMENT_ID } from "@/lib/constants";
import { routes } from "@/lib/routes";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

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

/** Oppdaterer Consent Mode i sanntid. Analyse er det eneste vi bruker; annonse-
 *  lagring holdes alltid «denied». */
function updateConsent(granted: boolean) {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

/**
 * Google Analytics 4 med Consent Mode v2.
 *
 * - Google-taggen (gtag.js) lastes på hver side, slik at Googles tag-detektor
 *   finner den. Consent Mode settes til «denied» som standard FØR config, så
 *   ingen analyse-cookie (_ga) settes før brukeren godtar.
 * - Har brukeren allerede godtatt, oppdateres analytics_storage til «granted»
 *   umiddelbart i init-skriptet (før første sidevisning måles med samtykke).
 * - «Godta analyse» oppdaterer til granted i sanntid; «Avvis» beholder denied.
 * - next/script dedupliserer på id, så taggen lastes kun én gang – også ved
 *   klientnavigasjon.
 */
export function AnalyticsConsent() {
  // «ready» skiller «ikke lest ennå» (server/før hydrering) fra «lest, ingen valg».
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
      updateConsent(false);
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
    updateConsent(value === "accepted");
    setState({ ready: true, consent: value });
  }

  const showBanner = ready && consent === null;

  return (
    <>
      {/* Google-taggen lastes alltid, men med Consent Mode default «denied».
          Init-skriptet leser lagret samtykke og oppgraderer til «granted» hvis
          brukeren allerede har godtatt – slik at også første sidevisning måles. */}
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          try {
            if (window.localStorage.getItem('${ANALYTICS_CONSENT_KEY}') === 'accepted') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
          } catch (e) {}
        `}
      </Script>

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
