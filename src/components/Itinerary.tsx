import { Clock, MapPin } from "lucide-react";
import { getItinerary, type LocalizedItineraryDay } from "../data/localizedTrip";
import { type Language, uiText } from "../data/placeDetails";

const transportEmoji = {
  flight: "✈️",
  car: "🚗",
  taxi: "🚕",
  transfer: "🚐",
  boat: "⛴️",
};

function paceClassName(pace: string, language: Language) {
  if (language === "it") {
    const classes: Record<string, string> = {
      Facile: "easy",
      Moderato: "moderate",
      "Giorno di viaggio": "travel-day",
      Cuscinetto: "buffer",
    };
    return classes[pace] ?? "moderate";
  }

  return pace.toLowerCase().replace(" ", "-");
}

function DayCard({ day, language }: { day: LocalizedItineraryDay; language: Language }) {
  const t = uiText[language];
  const isRishikesh = day.baseCity.includes("Rishikesh") || day.sleepIn === "Rishikesh";

  return (
    <article className={`day-card day-card--${day.transportKind} ${isRishikesh ? "day-card--featured" : ""}`}>
      <div className="day-card__date">
        <strong>{day.date}</strong>
        <span>{day.day}</span>
      </div>
      <div className="day-card__body">
        <div className="day-card__topline">
          <span className={`pace pace--${paceClassName(day.pace, language)}`}>{day.pace}</span>
          <span className="sleep">
            <MapPin size={15} /> {t.sleepIn} {day.sleepIn}
          </span>
        </div>
        <h3>{day.baseCity}</h3>
        <p>{day.plan}</p>
        <div className="transport-chip">
          <span>{transportEmoji[day.transportKind]}</span>
          <strong>{day.transport}</strong>
        </div>
        <div className="meta-grid">
          <span>
            <Clock size={15} /> {day.travelTime}
          </span>
          <span>{day.connection}</span>
        </div>
        <p className="note">{day.notes}</p>
      </div>
    </article>
  );
}

export function Itinerary({ language }: { language: Language }) {
  const t = uiText[language];
  const localizedItinerary = getItinerary(language);

  return (
    <section className="section" id="itinerary">
      <div className="section__heading">
        <p className="eyebrow">{t.itineraryEyebrow}</p>
        <h2>{t.itineraryTitle}</h2>
      </div>
      <div className="legend">
        <span className="legend__item legend__item--flight">✈️ {t.flight}</span>
        <span className="legend__item legend__item--car">🚗 {t.privateCar}</span>
        <span className="legend__item legend__item--taxi">🚕 {t.taxiTransfer}</span>
        <span className="legend__item legend__item--boat">⛴️ {t.boatFerry}</span>
      </div>
      <div className="itinerary-list">
        {localizedItinerary.map((day) => (
          <DayCard day={day} language={language} key={`${day.date}-${day.baseCity}`} />
        ))}
      </div>
    </section>
  );
}
