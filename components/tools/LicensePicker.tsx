"use client";

import Link from "next/link";
import { useState } from "react";
import { routes } from "@/lib/routes";

type Recommendation = {
  heading: string;
  body: string;
  links: { label: string; href: string }[];
};

type VehicleChoice = "moped" | "mc" | "bil" | "tilhenger" | "lastebil" | "traktor";
type McChoice = "lett" | "mellom" | "tung";
type TruckChoice = "under3500" | "c1" | "c";

const vehicleOptions: { value: VehicleChoice; label: string; detail: string }[] = [
  { value: "bil", label: "Personbil", detail: "Vanlig bil eller varebil opptil 3 500 kg" },
  {
    value: "tilhenger",
    label: "Bil med tilhenger",
    detail: "Campingvogn, hestehenger, båthenger eller stor varehenger",
  },
  { value: "moped", label: "Moped", detail: "Tohjuls moped eller mopedbil, maks 45 km/t" },
  { value: "mc", label: "Motorsykkel", detail: "Lett, mellomtung eller tung MC" },
  {
    value: "lastebil",
    label: "Lastebil eller tung varebil",
    detail: "Kjøretøy med tillatt totalvekt over 3 500 kg",
  },
  { value: "traktor", label: "Traktor", detail: "Traktor eller motorredskap" },
];

const mcOptions: { value: McChoice; label: string; detail: string }[] = [
  { value: "lett", label: "Lett motorsykkel", detail: "Opptil 125 cm³ og 11 kW" },
  { value: "mellom", label: "Mellomklasse", detail: "Opptil 35 kW" },
  { value: "tung", label: "Tung motorsykkel", detail: "Uten effektbegrensning" },
];

const truckOptions: { value: TruckChoice; label: string; detail: string }[] = [
  {
    value: "under3500",
    label: "Opptil 3 500 kg",
    detail: "Vanlig varebil – sjekk tillatt totalvekt i vognkortet",
  },
  { value: "c1", label: "3 500–7 500 kg", detail: "Lett lastebil" },
  { value: "c", label: "Over 7 500 kg", detail: "Lastebil" },
];

function recommend(
  vehicle: VehicleChoice,
  mc: McChoice | null,
  truck: TruckChoice | null
): Recommendation | null {
  switch (vehicle) {
    case "bil":
      return {
        heading: "Da bør du lese om klasse B",
        body: "Klasse B gjelder personbil og varebil med tillatt totalvekt opptil 3 500 kg. Alderskravet er 18 år, og du kan starte øvelseskjøring fra 16.",
        links: [
          { label: "Førerkort klasse B", href: routes.klasse("klasse-b") },
          { label: "Slik tar du førerkortet", href: routes.taForerkort },
        ],
      };
    case "moped":
      return {
        heading: "Da bør du lese om klasse AM",
        body: "Klasse AM gjelder moped og kan tas fra 16 år. Har du allerede førerkort klasse B, kan du kjøre moped uten eget mopedførerkort.",
        links: [
          { label: "Førerkort klasse AM", href: routes.klasse("klasse-am") },
          { label: "Motorsykkel og moped – oversikt", href: routes.motorsykkelOgMoped },
        ],
      };
    case "traktor":
      return {
        heading: "Da bør du lese om klasse T",
        body: "Klasse T gjelder traktor og motorredskap med konstruktiv hastighet opptil 40 km/t, fra 16 år. Har du klasse B, dekker den også mange traktorer.",
        links: [{ label: "Førerkort klasse T", href: routes.klasse("klasse-t") }],
      };
    case "tilhenger":
      return {
        heading: "Da handler det om B, B96 eller BE",
        body: "Hvilken klasse du trenger avhenger av tillatt totalvekt på bil og tilhenger. Dette peker mot at du bør lese tilhengerreglene og bruke tilhengerkalkulatoren – og alltid kontrollere vektgrensene i vognkortet.",
        links: [
          { label: "Tilhengerkalkulator", href: routes.verktoyItem("tilhengerkalkulator") },
          { label: "Tilhengerreglene forklart", href: routes.tilhenger },
          { label: "Guide: B96 eller BE?", href: routes.guide("b96-eller-be") },
        ],
      };
    case "mc":
      if (!mc) return null;
      if (mc === "lett")
        return {
          heading: "Da bør du lese om klasse A1",
          body: "Klasse A1 gjelder lett motorsykkel opptil 125 cm³ og 11 kW, fra 16 år.",
          links: [
            { label: "Førerkort klasse A1", href: routes.klasse("klasse-a1") },
            { label: "Motorsykkel og moped – oversikt", href: routes.motorsykkelOgMoped },
          ],
        };
      if (mc === "mellom")
        return {
          heading: "Da bør du lese om klasse A2",
          body: "Klasse A2 gjelder motorsykkel med effekt opptil 35 kW, fra 18 år.",
          links: [
            { label: "Førerkort klasse A2", href: routes.klasse("klasse-a2") },
            { label: "Motorsykkel og moped – oversikt", href: routes.motorsykkelOgMoped },
          ],
        };
      return {
        heading: "Da bør du lese om klasse A",
        body: "Klasse A gjelder alle motorsykler. Du kan ta den direkte fra 24 år, eller fra 20 år hvis du har hatt A2 i minst to år.",
        links: [
          { label: "Førerkort klasse A", href: routes.klasse("klasse-a") },
          { label: "Motorsykkel og moped – oversikt", href: routes.motorsykkelOgMoped },
        ],
      };
    case "lastebil":
      if (!truck) return null;
      if (truck === "under3500")
        return {
          heading: "Da holder trolig klasse B",
          body: "Varebil med tillatt totalvekt opptil 3 500 kg kan kjøres med klasse B. Sjekk tillatt totalvekt i vognkortet – grensen går på registrert vekt, ikke størrelsen.",
          links: [{ label: "Førerkort klasse B", href: routes.klasse("klasse-b") }],
        };
      if (truck === "c1")
        return {
          heading: "Da bør du lese om klasse C1",
          body: "Klasse C1 gjelder lastebil mellom 3 500 og 7 500 kg. Du må ha klasse B, helseattest og være 18 år. Yrkeskjøring kan i tillegg kreve YSK.",
          links: [
            { label: "Førerkort klasse C1", href: routes.klasse("klasse-c1") },
            {
              label: "Guide: Førerkort og kompetansebevis",
              href: routes.guide("forerkort-og-kompetansebevis"),
            },
          ],
        };
      return {
        heading: "Da bør du lese om klasse C",
        body: "Klasse C gjelder lastebil over 3 500 kg uten øvre grense. Hovedregelen er 21 års aldersgrense, med unntak ved full yrkessjåførutdanning.",
        links: [
          { label: "Førerkort klasse C", href: routes.klasse("klasse-c") },
          {
            label: "Guide: Førerkort og kompetansebevis",
            href: routes.guide("forerkort-og-kompetansebevis"),
          },
        ],
      };
  }
}

