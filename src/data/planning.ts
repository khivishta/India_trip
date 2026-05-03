import { type Language } from "./placeDetails";

export type TransportCategory = "flight-direct" | "flight-connection" | "car" | "taxi" | "boat" | "vip" | "optional";

export type StaySummary = {
  city: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  color: string;
};

export type TransportSegment = {
  date: string;
  from: string;
  to: string;
  mode: string;
  category: TransportCategory;
  duration: string;
  status: string;
  evidence?: string;
  action: string;
};

export type AgencyTask = {
  date: string;
  city: string;
  pickup: string;
  dropoff: string;
  service: string;
  category: TransportCategory;
  duration: string;
  action: string;
  optional?: boolean;
};

export type FlightEvidence = {
  route: string;
  verdict: string;
  evidence: string;
  instruction: string;
  category: TransportCategory;
};

export type AttractionCard = {
  placeId: string;
  optional?: boolean;
  image: string;
  imageCredit: string;
  en: {
    name: string;
    description: string;
    why: string;
    history: string;
    pace: string;
    ticket: string;
  };
  it: {
    name: string;
    description: string;
    why: string;
    history: string;
    pace: string;
    ticket: string;
  };
};

export const planningText = {
  en: {
    snapshotEyebrow: "Trip snapshot",
    snapshotTitle: "Days, nights and transport at a glance",
    totalTrip: "16 calendar days / 15 nights",
    routeReality: "Route reality",
    routeRealityCopy:
      "Jaipur to Rishikesh is a nonstop flight to Dehradun plus a taxi, not a layover. Rishikesh to Udaipur is the only connected-flight caution.",
    nightsByPlace: "Nights by place",
    fullTableTitle: "Full itinerary table",
    mustSeeHeader: "Must-see focus",
    notesHeader: "Notes",
    agencyEyebrow: "Agency booking pack",
    agencyTitle: "Private rides, VIP passes and booking actions",
    agencyIntro:
      "Use this table for the travel agency. Optional items are clearly marked, and Ajanta is not part of the core booking unless the family confirms it.",
    exportCsv: "Export agency CSV",
    vipTitle: "VIP / guide requests",
    optionalLabel: "Optional",
    coreLabel: "Core",
    pickup: "Pickup",
    dropoff: "Dropoff",
    service: "Service",
    action: "Action required",
    routeEvidenceTitle: "Route evidence / flight reality",
    routeEvidenceIntro:
      "Current public route evidence is planning guidance only; airline schedules can change before Oct/Nov 2026.",
    evidence: "Evidence",
    bookingInstruction: "Booking instruction",
    whyNotReorder: "Why not reorder?",
    whyNotReorderCopy:
      "Moving Udaipur before Rishikesh changes the direction but does not remove the problem: UDR -> DED also has no nonstop service. Removing the connected flight means dropping either Rishikesh or Udaipur, which conflicts with the trip goals.",
    attractionTicket: "Tickets / guide",
    attractionOptional: "Optional add-on",
  },
  it: {
    snapshotEyebrow: "Sintesi viaggio",
    snapshotTitle: "Giorni, notti e trasporti in un colpo d'occhio",
    totalTrip: "16 giorni di calendario / 15 notti",
    routeReality: "Realta del percorso",
    routeRealityCopy:
      "Jaipur-Rishikesh e un volo senza scalo fino a Dehradun piu taxi, non uno scalo. Rishikesh-Udaipur e l'unica tratta delicata con coincidenza.",
    nightsByPlace: "Notti per luogo",
    fullTableTitle: "Tabella completa dell'itinerario",
    mustSeeHeader: "Focus da vedere",
    notesHeader: "Note",
    agencyEyebrow: "Pacchetto per agenzia",
    agencyTitle: "Auto private, pass VIP e azioni di prenotazione",
    agencyIntro:
      "Usare questa tabella per l'agenzia. Gli elementi opzionali sono marcati chiaramente e Ajanta non fa parte della prenotazione base senza conferma della famiglia.",
    exportCsv: "Esporta CSV agenzia",
    vipTitle: "Richieste VIP / guida",
    optionalLabel: "Opzionale",
    coreLabel: "Base",
    pickup: "Partenza",
    dropoff: "Arrivo",
    service: "Servizio",
    action: "Azione richiesta",
    routeEvidenceTitle: "Prove percorso / realta voli",
    routeEvidenceIntro:
      "Le prove pubbliche attuali sono solo guida di pianificazione; gli orari aerei possono cambiare prima di ottobre/novembre 2026.",
    evidence: "Prova",
    bookingInstruction: "Istruzione di prenotazione",
    whyNotReorder: "Perche non riordinare?",
    whyNotReorderCopy:
      "Mettere Udaipur prima di Rishikesh cambia la direzione ma non elimina il problema: anche UDR -> DED non ha volo senza scalo. Eliminare la coincidenza significa togliere Rishikesh o Udaipur, contro gli obiettivi del viaggio.",
    attractionTicket: "Biglietti / guida",
    attractionOptional: "Aggiunta opzionale",
  },
} satisfies Record<Language, Record<string, string>>;

export const staySummaries: StaySummary[] = [
  { city: "Mumbai", checkIn: "Oct 24", checkOut: "Oct 26", nights: 2, color: "#0f4c81" },
  { city: "Aurangabad", checkIn: "Oct 26", checkOut: "Oct 28", nights: 2, color: "#755235" },
  { city: "Delhi", checkIn: "Oct 28", checkOut: "Oct 30", nights: 2, color: "#7c2d12" },
  { city: "Agra", checkIn: "Oct 30", checkOut: "Oct 31", nights: 1, color: "#b91c1c" },
  { city: "Jaipur", checkIn: "Oct 31", checkOut: "Nov 2", nights: 2, color: "#be185d" },
  { city: "Rishikesh", checkIn: "Nov 2", checkOut: "Nov 4", nights: 2, color: "#19734f" },
  { city: "Udaipur", checkIn: "Nov 4", checkOut: "Nov 6", nights: 2, color: "#1d4ed8" },
  { city: "Mumbai", checkIn: "Nov 6", checkOut: "Nov 8", nights: 2, color: "#0f4c81" },
];

