export type Pace = "Easy" | "Moderate" | "Travel Day" | "Buffer";
export type TransportKind = "flight" | "train" | "car" | "taxi" | "transfer" | "boat";

export type ItineraryDay = {
  date: string;
  day: string;
  baseCity: string;
  sleepIn: string;
  plan: string;
  transport: string;
  transportKind: TransportKind;
  travelTime: string;
  connection: string;
  pace: Pace;
  notes: string;
};

export type RouteLeg = {
  date: string;
  transfer: string;
  arriveBase: string;
  mode: string;
  kind: TransportKind;
  duration: string;
  connection: string;
  comfort: "Easy" | "Moderate" | "Heavy";
  status: string;
  notes: string;
  source?: string;
};

export type HotelStay = {
  segment: string;
  checkIn: string;
  checkOut: string;
  city: string;
  nights: number;
  direction: string;
  notes: string;
};

export type Place = {
  id: string;
  name: string;
  emoji: string;
  role: string;
  why: string;
  history: string;
  focus: string;
  comfort: string;
  image: string;
  imageCredit: string;
  visualLink: string;
  accent: string;
};

export const tripStats = {
  dates: "Nov 8-21, 2026",
  nights: "12 nights in India",
  route: "Mumbai -> Ellora -> Agra -> Rishikesh -> Jaipur -> Udaipur -> Mumbai",
  flights: 2,
  privateDrives: 6,
  buffer: "Nov 20 in Mumbai",
};

