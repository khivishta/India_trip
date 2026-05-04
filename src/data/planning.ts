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
  gallery?: string[];
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

type DetailSection = {
  title: string;
  body: string;
};

function buildPaceDetail(name: string, text: string, language: Language) {
  if (language === "it") {
    return `${text} Per ${name}, il punto è proteggere energia e attenzione: meglio una visita ben guidata, con un inizio e una fine chiari, che aggiungere tempo solo per riempire la giornata.`;
  }

  return `${text} For ${name}, the point is to protect energy and attention: a well-guided visit with a clear start and finish is better than adding time just to fill the day.`;
}

function buildTicketDetail(name: string, text: string, language: Language) {
  if (language === "it") {
    return `${text} La prenotazione per ${name} deve ridurre attriti sul posto: ingresso, guida, autista e tempi vanno coordinati in modo che la visita resti fluida e non diventi una coda di decisioni.`;
  }

  return `${text} Booking support for ${name} should remove friction on the ground: entry, guide, driver and timing should be coordinated so the visit feels smooth rather than a chain of small decisions.`;
}

const detailNotes: Partial<Record<string, Record<Language, string[]>>> = {
  "mumbai:Marine Drive": {
    en: [
      "Marine Drive is not a monument in the usual sense; it is an urban experience. The point is the long curve of Back Bay, the sea wall, the evening walkers, the skyline and the Art Deco apartment fronts that turn a simple promenade into one of Mumbai's most recognizable public rooms.",
      "Its value for this itinerary is emotional rather than checklist-based. After arrival, it gives the family a low-effort way to feel Mumbai: salt air, sunset, traffic glow, street snacks nearby and a view that does not require tickets, queues or a guide.",
      "Look for the curve known as the Queen's Necklace after dark, when the lights trace the bay. Pair it with dinner and keep it flexible; if jet lag is heavy, this can be shortened without losing the spirit of the stop.",
    ],
    it: [
      "Marine Drive non è un monumento nel senso classico; è un'esperienza urbana. Il punto è la lunga curva di Back Bay, il muretto sul mare, le passeggiate serali, lo skyline e le facciate Art Deco che trasformano un lungomare semplice in uno degli spazi pubblici più riconoscibili di Mumbai.",
      "Il suo valore per questo itinerario è emotivo più che da checklist. Dopo l'arrivo permette di sentire Mumbai con poco sforzo: aria di mare, tramonto, luci del traffico, snack nelle vicinanze e una vista senza biglietti, code o guida.",
      "Osservare la curva chiamata Queen's Necklace dopo il tramonto, quando le luci disegnano la baia. Abbinarla a una cena e tenerla flessibile; se il jet lag è forte, si può accorciare senza perdere il senso della tappa.",
    ],
  },
  "mumbai:Gateway of India / Colaba": {
    en: [
      "The Gateway of India was built as a ceremonial harbor arch and still works as Mumbai's symbolic front door. Its Indo-Saracenic form, waterfront position and proximity to the Taj Mahal Palace Hotel make it a compact lesson in Bombay's colonial-era confidence and port-city identity.",
      "Colaba matters because the monument is not isolated. The surrounding streets, cafes, bookshops, causeway shops and harbor activity show how a formal landmark becomes part of everyday city life.",
      "For the family, this should be a focused morning or late-afternoon block: see the arch, look back at the hotel facade, walk a little in Colaba and stop before heat and crowds turn it into work.",
    ],
    it: [
      "Il Gateway of India nacque come arco cerimoniale sul porto e funziona ancora come porta simbolica di Mumbai. La forma indo-saracena, la posizione sull'acqua e la vicinanza al Taj Mahal Palace Hotel raccontano in poco spazio l'identità portuale e coloniale di Bombay.",
      "Colaba è importante perché il monumento non vive da solo. Strade, caffè, librerie, negozi di Causeway e movimento del porto mostrano come un luogo formale entri nella vita quotidiana della città.",
      "Per la famiglia deve restare un blocco mirato al mattino o nel tardo pomeriggio: vedere l'arco, osservare la facciata dell'hotel, passeggiare un po' a Colaba e fermarsi prima che caldo e folla lo rendano faticoso.",
    ],
  },
  "mumbai:Bandra-Worli Sea Link": {
    en: [
      "Bandra-Worli Sea Link is Mumbai's modern bridge moment: a cable-stayed sea crossing that links Worli in South Mumbai with Bandra in the western suburbs. It is not a museum-style stop; it is best experienced as a scenic drive or a quick viewpoint moment, especially when the city lights and water make the structure feel dramatic.",
      "The bridge represents 21st-century Mumbai infrastructure and the city's constant negotiation with the sea, traffic and land constraints. It contrasts well with Marine Drive and the colonial-era Gateway because it shows the contemporary city: engineering, commuting, skyline and the ambition to connect neighborhoods across the bay.",
      "Keep it optional because it can add traffic depending on timing. If the group wants a modern Mumbai visual, ask the driver to include a Sea Link drive or Dadar/Bandra viewpoint during a relaxed Mumbai day; if jet lag or airport timing is tight, skip it without guilt.",
    ],
    it: [
      "Bandra-Worli Sea Link è il momento moderno dei ponti di Mumbai: un ponte strallato sul mare che collega Worli, a South Mumbai, con Bandra nei sobborghi occidentali. Non è una visita da museo; rende meglio come giro panoramico in auto o breve punto fotografico, soprattutto quando luci e acqua rendono la struttura scenografica.",
      "Il ponte racconta la Mumbai del XXI secolo: infrastrutture, traffico, skyline e il rapporto continuo della città con il mare e la mancanza di spazio. Fa un bel contrasto con Marine Drive e il Gateway of India, perché mostra la città contemporanea e non solo quella coloniale o storica.",
      "Va tenuto opzionale perché può aggiungere traffico secondo l'orario. Se il gruppo vuole un'immagine moderna di Mumbai, chiedere all'autista di includere il Sea Link o un punto vista da Dadar/Bandra in una giornata rilassata; se jet lag o tempi aeroporto pesano, si può saltare senza rimpianti.",
    ],
  },
  "mumbai:Kala Ghoda": {
    en: [
      "Kala Ghoda is Mumbai at street scale: galleries, cafes, heritage buildings, design shops and cultural institutions packed into a walkable district. It is less about one famous object and more about the feel of South Mumbai's educated, artistic, civic layer.",
      "The district sits among the city's historic commercial and institutional architecture, so even a short walk gives texture: facades, signage, courtyards, museum edges and bookshop windows.",
      "Use it as a curated wander, not an open-ended shopping mission. It works best after Gateway/Colaba, when everyone wants shade, coffee, design, books or a calmer cultural pause.",
    ],
    it: [
      "Kala Ghoda è Mumbai a scala di strada: gallerie, caffè, edifici storici, negozi di design e istituzioni culturali in un quartiere facile da percorrere. Non è un singolo oggetto famoso, ma il lato artistico, civico e colto di South Mumbai.",
      "Il quartiere si trova tra architetture commerciali e istituzionali storiche, quindi anche una breve passeggiata dà molti dettagli: facciate, insegne, cortili, musei e vetrine di librerie.",
      "Va usato come passeggiata curata, non come shopping senza fine. Funziona bene dopo Gateway/Colaba, quando servono ombra, caffè, design, libri o una pausa culturale più calma.",
    ],
  },
  "mumbai:Crawford Market / local shopping": {
    en: [
      "Crawford Market is useful because it shows trading Mumbai rather than postcard Mumbai. The area is busy, practical and sensory: produce, household goods, snacks, shop signs, old market architecture and the rhythm of people buying things for real life.",
      "The market dates from the colonial commercial city, but the reason to visit is the continuity of trade. It connects the port-city story to everyday buying, bargaining and movement.",
      "Keep it optional and bounded. A short, guided or driver-supported stop can be colorful and memorable; a long unstructured market visit can become tiring quickly.",
    ],
    it: [
      "Crawford Market è utile perché mostra la Mumbai del commercio, non solo quella da cartolina. È un'area intensa e pratica: prodotti, oggetti quotidiani, snack, insegne, architettura del mercato e persone che comprano davvero.",
      "Il mercato appartiene alla città commerciale coloniale, ma il motivo della visita è la continuità dello scambio. Collega la storia portuale alla vita quotidiana fatta di acquisti, contrattazione e movimento.",
      "Meglio tenerlo opzionale e limitato. Una breve sosta con guida o autista può essere colorata e memorabile; una visita lunga e senza struttura può stancare rapidamente.",
    ],
  },
  "mumbai:Elephanta Caves": {
    en: [
      "Elephanta is the only Mumbai add-on here that feels like a true heritage excursion. The island caves are known for rock-cut Shaiva sculpture, especially the monumental three-faced form of Shiva in the main cave.",
      "The visit is partly about the journey: ferry, harbor views, island approach, steps, monkeys, cave shade and carved stone. That makes it rewarding, but also less predictable than a city walk.",
      "Keep it as a buffer-day option. If everyone is rested, it adds a strong sacred-art chapter; if the group needs recovery, skipping it protects the comfort goal.",
    ],
    it: [
      "Elephanta è l'unica aggiunta di Mumbai che sembra una vera escursione di patrimonio. Le grotte dell'isola sono note per la scultura rupestre shaivita, soprattutto la grande figura a tre volti di Shiva nella grotta principale.",
      "La visita è anche il viaggio: traghetto, viste sul porto, arrivo sull'isola, scalini, scimmie, ombra delle grotte e pietra scolpita. È molto interessante, ma meno prevedibile di una passeggiata in città.",
      "Va tenuta come opzione del giorno cuscinetto. Se tutti sono riposati aggiunge un forte capitolo di arte sacra; se serve recupero, saltarla protegge il comfort del viaggio.",
    ],
  },
  "ellora:Kailasa Temple": {
    en: [
      "Kailasa is the reason Ellora is protected in the route. Unlike a temple built block by block, it was excavated from a single rock mass, with workers cutting downward to release courtyards, towers, halls, elephants and sculptural panels from the cliff.",
      "The temple evokes Mount Kailash, the mythic home of Shiva, so the architecture is both engineering and sacred imagination. Its drama comes from scale, but also from the idea that absence was carved into form.",
      "Start here with a guide and time. The best visit is slow: understand the vertical excavation, then look at the base, the bridge-like connections, the sculpted narratives and the way the whole courtyard feels like a mountain opened from within.",
    ],
    it: [
      "Kailasa è il motivo per cui Ellora va protetta nell'itinerario. A differenza di un tempio costruito blocco per blocco, fu scavato da un'unica massa rocciosa, lavorando dall'alto verso il basso per liberare cortili, torri, sale, elefanti e pannelli scolpiti dalla parete.",
      "Il tempio richiama il Monte Kailash, dimora mitica di Shiva, quindi l'architettura è insieme ingegneria e immaginazione sacra. La sua forza non è solo la scala, ma l'idea che il vuoto sia stato scolpito fino a diventare forma.",
      "Iniziare da qui con guida e tempo. La visita migliore è lenta: capire lo scavo verticale, poi guardare base, collegamenti, narrazioni scolpite e il modo in cui il cortile sembra una montagna aperta dall'interno.",
    ],
  },
  "ellora:Buddhist caves": {
    en: [
      "The Buddhist caves give Ellora its monastic foundation. They include cells, halls, shrines and teaching spaces, showing that rock-cut architecture was not only spectacle but also a practical environment for learning, worship and communal life.",
      "These caves are quieter than Kailasa, which is exactly why they matter. Columns, seated Buddhas, chaitya-like spaces and simple cells help explain the transition from living monastery to sacred monument.",
      "Do not try to see every chamber. Ask the guide to choose representative caves so the family understands the Buddhist layer without draining energy before or after Kailasa.",
    ],
    it: [
      "Le grotte buddhiste danno a Ellora la sua base monastica. Comprendono celle, sale, santuari e spazi di insegnamento, mostrando che l'architettura rupestre non era solo spettacolo ma anche ambiente pratico per studio, culto e vita comunitaria.",
      "Sono più silenziose di Kailasa, ed è proprio questo il loro valore. Colonne, Buddha seduti, spazi di preghiera e celle semplici aiutano a capire il passaggio da monastero vissuto a monumento sacro.",
      "Non bisogna vedere ogni stanza. Chiedere alla guida di scegliere grotte rappresentative permette di capire lo strato buddhista senza consumare energia prima o dopo Kailasa.",
    ],
  },
  "ellora:Jain caves": {
    en: [
      "The Jain caves complete Ellora's multi-faith story. They are later, more intimate and often more delicate in ornament, giving the complex a different devotional mood after the grandeur of Kailasa.",
      "Their value is in refinement: smaller spaces, detailed carving, disciplined iconography and a quieter sense of devotion. They show that Ellora remained meaningful beyond one dynasty or one religious community.",
      "Treat them as a selective final layer. If energy is good, they add depth; if the day is already full, it is better to see fewer Jain spaces well than rush through them.",
    ],
    it: [
      "Le grotte giainiste completano la storia multi-religiosa di Ellora. Sono più tarde, più intime e spesso più raffinate nella decorazione, con un tono devozionale diverso dopo la grandezza di Kailasa.",
      "Il loro valore sta nella finezza: spazi più piccoli, incisioni dettagliate, iconografia disciplinata e una devozione più silenziosa. Mostrano che Ellora rimase importante oltre una sola dinastia o comunità religiosa.",
      "Vanno trattate come strato finale selettivo. Se resta energia aggiungono profondità; se la giornata è già piena, meglio vederne poche bene che attraversarle di corsa.",
    ],
  },
  "ellora:Ajanta Caves": {
    en: [
      "Ajanta is historically exceptional but logistically demanding from Aurangabad. Its Buddhist caves are famous for paintings, narrative murals and sculpted spaces that preserve a different artistic world from Ellora.",
      "The reason it stays optional is not lack of value; it is pacing. Ajanta asks for a long road day and focused museum-like attention, while Ellora is already a major cave day protected in the core plan.",
      "Book it only if the family actively wants a second full cave day. If chosen, make it the only major activity, with a comfortable car, early start, guide and no evening commitments.",
    ],
    it: [
      "Ajanta è storicamente eccezionale ma logisticamente impegnativa da Aurangabad. Le sue grotte buddhiste sono celebri per pitture, narrazioni murali e spazi scolpiti che conservano un mondo artistico diverso da Ellora.",
      "Resta opzionale non perché valga poco, ma per il ritmo. Ajanta richiede una lunga giornata in auto e attenzione concentrata, mentre Ellora è già una grande giornata di grotte nel programma principale.",
      "Prenotarla solo se la famiglia desidera davvero una seconda giornata intera di grotte. Se si sceglie, deve essere l'unica attività importante, con auto comoda, partenza presto, guida e nessun impegno serale.",
    ],
  },
  "delhi:Humayun's Tomb": {
    en: [
      "Humayun's Tomb is the best Delhi monument for this route because it prepares the eye for the Taj Mahal without the crowds or emotional weight of Agra. It is a garden tomb, a dynastic memorial and a lesson in Mughal symmetry.",
      "Built in the 16th century for Emperor Humayun, it uses a charbagh garden plan, high platform, red sandstone and white marble details. The composition helps explain how Mughal architecture turned gardens, water and tombs into one ordered vision.",
      "Visit it slowly, preferably before Old Delhi. Look at the axial paths, the raised plinth, the dome, the smaller tombs around the complex and the calm created by geometry.",
    ],
    it: [
      "La Tomba di Humayun è il monumento di Delhi più utile per questo itinerario perché prepara lo sguardo al Taj Mahal senza la folla e il peso emotivo di Agra. È tomba-giardino, memoria dinastica e lezione di simmetria moghul.",
      "Costruita nel XVI secolo per l'imperatore Humayun, usa il giardino charbagh, una piattaforma rialzata, arenaria rossa e dettagli in marmo bianco. La composizione mostra come l'architettura moghul unisse giardino, acqua e tomba in una visione ordinata.",
      "Visitarla lentamente, preferibilmente prima di Old Delhi. Osservare gli assi del giardino, il basamento, la cupola, le tombe minori e la calma prodotta dalla geometria.",
    ],
  },
  "delhi:Qutub Minar complex": {
    en: [
      "Qutub Minar is optional because it is important but adds another large monument day. It belongs to Delhi's Sultanate layer, earlier than the high Mughal world of Humayun's Tomb and the Taj Mahal.",
      "The minaret and surrounding complex show early Indo-Islamic architecture in North India: reused materials, inscriptions, arches, courtyards and a vertical landmark that still dominates the site.",
      "Add it only if the group wants deeper Delhi history. With a guide it is fascinating; without context, it can feel like an extra stop when the day already has enough.",
    ],
    it: [
      "Qutub Minar è opzionale perché è importante ma aggiunge un altro grande monumento alla giornata. Appartiene allo strato del Sultanato di Delhi, precedente al mondo moghul maturo di Humayun e del Taj Mahal.",
      "Il minareto e il complesso circostante mostrano l'architettura indo-islamica antica del Nord India: materiali riutilizzati, iscrizioni, archi, cortili e un segno verticale che domina ancora il sito.",
      "Aggiungerlo solo se il gruppo vuole più storia di Delhi. Con una guida è affascinante; senza contesto può sembrare una tappa in più in una giornata già piena.",
    ],
  },
  "delhi:Lodhi Garden": {
    en: [
      "Lodhi Garden is not a heavy monument stop; it is a breathing space with history inside it. Tombs from the Sayyid and Lodi periods sit within a landscaped park used by walkers, families and locals.",
      "That mix is the point. The garden shows Delhi's older architecture as part of present-day city life, not sealed behind a museum boundary.",
      "Use it as a reset between bigger stops. A short walk gives tomb silhouettes, greenery, birds, shade and a calmer way to understand pre-Mughal Delhi.",
    ],
    it: [
      "Lodhi Garden non è una visita monumentale pesante; è uno spazio di respiro con storia al suo interno. Tombe dei periodi Sayyid e Lodi si trovano in un parco usato da persone che camminano, famiglie e residenti.",
      "Questo incontro è il punto della visita. Il giardino mostra l'architettura più antica di Delhi dentro la vita urbana attuale, non chiusa in un museo.",
      "Usarlo come pausa tra tappe più grandi. Una breve passeggiata offre sagome di tombe, verde, uccelli, ombra e un modo più calmo per capire la Delhi pre-moghul.",
    ],
  },
  "delhi:Old Delhi": {
    en: [
      "Old Delhi is the living remnant of Shahjahanabad, the 17th-century Mughal capital founded by Shah Jahan. It is dense, layered and intense: markets, food, mosques, lanes, rickshaws and trade all occupy the same urban fabric.",
      "Its value is atmosphere and continuity, not comfort. The old city can be one of the most memorable parts of Delhi, but only if it is framed carefully with a guide and a short route.",
      "Choose one focused block: Chandni Chowk, a spice-market glimpse, food streets or Jama Masjid exterior. Avoid wandering without limits; the goal is texture, not exhaustion.",
    ],
    it: [
      "Old Delhi è l'erede viva di Shahjahanabad, la capitale moghul del XVII secolo fondata da Shah Jahan. È densa, stratificata e intensa: mercati, cibo, moschee, vicoli, risciò e commercio occupano lo stesso tessuto urbano.",
      "Il suo valore è atmosfera e continuità, non comodità. Può essere una delle parti più memorabili di Delhi, ma solo se viene incorniciata bene con una guida e un percorso breve.",
      "Scegliere un blocco preciso: Chandni Chowk, uno sguardo al mercato delle spezie, strade del cibo o esterno della Jama Masjid. Evitare vagabondaggi senza limite; l'obiettivo è texture, non stanchezza.",
    ],
  },
  "delhi:Jama Masjid exterior / Chandni Chowk block": {
    en: [
      "This is a tighter version of Old Delhi: the mosque as anchor, Chandni Chowk as movement, and the market lanes as atmosphere. Jama Masjid was built under Shah Jahan and still gives the old city its monumental center of gravity.",
      "The exterior alone can be enough. The scale of steps, domes, minarets, pigeons, food lanes and traffic around the mosque communicates the setting without requiring a long interior visit.",
      "Use a guide for timing, dress rules and crowd management. The best version is short, respectful and vivid: arrive, understand the mosque's role, sample the market energy and leave before fatigue rises.",
    ],
    it: [
      "Questa è una versione più stretta di Old Delhi: la moschea come ancora, Chandni Chowk come movimento e i vicoli del mercato come atmosfera. Jama Masjid fu costruita sotto Shah Jahan e dà ancora alla città vecchia un centro monumentale.",
      "Anche solo l'esterno può bastare. Scala delle gradinate, cupole, minareti, folla, vie del cibo e traffico intorno alla moschea comunicano il luogo senza richiedere una lunga visita interna.",
      "Serve una guida per tempi, regole di abbigliamento e gestione della folla. La versione migliore è breve, rispettosa e vivida: arrivare, capire il ruolo della moschea, sentire il mercato e uscire prima della stanchezza.",
    ],
  },
  "delhi:India Gate / New Delhi axis": {
    en: [
      "India Gate and the New Delhi axis are about scale and planning rather than intimate sightseeing. They show the formal capital: broad avenues, ceremonial geometry, government buildings and open space.",
      "The contrast with Old Delhi is the main reason to include it. In the same city, the family can move from Mughal lanes to imperial planning and then to modern national symbolism.",
      "Treat it as a drive-by or short stop. It is useful context, but not a place to spend a long block when the day already includes richer walking and monument experiences.",
    ],
    it: [
      "India Gate e l'asse di New Delhi parlano di scala e pianificazione più che di visita intima. Mostrano la capitale formale: grandi viali, geometria cerimoniale, edifici governativi e spazi aperti.",
      "Il contrasto con Old Delhi è il motivo principale per includerla. Nella stessa città si passa dai vicoli moghul alla pianificazione imperiale e poi al simbolismo nazionale moderno.",
      "Meglio come giro in auto o breve sosta. È contesto utile, ma non un luogo per occupare troppo tempo quando la giornata contiene già monumenti e passeggiate più ricchi.",
    ],
  },
  "agra:Taj Mahal": {
    en: [
      "The Taj Mahal is not just a beautiful building; it is a carefully staged experience of approach, garden, water, marble, calligraphy and changing light. Built by Shah Jahan for Mumtaz Mahal, it turns grief, imperial power and craft into one controlled composition.",
      "The details matter as much as the silhouette. Look for pietra dura inlay, the way calligraphy changes scale to appear balanced, the symmetry of the garden and the Yamuna River behind the mausoleum.",
      "Sunrise is worth protecting because the visit becomes calmer and more atmospheric. Keep the morning focused: arrive early, move slowly, let the guide explain details, then leave before the day becomes crowded and tiring.",
    ],
    it: [
      "Il Taj Mahal non è solo un edificio bello; è un'esperienza costruita con avvicinamento, giardino, acqua, marmo, calligrafia e luce che cambia. Voluto da Shah Jahan per Mumtaz Mahal, trasforma lutto, potere imperiale e artigianato in una composizione controllata.",
      "I dettagli contano quanto la sagoma. Osservare gli intarsi in pietre dure, la calligrafia che cambia scala per apparire equilibrata, la simmetria del giardino e il fiume Yamuna dietro il mausoleo.",
      "L'alba va protetta perché rende la visita più calma e atmosferica. Tenere la mattina focalizzata: arrivare presto, muoversi lentamente, ascoltare la guida sui dettagli e uscire prima che folla e caldo la rendano faticosa.",
    ],
  },
  "agra:Agra Fort": {
    en: [
      "Agra Fort gives the political half of the Taj Mahal story. It is a fortified palace city in red sandstone and marble, associated especially with Akbar and later Mughal rulers.",
      "The fort explains power: walls, gates, audience halls, private palaces, river views and controlled movement. It shows how the Mughal court combined defense, administration, ceremony and residence.",
      "Visit it after the Taj or the previous evening depending on energy. The key is not to see every corner, but to understand the shift from military exterior to refined palace interiors.",
    ],
    it: [
      "Agra Fort dà la metà politica della storia del Taj Mahal. È una città-palazzo fortificata in arenaria rossa e marmo, legata soprattutto ad Akbar e ai successivi sovrani moghul.",
      "Il forte spiega il potere: mura, porte, sale d'udienza, palazzi privati, viste sul fiume e movimento controllato. Mostra come la corte moghul unisse difesa, amministrazione, cerimonia e residenza.",
      "Visitarlo dopo il Taj o la sera precedente secondo l'energia. L'obiettivo non è vedere ogni angolo, ma capire il passaggio dall'esterno militare agli interni raffinati.",
    ],
  },
  "agra:Mehtab Bagh": {
    en: [
      "Mehtab Bagh is valuable because it changes the Taj Mahal from object to landscape. From across the Yamuna, the mausoleum is seen with river, garden, distance and sky.",
      "Historically, it belongs to the broader Mughal riverfront setting, where gardens and monuments addressed both banks of the Yamuna. That context makes the Taj feel less isolated.",
      "Use it as an optional sunset decompression stop. It is calmer than another monument interior and works well if the family wants one more view without much walking.",
    ],
    it: [
      "Mehtab Bagh è prezioso perché trasforma il Taj Mahal da oggetto a paesaggio. Dall'altra riva dello Yamuna il mausoleo si vede con fiume, giardino, distanza e cielo.",
      "Storicamente appartiene al più ampio contesto fluviale moghul, in cui giardini e monumenti dialogavano con entrambe le rive dello Yamuna. Questo fa sentire il Taj meno isolato.",
      "Usarlo come sosta opzionale di decompressione al tramonto. È più calmo di un altro interno monumentale e funziona bene se si desidera un'ultima vista senza molta camminata.",
    ],
  },
  "jaipur:Amber Fort": {
    en: [
      "Amber Fort is Jaipur's strongest architectural experience because it combines hill setting, defensive power and palace refinement. It was the older Kachwaha seat before the planned city of Jaipur became the capital.",
      "The fort rewards looking at layers: gates, ramps, courtyards, mirrored rooms, painted details, water systems and views back across the Aravalli landscape. It is both fortress and courtly theatre.",
      "Go early and let this be the main event. A guide helps connect military route, royal spaces and decorative details; without pacing, the climb and crowds can overwhelm the day.",
    ],
    it: [
      "Amber Fort è l'esperienza architettonica più forte di Jaipur perché unisce collina, potere difensivo e raffinatezza di palazzo. Era la sede più antica dei Kachwaha prima che Jaipur diventasse capitale pianificata.",
      "Il forte va letto a strati: porte, rampe, cortili, sale a specchi, pitture, sistemi d'acqua e viste sugli Aravalli. È insieme fortezza e teatro di corte.",
      "Andare presto e considerarlo l'evento principale. Una guida aiuta a collegare percorso militare, spazi reali e dettagli decorativi; senza ritmo, salita e folla possono pesare.",
    ],
  },
  "jaipur:City Palace (Jaipur)": {
    en: [
      "City Palace shows Jaipur after the move from hill fort to planned city. It sits inside the old city grid and represents administration, ceremony, residence and collections rather than battlefield power.",
      "The palace is useful because it links architecture to living court culture: painted gates, courtyards, textiles, arms, royal objects and the continuing presence of Jaipur's royal legacy.",
      "Visit after Amber only if energy remains. Keep the route curated, because palace museums can become long; focus on gates, courtyards and a few collection rooms.",
    ],
    it: [
      "City Palace mostra Jaipur dopo il passaggio dalla fortezza di collina alla città pianificata. Si trova dentro la griglia della città vecchia e rappresenta amministrazione, cerimonia, residenza e collezioni più che potere militare.",
      "È utile perché collega architettura e cultura di corte viva: porte dipinte, cortili, tessuti, armi, oggetti reali e continuità dell'eredità regale di Jaipur.",
      "Visitarlo dopo Amber solo se resta energia. Tenere il percorso curato, perché i musei di palazzo possono allungarsi; concentrarsi su porte, cortili e poche sale di collezione.",
    ],
  },
  "jaipur:Hawa Mahal": {
    en: [
      "Hawa Mahal is mostly a facade experience, and that is not a weakness. Its many small windows, pink surface and street position make it one of Jaipur's clearest visual symbols.",
      "Built in 1799, it is associated with screened royal viewing of street life. The architecture turns privacy, ventilation, display and urban theatre into one highly photogenic front.",
      "For this trip, a short photo stop is usually enough. The best view is from across the street; entering is optional and should not crowd the Amber/City Palace day.",
    ],
    it: [
      "Hawa Mahal è soprattutto un'esperienza di facciata, e non è un limite. Le molte piccole finestre, la superficie rosa e la posizione sulla strada ne fanno uno dei simboli visivi più chiari di Jaipur.",
      "Costruito nel 1799, è legato all'osservazione schermata della vita di strada da parte delle donne reali. L'architettura trasforma privacy, ventilazione, rappresentazione e teatro urbano in una facciata molto fotografica.",
      "Per questo viaggio di solito basta una breve sosta fotografica. La vista migliore è dall'altro lato della strada; l'ingresso è opzionale e non deve appesantire la giornata Amber/City Palace.",
    ],
  },
  "jaipur:Jantar Mantar": {
    en: [
      "Jantar Mantar is Jaipur's scientific counterpoint to forts and palaces. Built by Sawai Jai Singh II, it uses architecture as instruments for observing time, celestial movement and measurement.",
      "The site can feel abstract unless explained. With a guide, the oversized forms become practical tools: shadows, arcs, angles and alignments built at monumental scale.",
      "Keep it optional. It is excellent for curious travelers, but if the family wants a softer day, Amber, City Palace and Hawa Mahal already give enough Jaipur.",
    ],
    it: [
      "Jantar Mantar è il contrappunto scientifico di Jaipur rispetto a forti e palazzi. Costruito da Sawai Jai Singh II, usa l'architettura come strumento per osservare tempo, movimento celeste e misurazione.",
      "Il sito può sembrare astratto se non spiegato. Con una guida, le forme enormi diventano strumenti pratici: ombre, archi, angoli e allineamenti costruiti a scala monumentale.",
      "Resta opzionale. È ottimo per viaggiatori curiosi, ma se la famiglia vuole una giornata più morbida, Amber, City Palace e Hawa Mahal bastano.",
    ],
  },
  "jaipur:Johari / Bapu Bazaar": {
    en: [
      "Johari and Bapu Bazaar show Jaipur as a working craft and trade city. Jewelry, textiles, block prints, scarves, bangles and street color connect the planned city to living commerce.",
      "The bazaars matter because Jaipur was designed with organized market streets. Shopping here is not only buying; it is seeing how craft identity, color and urban planning still meet.",
      "Use a guide or trusted shopping route to avoid pressure. One curated block is enough; the goal is atmosphere and a few good finds, not hours of bargaining.",
    ],
    it: [
      "Johari e Bapu Bazaar mostrano Jaipur come città di artigianato e commercio vivo. Gioielli, tessuti, block print, sciarpe, bracciali e colore di strada collegano la città pianificata al mercato reale.",
      "I bazar contano perché Jaipur fu progettata con strade commerciali organizzate. Fare shopping qui non significa solo comprare: significa vedere come identità artigianale, colore e urbanistica si incontrano ancora.",
      "Usare una guida o un percorso fidato per evitare pressione. Un blocco curato basta; l'obiettivo è atmosfera e qualche buon acquisto, non ore di contrattazione.",
    ],
  },
  "jaipur:Galta Ji temple": {
    en: [
      "Galta Ji adds a temple-and-hill layer outside the main Jaipur circuit. Its tanks, pavilions and setting in the Aravalli hills feel different from the planned geometry of the old city.",
      "The site is associated with Vaishnavite pilgrimage and historic water structures. It is valuable because it shows devotion, landscape and water management together.",
      "Keep it optional. If the Amber/City Palace day already feels full, skip it; if the group wants one more temple setting and has energy, it can be a memorable add-on.",
    ],
    it: [
      "Galta Ji aggiunge uno strato di templi e colline fuori dal circuito principale di Jaipur. Le vasche, i padiglioni e la posizione negli Aravalli sono diversi dalla geometria pianificata della città vecchia.",
      "Il sito è legato al pellegrinaggio vaishnavita e a strutture d'acqua storiche. Vale perché unisce devozione, paesaggio e gestione dell'acqua.",
      "Resta opzionale. Se la giornata Amber/City Palace è già piena, meglio saltarlo; se il gruppo vuole un altro contesto templare e ha energia, può essere una bella aggiunta.",
    ],
  },
  "rishikesh:Ganga riverfront": {
    en: [
      "The Ganga riverfront is the core of Rishikesh. It is not one attraction but a sequence of ghats, paths, bridges, temples, river sound, foothill air and pauses by the water.",
      "Its meaning comes from the river's sacred role and the geography of the Himalayan foothills. Here the trip shifts from monuments and cities to ritual, landscape and slower breathing.",
      "Build real time around it. A gentle walk, tea stop, quiet sitting place or sunset view will do more for the trip than adding another long excursion.",
    ],
    it: [
      "Il lungofiume del Ganga è il cuore di Rishikesh. Non è una sola attrazione ma una sequenza di ghat, sentieri, ponti, templi, suono dell'acqua, aria di collina e pause sul fiume.",
      "Il suo significato nasce dal ruolo sacro del fiume e dalla geografia dei contrafforti himalayani. Qui il viaggio passa da monumenti e città a rituale, paesaggio e respiro più lento.",
      "Serve tempo vero. Una passeggiata leggera, un tè, un punto tranquillo o una vista al tramonto valgono più di un'altra lunga escursione.",
    ],
  },
  "rishikesh:Yoga / ashram time": {
    en: [
      "Yoga or ashram time is a real Rishikesh activity, not filler. The town's modern identity is strongly tied to yoga, meditation, ashrams and seekers coming to the Ganga foothills for practice and recovery.",
      "The right version for this trip is gentle and private or small-group: beginner-friendly movement, breathing, meditation, spa or a short ashram visit rather than anything intense.",
      "This is what makes the mountain stop restorative. It gives the family a different rhythm between Jaipur and Udaipur and justifies staying two nights instead of rushing through.",
    ],
    it: [
      "Yoga o tempo in ashram è una vera attività di Rishikesh, non un riempitivo. L'identità moderna della città è legata a yoga, meditazione, ashram e persone che arrivano ai piedi dell'Himalaya per pratica e recupero.",
      "La versione giusta per questo viaggio è leggera, privata o in piccolo gruppo: movimento adatto a principianti, respirazione, meditazione, spa o breve visita in ashram, non qualcosa di intenso.",
      "Questo rende la tappa di montagna rigenerante. Dà alla famiglia un ritmo diverso tra Jaipur e Udaipur e giustifica due notti invece di attraversarla di fretta.",
    ],
  },
  "rishikesh:Ganga Aarti": {
    en: [
      "Ganga Aarti is the evening ritual that gives Rishikesh its strongest shared atmosphere. Lamps, chanting, flowers, families, priests and river reflections turn the waterfront into a devotional gathering.",
      "Aarti is a ritual of light, and in Rishikesh it is tied directly to the sacred river rather than performed as a detached show. The meaning is in repetition, sound, flame and collective attention.",
      "Arrive early enough to settle and choose a calm viewing point. Keep dinner simple afterward so the evening stays peaceful instead of becoming another logistical push.",
    ],
    it: [
      "Ganga Aarti è il rituale serale che dà a Rishikesh la sua atmosfera condivisa più forte. Lampade, canti, fiori, famiglie, sacerdoti e riflessi sul fiume trasformano il lungofiume in un raduno devozionale.",
      "L'aarti è un rituale di luce, e a Rishikesh è legato direttamente al fiume sacro, non a uno spettacolo separato. Il significato sta in ripetizione, suono, fiamma e attenzione collettiva.",
      "Arrivare abbastanza presto da sistemarsi e scegliere un punto tranquillo. Tenere la cena semplice dopo, così la serata resta calma e non diventa un altro sforzo logistico.",
    ],
  },
  "rishikesh:Beatles Ashram": {
    en: [
      "Beatles Ashram adds a twentieth-century cultural layer to Rishikesh. The Beatles stayed here in 1968 to study Transcendental Meditation, and that moment helped place Rishikesh in the global imagination of yoga and meditation.",
      "Today the site is part ruin, part forest walk, part mural space and part pop-culture memory. It is interesting because it is not polished like a palace; it feels reflective and slightly abandoned.",
      "Use it if the group wants culture beyond river views. It can be a half-day element, but it should not replace the slower river and yoga rhythm that make Rishikesh valuable.",
    ],
    it: [
      "Il Beatles Ashram aggiunge a Rishikesh uno strato culturale del Novecento. I Beatles soggiornarono qui nel 1968 per studiare Meditazione Trascendentale, e quel momento contribuì a portare Rishikesh nell'immaginario globale di yoga e meditazione.",
      "Oggi il sito è in parte rovina, in parte passeggiata nel verde, in parte spazio di murales e memoria pop. È interessante proprio perché non è lucidato come un palazzo; ha un tono riflessivo e un po' abbandonato.",
      "Usarlo se il gruppo vuole cultura oltre al fiume. Può occupare mezza giornata, ma non deve sostituire il ritmo lento di Ganga e yoga che dà valore alla tappa.",
    ],
  },
  "rishikesh:Lakshman Jhula / river bridges": {
    en: [
      "The bridge area gives the classic Rishikesh image: Ganga below, foothills around, temples and ashrams on the banks, people crossing between sacred and everyday spaces.",
      "Lakshman Jhula is linked in local tradition to Lakshmana from the Ramayana, which gives the place mythic resonance even for visitors who mainly come for the view.",
      "Treat it as a scenic walk, not a transfer. The best moments are looking up and downriver, pausing for photos and feeling how the bridge stitches together both sides of the town.",
    ],
    it: [
      "L'area dei ponti dà l'immagine classica di Rishikesh: il Ganga sotto, le colline intorno, templi e ashram sulle rive, persone che attraversano tra spazi sacri e quotidiani.",
      "Lakshman Jhula è legato nella tradizione locale a Lakshmana del Ramayana, cosa che dà al luogo una risonanza mitica anche per chi arriva soprattutto per la vista.",
      "Va vissuto come passeggiata panoramica, non come trasferimento. I momenti migliori sono guardare a monte e a valle, fermarsi per foto e sentire come il ponte unisce le due rive della città.",
    ],
  },
  "udaipur:City Palace (Udaipur)": {
    en: [
      "Udaipur City Palace is the main narrative stop of the lake city. Built and expanded by generations of Mewar rulers, it rises above Lake Pichola as palace, museum, viewpoint and statement of continuity.",
      "The palace is best read vertically and visually: terraces, courtyards, balconies, mirrored rooms, painted details and windows that frame the lake. Its position explains how power, defense and beauty worked together in Mewar.",
      "Use a guide and keep the route selective. Palace museums can become long; focus on the lake-facing architecture, court spaces and a few strong rooms rather than trying to absorb every object.",
    ],
    it: [
      "Il City Palace di Udaipur è la tappa narrativa principale della città dei laghi. Costruito ed espanso da generazioni di sovrani Mewar, domina Lake Pichola come palazzo, museo, punto panoramico e segno di continuità.",
      "Il palazzo va letto in verticale e con lo sguardo: terrazze, cortili, balconi, sale a specchi, pitture e finestre che incorniciano il lago. La sua posizione spiega come potere, difesa e bellezza lavorassero insieme nel Mewar.",
      "Usare una guida e tenere il percorso selettivo. I musei di palazzo possono diventare lunghi; concentrarsi sull'architettura verso il lago, sugli spazi di corte e su poche sale forti.",
    ],
  },
  "udaipur:Lake Pichola": {
    en: [
      "Lake Pichola is the reason Udaipur feels different from the other Rajasthan stops. The city makes most sense from the water or from a terrace looking across it: palace silhouettes, ghats, islands, hills and reflected light.",
      "The lake predates the formal city and was expanded as Udaipur developed. Its role is practical, scenic and symbolic, shaping how palaces and public life face the water.",
      "A boat ride is optional but valuable if weather and timing are good. It should feel like a calm visual chapter, not a packed activity squeezed between monuments.",
    ],
    it: [
      "Lake Pichola è il motivo per cui Udaipur sembra diversa dalle altre tappe del Rajasthan. La città si capisce meglio dall'acqua o da una terrazza: sagome di palazzi, ghat, isole, colline e luce riflessa.",
      "Il lago precede la città formale e fu ampliato con lo sviluppo di Udaipur. Ha un ruolo pratico, scenico e simbolico, modellando il modo in cui palazzi e vita pubblica guardano l'acqua.",
      "Il giro in barca è opzionale ma prezioso se meteo e orario funzionano. Deve sembrare un capitolo visivo calmo, non un'attività compressa tra monumenti.",
    ],
  },
  "udaipur:Jagdish Temple / old city lanes": {
    en: [
      "Jagdish Temple and the surrounding lanes bring Udaipur back to human scale after the palace and lake. The temple is central, active and close to the old-city movement of shops, steps and narrow streets.",
      "Dating to the 17th century and dedicated to Vishnu, the temple adds a devotional layer to a city often described only through palaces and views.",
      "Visit as a short walk with context. Look at the carved exterior, steps, street life and transitions between worship, shopping and old-city rhythm.",
    ],
    it: [
      "Jagdish Temple e i vicoli circostanti riportano Udaipur a scala umana dopo palazzo e lago. Il tempio è centrale, vivo e vicino al movimento di negozi, scalinate e strade strette della città vecchia.",
      "Risale al XVII secolo ed è dedicato a Vishnu, aggiungendo uno strato devozionale a una città spesso raccontata solo attraverso palazzi e panorami.",
      "Visitarlo come breve passeggiata con contesto. Osservare esterno scolpito, gradini, vita di strada e passaggi tra culto, shopping e ritmo della città vecchia.",
    ],
  },
  "udaipur:Saheliyon ki Bari": {
    en: [
      "Saheliyon ki Bari is a soft optional stop: fountains, pavilions, garden paths and a courtly leisure atmosphere away from the densest old-city lanes.",
      "It is associated with the royal women of Mewar and works as a reminder that royal landscapes were not only forts and audience halls, but also pleasure gardens, shade and water.",
      "Add it only if the group wants something pretty and easy. If lake time feels better, skip it; the garden should support calm, not become another obligation.",
    ],
    it: [
      "Saheliyon ki Bari è una tappa opzionale leggera: fontane, padiglioni, sentieri e atmosfera di svago di corte lontano dai vicoli più densi.",
      "È associato alle donne reali del Mewar e ricorda che i paesaggi regali non erano solo fortezze e sale d'udienza, ma anche giardini di piacere, ombra e acqua.",
      "Aggiungerlo solo se il gruppo vuole qualcosa di bello e facile. Se il tempo sul lago sembra migliore, saltarlo; il giardino deve sostenere la calma, non diventare un obbligo.",
    ],
  },
};