const staySummariesIt: StaySummary[] = [
  { city: "Mumbai", checkIn: "24 ott", checkOut: "26 ott", nights: 2, color: "#0f4c81" },
  { city: "Aurangabad", checkIn: "26 ott", checkOut: "28 ott", nights: 2, color: "#755235" },
  { city: "Delhi", checkIn: "28 ott", checkOut: "30 ott", nights: 2, color: "#7c2d12" },
  { city: "Agra", checkIn: "30 ott", checkOut: "31 ott", nights: 1, color: "#b91c1c" },
  { city: "Jaipur", checkIn: "31 ott", checkOut: "2 nov", nights: 2, color: "#be185d" },
  { city: "Rishikesh", checkIn: "2 nov", checkOut: "4 nov", nights: 2, color: "#19734f" },
  { city: "Udaipur", checkIn: "4 nov", checkOut: "6 nov", nights: 2, color: "#1d4ed8" },
  { city: "Mumbai", checkIn: "6 nov", checkOut: "8 nov", nights: 2, color: "#0f4c81" },
];

export const mustSeeByDate: Record<string, string> = {
  "Oct 24, 2026": "Arrival recovery, Marine Drive only if fresh",
  "Oct 25, 2026": "Gateway of India, Colaba, Kala Ghoda",
  "Oct 26, 2026": "Simple transfer, Bibi Ka Maqbara only if easy",
  "Oct 27, 2026": "Ellora Caves, Kailasa Temple",
  "Oct 28, 2026": "Flight to Delhi, India Gate drive-by",
  "Oct 29, 2026": "Humayun's Tomb, Lodhi Garden, bounded Old Delhi",
  "Oct 30, 2026": "Agra Fort, Mehtab Bagh / Taj sunset",
  "Oct 31, 2026": "Taj Mahal sunrise, Jaipur arrival",
  "Nov 1, 2026": "Amber Fort, City Palace, Hawa Mahal",
  "Nov 2, 2026": "JAI -> DED nonstop, Rishikesh Ganga Aarti",
  "Nov 3, 2026": "Ganga riverfront, Beatles Ashram, slow mountain/river day",
  "Nov 4, 2026": "Rishikesh morning, connected flight toward Udaipur",
  "Nov 5, 2026": "City Palace, Lake Pichola, Jagdish Temple",
  "Nov 6, 2026": "Direct flight UDR -> BOM",
  "Nov 7, 2026": "Protected Mumbai buffer, optional Elephanta",
  "Nov 8, 2026": "Departure buffer and airport transfer",
};

export const mustSeeByDateIt: Record<string, string> = {
  "24 ottobre 2026": "Recupero arrivo, Marine Drive solo se c'e energia",
  "25 ottobre 2026": "Gateway of India, Colaba, Kala Ghoda",
  "26 ottobre 2026": "Trasferimento semplice, Bibi Ka Maqbara solo se facile",
  "27 ottobre 2026": "Grotte di Ellora, Tempio Kailasa",
  "28 ottobre 2026": "Volo per Delhi, India Gate in auto",
  "29 ottobre 2026": "Tomba di Humayun, Lodhi Garden, Old Delhi limitata",
  "30 ottobre 2026": "Agra Fort, Mehtab Bagh / tramonto Taj",
  "31 ottobre 2026": "Taj Mahal all'alba, arrivo a Jaipur",
  "1 novembre 2026": "Amber Fort, City Palace, Hawa Mahal",
  "2 novembre 2026": "JAI -> DED senza scalo, Ganga Aarti a Rishikesh",
  "3 novembre 2026": "Ganga, Beatles Ashram, giornata lenta fiume/montagna",
  "4 novembre 2026": "Mattina a Rishikesh, volo con coincidenza verso Udaipur",
  "5 novembre 2026": "City Palace, Lake Pichola, Jagdish Temple",
  "6 novembre 2026": "Volo senza scalo UDR -> BOM",
  "7 novembre 2026": "Cuscinetto Mumbai protetto, Elephanta opzionale",
  "8 novembre 2026": "Cuscinetto partenza e trasferimento aeroporto",
};

