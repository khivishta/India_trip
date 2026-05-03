import { CalendarDays, Car, Map, Mountain, Plane, ShieldCheck } from "lucide-react";
import { tripStats } from "../data/trip";

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__content">
        <p className="eyebrow">India 2026 relaxed family route</p>
        <h1>Mumbai to mountains, palaces, caves and lake country</h1>
        <p className="hero__lede">
          A comfort-first itinerary for {tripStats.dates}, keeping Ellora Caves,
          Rishikesh, Udaipur and a protected Mumbai buffer.
        </p>
        <div className="hero__actions" aria-label="Page sections">
          <a href="#itinerary">Daily plan</a>
          <a href="#places">Place guide</a>
          <a href="#transport">Route check</a>
        </div>
      </div>
      <div className="hero__panel" aria-label="Trip summary">
        <div className="stat">
          <CalendarDays size={20} />
          <span>{tripStats.dates}</span>
        </div>
        <div className="stat">
          <Map size={20} />
          <span>{tripStats.nights}</span>
        </div>
        <div className="stat">
          <Plane size={20} />
          <span>{tripStats.flights} planned flight legs</span>
        </div>
        <div className="stat">
          <Car size={20} />
          <span>{tripStats.privateDrives} short or moderate drives</span>
        </div>
        <div className="stat stat--mountain">
          <Mountain size={20} />
          <span>Rishikesh included as the mountain/river stop</span>
        </div>
        <div className="stat">
          <ShieldCheck size={20} />
          <span>Protected Mumbai buffer on {tripStats.buffer}</span>
        </div>
      </div>
    </header>
  );
}
