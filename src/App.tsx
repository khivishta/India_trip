import { useState } from "react";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Hotels } from "./components/Hotels";
import { Itinerary } from "./components/Itinerary";
import { PlaceGuide } from "./components/PlaceGuide";
import { RouteFlow } from "./components/RouteFlow";
import { Transport } from "./components/Transport";
import { type Language, uiText } from "./data/placeDetails";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const t = uiText[language];
  const navItems = [
    [t.route, "#route"],
    [t.dailyPlan, "#itinerary"],
    [t.transport, "#transport"],
    [t.places, "#places"],
    [t.gallery, "#gallery"],
    [t.hotels, "#hotels"],
  ];

  return (
    <>
      <nav className="top-nav" aria-label={t.navLabel}>
        <a className="brand" href="#top">
          {t.brand}
        </a>
        <div>
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="language-toggle" aria-label={t.language}>
          <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} type="button">
            {t.english}
          </button>
          <button className={language === "it" ? "active" : ""} onClick={() => setLanguage("it")} type="button">
            {t.italian}
          </button>
        </div>
      </nav>
      <main>
        <Hero language={language} />
        <RouteFlow language={language} />
        <Itinerary language={language} />
        <Transport language={language} />
        <PlaceGuide language={language} />
        <Gallery language={language} />
        <Hotels language={language} />
      </main>
      <footer>
        {t.footer}
      </footer>
    </>
  );
}