export const itinerary: ItineraryDay[] = [
  {
    date: "Nov 8, 2026",
    day: "Sunday",
    baseCity: "Dublin -> Doha",
    sleepIn: "In transit",
    plan: "Booked outbound journey: QR20 leaves Dublin at 07:45 and reaches Doha at 17:50; 2h50 layover before QR556 at 20:40.",
    transport: "Qatar Airways QR20 + QR556",
    transportKind: "flight",
    travelTime: "7h05 + 2h50 layover + 3h25 overnight",
    connection: "Booked connection in Doha (DOH)",
    pace: "Travel Day",
    notes: "QR556 arrives in Mumbai at 02:35 on Nov 9. Keep medicines and first-night essentials in hand luggage.",
  },
  {
    date: "Nov 9, 2026",
    day: "Monday",
    baseCity: "Mumbai",
    sleepIn: "Mumbai",
    plan: "Arrive at 02:35 on QR556. Sleep, recover, then take a short Marine Drive or Colaba outing only if energy allows.",
    transport: "Booked international arrival + hotel transfer",
    transportKind: "transfer",
    travelTime: "Airport transfer 45-90m depending traffic",
    connection: "None",
    pace: "Easy",
    notes: "Reserve the room from Nov 8 so access is guaranteed after the 02:35 landing.",
  },
  {
    date: "Nov 10, 2026",
    day: "Tuesday",
    baseCity: "Mumbai -> Aurangabad",
    sleepIn: "Aurangabad",
    plan: "Optional short Gateway of India / Colaba block, then take the premium Vande Bharat to Chhatrapati Sambhajinagar (Aurangabad).",
    transport: "Vande Bharat 20706 CSMT -> CPSN",
    transportKind: "train",
    travelTime: "Current timetable about 5h30m, around 13:15-18:43",
    connection: "Direct premium train; currently runs six days a week",
    pace: "Travel Day",
    notes: "Do not squeeze Ellora into arrival day.",
  },
  {
    date: "Nov 11, 2026",
    day: "Wednesday",
    baseCity: "Aurangabad / Ellora",
    sleepIn: "Aurangabad",
    plan: "Ellora Caves with focus on Kailasa Temple; optional Daulatabad Fort only if energy is good.",
    transport: "Private car",
    transportKind: "car",
    travelTime: "Aurangabad -> Ellora about 1h each way",
    connection: "None",
    pace: "Moderate",
    notes: "Ellora and Kailasa Temple are open on Wednesday; their weekly closure is Tuesday. Start early and avoid adding Ajanta on this short stay.",
  },
  {
    date: "Nov 12, 2026",
    day: "Thursday",
    baseCity: "Aurangabad -> Agra",
    sleepIn: "Agra",
    plan: "Take the shortest practical one-stop flight to Agra. Keep the evening free after arrival.",
    transport: "One-stop flight IXU -> AGR",
    transportKind: "flight",
    travelTime: "Current fastest examples about 5h25m-6h15m",
    connection: "No nonstop service; prefer a clean same-ticket connection",
    pace: "Travel Day",
    notes: "This is domestic flight journey 1 of 2. Confirm the exact Nov 12 schedule before booking.",
  },
  {
    date: "Nov 13, 2026",
    day: "Friday",
    baseCity: "Agra",
    sleepIn: "Agra",
    plan: "Agra Fort, Itimad-ud-Daulah, then Mehtab Bagh for a Taj sunset view from across the river.",
    transport: "Private guide car / short walks",
    transportKind: "car",
    travelTime: "Local drives 15-40m each",
    connection: "None",
    pace: "Moderate",
    notes: "The Taj Mahal is closed to tourists every Friday. Use this day for Agra's other monuments, which remain open.",
  },
  {
    date: "Nov 14, 2026",
    day: "Saturday",
    baseCity: "Agra -> Rishikesh",
    sleepIn: "Rishikesh",
    plan: "Visit the Taj Mahal at sunrise, return for breakfast and check-out, then drive with the guide to Rishikesh.",
    transport: "Private guide car",
    transportKind: "car",
    travelTime: "Sunrise Taj visit, then about 6-7h driving plus comfort stops",
    connection: "None",
    pace: "Travel Day",
    notes: "The Taj is open on Saturday. Pre-book the first entry and expect a later arrival in Rishikesh.",
  },
  {
    date: "Nov 15, 2026",
    day: "Sunday",
    baseCity: "Rishikesh",
    sleepIn: "Rishikesh",
    plan: "Relaxed river day: Ganga walk, Beatles Ashram or spa/yoga, and evening Ganga Aarti.",
    transport: "Private guide car / short walks",
    transportKind: "car",
    travelTime: "Local drives 10-30m",
    connection: "None",
    pace: "Easy",
    notes: "Keep this as the restorative mountain/river day.",
  },
  {
    date: "Nov 16, 2026",
    day: "Monday",
    baseCity: "Rishikesh -> Jaipur",
    sleepIn: "Jaipur",
    plan: "Drive with the guide to Jaipur. Use the fastest practical road route and stop for lunch and stretching.",
    transport: "Private guide car",
    transportKind: "car",
    travelTime: "About 7-8h with normal traffic and stops",
    connection: "None",
    pace: "Travel Day",
    notes: "This is the longest drive, but remains inside the agreed 6-8 hour ceiling and saves a flight.",
  },
  {
    date: "Nov 17, 2026",
    day: "Tuesday",
    baseCity: "Jaipur",
    sleepIn: "Jaipur",
    plan: "Amber Fort, City Palace, Hawa Mahal photo stop, optional relaxed shopping.",
    transport: "Private guide car",
    transportKind: "car",
    travelTime: "Local drives 15-45m each",
    connection: "None",
    pace: "Moderate",
    notes: "Start with Amber Fort; keep shopping optional so the day does not sprawl.",
  },
  {
    date: "Nov 18, 2026",
    day: "Wednesday",
    baseCity: "Jaipur -> Udaipur",
    sleepIn: "Udaipur",
    plan: "Drive with the guide to Udaipur. Arrive for a quiet lakeside evening.",
    transport: "Private guide car",
    transportKind: "car",
    travelTime: "About 6-7h plus comfort stops",
    connection: "None",
    pace: "Travel Day",
    notes: "Within the 6-8 hour driving limit and avoids another domestic flight.",
  },
  {
    date: "Nov 19, 2026",
    day: "Thursday",
    baseCity: "Udaipur",
    sleepIn: "Udaipur",
    plan: "Udaipur lake-and-palace day: City Palace, Lake Pichola, Jagdish Temple, optional boat ride.",
    transport: "Private car / short walks / boat",
    transportKind: "boat",
    travelTime: "Local drives 10-30m; boat optional",
    connection: "None",
    pace: "Moderate",
    notes: "This is the scenic lake-city day, with time to enjoy the setting properly.",
  },
  {
    date: "Nov 20, 2026",
    day: "Friday",
    baseCity: "Udaipur -> Mumbai",
    sleepIn: "Mumbai",
    plan: "Easy morning in Udaipur, then take a direct flight to Mumbai. Use a hotel room for rest, packing and the late-night airport transfer.",
    transport: "Direct flight UDR -> BOM",
    transportKind: "flight",
    travelTime: "Flight about 1h40m-1h45m + airport time",
    connection: "None if booked direct",
    pace: "Travel Day",
    notes: "Domestic flight journey 2 of 2. Choose an early flight to protect the buffer before the 03:15 departure on Nov 21.",
  },
  {
    date: "Nov 21, 2026",
    day: "Saturday",
    baseCity: "Mumbai departure",
    sleepIn: "Depart",
    plan: "Booked return: 6E1303 leaves Mumbai at 03:15 and reaches Doha at 04:50; 3h15 layover before QR17 at 08:05, arriving Dublin at 12:35.",
    transport: "IndiGo 6E1303 + Qatar Airways QR17",
    transportKind: "flight",
    travelTime: "4h05 + 3h15 layover + 7h30",
    connection: "Booked connection in Doha (DOH)",
    pace: "Travel Day",
    notes: "Leave the Mumbai hotel around midnight on Nov 20, allowing for the terminal and airline guidance on the booking.",
  },
];

