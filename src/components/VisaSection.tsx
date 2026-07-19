import { ExternalLink, FileCheck2, ShieldCheck } from "lucide-react";
import { type Language, uiText } from "../data/placeDetails";

const officialEVisaUrl = "https://indianvisaonline.gov.in/evisa/tvoa.html";
const officialVisaHomeUrl = "https://www.indianvisaonline.gov.in/";
const eTouristFeeUrl = "https://indianvisaonline.gov.in/evisa/images/Etourist_fee_final.pdf";

const visaCopy = {
  en: {
    eyebrow: "Visa planning",
    title: "India eVisa: what Italian and Mauritian passport holders should do",
    intro:
      "For this family trip, Italian and Mauritian passport holders should plan around the official Government of India eVisa portal. Rules and fees can change before November 2026, so treat this as a planning checklist and confirm again before submitting.",
    official: "Official Government of India eVisa portal",
    home: "India Visa Online homepage",
    fees: "Official e-Tourist fee table",
    cards: [
      {
        title: "Italian passports",
        body:
          "Italian ordinary passport holders are listed in the official e-Tourist visa fee table and should normally use the e-Tourist Visa route for a holiday itinerary like this. Do not use a third-party visa agency website unless there is a specific reason; start from the official portal and follow the current instructions shown there.",
      },
      {
        title: "Mauritian passports",
        body:
          "Mauritian ordinary passport holders are included in official Indian eVisa eligibility lists published by Indian missions. Use the same Government of India eVisa portal, select Mauritius as nationality, and confirm the available e-Tourist option and fee during the application.",
      },
    ],
    stepsTitle: "How to apply",
    steps: [
      "Use only the official Government of India eVisa website.",
      "Choose e-Tourist Visa unless the trip purpose changes.",
      "Apply with the passport that will be used for travel; passport details must match the ETA.",
      "Upload the required passport page and photo exactly as requested by the portal.",
      "Pay the fee online and wait for the ETA status to show as GRANTED before travelling.",
      "Carry a printed or saved copy of the Electronic Travel Authorization with the passport.",
    ],
    timingTitle: "Timing and cautions",
    timing:
      "The official eVisa guidance says eligible e-Tourist applicants should apply online at least 4 days before arrival. For this trip, applying earlier is smarter, but not before the portal allows the selected visa window. Re-check validity, fee, arrival airports and any e-Arrival card requirement closer to travel.",
    warning:
      "eVisa is generally for ordinary passports. Diplomatic, official, service or special passport holders may need a regular visa through an Indian mission instead.",
  },
  it: {
    eyebrow: "Visti",
    title: "eVisa India: cosa devono fare passaporti italiani e mauriziani",
    intro:
      "Per questo viaggio in famiglia, chi viaggia con passaporto italiano o mauriziano dovrebbe usare il portale eVisa ufficiale del Governo indiano. Regole e costi possono cambiare prima di novembre 2026, quindi questa è una checklist di pianificazione da verificare di nuovo prima della domanda.",
    official: "Portale eVisa ufficiale del Governo indiano",
    home: "Home India Visa Online",
    fees: "Tabella ufficiale tariffe e-Tourist",
    cards: [
      {
        title: "Passaporti italiani",
        body:
          "I titolari di passaporto ordinario italiano compaiono nella tabella ufficiale delle tariffe e-Tourist e normalmente dovrebbero usare l'e-Tourist Visa per un itinerario turistico come questo. Evitare siti terzi, salvo motivo specifico: partire dal portale ufficiale e seguire le istruzioni aggiornate mostrate lì.",
      },
      {
        title: "Passaporti mauriziani",
        body:
          "I titolari di passaporto ordinario mauriziano risultano inclusi negli elenchi ufficiali di idoneità eVisa pubblicati dalle missioni indiane. Usare lo stesso portale del Governo indiano, selezionare Mauritius come nazionalità e confermare opzione e-Tourist e tariffa durante la domanda.",
      },
    ],
    stepsTitle: "Come fare domanda",
    steps: [
      "Usare solo il sito eVisa ufficiale del Governo indiano.",
      "Scegliere e-Tourist Visa, salvo cambio dello scopo del viaggio.",
      "Fare domanda con il passaporto che verrà usato per viaggiare; i dati devono coincidere con l'ETA.",
      "Caricare pagina del passaporto e foto secondo le specifiche richieste dal portale.",
      "Pagare online e attendere che lo stato dell'ETA risulti GRANTED prima di partire.",
      "Portare una copia stampata o salvata dell'Electronic Travel Authorization insieme al passaporto.",
    ],
    timingTitle: "Tempi e attenzioni",
    timing:
      "Le istruzioni ufficiali eVisa indicano che i richiedenti e-Tourist idonei devono fare domanda online almeno 4 giorni prima dell'arrivo. Per questo viaggio conviene muoversi prima, ma non prima della finestra consentita dal tipo di visto scelto. Ricontrollare validità, costo, aeroporti di arrivo ed eventuale e-Arrival card più vicino alla partenza.",
    warning:
      "L'eVisa è in generale per passaporti ordinari. Chi ha passaporto diplomatico, ufficiale, di servizio o speciale potrebbe dover richiedere un visto regolare tramite una missione indiana.",
  },
} satisfies Record<Language, {
  eyebrow: string;
  title: string;
  intro: string;
  official: string;
  home: string;
  fees: string;
  cards: { title: string; body: string }[];
  stepsTitle: string;
  steps: string[];
  timingTitle: string;
  timing: string;
  warning: string;
}>;

export function VisaSection({ language }: { language: Language }) {
  const copy = visaCopy[language];
  const t = uiText[language];

  return (
    <section className="section visa-section" id="visa">
      <div className="section__heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
        <p>{copy.intro}</p>
      </div>
      <div className="visa-links" aria-label={language === "it" ? "Link ufficiali visto" : "Official visa links"}>
        <a href={officialEVisaUrl} target="_blank" rel="noreferrer">
          <ShieldCheck size={18} /> {copy.official} <ExternalLink size={15} />
        </a>
        <a href={officialVisaHomeUrl} target="_blank" rel="noreferrer">
          {copy.home} <ExternalLink size={15} />
        </a>
        <a href={eTouristFeeUrl} target="_blank" rel="noreferrer">
          {copy.fees} <ExternalLink size={15} />
        </a>
      </div>
      <div className="visa-grid">
        {copy.cards.map((card) => (
          <article className="visa-card" key={card.title}>
            <FileCheck2 size={22} />
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
      <div className="visa-checklist">
        <div>
          <h3>{copy.stepsTitle}</h3>
          <ol>
            {copy.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <aside>
          <strong>{copy.timingTitle}</strong>
          <p>{copy.timing}</p>
          <small>{copy.warning}</small>
        </aside>
      </div>
      <p className="visa-footnote">{t.sourceFor} eVisa: {copy.official}</p>
    </section>
  );
}
