import { ExternalLink } from "lucide-react";
import { places } from "../data/trip";
import { getAttractions, planningText, polishItalianText } from "../data/planning";
import { type Language, placeDetails, uiText } from "../data/placeDetails";

export function PlaceGuide({ language }: { language: Language }) {
  const t = uiText[language];
  const pt = planningText[language];
  return (
    <section className="section" id="places">
      <div className="section__heading">
        <p className="eyebrow">{t.placeEyebrow}</p>
        <h2>{t.placeTitle}</h2>
        <p>{t.placeIntro}</p>
      </div>
      <div className="place-grid">
        {places.map((place) => {
          const rawDetail = placeDetails[place.id][language];
          const detail =
            language === "it"
              ? {
                  ...rawDetail,
                  role: polishItalianText(rawDetail.role),
                  overview: polishItalianText(rawDetail.overview),
                  context: polishItalianText(rawDetail.context),
                  bestUse: polishItalianText(rawDetail.bestUse),
                }
              : rawDetail;
          const attractions = getAttractions(place.id, language);
          return (
          <article className={`place-card place-card--${place.accent}`} key={place.id}>
            <div className="place-card__body">
              <span className="place-card__role">{detail.role}</span>
              <h3>
                {place.emoji} {detail.name}
              </h3>
              <div className="chapter-summary">
                <section>
                  <h4>{t.overview}</h4>
                  <p>{detail.overview}</p>
                </section>
                <section>
                  <h4>{t.context}</h4>
                  <p>{detail.context}</p>
                </section>
                <section>
                  <h4>{t.bestUse}</h4>
                  <p>{detail.bestUse}</p>
                </section>
              </div>
              <div className="location-list">
                {attractions.map((location) => (
                  <section className="location-card attraction-card" key={location.name}>
                    <div className="attraction-collage" aria-label={`${location.name} visual collage`}>
                      {location.galleryImages.map((image, index) => (
                        <img src={image} alt={`${location.name} visual ${index + 1}`} loading="lazy" key={`${location.name}-${image}`} />
                      ))}
                    </div>
                    <div className="attraction-card__content">
                    <h4>
                      {location.name}
                      {location.optional && <span>{pt.attractionOptional}</span>}
                    </h4>
                    <div className="location-card__grid">
                      <div>
                        <strong>{t.what}</strong>
                        <p>{location.description}</p>
                      </div>
                      <div>
                        <strong>{t.why}</strong>
                        <p>{location.why}</p>
                      </div>
                      <div className="location-card__history">
                        <strong>{t.history}</strong>
                        <div className="history-copy">
                          {location.detailSections.map((section) => (
                            <section className="detail-copy-section" key={`${location.name}-${section.title}`}>
                              <h5>{section.title}</h5>
                              <p>{section.body}</p>
                            </section>
                          ))}
                        </div>
                      </div>
                    </div>
                    </div>
                  </section>
                ))}
              </div>
              <div className="place-card__links">
                <a href={place.visualLink} target="_blank" rel="noreferrer">
                  {t.imageLink} <ExternalLink size={15} />
                </a>
                <span>{place.imageCredit}</span>
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
