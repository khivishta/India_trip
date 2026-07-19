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
  dates: "8-21 novembre 2026",
  nights: "12 notti in India",
  route: "Mumbai -> Ellora -> Delhi -> Agra -> Jaipur -> Rishikesh -> Udaipur -> Mumbai",
  buffer: "20 novembre a Mumbai",
};

const itineraryIt: LocalizedItineraryDay[] = [
  {
    ...itinerary[0],
    date: "8 novembre 2026",
    day: "Domenica",
    sleepIn: "In viaggio",
    plan: "Viaggio di andata prenotato: QR20 parte da Dublino alle 07:45 e arriva a Doha alle 17:50; scalo di 2h50 prima del QR556 alle 20:40.",
    transport: "Qatar Airways QR20 + QR556",
    travelTime: "7h05 + scalo 2h50 + volo notturno 3h25",
    connection: "Coincidenza prenotata a Doha (DOH)",
    pace: "Giorno di viaggio",
    notes: "QR556 arriva a Mumbai alle 02:35 del 9 novembre. Tenere medicine ed essenziali per la prima notte nel bagaglio a mano.",
  },
  {
    ...itinerary[1],
    date: "9 novembre 2026",
    day: "Lunedì",
    plan: "Arrivo alle 02:35 con QR556. Dormire e recuperare; breve uscita a Marine Drive o Colaba solo se resta energia.",
    transport: "Arrivo internazionale prenotato + trasferimento in hotel",
    travelTime: "Trasferimento aeroporto 45-90 min, secondo il traffico",
    connection: "Nessuna",
    pace: "Facile",
    notes: "Prenotare la camera dall'8 novembre per garantire l'accesso dopo l'atterraggio delle 02:35.",
  },
  {
    ...itinerary[2],
    date: "10 novembre 2026",
    day: "Martedì",
    plan: "Breve blocco opzionale Gateway of India / Colaba, poi volo per Aurangabad. Solo serata leggera.",
    transport: "Volo senza scalo BOM -> IXU",
    travelTime: "Volo circa 1h10 + tempo in aeroporto",
    connection: "Servizio giornaliero diretto attualmente indicato; confermare l'orario esatto del 10 novembre prima di prenotare",
    pace: "Giorno di viaggio",
    notes: "Non inserire Ellora il giorno dell'arrivo.",
  },
  {
    ...itinerary[3],
    date: "11 novembre 2026",
    day: "Mercoledì",
    plan: "Grotte di Ellora con focus sul tempio Kailasa; Daulatabad Fort solo se resta energia.",
    transport: "Auto privata",
    travelTime: "Aurangabad -> Ellora circa 1h per tratta",
    connection: "Nessuna",
    pace: "Moderato",
    notes: "Partire presto, tenere il pomeriggio flessibile e non aggiungere Ajanta in questa versione breve.",
  },
  {
    ...itinerary[4],
    date: "12 novembre 2026",
    day: "Giovedì",
    plan: "Volo per Delhi. Solo serata leggera: India Gate in auto o cena tranquilla.",
    transport: "Volo senza scalo IXU -> DEL",
    travelTime: "Volo circa 1h20-1h55 + tempo in aeroporto",
    connection: "Servizio giornaliero diretto attualmente indicato; confermare l'orario esatto del 12 novembre prima di prenotare",
    pace: "Giorno di viaggio",
    notes: "Scegliere un volo a metà giornata o pomeriggio e lasciare le visite di Delhi al giorno dopo.",
  },
  {
    ...itinerary[5],
    date: "13 novembre 2026",
    day: "Venerdì",
    plan: "Mattina mirata a Delhi: Tomba di Humayun o Lodhi Garden, poi auto privata per Agra e Mehtab Bagh / tramonto sul Taj se i tempi lo permettono.",
    transport: "Auto privata",
    travelTime: "Spostamento locale a Delhi + 3-4h per Agra",
    connection: "Nessuna",
    pace: "Giorno di viaggio",
    notes: "Le date prenotate riducono Delhi a una notte. Old Delhi solo in sostituzione del blocco giardino/tomba.",
  },
  {
    ...itinerary[6],
    date: "14 novembre 2026",
    day: "Sabato",
    plan: "Taj Mahal all'alba, colazione, poi auto privata per Jaipur. Cena facile all'arrivo.",
    transport: "Auto privata",
    travelTime: "Strada circa 4-5h dopo la visita al Taj",
    connection: "Nessuna",
    pace: "Giorno di viaggio",
    notes: "Giornata intensa ma valida; lasciare la sera a Jaipur senza programmi.",
  },
  {
    ...itinerary[7],
    date: "15 novembre 2026",
    day: "Domenica",
    plan: "Amber Fort, City Palace, stop fotografico a Hawa Mahal, shopping rilassato opzionale.",
    transport: "Auto privata",
    travelTime: "Spostamenti locali 15-45 min ciascuno",
    connection: "Nessuna",
    pace: "Moderato",
    notes: "Iniziare da Amber Fort; tenere lo shopping opzionale per non allungare troppo la giornata.",
  },
  {
    ...itinerary[8],
    date: "16 novembre 2026",
    day: "Lunedì",
    plan: "Volo Jaipur-Dehradun con coincidenza sullo stesso biglietto, poi taxi per Rishikesh.",
    transport: "Volo con coincidenza JAI -> DED + taxi",
    travelTime: "Coincidenza più rapida attuale circa 6h20; taxi 45-60 min",
    connection: "Nessun volo IndiGo diretto attualmente indicato; confermare una coincidenza pulita sullo stesso biglietto",
    pace: "Giorno di viaggio",
    notes: "Tenere la sera opzionale dopo la lunga giornata di trasferimento.",
  },
  {
    ...itinerary[9],
    date: "17 novembre 2026",
    day: "Martedì",
    plan: "Giornata rilassata a Rishikesh: passeggiata sul fiume, Beatles Ashram o spa/yoga, Ganga Aarti la sera.",
    transport: "Auto privata / brevi passeggiate",
    travelTime: "Spostamenti locali 10-30 min",
    connection: "Nessuna",
    pace: "Facile",
    notes: "Questa giornata intera rende la tappa montagna/fiume rigenerante invece che frettolosa.",
  },
  {
    ...itinerary[10],
    date: "18 novembre 2026",
    day: "Mercoledì",
    plan: "Mattina lenta a Rishikesh sul fiume, poi volo verso Udaipur.",
    transport: "Taxi per DED + volo con coincidenza sullo stesso biglietto",
    travelTime: "Taxi 45-60 min; durata del volo secondo la coincidenza",
    connection: "Attenzione: nessun volo senza scalo DED -> UDR; serve una coincidenza pulita",
    pace: "Giorno di viaggio",
    notes: "Secondo giorno con coincidenza; lasciare libera la serata.",
  },
  {
    ...itinerary[11],
    date: "19 novembre 2026",
    day: "Giovedì",
    plan: "Giornata lago e palazzi a Udaipur: City Palace, Lake Pichola, Jagdish Temple, giro in barca opzionale.",
    transport: "Auto privata / brevi passeggiate / barca",
    travelTime: "Spostamenti locali 10-30 min; barca opzionale",
    connection: "Nessuna",
    pace: "Moderato",
    notes: "Giornata scenica della città del lago, con tempo per godersi bene l'atmosfera.",
  },
  {
    ...itinerary[12],
    date: "20 novembre 2026",
    day: "Venerdì",
    plan: "Mattina facile a Udaipur, poi volo senza scalo per Mumbai. Usare una camera per riposo, bagagli e trasferimento notturno in aeroporto.",
    transport: "Volo senza scalo UDR -> BOM",
    travelTime: "Volo circa 1h40-1h45 + tempo in aeroporto",
    connection: "Nessuna se prenotato senza scalo",
    pace: "Giorno di viaggio",
    notes: "Scegliere un volo presto per proteggere il cuscinetto prima della partenza delle 03:15 del 21 novembre.",
  },
  {
    ...itinerary[13],
    date: "21 novembre 2026",
    day: "Sabato",
    baseCity: "Partenza da Mumbai",
    sleepIn: "Partenza",
    plan: "Ritorno prenotato: 6E1303 parte da Mumbai alle 03:15 e arriva a Doha alle 04:50; scalo di 3h15 prima del QR17 alle 08:05, con arrivo a Dublino alle 12:35.",
    transport: "IndiGo 6E1303 + Qatar Airways QR17",
    travelTime: "4h05 + scalo 3h15 + 7h30",
    connection: "Coincidenza prenotata a Doha (DOH)",
    pace: "Giorno di viaggio",
    notes: "Lasciare l'hotel di Mumbai verso mezzanotte del 20 novembre, rispettando terminale e indicazioni della compagnia sulla prenotazione.",
  },
];

