import type { FaqItem } from "@/lib/schema";
import type { SourceId } from "@/data/sources";
import { routes } from "@/lib/routes";

export type LinkItem = { label: string; href: string; description?: string };

export type LicenseClass = {
  slug: string;
  code: string;
  name: string;
  /** H1 på klassesiden. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  minAge: string;
  /** Kort kontekst-hint øverst på siden, f.eks. hvor tilhengerutvidelsene passer inn. */
  heroHint?: { text: string; links: LinkItem[] };
  /** Avsnitt i «Kort forklart»-boksen. Svaret først. */
  shortAnswer: string[];
  /** Hva føreretten omfatter. */
  covers: string[];
  /** Viktige begrensninger eller forbehold. */
  limits?: string[];
  /** Veien til denne klassen, som steg. */
  process: { title: string; description: string }[];
  /** Vanlige misforståelser. */
  misunderstandings?: { claim: string; reality: string }[];
  faq: FaqItem[];
  related: LinkItem[];
  nextSteps: LinkItem[];
  sources: SourceId[];
  caveat?: string;
  /** Kort tekst til kort på huben. */
  cardSummary: string;
  /** Rad i sammenligningstabellen på huben. */
  tableFacts: { age: string; vehicles: string };
};

const standardCaveat =
  "Aldersgrenser, opplæringskrav og tekniske grenser er fastsatt i førerkortforskriften og trafikkopplæringsforskriften og kan endres. Kontroller alltid gjeldende krav hos Statens vegvesen før du planlegger opplæring.";

