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
  route: "Mumbai -> Ellora -> Agra -> Rishikesh -> Jaipur -> Udaipur -> Mumbai",
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
    plan: "Breve blocco opzionale Gateway of India / Colaba, poi treno premium Vande Bharat per Chhatrapati Sambhajinagar (Aurangabad).",
    transport: "Vande Bharat 20706 CSMT -> CPSN",
    travelTime: "Orario attuale circa 5h30, indicativamente 13:15-18:43",
    connection: "Treno premium diretto; attualmente opera sei giorni a settimana",
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
    plan: "Prendere il volo con una coincidenza più pratico per Agra. Lasciare libera la serata dopo l'arrivo.",
    transport: "Volo con una coincidenza IXU -> AGR",
    travelTime: "Esempi attuali più rapidi circa 5h25-6h15",
    connection: "Nessun volo senza scalo; preferire una coincidenza pulita sullo stesso biglietto",
    pace: "Giorno di viaggio",
    notes: "Primo dei due viaggi aerei interni. Confermare l'orario esatto del 12 novembre prima di prenotare.",
  },
  {
    ...itinerary[5],
    date: "13 novembre 2026",
    day: "Venerdì",
    plan: "Taj Mahal all'alba, Agra Fort, poi Mehtab Bagh o un punto tranquillo per il tramonto sul Taj.",
    transport: "Auto privata con guida / brevi passeggiate",
    travelTime: "Spostamenti locali 15-40 min ciascuno",
    connection: "Nessuna",
    pace: "Moderato",
    notes: "La seconda notte ad Agra mantiene rilassata la giornata del Taj.",
  },
  {
    ...itinerary[6],
    date: "14 novembre 2026",
    day: "Sabato",
    plan: "Viaggio in auto con la guida fino a Rishikesh. Fare soste comode e lasciare libera la serata.",
    transport: "Auto privata con guida",
    travelTime: "Circa 6-7h più soste comode",
    connection: "Nessuna",
    pace: "Giorno di viaggio",
    notes: "Rientra nel limite di 6-8 ore di guida ed evita un volo aggiuntivo.",
  },
  {
    ...itinerary[7],
    date: "15 novembre 2026",
    day: "Domenica",
    plan: "Giornata rilassata sul fiume: passeggiata sul Ganga, Beatles Ashram o spa/yoga e Ganga Aarti la sera.",
    transport: "Auto privata con guida / brevi passeggiate",
    travelTime: "Spostamenti locali 10-30 min",
    connection: "Nessuna",
    pace: "Facile",
    notes: "Mantenere questa giornata come tappa rigenerante tra montagna e fiume.",
  },
  {
    ...itinerary[8],
    date: "16 novembre 2026",
    day: "Lunedì",
    plan: "Viaggio in auto con la guida fino a Jaipur. Usare il percorso stradale più rapido e fare soste per pranzo e movimento.",
    transport: "Auto privata con guida",
    travelTime: "Circa 7-8h con traffico normale e soste",
    connection: "Nessuna",
    pace: "Giorno di viaggio",
    notes: "È il trasferimento più lungo, ma resta nel limite concordato di 6-8 ore ed evita un volo.",
  },
  {
    ...itinerary[9],
    date: "17 novembre 2026",
    day: "Martedì",
    plan: "Amber Fort, City Palace, stop fotografico a Hawa Mahal, shopping rilassato opzionale.",
    transport: "Auto privata con guida",
    travelTime: "Spostamenti locali 15-45 min ciascuno",
    connection: "Nessuna",
    pace: "Moderato",
    notes: "Iniziare da Amber Fort; tenere lo shopping opzionale per non allungare troppo la giornata.",
  },
  {
    ...itinerary[10],
    date: "18 novembre 2026",
    day: "Mercoledì",
    plan: "Viaggio in auto con la guida fino a Udaipur. Arrivo per una serata tranquilla sul lago.",
    transport: "Auto privata con guida",
    travelTime: "Circa 6-7h più soste comode",
    connection: "Nessuna",
    pace: "Giorno di viaggio",
    notes: "Rientra nel limite di 6-8 ore di guida ed evita un altro volo interno.",
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
    notes: "Secondo dei due viaggi aerei interni. Scegliere un volo presto per proteggere il cuscinetto prima della partenza delle 03:15 del 21 novembre.",
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
    mode: "Vande Bharat 20706",
    duration: "Orario attuale circa 5h30, indicativamente 13:15-18:43",
    connection: "Treno premium diretto; attualmente opera sei giorni a settimana",
    status: "Treno rapido premium",
    notes: "Prenotare Executive Chair Car o Chair Car e confermare l'orario del 10 novembre all'apertura delle prenotazioni.",
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
    mode: "Volo con una coincidenza",
    duration: "Esempi attuali più rapidi circa 5h25-6h15",
    connection: "Nessun volo senza scalo; preferire un itinerario pulito sullo stesso biglietto",
    status: "Coincidenza delicata",
    notes: "Primo dei due viaggi aerei interni; confermare l'orario esatto del 12 novembre.",
  },
  {
    ...routeLegs[4],
    date: "14 nov",
    mode: "Auto privata con guida",
    duration: "Circa 6-7h più soste comode",
    connection: "Nessuna coincidenza",
    status: "Strada lunga entro il limite",
    notes: "Usare guida/autista e lasciare libera la serata.",
  },
  {
    ...routeLegs[5],
    date: "16 nov",
    mode: "Auto privata con guida",
    duration: "Circa 7-8h con traffico normale e soste",
    connection: "Nessuna coincidenza",
    status: "Trasferimento più lungo entro il limite",
    notes: "Partire presto e lasciare libera la sera a Jaipur.",
  },
  {
    ...routeLegs[6],
    date: "18 nov",
    mode: "Auto privata con guida",
    duration: "Circa 6-7h più soste comode",
    connection: "Nessuna coincidenza",
    status: "Strada lunga entro il limite",
    notes: "Evita un volo e segue il circuito complessivo più corto.",
  },
  {
    ...routeLegs[7],
    date: "20 nov",
    mode: "Volo senza scalo",
    duration: "Circa 1h40-1h45 + tempo in aeroporto",
    connection: "Nessuna se prenotato senza scalo",
    status: "Senza scalo",
    notes: "Secondo dei due viaggi aerei interni; scegliere un volo presto per proteggere il cuscinetto finale a Mumbai.",
  },
  {
    ...routeLegs[8],
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
    direction: "Prenotato: Hilton Garden Inn Mumbai International Airport",
    notes: "Tariffa Family & Friends confermata. La notte pre-arrivo dell'8 novembre garantisce la camera quando QR556 atterra alle 02:35 del 9 novembre.",
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
    checkOut: "14 novembre 2026",
    segment: "Soggiorno per il Taj",
    direction: "DoubleTree by Hilton Hotel Agra",
    notes: "Due notti proteggono una giornata rilassata per Taj all'alba e Agra Fort.",
  },
  {
    ...hotels[3],
    checkIn: "14 novembre 2026",
    checkOut: "16 novembre 2026",
    segment: "Tappa montagna/fiume",
    direction: "Nessun Hilton centrale; cercare hotel di qualità sul fiume",
    notes: "Due notti danno una giornata intera e rigenerante sul Ganga.",
  },
  {
    ...hotels[4],
    checkIn: "16 novembre 2026",
    checkOut: "18 novembre 2026",
    segment: "Patrimonio del Rajasthan",
    direction: "Hilton Jaipur o DoubleTree by Hilton Jaipur Amer",
    notes: "Due notti danno una giornata intera di visite.",
  },
  {
    ...hotels[5],
    checkIn: "18 novembre 2026",
    checkOut: "20 novembre 2026",
    segment: "Città del lago",
    direction: "Nessun Hilton diretto; cercare hotel di qualità in zona lago / City Palace",
    notes: "Due notti danno una giornata piena e rilassata tra lago e palazzi.",
  },
  {
    ...hotels[6],
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
  const routeOrder = ["mumbai", "ellora", "agra", "rishikesh", "jaipur", "udaipur"];

  return places
    .filter((place) => routeOrder.includes(place.id))
    .sort((left, right) => routeOrder.indexOf(left.id) - routeOrder.indexOf(right.id))
    .map((place) => ({
      ...place,
      name: placeDetails[place.id][language].name,
      role: language === "it" ? polishItalianText(placeDetails[place.id][language].role) : placeDetails[place.id][language].role,
    }));
}
