import { BedDouble } from "lucide-react";
import { hotels } from "../data/trip";

export function Hotels() {
  return (
    <section className="section" id="hotels">
      <div className="section__heading">
        <p className="eyebrow">Hotel plan</p>
        <h2>Exact nights by base city</h2>
      </div>
      <div className="hotel-grid">
        {hotels.map((stay) => (
          <article className={`hotel-card ${stay.city === "Rishikesh" ? "hotel-card--featured" : ""}`} key={`${stay.city}-${stay.checkIn}`}>
            <div>
              <BedDouble size={20} />
              <strong>{stay.city}</strong>
              <span>{stay.nights} night{stay.nights > 1 ? "s" : ""}</span>
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