export function polishItalianText(text: string) {
  return text
    .replace(/\bChe cos'e\b/g, "Che cos'è")
    .replace(/\bPerche\b/g, "Perché")
    .replace(/\bperche\b/g, "perché")
    .replace(/\bcitta\b/g, "città")
    .replace(/\bCitta\b/g, "Città")
    .replace(/\bpiu\b/g, "più")
    .replace(/\bPiu\b/g, "Più")
    .replace(/\bpuo\b/g, "può")
    .replace(/\bPuo\b/g, "Può")
    .replace(/\bgia\b/g, "già")
    .replace(/\bGia\b/g, "Già")
    .replace(/\bqualita\b/g, "qualità")
    .replace(/\bQualita\b/g, "Qualità")
    .replace(/\battivita\b/g, "attività")
    .replace(/\bAttivita\b/g, "Attività")
    .replace(/\bflessibilita\b/g, "flessibilità")
    .replace(/\binfluenzo\b/g, "influenzò")
    .replace(/\bDa scala\b/g, "Dà scala")
    .replace(/\bmeta giornata\b/g, "metà giornata")
    .replace(/\bcafe\b/g, "caffè")
    .replace(/\bCafe\b/g, "Caffè")
    .replace(/\briscio\b/g, "risciò")
    .replace(/\bRiscio\b/g, "Risciò")
    .replace(/\bcosi\b/g, "così")
    .replace(/\bCosi\b/g, "Così")
    .replace(/\bli\b/g, "lì")
    .replace(/\bsi e\b/g, "si è")
    .replace(/\bc'e\b/g, "c'è")
    .replace(/\bQuesta e\b/g, "Questa è")
    .replace(/\bNon e\b/g, "Non è")
    .replace(/\bIl valore e\b/g, "Il valore è")
    .replace(/\bIl lago e\b/g, "Il lago è")
    .replace(/\bE il\b/g, "È il")
    .replace(/\bE la\b/g, "È la")
    .replace(/\bE uno\b/g, "È uno")
    .replace(/\bE una\b/g, "È una")
    .replace(/\bed e\b/g, "ed è")
    .replace(/\be forte\b/g, "è forte")
    .replace(/\be famoso\b/g, "è famoso")
    .replace(/\be famosa\b/g, "è famosa")
    .replace(/\be facile da\b/g, "è facile da")
    .replace(/\be già\b/g, "è già")
    .replace(/\be l'evento\b/g, "è l'evento")
    .replace(/\be associata\b/g, "è associata")
    .replace(/\be dedicato\b/g, "è dedicato")
    .replace(/\be un rituale\b/g, "è un rituale")
    .replace(/\be una delle\b/g, "è una delle")
    .replace(/\be uno dei\b/g, "è uno dei")
    .replace(/\be utile storicamente\b/g, "è utile storicamente")
    .replace(/\bRishikesh e inclusa\b/g, "Rishikesh è inclusa")
    .replace(/\bRishikesh e associata\b/g, "Rishikesh è associata")
    .replace(/\bAgra e inclusa\b/g, "Agra è inclusa")
    .replace(/\bEllora e il\b/g, "Ellora è il")
    .replace(/\bDelhi e il\b/g, "Delhi è il")
    .replace(/\bJaipur e il\b/g, "Jaipur è il")
    .replace(/\bRishikesh non e\b/g, "Rishikesh non è")
    .replace(/\bRishikesh e centro\b/g, "Rishikesh è centro")
    .replace(/\bUdaipur e il\b/g, "Udaipur è il")
    .replace(/(^|[.!?]\s+)E(?=\s)/g, "$1È");
}

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
  "24 ottobre 2026": "Recupero arrivo, Marine Drive solo se c'è energia",
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

function commonsImage(fileName: string) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=960`;
}

const curatedGalleryImages: Record<string, string[]> = {
  "mumbai:Marine Drive": [
    "./images/attractions/marine-drive-skyline.jpg",
    "./images/attractions/marine-drive-evening.jpg",
    "./images/attractions/marine-lines.jpg",
  ],
  "mumbai:Gateway of India / Colaba": [
    "./images/gateway-india.jpg",
    commonsImage("Mumbai 03-2016 30 Gateway of India.jpg"),
    commonsImage("Gateway of India in the evening, Mumbai, India.jpg"),
  ],
  "mumbai:Bandra-Worli Sea Link": [
    commonsImage("Bandra worli sealinkബാന്ദ്ര-വർളി കടൽപാലം.JPG"),
    commonsImage("Mumbai 03-2016 80 Dadar Beach view of the SeaLink.jpg"),
    commonsImage("Bandra worli sea-link at sunset.jpg"),
  ],
  "mumbai:Kala Ghoda": [
    commonsImage("Kala Ghoda Art District.jpg"),
    commonsImage("Horse made by Naval Dockyard (Mumbai) on display at Kala Ghoda Festival.jpg"),
    commonsImage("Kala Ghoda Statue.jpg"),
  ],
  "mumbai:Crawford Market / local shopping": [
    commonsImage("Crawford Market.png"),
    commonsImage("Crawford Market 03.jpg"),
    commonsImage("Mahatma Jyotiba Phule Mandai.jpg"),
  ],
  "mumbai:Elephanta Caves": [
    "./images/elephanta-caves.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Elephanta_-_Mahesh_Murti.jpg/960px-Elephanta_-_Mahesh_Murti.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Elephanta_Caves%2C_India.jpg/960px-Elephanta_Caves%2C_India.jpg",
  ],
  "ellora:Kailasa Temple": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kailasa_Temple_at_Ellora_%28Cave_16%29.jpg/960px-Kailasa_Temple_at_Ellora_%28Cave_16%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ellora_Cave_16_Kailasa_Temple.jpg/960px-Ellora_Cave_16_Kailasa_Temple.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Courtyard_and_Mahabharata_Reliefs_at_the_Kailasa_Temple%2C_Ellora_01.jpg/960px-Courtyard_and_Mahabharata_Reliefs_at_the_Kailasa_Temple%2C_Ellora_01.jpg",
  ],
  "ellora:Buddhist caves": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/P1060701_ellora_cave_number_10_ASI_number_N-MH-A51.jpg/960px-P1060701_ellora_cave_number_10_ASI_number_N-MH-A51.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ellora_Caves%2C_India%2C_The_Vishvakarma_Buddhist_Cave.jpg/960px-Ellora_Caves%2C_India%2C_The_Vishvakarma_Buddhist_Cave.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ellora_Caves%2C_India%2C_Religious_meeting_inside_ancient_Buddhist_cave_temple.jpg/960px-Ellora_Caves%2C_India%2C_Religious_meeting_inside_ancient_Buddhist_cave_temple.jpg",
  ],
  "ellora:Jain caves": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ellora_Cave_32_si0339.jpg/960px-Ellora_Cave_32_si0339.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cave_32_Jain_Cave_Ellora_Caves_India_-_panoramio.jpg/960px-Cave_32_Jain_Cave_Ellora_Caves_India_-_panoramio.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/La_grotte_Jain_Indra_Sabha_Ellora_Caves%2C_India.jpg/960px-La_grotte_Jain_Indra_Sabha_Ellora_Caves%2C_India.jpg",
  ],
  "ellora:Ajanta Caves": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/1_Ajanta_Caves_Viewpoint.jpg/960px-1_Ajanta_Caves_Viewpoint.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ajanta_Caves%2C_Painting_1.JPG/960px-Ajanta_Caves%2C_Painting_1.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bodhisattva_Padmapani%2C_cave_1%2C_Ajanta%2C_India.jpg/960px-Bodhisattva_Padmapani%2C_cave_1%2C_Ajanta%2C_India.jpg",
  ],
  "delhi:Old Delhi": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Chandni_Chowk%2C_Old_Delhi.JPG/960px-Chandni_Chowk%2C_Old_Delhi.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/32_-_Old_Delhi_Chandni_Chowk.jpg/960px-32_-_Old_Delhi_Chandni_Chowk.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/A_market_in_Chandni_Chowk%2C_Delhi.JPG/960px-A_market_in_Chandni_Chowk%2C_Delhi.JPG",
  ],
  "delhi:Humayun's Tomb": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Humayun%27s_tomb_1569-70.jpg/960px-Humayun%27s_tomb_1569-70.jpg",
    commonsImage("Humayun Tomb, Delhi, from the entrance portal.jpg"),
    commonsImage("Humayun's Tomb 33.jpg"),
  ],
  "delhi:Qutub Minar complex": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qutb_Minar_2011.jpg/960px-Qutb_Minar_2011.jpg",
    commonsImage("View of Qutub Minar (3).jpg"),
    commonsImage("Qutb complex -Delhi -Delhi -SSI 0001.jpg"),
  ],
  "delhi:Lodhi Garden": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bara_gumbad%2C_Lodhi_Garden.jpg/960px-Bara_gumbad%2C_Lodhi_Garden.jpg",
    commonsImage("Tomb of Mohammed Shah (Lodhi Garden).JPG"),
    commonsImage("Lodhi Garden Tomb 2019.jpg"),
  ],
  "delhi:Jama Masjid exterior / Chandni Chowk block": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jama_Masjid_2011.jpg/960px-Jama_Masjid_2011.jpg",
    commonsImage("20191203 Jama Masjid, Delhi 0722 6487 DxO.jpg"),
    commonsImage("Courtyard of Jama Masjid, in Delhi 03.jpg"),
  ],
  "delhi:India Gate / New Delhi axis": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/India_Gate_in_New_Delhi_03-2016.jpg/960px-India_Gate_in_New_Delhi_03-2016.jpg",
    commonsImage("India Gate, New Delhi.jpg"),
    commonsImage("India Gate, detail, New Delhi.jpg"),
  ],
  "agra:Taj Mahal": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Taj_Mahal%2C_Agra%2C_India_edit2.jpg/960px-Taj_Mahal%2C_Agra%2C_India_edit2.jpg",
    commonsImage("Taj Mahal, Iconic view, Agra, India.jpg"),
    commonsImage("Taj Mahal and Persian gardens, Agra, India.jpg"),
  ],
  "agra:Agra Fort": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Agra_Fort_Rempart.jpg/960px-Agra_Fort_Rempart.jpg",
    commonsImage("The Agra fort (The Red Fort of Agra).jpg"),
    commonsImage("Jahangiri Mahal Agra Fort India 3.jpg"),
  ],
  "agra:Mehtab Bagh": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Taj_Mahal_from_Mehtab_Bagh.jpg/960px-Taj_Mahal_from_Mehtab_Bagh.jpg",
    commonsImage("View of Taj Mahal from Mehtab Bagh 02.JPG"),
    commonsImage("Agra 03-2016 04 Taj Mahal from Mehtab Bagh.jpg"),
  ],
  "jaipur:Amber Fort": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jaipur_03-2016_04_Amber_Fort.jpg/960px-Jaipur_03-2016_04_Amber_Fort.jpg",
    commonsImage("Amber Palace,Jaipur (99865).jpg"),
    commonsImage("Amber Fort, Jaipur, 20191219 1032 9565.jpg"),
  ],
  "jaipur:City Palace (Jaipur)": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Chandra_Mahal%2C_City_Palace%2C_Jaipur%2C_20191218_0951_9043.jpg/960px-Chandra_Mahal%2C_City_Palace%2C_Jaipur%2C_20191218_0951_9043.jpg",
    commonsImage("City Palace Jaipur 1.jpg"),
    commonsImage("Jaipur 03-2016 22 City Palace complex.jpg"),
  ],
  "jaipur:Hawa Mahal": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hawa_Mahal_2011.jpg/960px-Hawa_Mahal_2011.jpg",
    commonsImage("Hawa Mahal Jaipur - Front (2010).jpg"),
    commonsImage("Front of the Hawa Mahal (\"The Palace of Winds\") Jaipur,India. jpg.jpg"),
  ],
  "jaipur:Jantar Mantar": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jantar_Mantar_at_Jaipur.jpg/960px-Jantar_Mantar_at_Jaipur.jpg",
    commonsImage("Entry at Jantar mantar Jaipur India.jpg"),
    commonsImage("Maan singh palace clock from jantar mantar,jaipur.jpg"),
  ],
  "jaipur:Johari / Bapu Bazaar": [
    commonsImage("Johari Bazar.jpg"),
    commonsImage("Jaipur Feb 2020 089.jpg"),
    commonsImage("Johari Bazaar, Jaipur.jpg"),
  ],
  "jaipur:Galta Ji temple": [
    commonsImage("Zanana Kund Aur Galta Ji Ka Mandir - edited.jpg"),
    commonsImage("Galtaji Jaipur (2022-07-14) 011.jpg"),
    commonsImage("Temple at the top, Galtaji, Jaipur, India.jpg"),
  ],
  "rishikesh:Ganga riverfront": [
    commonsImage("Serenity on the Banks of the Ganga River in Rishikesh 01.jpg"),
    commonsImage("Serenity on the Banks of the Ganga River in Rishikesh 02.jpg"),
    commonsImage("River Rafting in Ganga Near Ram Jhula Rishikesh 03.jpg"),
  ],
  "rishikesh:Yoga / ashram time": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Morning_Yoga_class_at_Parmarth_Niketan%2C_Muni_Ki_Reti%2C_Rishikesh.jpg/960px-Morning_Yoga_class_at_Parmarth_Niketan%2C_Muni_Ki_Reti%2C_Rishikesh.jpg",
    commonsImage("Rishikesh (Ganges View).jpg"),
    commonsImage("Beatles Ashram Satsang Hall Rishikesh.JPG"),
  ],
  "rishikesh:Ganga Aarti": [
    commonsImage("Ganga Aarti, Rishikesh.jpg"),
    commonsImage("Priests performing Ganga Aarti with multi-tier lamps on the banks of the Ganges, Rishikesh.jpg"),
    commonsImage("Ken Wieland Ganga Aarti in Rishikesh (2).jpg"),
  ],
  "rishikesh:Beatles Ashram": [
    commonsImage("Beatles Ashram Satsang Hall Rishikesh.JPG"),
    commonsImage("Beatles Ashram 01.jpg"),
    commonsImage("I am the Eggman, Beatles Ashram, Rishikesh, India.jpg"),
  ],
  "rishikesh:Lakshman Jhula / river bridges": [
    commonsImage("Rishikesh, Lakshman Jhula.jpg"),
    commonsImage("Lakshman Jhula, Rishikesh, Uttarakhand, India.jpg"),
    commonsImage("Lakshman jhula, Rishikesh.jpg"),
  ],
  "udaipur:City Palace (Udaipur)": [
    commonsImage("City Palace Udaipur Rajasthan India.JPG"),
    commonsImage("20191207 City Palace, Udaipur 1701 7325.jpg"),
    commonsImage("City Palace, Udaipur, 20191207 0501 6900.jpg"),
  ],
  "udaipur:Lake Pichola": [
    commonsImage("Pichola lake sunset.JPG"),
    commonsImage("20191207 Zachód słońca nad jeziorem Pichola w Udajpurze 1733 7352.jpg"),
    commonsImage("20191207 Lake Pichola, City Palace, Udaipur, 1516 7254.jpg"),
  ],
  "udaipur:Jagdish Temple / old city lanes": [
    commonsImage("Jagdish Temple Udaipur.jpg"),
    commonsImage("20191207 Jagdish Temple, Udaipur, 0608 7004.jpg"),
    commonsImage("Vishnu - Jagdish Temple, Udaipur - 20191208 1425 7602.jpg"),
  ],
  "udaipur:Saheliyon ki Bari": [
    commonsImage("Saheliyon-ki-Bari Fountain.JPG"),
    commonsImage("Elephant trunk fountain in Saheliyon-ki-Bari-Udaipur-Rajasthan-13.jpg"),
    commonsImage("Garden in Saheliyon-ki-Bari-Udaipur.jpg"),
  ],
};

function galleryFor(attraction: AttractionCard, detailKey: string) {
  const gallery = attraction.gallery ?? curatedGalleryImages[detailKey];
  return gallery ?? [attraction.image, attraction.image, attraction.image];
}

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
    optional: true,
    image: commonsImage("Bandra worli sealinkബാന്ദ്ര-വർളി കടൽപാലം.JPG"),
    imageCredit: "Wikimedia Commons",
    en: { name: "Bandra-Worli Sea Link", description: "Modern sea bridge linking Worli and Bandra, best used as a scenic drive or short viewpoint rather than a formal monument stop.", why: "It adds the contemporary Mumbai skyline-and-sea feeling that is missing if the city chapter only covers colonial landmarks and markets.", history: "Opened in the 21st century, the bridge reflects Mumbai's push to connect coastal neighborhoods across difficult water, traffic and land constraints.", pace: "Optional scenic add-on. Include only if traffic and energy are friendly.", ticket: "No ticket; ask the driver to include a Sea Link drive or Dadar/Bandra viewpoint." },
    it: { name: "Bandra-Worli Sea Link", description: "Ponte moderno sul mare tra Worli e Bandra, ideale come giro panoramico o breve punto vista piu che come monumento formale.", why: "Aggiunge la Mumbai contemporanea di skyline e mare, che manca se si vedono solo luoghi coloniali e mercati.", history: "Aperto nel XXI secolo, il ponte racconta lo sforzo di Mumbai di collegare quartieri costieri tra mare, traffico e poco spazio urbano.", pace: "Aggiunta panoramica opzionale. Includerla solo se traffico ed energia lo permettono.", ticket: "Nessun biglietto; chiedere all'autista un passaggio sul Sea Link o un punto vista da Dadar/Bandra." },
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kailasa_Temple_at_Ellora_%28Cave_16%29.jpg/960px-Kailasa_Temple_at_Ellora_%28Cave_16%29.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Kailasa Temple", description: "A monumental Hindu temple carved downward from one rock mass, with courtyards, towers, elephant sculptures and panels all excavated from the same stone.", why: "This is the architectural heart of Ellora and a protected trip highlight; it feels more like a mountain carved into a temple than a building assembled from parts.", history: "Associated with the Rashtrakuta period and Mount Kailash symbolism, it is one of the great achievements of Indian rock-cut architecture.", pace: "Start here with full energy and let the guide slow the visit down.", ticket: "Book Ellora guide; focus the day here first." },
    it: { name: "Tempio Kailasa", description: "Tempio induista monumentale scavato dall'alto in un'unica massa rocciosa, con cortili, torri, elefanti e pannelli ricavati dalla stessa pietra.", why: "E il cuore architettonico di Ellora e una tappa da proteggere; sembra una montagna trasformata in tempio.", history: "Legato al periodo Rashtrakuta e al simbolismo del Monte Kailash, e una delle grandi opere dell'architettura rupestre indiana.", pace: "Iniziare qui con energia piena e lasciare che la guida rallenti la visita.", ticket: "Prenotare guida Ellora; iniziare da qui." },
  },
  {
    placeId: "ellora",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/P1060701_ellora_cave_number_10_ASI_number_N-MH-A51.jpg/960px-P1060701_ellora_cave_number_10_ASI_number_N-MH-A51.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Buddhist caves", description: "Monastic halls, shrines, cells and prayer spaces cut into rock, quieter and more contemplative than the main Hindu caves.", why: "They show Ellora beyond the famous Kailasa Temple and help explain why the complex matters as a multi-faith landscape.", history: "They connect to western India's Buddhist monastic traditions, when caves served both practical living and sacred functions.", pace: "Pick a few representative caves instead of trying to see every chamber.", ticket: "Included with Ellora visit; guide should curate." },
    it: { name: "Grotte buddhiste", description: "Sale monastiche, santuari, celle e spazi di preghiera scavati nella roccia, piu silenziosi rispetto alle grotte induiste principali.", why: "Mostrano Ellora oltre al famoso Tempio Kailasa e spiegano il valore multi-religioso del complesso.", history: "Rimandano alle tradizioni monastiche buddhiste dell'India occidentale, dove le grotte erano spazi pratici e sacri.", pace: "Scegliere alcune grotte rappresentative, non tutte.", ticket: "Incluse nella visita Ellora; la guida deve selezionare." },
  },
  {
    placeId: "ellora",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ellora_Cave_32_si0339.jpg/960px-Ellora_Cave_32_si0339.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Jain caves", description: "Later caves with refined carving and calmer scale.", why: "They complete Ellora's multi-faith story.", history: "They reflect later Jain patronage and devotional carving.", pace: "Add only after Kailasa and selected Buddhist caves.", ticket: "Included with Ellora visit; optional within the day." },
    it: { name: "Grotte giainiste", description: "Grotte piu tarde con incisioni raffinate e scala piu calma.", why: "Completano il racconto multi-religioso di Ellora.", history: "Riflettono mecenatismo giainista e scultura devozionale piu tarda.", pace: "Aggiungere solo dopo Kailasa e alcune grotte buddhiste.", ticket: "Incluse nella visita Ellora; opzionali nella giornata." },
  },
  {
    placeId: "ellora",
    optional: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/1_Ajanta_Caves_Viewpoint.jpg/960px-1_Ajanta_Caves_Viewpoint.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Ajanta Caves", description: "Rock-cut Buddhist caves known especially for ancient paintings.", why: "Very meaningful, but it adds a long full-day excursion from Aurangabad.", history: "The caves date from roughly the 2nd century BCE to the 5th century CE.", pace: "Keep optional; book only if the group wants a second cave day.", ticket: "Optional car + guide; about 2.5h each way from Aurangabad." },
    it: { name: "Grotte di Ajanta", description: "Grotte buddhiste scavate nella roccia, celebri per pitture antiche.", why: "Molto importanti, ma aggiungono una lunga giornata da Aurangabad.", history: "Le grotte vanno circa dal II secolo a.C. al V secolo d.C.", pace: "Restano opzionali; prenotare solo se si vuole una seconda giornata grotte.", ticket: "Auto + guida opzionali; circa 2,5h per tratta da Aurangabad." },
  },
  {
    placeId: "delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Humayun%27s_tomb_1569-70.jpg/960px-Humayun%27s_tomb_1569-70.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Humayun's Tomb", description: "A Mughal garden tomb set in a formal charbagh garden.", why: "Beautiful, calm and historically useful before the Taj Mahal.", history: "Built in the 16th century, it helped shape later Mughal tomb design.", pace: "Make it the main Delhi monument.", ticket: "Book tickets/guide if using a Delhi guide day." },
    it: { name: "Tomba di Humayun", description: "Tomba-giardino moghul in un giardino formale charbagh.", why: "Bella, calma e utile storicamente prima del Taj Mahal.", history: "Costruita nel XVI secolo, influenzo le tombe moghul successive.", pace: "Metterla come monumento principale di Delhi.", ticket: "Biglietti/guida se si usa una guida per Delhi." },
  },
  {
    placeId: "delhi",
    optional: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qutb_Minar_2011.jpg/960px-Qutb_Minar_2011.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Qutub Minar complex", description: "A tall minaret and early Indo-Islamic monument complex in South Delhi, visually very different from Mughal garden tombs.", why: "It is one of Delhi's most important historic sites and is worth considering if the group wants one more strong monument.", history: "The complex began in the Delhi Sultanate period and shows layers of early Islamic architecture in North India.", pace: "Optional; add only if it does not crowd Humayun's Tomb and Old Delhi.", ticket: "Ticketed site; guide useful for context." },
    it: { name: "Complesso Qutub Minar", description: "Alto minareto e complesso indo-islamico antico a South Delhi, molto diverso dalle tombe-giardino moghul.", why: "E uno dei siti storici piu importanti di Delhi e vale se si vuole un altro monumento forte.", history: "Il complesso nasce nel periodo del Sultanato di Delhi e mostra strati dell'architettura islamica antica nel Nord India.", pace: "Opzionale; aggiungere solo se non appesantisce Tomba di Humayun e Old Delhi.", ticket: "Sito con biglietto; guida utile." },
  },
  {
    placeId: "delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bara_gumbad%2C_Lodhi_Garden.jpg/960px-Bara_gumbad%2C_Lodhi_Garden.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Lodhi Garden", description: "Landscaped park with 15th-century tombs and local walking paths.", why: "It gives breathing room between heavier Delhi stops.", history: "The tombs belong to the Sayyid and Lodi periods.", pace: "Easy morning or late-afternoon stop.", ticket: "No major ticket; local car timing only." },
    it: { name: "Lodhi Garden", description: "Parco con tombe del XV secolo e percorsi per camminare.", why: "Da respiro tra tappe piu intense a Delhi.", history: "Le tombe appartengono ai periodi Sayyid e Lodi.", pace: "Stop facile al mattino o tardo pomeriggio.", ticket: "Nessun biglietto importante; solo tempi auto." },
  },
  {
    placeId: "delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/A_market_in_Chandni_Chowk%2C_Delhi.JPG/960px-A_market_in_Chandni_Chowk%2C_Delhi.JPG",
    imageCredit: "Wikimedia Commons",
    en: { name: "Old Delhi", description: "Dense lanes, markets, food streets and rickshaw energy.", why: "Atmospheric and memorable, but tiring if left unbounded.", history: "It grew around Shahjahanabad, Shah Jahan's 17th-century Mughal capital.", pace: "Limit to one guided block.", ticket: "Book a guide/rickshaw block; avoid open-ended wandering." },
    it: { name: "Old Delhi", description: "Vicolo densi, mercati, strade di cibo e riscio.", why: "Atmosferica e memorabile, ma stancante se non limitata.", history: "Cresce intorno a Shahjahanabad, capitale moghul del XVII secolo.", pace: "Limitare a un blocco guidato.", ticket: "Prenotare guida/risciò; evitare visita senza limite." },
  },
  {
    placeId: "delhi",
    optional: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jama_Masjid_2011.jpg/960px-Jama_Masjid_2011.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Jama Masjid exterior / Chandni Chowk block", description: "A focused Old Delhi block around the great mosque, market lanes and rickshaw movement.", why: "It gives the strongest sense of Old Delhi without needing to wander for hours.", history: "Jama Masjid was built under Shah Jahan and anchors the old Mughal city of Shahjahanabad.", pace: "Optional inside visit; exterior plus market block may be enough.", ticket: "Use a guide; confirm dress and camera rules if entering." },
    it: { name: "Esterno Jama Masjid / blocco Chandni Chowk", description: "Blocco mirato di Old Delhi intorno alla grande moschea, ai mercati e ai riscio.", why: "Da il senso piu forte di Old Delhi senza girare per ore.", history: "Jama Masjid fu costruita sotto Shah Jahan e ancora la citta moghul di Shahjahanabad.", pace: "Ingresso opzionale; esterno e mercato possono bastare.", ticket: "Usare guida; verificare regole abbigliamento e foto se si entra." },
  },
  {
    placeId: "delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/India_Gate_in_New_Delhi_03-2016.jpg/960px-India_Gate_in_New_Delhi_03-2016.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "India Gate / New Delhi axis", description: "Ceremonial civic axis and monumental planned-city scale.", why: "Shows the contrast between Old Delhi and New Delhi.", history: "The area was planned under British rule and later became central to independent India.", pace: "Best as a drive-by or short stop.", ticket: "No ticket; include in city drive." },
    it: { name: "India Gate / asse di New Delhi", description: "Asse civico cerimoniale e scala monumentale pianificata.", why: "Mostra il contrasto tra Old Delhi e New Delhi.", history: "Area pianificata sotto i britannici e poi centrale nell'India indipendente.", pace: "Meglio come giro in auto o stop breve.", ticket: "Nessun biglietto; includere nel giro in citta." },
  },
  {
    placeId: "agra",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Taj_Mahal%2C_Agra%2C_India_edit2.jpg/960px-Taj_Mahal%2C_Agra%2C_India_edit2.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Taj Mahal", description: "White marble mausoleum on the Yamuna River.", why: "The iconic visual and emotional highlight of Agra.", history: "Built by Shah Jahan in the 17th century for Mumtaz Mahal.", pace: "Go at sunrise; do not rush.", ticket: "Book sunrise guide and tickets in advance." },
    it: { name: "Taj Mahal", description: "Mausoleo in marmo bianco sul fiume Yamuna.", why: "Il simbolo visivo ed emotivo di Agra.", history: "Costruito da Shah Jahan nel XVII secolo per Mumtaz Mahal.", pace: "Andare all'alba; non correre.", ticket: "Prenotare guida alba e biglietti in anticipo." },
  },
  {
    placeId: "agra",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Agra_Fort_Rempart.jpg/960px-Agra_Fort_Rempart.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Agra Fort", description: "Large red sandstone fort-palace complex.", why: "Explains the political and military side of Mughal Agra.", history: "Developed under Akbar and later Mughal rulers.", pace: "Moderate; avoid pairing with too many extras.", ticket: "Book with Agra guide or ticket support." },
    it: { name: "Agra Fort", description: "Grande complesso fortezza-palazzo in arenaria rossa.", why: "Spiega il lato politico e militare dell'Agra moghul.", history: "Sviluppato sotto Akbar e altri sovrani moghul.", pace: "Moderato; non aggiungere troppe tappe.", ticket: "Prenotare con guida Agra o supporto biglietti." },
  },
  {
    placeId: "agra",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Taj_Mahal_from_Mehtab_Bagh.jpg/960px-Taj_Mahal_from_Mehtab_Bagh.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Mehtab Bagh", description: "Garden across the Yamuna from the Taj Mahal.", why: "A calmer sunset view of the Taj and river setting.", history: "Part of the Mughal riverfront landscape.", pace: "Optional easy sunset.", ticket: "Optional entry; guide can decide based on energy." },
    it: { name: "Mehtab Bagh", description: "Giardino sull'altra riva dello Yamuna rispetto al Taj.", why: "Vista piu calma del Taj e del paesaggio fluviale.", history: "Parte del paesaggio fluviale moghul.", pace: "Tramonto facile opzionale.", ticket: "Ingresso opzionale; la guida decide secondo energia." },
  },
  {
    placeId: "jaipur",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jaipur_03-2016_04_Amber_Fort.jpg/960px-Jaipur_03-2016_04_Amber_Fort.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Amber Fort", description: "Hilltop fort-palace outside the old city.", why: "Jaipur's strongest architectural stop.", history: "Amber was the older Kachwaha seat before planned Jaipur.", pace: "Go early and treat as the main event.", ticket: "Book guide and entry support." },
    it: { name: "Amber Fort", description: "Fortezza-palazzo su una collina fuori dalla citta vecchia.", why: "La tappa architettonica piu forte di Jaipur.", history: "Amber era la sede Kachwaha prima della Jaipur pianificata.", pace: "Andare presto; e l'evento principale.", ticket: "Prenotare guida e supporto ingresso." },
  },
  {
    placeId: "jaipur",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Chandra_Mahal%2C_City_Palace%2C_Jaipur%2C_20191218_0951_9043.jpg/960px-Chandra_Mahal%2C_City_Palace%2C_Jaipur%2C_20191218_0951_9043.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "City Palace (Jaipur)", description: "Palace complex at the heart of Jaipur's old city.", why: "Connects royal history to Jaipur's planned city.", history: "The palace became the ceremonial center after Jaipur's founding.", pace: "Moderate; good after Amber if energy remains.", ticket: "Book palace ticket/guide." },
    it: { name: "City Palace di Jaipur", description: "Complesso di palazzi nel cuore della citta vecchia.", why: "Collega storia reale e citta pianificata.", history: "Divenne centro cerimoniale dopo la fondazione di Jaipur.", pace: "Moderato; dopo Amber se resta energia.", ticket: "Prenotare biglietto/guida del palazzo." },
  },
  {
    placeId: "jaipur",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hawa_Mahal_2011.jpg/960px-Hawa_Mahal_2011.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Hawa Mahal", description: "Famous pink facade with many small windows.", why: "Quick, highly visual Jaipur moment.", history: "Built in 1799 for screened royal viewing of street life.", pace: "Short photo stop unless entering is specifically wanted.", ticket: "Usually no need to pre-book unless entering." },
    it: { name: "Hawa Mahal", description: "Celebre facciata rosa con molte piccole finestre.", why: "Momento visivo rapido e molto riconoscibile.", history: "Costruito nel 1799 per osservare la strada restando schermati.", pace: "Breve stop fotografico, salvo interesse a entrare.", ticket: "Di solito non serve prenotare salvo ingresso." },
  },
  {
    placeId: "jaipur",
    optional: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jantar_Mantar_at_Jaipur.jpg/960px-Jantar_Mantar_at_Jaipur.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Jantar Mantar", description: "Outdoor astronomical observatory with monumental instruments.", why: "Shows Jaipur's scientific side beyond palaces.", history: "Built by Sawai Jai Singh II for astronomy and measurement.", pace: "Optional; best with guide.", ticket: "Optional ticket; add only if the group is curious." },
    it: { name: "Jantar Mantar", description: "Osservatorio astronomico all'aperto con strumenti monumentali.", why: "Mostra il lato scientifico di Jaipur oltre ai palazzi.", history: "Costruito da Sawai Jai Singh II per astronomia e misurazione.", pace: "Opzionale; meglio con guida.", ticket: "Biglietto opzionale; aggiungere solo se interessa." },
  },
  {
    placeId: "jaipur",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Johari_Bazaar%2C_Jaipur.jpg/960px-Johari_Bazaar%2C_Jaipur.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Johari / Bapu Bazaar", description: "Old-city shopping streets for jewelry, textiles, block prints, scarves and small gifts.", why: "Markets are part of Jaipur's visual identity, not just shopping; they add color and craft after the palace stops.", history: "Jaipur was planned with organized bazaars, and craft trade remains central to the old city's character.", pace: "Keep bounded; one curated shopping block is enough.", ticket: "Ask agency/guide for a reputable, no-pressure shopping route." },
    it: { name: "Johari / Bapu Bazaar", description: "Strade commerciali della citta vecchia per gioielli, tessuti, stampe, sciarpe e piccoli regali.", why: "I mercati sono parte dell'identita visiva di Jaipur, non solo shopping; aggiungono colore e artigianato.", history: "Jaipur fu pianificata con bazar organizzati e il commercio artigianale resta centrale.", pace: "Tenere limitato; un blocco curato basta.", ticket: "Chiedere all'agenzia/guida un percorso serio e senza pressione." },
  },
  {
    placeId: "jaipur",
    optional: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Galtaji_temple_jaipur.png/960px-Galtaji_temple_jaipur.png",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Morning_Yoga_class_at_Parmarth_Niketan%2C_Muni_Ki_Reti%2C_Rishikesh.jpg/960px-Morning_Yoga_class_at_Parmarth_Niketan%2C_Muni_Ki_Reti%2C_Rishikesh.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Yoga / ashram time", description: "A gentle yoga, meditation, spa or ashram visit block that makes Rishikesh feel restorative rather than just scenic.", why: "This is exactly why Rishikesh belongs in the route: foothills, Ganga, quiet practice and recovery between heavier cities.", history: "Rishikesh is internationally associated with yoga and ashram culture, layered on top of older pilgrimage traditions.", pace: "Core activity, but keep it low-pressure. Choose one calm morning session or spa block.", ticket: "Ask hotel/agency for a reputable beginner-friendly private or small-group option." },
    it: { name: "Yoga / tempo in ashram", description: "Blocco leggero di yoga, meditazione, spa o visita in ashram per rendere Rishikesh rigenerante, non solo panoramica.", why: "E il motivo per cui Rishikesh sta bene nel percorso: colline, Ganga, pratica tranquilla e recupero tra citta piu intense.", history: "Rishikesh e associata globalmente a yoga e ashram, sopra tradizioni di pellegrinaggio piu antiche.", pace: "Attivita base ma senza pressione. Scegliere una sessione calma al mattino o spa.", ticket: "Chiedere a hotel/agenzia un'opzione seria e adatta a principianti." },
  },
  {
    placeId: "rishikesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ganga_Aarti_Rishikesh.jpg/960px-Ganga_Aarti_Rishikesh.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Ganga Aarti", description: "Evening river ritual with lamps, chanting and offerings.", why: "Gives Rishikesh atmosphere without a long excursion.", history: "Aarti is a devotional ritual of light tied here directly to the river.", pace: "Arrive early and keep dinner simple.", ticket: "Ask agency for calm viewing support if possible." },
    it: { name: "Ganga Aarti", description: "Rituale serale sul fiume con lampade, canti e offerte.", why: "Da atmosfera a Rishikesh senza una lunga escursione.", history: "L'aarti e un rituale di luce qui legato direttamente al fiume.", pace: "Arrivare presto e cena semplice dopo.", ticket: "Chiedere all'agenzia supporto per vedere con calma se possibile." },
  },
  {
    placeId: "rishikesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Beatles_Ashram_At_Rishikesh.jpg/960px-Beatles_Ashram_At_Rishikesh.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Beatles Ashram", description: "Former ashram site made famous by the Beatles' 1968 stay.", why: "Adds cultural texture beyond river views.", history: "Part of Rishikesh's global yoga and meditation story.", pace: "Optional half-day if the group wants more than pure rest.", ticket: "Check current entry/guide options." },
    it: { name: "Beatles Ashram", description: "Ex ashram famoso per il soggiorno dei Beatles nel 1968.", why: "Aggiunge cultura oltre alle viste sul fiume.", history: "Parte della storia globale di yoga e meditazione di Rishikesh.", pace: "Mezza giornata opzionale se si vuole altro oltre al riposo.", ticket: "Verificare ingresso/guida attuali." },
  },
  {
    placeId: "rishikesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lakshman_Jhula_Rishikesh.jpg/960px-Lakshman_Jhula_Rishikesh.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Lakshman Jhula / river bridges", description: "Suspension bridge area over the Ganga with temples and hill views.", why: "The classic Rishikesh visual of river, bridge and foothills.", history: "Associated with pilgrimage routes and Ramayana-linked local legend.", pace: "Scenic walk, not a rushed transfer stop.", ticket: "No fixed ticket; local guide optional." },
    it: { name: "Lakshman Jhula / ponti sul fiume", description: "Area dei ponti sospesi sul Ganga con templi e viste sulle colline.", why: "L'immagine classica di Rishikesh: fiume, ponte e colline.", history: "Legata a percorsi di pellegrinaggio e leggende del Ramayana.", pace: "Passeggiata panoramica, non stop di fretta.", ticket: "Nessun biglietto fisso; guida locale opzionale." },
  },
  {
    placeId: "udaipur",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lake_view_of_City_Palace_%28Udaipur%29%2C_Rajasthan%2C_India_-2.jpg/960px-Lake_view_of_City_Palace_%28Udaipur%29%2C_Rajasthan%2C_India_-2.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "City Palace (Udaipur)", description: "Large palace complex rising above Lake Pichola.", why: "The architectural and historical anchor of Udaipur.", history: "Expanded by generations of Mewar rulers.", pace: "Moderate; avoid rushing the museum route.", ticket: "Book City Palace guide/ticket support." },
    it: { name: "City Palace di Udaipur", description: "Grande complesso di palazzi sopra Lake Pichola.", why: "L'ancora architettonica e storica di Udaipur.", history: "Espanso da generazioni di sovrani Mewar.", pace: "Moderato; non correre nel museo.", ticket: "Prenotare guida/biglietti City Palace." },
  },
  {
    placeId: "udaipur",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Lake_Pichola%2C_Udaipur.jpg/960px-Lake_Pichola%2C_Udaipur.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Lake Pichola", description: "The central lake that shapes Udaipur's famous views.", why: "It gives Udaipur its calm and beauty.", history: "The lake predates the formal city and was expanded as Udaipur grew.", pace: "Easy boat ride or lakeside dinner.", ticket: "Optional boat; book with weather flexibility." },
    it: { name: "Lake Pichola", description: "Il lago centrale che definisce le viste famose di Udaipur.", why: "Da calma e bellezza a Udaipur.", history: "Il lago precede la citta formale e fu ampliato con la crescita di Udaipur.", pace: "Giro in barca o cena sul lago, facile.", ticket: "Barca opzionale; prenotare con flessibilita meteo." },
  },
  {
    placeId: "udaipur",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Jagdish_Temple_Udaipur.jpg/960px-Jagdish_Temple_Udaipur.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Jagdish Temple / old city lanes", description: "Central temple and surrounding old-city streets near the palace.", why: "Adds human scale after the grand palace and lake.", history: "Jagdish Temple dates to the 17th century and is dedicated to Vishnu.", pace: "Short to moderate walk.", ticket: "No complex booking; local guide optional." },
    it: { name: "Jagdish Temple / vicoli vecchi", description: "Tempio centrale e strade della citta vecchia vicino al palazzo.", why: "Da scala umana dopo palazzo e lago.", history: "Jagdish Temple risale al XVII secolo ed e dedicato a Vishnu.", pace: "Passeggiata breve o moderata.", ticket: "Nessuna prenotazione complessa; guida locale opzionale." },
  },
  {
    placeId: "udaipur",
    optional: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Saheliyon_ki_Bari_Udaipur.jpg/960px-Saheliyon_ki_Bari_Udaipur.jpg",
    imageCredit: "Wikimedia Commons",
    en: { name: "Saheliyon ki Bari", description: "A garden with fountains, pavilions and a calmer royal leisure atmosphere away from the densest old-city streets.", why: "Good optional soft stop if the group wants something pretty without another heavy monument.", history: "The garden is associated with the royal women of Mewar and courtly leisure culture.", pace: "Optional easy add-on; skip if lake time feels better.", ticket: "Low-complexity ticket; guide optional." },
    it: { name: "Saheliyon ki Bari", description: "Giardino con fontane e padiglioni, piu calmo rispetto ai vicoli della citta vecchia.", why: "Buona aggiunta leggera se si vuole qualcosa di bello senza un altro monumento intenso.", history: "Il giardino e associato alle donne reali del Mewar e alla cultura di corte.", pace: "Opzionale facile; saltare se si preferisce tempo sul lago.", ticket: "Biglietto semplice; guida opzionale." },
  },
];

export function getAttractions(placeId: string, language: Language) {
  return attractionCards
    .filter((attraction) => attraction.placeId === placeId)
    .map((attraction) => {
      const localized = attraction[language];
      const detailKey = `${attraction.placeId}:${attraction.en.name}`;
      const notes = detailNotes[detailKey]?.[language] ?? [];
      const sectionTitles =
        language === "it"
          ? [
              "Contesto",
              "Perché merita",
              "Cosa osservare",
              "Ritmo consigliato",
              "Guida e biglietti",
            ]
          : [
              "Background",
              "Why visit",
              "What to notice",
              "Pacing",
              "Guide and tickets",
            ];
      const polished =
        language === "it"
          ? {
              ...localized,
              description: polishItalianText(localized.description),
              why: polishItalianText(localized.why),
              history: polishItalianText(localized.history),
              pace: polishItalianText(localized.pace),
              ticket: polishItalianText(localized.ticket),
            }
          : localized;

      return {
        ...attraction,
        ...polished,
        galleryImages: galleryFor(attraction, detailKey),
        detailSections: [
          `${polished.history} ${notes[0] ?? ""}`.trim(),
          notes[1] ?? polished.history,
          notes[2] ?? polished.why,
          buildPaceDetail(polished.name, polished.pace, language),
          buildTicketDetail(polished.name, polished.ticket, language),
        ].map((body, index) => ({
          title: sectionTitles[index] ?? sectionTitles[sectionTitles.length - 1],
          body,
        })),
      };
    });
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