export function LicensePicker() {
  const [vehicle, setVehicle] = useState<VehicleChoice | null>(null);
  const [mc, setMc] = useState<McChoice | null>(null);
  const [truck, setTruck] = useState<TruckChoice | null>(null);

  const result = vehicle ? recommend(vehicle, mc, truck) : null;

  return (
    <div className="tool-form">
      <fieldset className="field">
        <legend>Hva skal du kjøre?</legend>
        <ul className="choice-list">
          {vehicleOptions.map((option) => (
            <li key={option.value}>
              <label>
                <input
                  type="radio"
                  name="vehicle"
                  value={option.value}
                  checked={vehicle === option.value}
                  onChange={() => {
                    setVehicle(option.value);
                    setMc(null);
                    setTruck(null);
                  }}
                />
                <span>
                  {option.label}
                  <br />
                  <span className="text-muted">{option.detail}</span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      {vehicle === "mc" ? (
        <fieldset className="field">
          <legend>Hva slags motorsykkel?</legend>
          <ul className="choice-list">
            {mcOptions.map((option) => (
              <li key={option.value}>
                <label>
                  <input
                    type="radio"
                    name="mc"
                    value={option.value}
                    checked={mc === option.value}
                    onChange={() => setMc(option.value)}
                  />
                  <span>
                    {option.label}
                    <br />
                    <span className="text-muted">{option.detail}</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      ) : null}

      {vehicle === "lastebil" ? (
        <fieldset className="field">
          <legend>Hvor tungt er kjøretøyet (tillatt totalvekt)?</legend>
          <ul className="choice-list">
            {truckOptions.map((option) => (
              <li key={option.value}>
                <label>
                  <input
                    type="radio"
                    name="truck"
                    value={option.value}
                    checked={truck === option.value}
                    onChange={() => setTruck(option.value)}
                  />
                  <span>
                    {option.label}
                    <br />
                    <span className="text-muted">{option.detail}</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      ) : null}

      {result ? (
        <div className="tool-result" role="status">
          <h2>{result.heading}</h2>
          <p>{result.body}</p>
          <ul>
            {result.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <p className="text-muted">
            Veiledende svar – kontroller alltid kravene hos Statens vegvesen.
          </p>
        </div>
      ) : null}
    </div>
  );
}
