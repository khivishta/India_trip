import { BedDouble } from "lucide-react";
import { getHotels } from "../data/localizedTrip";
import { type Language, uiText } from "../data/placeDetails";

export function Hotels({ language }: { language: Language }) {
  const t = uiText[language];
  const hotels = getHotels(language);

  return (
    <section className="section" id="hotels">
      <div className="section__heading">
        <p className="eyebrow">{t.hotelsEyebrow}</p>
        <h2>{t.hotelsTitle}</h2>
      </div>
      <div className="hotel-grid">
        {hotels.map((stay) => (
          <article className={`hotel-card ${stay.city === "Rishikesh" ? "hotel-card--featured" : ""}`} key={`${stay.city}-${stay.checkIn}`}>
            <div>
              <BedDouble size={20} />
              <strong>{stay.city}</strong>
              <span>
                {stay.nights} {stay.nights > 1 ? t.nightPlural : t.nightSingular}
              </span>
            </div>
            <p className="hotel-card__dates">
              {stay.checkIn} {"->"} {stay.checkOut}
            </p>
            <p>{stay.direction}</p>
            <small>{stay.notes}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
