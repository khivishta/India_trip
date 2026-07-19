import { getPlaces, getTripStats } from "../data/localizedTrip";
import { type Language, uiText } from "../data/placeDetails";

export function RouteFlow({ language }: { language: Language }) {
  const t = uiText[language];
  const places = getPlaces(language);
  const tripStats = getTripStats(language);
  const routeStops = [
    ...places,
    {
      id: "dehradun-airport",
      emoji: "✈️",
      name: language === "it" ? "Aeroporto di Dehradun" : "Dehradun Airport",
      role:
        language === "it"
          ? "Solo trasferimento: volo diretto DED -> BOM il 20 novembre"
          : "Transfer only: direct DED -> BOM flight on Nov 20",
      accent: "transit",
    },
    {
      id: "mumbai-return",
      emoji: "🛏️",
      name: language === "it" ? "Mumbai finale" : "Final Mumbai",
      role:
        language === "it"
          ? "Camera cuscinetto prima della partenza internazionale delle 03:15"
          : "Protected hotel buffer before the 03:15 international departure",
      accent: "return",
    },
  ];

  return (
    <section className="section route-flow" id="route">
      <div className="section__heading">
        <p className="eyebrow">{t.routeEyebrow}</p>
        <h2>{t.routeTitle}</h2>
        <p>{tripStats.route}</p>
      </div>
      <div className="route-strip">
        {routeStops.map((place, index) => (
          <div className={`route-stop route-stop--${place.accent}`} key={place.id}>
            <span className="route-stop__index">{index + 1}</span>
            <span className="route-stop__emoji">{place.emoji}</span>
            <strong>{place.name}</strong>
            <small>{place.role}</small>
          </div>
        ))}
      </div>
      <div className="callout callout--mountain">
        <strong>{t.requiredStop}</strong> {t.rishikeshCallout}
      </div>
    </section>
  );
}
