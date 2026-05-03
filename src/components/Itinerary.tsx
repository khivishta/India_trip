import { Clock, MapPin } from "lucide-react";
import { itinerary, type ItineraryDay } from "../data/trip";

const transportEmoji = {
  flight: "✈️",
  car: "🚗",
  taxi: "🚕",
  transfer: "🚐",
  boat: "⛴️",
};

function DayCard({ day }: { day: ItineraryDay }) {
  const isRishikesh = day.baseCity.includes("Rishikesh") || day.sleepIn === "Rishikesh";
  return (
    <article className={`day-card day-card--${day.transportKind} ${isRishikesh ? "day-card--featured" : ""}`}>
      <div className="day-card__date">
        <strong>{day.date}</strong>
        <span>{day.day}</span>
      </div>
      <div className="day-card__body">
        <div className="day-card__topline">
          <span className={`pace pace--${day.pace.toLowerCase().replace(" ", "-")}`}>{day.pace}</span>
          <span className="sleep">
            <MapPin size={15} /> Sleep in {day.sleepIn}
          </span>
        </div>
        <h3>{day.baseCity}</h3>
        <p>{day.plan}</p>
        <div className="transport-chip">
          <span>{transportEmoji[day.transportKind]}</span>
          <strong>{day.transport}</strong>
        </div>
        <div className="meta-grid">
          <span>
            <Clock size={15} /> {day.travelTime}
          </span>
          <span>{day.connection}</span>
        </div>
        <p className="note">{day.notes}</p>
      </div>
    </article>
  );
}

export function Itinerary() {
  return (
    <section className="section" id="itinerary">
      <div className="section__heading">
        <p className="eyebrow">Daily itinerary</p>
        <h2>Dates, sleep city, transport and comfort notes</h2>
      </div>
      <div className="legend">
        <span className="legend__item legend__item--flight">✈️ Flight</span>
        <span className="legend__item legend__item--car">🚗 Private car</span>
        <span className="legend__item legend__item--taxi">🚕 Taxi / transfer</span>
        <span className="legend__item legend__item--boat">⛴️ Boat / ferry</span>
      </div>
      <div className="itinerary-list">
        {itinerary.map((day) => (
          <DayCard day={day} key={`${day.date}-${day.baseCity}`} />
        ))}
      </div>
    </section>
  );
}
