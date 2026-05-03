import { ExternalLink } from "lucide-react";
import { getFlightEvidence, getTransportSegments, planningText } from "../data/planning";
import { type Language, uiText } from "../data/placeDetails";

export function Transport({ language }: { language: Language }) {
  const t = uiText[language];
  const pt = planningText[language];
  const transportSegments = getTransportSegments(language);
  const flightEvidence = getFlightEvidence(language);

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
          <span>{language === "it" ? "Da / a" : "From / to"}</span>
          <span>{t.modeHeader}</span>
          <span>{t.lengthHeader}</span>
          <span>{t.statusHeader}</span>
        </div>
        {transportSegments.map((leg) => (
          <div className={`transport-row transport-row--${leg.category}`} role="row" key={`${leg.date}-${leg.from}-${leg.to}`}>
            <span>{leg.date}</span>
            <span>
              <strong>{leg.from} {"->"} {leg.to}</strong>
              <small>{leg.action}</small>
            </span>
            <span>{leg.mode}</span>
            <span>{leg.duration}</span>
            <span className={`status status--${leg.category}`}>
              {leg.status}
              {leg.evidence && (
                <a href={leg.evidence} target="_blank" rel="noreferrer" aria-label={`${t.sourceFor} ${leg.from} ${leg.to}`}>
                  <ExternalLink size={14} />
                </a>
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="evidence-panel">
        <div className="section__heading">
          <p className="eyebrow">{pt.routeEvidenceTitle}</p>
          <h3>{pt.routeEvidenceIntro}</h3>
        </div>
        <div className="evidence-grid">
          {flightEvidence.map((item) => (
            <article className={`evidence-card transport-row--${item.category}`} key={item.route}>
              <strong>{item.route}</strong>
              <p>{item.verdict}</p>
              <small>{pt.bookingInstruction}: {item.instruction}</small>
              <a href={item.evidence} target="_blank" rel="noreferrer">
                {pt.evidence} <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
        <article className="reorder-note">
          <strong>{pt.whyNotReorder}</strong>
          <p>{pt.whyNotReorderCopy}</p>
        </article>
      </div>
    </section>
  );
}
