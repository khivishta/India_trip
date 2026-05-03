import { hotels, itinerary, places, routeLegs, tripStats, type HotelStay, type ItineraryDay, type Place, type RouteLeg } from "./trip";
import { type Language, placeDetails } from "./placeDetails";
import { polishItalianText } from "./planning";

type LocalizedTripStats = typeof tripStats;
export type LocalizedItineraryDay = Omit<ItineraryDay, "pace"> & { pace: string };
type LocalizedRouteLeg = RouteLeg;

function polishItalianRecord<T extends Record<string, unknown>>(record: T): T {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => [key, typeof value === "string" ? polishItalianText(value) : value]),
  ) as T;
}

const statsIt: LocalizedTripStats = {
  ...tripStats,
  dates: "24 ottobre-8 novembre 2026",
  nights: "15 notti",
  route: "Mumbai -> Ellora -> Delhi -> Agra -> Jaipur -> Rishikesh -> Udaipur -> Mumbai",
  buffer: "7 novembre a Mumbai",
};

const itineraryIt: LocalizedItineraryDay[] = [
  {
    ...itinerary[0],
    date: "24 ottobre 2026",
    day: "Sabato",
    plan: "Arrivo a Mumbai. Giornata morbida: check-in in hotel e breve tramonto a Marine Drive se c'e energia.",
    transport: "Volo internazionale + trasferimento in hotel",
    travelTime: "Trasferimento aeroporto 45-90 min, secondo il traffico",
    connection: "Nessuna",
    pace: "Facile",
    notes: "Proteggere il recupero. Non programmare visite importanti dopo l'arrivo.",
  },
  {
    ...itinerary[1],
    date: "25 ottobre 2026",
    day: "Domenica",
    plan: "Giornata facile a Mumbai: Gateway of India, Colaba, Kala Ghoda, opzionale Juhu o spa.",
    transport: "Auto privata / brevi passeggiate",
    travelTime: "Spostamenti locali 15-45 min ciascuno",
    connection: "Nessuna",
    pace: "Facile",
    notes: "Tenere questa giornata leggera prima del primo volo domestico.",
  },
  {
    ...itinerary[2],
    date: "26 ottobre 2026",
    day: "Lunedi",
    baseCity: "Mumbai -> Aurangabad",
    plan: "Volo per Aurangabad. Serata leggera: Bibi Ka Maqbara o cena presto.",
    transport: "Volo senza scalo BOM -> IXU",
    travelTime: "Volo circa 1h10 + tempo in aeroporto",
    connection: "Nessuna se prenotato senza scalo",
    pace: "Giorno di viaggio",
    notes: "Usarlo come semplice giorno di trasferimento; non inserire Ellora il giorno dell'arrivo.",
  },
  {
    ...itinerary[3],
    date: "27 ottobre 2026",
    day: "Martedi",
    baseCity: "Aurangabad / Ellora",
    plan: "Grotte di Ellora con focus sul tempio Kailasa; Daulatabad Fort solo se resta energia.",
    transport: "Auto privata",
    travelTime: "Aurangabad -> Ellora circa 1h per tratta",
    connection: "Nessuna",
    pace: "Moderato",
    notes: "Partire presto, tenere il pomeriggio flessibile e non aggiungere Ajanta in questa versione rilassata.",
  },
  {
    ...itinerary[4],
    date: "28 ottobre 2026",
    day: "Mercoledi",
    baseCity: "Aurangabad -> Delhi",
    plan: "Volo per Delhi. Solo serata leggera: giro in auto verso India Gate o cena tranquilla.",
    transport: "Volo senza scalo IXU -> DEL",
    travelTime: "Volo senza scalo circa 1h20-1h55 + tempo in aeroporto",
    connection: "Nessuna se prenotato senza scalo",
    pace: "Giorno di viaggio",
    notes: "Scegliere un volo a meta giornata o pomeriggio e lasciare le visite di Delhi al giorno dopo.",
  },
  {
    ...itinerary[5],
    date: "29 ottobre 2026",
    day: "Giovedi",
    plan: "Giornata culturale a Delhi: Tomba di Humayun, Lodhi Garden, punti scelti di Old Delhi, India Gate.",
    transport: "Auto privata / riscio per Old Delhi",
    travelTime: "Spostamenti locali 20-45 min ciascuno",
    connection: "Nessuna",
    pace: "Moderato",
    notes: "Dare priorita alla Tomba di Humayun e a un solo blocco di Old Delhi; saltare l'interno del Red Fort se si e stanchi.",
  },
  {
    ...itinerary[6],
    date: "30 ottobre 2026",
    day: "Venerdi",
    baseCity: "Delhi -> Agra",
    plan: "Auto privata per Agra. Visita Agra Fort e Mehtab Bagh / punto vista tramonto sul Taj.",
    transport: "Auto privata",
    travelTime: "Strada circa 3-4h",
    connection: "Nessuna",
    pace: "Giorno di viaggio",
    notes: "Dormire ad Agra evita una giornata punitiva di andata e ritorno dal Taj da Delhi.",
  },
  {
    ...itinerary[7],
    date: "31 ottobre 2026",
    day: "Sabato",
    baseCity: "Agra -> Jaipur",
    plan: "Taj Mahal all'alba, colazione, poi auto privata per Jaipur. Cena facile all'arrivo.",
    transport: "Auto privata",
    travelTime: "Strada circa 4-5h dopo la visita al Taj",
    connection: "Nessuna",
    pace: "Giorno di viaggio",
    notes: "Giornata intensa ma valida; lasciare la sera a Jaipur senza programmi.",
  },
  {
    ...itinerary[8],
    date: "1 novembre 2026",
    day: "Domenica",
    plan: "Amber Fort, City Palace, stop fotografico a Hawa Mahal, shopping rilassato opzionale.",
    transport: "Auto privata",
    travelTime: "Spostamenti locali 15-45 min ciascuno",
    connection: "Nessuna",
    pace: "Moderato",
    notes: "Iniziare da Amber Fort; tenere lo shopping opzionale per non allungare troppo la giornata.",
  },
  {
    ...itinerary[9],
    date: "2 novembre 2026",
    day: "Lunedi",
    baseCity: "Jaipur -> Rishikesh",
    plan: "Volo Jaipur-Dehradun, breve taxi per Rishikesh, Ganga Aarti la sera.",
    transport: "Volo senza scalo JAI -> DED + taxi",
    travelTime: "Volo circa 1h25; taxi 45-60 min",
    connection: "Nessuna se prenotato senza scalo",
    pace: "Giorno di viaggio",
    notes: "Questa e la tappa montagna/fiume necessaria. Tenerla semplice e non aggiungere una lunga strada verso una hill station.",
  },
  {
    ...itinerary[10],
    date: "3 novembre 2026",
    day: "Martedi",
    plan: "Giornata rilassata a Rishikesh: passeggiata sul fiume, Beatles Ashram o spa/yoga, Ganga Aarti la sera.",
    transport: "Auto privata / brevi passeggiate",
    travelTime: "Spostamenti locali 10-30 min",
    connection: "Nessuna",
    pace: "Facile",
    notes: "Questa giornata in piu rende la tappa di montagna rigenerante invece che frettolosa.",
  },
  {
    ...itinerary[11],
    date: "4 novembre 2026",
    day: "Mercoledi",
    baseCity: "Rishikesh -> Udaipur",
    plan: "Mattina lenta a Rishikesh sul fiume, poi volo verso Udaipur per una serata nella citta del lago.",
    transport: "Taxi per DED + volo con coincidenza sullo stesso biglietto",
    travelTime: "Taxi 45-60 min; durata del volo secondo la coincidenza",
    connection: "Attenzione: nessun volo senza scalo DED -> UDR; serve una coincidenza pulita",
    pace: "Giorno di viaggio",
    notes: "Resta l'unico giorno con coincidenza, ma l'allungamento del viaggio lo rende meno pesante.",
  },
  {
    ...itinerary[12],
    date: "5 novembre 2026",
    day: "Giovedi",
    plan: "Giornata lago e palazzi a Udaipur: City Palace, Lake Pichola, Jagdish Temple, giro in barca opzionale.",
    transport: "Auto privata / brevi passeggiate / barca",
    travelTime: "Spostamenti locali 10-30 min; barca opzionale",
    connection: "Nessuna",
    pace: "Moderato",
    notes: "Questa e la giornata scenica della citta del lago, con tempo per godersi bene l'atmosfera.",
  },
  {
    ...itinerary[13],
    date: "6 novembre 2026",
    day: "Venerdi",
    baseCity: "Udaipur -> Mumbai",
    plan: "Mattina facile a Udaipur, poi volo senza scalo per Mumbai per il cuscinetto finale di due notti.",
    transport: "Volo senza scalo UDR -> BOM",
    travelTime: "Volo circa 1h40-1h45 + tempo in aeroporto",
    connection: "Nessuna se prenotato senza scalo",
    pace: "Giorno di viaggio",
    notes: "Il volo senza scalo tiene pulita la fine del viaggio e protegge il cuscinetto del 7 novembre.",
  },
  {
    ...itinerary[14],
    date: "7 novembre 2026",
    day: "Sabato",
    plan: "Giorno cuscinetto protetto: riposo, spa, bucato, shopping o Elephanta solo se tutti sono freschi.",
    transport: "Auto privata / traghetto opzionale",
    travelTime: "Spostamenti locali 15-60 min; traghetto se si va a Elephanta",
    connection: "Nessuna",
    pace: "Cuscinetto",
    notes: "Non pre-impegnare questa giornata. Assorbe stanchezza, ritardi o meteo.",
  },
  {
    ...itinerary[15],
    date: "8 novembre 2026",
    day: "Domenica",
    baseCity: "Partenza da Mumbai",
    sleepIn: "Partenza",
    plan: "Riposo finale, checkout dall'hotel, trasferimento in aeroporto, partenza internazionale.",
    transport: "Trasferimento in aeroporto + volo internazionale",
    travelTime: "Trasferimento aeroporto 45-90 min, secondo il traffico",
    connection: "Nessuna",
    pace: "Facile",
    notes: "Tenere la giornata libera per bagagli e tempi aeroportuali.",
  },
];

