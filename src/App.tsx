import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Hotels } from "./components/Hotels";
import { HealthSafetySection } from "./components/HealthSafetySection";
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
  const [pageProgress, setPageProgress] = useState(0);
  const t = uiText[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    function updateProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setPageProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".hero, .section, .route-stop, .snapshot-card, .stay-card, .day-card, .itinerary-table-wrap, .place-card, .attraction-card, .visa-card, .health-card, .hotel-card",
      ),
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 38}ms`);
      if (reduceMotion) {
        element.classList.add("is-visible");
      }
    });

    const fallback = window.setTimeout(() => {
      elements.forEach((element) => element.classList.add("is-visible"));
    }, 900);

    if (reduceMotion) {
      window.clearTimeout(fallback);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
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
    [t.health, "#health"],
    [t.hotels, "#hotels"],
  ];

  return (
    <>
      <div className="page-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${pageProgress})` }} />
      </div>
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
        <HealthSafetySection language={language} />
        <Hotels language={language} />
      </main>
      <footer>
        {t.footer}
      </footer>
    </>
  );
}