const routeLegsIt: LocalizedRouteLeg[] = [
  {
    ...routeLegs[0],
    date: "8-9 nov",
    transfer: "Dublino (DUB) -> Doha (DOH) -> Mumbai (BOM)",
    mode: "Voli prenotati QR20 + QR556",
    duration: "7h05 + scalo 2h50 + 3h25",
    connection: "Coincidenza prenotata a Doha",
    status: "Prenotato",
    notes: "Partenza alle 07:45 dell'8 novembre; arrivo a Mumbai alle 02:35 del 9 novembre.",
  },
  {
    ...routeLegs[1],
    date: "10 nov",
    mode: "Volo senza scalo",
    duration: "Circa 1h10 + tempo in aeroporto",
    connection: "Servizio giornaliero senza scalo attualmente indicato; orario non prenotato",
    status: "Senza scalo",
    notes: "Usare solo il volo senza scalo.",
  },
  {
    ...routeLegs[2],
    date: "11 nov",
    mode: "Auto privata",
    duration: "Circa 1h per tratta",
    connection: "Nessuna coincidenza",
    status: "Strada breve",
    notes: "Fare Ellora come giornata principale; evitare Ajanta in questa versione breve.",
  },
  {
    ...routeLegs[3],
    date: "12 nov",
    mode: "Volo senza scalo",
    duration: "Circa 1h20-1h55 + tempo in aeroporto",
    connection: "Servizio giornaliero senza scalo attualmente indicato; orario non prenotato",
    status: "Senza scalo",
    notes: "Tenere leggera la serata a Delhi.",
  },
  {
    ...routeLegs[4],
    date: "13 nov",
    mode: "Auto privata",
    duration: "Circa 3-4h",
    connection: "Nessuna coincidenza",
    status: "Strada moderata",
    notes: "Partire dopo un breve blocco visite a Delhi.",
  },
  {
    ...routeLegs[5],
    date: "14 nov",
    mode: "Auto privata",
    duration: "Circa 4-5h",
    connection: "Nessuna coincidenza",
    status: "Strada moderata",
    notes: "Da fare dopo il Taj all'alba; nessun programma importante a Jaipur quella sera.",
  },
  {
    ...routeLegs[6],
    date: "16 nov",
    mode: "Volo con coincidenza + taxi",
    duration: "Coincidenza più rapida attuale circa 6h20; taxi 45-60 min",
    connection: "Nessun volo IndiGo diretto attualmente indicato",
    status: "Coincidenza delicata",
    notes: "Prenotare una coincidenza pulita sullo stesso biglietto e lasciare libera la sera.",
  },
  {
    ...routeLegs[7],
    date: "18 nov",
    mode: "Taxi + coincidenza sullo stesso biglietto",
    duration: "Taxi 45-60 min; volo secondo la coincidenza",
    connection: "Nessun volo senza scalo DED -> UDR",
    status: "Coincidenza delicata",
    notes: "Secondo giorno con coincidenza; lasciare libera la sera.",
  },
  {
    ...routeLegs[8],
    date: "20 nov",
    mode: "Volo senza scalo",
    duration: "Circa 1h40-1h45 + tempo in aeroporto",
    connection: "Nessuna se prenotato senza scalo",
    status: "Senza scalo",
    notes: "Scegliere un volo presto per proteggere il cuscinetto finale a Mumbai.",
  },
  {
    ...routeLegs[9],
    date: "21 nov",
    transfer: "Mumbai (BOM) -> Doha (DOH) -> Dublino (DUB)",
    mode: "Voli prenotati 6E1303 + QR17",
    duration: "4h05 + scalo 3h15 + 7h30",
    connection: "Coincidenza prenotata a Doha",
    status: "Prenotato",
    notes: "Partenza da Mumbai alle 03:15; arrivo a Dublino alle 12:35.",
  },
];

