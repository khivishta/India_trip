import { ExternalLink, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { type Language, uiText } from "../data/placeDetails";

const cdcIndiaUrl = "https://wwwnc.cdc.gov/travel/destinations/traveler/none/india";
const fcdoIndiaUrl = "https://www.gov.uk/foreign-travel-advice/india/health";
const travelHealthProIndiaUrl = "https://travelhealthpro.org.uk/country/105/india";
const cdcFoodWaterUrl = "https://wwwnc.cdc.gov/travel/page/food-water-safety";

const healthCopy = {
  en: {
    eyebrow: "Health and safety",
    title: "Special precautions for a relaxed India trip",
    intro:
      "Nothing here replaces a doctor or travel clinic. Use this as a planning checklist for the agency and family, then confirm personal vaccine, medication and insurance needs with a clinician 6-8 weeks before travel.",
    linksLabel: "Official health and safety links",
    links: {
      cdc: "CDC India traveler health",
      fcdo: "UK India health advice",
      thp: "TravelHealthPro India",
      food: "CDC food and water safety",
    },
    cards: [
      {
        title: "Before travel",
        body:
          "Check routine vaccines are current and discuss India-specific vaccines with a travel clinic. Hepatitis A and typhoid are commonly considered for travelers to India; hepatitis B, rabies, Japanese encephalitis and malaria prevention depend on activities, length of stay, medical history and the exact route.",
      },
      {
        title: "Mosquito precautions",
        body:
          "Use repellent, long sleeves at dawn/dusk, and hotel rooms with screens or air conditioning where possible. Dengue and other mosquito-borne illnesses are a practical concern; malaria medication is a doctor-level decision based on current risk maps and personal factors.",
      },
      {
        title: "Food, water and stomach safety",
        body:
          "Use sealed bottled or properly treated water, avoid ice unless trusted, wash hands often, and choose freshly cooked hot food. Carry oral rehydration salts and basic stomach medication recommended by a clinician, because stomach illness is one of the most common trip disruptors.",
      },
      {
        title: "Roads, crowds and daily comfort",
        body:
          "Use private cars with seat belts, avoid overloaded vehicles, keep bags secure in crowded markets, and protect rest time. The itinerary already avoids trains and long road days where possible; that is part of the health and safety plan.",
      },
    ],
    checklistTitle: "Practical packing checklist",
    checklist: [
      "Travel insurance covering medical care, evacuation and trip disruption.",
      "Prescription medicines in original packaging, plus copies of prescriptions.",
      "Small medical kit: oral rehydration salts, thermometer, pain/fever medicine, stomach medicine advised by a clinician, plasters, antiseptic wipes and hand sanitizer.",
      "High-SPF sunscreen, hat, sunglasses and breathable clothing for heat and sun.",
      "Mosquito repellent and lightweight long sleeves for evenings.",
      "Masks can be useful for poor air quality or crowded indoor spaces, especially in Delhi/Agra.",
    ],
    cautionTitle: "Special precautions to confirm",
    cautions: [
      "Yellow fever certificate is generally only relevant if arriving from, or transiting through, a country with yellow fever risk. Confirm if the final flight routing changes.",
      "Discuss malaria prevention with a travel clinician; do not rely on generic internet advice for medication decisions.",
      "Avoid contact with dogs, monkeys and other animals. If bitten or scratched, seek urgent medical care because rabies prevention is time-sensitive.",
      "Avoid swimming in freshwater rivers. Enjoy the Ganga visually and ritually, but do not treat it as a swimming stop.",
      "Heat, dehydration and air quality can make sightseeing feel harder. Keep early starts, hotel breaks and the Mumbai buffer protected.",
    ],
    emergencyTitle: "On-trip safety note",
    emergency:
      "Keep passports, eVisas, insurance details and emergency contacts saved offline. India's all-in-one emergency number is 112; hotels and the local agency should also provide the nearest hospital/clinic contact for each base city.",
    footnote:
      "Re-check official health guidance closer to October 2026 because disease risk, vaccine supply, entry health rules and local conditions can change.",
  },
  it: {
    eyebrow: "Salute e sicurezza",
    title: "Precauzioni speciali per un viaggio in India rilassato",
    intro:
      "Questa sezione non sostituisce medico o ambulatorio di medicina dei viaggi. Va usata come checklist di pianificazione per famiglia e agenzia, poi bisogna confermare vaccini, farmaci e assicurazione con un professionista 6-8 settimane prima della partenza.",
    linksLabel: "Link ufficiali salute e sicurezza",
    links: {
      cdc: "CDC salute viaggiatori India",
      fcdo: "Consigli salute UK per India",
      thp: "TravelHealthPro India",
      food: "CDC sicurezza cibo e acqua",
    },
    cards: [
      {
        title: "Prima del viaggio",
        body:
          "Verificare che i vaccini di routine siano aggiornati e discutere con un ambulatorio viaggi quelli specifici per l'India. Epatite A e tifo sono spesso considerati per chi viaggia in India; epatite B, rabbia, encefalite giapponese e prevenzione malaria dipendono da attività, durata, storia medica e percorso esatto.",
      },
      {
        title: "Precauzioni contro zanzare",
        body:
          "Usare repellente, maniche lunghe all'alba/sera e camere con zanzariere o aria condizionata dove possibile. Dengue e altre malattie trasmesse da zanzare sono un rischio pratico; eventuale profilassi antimalarica va decisa con un medico in base a mappe aggiornate e fattori personali.",
      },
      {
        title: "Cibo, acqua e stomaco",
        body:
          "Usare acqua sigillata o trattata correttamente, evitare ghiaccio se non fidato, lavare spesso le mani e scegliere cibo caldo appena cucinato. Portare sali di reidratazione orale e farmaci per lo stomaco consigliati da un medico, perché i disturbi gastrointestinali sono tra le cause più comuni di interruzione del viaggio.",
      },
      {
        title: "Strade, folla e comfort quotidiano",
        body:
          "Usare auto private con cinture, evitare veicoli sovraccarichi, tenere borse sicure nei mercati affollati e proteggere il riposo. L'itinerario evita già treni e troppe giornate lunghe su strada: anche questo fa parte del piano salute e sicurezza.",
      },
    ],
    checklistTitle: "Checklist pratica da portare",
    checklist: [
      "Assicurazione viaggio con copertura medica, evacuazione e interruzione viaggio.",
      "Farmaci prescritti nella confezione originale, con copie delle prescrizioni.",
      "Piccolo kit medico: sali di reidratazione orale, termometro, farmaco per dolore/febbre, farmaci per lo stomaco consigliati da un medico, cerotti, salviette antisettiche e gel mani.",
      "Crema solare alta protezione, cappello, occhiali da sole e abiti traspiranti per caldo e sole.",
      "Repellente zanzare e maniche lunghe leggere per la sera.",
      "Mascherine utili per qualità dell'aria scarsa o spazi chiusi affollati, soprattutto a Delhi/Agra.",
    ],
    cautionTitle: "Precauzioni speciali da confermare",
    cautions: [
      "Il certificato febbre gialla di solito riguarda solo chi arriva da, o transita in, un paese a rischio febbre gialla. Verificarlo se cambia l'instradamento dei voli.",
      "Discutere la prevenzione malaria con un medico di medicina dei viaggi; non basarsi su consigli generici online per decidere farmaci.",
      "Evitare contatto con cani, scimmie e altri animali. In caso di morso o graffio, cercare subito assistenza medica perché la prevenzione della rabbia è urgente.",
      "Evitare di nuotare in fiumi d'acqua dolce. Godersi il Ganga visivamente e ritualmente, ma non trattarlo come tappa balneare.",
      "Caldo, disidratazione e qualità dell'aria possono rendere le visite più faticose. Proteggere partenze presto, pause hotel e cuscinetto Mumbai.",
    ],
    emergencyTitle: "Nota sicurezza durante il viaggio",
    emergency:
      "Tenere passaporti, eVisa, dettagli assicurazione e contatti di emergenza salvati offline. Il numero unico di emergenza in India è 112; hotel e agenzia locale dovrebbero fornire anche il contatto dell'ospedale/clinica più vicino in ogni città base.",
    footnote:
      "Ricontrollare le fonti ufficiali vicino a ottobre 2026 perché rischi sanitari, disponibilità vaccini, regole d'ingresso e condizioni locali possono cambiare.",
  },
} satisfies Record<Language, {
  eyebrow: string;
  title: string;
  intro: string;
  linksLabel: string;
  links: { cdc: string; fcdo: string; thp: string; food: string };
  cards: { title: string; body: string }[];
  checklistTitle: string;
  checklist: string[];
  cautionTitle: string;
  cautions: string[];
  emergencyTitle: string;
  emergency: string;
  footnote: string;
}>;

export function HealthSafetySection({ language }: { language: Language }) {
  const copy = healthCopy[language];
  const t = uiText[language];

  return (
    <section className="section health-section" id="health">
      <div className="section__heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
        <p>{copy.intro}</p>
      </div>
      <div className="visa-links health-links" aria-label={copy.linksLabel}>
        <a href={cdcIndiaUrl} target="_blank" rel="noreferrer">
          <ShieldCheck size={18} /> {copy.links.cdc} <ExternalLink size={15} />
        </a>
        <a href={travelHealthProIndiaUrl} target="_blank" rel="noreferrer">
          {copy.links.thp} <ExternalLink size={15} />
        </a>
        <a href={fcdoIndiaUrl} target="_blank" rel="noreferrer">
          {copy.links.fcdo} <ExternalLink size={15} />
        </a>
        <a href={cdcFoodWaterUrl} target="_blank" rel="noreferrer">
          {copy.links.food} <ExternalLink size={15} />
        </a>
      </div>
      <div className="visa-grid health-grid">
        {copy.cards.map((card) => (
          <article className="visa-card health-card" key={card.title}>
            <HeartPulse size={22} />
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
      <div className="visa-checklist health-checklist">
        <div>
          <h3>{copy.checklistTitle}</h3>
          <ol>
            {copy.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
        <aside>
          <Stethoscope size={22} />
          <strong>{copy.cautionTitle}</strong>
          <ul>
            {copy.cautions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="health-emergency">
        <strong>{copy.emergencyTitle}</strong>
        <p>{copy.emergency}</p>
      </div>
      <p className="visa-footnote">
        {t.sourceFor} health guidance: {copy.links.cdc}, {copy.links.thp}, {copy.links.fcdo}. {copy.footnote}
      </p>
    </section>
  );
}
