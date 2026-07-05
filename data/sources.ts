export type Source = {
  id: string;
  name: string;
  url: string;
  description: string;
};

/**
 * Kilderegister. Kun reelle, stabile adresser til offisielle kilder.
 * Vi lenker bevisst til hovedsider og navngitte forskrifter fremfor
 * dype undersider som kan flyttes.
 */
export const sources = {
  vegvesenForerkort: {
    id: "vegvesen-forerkort",
    name: "Statens vegvesen – Førerkort",
    url: "https://www.vegvesen.no/forerkort/",
    description:
      "Offisiell informasjon om førerkortklasser, opplæring, prøver, gebyrer og fornyelse.",
  },
  forerkortforskriften: {
    id: "forerkortforskriften",
    name: "Førerkortforskriften (Lovdata)",
    url: "https://lovdata.no/dokument/SF/forskrift/2004-01-19-298",
    description:
      "Forskrift om førerkort m.m. Regulerer førerkortklasser, aldersgrenser og førerett.",
  },
  trafikkopplaringsforskriften: {
    id: "trafikkopplaringsforskriften",
    name: "Trafikkopplæringsforskriften (Lovdata)",
    url: "https://lovdata.no/dokument/SF/forskrift/2004-10-01-1339",
    description:
      "Forskrift om trafikkopplæring og førerprøve. Regulerer obligatorisk opplæring, øvelseskjøring og prøver.",
  },
  vegtrafikkloven: {
    id: "vegtrafikkloven",
    name: "Vegtrafikkloven (Lovdata)",
    url: "https://lovdata.no/dokument/NL/lov/1965-06-18-4",
    description: "Lov om vegtrafikk. Overordnede regler for kjøring og førerett.",
  },
  politiet: {
    id: "politiet",
    name: "Politiet",
    url: "https://www.politiet.no/",
    description:
      "Informasjon om tap av førerett, beslag og politiets rolle i førerkortsaker.",
  },
  tryggTrafikk: {
    id: "trygg-trafikk",
    name: "Trygg Trafikk",
    url: "https://www.tryggtrafikk.no/",
    description:
      "Uavhengig medlemsorganisasjon med råd om trafikksikkerhet og øvelseskjøring.",
  },
  helsedirektoratet: {
    id: "helsedirektoratet",
    name: "Helsedirektoratet",
    url: "https://www.helsedirektoratet.no/",
    description:
      "Førerkortveilederen og helsekrav til førerett, blant annet syn og helseattest.",
  },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof sources;

export function getSources(ids: SourceId[]): Source[] {
  return ids.map((id) => sources[id]);
}
