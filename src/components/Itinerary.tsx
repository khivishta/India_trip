import { Clock, ExternalLink, MapPin } from "lucide-react";
import { getItinerary, type LocalizedItineraryDay } from "../data/localizedTrip";
import { getTransportSegments, mustSeeByDate, mustSeeByDateIt, planningText, type TransportSegment } from "../data/planning";
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

function transportForDay(dayDate: string, segments: TransportSegment[]) {
  return segments.filter((segment) => dayDate.startsWith(segment.date));
}

export function Itinerary({ language }: { language: Language }) {
  const t = uiText[language];
  const pt = planningText[language];
  const localizedItinerary = getItinerary(language);
  const transportSegments = getTransportSegments(language);
  const mustSee = language === "it" ? mustSeeByDateIt : mustSeeByDate;

  return (
    <section className="section" id="itinerary">
      <div className="section__heading">
        <p className="eyebrow">{t.itineraryEyebrow}</p>
        <h2>{t.itineraryTitle}</h2>
      </div>
      <div className="legend">
        <span className="legend__item legend__item--connection">
          {language === "it" ? "Coincidenza · Volo con coincidenza" : "Connection · Connected flight"}
        </span>
        <span className="legend__item legend__item--vip">
          VIP · {language === "it" ? "Guida / pass" : "Guide / passes"}
        </span>
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
      <div className="itinerary-table-wrap">
        <div className="table-ribbon">
          <div>
            <p className="eyebrow">{pt.fullTableTitle}</p>
            <strong>{language === "it" ? "Itinerario completo + controllo percorso" : "Full itinerary + route check"}</strong>
            <small>{t.routeCheckIntro}</small>
          </div>
        </div>
        <div className="itinerary-table" role="table" aria-label={pt.fullTableTitle}>
          <div className="itinerary-table__header" role="row">
            <span>{t.dateHeader}</span>
            <span>{language === "it" ? "Giorno" : "Day"}</span>
            <span>{language === "it" ? "Base" : "Base"}</span>
            <span>{t.sleepIn}</span>
            <span>{pt.mustSeeHeader}</span>
            <span>{language === "it" ? "Controllo percorso" : "Route check"}</span>
            <span>{t.lengthHeader}</span>
            <span>{language === "it" ? "Ritmo" : "Pace"}</span>
            <span>{pt.notesHeader}</span>
          </div>
          {localizedItinerary.map((day) => {
            const daySegments = transportForDay(day.date, transportSegments);
            return (
              <div className={`itinerary-table__row transport-row--${day.transportKind}`} role="row" key={`${day.date}-${day.day}-table`}>
                <span>{day.date}</span>
                <span>{day.day}</span>
                <span>{day.baseCity}</span>
                <span>{day.sleepIn}</span>
                <span>{mustSee[day.date] ?? day.plan}</span>
                <span className="route-check-cell">
                  {daySegments.length > 0 ? (
                    daySegments.map((leg) => (
                      <span className={`route-leg-pill route-leg-pill--${leg.category}`} key={`${leg.date}-${leg.from}-${leg.to}`}>
                        <strong>
                          {leg.from} {"->"} {leg.to}
                        </strong>
                        <small>
                          {leg.mode} · {leg.status}
                          {leg.evidence && (
                            <a href={leg.evidence} target="_blank" rel="noreferrer" aria-label={`${t.sourceFor} ${leg.from} ${leg.to}`}>
                              <ExternalLink size={13} />
                            </a>
                          )}
                        </small>
                      </span>
                    ))
                  ) : (
                    <span className={`mode-pill mode-pill--${day.transportKind === "flight" ? "flight-direct" : day.transportKind}`}>
                      {day.transport}
                    </span>
                  )}
                </span>
                <span>{daySegments.length > 0 ? daySegments.map((leg) => leg.duration).join(" + ") : day.travelTime}</span>
                <span>
                  <span className={`pace pace--${paceClassName(day.pace, language)}`}>{day.pace}</span>
                </span>
                <span>{day.notes}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
