import { AlertTriangle, CalendarDays, Hotel, Route } from "lucide-react";
import { type CSSProperties } from "react";
import { getStaySummaries, planningText } from "../data/planning";
import { type Language } from "../data/placeDetails";

export function TripSnapshot({ language }: { language: Language }) {
  const t = planningText[language];
  const staySummaries = getStaySummaries(language);
  const totalNights = staySummaries.reduce((sum, stay) => sum + stay.nights, 0);

  return (
    <section className="section snapshot-section" id="snapshot">
      <div className="section__heading">
        <p className="eyebrow">{t.snapshotEyebrow}</p>
        <h2>{t.snapshotTitle}</h2>
      </div>
      <div className="snapshot-grid">
        <article className="snapshot-card snapshot-card--total">
          <CalendarDays size={24} />
          <strong>{t.totalTrip}</strong>
          <span>{language === "it" ? "24 ottobre-8 novembre 2026" : "Oct 24-Nov 8, 2026"}</span>
        </article>
        <article className="snapshot-card">
          <Hotel size={24} />
          <strong>{t.nightsByPlace}</strong>
          <span>{totalNights} {language === "it" ? "notti totali" : "total nights"}</span>
        </article>
        <article className="snapshot-card snapshot-card--caution">
          <AlertTriangle size={24} />
          <strong>{t.routeReality}</strong>
          <span>{t.routeRealityCopy}</span>
        </article>
      </div>
      <div className="night-bar" aria-label={t.nightsByPlace}>
        {staySummaries.map((stay) => (
          <div
            className="night-bar__segment"
            style={{ "--segment-color": stay.color, flexGrow: stay.nights } as CSSProperties}
            key={`${stay.city}-${stay.checkIn}`}
          >
            <strong>{stay.city}</strong>
            <span>{stay.nights}N</span>
          </div>
        ))}
      </div>
      <div className="stay-grid">
        {staySummaries.map((stay) => (
          <article className="stay-card" style={{ "--segment-color": stay.color } as CSSProperties} key={`${stay.city}-${stay.checkIn}-card`}>
            <Route size={17} />
            <div>
              <strong>{stay.city}</strong>
              <span>
                {stay.checkIn} {"->"} {stay.checkOut} · {stay.nights} {language === "it" ? (stay.nights === 1 ? "notte" : "notti") : (stay.nights === 1 ? "night" : "nights")}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