export const transportSegments: TransportSegment[] = [
  {
    date: "Oct 24",
    from: "Mumbai airport",
    to: "Mumbai hotel",
    mode: "Airport transfer",
    category: "taxi",
    duration: "45-90m",
    status: "Book private arrival transfer",
    action: "Driver meet-and-greet, flexible for immigration delay",
  },
  {
    date: "Oct 26",
    from: "Mumbai (BOM)",
    to: "Aurangabad (IXU)",
    mode: "Nonstop flight",
    category: "flight-direct",
    duration: "About 1h05-1h10",
    status: "Nonstop evidence",
    evidence: "https://www.flightconnections.com/flights-from-bom-to-ixu",
    action: "Book nonstop only",
  },
  {
    date: "Oct 27",
    from: "Aurangabad",
    to: "Ellora Caves return",
    mode: "Private car",
    category: "car",
    duration: "About 1h each way",
    status: "Short drive",
    action: "Book car and Ellora guide",
  },
  {
    date: "Oct 28",
    from: "Aurangabad (IXU)",
    to: "Delhi (DEL)",
    mode: "Nonstop flight",
    category: "flight-direct",
    duration: "About 1h20-1h55",
    status: "Nonstop evidence",
    evidence: "https://www.flightsfrom.com/IXU-DEL",
    action: "Book nonstop only",
  },
  {
    date: "Oct 30",
    from: "Delhi hotel",
    to: "Agra hotel",
    mode: "Private car",
    category: "car",
    duration: "About 3-4h",
    status: "Moderate drive",
    action: "Book comfortable private car",
  },
  {
    date: "Oct 31",
    from: "Agra",
    to: "Jaipur",
    mode: "Private car",
    category: "car",
    duration: "About 4-5h",
    status: "Moderate drive",
    action: "Book after Taj sunrise, no evening touring",
  },
  {
    date: "Nov 2",
    from: "Jaipur (JAI)",
    to: "Dehradun (DED)",
    mode: "Nonstop flight",
    category: "flight-direct",
    duration: "About 1h20-1h25",
    status: "Nonstop flight, not a layover",
    evidence: "https://www.flightsfrom.com/JAI-DED",
    action: "Book nonstop JAI -> DED",
  },
  {
    date: "Nov 2",
    from: "Dehradun airport",
    to: "Rishikesh hotel",
    mode: "Taxi transfer",
    category: "taxi",
    duration: "45-60m",
    status: "Short road transfer",
    action: "Book driver to meet flight",
  },
  {
    date: "Nov 4",
    from: "Rishikesh hotel",
    to: "Dehradun airport",
    mode: "Taxi transfer",
    category: "taxi",
    duration: "45-60m",
    status: "Airport transfer",
    action: "Leave generous buffer before flight",
  },
  {
    date: "Nov 4",
    from: "Dehradun (DED)",
    to: "Udaipur (UDR)",
    mode: "Connected flight",
    category: "flight-connection",
    duration: "Depends on layover",
    status: "No nonstop evidence",
    evidence: "https://www.flightconnections.com/flights-from-ded-to-udr",
    action: "Book only a clean same-ticket connection",
  },
  {
    date: "Nov 5",
    from: "Udaipur",
    to: "Lake Pichola",
    mode: "Optional boat",
    category: "boat",
    duration: "Flexible",
    status: "Optional scenic ride",
    action: "Book if weather and energy are good",
  },
  {
    date: "Nov 6",
    from: "Udaipur (UDR)",
    to: "Mumbai (BOM)",
    mode: "Nonstop flight",
    category: "flight-direct",
    duration: "About 1h40-1h55",
    status: "Nonstop evidence",
    evidence: "https://www.flightsfrom.com/UDR-BOM",
    action: "Book nonstop only",
  },
  {
    date: "Nov 8",
    from: "Mumbai hotel",
    to: "Mumbai airport",
    mode: "Airport transfer",
    category: "taxi",
    duration: "45-90m",
    status: "Departure transfer",
    action: "Book with international flight timing buffer",
  },
];

export const flightEvidence: FlightEvidence[] = [
  {
    route: "BOM -> IXU",
    verdict: "Nonstop flight exists in current public schedules.",
    evidence: "https://www.flightconnections.com/flights-from-bom-to-ixu",
    instruction: "Book nonstop only for Mumbai to Aurangabad.",
    category: "flight-direct",
  },
  {
    route: "IXU -> DEL",
    verdict: "Nonstop flight exists in current public schedules.",
    evidence: "https://www.flightsfrom.com/IXU-DEL",
    instruction: "Book nonstop only for Aurangabad to Delhi.",
    category: "flight-direct",
  },
  {
    route: "JAI -> DED",
    verdict: "Nonstop flight exists; Rishikesh is reached afterward by taxi.",
    evidence: "https://www.flightsfrom.com/JAI-DED",
    instruction: "Represent this as nonstop flight plus taxi, not a layover.",
    category: "flight-direct",
  },
  {
    route: "DED -> UDR",
    verdict: "No nonstop flight in current public route evidence.",
    evidence: "https://www.flightconnections.com/flights-from-ded-to-udr",
    instruction: "Use only a clean same-ticket connection or reconsider this leg close to booking.",
    category: "flight-connection",
  },
  {
    route: "UDR -> BOM",
    verdict: "Nonstop flight exists in current public schedules.",
    evidence: "https://www.flightsfrom.com/UDR-BOM",
    instruction: "Book nonstop only to protect the Mumbai buffer.",
    category: "flight-direct",
  },
  {
    route: "JAI -> UDR / DED -> BOM comparison",
    verdict: "These nonstops exist, but UDR -> DED still has no nonstop, so reordering does not remove the Rishikesh-Udaipur problem.",
    evidence: "https://www.flightsfrom.com/JAI-UDR",
    instruction: "Keep current route unless a required stop is removed.",
    category: "optional",
  },
];

const transportSegmentsIt: TransportSegment[] = transportSegments.map((segment, index) => {
  const translations = [
    ["Trasferimento aeroporto", "Prenotare trasferimento privato arrivo", "Accoglienza autista, flessibile per ritardi immigrazione"],
    ["Volo senza scalo", "Prova volo senza scalo", "Prenotare solo volo senza scalo"],
    ["Auto privata", "Strada breve", "Prenotare auto e guida Ellora"],
    ["Volo senza scalo", "Prova volo senza scalo", "Prenotare solo volo senza scalo"],
    ["Auto privata", "Strada moderata", "Prenotare auto privata comoda"],
    ["Auto privata", "Strada moderata", "Prenotare dopo alba al Taj, senza visite serali"],
    ["Volo senza scalo", "Volo senza scalo, non scalo", "Prenotare JAI -> DED senza scalo"],
    ["Trasferimento taxi", "Breve trasferimento su strada", "Autista incontra il volo"],
    ["Trasferimento taxi", "Trasferimento aeroporto", "Lasciare ampio margine prima del volo"],
    ["Volo con coincidenza", "Nessun volo senza scalo", "Prenotare solo coincidenza pulita sullo stesso biglietto"],
    ["Barca opzionale", "Giro scenico opzionale", "Prenotare se meteo ed energia sono buoni"],
    ["Volo senza scalo", "Prova volo senza scalo", "Prenotare solo volo senza scalo"],
    ["Trasferimento aeroporto", "Trasferimento partenza", "Prenotare con margine per volo internazionale"],
  ][index];

  return {
    ...segment,
    date: ["24 ott", "26 ott", "27 ott", "28 ott", "30 ott", "31 ott", "2 nov", "2 nov", "4 nov", "4 nov", "5 nov", "6 nov", "8 nov"][index],
    mode: translations[0],
    status: translations[1],
    action: translations[2],
  };
});

