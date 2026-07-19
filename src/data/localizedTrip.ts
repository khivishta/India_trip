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
  route: "Mumbai -> Ellora -> Udaipur -> Jaipur -> Agra -> Delhi -> Rishikesh -> Mumbai",
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
    notes: "Ellora e il Tempio Kailasa sono aperti mercoledì; la chiusura settimanale è martedì. Partire presto e non aggiungere Ajanta.",
  },
  {
    ...itinerary[4],
    date: "12 novembre 2026",
    day: "Giovedì",
    plan: "Volare a Udaipur con uno scalo, preferibilmente con un unico biglietto IndiGo via Mumbai. Lasciare libera la serata dopo l'arrivo.",
    transport: "Volo con uno scalo IXU -> BOM -> UDR",
    travelTime: "Indicazione attuale della compagnia circa 5h con uno scalo; orario invernale da confermare",
    connection: "Nessun volo diretto; usare un solo biglietto ed evitare il self-transfer",
    pace: "Giorno di viaggio",
    notes: "L'auto richiede circa 10h e il treno un lungo cambio: il volo è la scelta più comoda. Confermare l'itinerario esatto del 12 novembre prima di prenotare.",
  },
  {
    ...itinerary[5],
    date: "13 novembre 2026",
    day: "Venerdì",
    plan: "City Palace, Jagdish Temple, Lake Pichola e giro in barca al tramonto opzionale.",
    transport: "Auto privata / brevi passeggiate / barca",
    travelTime: "Spostamenti locali 10-30 min; barca opzionale",
    connection: "Nessuna",
    pace: "Moderato",
    notes: "I principali palazzi e templi di Udaipur sono aperti venerdì. Tenere la giornata rilassata dopo il volo.",
  },
  {
    ...itinerary[6],
    date: "14 novembre 2026",
    day: "Sabato",
    plan: "Viaggio diretto a Jaipur con guida e autista. Usare un veicolo comodo e lasciare libera la serata.",
    transport: "Auto privata con guida",
    travelTime: "Circa 6h30-7h più soste comode",
    connection: "Nessuna",
    pace: "Giorno di viaggio",
    notes: "Il treno attuale impiega circa 7h20 e non è premium; l'auto privata è più rapida porta a porta.",
  },
  {
    ...itinerary[7],
    date: "15 novembre 2026",
    day: "Domenica",
    plan: "Amber Fort, City Palace, sosta fotografica a Hawa Mahal e shopping rilassato opzionale.",
    transport: "Auto privata con guida / brevi passeggiate",
    travelTime: "Spostamenti locali 15-45 min ciascuno",
    connection: "Nessuna",
    pace: "Moderato",
    notes: "Le principali attrazioni di Jaipur sono aperte domenica. Iniziare da Amber Fort e tenere lo shopping opzionale.",
  },
  {
    ...itinerary[8],
    date: "16 novembre 2026",
    day: "Lunedì",
    plan: "Viaggio in auto con la guida fino ad Agra; aggiungere Fatehpur Sikri lungo il percorso solo se il gruppo desidera un altro monumento.",
    transport: "Auto privata con guida",
    travelTime: "Circa 4h diretto; 5-6h con Fatehpur Sikri",
    connection: "Nessuna",
    pace: "Giorno di viaggio",
    notes: "Nessun treno premium attuale è più rapido porta a porta. Il vecchio Shatabdi Jaipur-Agra non opera più.",
  },
  {
    ...itinerary[9],
    date: "17 novembre 2026",
    day: "Martedì",
    plan: "Taj Mahal all'alba, poi Agra Fort. Nel pomeriggio prendere il Gatimaan Express per Delhi.",
    transport: "Gatimaan Express 12049 AGC -> NZM",
    travelTime: "Orario attuale circa 17:35-19:30; circa 1h55",
    connection: "Treno premium diretto",
    pace: "Giorno di viaggio",
    notes: "Il Taj è aperto martedì. Il Gatimaan è molto più rapido e comodo delle 3-4h in auto fino a Delhi.",
  },
  {
    ...itinerary[10],
    date: "18 novembre 2026",
    day: "Mercoledì",
    plan: "Giornata mirata a Delhi: Tomba di Humayun e selezione di Old/New Delhi, poi Vande Bharat serale per Haridwar e trasferimento privato a Rishikesh.",
    transport: "Vande Bharat 22457 ANVT -> HW + auto privata",
    travelTime: "Treno 17:50-21:11, poi circa 45-60 min in auto",
    connection: "Treno premium diretto fino a Haridwar; trasferimento hotel prenotato",
    pace: "Giorno di viaggio",
    notes: "Mercoledì evita le chiusure del lunedì a Delhi. Terminare le visite verso le 15:30 per proteggere il trasferimento ad Anand Vihar.",
  },
  {
    ...itinerary[11],
    date: "19 novembre 2026",
    day: "Giovedì",
    plan: "Giornata rilassata sul fiume: passeggiata sul Ganga, Beatles Ashram o spa/yoga e Ganga Aarti la sera.",
    transport: "Auto privata con guida / brevi passeggiate",
    travelTime: "Spostamenti locali 10-30 min",
    connection: "Nessuna",
    pace: "Facile",
    notes: "Mantenere questa giornata come tappa rigenerante sul fiume prima del volo per Mumbai.",
  },
  {
    ...itinerary[12],
    date: "20 novembre 2026",
    day: "Venerdì",
    plan: "Trasferimento all'aeroporto di Dehradun e volo diretto per Mumbai. Usare una camera per riposo, bagagli e trasferimento notturno in aeroporto.",
    transport: "Auto privata aeroporto + volo diretto DED -> BOM",
    travelTime: "Strada circa 30-60 min; volo diretto circa 2h35 più tempo in aeroporto",
    connection: "Nessuna se prenotato diretto su BOM",
    pace: "Giorno di viaggio",
    notes: "Prenotare DED-BOM, non Navi Mumbai (NMI), e atterrare abbastanza presto da proteggere la partenza delle 03:15 del 21 novembre.",
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
    mode: "Volo con uno scalo",
    duration: "Indicazione attuale della compagnia circa 5h; orario invernale da confermare",
    connection: "Nessun diretto; preferire un solo biglietto via Mumbai",
    status: "Attenzione alla coincidenza",
    notes: "Primo dei due viaggi aerei interni; non prenotare un self-transfer.",
  },
  {
    ...routeLegs[4],
    date: "14 nov",
    mode: "Auto privata con guida",
    duration: "Circa 6h30-7h più soste comode",
    connection: "Nessuna coincidenza",
    status: "Auto più rapida del treno attuale",
    notes: "Il treno giornaliero impiega circa 7h20 e non è premium; usare un veicolo comodo.",
  },
  {
    ...routeLegs[5],
    date: "16 nov",
    mode: "Auto privata con guida",
    duration: "Circa 4h diretto; 5-6h con Fatehpur Sikri",
    connection: "Nessuna coincidenza",
    status: "L'auto vince porta a porta",
    notes: "Nessun treno premium operativo è più rapido porta a porta; il vecchio Shatabdi non opera più.",
  },
  {
    ...routeLegs[6],
    date: "17 nov",
    mode: "Gatimaan Express 12049",
    duration: "Orario attuale circa 17:35-19:30",
    connection: "Treno premium diretto",
    status: "Treno premium più rapido dell'auto",
    notes: "Prenotare Executive Chair Car; il servizio del martedì lascia tempo per Taj all'alba e Agra Fort.",
  },
  {
    ...routeLegs[7],
    date: "18 nov",
    mode: "Vande Bharat 22457 + auto privata",
    duration: "Treno 17:50-21:11 + circa 45-60 min in auto",
    connection: "Treno premium diretto, poi trasferimento prenotato",
    status: "Treno premium più rapido dell'auto",
    notes: "Prenotare Executive Chair Car e terminare le visite a Delhi verso le 15:30.",
  },
  {
    ...routeLegs[8],
    date: "20 nov",
    mode: "Auto privata aeroporto + volo diretto",
    duration: "Strada 30-60 min + volo diretto circa 2h35",
    connection: "Nessuna se prenotato diretto su BOM",
    status: "Diretto",
    notes: "Secondo dei due viaggi aerei interni. Non scegliere Navi Mumbai (NMI): la partenza internazionale è da BOM.",
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
    segment: "Città del lago",
    direction: "Nessun Hilton diretto; cercare hotel di qualità in zona lago / City Palace",
    notes: "Due notti danno una giornata piena tra lago e palazzi dopo il volo con coincidenza.",
  },
  {
    ...hotels[3],
    checkIn: "14 novembre 2026",
    checkOut: "16 novembre 2026",
    segment: "Patrimonio del Rajasthan",
    direction: "Hilton Jaipur o DoubleTree by Hilton Jaipur Amer",
    notes: "Due notti danno una giornata intera di visite.",
  },
  {
    ...hotels[4],
    checkIn: "16 novembre 2026",
    checkOut: "17 novembre 2026",
    segment: "Soggiorno per il Taj",
    direction: "DoubleTree by Hilton Hotel Agra",
    notes: "Una notte permette il Taj all'alba di martedì prima del Gatimaan.",
  },
  {
    ...hotels[5],
    checkIn: "17 novembre 2026",
    checkOut: "18 novembre 2026",
    segment: "Tappa nella capitale",
    direction: "Verificare opzioni Hilton Family & Friends nel centro/sud di Delhi",
    notes: "Una notte permette una visita mirata mercoledì prima del Vande Bharat serale.",
  },
  {
    ...hotels[6],
    checkIn: "18 novembre 2026",
    checkOut: "20 novembre 2026",
    segment: "Tappa montagna/fiume",
    direction: "Nessun Hilton centrale; cercare hotel di qualità sul fiume",
    notes: "Arrivo serale e una giornata intera rigenerante sul Ganga.",
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
  const routeOrder = ["mumbai", "ellora", "udaipur", "jaipur", "agra", "delhi", "rishikesh"];

  return places
    .filter((place) => routeOrder.includes(place.id))
    .sort((left, right) => routeOrder.indexOf(left.id) - routeOrder.indexOf(right.id))
    .map((place) => ({
      ...place,
      name: placeDetails[place.id][language].name,
      role: language === "it" ? polishItalianText(placeDetails[place.id][language].role) : placeDetails[place.id][language].role,
    }));
}
