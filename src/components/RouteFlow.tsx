import { places, tripStats } from "../data/trip";

export function RouteFlow() {
  return (
    <section className="section route-flow" id="route">
      <div className="section__heading">
        <p className="eyebrow">Route flow</p>
        <h2>Built around beauty without overworking the trip</h2>
        <p>{tripStats.route}</p>
      </div>
      <div className="route-strip">
        {places.map((place, index) => (
          <div className={`route-stop route-stop--${place.accent}`} key={place.id}>
            <span className="route-stop__index">{index + 1}</span>
            <span className="route-stop__emoji">{place.emoji}</span>
            <strong>{place.name}</strong>
            <small>{place.role}</small>
          </div>
        ))}
      </div>
      <div className="callout callout--mountain">
        <strong>Required stop:</strong> Rishikesh is included for Nov 2-Nov 4, with
        one full day by the Ganga and Himalayan foothills before continuing to Udaipur.
      </div>
    </section>
  );
}