const hotelsIt: HotelStay[] = [
  {
    ...hotels[0],
    checkIn: "8 novembre 2026",
    checkOut: "10 novembre 2026",
    segment: "Arrivo a Mumbai",
    direction: "Hilton Mumbai International Airport",
    notes: "Include la notte prima dell'arrivo, così la camera è garantita quando QR556 atterra alle 02:35 del 9 novembre.",
  },
  {
    ...hotels[1],
    checkIn: "10 novembre 2026",
    checkOut: "12 novembre 2026",
    segment: "Base per Ellora",
    direction: "Nessun Hilton diretto; cercare hotel locale di buon livello / partner SLH",
    notes: "Dormire in posizione comoda per la giornata a Ellora e il trasferimento in aeroporto.",
  },
  {
    ...hotels[2],
    checkIn: "12 novembre 2026",
    checkOut: "13 novembre 2026",
    segment: "Capitale",
    direction: "Hilton Garden Inn New Delhi/Saket o DoubleTree Gurugram",
    notes: "Una sola notte: scegliere una zona comoda per il breve blocco visite del mattino successivo.",
  },
  {
    ...hotels[3],
    checkIn: "13 novembre 2026",
    checkOut: "14 novembre 2026",
    segment: "Notte per il Taj",
    direction: "DoubleTree by Hilton Hotel Agra",
    notes: "Dormire qui rende rilassata l'alba al Taj.",
  },
  {
    ...hotels[4],
    checkIn: "14 novembre 2026",
    checkOut: "16 novembre 2026",
    segment: "Patrimonio del Rajasthan",
    direction: "Hilton Jaipur o DoubleTree by Hilton Jaipur Amer",
    notes: "Due notti danno una giornata intera di visite.",
  },
  {
    ...hotels[5],
    checkIn: "16 novembre 2026",
    checkOut: "18 novembre 2026",
    segment: "Tappa montagna/fiume",
    direction: "Nessun Hilton centrale; cercare hotel di qualità sul fiume",
    notes: "Due notti rendono rigenerante la tappa tra colline e Ganga.",
  },
  {
    ...hotels[6],
    checkIn: "18 novembre 2026",
    checkOut: "20 novembre 2026",
    segment: "Città del lago",
    direction: "Nessun Hilton diretto; cercare hotel di qualità in zona lago / City Palace",
    notes: "Due notti danno una giornata piena e rilassata tra lago e palazzi.",
  },
  {
    ...hotels[7],
    checkIn: "20 novembre 2026",
    checkOut: "21 novembre 2026",
    segment: "Cuscinetto finale",
    direction: "Hilton Mumbai International Airport o hotel in città",
    notes: "Usare la camera per riposo e bagagli prima di partire verso mezzanotte per il volo delle 03:15.",
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