export const licenseClasses: LicenseClass[] = [
  {
    slug: "klasse-b",
    code: "B",
    name: "Personbil",
    title: "Førerkort klasse B – personbil",
    metaTitle: "Førerkort klasse B (personbil) – krav, alder og hva du kan kjøre",
    metaDescription:
      "Klasse B gjelder personbil med tillatt totalvekt opptil 3 500 kg. Se alderskrav, hva du kan kjøre, tilhengerregler og veien fra trafikalt grunnkurs til oppkjøring.",
    minAge: "18 år (øvelseskjøring fra 16 år)",
    heroHint: {
      text: "Skal du trekke tyngre tilhenger enn klasse B tillater, finnes to utvidelser:",
      links: [
        { label: "Se klasse B96", href: routes.klasse("klasse-b96") },
        { label: "Se klasse BE", href: routes.klasse("klasse-be") },
        { label: "Sjekk tilhengerreglene", href: routes.tilhenger },
      ],
    },
    shortAnswer: [
      "Klasse B er det vanlige førerkortet for personbil. Du kan kjøre bil med tillatt totalvekt opptil 3 500 kg og med plass til maks 8 passasjerer i tillegg til føreren.",
      "Du må være 18 år for å få førerkortet, og du kan starte øvelseskjøring fra du er 16 år etter gjennomført trafikalt grunnkurs.",
    ],
    covers: [
      "Personbil og varebil med tillatt totalvekt opptil 3 500 kg og maks 8 passasjerplasser i tillegg til førerplassen",
      "Tilhenger med tillatt totalvekt opptil 750 kg (vogntog opptil 4 250 kg)",
      "Tilhenger over 750 kg, hvis bilens og tilhengerens tillatte totalvekt til sammen ikke overstiger 3 500 kg",
      "Moped (klasse AM) og, med visse begrensninger, traktor og motorredskap med konstruktiv hastighet ikke over 40 km/t",
    ],
    limits: [
      "Bilens vognkort setter egne grenser for hvor tung tilhenger bilen faktisk kan trekke – disse gjelder uavhengig av førerkortklassen",
      "Trenger du å trekke tyngre tilhenger enn klasse B tillater, må du utvide til B96 eller BE",
    ],
    process: [
      {
        title: "Trafikalt grunnkurs",
        description:
          "Obligatorisk startkurs som må være gjennomført før du kan øvelseskjøre. Kan tas fra du er 15 år.",
      },
      {
        title: "Øvelseskjøring og opplæring",
        description:
          "Fra du er 16 år kan du øvelseskjøre privat og ta kjøretimer ved trafikkskole. Opplæringen følger fire trinn med obligatoriske deler, blant annet sikkerhetskurs på øvingsbane.",
      },
      {
        title: "Teoriprøve",
        description:
          "Teoriprøven tas hos Statens vegvesen og kan tidligst tas seks måneder før du fyller 18 år.",
      },
      {
        title: "Sikkerhetskurs på veg og oppkjøring",
        description:
          "Etter fullført obligatorisk opplæring, inkludert sikkerhetskurs på veg, kan du gå opp til praktisk prøve fra du er 18 år.",
      },
    ],
    misunderstandings: [
      {
        claim: "«Med klasse B kan jeg trekke alle vanlige tilhengere.»",
        reality:
          "Nei. Klasse B har klare vektgrenser, og i tillegg begrenser bilens vognkort hva bilen kan trekke. Med campingvogn eller hestehenger havner mange over grensen og trenger B96 eller BE.",
      },
      {
        claim: "«Jeg kan øvelseskjøre så snart jeg har fylt 16.»",
        reality:
          "Du må først ha gjennomført trafikalt grunnkurs. Kursbeviset må være med når du øvelseskjører.",
      },
    ],
    faq: [
      {
        question: "Hvor gammel må jeg være for å ta førerkort klasse B?",
        answer:
          "Du må være 18 år for å ta oppkjøringen og få førerkort klasse B. Øvelseskjøring kan starte fra du er 16 år, etter gjennomført trafikalt grunnkurs.",
      },
      {
        question: "Hvor tung tilhenger kan jeg trekke med klasse B?",
        answer:
          "Med klasse B kan du trekke tilhenger med tillatt totalvekt opptil 750 kg. Tyngre tilhenger er bare tillatt hvis bilens og tilhengerens tillatte totalvekt til sammen ikke overstiger 3 500 kg. Bilens vognkort kan sette lavere grenser.",
      },
      {
        question: "Hva koster det å ta førerkort klasse B?",
        answer:
          "Totalkostnaden varierer mye med hvor mange kjøretimer du trenger og prisene der du bor. Mange ender et sted mellom 30 000 og 50 000 kroner, men dette er kun et estimat. Mye privat øvelseskjøring kan redusere behovet for kjøretimer.",
      },
      {
        question: "Gjelder førerkortet hvis jeg tok oppkjøringen med automatgir?",
        answer:
          "Reglene for automatgir og kode 78 har blitt endret de siste årene. Sjekk hos Statens vegvesen hva som gjelder for førerkortet ditt før du kjører bil med manuelt gir.",
      },
    ],
    related: [
      { label: "Klasse B96 – bil med tyngre tilhenger", href: routes.klasse("klasse-b96") },
      { label: "Klasse BE – bil med stor tilhenger", href: routes.klasse("klasse-be") },
      { label: "Bil og tilhenger – reglene forklart", href: routes.tilhenger },
      { label: "Hva koster førerkortet?", href: routes.kostnad },
      {
        label: "Veien til lappen – interaktiv sjekkliste",
        href: routes.verktoyItem("veien-til-lappen"),
      },
    ],
    nextSteps: [
      {
        label: "Slik tar du førerkortet – hele løpet",
        href: routes.taForerkort,
        description: "fra trafikalt grunnkurs til oppkjøring",
      },
      { label: "Trafikalt grunnkurs", href: routes.trafikaltGrunnkurs },
      { label: "Øvelseskjøring – regler og tips", href: routes.ovelseskjoring },
      { label: "Teoriprøven – slik fungerer den", href: routes.teoriprove },
      { label: "Oppkjøring – slik foregår praktisk prøve", href: routes.oppkjoring },
      {
        label: "Kostnadskalkulator",
        href: routes.verktoyItem("kostnadskalkulator"),
        description: "estimer hva førerkortet kan koste deg",
      },
    ],
    sources: ["vegvesenForerkort", "forerkortforskriften", "trafikkopplaringsforskriften"],
    caveat: standardCaveat,
    cardSummary: "Det vanlige førerkortet for personbil. Alderskrav 18 år.",
    tableFacts: {
      age: "18 år",
      vehicles: "Personbil opptil 3 500 kg, maks 8 passasjerplasser",
    },
  },
  {
    slug: "klasse-b96",
    code: "B96",
    name: "Bil med tilhenger (utvidelse)",
    title: "Førerkort klasse B96 – bil med tyngre tilhenger",
    metaTitle: "Klasse B96 – bil og tilhenger opptil 4 250 kg, uten oppkjøring",
    metaDescription:
      "B96 utvider klasse B slik at bil og tilhenger til sammen kan ha tillatt totalvekt opptil 4 250 kg. Kun obligatorisk kurs – ingen egen prøve. Se krav og forskjellen mot BE.",
    minAge: "18 år",
    heroHint: {
      text: "B96 er den enkleste tilhengerutvidelsen. Trenger du å trekke tyngre enn 4 250 kg samlet:",
      links: [
        { label: "Se klasse BE", href: routes.klasse("klasse-be") },
        { label: "Sjekk tilhengerreglene", href: routes.tilhenger },
      ],
    },
    shortAnswer: [
      "B96 er en utvidelse av klasse B som lar deg kjøre bil og tilhenger med samlet tillatt totalvekt opptil 4 250 kg.",
      "Du trenger ikke egen oppkjøring – bare et obligatorisk kurs på trafikkskole på minst 7 undervisningstimer.",
    ],
    covers: [
      "Samme kjøretøy som klasse B",
      "Tilhenger over 750 kg, der bil og tilhenger til sammen har tillatt totalvekt opptil 4 250 kg",
    ],
    limits: [
      "Er samlet tillatt totalvekt over 4 250 kg, trenger du klasse BE",
      "Bilens vognkort setter egne grenser for tilhengervekt som gjelder i tillegg",
    ],
    process: [
      {
        title: "Ha førerkort klasse B",
        description: "B96 er en utvidelse og forutsetter at du har klasse B.",
      },
      {
        title: "Obligatorisk kurs på trafikkskole",
        description:
          "Kurset er på minst 7 undervisningstimer og kombinerer teori og praktisk kjøring med tilhenger.",
      },
      {
        title: "Utvidelsen registreres",
        description:
          "Etter fullført kurs melder trafikkskolen fra, og du kan få førerkortet oppdatert med B96 (kode 96). Ingen teoriprøve eller oppkjøring kreves.",
      },
    ],
    misunderstandings: [
      {
        claim: "«B96 og BE er omtrent det samme.»",
        reality:
          "B96 gir vogntog opptil 4 250 kg og krever bare kurs. BE gir tilhenger opptil 3 500 kg (langt tyngre vogntog) og krever oppkjøring. Hvilken du trenger avhenger av vektene du skal trekke.",
      },
    ],
    faq: [
      {
        question: "Må jeg ta oppkjøring for å få B96?",
        answer:
          "Nei. B96 krever kun et obligatorisk kurs på minst 7 undervisningstimer ved trafikkskole. Det er ingen egen teoriprøve eller praktisk prøve.",
      },
      {
        question: "Når holder B96, og når trenger jeg BE?",
        answer:
          "B96 holder når bil og tilhenger til sammen har tillatt totalvekt på maks 4 250 kg. Skal du trekke tyngre kombinasjoner, for eksempel stor hestehenger eller tung campingvogn med stor bil, trenger du ofte BE.",
      },
      {
        question: "Hva koster B96?",
        answer:
          "Prisen på kurset settes av den enkelte trafikkskole og varierer. Kontakt trafikkskoler der du bor for konkrete priser.",
      },
    ],
    related: [
      { label: "Klasse BE – bil med stor tilhenger", href: routes.klasse("klasse-be") },
      { label: "Klasse B – personbil", href: routes.klasse("klasse-b") },
      { label: "Guide: B96 eller BE – hva bør du velge?", href: routes.guide("b96-eller-be") },
      { label: "Bil og tilhenger – reglene forklart", href: routes.tilhenger },
    ],
    nextSteps: [
      {
        label: "Tilhengerkalkulator",
        href: routes.verktoyItem("tilhengerkalkulator"),
        description: "sjekk hvilken klasse vektene dine peker mot",
      },
      { label: "Guide: B96 eller BE?", href: routes.guide("b96-eller-be") },
    ],
    sources: ["vegvesenForerkort", "forerkortforskriften", "trafikkopplaringsforskriften"],
    caveat: standardCaveat,
    cardSummary: "Utvidelse av B: vogntog opptil 4 250 kg. Kun kurs, ingen prøve.",
    tableFacts: {
      age: "18 år",
      vehicles: "Bil + tilhenger, samlet opptil 4 250 kg",
    },
  },
  {
    slug: "klasse-be",
    code: "BE",
    name: "Bil med stor tilhenger",
    title: "Førerkort klasse BE – bil med stor tilhenger",
    metaTitle: "Klasse BE – bil med tilhenger opptil 3 500 kg: krav og oppkjøring",
    metaDescription:
      "Klasse BE lar deg trekke tilhenger med tillatt totalvekt opptil 3 500 kg etter bil i klasse B. Se krav om lastsikringskurs og praktisk prøve, og forskjellen mot B96.",
    minAge: "18 år",
    heroHint: {
      text: "BE er den største tilhengerutvidelsen for personbil. Holder det med 4 250 kg samlet, er B96 raskere å skaffe:",
      links: [
        { label: "Se klasse B96", href: routes.klasse("klasse-b96") },
        { label: "Sjekk tilhengerreglene", href: routes.tilhenger },
      ],
    },
    shortAnswer: [
      "Klasse BE lar deg kjøre bil i klasse B med tilhenger med tillatt totalvekt opptil 3 500 kg.",
      "Du må ha klasse B fra før, gjennomføre obligatorisk lastsikringskurs og bestå en praktisk prøve. Det er ingen egen teoriprøve for BE.",
    ],
    covers: [
      "Samme kjøretøy som klasse B",
      "Tilhenger med tillatt totalvekt opptil 3 500 kg – samlet vogntog kan dermed ha tillatt totalvekt opptil 7 000 kg",
    ],
    limits: [
      "Bilens vognkort avgjør hvor tung tilhenger bilen faktisk har lov til å trekke",
      "Tyngre tilhengere enn 3 500 kg krever tyngre klasser (for eksempel C1E)",
    ],
    process: [
      {
        title: "Ha førerkort klasse B",
        description: "BE bygger på klasse B.",
      },
      {
        title: "Opplæring med tilhenger",
        description:
          "Du gjennomfører opplæring ved trafikkskole, inkludert obligatorisk kurs i sikring av last (2 undervisningstimer). Privat øvelseskjøring med tilhenger er også mulig.",
      },
      {
        title: "Praktisk prøve",
        description:
          "Du avlegger praktisk prøve med bil og tilhenger hos Statens vegvesen. Ingen teoriprøve kreves for utvidelsen.",
      },
    ],
    misunderstandings: [
      {
        claim: "«Med BE kan jeg trekke hva som helst.»",
        reality:
          "BE gjelder tilhengere med tillatt totalvekt opptil 3 500 kg, og bilens vognkort setter egne grenser. Eldre BE-førerkort kan ha andre rettigheter – sjekk førerkortet ditt.",
      },
    ],
    faq: [
      {
        question: "Må jeg ta teoriprøve for klasse BE?",
        answer:
          "Nei, det er ingen egen teoriprøve for BE. Du må gjennomføre obligatorisk lastsikringskurs og bestå praktisk prøve med bil og tilhenger.",
      },
      {
        question: "Hva er forskjellen på BE og B96?",
        answer:
          "B96 gir rett til vogntog med samlet tillatt totalvekt opptil 4 250 kg og krever bare kurs. BE gir rett til tilhenger med tillatt totalvekt opptil 3 500 kg og krever praktisk prøve. BE dekker dermed tyngre kombinasjoner.",
      },
      {
        question: "Kan jeg øvelseskjøre med tilhenger?",
        answer:
          "Ja, du kan øvelseskjøre privat for klasse BE når du har klasse B, med ledsager som oppfyller kravene. Reglene for øvelseskjøring gjelder også her.",
      },
    ],
    related: [
      { label: "Klasse B96 – lettere alternativ", href: routes.klasse("klasse-b96") },
      { label: "Guide: B96 eller BE – hva bør du velge?", href: routes.guide("b96-eller-be") },
      { label: "Bil og tilhenger – reglene forklart", href: routes.tilhenger },
      { label: "Oppkjøring – slik foregår praktisk prøve", href: routes.oppkjoring },
    ],
    nextSteps: [
      {
        label: "Tilhengerkalkulator",
        href: routes.verktoyItem("tilhengerkalkulator"),
        description: "sjekk hvilken klasse vektene dine peker mot",
      },
      { label: "Guide: B96 eller BE?", href: routes.guide("b96-eller-be") },
    ],
    sources: ["vegvesenForerkort", "forerkortforskriften", "trafikkopplaringsforskriften"],
    caveat: standardCaveat,
    cardSummary: "Tilhenger opptil 3 500 kg. Krever lastsikringskurs og oppkjøring.",
    tableFacts: {
      age: "18 år",
      vehicles: "Bil + tilhenger opptil 3 500 kg",
    },
  },
  {
    slug: "klasse-am",
    code: "AM",
    name: "Moped",
    title: "Førerkort klasse AM – moped",
    metaTitle: "Klasse AM (moped) – alderskrav 16 år, opplæring og teoriprøve",
    metaDescription:
      "Klasse AM gjelder moped med konstruktiv hastighet opptil 45 km/t. Se alderskrav, obligatorisk opplæring, teoriprøve og forskjellen på AM146 og AM147.",
    minAge: "16 år",
    shortAnswer: [
      "Klasse AM er førerkortet for moped. Du kan ta det fra du er 16 år.",
      "Du må gjennomføre trafikalt grunnkurs, obligatorisk mopedopplæring og bestå teoriprøve. Det er ingen praktisk prøve for tohjuls moped.",
    ],
    covers: [
      "Tohjuls moped (kode 146) med konstruktiv hastighet opptil 45 km/t",
      "Tre- og firehjuls moped (kode 147), for eksempel mopedbil, avhengig av hvilken opplæring du tar",
    ],
    limits: [
      "AM146 gjelder bare tohjuls moped – mopedbil krever AM147",
      "Har du førerkort klasse B, har du allerede rett til å kjøre moped",
    ],
    process: [
      {
        title: "Trafikalt grunnkurs",
        description: "Obligatorisk før øvelseskjøring, kan tas fra du er 15 år.",
      },
      {
        title: "Obligatorisk mopedopplæring",
        description:
          "Opplæringen tas ved trafikkskole og avsluttes uten praktisk prøve for tohjuls moped.",
      },
      {
        title: "Teoriprøve",
        description: "Du må bestå teoriprøven hos Statens vegvesen for å få førerkortet.",
      },
    ],
    faq: [
      {
        question: "Er det oppkjøring for moped?",
        answer:
          "Nei, for tohjuls moped (AM146) er det ingen praktisk prøve. Du må gjennomføre obligatorisk opplæring og bestå teoriprøven.",
      },
      {
        question: "Kan jeg kjøre mopedbil med AM146?",
        answer:
          "Nei. Mopedbil er en tre-/firehjuls moped og krever kode 147, som har egen opplæring.",
      },
      {
        question: "Kan jeg kjøre moped med vanlig bilførerkort?",
        answer: "Ja, førerkort klasse B gir også rett til å kjøre moped.",
      },
    ],
    related: [
      { label: "Klasse A1 – lett motorsykkel", href: routes.klasse("klasse-a1") },
      { label: "Motorsykkel og moped – oversikt", href: routes.motorsykkelOgMoped },
      { label: "Trafikalt grunnkurs", href: routes.trafikaltGrunnkurs },
    ],
    nextSteps: [
      { label: "Teoriprøven – slik fungerer den", href: routes.teoriprove },
      {
        label: "Hvilket førerkort trenger jeg?",
        href: routes.verktoyItem("hvilket-forerkort-trenger-jeg"),
      },
    ],
    sources: ["vegvesenForerkort", "forerkortforskriften", "trafikkopplaringsforskriften"],
    caveat: standardCaveat,
    cardSummary: "Moped fra 16 år. Opplæring og teoriprøve, ingen oppkjøring.",
    tableFacts: {
      age: "16 år",
      vehicles: "Moped, konstruktiv hastighet opptil 45 km/t",
    },
  },
  {
    slug: "klasse-a1",
    code: "A1",
    name: "Lett motorsykkel",
    title: "Førerkort klasse A1 – lett motorsykkel",
    metaTitle: "Klasse A1 (lett motorsykkel) – 16 år, 125 cm³ og 11 kW",
    metaDescription:
      "Klasse A1 gjelder lett motorsykkel opptil 125 cm³ og 11 kW. Se alderskrav, obligatorisk opplæring, teoriprøve og oppkjøring – og veien videre til A2 og A.",
    minAge: "16 år",
    shortAnswer: [
      "Klasse A1 er førerkortet for lett motorsykkel. Du kan ta det fra du er 16 år.",
      "Motorsykkelen kan ha slagvolum opptil 125 cm³, effekt opptil 11 kW og et forhold mellom effekt og egenvekt på maks 0,1 kW/kg.",
    ],
    covers: [
      "Lett motorsykkel opptil 125 cm³ og 11 kW (maks 0,1 kW/kg)",
      "Moped (klasse AM)",
    ],
    process: [
      {
        title: "Trafikalt grunnkurs",
        description: "Obligatorisk før øvelseskjøring hvis du er under 25 år.",
      },
      {
        title: "Obligatorisk MC-opplæring",
        description:
          "Opplæringen for A1 inneholder obligatoriske kurs ved trafikkskole, i tillegg til øvelseskjøring.",
      },
      {
        title: "Teoriprøve",
        description: "Teoriprøve for klasse A1 tas hos Statens vegvesen.",
      },
      {
        title: "Oppkjøring",
        description: "Du avslutter med praktisk prøve på lett motorsykkel.",
      },
    ],
    faq: [
      {
        question: "Hvor gammel må jeg være for å kjøre lett motorsykkel?",
        answer: "Du kan få førerkort klasse A1 fra du er 16 år.",
      },
      {
        question: "Hva er forskjellen på A1 og A2?",
        answer:
          "A1 gjelder lett motorsykkel opptil 125 cm³ og 11 kW fra 16 år. A2 gjelder mellomklasse motorsykkel opptil 35 kW fra 18 år.",
      },
      {
        question: "Kan jeg kjøre lett MC med bilførerkort?",
        answer:
          "Nei, klasse B gir ikke rett til å kjøre lett motorsykkel i Norge. Du trenger klasse A1.",
      },
    ],
    related: [
      { label: "Klasse A2 – mellomklasse motorsykkel", href: routes.klasse("klasse-a2") },
      { label: "Klasse A – tung motorsykkel", href: routes.klasse("klasse-a") },
      { label: "Motorsykkel og moped – oversikt", href: routes.motorsykkelOgMoped },
    ],
    nextSteps: [
      { label: "Teoriprøven – slik fungerer den", href: routes.teoriprove },
      { label: "Oppkjøring – slik foregår praktisk prøve", href: routes.oppkjoring },
    ],
    sources: ["vegvesenForerkort", "forerkortforskriften", "trafikkopplaringsforskriften"],
    caveat: standardCaveat,
    cardSummary: "Lett MC opptil 125 cm³ og 11 kW, fra 16 år.",
    tableFacts: {
      age: "16 år",
      vehicles: "Lett MC, opptil 125 cm³ / 11 kW",
    },
  },
  {
    slug: "klasse-a2",
    code: "A2",
    name: "Mellomklasse motorsykkel",
    title: "Førerkort klasse A2 – mellomklasse motorsykkel",
    metaTitle: "Klasse A2 (mellomklasse MC) – 18 år og opptil 35 kW",
    metaDescription:
      "Klasse A2 gjelder motorsykkel med effekt opptil 35 kW fra du er 18 år. Se krav til opplæring, prøver og hvordan du senere kan utvide til klasse A.",
    minAge: "18 år",
    shortAnswer: [
      "Klasse A2 er førerkortet for mellomklasse motorsykkel. Du kan ta det fra du er 18 år.",
      "Motorsykkelen kan ha effekt opptil 35 kW og maks 0,2 kW/kg, og den kan ikke være nedjustert fra en motorsykkel med mer enn dobbel effekt.",
    ],
    covers: [
      "Motorsykkel med effekt opptil 35 kW (maks 0,2 kW/kg)",
      "Alt som inngår i klasse A1, inkludert moped",
    ],
    process: [
      {
        title: "Trafikalt grunnkurs",
        description: "Obligatorisk før øvelseskjøring hvis du er under 25 år.",
      },
      {
        title: "Obligatorisk MC-opplæring",
        description: "Opplæring med obligatoriske kurs ved trafikkskole.",
      },
      {
        title: "Teoriprøve",
        description: "Teoriprøve for klasse A2 tas hos Statens vegvesen.",
      },
      {
        title: "Oppkjøring",
        description: "Praktisk prøve på motorsykkel i A2-klassen.",
      },
    ],
    faq: [
      {
        question: "Har jeg A1-rettigheter med A2?",
        answer: "Ja, klasse A2 omfatter også lett motorsykkel (A1) og moped (AM).",
      },
      {
        question: "Hvordan går jeg fra A1 til A2?",
        answer:
          "Du kan utvide fra A1 til A2. Kravene til opplæring og prøve ved utvidelse er egne regler – sjekk detaljene hos Statens vegvesen eller en trafikkskole.",
      },
      {
        question: "Når kan jeg utvide fra A2 til A?",
        answer:
          "Etter minst to år med A2 kan du utvide til klasse A ved å ta et obligatorisk kurs, uten ny førerprøve.",
      },
    ],
    related: [
      { label: "Klasse A1 – lett motorsykkel", href: routes.klasse("klasse-a1") },
      { label: "Klasse A – tung motorsykkel", href: routes.klasse("klasse-a") },
      { label: "Motorsykkel og moped – oversikt", href: routes.motorsykkelOgMoped },
    ],
    nextSteps: [
      { label: "Teoriprøven – slik fungerer den", href: routes.teoriprove },
      { label: "Oppkjøring – slik foregår praktisk prøve", href: routes.oppkjoring },
    ],
    sources: ["vegvesenForerkort", "forerkortforskriften", "trafikkopplaringsforskriften"],
    caveat: standardCaveat,
    cardSummary: "Mellomklasse MC opptil 35 kW, fra 18 år.",
    tableFacts: {
      age: "18 år",
      vehicles: "MC opptil 35 kW",
    },
  },
  {
    slug: "klasse-a",
    code: "A",
    name: "Tung motorsykkel",
    title: "Førerkort klasse A – tung motorsykkel",
    metaTitle: "Klasse A (tung motorsykkel) – 24 år direkte eller 20 år via A2",
    metaDescription:
      "Klasse A gjelder alle motorsykler uten effektbegrensning. Se de to veiene: direkte fra 24 år, eller fra 20 år etter to år med A2 og obligatorisk kurs.",
    minAge: "24 år direkte, eller 20 år etter 2 år med A2",
    shortAnswer: [
      "Klasse A er førerkortet for tung motorsykkel, uten effektbegrensning.",
      "Det er to veier: direkte erverv fra du er 24 år, eller utvidelse fra A2 fra du er 20 år hvis du har hatt A2 i minst to år.",
    ],
    covers: [
      "Alle motorsykler, uansett effekt",
      "Alt som inngår i klasse A1 og A2, inkludert moped",
    ],
    process: [
      {
        title: "Vei 1: Direkte erverv (fra 24 år)",
        description:
          "Full opplæring med obligatoriske kurs, teoriprøve og praktisk prøve på tung motorsykkel.",
      },
      {
        title: "Vei 2: Utvidelse fra A2 (fra 20 år)",
        description:
          "Har du hatt A2 i minst to år, kan du utvide til A ved å gjennomføre et obligatorisk kurs på 7 undervisningstimer ved trafikkskole – uten ny teoriprøve eller oppkjøring.",
      },
    ],
    misunderstandings: [
      {
        claim: "«Jeg kan ta tung MC rett etter A2.»",
        reality:
          "Utvidelse fra A2 til A krever at du har hatt A2 i minst to år, i tillegg til obligatorisk kurs. Alternativt kan du vente til du er 24 år og ta klasse A direkte.",
      },
    ],
    faq: [
      {
        question: "Når kan jeg ta klasse A direkte?",
        answer:
          "Direkte erverv av klasse A krever at du er 24 år, med full opplæring, teoriprøve og praktisk prøve.",
      },
      {
        question: "Hvordan utvider jeg fra A2 til A?",
        answer:
          "Etter minst to år med A2 kan du fra du er 20 år utvide til klasse A ved å ta et obligatorisk kurs på 7 undervisningstimer. Ingen ny prøve kreves.",
      },
    ],
    related: [
      { label: "Klasse A2 – mellomklasse motorsykkel", href: routes.klasse("klasse-a2") },
      { label: "Klasse A1 – lett motorsykkel", href: routes.klasse("klasse-a1") },
      { label: "Motorsykkel og moped – oversikt", href: routes.motorsykkelOgMoped },
    ],
    nextSteps: [
      { label: "Teoriprøven – slik fungerer den", href: routes.teoriprove },
      { label: "Kostnad – hva koster førerkortet?", href: routes.kostnad },
    ],
    sources: ["vegvesenForerkort", "forerkortforskriften", "trafikkopplaringsforskriften"],
    caveat: standardCaveat,
    cardSummary: "Tung MC uten effektgrense. 24 år direkte, eller 20 år via A2.",
    tableFacts: {
      age: "24 år (20 år via A2)",
      vehicles: "Alle motorsykler",
    },
  },
  {
    slug: "klasse-c1",
    code: "C1",
    name: "Lett lastebil",
    title: "Førerkort klasse C1 – lett lastebil",
    metaTitle: "Klasse C1 (lett lastebil) – 3 500 til 7 500 kg, krav og helseattest",
    metaDescription:
      "Klasse C1 gjelder lastebil med tillatt totalvekt mellom 3 500 og 7 500 kg. Se alderskrav, krav om klasse B og helseattest, og hva C1E gir i tillegg.",
    minAge: "18 år",
    shortAnswer: [
      "Klasse C1 er førerkortet for lett lastebil med tillatt totalvekt over 3 500 kg og opptil 7 500 kg.",
      "Du må ha klasse B fra før, levere helseattest og gjennomføre opplæring med teoriprøve og oppkjøring. Aldersgrensen er 18 år.",
    ],
    covers: [
      "Lastebil med tillatt totalvekt over 3 500 kg og opptil 7 500 kg",
      "Tilhenger med tillatt totalvekt opptil 750 kg",
    ],
    limits: [
      "Tyngre tilhenger krever klasse C1E",
      "Skal du kjøre gods mot betaling, kan det i tillegg kreves yrkessjåførkompetanse (YSK)",
      "Førerett i tunge klasser gis for inntil 5 år av gangen og krever gyldig helseattest",
    ],
    process: [
      {
        title: "Ha førerkort klasse B",
        description: "C1 bygger på klasse B.",
      },
      {
        title: "Helseattest",
        description:
          "Tunge klasser krever helseattest fra lege før opplæring og prøve.",
      },
      {
        title: "Opplæring, teoriprøve og oppkjøring",
        description:
          "Du gjennomfører obligatorisk opplæring ved trafikkskole, består teoriprøve for C1 og avslutter med praktisk prøve.",
      },
    ],
    faq: [
      {
        question: "Trenger jeg C1 for å kjøre bobil?",
        answer:
          "Bare hvis bobilen har tillatt totalvekt over 3 500 kg. Mange bobiler er registrert med totalvekt på akkurat 3 500 kg og kan kjøres med klasse B – sjekk vognkortet.",
      },
      {
        question: "Hvor lenge gjelder føreretten i klasse C1?",
        answer:
          "Førerett i tunge klasser gis for inntil 5 år av gangen og fornyes med ny helseattest.",
      },
      {
        question: "Trenger jeg YSK i tillegg til C1?",
        answer:
          "Skal du transportere gods mot vederlag, kreves i mange tilfeller yrkessjåførkompetanse (YSK) i tillegg til førerkortet. Privat kjøring krever ikke YSK.",
      },
    ],
    related: [
      { label: "Klasse C – lastebil", href: routes.klasse("klasse-c") },
      {
        label: "Guide: Førerkort, YSK og kompetansebevis",
        href: routes.guide("forerkort-og-kompetansebevis"),
      },
      { label: "Klasse B – personbil", href: routes.klasse("klasse-b") },
    ],
    nextSteps: [
      { label: "Teoriprøven – slik fungerer den", href: routes.teoriprove },
      { label: "Alle førerkortklasser", href: routes.klasser },
    ],
    sources: [
      "vegvesenForerkort",
      "forerkortforskriften",
      "trafikkopplaringsforskriften",
      "helsedirektoratet",
    ],
    caveat: standardCaveat,
    cardSummary: "Lett lastebil 3 500–7 500 kg. Krever B og helseattest.",
    tableFacts: {
      age: "18 år",
      vehicles: "Lastebil 3 500–7 500 kg",
    },
  },
  {
    slug: "klasse-c",
    code: "C",
    name: "Lastebil",
    title: "Førerkort klasse C – lastebil",
    metaTitle: "Klasse C (lastebil) – alderskrav, helseattest og YSK",
    metaDescription:
      "Klasse C gjelder lastebil over 3 500 kg. Se alderskrav (21 år, eller tidligere med yrkessjåførutdanning), krav om klasse B, helseattest og fornyelse hvert 5. år.",
    minAge: "21 år (tidligere med full yrkessjåførutdanning)",
    shortAnswer: [
      "Klasse C er førerkortet for lastebil med tillatt totalvekt over 3 500 kg, med tilhenger opptil 750 kg.",
      "Hovedregelen er 21 års aldersgrense. Med full yrkessjåførutdanning (YSK) kan du starte tidligere. Du må ha klasse B og gyldig helseattest.",
    ],
    covers: [
      "Lastebil med tillatt totalvekt over 3 500 kg",
      "Tilhenger med tillatt totalvekt opptil 750 kg",
    ],
    limits: [
      "Tyngre tilhenger krever klasse CE",
      "Godstransport mot vederlag krever i tillegg yrkessjåførkompetanse (YSK)",
      "Førerett gis for inntil 5 år av gangen og krever gyldig helseattest",
    ],
    process: [
      {
        title: "Ha førerkort klasse B",
        description: "Klasse C bygger på klasse B.",
      },
      {
        title: "Helseattest",
        description: "Helseattest fra lege kreves for tunge klasser.",
      },
      {
        title: "Opplæring, teoriprøve og oppkjøring",
        description:
          "Obligatorisk opplæring ved trafikkskole, teoriprøve for klasse C og praktisk prøve med lastebil.",
      },
      {
        title: "Eventuelt YSK",
        description:
          "Skal du jobbe som yrkessjåfør, må du i tillegg ta yrkessjåførutdanning. Full grunnutdanning kan gi lavere aldersgrense.",
      },
    ],
    faq: [
      {
        question: "Hvor gammel må jeg være for å ta klasse C?",
        answer:
          "Hovedregelen er 21 år. Med full yrkessjåførutdanning (YSK grunnutdanning) kan aldersgrensen bli lavere – sjekk detaljene hos Statens vegvesen.",
      },
      {
        question: "Hva er forskjellen på C1 og C?",
        answer:
          "C1 gjelder lastebil mellom 3 500 og 7 500 kg, mens C gjelder lastebil uten øvre vektgrense. C har strengere alderskrav.",
      },
      {
        question: "Må jeg fornye førerkortet i klasse C?",
        answer:
          "Ja, førerett i tunge klasser gis for inntil 5 år av gangen og fornyes med ny helseattest.",
      },
    ],
    related: [
      { label: "Klasse C1 – lett lastebil", href: routes.klasse("klasse-c1") },
      {
        label: "Guide: Førerkort, YSK og kompetansebevis",
        href: routes.guide("forerkort-og-kompetansebevis"),
      },
    ],
    nextSteps: [
      { label: "Teoriprøven – slik fungerer den", href: routes.teoriprove },
      { label: "Alle førerkortklasser", href: routes.klasser },
    ],
    sources: [
      "vegvesenForerkort",
      "forerkortforskriften",
      "trafikkopplaringsforskriften",
      "helsedirektoratet",
    ],
    caveat: standardCaveat,
    cardSummary: "Lastebil over 3 500 kg. 21 år, helseattest, fornyes hvert 5. år.",
    tableFacts: {
      age: "21 år",
      vehicles: "Lastebil over 3 500 kg",
    },
  },
  {
    slug: "klasse-t",
    code: "T",
    name: "Traktor",
    title: "Førerkort klasse T – traktor",
    metaTitle: "Klasse T (traktor) – alderskrav 16 år og hva klassen dekker",
    metaDescription:
      "Klasse T gjelder traktor og motorredskap med konstruktiv hastighet opptil 40 km/t. Se alderskrav, vektbegrensninger og hvordan opplæringen foregår.",
    minAge: "16 år",
    shortAnswer: [
      "Klasse T er førerkortet for traktor og motorredskap med konstruktiv hastighet opptil 40 km/t.",
      "Du kan ta klasse T fra du er 16 år. Det gjelder egne vektbegrensninger for de yngste førerne.",
    ],
    covers: [
      "Traktor og motorredskap med konstruktiv hastighet opptil 40 km/t, med tilhenger",
    ],
    limits: [
      "For førere under 21 år gjelder egne begrensninger på vekt og hastighet for enkelte kombinasjoner – sjekk detaljene hos Statens vegvesen",
      "Raskere traktorer kan kreve andre klasser",
      "Har du klasse B, kan du allerede kjøre traktor og motorredskap med konstruktiv hastighet opptil 40 km/t, med visse begrensninger",
    ],
    process: [
      {
        title: "Trafikalt grunnkurs",
        description: "Obligatorisk før øvelseskjøring hvis du er under 25 år.",
      },
      {
        title: "Opplæring og øvelseskjøring",
        description:
          "Opplæring kan skje ved trafikkskole og gjennom privat øvelseskjøring. Kravene til obligatorisk opplæring og prøver avhenger av alder og traktortype – sjekk Statens vegvesen.",
      },
      {
        title: "Teoriprøve",
        description: "Du må bestå teoriprøve for klasse T hos Statens vegvesen.",
      },
    ],
    faq: [
      {
        question: "Kan jeg kjøre traktor med bilførerkort?",
        answer:
          "Ja, klasse B gir rett til å kjøre traktor og motorredskap med konstruktiv hastighet opptil 40 km/t, med visse begrensninger.",
      },
      {
        question: "Hvor gammel må jeg være for å kjøre traktor?",
        answer:
          "Du kan ta førerkort klasse T fra du er 16 år. For unge førere gjelder egne vektbegrensninger på tyngre kombinasjoner.",
      },
    ],
    related: [
      { label: "Klasse B – personbil", href: routes.klasse("klasse-b") },
      { label: "Alle førerkortklasser", href: routes.klasser },
    ],
    nextSteps: [
      { label: "Trafikalt grunnkurs", href: routes.trafikaltGrunnkurs },
      { label: "Teoriprøven – slik fungerer den", href: routes.teoriprove },
    ],
    sources: ["vegvesenForerkort", "forerkortforskriften", "trafikkopplaringsforskriften"],
    caveat: standardCaveat,
    cardSummary: "Traktor og motorredskap opptil 40 km/t, fra 16 år.",
    tableFacts: {
      age: "16 år",
      vehicles: "Traktor/motorredskap opptil 40 km/t",
    },
  },
];

export function getLicenseClass(slug: string): LicenseClass | undefined {
  return licenseClasses.find((klass) => klass.slug === slug);
}