export const routeLegs: RouteLeg[] = [
  {
    date: "Nov 8-9",
    transfer: "Dublin (DUB) -> Doha (DOH) -> Mumbai (BOM)",
    arriveBase: "Mumbai",
    mode: "Booked flights QR20 + QR556",
    kind: "flight",
    duration: "7h05 + 2h50 layover + 3h25",
    connection: "Booked Doha connection",
    comfort: "Heavy",
    status: "Booked",
    notes: "Depart 07:45 on Nov 8; arrive Mumbai 02:35 on Nov 9.",
  },
  {
    date: "Nov 10",
    transfer: "Mumbai CSMT -> Chhatrapati Sambhajinagar (CPSN)",
    arriveBase: "Aurangabad",
    mode: "Vande Bharat 20706",
    kind: "train",
    duration: "Current timetable about 5h30m, around 13:15-18:43",
    connection: "Direct premium train; currently runs six days a week",
    comfort: "Easy",
    status: "Premium fast train",
    notes: "Book Executive Chair Car or Chair Car; confirm Nov 10 timing when reservations open.",
    source: "https://indianexpress.com/article/india/railways-revises-timings-of-mumbai-hazur-sahib-nanded-vande-bharat-train-check-new-schedule-10646659/",
  },
  {
    date: "Nov 11",
    transfer: "Aurangabad -> Ellora -> Aurangabad",
    arriveBase: "Aurangabad",
    mode: "Private car",
    kind: "car",
    duration: "About 1h each way",
    connection: "No connection",
    comfort: "Moderate",
    status: "Short drive",
    notes: "Do Ellora as the main day; skip Ajanta on this relaxed version.",
  },
  {
    date: "Nov 12",
    transfer: "Aurangabad (IXU) -> Agra (AGR)",
    arriveBase: "Agra",
    mode: "One-stop flight",
    kind: "flight",
    duration: "Current fastest examples about 5h25m-6h15m",
    connection: "No nonstop; prefer a clean same-ticket routing",
    comfort: "Heavy",
    status: "Connection caution",
    notes: "Domestic flight journey 1 of 2; confirm the exact Nov 12 schedule before booking.",
    source: "https://www.ixigo.com/cheap-flights/aurangabad-agra-ixu-agr",
  },
  {
    date: "Nov 14",
    transfer: "Agra -> Rishikesh",
    arriveBase: "Rishikesh",
    mode: "Private guide car",
    kind: "car",
    duration: "About 6-7h plus comfort stops",
    connection: "No connection",
    comfort: "Heavy",
    status: "Long drive within limit",
    notes: "Use the guide/driver and keep the evening free.",
    source: "https://www.coveringindia.com/en/distance-calculator/agra-to-rishikesh",
  },
  {
    date: "Nov 16",
    transfer: "Rishikesh -> Jaipur",
    arriveBase: "Jaipur",
    mode: "Private guide car",
    kind: "car",
    duration: "About 7-8h with normal traffic and stops",
    connection: "No connection",
    comfort: "Heavy",
    status: "Longest drive within limit",
    notes: "Leave early and keep the Jaipur evening unscheduled.",
    source: "https://www.rome2rio.com/s/Rishikesh/Jaipur",
  },
  {
    date: "Nov 18",
    transfer: "Jaipur -> Udaipur",
    arriveBase: "Udaipur",
    mode: "Private guide car",
    kind: "car",
    duration: "About 6-7h plus comfort stops",
    connection: "No connection",
    comfort: "Heavy",
    status: "Long drive within limit",
    notes: "Saves a flight and follows the shortest overall destination loop.",
  },
  {
    date: "Nov 20",
    transfer: "Udaipur (UDR) -> Mumbai (BOM)",
    arriveBase: "Mumbai",
    mode: "Direct flight",
    kind: "flight",
    duration: "About 1h40m-1h45m + airport time",
    connection: "None if booked direct",
    comfort: "Easy",
    status: "Direct",
    notes: "Domestic flight journey 2 of 2; choose an early nonstop to protect the final Mumbai buffer.",
    source: "https://www.goindigo.in/airport-directory/india/udaipur-udr.html",
  },
  {
    date: "Nov 21",
    transfer: "Mumbai (BOM) -> Doha (DOH) -> Dublin (DUB)",
    arriveBase: "Dublin",
    mode: "Booked flights 6E1303 + QR17",
    kind: "flight",
    duration: "4h05 + 3h15 layover + 7h30",
    connection: "Booked Doha connection",
    comfort: "Heavy",
    status: "Booked",
    notes: "Depart Mumbai 03:15; arrive Dublin 12:35.",
  },
];

