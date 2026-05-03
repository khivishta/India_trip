import { ExternalLink } from "lucide-react";
import { places } from "../data/trip";

export function PlaceGuide() {
  return (
    <section className="section" id="places">
      <div className="section__heading">
        <p className="eyebrow">Place detail guide</p>
        <h2>What each stop is about and why it belongs</h2>
      </div>
      <div className="place-grid">
        {places.map((place) => (
          <article className={`place-card place-card--${place.accent}`} key={place.id}>
            <img src={place.image} alt={`${place.name} visual preview`} loading="lazy" />
            <div className="place-card__body">
              <span className="place-card__role">{place.role}</span>
              <h3>
                {place.emoji} {place.name}
              </h3>
              <dl>
                <dt>Why visit</dt>
                <dd>{place.why}</dd>
                <dt>History / context</dt>
                <dd>{place.history}</dd>
                <dt>What to focus on</dt>
                <dd>{place.focus}</dd>
                <dt>Comfort note</dt>
                <dd>{place.comfort}</dd>
              </dl>
              <div className="place-card__links">
                <a href={place.visualLink} target="_blank" rel="noreferrer">
                  Open image inspiration <ExternalLink size={15} />
                </a>
                <span>{place.imageCredit}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
