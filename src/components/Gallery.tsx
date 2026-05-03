import { places } from "../data/trip";

export function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="section__heading">
        <p className="eyebrow">Visual gallery</p>
        <h2>Quick visual read of the trip</h2>
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
