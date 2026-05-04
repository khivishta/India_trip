import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Hotels } from "./components/Hotels";
import { Itinerary } from "./components/Itinerary";
import { PlaceGuide } from "./components/PlaceGuide";
import { RouteFlow } from "./components/RouteFlow";
import { TripSnapshot } from "./components/TripSnapshot";
import { VisaSection } from "./components/VisaSection";
import { type Language, uiText } from "./data/placeDetails";

const languageStorageKey = "india-trip-language";

function getInitialLanguage(): Language {
  const stored = window.localStorage.getItem(languageStorageKey);

  if (stored === "en" || stored === "it") {
    return stored;
  }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return browserLanguages.some((value) => value.toLowerCase().startsWith("it")) ? "it" : "en";
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage());
  const t = uiText[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function chooseLanguage(nextLanguage: Language) {
    window.localStorage.setItem(languageStorageKey, nextLanguage);
    setLanguage(nextLanguage);
  }

  const navItems = [
    [t.route, "#route"],
    [t.snapshot, "#snapshot"],
    [t.dailyPlan, "#itinerary"],
    [t.places, "#places"],
    [t.visa, "#visa"],
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
          <button className={language === "en" ? "active" : ""} onClick={() => chooseLanguage("en")} type="button">
            {t.english}
          </button>
          <button className={language === "it" ? "active" : ""} onClick={() => chooseLanguage("it")} type="button">
            {t.italian}
          </button>
        </div>
      </nav>
      <main>
        <Hero language={language} />
        <RouteFlow language={language} />
        <TripSnapshot language={language} />
        <Itinerary language={language} />
        <PlaceGuide language={language} />
        <VisaSection language={language} />
        <Hotels language={language} />
      </main>
      <footer>
        {t.footer}
      </footer>
    </>
  );
}
