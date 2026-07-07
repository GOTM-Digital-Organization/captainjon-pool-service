/**
 * ServicePlansSection — Single Gold weekly pool service plan
 * Gulf Coast Authority: navy + gold, centered editorial layout
 */

import { Check, Star, Anchor, Phone } from "lucide-react";

const planFeatures = [
  "Once per week professional service",
  "Skimming pool surface for debris",
  "Emptying all skimmer & pump baskets",
  "Brushing walls, steps & tile line",
  "Vacuuming pool floor as needed",
  "Complete water chemistry testing",
  "Chemical balancing (all chemicals included)",
  "Filter backwashing as necessary",
  "14-Point equipment inspection",
  "No contracts — cancel anytime",
];

export default function ServicePlansSection() {
  return (
    <section
      id="plans"
      className="py-20"
      style={{ backgroundColor: "oklch(0.98 0.003 250)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "oklch(0.74 0.155 75)" }} />
            <span
              className="text-xs uppercase tracking-widest font-bold"
              style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif" }}
            >
              Weekly Service Plan
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "oklch(0.74 0.155 75)" }} />
          </div>
          <h2
            className="font-black leading-tight mb-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "oklch(0.18 0.04 250)",
              lineHeight: 1.1,
            }}
          >
            One Plan. Everything Included.
            <br />
            <span style={{ color: "oklch(0.74 0.155 75)" }}>No Contracts. Ever.</span>
          </h2>
          <p
            className="text-sm leading-relaxed max-w-lg mx-auto"
            style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
          >
            Captain Jon keeps it simple — one comprehensive weekly service plan that covers everything your pool needs. Month-to-month, cancel anytime.
          </p>
        </div>

        {/* Single plan card — centered, max-width constrained */}
        <div className="max-w-xl mx-auto">
          <div
            className="flex flex-col overflow-hidden relative"
            style={{
              backgroundColor: "oklch(0.18 0.04 250)",
              boxShadow: "0 12px 48px oklch(0.74 0.155 75 / 0.25)",
              border: "2px solid oklch(0.74 0.155 75 / 0.55)",
            }}
          >
            {/* Gold banner */}
            <div
              className="flex items-center justify-center gap-2 py-2.5"
              style={{ backgroundColor: "oklch(0.74 0.155 75)" }}
            >
              <Star className="w-3.5 h-3.5 fill-current" style={{ color: "oklch(0.13 0.04 250)" }} />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "oklch(0.13 0.04 250)", fontFamily: "'Oswald', sans-serif" }}
              >
                Captain Jon's Gold Plan
              </span>
              <Star className="w-3.5 h-3.5 fill-current" style={{ color: "oklch(0.13 0.04 250)" }} />
            </div>

            {/* Plan header */}
            <div
              className="px-8 py-6 border-b flex items-center justify-between"
              style={{ borderColor: "oklch(0.30 0.04 250)" }}
            >
              <div>
                <h3
                  className="text-2xl font-black text-white leading-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Weekly Pool Service
                </h3>
                <p
                  className="text-sm mt-1"
                  style={{ color: "oklch(0.72 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
                >
                  Full-service, every week — chemicals included
                </p>
              </div>
              <Anchor className="w-10 h-10 flex-shrink-0" style={{ color: "oklch(0.74 0.155 75)", opacity: 0.5 }} />
            </div>

            {/* Features list */}
            <div className="px-8 py-6">
              <ul className="space-y-3">
                {planFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "oklch(0.88 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
                  >
                    <div
                      className="w-5 h-5 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "oklch(0.74 0.155 75 / 0.15)" }}
                    >
                      <Check className="w-3 h-3" style={{ color: "oklch(0.74 0.155 75)" }} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="px-8 pb-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="flex-1 block text-center py-3.5 font-black text-sm uppercase tracking-wider transition-all duration-150 active:scale-95"
                style={{
                  backgroundColor: "oklch(0.74 0.155 75)",
                  color: "oklch(0.13 0.04 250)",
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                }}
              >
                Get Your Free Quote
              </a>
              <a
                href="tel:+19415843165"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 font-bold text-sm uppercase tracking-wider transition-all duration-150 active:scale-95"
                style={{
                  border: "1px solid oklch(0.74 0.155 75 / 0.4)",
                  color: "oklch(0.88 0.01 250)",
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                }}
              >
                <Phone className="w-4 h-4" style={{ color: "oklch(0.74 0.155 75)" }} />
                (941) 584-3165
              </a>
            </div>
          </div>
        </div>

        {/* No contract note */}
        <p
          className="text-center mt-8 text-sm"
          style={{ color: "oklch(0.55 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
        >
          Month-to-month service. No contracts. No setup fees. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
