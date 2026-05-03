import { getPlaces } from "../data/localizedTrip";
import { type Language, uiText } from "../data/placeDetails";

export function Gallery({ language }: { language: Language }) {
  const t = uiText[language];
  const places = getPlaces(language);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="section__heading">
        <p className="eyebrow">{t.galleryEyebrow}</p>
        <h2>{t.galleryTitle}</h2>
      </div>
      <div className="gallery">
        {places.map((place) => (
          <a href={place.visualLink} target="_blank" rel="noreferrer" className={`gallery-card gallery-card--${place.accent}`} key={place.id}>
            <img src={place.image} alt="" loading="lazy" />
            <div>
              <span>{place.emoji}</span>
              <strong>{place.name}</strong>
              <small>{place.role}</small>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
