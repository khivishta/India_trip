export type Language = "en" | "it";

export type LocalizedLocation = {
  name: string;
  what: string;
  why: string;
  history: string;
  notice: string;
  pace: string;
};

export type LocalizedPlaceDetail = {
  name: string;
  role: string;
  overview: string;
  context: string;
  bestUse: string;
  locations: LocalizedLocation[];
};

export const uiText = {
  en: {
    brand: "India 2026",
    route: "Route",
    snapshot: "Snapshot",
    dailyPlan: "Daily Plan",
    transport: "Transport",
    agency: "Agency",
    places: "Places",
    visa: "Visa",
    health: "Health",
    hotels: "Hotels",
    language: "Language",
    english: "English",
    italian: "Italiano",
    eyebrow: "India 2026 relaxed family route",
    heroTitle: "Mumbai to mountains, palaces, caves and lake country",
    heroLead:
      "A comfort-first itinerary for Oct 24-Nov 8, 2026, keeping Ellora Caves, Rishikesh, Udaipur and a protected Mumbai buffer.",
    dailyPlanCta: "Daily plan",
    placeGuideCta: "Place guide",
    routeCheckCta: "Route check",
    dates: "Oct 24-Nov 8, 2026",
    nights: "15 nights",
    flights: "5 planned flight legs",
    drives: "6 short or moderate drives",
    rishikeshIncluded: "Rishikesh included as the mountain/river stop",
    buffer: "Protected Mumbai buffer on Nov 7 in Mumbai",
    placeEyebrow: "Place detail guide",
    placeTitle: "Specific places, history, and how to enjoy them calmly",
    placeIntro:
      "Each chapter explains the destination and the exact sights inside it, so the plan is about real places rather than just city names.",
    overview: "Overview",
    context: "History / context",
    bestUse: "How to use the stop",
    what: "What it is",
    why: "Why visit",
    history: "Know more",
    notice: "What to notice",
    pace: "Pacing advice",
    imageLink: "Open image inspiration",
    footer:
      "Comfort rule: protect the Rishikesh mountain stop, keep Ellora focused, and preserve the final Mumbai buffer.",
    navLabel: "Trip sections",
    routeEyebrow: "Route flow",
    routeTitle: "Built around beauty without overworking the trip",
    requiredStop: "Required stop:",
    rishikeshCallout:
      "Rishikesh is included for Nov 2-Nov 4, with one full day by the Ganga and Himalayan foothills before continuing to Udaipur.",
    itineraryEyebrow: "Daily itinerary",
    itineraryTitle: "Dates, sleep city, transport and comfort notes",
    sleepIn: "Sleep in",
    flight: "Flight",
    privateCar: "Private car",
    taxiTransfer: "Taxi / transfer",
    boatFerry: "Boat / ferry",
    routeCheckEyebrow: "Route check",
    routeCheckTitle: "Flight, car and connection details",
    routeCheckIntro:
      "The one caution leg is Rishikesh/Dehradun to Udaipur; book only a clean same-ticket connection.",
    dateHeader: "Date",
    transferHeader: "Transfer",
    modeHeader: "Mode",
    lengthHeader: "Length",
    statusHeader: "Status",
    sourceFor: "Source for",
    hotelsEyebrow: "Hotel plan",
    hotelsTitle: "Exact nights by base city",
    nightSingular: "night",
    nightPlural: "nights",
  },
  it: {
    brand: "India 2026",
    route: "Percorso",
    snapshot: "Sintesi",
    dailyPlan: "Programma",
    transport: "Trasporti",
    agency: "Agenzia",
    places: "Luoghi",
    visa: "Visti",
    health: "Salute",
    hotels: "Hotel",
    language: "Lingua",
    english: "Inglese",
    italian: "Italiano",
    eyebrow: "India 2026, itinerario rilassato in famiglia",
    heroTitle: "Da Mumbai alle montagne, ai palazzi, alle grotte e alla città dei laghi",
    heroLead:
      "Un itinerario comodo dal 24 ottobre all'8 novembre 2026, con Ellora, Rishikesh, Udaipur e un giorno cuscinetto a Mumbai.",
    dailyPlanCta: "Programma",
    placeGuideCta: "Guida luoghi",
    routeCheckCta: "Controllo percorso",
    dates: "24 ottobre-8 novembre 2026",
    nights: "15 notti",
    flights: "5 tratte aeree pianificate",
    drives: "6 spostamenti brevi o moderati in auto",
    rishikeshIncluded: "Rishikesh incluso come tappa montagna/fiume",
    buffer: "Giorno cuscinetto protetto a Mumbai il 7 novembre",
    placeEyebrow: "Guida dettagliata",
    placeTitle: "Luoghi specifici, storia e come visitarli con calma",
    placeIntro:
      "Ogni capitolo spiega la destinazione e i singoli luoghi da vedere, così il programma non resta solo un elenco di città.",
    overview: "Panoramica",
    context: "Storia / contesto",
    bestUse: "Come usare la tappa",
    what: "Che cos'è",
    why: "Perché visitarlo",
    history: "Dettagli",
    notice: "Cosa osservare",
    pace: "Consiglio di ritmo",
    imageLink: "Apri immagini",
    footer:
      "Regola di comfort: proteggere Rishikesh, tenere Ellora focalizzata e conservare il cuscinetto finale a Mumbai.",
    navLabel: "Sezioni del viaggio",
    routeEyebrow: "Percorso",
    routeTitle: "Pensato per vedere luoghi belli senza sovraccaricare il viaggio",
    requiredStop: "Tappa necessaria:",
    rishikeshCallout:
      "Rishikesh è inclusa dal 2 al 4 novembre, con una giornata intera sul Ganga e ai piedi dell'Himalaya prima di proseguire verso Udaipur.",
    itineraryEyebrow: "Programma giorno per giorno",
    itineraryTitle: "Date, città dove si dorme, trasporti e note di comfort",
    sleepIn: "Si dorme a",
    flight: "Volo",
    privateCar: "Auto privata",
    taxiTransfer: "Taxi / trasferimento",
    boatFerry: "Barca / traghetto",
    routeCheckEyebrow: "Controllo percorso",
    routeCheckTitle: "Dettagli su voli, auto e coincidenze",
    routeCheckIntro:
      "La tratta da Rishikesh/Dehradun a Udaipur è l'unico punto delicato: prenotare solo una coincidenza pulita sullo stesso biglietto.",
    dateHeader: "Data",
    transferHeader: "Spostamento",
    modeHeader: "Mezzo",
    lengthHeader: "Durata",
    statusHeader: "Stato",
    sourceFor: "Fonte per",
    hotelsEyebrow: "Piano hotel",
    hotelsTitle: "Notti esatte per città base",
    nightSingular: "notte",
    nightPlural: "notti",
  },
} satisfies Record<Language, Record<string, string>>;