export const hotels: HotelStay[] = [
  {
    segment: "Mumbai arrival",
    checkIn: "Nov 8, 2026",
    checkOut: "Nov 10, 2026",
    city: "Mumbai",
    nights: 2,
    direction: "Booked: Hilton Garden Inn Mumbai International Airport",
    notes: "Family & Friends rate confirmed. The Nov 8 pre-arrival night guarantees the room when QR556 lands at 02:35 on Nov 9.",
  },
  {
    segment: "Ellora base",
    checkIn: "Nov 10, 2026",
    checkOut: "Nov 12, 2026",
    city: "Aurangabad",
    nights: 2,
    direction: "No direct Hilton; research quality local hotel / SLH partner",
    notes: "Stay central enough for Ellora day trip and airport transfer.",
  },
  {
    segment: "Taj stay",
    checkIn: "Nov 12, 2026",
    checkOut: "Nov 14, 2026",
    city: "Agra",
    nights: 2,
    direction: "DoubleTree by Hilton Hotel Agra",
    notes: "Two nights protect a relaxed Taj sunrise and Agra Fort day.",
  },
  {
    segment: "Mountain/river stop",
    checkIn: "Nov 14, 2026",
    checkOut: "Nov 16, 2026",
    city: "Rishikesh",
    nights: 2,
    direction: "No central Hilton; research quality riverside hotel",
    notes: "Two nights give one full restorative day by the Ganga.",
  },
  {
    segment: "Rajasthan heritage",
    checkIn: "Nov 16, 2026",
    checkOut: "Nov 18, 2026",
    city: "Jaipur",
    nights: 2,
    direction: "Hilton Jaipur or DoubleTree by Hilton Jaipur Amer",
    notes: "Two nights gives one full sightseeing day.",
  },
  {
    segment: "Lake city",
    checkIn: "Nov 18, 2026",
    checkOut: "Nov 20, 2026",
    city: "Udaipur",
    nights: 2,
    direction: "No direct Hilton; research quality lake/city palace area hotel",
    notes: "Two nights give one full relaxed lake-and-palace day.",
  },
  {
    segment: "Final buffer",
    checkIn: "Nov 20, 2026",
    checkOut: "Nov 21, 2026",
    city: "Mumbai",
    nights: 1,
    direction: "Hilton Mumbai International Airport or city hotel",
    notes: "Use the room for rest and packing before leaving around midnight for the 03:15 flight.",
  },
];

