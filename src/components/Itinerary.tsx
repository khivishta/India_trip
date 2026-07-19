import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Download, ExternalLink, MapPin } from "lucide-react";
import { getItinerary, type LocalizedItineraryDay } from "../data/localizedTrip";
import {
  getAgencyTasks,
  getTransportSegments,
  mustSeeByDate,
  mustSeeByDateIt,
  planningText,
  type AgencyTask,
  type TransportSegment,
} from "../data/planning";
import { type Language, uiText } from "../data/placeDetails";

const transportEmoji = {
  flight: "✈️",
  train: "🚆",
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

function agencyTasksForDay(dayDate: string, tasks: AgencyTask[]) {
  return tasks.filter((task) => {
    const baseDate = task.date.split(" or ")[0].split(" o ")[0];
    return dayDate.startsWith(baseDate);
  });
}

function csvEscape(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

function downloadFullItineraryCsv(days: LocalizedItineraryDay[], language: Language) {
  const transportSegments = getTransportSegments(language);
  const agencyTasks = getAgencyTasks(language);
  const mustSee = language === "it" ? mustSeeByDateIt : mustSeeByDate;
  const header = [
    "Date",
    "Day",
    "Base",
    "Sleep city",
    "Must-see focus",
    "Route check",
    "Length",
    "Pace",
    "Notes",
    "Agency booking actions",
  ];
  const rows = days.map((day) => {
    const daySegments = transportForDay(day.date, transportSegments);
    const dayAgencyTasks = agencyTasksForDay(day.date, agencyTasks);
    return [
      day.date,
      day.day,
      day.baseCity,
      day.sleepIn,
      mustSee[day.date] ?? day.plan,
      daySegments.map((leg) => `${leg.from} -> ${leg.to}: ${leg.mode} (${leg.status}, ${leg.duration})`).join(" | ") || day.transport,
      daySegments.length > 0 ? daySegments.map((leg) => leg.duration).join(" + ") : day.travelTime,
      day.pace,
      day.notes,
      dayAgencyTasks
        .map((task) => `${task.optional ? "Optional: " : ""}${task.service}; ${task.pickup} -> ${task.dropoff}; ${task.duration}; ${task.action}`)
        .join(" | "),
    ];
  });
  const csv = [header, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "india-2026-full-itinerary-agency-summary.csv";
  link.click();
  URL.revokeObjectURL(url);
}

export function Itinerary({ language }: { language: Language }) {
  const t = uiText[language];
  const pt = planningText[language];
  const localizedItinerary = getItinerary(language);
  const transportSegments = getTransportSegments(language);
  const agencyTasks = getAgencyTasks(language);
  const mustSee = language === "it" ? mustSeeByDateIt : mustSeeByDate;
  const tableRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  function updateTableScrollProgress() {
    const table = tableRef.current;
    if (!table) return;

    const maxScroll = table.scrollWidth - table.clientWidth;
    setScrollProgress(maxScroll > 0 ? table.scrollLeft / maxScroll : 0);
  }

  function scrollTable(direction: "left" | "right") {
    const table = tableRef.current;
    if (!table) return;

    table.scrollBy({
      left: direction === "left" ? -Math.round(table.clientWidth * 0.72) : Math.round(table.clientWidth * 0.72),
      behavior: "smooth",
    });
  }

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
        <span className="legend__item legend__item--train">🚆 {t.train}</span>
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
            <strong>{language === "it" ? "Itinerario completo + prenotazioni agenzia" : "Full itinerary + agency booking actions"}</strong>
            <small>
              {language === "it"
                ? "Una sola tabella per programma, controllo percorso, trasporti, guide, pass VIP e azioni da prenotare."
                : "One table for the daily plan, route check, transport, guides, VIP passes and booking actions."}
            </small>
          </div>
          <button className="export-button export-button--ribbon" onClick={() => downloadFullItineraryCsv(localizedItinerary, language)} type="button">
            <Download size={18} /> {language === "it" ? "Esporta CSV completo" : "Export full CSV"}
          </button>
        </div>
        <div className="table-scroll-tools" aria-label={language === "it" ? "Controlli scorrimento tabella" : "Table scroll controls"}>
          <button onClick={() => scrollTable("left")} type="button" aria-label={language === "it" ? "Scorri a sinistra" : "Scroll left"}>
            <ChevronLeft size={18} />
          </button>
          <div className="scroll-progress" aria-hidden="true">
            <span style={{ width: `${Math.max(10, scrollProgress * 100)}%` }} />
          </div>
          <button onClick={() => scrollTable("right")} type="button" aria-label={language === "it" ? "Scorri a destra" : "Scroll right"}>
            <ChevronRight size={18} />
          </button>
          <small>{language === "it" ? "Usa le frecce o scorri lateralmente" : "Use arrows or swipe sideways"}</small>
        </div>
        <div className="itinerary-table" role="table" aria-label={pt.fullTableTitle} ref={tableRef} onScroll={updateTableScrollProgress}>
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
            <span>{language === "it" ? "Prenotazioni agenzia" : "Agency booking"}</span>
          </div>
          {localizedItinerary.map((day) => {
            const daySegments = transportForDay(day.date, transportSegments);
            const dayAgencyTasks = agencyTasksForDay(day.date, agencyTasks);
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
                <span className="agency-action-cell">
                  {dayAgencyTasks.length > 0 ? (
                    dayAgencyTasks.map((task) => (
                      <span className={`agency-action-pill route-leg-pill--${task.category}`} key={`${task.date}-${task.pickup}-${task.dropoff}`}>
                        {task.optional && <em>{pt.optionalLabel}</em>}
                        <strong>{task.service}</strong>
                        <small>
                          {task.pickup} {"->"} {task.dropoff}
                        </small>
                        <small>{task.duration}</small>
                        <small>{task.action}</small>
                      </span>
                    ))
                  ) : (
                    <small>{language === "it" ? "Nessuna azione agenzia" : "No agency action"}</small>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