const routeLegsIt: LocalizedRouteLeg[] = [
  {
    ...routeLegs[0],
    date: "26 ott",
    transfer: "Mumbai (BOM) -> Aurangabad (IXU)",
    mode: "Volo senza scalo",
    duration: "Circa 1h10 + tempo in aeroporto",
    connection: "Senza scalo indicato negli orari attuali",
    comfort: "Easy",
    status: "Senza scalo",
    notes: "Usare solo il volo senza scalo.",
  },
  {
    ...routeLegs[1],
    date: "27 ott",
    transfer: "Aurangabad -> Ellora -> Aurangabad",
    mode: "Auto privata",
    duration: "Circa 1h per tratta",
    connection: "Nessuna coincidenza",
    comfort: "Moderate",
    status: "Strada breve",
    notes: "Fare Ellora come giornata principale; Ajanta resta opzionale solo se si accetta una giornata piu lunga.",
  },
  {
    ...routeLegs[2],
    date: "28 ott",
    transfer: "Aurangabad (IXU) -> Delhi (DEL)",
    mode: "Volo senza scalo",
    duration: "Circa 1h20-1h55 + tempo in aeroporto",
    connection: "Volo senza scalo disponibile; orari secondo compagnia e data",
    comfort: "Easy",
    status: "Senza scalo",
    notes: "Tenere leggera la serata a Delhi.",
  },
  {
    ...routeLegs[3],
    date: "30 ott",
    transfer: "Delhi -> Agra",
    mode: "Auto privata",
    duration: "Circa 3-4h",
    connection: "Nessuna coincidenza",
    comfort: "Moderate",
    status: "Strada moderata",
    notes: "Dormire ad Agra invece di fare andata e ritorno in giornata.",
  },
  {
    ...routeLegs[4],
    date: "31 ott",
    transfer: "Agra -> Jaipur",
    mode: "Auto privata",
    duration: "Circa 4-5h",
    connection: "Nessuna coincidenza",
    comfort: "Moderate",
    status: "Strada moderata",
    notes: "Da fare dopo il Taj all'alba; nessun programma importante a Jaipur quella sera.",
  },
  {
    ...routeLegs[5],
    date: "2 nov",
    transfer: "Jaipur (JAI) -> Dehradun (DED) -> Rishikesh",
    mode: "Volo senza scalo + taxi",
    duration: "Volo circa 1h25; taxi 45-60 min",
    connection: "Nessuna se si prenota il volo senza scalo",
    comfort: "Moderate",
    status: "Senza scalo + breve strada",
    notes: "Tappa montagna/fiume necessaria.",
  },
  {
    ...routeLegs[6],
    date: "4 nov",
    transfer: "Rishikesh -> Dehradun (DED) -> Udaipur (UDR)",
    mode: "Taxi + coincidenza sullo stesso biglietto",
    duration: "Taxi 45-60 min; volo secondo la coincidenza",
    connection: "Attenzione: nessun volo senza scalo DED -> UDR; prenotare solo una coincidenza pulita",
    comfort: "Heavy",
    status: "Coincidenza delicata",
    notes: "L'unico compromesso con coincidenza, ora ammortizzato dal viaggio piu lungo.",
  },
  {
    ...routeLegs[7],
    date: "6 nov",
    transfer: "Udaipur (UDR) -> Mumbai (BOM)",
    mode: "Volo senza scalo",
    duration: "Circa 1h40-1h45 + tempo in aeroporto",
    connection: "Nessuna se prenotato senza scalo",
    comfort: "Easy",
    status: "Senza scalo",
    notes: "Il volo senza scalo protegge il cuscinetto finale a Mumbai.",
  },
];

