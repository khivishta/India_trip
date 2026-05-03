import { ExternalLink } from "lucide-react";
import { routeLegs } from "../data/trip";

export function Transport() {
  return (
    <section className="section" id="transport">
      <div className="section__heading">
        <p className="eyebrow">Route check</p>
        <h2>Flight, car and connection details</h2>
        <p>The one caution leg is Rishikesh/Dehradun to Udaipur; book only a clean same-ticket connection.</p>
      </div>
      <div className="transport-table" role="table" aria-label="Route transport details">
        <div className="transport-table__header" role="row">
          <span>Date</span>
          <span>Transfer</span>
          <span>Mode</span>
          <span>Length</span>
          <span>Status</span>
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
                <a href={leg.source} target="_blank" rel="noreferrer" aria-label={`Source for ${leg.transfer}`}>
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