export const placeDetails: Record<string, Record<Language, LocalizedPlaceDetail>> = {
  mumbai: {
    en: {
      name: "Mumbai",
      role: "Arrival city, final buffer, sea-facing urban energy",
      overview:
        "Mumbai works best as the trip's soft landing and final reset. It is busy and layered, but it also has flexible sightseeing: you can do a coastal drive, a historic gateway, a cafe neighborhood, or simply rest after international travel.",
      context:
        "The modern city grew from seven islands into a major port, first under Portuguese control and then under the British East India Company and the British Raj. That history shows up in Gothic, Indo-Saracenic, Art Deco, and port-city architecture.",
      bestUse:
        "Use Mumbai for arrival recovery and the protected final buffer. Do not over-schedule it; let it absorb jet lag, laundry, shopping, traffic, or flight delays.",
      locations: [
        {
          name: "Marine Drive",
          what: "A long seaside promenade curving along Back Bay.",
          why: "It gives an easy first impression of Mumbai without needing a complicated sightseeing day.",
          history: "The Art Deco apartment blocks nearby reflect Bombay's 20th-century growth and coastal urban planning.",
          notice: "Go near sunset for the sea wall, lights, and slower evening pace.",
          pace: "Easy. Pair with dinner or a short drive, not a full day of touring.",
        },
        {
          name: "Gateway of India and Colaba",
          what: "A ceremonial waterfront arch beside the harbor, close to Colaba's cafes and shops.",
          why: "It is one of the clearest visual symbols of Mumbai and easy to combine with a gentle walk.",
          history: "The Gateway was built to commemorate the 1911 royal visit of King George V and Queen Mary.",
          notice: "Look at the harbor setting, the Taj Mahal Palace Hotel facade, and the mix of local visitors and travelers.",
          pace: "Easy to moderate depending on heat and crowds. Keep it short if arrival fatigue is high.",
        },
        {
          name: "Kala Ghoda",
          what: "A compact arts and heritage district with galleries, cafes, museums, and colonial buildings.",
          why: "It is a good low-pressure way to experience Mumbai's culture without long drives between sights.",
          history: "The district sits among South Mumbai's historic civic and commercial architecture.",
          notice: "Street-scale details: facades, bookshops, gallery signage, and cafes.",
          pace: "Good for a half-day if everyone is rested; optional if the buffer day is needed for recovery.",
        },
      ],
    },
    it: {
      name: "Mumbai",
      role: "Citta di arrivo, cuscinetto finale, energia urbana sul mare",
      overview:
        "Mumbai funziona come ingresso morbido nel viaggio e come reset finale. E intensa, ma permette visite flessibili: passeggiata sul mare, architettura storica, quartieri con cafe oppure semplice riposo dopo il volo.",
      context:
        "La citta moderna nasce da sette isole trasformate in un grande porto, prima sotto influenza portoghese e poi britannica. Questa storia si vede nell'architettura gotica, indo-saracena, Art Deco e portuale.",
      bestUse:
        "Usarla per recuperare all'arrivo e per il cuscinetto finale. Non riempirla troppo: deve assorbire jet lag, bucato, shopping, traffico o ritardi.",
      locations: [
        {
          name: "Marine Drive",
          what: "Un lungo lungomare curvo affacciato su Back Bay.",
          why: "Da una prima impressione di Mumbai senza richiedere una giornata impegnativa.",
          history: "Gli edifici Art Deco vicini raccontano la crescita di Bombay nel Novecento.",
          notice: "Meglio al tramonto, per il mare, le luci e il ritmo piu lento della sera.",
          pace: "Facile. Abbinarlo a cena o a un breve giro in auto.",
        },
        {
          name: "Gateway of India e Colaba",
          what: "Un arco monumentale sul porto, vicino ai cafe e negozi di Colaba.",
          why: "E uno dei simboli piu riconoscibili di Mumbai ed e semplice da visitare.",
          history: "Fu costruito per commemorare la visita reale del 1911 di Giorgio V e della regina Mary.",
          notice: "Osservare il porto, la facciata del Taj Mahal Palace Hotel e la vita locale.",
          pace: "Facile o moderato a seconda di caldo e folla. Tenerlo breve se c'e stanchezza.",
        },
        {
          name: "Kala Ghoda",
          what: "Distretto compatto di arte, gallerie, musei, cafe e palazzi storici.",
          why: "Permette di capire il lato culturale di Mumbai senza troppi spostamenti.",
          history: "Si trova tra edifici civici e commerciali storici di South Mumbai.",
          notice: "Dettagli di facciate, librerie, gallerie e cafe.",
          pace: "Mezza giornata se si e riposati; opzionale se serve il giorno cuscinetto.",
        },
      ],
    },
  },
  ellora: {
    en: {
      name: "Aurangabad / Ellora Caves",
      role: "UNESCO cave complex and protected highlight",
      overview:
        "Ellora is the reason for the Aurangabad stop. It is not just a temple visit; it is a vast rock-cut complex where Buddhist, Hindu, and Jain monuments sit close together in one landscape.",
      context:
        "The caves were carved between roughly the 6th and 10th centuries. The most famous monument, Kailasa Temple, was excavated from a single rock mass from the top down.",
      bestUse:
        "Make Ellora the main day and resist adding Ajanta. A focused Ellora visit is more memorable and keeps the trip from becoming exhausting.",
      locations: [
        {
          name: "Kailasa Temple, Cave 16",
          what: "A monumental Hindu temple carved out of one continuous rock mass.",
          why: "It is one of the most astonishing architectural moments of the trip.",
          history: "Associated with the Rashtrakuta period, it represents Mount Kailash, the mythic home of Shiva.",
          notice: "Look at the vertical excavation logic: courtyards, elephants, towers, and carved panels all cut from rock.",
          pace: "Start here while energy is highest. Give it unhurried time before seeing other caves.",
        },
        {
          name: "Buddhist caves",
          what: "Monastic halls, shrines, and prayer spaces carved into the rock.",
          why: "They show Ellora's religious range and quieter atmosphere beyond Kailasa.",
          history: "These caves connect to earlier Buddhist monastic traditions in western India.",
          notice: "Notice columns, seated Buddhas, simple cells, and the shift from functional monastery to sacred space.",
          pace: "Choose a few representative caves rather than trying to see all of them.",
        },
        {
          name: "Jain caves",
          what: "Later caves with refined carving and a calmer scale.",
          why: "They complete the picture of Ellora as a multi-faith complex.",
          history: "The Jain caves reflect the continued importance of patronage and devotional carving after the major Hindu works.",
          notice: "Look for delicate ornament, smaller spaces, and a different devotional mood.",
          pace: "Visit if energy remains after Kailasa and selected Buddhist caves.",
        },
      ],
    },
    it: {
      name: "Aurangabad / Grotte di Ellora",
      role: "Complesso UNESCO e momento culturale da proteggere",
      overview:
        "Ellora e il motivo della tappa ad Aurangabad. Non e una semplice visita a un tempio: e un grande complesso scavato nella roccia con monumenti buddhisti, induisti e giainisti nello stesso paesaggio.",
      context:
        "Le grotte furono scavate circa tra il VI e il X secolo. Il tempio piu famoso, Kailasa, fu ricavato da un unico blocco roccioso, lavorando dall'alto verso il basso.",
      bestUse:
        "Fare di Ellora la giornata principale e non aggiungere Ajanta. Una visita focalizzata e piu memorabile e meno stancante.",
      locations: [
        {
          name: "Tempio Kailasa, grotta 16",
          what: "Un tempio induista monumentale ricavato da un'unica massa di roccia.",
          why: "E uno dei momenti architettonici piu impressionanti del viaggio.",
          history: "Legato al periodo Rashtrakuta, rappresenta il Monte Kailash, dimora mitica di Shiva.",
          notice: "Osservare cortili, elefanti, torri e pannelli scolpiti tutti nella roccia.",
          pace: "Iniziare da qui con energia alta e senza fretta.",
        },
        {
          name: "Grotte buddhiste",
          what: "Sale monastiche, santuari e spazi di preghiera scavati nella roccia.",
          why: "Mostrano la varieta religiosa di Ellora e un'atmosfera piu silenziosa.",
          history: "Rimandano alle tradizioni monastiche buddhiste dell'India occidentale.",
          notice: "Colonne, Buddha seduti, celle semplici e passaggio da monastero a spazio sacro.",
          pace: "Sceglierne alcune rappresentative, senza cercare di vedere tutto.",
        },
        {
          name: "Grotte giainiste",
          what: "Grotte piu tarde, con incisioni raffinate e scala piu intima.",
          why: "Completano l'idea di Ellora come complesso multi-religioso.",
          history: "Riflettono la continuita del mecenatismo e della devozione dopo le grandi opere induiste.",
          notice: "Decorazioni fini, spazi piu piccoli e un tono devozionale diverso.",
          pace: "Da fare se resta energia dopo Kailasa e alcune grotte buddhiste.",
        },
      ],
    },
  },
  delhi: {
    en: {
      name: "Delhi",
      role: "Capital layers: Mughal gardens, old markets, and civic monuments",
      overview:
        "Delhi is the trip's historical bridge. It prepares you for Agra and Jaipur by showing how many capitals, empires, neighborhoods, and religious communities overlap in North India.",
      context:
        "The city has been remade repeatedly by sultanates, the Mughals, the British, and modern India. That is why the stops feel so different from one another even within the same day.",
      bestUse:
        "Pick two or three strong places and keep Old Delhi bounded. Delhi rewards focus more than checklist sightseeing, so make the old-city portion a short food/market block.",
      locations: [
        {
          name: "Humayun's Tomb",
          what: "A Mughal garden-tomb set in a formal charbagh garden.",
          why: "It is beautiful, calm, and historically important before seeing the Taj Mahal.",
          history: "Built in the 16th century for Emperor Humayun, it helped shape later Mughal tomb architecture.",
          notice: "Look at the symmetry, red sandstone, white marble details, garden axis, and elevated platform.",
          pace: "Prioritize this as the main Delhi monument; it is rewarding without being chaotic.",
        },
        {
          name: "Lodhi Garden",
          what: "A landscaped park with 15th-century tombs and local walking paths.",
          why: "It gives Delhi breathing room between heavier sightseeing stops.",
          history: "The tombs are from the Sayyid and Lodi periods, before the high Mughal era.",
          notice: "Notice how monuments are integrated into daily city life: walkers, families, and gardens.",
          pace: "Easy. Use it as a calmer morning or late-afternoon stop.",
        },
        {
          name: "Old Delhi",
          what: "Dense lanes, markets, food streets, and rickshaw energy.",
          why: "It can be memorable and atmospheric, but it should stay bounded because it is tiring.",
          history: "Old Delhi grew around Shahjahanabad, the 17th-century Mughal capital founded by Shah Jahan.",
          notice: "Focus on one guided market block rather than wandering endlessly: food streets, spice-market texture, or Chandni Chowk.",
          pace: "Moderate to intense. Limit the time and pair it with a quieter stop.",
        },
        {
          name: "India Gate / New Delhi axis",
          what: "Ceremonial avenues and civic architecture from imperial and modern Delhi.",
          why: "It shows the contrast between older Delhi and planned New Delhi.",
          history: "The area was planned under British rule and later became central to independent India's capital identity.",
          notice: "Look at scale, symmetry, open space, and the shift from market density to civic formality.",
          pace: "Best as a drive-by or short stop, not a long visit.",
        },
      ],
    },
    it: {
      name: "Delhi",
      role: "Strati di capitale: giardini moghul, mercati antichi e monumenti civici",
      overview:
        "Delhi e il ponte storico del viaggio. Prepara ad Agra e Jaipur mostrando capitali, imperi, quartieri e comunita religiose sovrapposte.",
      context:
        "La citta e stata trasformata da sultanati, Moghul, britannici e India moderna. Per questo le tappe della stessa giornata sembrano mondi diversi.",
      bestUse:
        "Scegliere due o tre luoghi forti e tenere Old Delhi limitata. Delhi funziona meglio con focus, quindi la parte di citta storica deve essere un breve blocco cibo/mercati.",
      locations: [
        {
          name: "Tomba di Humayun",
          what: "Tomba-giardino moghul in un giardino formale charbagh.",
          why: "E bella, relativamente calma e importante prima del Taj Mahal.",
          history: "Costruita nel XVI secolo per l'imperatore Humayun, influenzo l'architettura funeraria moghul successiva.",
          notice: "Simmetria, arenaria rossa, marmo bianco, assi del giardino e piattaforma rialzata.",
          pace: "Da mettere come monumento principale di Delhi.",
        },
        {
          name: "Lodhi Garden",
          what: "Parco paesaggistico con tombe del XV secolo e percorsi per passeggiare.",
          why: "Da respiro tra visite piu intense.",
          history: "Le tombe appartengono ai periodi Sayyid e Lodi, precedenti al grande periodo moghul.",
          notice: "Monumenti integrati nella vita quotidiana: persone che camminano, famiglie, giardini.",
          pace: "Facile. Ideale al mattino o nel tardo pomeriggio.",
        },
        {
          name: "Old Delhi",
          what: "Vicoli fitti, mercati, cibo di strada e riscio.",
          why: "Puo essere memorabile e piena di atmosfera, ma deve restare limitata perche stanca.",
          history: "Old Delhi cresce intorno a Shahjahanabad, capitale moghul del XVII secolo fondata da Shah Jahan.",
          notice: "Meglio un blocco guidato di mercato: cibo, spezie o Chandni Chowk.",
          pace: "Moderato-intenso. Limitare il tempo e abbinarlo a una tappa calma.",
        },
        {
          name: "India Gate / asse di New Delhi",
          what: "Viali cerimoniali e architettura civica.",
          why: "Mostra il contrasto tra la Delhi storica e la New Delhi pianificata.",
          history: "L'area fu pianificata sotto il dominio britannico e poi divenne centrale per l'India indipendente.",
          notice: "Scala, simmetria, spazi aperti e passaggio dai mercati alla forma civica.",
          pace: "Meglio come breve stop o giro in auto.",
        },
      ],
    },
  },
  agra: {
    en: {
      name: "Agra",
      role: "Taj Mahal sunrise and Mughal riverfront power",
      overview:
        "Agra is included for the Taj Mahal, but the overnight makes the difference. It turns a rushed monument check into a calm sunrise experience and leaves room for Agra Fort.",
      context:
        "Agra was one of the great Mughal capitals. Its monuments are tied to imperial ambition, riverfront planning, military power, and personal memory.",
      bestUse:
        "Keep Agra to one night. Do the Taj well, see Agra Fort, and avoid adding too much before the Jaipur drive.",
      locations: [
        {
          name: "Taj Mahal",
          what: "A white marble mausoleum on the Yamuna River.",
          why: "It is the iconic visual and emotional highlight of Agra.",
          history: "Built in the 17th century by Shah Jahan for Mumtaz Mahal, it combines Persianate, Mughal, and garden-tomb traditions.",
          notice: "Look beyond the postcard view: inlay work, calligraphy scale, changing light, and the garden axis.",
          pace: "Go at sunrise if possible. Keep the visit focused and unrushed.",
        },
        {
          name: "Agra Fort",
          what: "A massive red sandstone fort-palace complex.",
          why: "It explains the political and military side of Mughal Agra.",
          history: "Developed especially under Akbar and later Mughal rulers, it served as a seat of power and residence.",
          notice: "Notice the transition from defensive walls to delicate palace spaces and river views.",
          pace: "Moderate. Visit after breakfast or before sunset depending on Taj timing.",
        },
        {
          name: "Mehtab Bagh",
          what: "A garden across the Yamuna from the Taj Mahal.",
          why: "It gives a quieter, more distant view of the Taj and the river setting.",
          history: "The garden sits within the Mughal riverfront landscape that framed monuments from both banks.",
          notice: "Watch how the Taj aligns across the river, especially late in the day.",
          pace: "Optional and easy. Good if the group wants a calm sunset rather than another heavy monument.",
        },
      ],
    },
    it: {
      name: "Agra",
      role: "Taj Mahal all'alba e potere moghul sul fiume",
      overview:
        "Agra e inclusa per il Taj Mahal, ma dormire li cambia tutto: invece di una visita corsa diventa un'alba calma, con spazio anche per Agra Fort.",
      context:
        "Agra fu una grande capitale moghul. I suoi monumenti parlano di ambizione imperiale, paesaggio fluviale, potere militare e memoria personale.",
      bestUse:
        "Tenere Agra a una notte. Fare bene il Taj, vedere Agra Fort e non caricare troppo prima della strada per Jaipur.",
      locations: [
        {
          name: "Taj Mahal",
          what: "Mausoleo in marmo bianco sul fiume Yamuna.",
          why: "E il simbolo visivo ed emotivo di Agra.",
          history: "Costruito nel XVII secolo da Shah Jahan per Mumtaz Mahal, unisce tradizioni persiane, moghul e del giardino funerario.",
          notice: "Non solo la foto classica: intarsi, calligrafia, luce che cambia e asse del giardino.",
          pace: "Andare all'alba se possibile. Visita focalizzata e senza fretta.",
        },
        {
          name: "Agra Fort",
          what: "Grande complesso fortificato in arenaria rossa.",
          why: "Spiega il lato politico e militare dell'Agra moghul.",
          history: "Sviluppato soprattutto sotto Akbar e altri sovrani moghul, fu sede di potere e residenza.",
          notice: "Dal muro difensivo agli spazi di palazzo piu delicati e alle viste sul fiume.",
          pace: "Moderato. Dopo colazione o verso sera, secondo l'orario del Taj.",
        },
        {
          name: "Mehtab Bagh",
          what: "Giardino sull'altra riva dello Yamuna rispetto al Taj Mahal.",
          why: "Offre una vista piu tranquilla e distante del Taj nel paesaggio fluviale.",
          history: "Fa parte del sistema moghul di giardini e monumenti lungo il fiume.",
          notice: "L'allineamento del Taj dall'altra riva, specialmente nel tardo pomeriggio.",
          pace: "Opzionale e facile, buono per un tramonto calmo.",
        },
      ],
    },
  },
  jaipur: {
    en: {
      name: "Jaipur",
      role: "Rajasthan forts, palace culture, color, craft, and planned-city geometry",
      overview:
        "Jaipur gives the trip its Rajasthan chapter: hill forts, pink facades, royal courtyards, textiles, jewelry, and a very different urban rhythm from Delhi or Mumbai.",
      context:
        "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was planned with organized markets and broad streets. It sits between older Rajput hill power and a more formal planned capital.",
      bestUse:
        "Start with Amber Fort, then choose palace/city stops based on energy. Shopping is optional because it can easily stretch the day.",
      locations: [
        {
          name: "Amber Fort",
          what: "A hilltop fort-palace complex outside the old city.",
          why: "It is Jaipur's strongest architectural stop and gives the best sense of Rajput power and setting.",
          history: "Amber was the older seat of the Kachwaha rulers before Jaipur city became the planned capital.",
          notice: "Courtyards, mirror work, defensive hills, gateways, and views back across the landscape.",
          pace: "Go early. Treat it as the main event of the day.",
        },
        {
          name: "City Palace",
          what: "A palace complex in the heart of Jaipur's old city.",
          why: "It connects royal history to the planned city and gives a softer counterpoint to Amber Fort.",
          history: "The palace became the administrative and ceremonial center after Jaipur was founded.",
          notice: "Look for painted gates, courtyards, textiles, arms displays, and the blend of Rajput and Mughal influence.",
          pace: "Moderate. Good after lunch if energy remains.",
        },
        {
          name: "Hawa Mahal",
          what: "The famous facade with many small windows facing the street.",
          why: "It is a quick, highly visual Jaipur moment.",
          history: "Built in 1799, it allowed royal women to observe street life while remaining screened from public view.",
          notice: "The facade is the main moment; the street context matters as much as the building.",
          pace: "Short photo stop unless the group specifically wants to enter.",
        },
        {
          name: "Jantar Mantar",
          what: "An outdoor astronomical observatory with monumental instruments.",
          why: "It shows Jaipur's scientific and planning side, not only palaces.",
          history: "Built by Sawai Jai Singh II, who was deeply interested in astronomy and measurement.",
          notice: "The scale of the instruments and how architecture becomes a measuring device.",
          pace: "Optional. Best with a guide; otherwise it can feel abstract.",
        },
      ],
    },
    it: {
      name: "Jaipur",
      role: "Fortezze del Rajasthan, cultura di palazzo, colore, artigianato e citta pianificata",
      overview:
        "Jaipur e il capitolo Rajasthan del viaggio: fortezze sulle colline, facciate rosa, cortili reali, tessuti, gioielli e un ritmo urbano diverso da Delhi o Mumbai.",
      context:
        "Fondata nel 1727 da Maharaja Sawai Jai Singh II, Jaipur fu pianificata con mercati organizzati e strade ampie. Collega il potere Rajput delle colline a una capitale formale.",
      bestUse:
        "Iniziare con Amber Fort, poi scegliere palazzo e citta secondo l'energia. Lo shopping resta opzionale perche puo allungare molto la giornata.",
      locations: [
        {
          name: "Amber Fort",
          what: "Complesso fortezza-palazzo su una collina fuori dalla citta vecchia.",
          why: "E la visita architettonica piu forte di Jaipur e mostra potere Rajput e paesaggio.",
          history: "Amber era la sede piu antica dei sovrani Kachwaha prima della capitale pianificata di Jaipur.",
          notice: "Cortili, specchi, colline difensive, portali e viste sul territorio.",
          pace: "Andare presto. Considerarlo il momento principale della giornata.",
        },
        {
          name: "City Palace",
          what: "Complesso di palazzi nel cuore della citta vecchia.",
          why: "Collega la storia reale alla citta pianificata e bilancia Amber Fort.",
          history: "Divenne centro amministrativo e cerimoniale dopo la fondazione di Jaipur.",
          notice: "Porte dipinte, cortili, tessuti, armi e influenze Rajput e Moghul.",
          pace: "Moderato. Buono dopo pranzo se resta energia.",
        },
        {
          name: "Hawa Mahal",
          what: "La celebre facciata con molte piccole finestre sulla strada.",
          why: "E un momento visivo rapido e molto riconoscibile.",
          history: "Costruito nel 1799, permetteva alle donne reali di osservare la strada restando schermate.",
          notice: "La facciata e il contesto della strada sono il punto principale.",
          pace: "Breve stop fotografico, salvo interesse specifico a entrare.",
        },
        {
          name: "Jantar Mantar",
          what: "Osservatorio astronomico all'aperto con strumenti monumentali.",
          why: "Mostra il lato scientifico e pianificatore di Jaipur.",
          history: "Costruito da Sawai Jai Singh II, appassionato di astronomia e misurazione.",
          notice: "La scala degli strumenti e come l'architettura diventa misurazione.",
          pace: "Opzionale. Meglio con guida.",
        },
      ],
    },
  },
  rishikesh: {
    en: {
      name: "Rishikesh",
      role: "Required mountain/river stop and restorative reset",
      overview:
        "Rishikesh is not just a city checkbox; it is the trip's nature and river chapter. The value is the Ganga, foothill air, suspension bridges, ashram culture, and a slower day between Rajasthan and Udaipur.",
      context:
        "Rishikesh is a pilgrimage and yoga center where the Ganga comes out of the Himalayan foothills toward the plains. Its modern travel identity mixes spirituality, riverfront stays, cafes, and light adventure.",
      bestUse:
        "Keep this stop gentle. The point is not to drive deep into the mountains, but to feel the foothills and river without exhausting the group.",
      locations: [
        {
          name: "Ganga riverfront",
          what: "The river banks, ghats, bridges, and walking areas around the Ganga.",
          why: "This is the emotional center of the Rishikesh stop.",
          history: "The Ganga is sacred across Hindu tradition; Rishikesh is one of the places where pilgrimage, river ritual, and Himalayan geography meet.",
          notice: "Notice water color, sound, temple bells, evening light, and the mountains tightening around the river.",
          pace: "Easy. Build the day around slow river time rather than distant excursions.",
        },
        {
          name: "Ganga Aarti",
          what: "An evening river ritual with lamps, chanting, and offerings.",
          why: "It gives the stop atmosphere and a sense of place without needing a long tour.",
          history: "Aarti is a devotional ritual of light; in Rishikesh it is tied directly to the river.",
          notice: "Watch the lamps, rhythm of chanting, families gathering, and reflection of light on the water.",
          pace: "Arrive early enough to settle. Keep dinner simple afterward.",
        },
        {
          name: "Beatles Ashram / Chaurasi Kutia",
          what: "A former ashram site made famous by the Beatles' 1968 stay.",
          why: "It adds a cultural layer beyond temples and river views.",
          history: "The Beatles studied Transcendental Meditation here, and the site became part of Rishikesh's global yoga story.",
          notice: "Look for mural art, meditation cells, forested paths, and the contrast between ruin and pop-culture memory.",
          pace: "Optional half-day element. Skip if the group wants pure rest.",
        },
        {
          name: "Lakshman Jhula / river bridges",
          what: "Suspension bridge area over the Ganga with temples, views, and foot traffic.",
          why: "It gives the classic Rishikesh visual: river, bridge, temples, and foothills in one view.",
          history: "The bridge area is associated with pilgrimage routes and local legends connected to Lakshmana from the Ramayana tradition.",
          notice: "Look downriver and upriver; the composition of bridge, river, temples, and hills is the main point.",
          pace: "Best as a scenic walk, not a rushed transfer stop.",
        },
      ],
    },
    it: {
      name: "Rishikesh",
      role: "Tappa montagna/fiume necessaria e momento di recupero",
      overview:
        "Rishikesh non e solo una citta da segnare: e il capitolo natura e fiume del viaggio. Il valore e il Ganga, l'aria delle colline, i ponti sospesi, gli ashram e una giornata piu lenta tra Rajasthan e Udaipur.",
      context:
        "Rishikesh e centro di pellegrinaggio e yoga, dove il Ganga esce dai contrafforti himalayani verso la pianura. Oggi unisce spiritualita, soggiorni sul fiume, cafe e leggera avventura.",
      bestUse:
        "Mantenere la tappa dolce. Non serve andare molto dentro le montagne: basta sentire fiume e colline senza stancarsi.",
      locations: [
        {
          name: "Lungofiume del Ganga",
          what: "Sponde, ghat, ponti e passeggiate intorno al Ganga.",
          why: "E il centro emotivo della tappa a Rishikesh.",
          history: "Il Ganga e sacro nella tradizione induista; a Rishikesh pellegrinaggio, rituale fluviale e geografia himalayana si incontrano.",
          notice: "Colore e suono dell'acqua, campane, luce serale e montagne intorno al fiume.",
          pace: "Facile. Costruire la giornata intorno al fiume, non a escursioni lontane.",
        },
        {
          name: "Ganga Aarti",
          what: "Rituale serale sul fiume con lampade, canti e offerte.",
          why: "Da atmosfera e senso del luogo senza richiedere un tour lungo.",
          history: "L'aarti e un rituale devozionale della luce; a Rishikesh e legato direttamente al fiume.",
          notice: "Lampade, ritmo dei canti, famiglie riunite e riflessi sull'acqua.",
          pace: "Arrivare un po' prima. Cena semplice dopo.",
        },
        {
          name: "Beatles Ashram / Chaurasi Kutia",
          what: "Ex ashram reso famoso dal soggiorno dei Beatles nel 1968.",
          why: "Aggiunge un livello culturale oltre a templi e fiume.",
          history: "I Beatles studiarono qui la Meditazione Trascendentale, rendendo il luogo parte della storia globale dello yoga.",
          notice: "Murales, celle di meditazione, sentieri nel verde e contrasto tra rovina e memoria pop.",
          pace: "Opzionale mezza giornata. Saltare se serve riposo puro.",
        },
        {
          name: "Lakshman Jhula / ponti sul fiume",
          what: "Area dei ponti sospesi sul Ganga, con templi, viste e passaggio pedonale.",
          why: "Da l'immagine classica di Rishikesh: fiume, ponte, templi e colline.",
          history: "L'area e legata a percorsi di pellegrinaggio e leggende locali connesse a Lakshmana del Ramayana.",
          notice: "Guardare a monte e a valle: ponte, fiume, templi e colline insieme.",
          pace: "Meglio come passeggiata panoramica, non come stop di fretta.",
        },
      ],
    },
  },
  udaipur: {
    en: {
      name: "Udaipur",
      role: "Lake city, palaces, Aravalli views, and a graceful finish",
      overview:
        "Udaipur is the scenic exhale after the Rishikesh connection. It is visually rich but softer than Jaipur: lake reflections, palace terraces, old lanes, temples, and dinners with water views.",
      context:
        "Founded in the 16th century by Maharana Udai Singh II, Udaipur became the capital of Mewar. Its identity comes from Rajput resilience, lake planning, and the defensive geography of the Aravalli hills.",
      bestUse:
        "Do fewer things slowly. The lake setting is the reason to be here, so avoid distant day trips unless everyone is unusually energetic.",
      locations: [
        {
          name: "City Palace",
          what: "A large palace complex rising above Lake Pichola.",
          why: "It is the main architectural and historical anchor of Udaipur.",
          history: "Built and expanded over generations of Mewar rulers, it shows Rajput court life and lakefront strategy.",
          notice: "Terraces, mirrored rooms, courtyards, lake views, and how the palace uses height.",
          pace: "Moderate. Go early or later in the day and avoid rushing the museum route.",
        },
        {
          name: "Lake Pichola",
          what: "The central lake that shapes Udaipur's most famous views.",
          why: "It gives Udaipur its beauty and calm; the city makes most sense from the water or lakeside.",
          history: "The lake predates the formal city and was expanded as Udaipur developed.",
          notice: "Watch the palace silhouettes, ghats, islands, and Aravalli hills.",
          pace: "Easy. A boat ride or lakeside dinner is enough; do not overload the day.",
        },
        {
          name: "Jagdish Temple and old city lanes",
          what: "A central temple and surrounding streets near the palace.",
          why: "They add human scale after the grand palace and lake views.",
          history: "Jagdish Temple dates to the 17th century and is dedicated to Vishnu.",
          notice: "Carved exterior, steps, street activity, small shops, and old-city rhythm.",
          pace: "Short to moderate walk. Best when heat is manageable.",
        },
      ],
    },
    it: {
      name: "Udaipur",
      role: "Citta del lago, palazzi, viste sugli Aravalli e finale elegante",
      overview:
        "Udaipur e il respiro scenico dopo la connessione da Rishikesh. E ricca visivamente ma piu morbida di Jaipur: riflessi sul lago, terrazze di palazzo, vicoli, templi e cene sull'acqua.",
      context:
        "Fondata nel XVI secolo da Maharana Udai Singh II, Udaipur divenne capitale del Mewar. La sua identita nasce dalla storia Rajput, dai laghi e dalla geografia difensiva degli Aravalli.",
      bestUse:
        "Fare meno cose e farle lentamente. Il lago e il motivo della tappa; evitare escursioni lontane se non c'e molta energia.",
      locations: [
        {
          name: "City Palace",
          what: "Grande complesso di palazzi sopra Lake Pichola.",
          why: "E l'ancora architettonica e storica principale di Udaipur.",
          history: "Costruito ed espanso da generazioni di sovrani Mewar, mostra vita di corte e strategia sul lago.",
          notice: "Terrazze, sale con specchi, cortili, viste sul lago e uso dell'altezza.",
          pace: "Moderato. Meglio presto o tardi, senza correre nel percorso museale.",
        },
        {
          name: "Lake Pichola",
          what: "Il lago centrale che definisce le viste piu famose di Udaipur.",
          why: "Da bellezza e calma alla citta; Udaipur si capisce meglio dall'acqua o dalla riva.",
          history: "Il lago precede la citta formale e fu ampliato con lo sviluppo di Udaipur.",
          notice: "Sagome dei palazzi, ghat, isole e colline Aravalli.",
          pace: "Facile. Giro in barca o cena sul lago bastano.",
        },
        {
          name: "Jagdish Temple e vicoli della citta vecchia",
          what: "Tempio centrale e strade intorno al palazzo.",
          why: "Danno scala umana dopo i palazzi e le viste ampie.",
          history: "Jagdish Temple risale al XVII secolo ed e dedicato a Vishnu.",
          notice: "Esterno scolpito, scalinate, vita di strada, piccoli negozi e ritmo della citta vecchia.",
          pace: "Passeggiata breve o moderata, meglio con caldo gestibile.",
        },
      ],
    },
  },
};

