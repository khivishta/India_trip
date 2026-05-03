import { ExternalLink } from "lucide-react";
import { getRouteLegs } from "../data/localizedTrip";
import { type Language, uiText } from "../data/placeDetails";

export function Transport({ language }: { language: Language }) {
  const t = uiText[language];
  const routeLegs = getRouteLegs(language);

  return (
    <section className="section" id="transport">
      <div className="section__heading">
        <p className="eyebrow">{t.routeCheckEyebrow}</p>
        <h2>{t.routeCheckTitle}</h2>
        <p>{t.routeCheckIntro}</p>
      </div>
      <div className="transport-table" role="table" aria-label="Route transport details">
        <div className="transport-table__header" role="row">
          <span>{t.dateHeader}</span>
          <span>{t.transferHeader}</span>
          <span>{t.modeHeader}</span>
          <span>{t.lengthHeader}</span>
          <span>{t.statusHeader}</span>
        </div>
        {routeLegs.map((leg) => (
          <div className={`transport-row transport-row--${leg.kind}`} role="row" key={`${leg.date}-${leg.transfer}`}>
            <span>{leg.date}</span>
            <span>
              <strong>{leg.transfer}</strong>
              <small>{leg.connection}</small>
            </span>
            <span>{leg.mode}</span>
            <span>{leg.duration}</span>
            <span className={`status status--${leg.comfort.toLowerCase()}`}>
              {leg.status}
              {leg.source && (
                <a href={leg.source} target="_blank" rel="noreferrer" aria-label={`${t.sourceFor} ${leg.transfer}`}>
                  <ExternalLink size={14} />
                </a>
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
