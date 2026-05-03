import { CalendarDays, Car, Map, Mountain, Plane, ShieldCheck } from "lucide-react";
import { type Language, uiText } from "../data/placeDetails";

export function Hero({ language }: { language: Language }) {
  const t = uiText[language];
  return (
    <header className="hero" id="top">
      <div className="hero__content">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.heroTitle}</h1>
        <p className="hero__lede">{t.heroLead}</p>
        <div className="hero__actions" aria-label="Page sections">
          <a href="#itinerary">{t.dailyPlanCta}</a>
          <a href="#places">{t.placeGuideCta}</a>
          <a href="#transport">{t.routeCheckCta}</a>
        </div>
      </div>
      <div className="hero__panel" aria-label="Trip summary">
        <div className="stat">
          <CalendarDays size={20} />
          <span>{t.dates}</span>
        </div>
        <div className="stat">
          <Map size={20} />
          <span>{t.nights}</span>
        </div>
        <div className="stat">
          <Plane size={20} />
          <span>{t.flights}</span>
        </div>
        <div className="stat">
          <Car size={20} />
          <span>{t.drives}</span>
        </div>
        <div className="stat stat--mountain">
          <Mountain size={20} />
          <span>{t.rishikeshIncluded}</span>
        </div>
        <div className="stat">
          <ShieldCheck size={20} />
          <span>{t.buffer}</span>
        </div>
      </div>
    </header>
  );
}
