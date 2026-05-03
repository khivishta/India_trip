import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Hotels } from "./components/Hotels";
import { Itinerary } from "./components/Itinerary";
import { PlaceGuide } from "./components/PlaceGuide";
import { RouteFlow } from "./components/RouteFlow";
import { Transport } from "./components/Transport";

const navItems = [
  ["Route", "#route"],
  ["Daily Plan", "#itinerary"],
  ["Transport", "#transport"],
  ["Places", "#places"],
  ["Gallery", "#gallery"],
  ["Hotels", "#hotels"],
];

export default function App() {
  return (
    <>
      <nav className="top-nav" aria-label="Trip sections">
        <a className="brand" href="#top">
          India 2026
        </a>
        <div>
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
      </nav>
      <main>
        <Hero />
        <RouteFlow />
        <Itinerary />
        <Transport />
        <PlaceGuide />
        <Gallery />
        <Hotels />
      </main>
      <footer>
        <strong>Comfort rule:</strong> protect the Rishikesh mountain stop, keep Ellora focused, and preserve the
        final Mumbai buffer.
      </footer>
    </>
  );
}