const cityChapterExpansions: Record<string, Record<Language, Pick<LocalizedPlaceDetail, "overview" | "context" | "bestUse">>> = {
  mumbai: {
    en: {
      overview:
        "Mumbai is not only the arrival airport; it is the trip's first adjustment to India. The city is large, fast and humid, but the planned Mumbai moments are deliberately soft: sea, historic harbor, arts district, optional market color and a final buffer before departure.\n\nThe city works best when it is treated as atmosphere rather than a checklist. Marine Drive, Colaba and Kala Ghoda give three different faces of Mumbai without forcing the family into long transfers on the first days.",
      context:
        "Historically, Mumbai grew from a group of islands into a major port city through trade, reclamation and colonial administration. Its built fabric reflects that layered story: waterfront monuments, Gothic civic buildings, Indo-Saracenic details, Art Deco apartments and modern infrastructure all sit close together.\n\nThat mixture is why Mumbai should not be reduced to one monument. It is a city of arrival, commerce, film, finance, sea air and neighborhoods, and the itinerary uses it as a living urban introduction rather than a heavy museum stop.",
      bestUse:
        "Use the first Mumbai stay to recover, orient and enjoy one or two beautiful places. Use the final Mumbai stay as a protected buffer for rest, packing, shopping, flight delays or an optional heritage add-on like Elephanta.\n\nThe comfort rule is simple: never spend the Mumbai buffer trying to compensate for missed sightseeing elsewhere. Its job is to make the whole trip feel calm at the end.",
    },
    it: {
      overview:
        "Mumbai non è solo l'aeroporto di arrivo; è il primo adattamento del viaggio all'India. La città è grande, veloce e umida, ma i momenti previsti sono volutamente morbidi: mare, porto storico, quartiere artistico, mercato opzionale e cuscinetto finale prima della partenza.\n\nFunziona meglio se viene vissuta come atmosfera, non come checklist. Marine Drive, Colaba e Kala Ghoda mostrano tre volti diversi di Mumbai senza obbligare la famiglia a lunghi spostamenti nei primi giorni.",
      context:
        "Storicamente Mumbai è cresciuta da un gruppo di isole a grande città portuale attraverso commercio, bonifiche e amministrazione coloniale. Il tessuto urbano riflette questa stratificazione: monumenti sul mare, edifici civici gotici, dettagli indo-saraceni, palazzi Art Deco e infrastrutture moderne convivono a poca distanza.\n\nPer questo Mumbai non va ridotta a un solo monumento. È città di arrivo, commercio, cinema, finanza, aria di mare e quartieri; l'itinerario la usa come introduzione urbana viva, non come tappa museale pesante.",
      bestUse:
        "Usare il primo soggiorno a Mumbai per recuperare, orientarsi e vedere uno o due luoghi belli. Usare l'ultimo soggiorno come cuscinetto protetto per riposo, valigie, shopping, ritardi o un'aggiunta opzionale come Elephanta.\n\nLa regola di comfort è semplice: non consumare il cuscinetto finale per recuperare visite mancate altrove. Il suo compito è far finire tutto il viaggio con calma.",
    },
  },
  ellora: {
    en: {
      overview:
        "Aurangabad is included because it gives access to Ellora, one of the most important heritage moments of the route. The stop is not about the city alone; it is about using a quieter base to protect enough time and energy for the caves.\n\nEllora is unusually powerful because multiple religious traditions appear in one rock-cut landscape. The family can see Buddhist monastic spaces, the monumental Hindu Kailasa Temple and later Jain caves without changing regions or adding another transfer.",
      context:
        "The caves were excavated over centuries, roughly from the 6th to 10th centuries, and they show how patronage, devotion and engineering worked together in the Deccan. Kailasa is the most dramatic example because it was carved downward from one rock mass rather than built upward in separate blocks.\n\nThe historical value is not only age. Ellora shows continuity: different communities, dynasties and artistic languages sharing the same escarpment, with architecture created by removing stone until space, sculpture and sacred form appeared.",
      bestUse:
        "Make Ellora the protected main event. Start early, use a guide, spend real time at Kailasa and then choose representative Buddhist and Jain caves instead of trying to see every chamber.\n\nAjanta should remain optional. It is exceptional, but adding it automatically would create a second long cave day and risk making the Aurangabad stop feel like work rather than wonder.",
    },
    it: {
      overview:
        "Aurangabad è inclusa perché permette l'accesso a Ellora, uno dei momenti di patrimonio più importanti del percorso. La tappa non riguarda solo la città; serve a usare una base più tranquilla per proteggere tempo ed energia per le grotte.\n\nEllora è particolarmente potente perché diverse tradizioni religiose appaiono nello stesso paesaggio scavato nella roccia. La famiglia può vedere spazi monastici buddhisti, il monumentale tempio induista Kailasa e grotte giainiste più tarde senza cambiare regione o aggiungere trasferimenti.",
      context:
        "Le grotte furono scavate per secoli, circa dal VI al X secolo, e mostrano come mecenatismo, devozione e ingegneria lavorassero insieme nel Deccan. Kailasa è l'esempio più drammatico perché fu scolpito dall'alto verso il basso da un'unica massa rocciosa, non costruito verso l'alto con blocchi separati.\n\nIl valore storico non è solo l'età. Ellora mostra continuità: comunità, dinastie e linguaggi artistici diversi condividono la stessa scarpata, con architettura creata togliendo pietra finché apparivano spazio, scultura e forma sacra.",
      bestUse:
        "Fare di Ellora l'evento principale protetto. Partire presto, usare una guida, dare vero tempo a Kailasa e poi scegliere grotte buddhiste e giainiste rappresentative invece di vedere ogni ambiente.\n\nAjanta deve restare opzionale. È eccezionale, ma inserirla automaticamente creerebbe una seconda lunga giornata di grotte e rischierebbe di rendere la tappa ad Aurangabad faticosa invece che meravigliosa.",
    },
  },
  delhi: {
    en: {
      overview:
        "Delhi is the route's history bridge between Mumbai's coast and the imperial landscapes of Agra and Rajasthan. It is not a single-period city; it is a layered capital where garden tombs, planned avenues, old markets and modern traffic sit on top of one another.\n\nFor this itinerary, Delhi should be selective. The goal is to understand the arc of North Indian capitals without exhausting the family before Agra and Jaipur.",
      context:
        "Delhi has been remade by many powers: early Sultanate rulers, the Mughals, the British imperial capital and independent India. That is why the city can move in one day from a formal Mughal garden tomb to a public park with older tombs, then to Old Delhi market lanes and the planned New Delhi axis.\n\nThe historical story is contrast. Humayun's Tomb explains the garden-tomb language that prepares the eye for the Taj Mahal; Lodhi Garden shows older monuments inside daily life; Old Delhi gives market density; India Gate and the avenues show the capital as civic theatre.",
      bestUse:
        "Use Delhi as a curated day, not a conquest. Prioritize Humayun's Tomb and Lodhi Garden, keep Old Delhi bounded around food and markets, and treat India Gate/New Delhi as a short civic drive.\n\nThis keeps the day vivid but manageable. Delhi can easily become overwhelming if every famous site is added, so the itinerary protects meaning over quantity.",
    },
    it: {
      overview:
        "Delhi è il ponte storico del percorso tra la costa di Mumbai e i paesaggi imperiali di Agra e Rajasthan. Non è una città di un solo periodo: è una capitale stratificata in cui tombe-giardino, viali pianificati, mercati antichi e traffico moderno si sovrappongono.\n\nPer questo itinerario Delhi deve restare selettiva. L'obiettivo è capire l'arco delle capitali del Nord India senza stancare la famiglia prima di Agra e Jaipur.",
      context:
        "Delhi è stata rimodellata da molti poteri: primi sovrani del Sultanato, Moghul, capitale imperiale britannica e India indipendente. Per questo in una sola giornata si può passare da una tomba-giardino moghul a un parco pubblico con tombe più antiche, poi ai vicoli di mercato di Old Delhi e all'asse pianificato di New Delhi.\n\nLa storia qui è fatta di contrasti. La Tomba di Humayun spiega il linguaggio della tomba-giardino che prepara al Taj Mahal; Lodhi Garden mostra monumenti antichi dentro la vita quotidiana; Old Delhi dà densità di mercato; India Gate e i viali mostrano la capitale come teatro civico.",
      bestUse:
        "Usare Delhi come giornata curata, non come conquista. Dare priorità alla Tomba di Humayun e a Lodhi Garden, tenere Old Delhi limitata intorno a cibo e mercati, e trattare India Gate/New Delhi come breve giro civico.\n\nCosì la giornata resta vivida ma gestibile. Delhi può diventare facilmente eccessiva se si aggiunge ogni sito famoso, quindi l'itinerario protegge significato più che quantità.",
    },
  },
  agra: {
    en: {
      overview:
        "Agra is included for the Taj Mahal, but the overnight makes the visit qualitatively better. Instead of treating the Taj as a stop on a long road day, the family can see it at sunrise and let the monument feel calm, luminous and central.\n\nAgra also adds context. Agra Fort and Mehtab Bagh show that Mughal Agra was not only one mausoleum; it was a riverfront capital with military power, palace life, gardens and carefully staged views.",
      context:
        "The Mughal emperors made Agra one of their major capitals, and the city still carries that imperial geography along the Yamuna. The Taj expresses memory and idealized beauty, while Agra Fort expresses administration, defense and residence.\n\nSeeing both keeps the history balanced. The family understands Shah Jahan's world more fully: not only the grief and craft of the Taj, but also the fortified court and river landscape that surrounded Mughal power.",
      bestUse:
        "Keep Agra focused and short. Do the Taj properly at sunrise, use Agra Fort for context, and add Mehtab Bagh only if the group wants a calm sunset view.\n\nAvoid stuffing Agra with extras before the Jaipur drive. One excellent night and morning are better than turning the city into a tiring monument marathon.",
    },
    it: {
      overview:
        "Agra è inclusa per il Taj Mahal, ma dormirci cambia la qualità della visita. Invece di trattare il Taj come una sosta in una lunga giornata di strada, la famiglia può vederlo all'alba e lasciare che il monumento sia calmo, luminoso e centrale.\n\nAgra aggiunge anche contesto. Agra Fort e Mehtab Bagh mostrano che l'Agra moghul non era solo un mausoleo: era una capitale sul fiume con potere militare, vita di palazzo, giardini e viste accuratamente costruite.",
      context:
        "Gli imperatori moghul fecero di Agra una delle loro grandi capitali, e la città conserva ancora quella geografia imperiale lungo lo Yamuna. Il Taj esprime memoria e bellezza idealizzata, mentre Agra Fort esprime amministrazione, difesa e residenza.\n\nVedere entrambi mantiene la storia equilibrata. La famiglia comprende meglio il mondo di Shah Jahan: non solo il dolore e l'artigianato del Taj, ma anche la corte fortificata e il paesaggio fluviale intorno al potere moghul.",
      bestUse:
        "Tenere Agra focalizzata e breve. Fare bene il Taj all'alba, usare Agra Fort per il contesto e aggiungere Mehtab Bagh solo se il gruppo vuole una vista calma al tramonto.\n\nEvitare di riempire Agra di extra prima della strada per Jaipur. Una notte e una mattina eccellenti sono meglio di una maratona stancante di monumenti.",
    },
  },
  jaipur: {
    en: {
      overview:
        "Jaipur gives the trip its Rajasthan chapter: forts, palaces, planned streets, pink facades, craft markets and desert-edge color. It feels different from Delhi because the city was deliberately planned, with broad roads and organized bazaars set against older hill power.\n\nThe two-night stay allows the family to see Amber Fort properly and still have time for City Palace, Hawa Mahal and selected markets without turning the day into a race.",
      context:
        "Founded in 1727 by Sawai Jai Singh II, Jaipur became a planned capital that balanced royal ceremony, commerce and astronomy. Its old city plan, bazaars and monuments show a ruler interested not only in defense, but also in order, measurement and public urban form.\n\nAmber Fort adds the older layer. It explains the hilltop Rajput world before the planned city, while City Palace and Jantar Mantar show the shift toward an organized capital with court life and scientific ambition.",
      bestUse:
        "Start early with Amber Fort and make it the main architectural event. Then use the rest of Jaipur selectively: City Palace for court culture, Hawa Mahal for the visual icon, and one market block for craft and color.\n\nShopping should be curated and bounded. Jaipur can be wonderful for textiles and jewelry, but pressure and bargaining can drain energy quickly.",
    },
    it: {
      overview:
        "Jaipur dà al viaggio il capitolo Rajasthan: fortezze, palazzi, strade pianificate, facciate rosa, mercati artigianali e colori ai margini del deserto. È diversa da Delhi perché fu progettata intenzionalmente, con strade ampie e bazar organizzati accanto al più antico potere delle colline.\n\nLe due notti permettono alla famiglia di vedere bene Amber Fort e avere ancora tempo per City Palace, Hawa Mahal e mercati scelti senza trasformare la giornata in una corsa.",
      context:
        "Fondata nel 1727 da Sawai Jai Singh II, Jaipur divenne una capitale pianificata che univa cerimonia reale, commercio e astronomia. La pianta della città vecchia, i bazar e i monumenti mostrano un sovrano interessato non solo alla difesa, ma anche a ordine, misurazione e forma urbana pubblica.\n\nAmber Fort aggiunge lo strato più antico. Spiega il mondo rajput di collina precedente alla città pianificata, mentre City Palace e Jantar Mantar mostrano il passaggio a una capitale ordinata, con vita di corte e ambizione scientifica.",
      bestUse:
        "Iniziare presto con Amber Fort e farne l'evento architettonico principale. Poi usare il resto di Jaipur in modo selettivo: City Palace per la cultura di corte, Hawa Mahal per l'icona visiva e un blocco di mercato per artigianato e colore.\n\nLo shopping deve essere curato e limitato. Jaipur può essere splendida per tessuti e gioielli, ma pressione e contrattazione possono consumare energia rapidamente.",
    },
  },
  rishikesh: {
    en: {
      overview:
        "Rishikesh is the necessary mountain and river pause. It changes the trip from monuments, flights and drives into foothill air, water, yoga, bridges and slower movement.\n\nThe stay matters because it is not trying to reach deep Himalayan scenery. Instead, it gives the family a manageable mountain feeling with the Ganga, evening aarti, yoga or ashram time and views that are beautiful without long drives.",
      context:
        "Rishikesh is a pilgrimage and yoga center at the point where the Ganga comes through the Himalayan foothills toward the plains. Its identity combines sacred geography, ashram culture, modern wellness travel and the visual drama of river bridges and hills.\n\nThe town became globally famous through yoga and meditation, but its deeper importance is older: river devotion, pilgrimage routes and the feeling of threshold between plains and mountains.",
      bestUse:
        "Keep Rishikesh restorative. Protect the full day for the riverfront, Ganga Aarti, a gentle yoga or ashram experience and a slow bridge walk.\n\nDo not add long mountain excursions. The purpose is to feel the foothills and recover before Udaipur, not to create another demanding travel day.",
    },
    it: {
      overview:
        "Rishikesh è la pausa necessaria di montagna e fiume. Cambia il viaggio da monumenti, voli e auto a aria di collina, acqua, yoga, ponti e movimento più lento.\n\nLa tappa conta perché non cerca paesaggi himalayani profondi. Offre invece alla famiglia una sensazione di montagna gestibile con il Ganga, l'aarti serale, yoga o ashram e viste belle senza lunghi spostamenti.",
      context:
        "Rishikesh è centro di pellegrinaggio e yoga nel punto in cui il Ganga attraversa i contrafforti himalayani verso la pianura. La sua identità unisce geografia sacra, cultura degli ashram, viaggio wellness moderno e la forza visiva di ponti sul fiume e colline.\n\nLa città è diventata famosa nel mondo per yoga e meditazione, ma la sua importanza più profonda è più antica: devozione al fiume, percorsi di pellegrinaggio e sensazione di soglia tra pianura e montagne.",
      bestUse:
        "Mantenere Rishikesh rigenerante. Proteggere la giornata intera per lungofiume, Ganga Aarti, un'esperienza leggera di yoga o ashram e una passeggiata lenta sui ponti.\n\nNon aggiungere lunghe escursioni in montagna. Lo scopo è sentire le colline e recuperare prima di Udaipur, non creare un'altra giornata di viaggio impegnativa.",
    },
  },
  udaipur: {
    en: {
      overview:
        "Udaipur is the scenic exhale after Rishikesh and the connected-flight compromise. It is still Rajasthan, but the mood is softer than Jaipur: lake reflections, white palaces, old lanes, temples, terraces and dinners by the water.\n\nThe city belongs in the route because it gives beauty without needing another fort-heavy day. Its best moments are visual and atmospheric, which makes it a good late-trip stop.",
      context:
        "Founded in the 16th century by Maharana Udai Singh II, Udaipur became the capital of Mewar. Its setting in the Aravalli hills and around Lake Pichola shaped the city's defensive, ceremonial and scenic identity.\n\nThe lake is not decoration; it is part of the urban structure. Palaces, ghats, islands and viewpoints are organized around water, so Udaipur's history is inseparable from landscape planning.",
      bestUse:
        "Use Udaipur slowly. City Palace is the main historical anchor, Lake Pichola is the scenic heart, and Jagdish Temple/old lanes add human scale.\n\nAvoid distant day trips unless the family has unusual energy. The value of Udaipur is being there: seeing the lake change with light, walking a little, and ending the route gracefully before Mumbai.",
    },
    it: {
      overview:
        "Udaipur è il respiro scenico dopo Rishikesh e il compromesso del volo con coincidenza. È ancora Rajasthan, ma l'atmosfera è più morbida di Jaipur: riflessi sul lago, palazzi bianchi, vicoli, templi, terrazze e cene sull'acqua.\n\nLa città appartiene al percorso perché offre bellezza senza richiedere un'altra giornata pesante di fortezze. I suoi momenti migliori sono visivi e atmosferici, quindi funziona bene verso la fine del viaggio.",
      context:
        "Fondata nel XVI secolo da Maharana Udai Singh II, Udaipur divenne capitale del Mewar. La posizione negli Aravalli e intorno a Lake Pichola modellò l'identità difensiva, cerimoniale e scenica della città.\n\nIl lago non è decorazione; è parte della struttura urbana. Palazzi, ghat, isole e punti vista sono organizzati intorno all'acqua, quindi la storia di Udaipur è inseparabile dalla pianificazione del paesaggio.",
      bestUse:
        "Usare Udaipur lentamente. City Palace è l'ancora storica principale, Lake Pichola è il cuore scenico, e Jagdish Temple/vicoli aggiungono scala umana.\n\nEvitare escursioni lontane salvo energia insolita. Il valore di Udaipur è esserci: vedere il lago cambiare con la luce, camminare un po' e chiudere il percorso con grazia prima di Mumbai.",
    },
  },
};

Object.entries(cityChapterExpansions).forEach(([placeId, localized]) => {
  (["en", "it"] as Language[]).forEach((language) => {
    placeDetails[placeId][language].overview = localized[language].overview;
    placeDetails[placeId][language].context = localized[language].context;
    placeDetails[placeId][language].bestUse = localized[language].bestUse;
  });
});
