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
    nightsByPlace: "Nights by place",
    fullTableTitle: "Full itinerary table",
    mustSeeHeader: "Must-see focus",
    notesHeader: "Notes",
    agencyEyebrow: "Agency booking pack",
    agencyTitle: "Private rides, VIP passes and booking actions",
    agencyIntro:
      "Use this table for the travel agency. Optional items are clearly marked, and Ajanta is not part of the core booking unless the family confirms it.",
    exportCsv: "Export agency CSV",
    optionalLabel: "Optional",
    coreLabel: "Core",
    pickup: "Pickup",
    dropoff: "Dropoff",
    service: "Service",
    action: "Action required",
    attractionTicket: "Tickets / guide",
    attractionOptional: "Optional add-on",
  },
  it: {
    snapshotEyebrow: "Sintesi viaggio",
    snapshotTitle: "Giorni, notti e trasporti in un colpo d'occhio",
    totalTrip: "16 giorni di calendario / 15 notti",
    nightsByPlace: "Notti per luogo",
    fullTableTitle: "Tabella completa dell'itinerario",
    mustSeeHeader: "Focus da vedere",
    notesHeader: "Note",
    agencyEyebrow: "Pacchetto per agenzia",
    agencyTitle: "Auto private, pass VIP e azioni di prenotazione",
    agencyIntro:
      "Usare questa tabella per l'agenzia. Gli elementi opzionali sono marcati chiaramente e Ajanta non fa parte della prenotazione base senza conferma della famiglia.",
    exportCsv: "Esporta CSV agenzia",
    optionalLabel: "Opzionale",
    coreLabel: "Base",
    pickup: "Partenza",
    dropoff: "Arrivo",
    service: "Servizio",
    action: "Azione richiesta",
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
    image: "./images/marine-drive.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Marine Drive", description: "A long sea-facing promenade curving around Back Bay, best used as a calm arrival or buffer-day walk rather than a formal tour stop.", why: "It is the gentlest first visual of Mumbai after arrival: sea air, skyline, Art Deco buildings and an easy sunset rhythm.", history: "The Art Deco apartment blocks nearby reflect Bombay's 20th-century coastal growth and are part of the city's UNESCO-listed Victorian Gothic and Art Deco urban fabric.", pace: "Easy sunset stop, paired with dinner. Keep it flexible if jet lag is strong.", ticket: "No ticket; book local car only." },
    it: { name: "Marine Drive", description: "Lungo lungomare curvo affacciato su Back Bay, ideale come passeggiata calma all'arrivo o nel giorno cuscinetto.", why: "E il primo impatto piu dolce con Mumbai: mare, skyline, palazzi Art Deco e ritmo serale semplice.", history: "Gli edifici Art Deco vicini raccontano la crescita costiera di Bombay nel Novecento e fanno parte del tessuto urbano UNESCO della citta.", pace: "Stop facile al tramonto, con cena. Tenerlo flessibile se il jet lag e forte.", ticket: "Nessun biglietto; prenotare solo auto locale." },
  },
  {
    placeId: "mumbai",
    image: "./images/gateway-india.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Gateway of India / Colaba", description: "Harbor monument beside the Taj Mahal Palace Hotel, with Colaba's cafes, shops and waterfront streets nearby.", why: "It is Mumbai's clearest iconic landmark and easy to combine with a relaxed Colaba walk without overloading the day.", history: "Built for the 1911 royal visit of King George V and Queen Mary, the arch later became a symbolic waterfront marker of colonial Bombay.", pace: "Easy to moderate; keep it short if arrival fatigue remains.", ticket: "No core ticket; local guide optional." },
    it: { name: "Gateway of India / Colaba", description: "Monumento sul porto accanto al Taj Mahal Palace Hotel, con cafe, negozi e strade di Colaba vicini.", why: "E il simbolo piu riconoscibile di Mumbai ed e facile da unire a una passeggiata rilassata a Colaba.", history: "Costruito per la visita reale del 1911 di Giorgio V e Mary, divenne un segno simbolico della Bombay coloniale.", pace: "Facile o moderato; tenerlo breve se c'e stanchezza.", ticket: "Nessun biglietto base; guida locale opzionale." },
  },
  {
    placeId: "mumbai",
    image: "./images/kala-ghoda.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Kala Ghoda", description: "Compact arts and heritage district in South Mumbai.", why: "It gives culture, cafes and architecture without long transfers.", history: "The area sits among historic civic and commercial buildings.", pace: "Half-day only if rested.", ticket: "No fixed ticket; agency can arrange a short heritage walk." },
    it: { name: "Kala Ghoda", description: "Distretto compatto di arte e patrimonio a South Mumbai.", why: "Da cultura, cafe e architettura senza lunghi spostamenti.", history: "L'area e tra edifici civici e commerciali storici.", pace: "Mezza giornata solo se riposati.", ticket: "Nessun biglietto fisso; l'agenzia puo organizzare una breve passeggiata." },
  },
  {
    placeId: "mumbai",
    optional: true,
    image: "./images/crawford-market.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Crawford Market / local shopping", description: "A historic market area useful for a short color-and-shopping stop if the group wants textiles, snacks or local atmosphere.", why: "It adds lived-in Mumbai texture beyond monuments, and it is easier to scale down than a long museum or island excursion.", history: "Crawford Market dates to the British colonial period and sits within Mumbai's older commercial fabric.", pace: "Optional and bounded: 45-75 minutes is enough.", ticket: "No ticket; use a local car and keep valuables simple." },
    it: { name: "Crawford Market / shopping locale", description: "Area di mercato storica utile per colore, piccoli acquisti, snack e atmosfera locale.", why: "Aggiunge vita quotidiana di Mumbai oltre ai monumenti ed e facile da limitare.", history: "Crawford Market risale al periodo coloniale britannico ed e parte del tessuto commerciale storico.", pace: "Opzionale e limitato: 45-75 minuti bastano.", ticket: "Nessun biglietto; usare auto locale e restare pratici." },
  },
  {
    placeId: "mumbai",
    optional: true,
    image: "./images/elephanta-caves.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Elephanta Caves", description: "Island cave temples reached by ferry from Mumbai.", why: "Good optional heritage add-on if the buffer day is not needed for rest.", history: "The main cave is known for large Shaiva rock-cut sculpture.", pace: "Optional only; skip if tired or ferry timing feels annoying.", ticket: "Optional ferry and entry; do not pre-commit." },
    it: { name: "Grotte di Elephanta", description: "Templi rupestri su un'isola raggiunta in traghetto da Mumbai.", why: "Buona aggiunta opzionale se il cuscinetto non serve per riposo.", history: "La grotta principale e famosa per grandi sculture shaivite scavate nella roccia.", pace: "Solo opzionale; saltare se stanchi o se il traghetto complica.", ticket: "Traghetto e ingresso opzionali; non pre-impegnare." },
  },
  {
    placeId: "ellora",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kailasa%20Temple%20at%20Ellora%20%28Cave%2016%29.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Kailasa Temple", description: "A monumental Hindu temple carved downward from one rock mass, with courtyards, towers, elephant sculptures and panels all excavated from the same stone.", why: "This is the architectural heart of Ellora and a protected trip highlight; it feels more like a mountain carved into a temple than a building assembled from parts.", history: "Associated with the Rashtrakuta period and Mount Kailash symbolism, it is one of the great achievements of Indian rock-cut architecture.", pace: "Start here with full energy and let the guide slow the visit down.", ticket: "Book Ellora guide; focus the day here first." },
    it: { name: "Tempio Kailasa", description: "Tempio induista monumentale scavato dall'alto in un'unica massa rocciosa, con cortili, torri, elefanti e pannelli ricavati dalla stessa pietra.", why: "E il cuore architettonico di Ellora e una tappa da proteggere; sembra una montagna trasformata in tempio.", history: "Legato al periodo Rashtrakuta e al simbolismo del Monte Kailash, e una delle grandi opere dell'architettura rupestre indiana.", pace: "Iniziare qui con energia piena e lasciare che la guida rallenti la visita.", ticket: "Prenotare guida Ellora; iniziare da qui." },
  },
  {
    placeId: "ellora",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/P1060701_ellora_cave_number_10_ASI_number_N-MH-A51.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Buddhist caves", description: "Monastic halls, shrines, cells and prayer spaces cut into rock, quieter and more contemplative than the main Hindu caves.", why: "They show Ellora beyond the famous Kailasa Temple and help explain why the complex matters as a multi-faith landscape.", history: "They connect to western India's Buddhist monastic traditions, when caves served both practical living and sacred functions.", pace: "Pick a few representative caves instead of trying to see every chamber.", ticket: "Included with Ellora visit; guide should curate." },
    it: { name: "Grotte buddhiste", description: "Sale monastiche, santuari, celle e spazi di preghiera scavati nella roccia, piu silenziosi rispetto alle grotte induiste principali.", why: "Mostrano Ellora oltre al famoso Tempio Kailasa e spiegano il valore multi-religioso del complesso.", history: "Rimandano alle tradizioni monastiche buddhiste dell'India occidentale, dove le grotte erano spazi pratici e sacri.", pace: "Scegliere alcune grotte rappresentative, non tutte.", ticket: "Incluse nella visita Ellora; la guida deve selezionare." },
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
    optional: true,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Qutb_Minar_2011.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Qutub Minar complex", description: "A tall minaret and early Indo-Islamic monument complex in South Delhi, visually very different from Mughal garden tombs.", why: "It is one of Delhi's most important historic sites and is worth considering if the group wants one more strong monument.", history: "The complex began in the Delhi Sultanate period and shows layers of early Islamic architecture in North India.", pace: "Optional; add only if it does not crowd Humayun's Tomb and Old Delhi.", ticket: "Ticketed site; guide useful for context." },
    it: { name: "Complesso Qutub Minar", description: "Alto minareto e complesso indo-islamico antico a South Delhi, molto diverso dalle tombe-giardino moghul.", why: "E uno dei siti storici piu importanti di Delhi e vale se si vuole un altro monumento forte.", history: "Il complesso nasce nel periodo del Sultanato di Delhi e mostra strati dell'architettura islamica antica nel Nord India.", pace: "Opzionale; aggiungere solo se non appesantisce Tomba di Humayun e Old Delhi.", ticket: "Sito con biglietto; guida utile." },
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
    it: { name: "Old Delhi", description: "Vicolo densi, mercati, strade di cibo e riscio.", why: "Atmosferica e memorabile, ma stancante se non limitata.", history: "Cresce intorno a Shahjahanabad, capitale moghul del XVII secolo.", pace: "Limitare a un blocco guidato.", ticket: "Prenotare guida/risciò; evitare visita senza limite." },
  },
  {
    placeId: "delhi",
    optional: true,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jama_Masjid_2011.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Jama Masjid exterior / Chandni Chowk block", description: "A focused Old Delhi block around the great mosque, market lanes and rickshaw movement.", why: "It gives the strongest sense of Old Delhi without needing to wander for hours.", history: "Jama Masjid was built under Shah Jahan and anchors the old Mughal city of Shahjahanabad.", pace: "Optional inside visit; exterior plus market block may be enough.", ticket: "Use a guide; confirm dress and camera rules if entering." },
    it: { name: "Esterno Jama Masjid / blocco Chandni Chowk", description: "Blocco mirato di Old Delhi intorno alla grande moschea, ai mercati e ai riscio.", why: "Da il senso piu forte di Old Delhi senza girare per ore.", history: "Jama Masjid fu costruita sotto Shah Jahan e ancora la citta moghul di Shahjahanabad.", pace: "Ingresso opzionale; esterno e mercato possono bastare.", ticket: "Usare guida; verificare regole abbigliamento e foto se si entra." },
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
    placeId: "jaipur",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Johari_Bazaar%2C_Jaipur.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Johari / Bapu Bazaar", description: "Old-city shopping streets for jewelry, textiles, block prints, scarves and small gifts.", why: "Markets are part of Jaipur's visual identity, not just shopping; they add color and craft after the palace stops.", history: "Jaipur was planned with organized bazaars, and craft trade remains central to the old city's character.", pace: "Keep bounded; one curated shopping block is enough.", ticket: "Ask agency/guide for a reputable, no-pressure shopping route." },
    it: { name: "Johari / Bapu Bazaar", description: "Strade commerciali della citta vecchia per gioielli, tessuti, stampe, sciarpe e piccoli regali.", why: "I mercati sono parte dell'identita visiva di Jaipur, non solo shopping; aggiungono colore e artigianato.", history: "Jaipur fu pianificata con bazar organizzati e il commercio artigianale resta centrale.", pace: "Tenere limitato; un blocco curato basta.", ticket: "Chiedere all'agenzia/guida un percorso serio e senza pressione." },
  },
  {
    placeId: "jaipur",
    optional: true,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Galtaji%20temple%20jaipur.png",
    imageCredit: "Wikimedia Commons",
    en: { name: "Galta Ji temple", description: "A temple complex set in the hills outside Jaipur, with tanks, pavilions and a different landscape feeling from the old city.", why: "It can add a temple-and-hill layer if everyone still has energy after Amber and City Palace.", history: "The complex is associated with Vaishnavite pilgrimage and historic water tanks in the Aravalli hills.", pace: "Optional; skip if the Jaipur day is already full.", ticket: "Ask guide about timing, crowds and road conditions." },
    it: { name: "Tempio Galta Ji", description: "Complesso templare nelle colline fuori Jaipur, con vasche, padiglioni e atmosfera diversa dalla citta vecchia.", why: "Aggiunge templi e colline se resta energia dopo Amber e City Palace.", history: "Il complesso e legato al pellegrinaggio vaishnavita e alle vasche storiche degli Aravalli.", pace: "Opzionale; saltare se Jaipur e gia piena.", ticket: "Chiedere alla guida tempi, folla e condizioni strada." },
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
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Morning%20Yoga%20class%20at%20Parmarth%20Niketan%2C%20Muni%20Ki%20Reti%2C%20Rishikesh.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Yoga / ashram time", description: "A gentle yoga, meditation, spa or ashram visit block that makes Rishikesh feel restorative rather than just scenic.", why: "This is exactly why Rishikesh belongs in the route: foothills, Ganga, quiet practice and recovery between heavier cities.", history: "Rishikesh is internationally associated with yoga and ashram culture, layered on top of older pilgrimage traditions.", pace: "Core activity, but keep it low-pressure. Choose one calm morning session or spa block.", ticket: "Ask hotel/agency for a reputable beginner-friendly private or small-group option." },
    it: { name: "Yoga / tempo in ashram", description: "Blocco leggero di yoga, meditazione, spa o visita in ashram per rendere Rishikesh rigenerante, non solo panoramica.", why: "E il motivo per cui Rishikesh sta bene nel percorso: colline, Ganga, pratica tranquilla e recupero tra citta piu intense.", history: "Rishikesh e associata globalmente a yoga e ashram, sopra tradizioni di pellegrinaggio piu antiche.", pace: "Attivita base ma senza pressione. Scegliere una sessione calma al mattino o spa.", ticket: "Chiedere a hotel/agenzia un'opzione seria e adatta a principianti." },
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
  {
    placeId: "udaipur",
    optional: true,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Saheliyon_ki_Bari_Udaipur.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Saheliyon ki Bari", description: "A garden with fountains, pavilions and a calmer royal leisure atmosphere away from the densest old-city streets.", why: "Good optional soft stop if the group wants something pretty without another heavy monument.", history: "The garden is associated with the royal women of Mewar and courtly leisure culture.", pace: "Optional easy add-on; skip if lake time feels better.", ticket: "Low-complexity ticket; guide optional." },
    it: { name: "Saheliyon ki Bari", description: "Giardino con fontane e padiglioni, piu calmo rispetto ai vicoli della citta vecchia.", why: "Buona aggiunta leggera se si vuole qualcosa di bello senza un altro monumento intenso.", history: "Il giardino e associato alle donne reali del Mewar e alla cultura di corte.", pace: "Opzionale facile; saltare se si preferisce tempo sul lago.", ticket: "Biglietto semplice; guida opzionale." },
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

export function getAgencyTasks(language: Language) {
  return language === "it" ? agencyTasksIt : agencyTasks;
}

export function getStaySummaries(language: Language) {
  return language === "it" ? staySummariesIt : staySummaries;
}