const flightEvidenceIt: FlightEvidence[] = [
  {
    ...flightEvidence[0],
    verdict: "Il volo senza scalo esiste negli orari pubblici attuali.",
    instruction: "Prenotare solo senza scalo da Mumbai ad Aurangabad.",
  },
  {
    ...flightEvidence[1],
    verdict: "Il volo senza scalo esiste negli orari pubblici attuali.",
    instruction: "Prenotare solo senza scalo da Aurangabad a Delhi.",
  },
  {
    ...flightEvidence[2],
    verdict: "Il volo senza scalo esiste; Rishikesh si raggiunge dopo in taxi.",
    instruction: "Rappresentarlo come volo senza scalo piu taxi, non come scalo.",
  },
  {
    ...flightEvidence[3],
    verdict: "Nessun volo senza scalo nelle prove pubbliche attuali.",
    instruction: "Usare solo una coincidenza pulita sullo stesso biglietto o rivalutare vicino alla prenotazione.",
  },
  {
    ...flightEvidence[4],
    verdict: "Il volo senza scalo esiste negli orari pubblici attuali.",
    instruction: "Prenotare solo senza scalo per proteggere il cuscinetto a Mumbai.",
  },
  {
    ...flightEvidence[5],
    verdict: "Questi voli senza scalo esistono, ma UDR -> DED resta senza volo diretto: riordinare non elimina il problema.",
    instruction: "Tenere il percorso attuale salvo rimuovere una tappa necessaria.",
  },
];

export const agencyTasks: AgencyTask[] = [
  { date: "Oct 24", city: "Mumbai", pickup: "BOM airport", dropoff: "Mumbai hotel", service: "Arrival transfer", category: "taxi", duration: "45-90m", action: "Private meet-and-greet transfer" },
  { date: "Oct 25", city: "Mumbai", pickup: "Mumbai hotel", dropoff: "Gateway / Colaba / Kala Ghoda", service: "Private local car", category: "car", duration: "Half day", action: "Comfortable local city car" },
  { date: "Oct 27", city: "Aurangabad", pickup: "Aurangabad hotel", dropoff: "Ellora return", service: "Private car + Ellora guide", category: "vip", duration: "Full day", action: "Book guide focused on Kailasa Temple" },
  { date: "Oct 27 or buffer", city: "Aurangabad", pickup: "Aurangabad hotel", dropoff: "Ajanta return", service: "Ajanta Caves car + guide", category: "optional", duration: "Long full day, about 2.5h each way", action: "Optional only; book if family confirms", optional: true },
  { date: "Oct 29", city: "Delhi", pickup: "Delhi hotel", dropoff: "Humayun's Tomb / Old Delhi", service: "Private car + bounded Old Delhi guide", category: "vip", duration: "Full day", action: "Keep Old Delhi block short" },
  { date: "Oct 30", city: "Delhi / Agra", pickup: "Delhi hotel", dropoff: "Agra hotel", service: "Private intercity car", category: "car", duration: "3-4h", action: "Book comfortable car with luggage space" },
  { date: "Oct 31", city: "Agra", pickup: "Agra hotel", dropoff: "Taj Mahal", service: "Taj sunrise VIP/guide/tickets", category: "vip", duration: "Early morning", action: "Book sunrise guide and required tickets" },
  { date: "Oct 31", city: "Agra / Jaipur", pickup: "Agra hotel", dropoff: "Jaipur hotel", service: "Private intercity car", category: "car", duration: "4-5h", action: "Schedule after Taj breakfast" },
  { date: "Nov 1", city: "Jaipur", pickup: "Jaipur hotel", dropoff: "Amber Fort / City Palace", service: "Private car + palace/fort guide", category: "vip", duration: "Full day", action: "Book Amber Fort and City Palace support" },
  { date: "Nov 2", city: "Rishikesh", pickup: "DED airport", dropoff: "Rishikesh hotel", service: "Airport taxi transfer", category: "taxi", duration: "45-60m", action: "Driver meets nonstop JAI -> DED flight" },
  { date: "Nov 3", city: "Rishikesh", pickup: "Rishikesh hotel", dropoff: "Ganga Aarti / Beatles Ashram", service: "Local guide or reserved viewing support", category: "vip", duration: "Half day / evening", action: "Keep gentle and scenic" },
  { date: "Nov 4", city: "Rishikesh", pickup: "Rishikesh hotel", dropoff: "DED airport", service: "Airport taxi transfer", category: "taxi", duration: "45-60m", action: "Build in buffer for connected flight" },
  { date: "Nov 5", city: "Udaipur", pickup: "Udaipur hotel", dropoff: "City Palace / Lake Pichola", service: "Guide + optional boat support", category: "vip", duration: "Full day", action: "Book City Palace guide; boat if weather works" },
  { date: "Nov 8", city: "Mumbai", pickup: "Mumbai hotel", dropoff: "BOM airport", service: "Departure transfer", category: "taxi", duration: "45-90m", action: "Book with international flight buffer" },
];

