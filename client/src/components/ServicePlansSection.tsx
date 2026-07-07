/**
 * ServicePlansSection — Silver and Gold pool service plans
 * Editorial layout with anchor motif and strong typography
 */

import { Check, Star, Anchor } from "lucide-react";

const silverFeatures = [
  "Once per week service",
  "Skimming pool surface",
  "Emptying all baskets",
  "Brushing walls & steps",
  "14-Point inspection",
  "Chemical balancing",
  "Filter backwashing as necessary",
  "Vacuuming as needed",
  "All chemicals included",
  "No contracts",
];

const goldFeatures = [
  "Once per week service",
  "Skimming pool surface",
  "Emptying all baskets",
  "Brushing walls & steps",
  "14-Point inspection",
  "Chemical balancing",
  "Filter backwashing as necessary",
  "Vacuuming as needed",
  "All chemicals included",
  "Priority scheduling",
  "No contracts",
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "oklch(0.74 0.155 75)" }} />
              <span
                className="text-xs uppercase tracking-widest font-bold"
                style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif" }}
              >
                Service Plans
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
              Pick Your Plan.
              <br />
              <span style={{ color: "oklch(0.74 0.155 75)" }}>No Contracts. Ever.</span>
            </h2>
          </div>
          <p
            className="lg:max-w-xs text-sm leading-relaxed"
            style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
          >
            Month-to-month. Cancel anytime. All plans include chemicals and a dedicated technician for your property.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Silver Plan */}
          <div
            className="border flex flex-col overflow-hidden"
            style={{
              backgroundColor: "oklch(1 0 0)",
              borderColor: "oklch(0.88 0.008 250)",
              boxShadow: "0 4px 24px oklch(0 0 0 / 0.06)",
            }}
          >
            {/* Plan header */}
            <div
              className="px-7 py-5 border-b flex items-center justify-between"
              style={{ borderColor: "oklch(0.88 0.008 250)", backgroundColor: "oklch(0.97 0.003 250)" }}
            >
              <div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "oklch(0.55 0.14 220)", fontFamily: "'Oswald', sans-serif" }}
                >
                  Silver Plan
                </div>
                <h3
                  className="text-xl font-black"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.18 0.04 250)" }}
                >
                  1× Weekly Service
                </h3>
              </div>
              <Anchor className="w-8 h-8 opacity-10" style={{ color: "oklch(0.18 0.04 250)" }} />
            </div>

            <div className="px-7 py-6 flex-1">
              <p
                className="text-sm mb-5"
                style={{ color: "oklch(0.50 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                Perfect for most residential pools in Sarasota & Manatee County.
              </p>
              <ul className="space-y-2.5">
                {silverFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "oklch(0.35 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
                  >
                    <Check
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "oklch(0.55 0.14 220)" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-7 pb-7">
              <a
                href="#contact"
                className="w-full block text-center py-3 font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "oklch(0.18 0.04 250)",
                  color: "oklch(0.98 0 0)",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                }}
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Gold Plan */}
          <div
            className="flex flex-col overflow-hidden relative"
            style={{
              backgroundColor: "oklch(0.18 0.04 250)",
              boxShadow: "0 8px 40px oklch(0.74 0.155 75 / 0.25)",
              border: "2px solid oklch(0.74 0.155 75 / 0.5)",
            }}
          >
            {/* Most popular banner */}
            <div
              className="flex items-center justify-center gap-2 py-2"
              style={{ backgroundColor: "oklch(0.74 0.155 75)" }}
            >
              <Star className="w-3.5 h-3.5 fill-current" style={{ color: "oklch(0.13 0.04 250)" }} />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "oklch(0.13 0.04 250)", fontFamily: "'Oswald', sans-serif" }}
              >
                Most Popular Plan
              </span>
            </div>

            {/* Plan header */}
            <div
              className="px-7 py-5 border-b flex items-center justify-between"
              style={{ borderColor: "oklch(0.30 0.04 250)" }}
            >
              <div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif" }}
                >
                  Gold Plan
                </div>
                <h3
                  className="text-xl font-black text-white"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Premium Weekly Service
                </h3>
              </div>
              <Anchor className="w-8 h-8" style={{ color: "oklch(0.74 0.155 75)", opacity: 0.4 }} />
            </div>

            <div className="px-7 py-6 flex-1">
              <p
                className="text-sm mb-5"
                style={{ color: "oklch(0.72 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                Our most comprehensive weekly service — priority scheduling and everything your pool needs.
              </p>
              <ul className="space-y-2.5">
                {goldFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "oklch(0.85 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
                  >
                    <Check
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "oklch(0.74 0.155 75)" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-7 pb-7">
              <a
                href="#contact"
                className="btn-gold w-full block text-center"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        {/* No contract note */}
        <p
          className="text-center mt-8 text-sm"
          style={{ color: "oklch(0.55 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
        >
          All plans are month-to-month. No contracts. No setup fees. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