const hotelsIt: HotelStay[] = [
  {
    ...hotels[0],
    checkIn: "24 ottobre 2026",
    checkOut: "26 ottobre 2026",
    segment: "Arrivo a Mumbai",
    direction: "Hilton Mumbai International Airport",
    notes: "Buona opzione vicino all'aeroporto; valutare boutique hotel a South Mumbai se vince il focus visite.",
  },
  {
    ...hotels[1],
    checkIn: "26 ottobre 2026",
    checkOut: "28 ottobre 2026",
    segment: "Base per Ellora",
    direction: "Nessun Hilton diretto; cercare hotel locale di buon livello / partner SLH",
    notes: "Dormire in posizione comoda per la giornata a Ellora e il trasferimento in aeroporto.",
  },
  {
    ...hotels[2],
    checkIn: "28 ottobre 2026",
    checkOut: "30 ottobre 2026",
    segment: "Capitale",
    direction: "Hilton Garden Inn New Delhi/Saket o DoubleTree Gurugram",
    notes: "Scegliere la zona in base a visite o comodita per l'aeroporto.",
  },
  {
    ...hotels[3],
    checkIn: "30 ottobre 2026",
    checkOut: "31 ottobre 2026",
    segment: "Notte per il Taj",
    direction: "DoubleTree by Hilton Hotel Agra",
    notes: "Dormire qui rende rilassata l'alba al Taj.",
  },
  {
    ...hotels[4],
    checkIn: "31 ottobre 2026",
    checkOut: "2 novembre 2026",
    segment: "Patrimonio del Rajasthan",
    direction: "Hilton Jaipur o DoubleTree by Hilton Jaipur Amer",
    notes: "Due notti danno una giornata intera di visite.",
  },
  {
    ...hotels[5],
    checkIn: "2 novembre 2026",
    checkOut: "4 novembre 2026",
    segment: "Tappa montagna/fiume",
    direction: "Nessun Hilton centrale; cercare hotel di qualita sul fiume",
    notes: "Due notti rendono rigenerante la tappa tra colline e Ganga.",
  },
  {
    ...hotels[6],
    checkIn: "4 novembre 2026",
    checkOut: "6 novembre 2026",
    segment: "Citta del lago",
    direction: "Nessun Hilton diretto; cercare hotel di qualita in zona lago / City Palace",
    notes: "Due notti danno una giornata piena e rilassata tra lago e palazzi.",
  },
  {
    ...hotels[7],
    checkIn: "6 novembre 2026",
    checkOut: "8 novembre 2026",
    segment: "Cuscinetto finale",
    direction: "Hilton Mumbai International Airport o hotel in citta",
    notes: "Include il giorno cuscinetto protetto del 7 novembre.",
  },
];

export function getTripStats(language: Language): LocalizedTripStats {
  return language === "it" ? statsIt : tripStats;
}

export function getItinerary(language: Language): LocalizedItineraryDay[] {
  return language === "it" ? itineraryIt.map(polishItalianRecord) : itinerary;
}

export function getRouteLegs(language: Language): LocalizedRouteLeg[] {
  return language === "it" ? routeLegsIt.map(polishItalianRecord) : routeLegs;
}

export function getHotels(language: Language): HotelStay[] {
  return language === "it" ? hotelsIt.map(polishItalianRecord) : hotels;
}

export function getPlaces(language: Language): Place[] {
  return places.map((place) => ({
    ...place,
    name: placeDetails[place.id][language].name,
    role: language === "it" ? polishItalianText(placeDetails[place.id][language].role) : placeDetails[place.id][language].role,
  }));
}