const agencyTasksIt: AgencyTask[] = [
  { ...agencyTasks[0], date: "24 ott", service: "Trasferimento arrivo", action: "Trasferimento privato con accoglienza" },
  { ...agencyTasks[1], date: "25 ott", service: "Auto locale privata", duration: "Mezza giornata", action: "Auto comoda per la citta" },
  { ...agencyTasks[2], date: "27 ott", service: "Auto privata + guida Ellora", duration: "Giornata intera", action: "Prenotare guida focalizzata sul Tempio Kailasa" },
  { ...agencyTasks[3], date: "27 ott o cuscinetto", service: "Auto + guida Grotte di Ajanta", duration: "Giornata intera lunga, circa 2,5h per tratta", action: "Solo opzionale; prenotare se la famiglia conferma" },
  { ...agencyTasks[4], date: "29 ott", service: "Auto privata + guida Old Delhi limitata", duration: "Giornata intera", action: "Tenere breve il blocco Old Delhi" },
  { ...agencyTasks[5], date: "30 ott", service: "Auto privata intercity", action: "Prenotare auto comoda con spazio bagagli" },
  { ...agencyTasks[6], date: "31 ott", service: "Taj all'alba VIP/guida/biglietti", duration: "Mattina presto", action: "Prenotare guida all'alba e biglietti richiesti" },
  { ...agencyTasks[7], date: "31 ott", service: "Auto privata intercity", action: "Programmare dopo colazione post-Taj" },
  { ...agencyTasks[8], date: "1 nov", service: "Auto privata + guida forte/palazzo", duration: "Giornata intera", action: "Prenotare supporto Amber Fort e City Palace" },
  { ...agencyTasks[9], date: "2 nov", service: "Taxi aeroporto", action: "Autista incontra il volo senza scalo JAI -> DED" },
  { ...agencyTasks[10], date: "3 nov", service: "Guida locale o supporto vista Aarti", duration: "Mezza giornata / sera", action: "Tenere scenico e leggero" },
  { ...agencyTasks[11], date: "4 nov", service: "Taxi aeroporto", action: "Aggiungere margine per il volo con coincidenza" },
  { ...agencyTasks[12], date: "5 nov", service: "Guida + supporto barca opzionale", duration: "Giornata intera", action: "Prenotare guida City Palace; barca se il meteo va bene" },
  { ...agencyTasks[13], date: "8 nov", service: "Trasferimento partenza", action: "Prenotare con margine per volo internazionale" },
];