export const places: Place[] = [
  {
    id: "mumbai",
    name: "Mumbai",
    emoji: "🌊",
    role: "Arrival city, final buffer, sea-facing urban energy",
    why: "Mumbai is the best soft landing and ending point for this route: international access, strong hotels, good food, and flexible sightseeing that can expand or contract depending on energy.",
    history: "Modern Mumbai grew from a group of islands into a major port city under Portuguese and then British influence. Its colonial architecture, trading history, film industry, and coastal neighborhoods make it cosmopolitan and layered.",
    focus: "Gateway of India, Marine Drive sunset, Colaba, Kala Ghoda, optional Bandra-Worli Sea Link drive, optional Elephanta if the buffer day feels comfortable.",
    comfort: "Keep first and last Mumbai days flexible. Use the final buffer for rest, shopping, laundry, or a low-pressure outing.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marine%20Drive%20Mumbai%20Bombay%20by%20Vibhabamba.jpg",
    imageCredit: "Wikimedia Commons",
    visualLink: "https://www.google.com/search?tbm=isch&q=Mumbai+Marine+Drive+Gateway+of+India",
    accent: "coastal",
  },
  {
    id: "ellora",
    name: "Ellora Caves",
    emoji: "🪨",
    role: "Protected UNESCO highlight and one of the trip's strongest cultural anchors",
    why: "Ellora is worth protecting because it is not just another monument stop. The caves show Buddhist, Hindu, and Jain traditions in one dramatic complex, with Kailasa Temple standing out.",
    history: "The caves were carved between roughly the 6th and 10th centuries. Kailasa Temple was excavated downward from a single rock mass, which is why it feels more like a carved mountain than a built temple.",
    focus: "Kailasa Temple first, then selected Buddhist and Jain caves if energy allows. Daulatabad Fort only as an optional add-on.",
    comfort: "Do not add Ajanta on this version. Ellora deserves the focus, and the plan is intentionally relaxed.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kailasa%20Temple%20at%20Ellora%20%28Cave%2016%29.jpg",
    imageCredit: "Wikimedia Commons",
    visualLink: "https://www.google.com/search?tbm=isch&q=Ellora+Caves+Kailasa+Temple",
    accent: "heritage",
  },
  {
    id: "delhi",
    name: "Delhi",
    emoji: "🏛️",
    role: "Capital city history, Mughal architecture, gardens, and old-city texture",
    why: "Delhi gives the route historical depth before Agra and Jaipur. It is the place to feel the long arc of North Indian capitals, imperial tombs, old markets, and calm garden spaces.",
    history: "Delhi has been the site of several historic cities, shaped by sultanates, the Mughal Empire, British rule, and independent India. Humayun's Tomb helped influence later Mughal monuments.",
    focus: "Humayun's Tomb, Lodhi Garden, India Gate, and a short Old Delhi food/market block.",
    comfort: "Choose two or three strong stops instead of trying to cover everything. Old Delhi is memorable but tiring, so keep it bounded.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Humayun%27s%20tomb%201569-70.jpg",
    imageCredit: "Wikimedia Commons",
    visualLink: "https://www.google.com/search?tbm=isch&q=Delhi+Red+Fort+Humayun%27s+Tomb+India+Gate",
    accent: "capital",
  },
  {
    id: "agra",
    name: "Agra",
    emoji: "🕌",
    role: "Taj Mahal sunrise without a punishing day trip",
    why: "Agra is included for the Taj Mahal, but the overnight is the key comfort choice. Sleeping in Agra makes sunrise realistic and removes the pressure of a same-day Delhi return.",
    history: "Agra was a major Mughal capital. The Taj Mahal was built in the 17th century by Shah Jahan as a mausoleum for Mumtaz Mahal; Agra Fort shows the imperial side of the same period.",
    focus: "Taj Mahal sunrise, Agra Fort, Mehtab Bagh or a quiet sunset viewpoint.",
    comfort: "Keep Agra to one night. The main value is doing the Taj well, then continuing to Jaipur without lingering too long.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taj%20Mahal%2C%20Agra%2C%20India%20edit2.jpg",
    imageCredit: "Wikimedia Commons",
    visualLink: "https://www.google.com/search?tbm=isch&q=Taj+Mahal+Agra+Fort",
    accent: "taj",
  },
  {
    id: "jaipur",
    name: "Jaipur",
    emoji: "🏰",
    role: "Rajasthan forts, palaces, color, craft, and classic architecture",
    why: "Jaipur adds the palace-and-fort layer of Rajasthan without overcomplicating the route. It is visually rich, easy to understand in one full day, and pairs naturally after Agra.",
    history: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was planned with wide streets and organized markets. The old city is famous for pink-toned facades, while Amber Fort connects to older Rajput history.",
    focus: "Amber Fort, City Palace, Hawa Mahal photo stop, Jantar Mantar if interested, optional shopping for textiles or jewelry.",
    comfort: "Start early at Amber Fort, then keep the afternoon flexible. Shopping can easily make the day too long.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jaipur%2003-2016%2004%20Amber%20Fort.jpg",
    imageCredit: "Wikimedia Commons",
    visualLink: "https://www.google.com/search?tbm=isch&q=Jaipur+Amber+Fort+City+Palace+Hawa+Mahal",
    accent: "palace",
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    emoji: "⛰️",
    role: "Required mountain/river stop and the trip's restorative reset",
    why: "Rishikesh is the mountain-adjacent place in this version: Himalayan foothills, the Ganga river, suspension bridges, evening aarti, and a slower atmosphere.",
    history: "Rishikesh has long been associated with pilgrimage, yoga, ashrams, and the Ganga. In modern travel it is also known for riverfront stays and access to the lower Himalayas.",
    focus: "Ganga Aarti, river walk, Beatles Ashram or yoga/spa, cafe time with river views.",
    comfort: "This should stay relaxed. Do not add a distant hill station or long excursion; the point is the river, foothills, and recovery.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/The_Ganga_at_Rishikesh.jpg",
    imageCredit: "Wikimedia Commons",
    visualLink: "https://www.google.com/search?tbm=isch&q=Rishikesh+Ganga+Aarti+Himalayan+foothills",
    accent: "mountain",
  },
  {
    id: "udaipur",
    name: "Udaipur",
    emoji: "🏞️",
    role: "Scenic lake city, palaces, Aravalli views, and a graceful finish before Mumbai",
    why: "Udaipur adds beauty without the intensity of a larger city. The lakes, palaces, old lanes, and Aravalli setting make it one of the most visually rewarding stops.",
    history: "Udaipur was founded in the 16th century by Maharana Udai Singh II and became the capital of Mewar. Its identity is tied to Rajput history, lakefront palaces, and defensive geography.",
    focus: "City Palace, Lake Pichola, Jagdish Temple, old city walk, optional boat ride or lakeside dinner.",
    comfort: "Do the palace and lake slowly. Avoid distant day trips; the value is the setting and atmosphere.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20view%20of%20City%20Palace%20%28Udaipur%29%2C%20Rajasthan%2C%20India%20-2.jpg",
    imageCredit: "Wikimedia Commons",
    visualLink: "https://www.google.com/search?tbm=isch&q=Udaipur+Lake+Pichola+City+Palace+Aravalli+hills",
    accent: "lake",
  },
];
