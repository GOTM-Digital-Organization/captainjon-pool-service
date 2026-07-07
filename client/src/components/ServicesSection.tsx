/**
 * ServicesSection — Editorial asymmetric layout
 * Gulf Coast Authority: navy authority bands, amber gold accents
 */

import { useEffect, useRef } from "react";
import { Droplets, Wrench, Zap, Waves, Filter, Thermometer } from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Weekly Pool Cleaning",
    desc: "Skimming, brushing walls & steps, vacuuming, emptying baskets — your pool sparkling every week without fail.",
    keyword: "Sarasota's #1 Requested Service",
  },
  {
    icon: Droplets,
    title: "Chemical Balancing",
    desc: "Professional water chemistry testing and balancing. All chemicals included in your service plan — no extra charges.",
    keyword: "Chemicals Included",
  },
  {
    icon: Filter,
    title: "Filter Maintenance",
    desc: "Backwashing, filter cleaning, and pressure checks to keep your filtration system running at peak efficiency.",
    keyword: "Extends Equipment Life",
  },
  {
    icon: Wrench,
    title: "Equipment Repair",
    desc: "Pump & filter replacement, heater installation, general repairs. We fix what others miss — fast.",
    keyword: "Same-Week Response",
  },
  {
    icon: Zap,
    title: "Algae Removal",
    desc: "Green pool? We'll have it crystal clear with our 48-Hour SuperClean Guarantee. No excuses.",
    keyword: "48-Hr Guarantee",
  },
  {
    icon: Thermometer,
    title: "Salt Cell Cleaning",
    desc: "Regular salt cell inspection and cleaning to maintain optimal sanitizer production year-round.",
    keyword: "Extends Salt Cell Life",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll<HTMLElement>(".service-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20" style={{ backgroundColor: "oklch(0.98 0.003 250)" }}>
      <div className="container" ref={sectionRef}>
        {/* Asymmetric header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-8" style={{ backgroundColor: "oklch(0.74 0.155 75)" }} />
              <span
                className="text-xs uppercase tracking-widest font-bold"
                style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif" }}
              >
                What We Do
              </span>
            </div>
            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "oklch(0.18 0.04 250)",
                lineHeight: 1.1,
              }}
            >
              Complete Pool Services
              <br />
              <span style={{ color: "oklch(0.74 0.155 75)" }}>in Sarasota & Manatee County</span>
            </h2>
          </div>
          <p
            className="lg:max-w-xs text-sm leading-relaxed"
            style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
          >
            From routine weekly maintenance to emergency repairs, Captain Jon handles every aspect of your pool. Serving Sarasota, Bradenton, Parrish, Lakewood Ranch, Venice, and beyond.
          </p>
        </div>

        {/* Service Grid — editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "oklch(0.88 0.008 250)" }}>
          {services.map(({ icon: Icon, title, desc, keyword }, idx) => (
            <div
              key={title}
              className="service-card p-7 flex flex-col gap-4 transition-all duration-300 hover:z-10"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s cubic-bezier(0.23,1,0.32,1), transform 0.5s cubic-bezier(0.23,1,0.32,1)",
                backgroundColor: idx % 2 === 0 ? "oklch(1 0 0)" : "oklch(0.98 0.003 250)",
              }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.18 0.04 250)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "oklch(0.74 0.155 75)" }} />
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-sm"
                  style={{
                    backgroundColor: "oklch(0.74 0.155 75 / 0.1)",
                    color: "oklch(0.74 0.155 75)",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  {keyword}
                </span>
              </div>
              <div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.18 0.04 250)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.50 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div
          className="mt-0 flex flex-col sm:flex-row items-center justify-between gap-4 p-6"
          style={{ backgroundColor: "oklch(0.18 0.04 250)" }}
        >
          <p
            className="text-white font-bold text-base"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            No contracts. No hidden fees. Just a crystal-clear pool every week.
          </p>
          <a href="#contact" className="btn-gold flex-shrink-0">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