export const attractionCards: AttractionCard[] = [
  {
    placeId: "mumbai",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marine%20Drive%20Mumbai%20Bombay%20by%20Vibhabamba.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Marine Drive", description: "A long sea-facing promenade curving around Back Bay.", why: "It is the gentlest first visual of Mumbai after arrival.", history: "The Art Deco buildings nearby reflect Bombay's 20th-century coastal growth.", pace: "Easy sunset stop, paired with dinner.", ticket: "No ticket; book local car only." },
    it: { name: "Marine Drive", description: "Lungo lungomare curvo affacciato su Back Bay.", why: "E il primo impatto piu dolce con Mumbai dopo l'arrivo.", history: "Gli edifici Art Deco vicini raccontano la crescita costiera di Bombay nel Novecento.", pace: "Stop facile al tramonto, con cena.", ticket: "Nessun biglietto; prenotare solo auto locale." },
  },
  {
    placeId: "mumbai",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gateway_of_India%2C_Mumbai.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Gateway of India / Colaba", description: "Harbor monument with cafes, shops and colonial waterfront context.", why: "It is Mumbai's clearest iconic landmark and easy to combine with Colaba.", history: "Built for the 1911 royal visit of King George V and Queen Mary.", pace: "Easy to moderate; keep it short if arrival fatigue remains.", ticket: "No core ticket; local guide optional." },
    it: { name: "Gateway of India / Colaba", description: "Monumento sul porto con cafe, negozi e contesto coloniale.", why: "E il simbolo piu riconoscibile di Mumbai ed e facile da unire a Colaba.", history: "Costruito per la visita reale del 1911 di Giorgio V e Mary.", pace: "Facile o moderato; tenerlo breve se c'e stanchezza.", ticket: "Nessun biglietto base; guida locale opzionale." },
  },
  {
    placeId: "mumbai",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Keneseth_Eliyahoo_Synagogue%2C_Interior_4.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Kala Ghoda", description: "Compact arts and heritage district in South Mumbai.", why: "It gives culture, cafes and architecture without long transfers.", history: "The area sits among historic civic and commercial buildings.", pace: "Half-day only if rested.", ticket: "No fixed ticket; agency can arrange a short heritage walk." },
    it: { name: "Kala Ghoda", description: "Distretto compatto di arte e patrimonio a South Mumbai.", why: "Da cultura, cafe e architettura senza lunghi spostamenti.", history: "L'area e tra edifici civici e commerciali storici.", pace: "Mezza giornata solo se riposati.", ticket: "Nessun biglietto fisso; l'agenzia puo organizzare una breve passeggiata." },
  },
  {
    placeId: "mumbai",
    optional: true,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Elephanta_Caves_Trimurti.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Elephanta Caves", description: "Island cave temples reached by ferry from Mumbai.", why: "Good optional heritage add-on if the buffer day is not needed for rest.", history: "The main cave is known for large Shaiva rock-cut sculpture.", pace: "Optional only; skip if tired or ferry timing feels annoying.", ticket: "Optional ferry and entry; do not pre-commit." },
    it: { name: "Grotte di Elephanta", description: "Templi rupestri su un'isola raggiunta in traghetto da Mumbai.", why: "Buona aggiunta opzionale se il cuscinetto non serve per riposo.", history: "La grotta principale e famosa per grandi sculture shaivite scavate nella roccia.", pace: "Solo opzionale; saltare se stanchi o se il traghetto complica.", ticket: "Traghetto e ingresso opzionali; non pre-impegnare." },
  },
  {
    placeId: "ellora",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kailasa%20Temple%20at%20Ellora%20%28Cave%2016%29.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Kailasa Temple", description: "A monumental Hindu temple carved downward from one rock mass.", why: "This is the architectural heart of Ellora and a protected trip highlight.", history: "Associated with the Rashtrakuta period and Mount Kailash symbolism.", pace: "Start here with full energy.", ticket: "Book Ellora guide; focus the day here first." },
    it: { name: "Tempio Kailasa", description: "Tempio induista monumentale scavato dall'alto in un'unica massa rocciosa.", why: "E il cuore architettonico di Ellora e una tappa da proteggere.", history: "Legato al periodo Rashtrakuta e al simbolismo del Monte Kailash.", pace: "Iniziare qui con energia piena.", ticket: "Prenotare guida Ellora; iniziare da qui." },
  },
  {
    placeId: "ellora",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/P1060701_ellora_cave_number_10_ASI_number_N-MH-A51.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Buddhist caves", description: "Monastic halls, shrines and prayer spaces cut into rock.", why: "They show Ellora beyond the famous Kailasa Temple.", history: "They connect to western India's Buddhist monastic traditions.", pace: "Pick a few representative caves.", ticket: "Included with Ellora visit; guide should curate." },
    it: { name: "Grotte buddhiste", description: "Sale monastiche, santuari e spazi di preghiera scavati nella roccia.", why: "Mostrano Ellora oltre al famoso Tempio Kailasa.", history: "Rimandano alle tradizioni monastiche buddhiste dell'India occidentale.", pace: "Scegliere alcune grotte rappresentative.", ticket: "Incluse nella visita Ellora; la guida deve selezionare." },
  },
  {
    placeId: "ellora",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ellora_Cave_32_si0339.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Jain caves", description: "Later caves with refined carving and calmer scale.", why: "They complete Ellora's multi-faith story.", history: "They reflect later Jain patronage and devotional carving.", pace: "Add only after Kailasa and selected Buddhist caves.", ticket: "Included with Ellora visit; optional within the day." },
    it: { name: "Grotte giainiste", description: "Grotte piu tarde con incisioni raffinate e scala piu calma.", why: "Completano il racconto multi-religioso di Ellora.", history: "Riflettono mecenatismo giainista e scultura devozionale piu tarda.", pace: "Aggiungere solo dopo Kailasa e alcune grotte buddhiste.", ticket: "Incluse nella visita Ellora; opzionali nella giornata." },
  },
  {
    placeId: "ellora",
    optional: true,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/1_Ajanta_Caves_Viewpoint.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Ajanta Caves", description: "Rock-cut Buddhist caves known especially for ancient paintings.", why: "Very meaningful, but it adds a long full-day excursion from Aurangabad.", history: "The caves date from roughly the 2nd century BCE to the 5th century CE.", pace: "Keep optional; book only if the group wants a second cave day.", ticket: "Optional car + guide; about 2.5h each way from Aurangabad." },
    it: { name: "Grotte di Ajanta", description: "Grotte buddhiste scavate nella roccia, celebri per pitture antiche.", why: "Molto importanti, ma aggiungono una lunga giornata da Aurangabad.", history: "Le grotte vanno circa dal II secolo a.C. al V secolo d.C.", pace: "Restano opzionali; prenotare solo se si vuole una seconda giornata grotte.", ticket: "Auto + guida opzionali; circa 2,5h per tratta da Aurangabad." },
  },
  {
    placeId: "delhi",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Humayun%27s%20tomb%201569-70.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Humayun's Tomb", description: "A Mughal garden tomb set in a formal charbagh garden.", why: "Beautiful, calm and historically useful before the Taj Mahal.", history: "Built in the 16th century, it helped shape later Mughal tomb design.", pace: "Make it the main Delhi monument.", ticket: "Book tickets/guide if using a Delhi guide day." },
    it: { name: "Tomba di Humayun", description: "Tomba-giardino moghul in un giardino formale charbagh.", why: "Bella, calma e utile storicamente prima del Taj Mahal.", history: "Costruita nel XVI secolo, influenzo le tombe moghul successive.", pace: "Metterla come monumento principale di Delhi.", ticket: "Biglietti/guida se si usa una guida per Delhi." },
  },
  {
    placeId: "delhi",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bara_gumbad%2C_Lodhi_Garden.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Lodhi Garden", description: "Landscaped park with 15th-century tombs and local walking paths.", why: "It gives breathing room between heavier Delhi stops.", history: "The tombs belong to the Sayyid and Lodi periods.", pace: "Easy morning or late-afternoon stop.", ticket: "No major ticket; local car timing only." },
    it: { name: "Lodhi Garden", description: "Parco con tombe del XV secolo e percorsi per camminare.", why: "Da respiro tra tappe piu intense a Delhi.", history: "Le tombe appartengono ai periodi Sayyid e Lodi.", pace: "Stop facile al mattino o tardo pomeriggio.", ticket: "Nessun biglietto importante; solo tempi auto." },
  },
  {
    placeId: "delhi",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/A_market_in_Chandni_Chowk%2C_Delhi.JPG",
    imageCredit: "Wikimedia Commons",
    en: { name: "Old Delhi", description: "Dense lanes, markets, food streets and rickshaw energy.", why: "Atmospheric and memorable, but tiring if left unbounded.", history: "It grew around Shahjahanabad, Shah Jahan's 17th-century Mughal capital.", pace: "Limit to one guided block.", ticket: "Book a guide/rickshaw block; avoid open-ended wandering." },
    it: { name: "Old Delhi", description: "Vicolo densi, mercati, strade di cibo e riscio.", why: "Atmosferica e memorabile, ma stancante se non limitata.", history: "Cresce intorno a Shahjahanabad, capitale moghul del XVII secolo.", pace: "Limitare a un blocco guidato.", ticket: "Prenotare guida/risciÃ²; evitare visita senza limite." },
  },
  {
    placeId: "delhi",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/India_Gate_in_New_Delhi_03-2016.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "India Gate / New Delhi axis", description: "Ceremonial civic axis and monumental planned-city scale.", why: "Shows the contrast between Old Delhi and New Delhi.", history: "The area was planned under British rule and later became central to independent India.", pace: "Best as a drive-by or short stop.", ticket: "No ticket; include in city drive." },
    it: { name: "India Gate / asse di New Delhi", description: "Asse civico cerimoniale e scala monumentale pianificata.", why: "Mostra il contrasto tra Old Delhi e New Delhi.", history: "Area pianificata sotto i britannici e poi centrale nell'India indipendente.", pace: "Meglio come giro in auto o stop breve.", ticket: "Nessun biglietto; includere nel giro in citta." },
  },
  {
    placeId: "agra",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taj%20Mahal%2C%20Agra%2C%20India%20edit2.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Taj Mahal", description: "White marble mausoleum on the Yamuna River.", why: "The iconic visual and emotional highlight of Agra.", history: "Built by Shah Jahan in the 17th century for Mumtaz Mahal.", pace: "Go at sunrise; do not rush.", ticket: "Book sunrise guide and tickets in advance." },
    it: { name: "Taj Mahal", description: "Mausoleo in marmo bianco sul fiume Yamuna.", why: "Il simbolo visivo ed emotivo di Agra.", history: "Costruito da Shah Jahan nel XVII secolo per Mumtaz Mahal.", pace: "Andare all'alba; non correre.", ticket: "Prenotare guida alba e biglietti in anticipo." },
  },
  {
    placeId: "agra",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Agra_Fort_Rempart.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Agra Fort", description: "Large red sandstone fort-palace complex.", why: "Explains the political and military side of Mughal Agra.", history: "Developed under Akbar and later Mughal rulers.", pace: "Moderate; avoid pairing with too many extras.", ticket: "Book with Agra guide or ticket support." },
    it: { name: "Agra Fort", description: "Grande complesso fortezza-palazzo in arenaria rossa.", why: "Spiega il lato politico e militare dell'Agra moghul.", history: "Sviluppato sotto Akbar e altri sovrani moghul.", pace: "Moderato; non aggiungere troppe tappe.", ticket: "Prenotare con guida Agra o supporto biglietti." },
  },
  {
    placeId: "agra",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taj_Mahal_from_Mehtab_Bagh.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Mehtab Bagh", description: "Garden across the Yamuna from the Taj Mahal.", why: "A calmer sunset view of the Taj and river setting.", history: "Part of the Mughal riverfront landscape.", pace: "Optional easy sunset.", ticket: "Optional entry; guide can decide based on energy." },
    it: { name: "Mehtab Bagh", description: "Giardino sull'altra riva dello Yamuna rispetto al Taj.", why: "Vista piu calma del Taj e del paesaggio fluviale.", history: "Parte del paesaggio fluviale moghul.", pace: "Tramonto facile opzionale.", ticket: "Ingresso opzionale; la guida decide secondo energia." },
  },
  {
    placeId: "jaipur",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jaipur%2003-2016%2004%20Amber%20Fort.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Amber Fort", description: "Hilltop fort-palace outside the old city.", why: "Jaipur's strongest architectural stop.", history: "Amber was the older Kachwaha seat before planned Jaipur.", pace: "Go early and treat as the main event.", ticket: "Book guide and entry support." },
    it: { name: "Amber Fort", description: "Fortezza-palazzo su una collina fuori dalla citta vecchia.", why: "La tappa architettonica piu forte di Jaipur.", history: "Amber era la sede Kachwaha prima della Jaipur pianificata.", pace: "Andare presto; e l'evento principale.", ticket: "Prenotare guida e supporto ingresso." },
  },
  {
    placeId: "jaipur",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chandra_Mahal%2C_City_Palace%2C_Jaipur%2C_20191218_0951_9043.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "City Palace", description: "Palace complex at the heart of Jaipur's old city.", why: "Connects royal history to Jaipur's planned city.", history: "The palace became the ceremonial center after Jaipur's founding.", pace: "Moderate; good after Amber if energy remains.", ticket: "Book palace ticket/guide." },
    it: { name: "City Palace", description: "Complesso di palazzi nel cuore della citta vecchia.", why: "Collega storia reale e citta pianificata.", history: "Divenne centro cerimoniale dopo la fondazione di Jaipur.", pace: "Moderato; dopo Amber se resta energia.", ticket: "Prenotare biglietto/guida del palazzo." },
  },
  {
    placeId: "jaipur",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hawa_Mahal_2011.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Hawa Mahal", description: "Famous pink facade with many small windows.", why: "Quick, highly visual Jaipur moment.", history: "Built in 1799 for screened royal viewing of street life.", pace: "Short photo stop unless entering is specifically wanted.", ticket: "Usually no need to pre-book unless entering." },
    it: { name: "Hawa Mahal", description: "Celebre facciata rosa con molte piccole finestre.", why: "Momento visivo rapido e molto riconoscibile.", history: "Costruito nel 1799 per osservare la strada restando schermati.", pace: "Breve stop fotografico, salvo interesse a entrare.", ticket: "Di solito non serve prenotare salvo ingresso." },
  },
  {
    placeId: "jaipur",
    optional: true,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jantar_Mantar_at_Jaipur.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Jantar Mantar", description: "Outdoor astronomical observatory with monumental instruments.", why: "Shows Jaipur's scientific side beyond palaces.", history: "Built by Sawai Jai Singh II for astronomy and measurement.", pace: "Optional; best with guide.", ticket: "Optional ticket; add only if the group is curious." },
    it: { name: "Jantar Mantar", description: "Osservatorio astronomico all'aperto con strumenti monumentali.", why: "Mostra il lato scientifico di Jaipur oltre ai palazzi.", history: "Costruito da Sawai Jai Singh II per astronomia e misurazione.", pace: "Opzionale; meglio con guida.", ticket: "Biglietto opzionale; aggiungere solo se interessa." },
  },
  {
    placeId: "rishikesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/The_Ganga_at_Rishikesh.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Ganga riverfront", description: "Ghats, river banks, bridges and walking areas along the Ganga.", why: "The emotional center of the mountain/river stop.", history: "Rishikesh is where pilgrimage, river ritual and Himalayan geography meet.", pace: "Easy; build slow time around the river.", ticket: "No ticket; book gentle local transport only." },
    it: { name: "Lungofiume del Ganga", description: "Ghat, rive, ponti e passeggiate lungo il Ganga.", why: "Il centro emotivo della tappa fiume/montagna.", history: "A Rishikesh pellegrinaggio, rituale fluviale e geografia himalayana si incontrano.", pace: "Facile; costruire tempo lento sul fiume.", ticket: "Nessun biglietto; prenotare solo trasporti locali leggeri." },
  },
  {
    placeId: "rishikesh",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ganga_Aarti_Rishikesh.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Ganga Aarti", description: "Evening river ritual with lamps, chanting and offerings.", why: "Gives Rishikesh atmosphere without a long excursion.", history: "Aarti is a devotional ritual of light tied here directly to the river.", pace: "Arrive early and keep dinner simple.", ticket: "Ask agency for calm viewing support if possible." },
    it: { name: "Ganga Aarti", description: "Rituale serale sul fiume con lampade, canti e offerte.", why: "Da atmosfera a Rishikesh senza una lunga escursione.", history: "L'aarti e un rituale di luce qui legato direttamente al fiume.", pace: "Arrivare presto e cena semplice dopo.", ticket: "Chiedere all'agenzia supporto per vedere con calma se possibile." },
  },
  {
    placeId: "rishikesh",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beatles_Ashram_At_Rishikesh.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Beatles Ashram", description: "Former ashram site made famous by the Beatles' 1968 stay.", why: "Adds cultural texture beyond river views.", history: "Part of Rishikesh's global yoga and meditation story.", pace: "Optional half-day if the group wants more than pure rest.", ticket: "Check current entry/guide options." },
    it: { name: "Beatles Ashram", description: "Ex ashram famoso per il soggiorno dei Beatles nel 1968.", why: "Aggiunge cultura oltre alle viste sul fiume.", history: "Parte della storia globale di yoga e meditazione di Rishikesh.", pace: "Mezza giornata opzionale se si vuole altro oltre al riposo.", ticket: "Verificare ingresso/guida attuali." },
  },
  {
    placeId: "rishikesh",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshman_Jhula_Rishikesh.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Lakshman Jhula / river bridges", description: "Suspension bridge area over the Ganga with temples and hill views.", why: "The classic Rishikesh visual of river, bridge and foothills.", history: "Associated with pilgrimage routes and Ramayana-linked local legend.", pace: "Scenic walk, not a rushed transfer stop.", ticket: "No fixed ticket; local guide optional." },
    it: { name: "Lakshman Jhula / ponti sul fiume", description: "Area dei ponti sospesi sul Ganga con templi e viste sulle colline.", why: "L'immagine classica di Rishikesh: fiume, ponte e colline.", history: "Legata a percorsi di pellegrinaggio e leggende del Ramayana.", pace: "Passeggiata panoramica, non stop di fretta.", ticket: "Nessun biglietto fisso; guida locale opzionale." },
  },
  {
    placeId: "udaipur",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20view%20of%20City%20Palace%20%28Udaipur%29%2C%20Rajasthan%2C%20India%20-2.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "City Palace", description: "Large palace complex rising above Lake Pichola.", why: "The architectural and historical anchor of Udaipur.", history: "Expanded by generations of Mewar rulers.", pace: "Moderate; avoid rushing the museum route.", ticket: "Book City Palace guide/ticket support." },
    it: { name: "City Palace", description: "Grande complesso di palazzi sopra Lake Pichola.", why: "L'ancora architettonica e storica di Udaipur.", history: "Espanso da generazioni di sovrani Mewar.", pace: "Moderato; non correre nel museo.", ticket: "Prenotare guida/biglietti City Palace." },
  },
  {
    placeId: "udaipur",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lake_Pichola%2C_Udaipur.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Lake Pichola", description: "The central lake that shapes Udaipur's famous views.", why: "It gives Udaipur its calm and beauty.", history: "The lake predates the formal city and was expanded as Udaipur grew.", pace: "Easy boat ride or lakeside dinner.", ticket: "Optional boat; book with weather flexibility." },
    it: { name: "Lake Pichola", description: "Il lago centrale che definisce le viste famose di Udaipur.", why: "Da calma e bellezza a Udaipur.", history: "Il lago precede la citta formale e fu ampliato con la crescita di Udaipur.", pace: "Giro in barca o cena sul lago, facile.", ticket: "Barca opzionale; prenotare con flessibilita meteo." },
  },
  {
    placeId: "udaipur",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jagdish_Temple_Udaipur.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Jagdish Temple / old city lanes", description: "Central temple and surrounding old-city streets near the palace.", why: "Adds human scale after the grand palace and lake.", history: "Jagdish Temple dates to the 17th century and is dedicated to Vishnu.", pace: "Short to moderate walk.", ticket: "No complex booking; local guide optional." },
    it: { name: "Jagdish Temple / vicoli vecchi", description: "Tempio centrale e strade della citta vecchia vicino al palazzo.", why: "Da scala umana dopo palazzo e lago.", history: "Jagdish Temple risale al XVII secolo ed e dedicato a Vishnu.", pace: "Passeggiata breve o moderata.", ticket: "Nessuna prenotazione complessa; guida locale opzionale." },
  },
];

export function getAttractions(placeId: string, language: Language) {
  return attractionCards
    .filter((attraction) => attraction.placeId === placeId)
    .map((attraction) => ({
      ...attraction,
      ...attraction[language],
    }));
}

export function getTransportSegments(language: Language) {
  return language === "it" ? transportSegmentsIt : transportSegments;
}

export function getFlightEvidence(language: Language) {
  return language === "it" ? flightEvidenceIt : flightEvidence;
}

export function getAgencyTasks(language: Language) {
  return language === "it" ? agencyTasksIt : agencyTasks;
}

export function getStaySummaries(language: Language) {
  return language === "it" ? staySummariesIt : staySummaries;
}
