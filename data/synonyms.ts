/**
 * Vanlige folkelige ord og hva de betyr formelt. Brukes for å holde
 * terminologien konsistent og gjøre innholdet lettere å forstå – både
 * for brukere og for søkemotorer/AI-søk.
 */
export type Synonym = { term: string; meaning: string };

export const synonyms: Synonym[] = [
  { term: "Lappen", meaning: "Folkelig ord for førerkort, oftest klasse B (personbil)." },
  { term: "Sertifikat", meaning: "Eldre/folkelig ord for førerkort." },
  { term: "Oppkjøring", meaning: "Praktisk førerprøve hos Statens vegvesen." },
  { term: "Teorien", meaning: "Teoriprøven – den elektroniske kunnskapsprøven." },
  { term: "L-en", meaning: "L-skiltet som brukes ved øvelseskjøring." },
  {
    term: "Mørkekjøring",
    meaning: "Kurs i kjøring i mørket, obligatorisk del av føreropplæringen.",
  },
  {
    term: "Ledsager",
    meaning: "Personen som sitter på ved privat øvelseskjøring og oppfyller kravene.",
  },
  {
    term: "Vogntog",
    meaning: "Bil og tilhenger sett under ett, for eksempel bil med campingvogn.",
  },
  {
    term: "Tillatt totalvekt",
    meaning:
      "Maksvekten et kjøretøy er registrert for i vognkortet – egenvekt pluss maksimal last.",
  },
  {
    term: "YSK",
    meaning: "Yrkessjåførkompetanse – tilleggskrav for å kjøre gods eller passasjerer mot betaling.",
  },
];
