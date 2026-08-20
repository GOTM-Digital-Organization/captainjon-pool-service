/**
 * MaintenanceChecklist — 14-point inspection list with image
 */

import { CheckCircle2 } from "lucide-react";

const checklistItems = [
  "Inspect Pool Filter Pressure",
  "Brush Pool Surface, Walls & Steps",
  "Skim Water to Remove Debris",
  "Algae Removal / Green Pool Cleaning",
  "Test Pool Water Chemistry",
  "Balance Pool Water Chemistry",
  "Add Pool Chemicals as Needed",
  "Empty Filtration, Pump & Skimmer Baskets",
  "Pool Filter Backwashing (as necessary)",
  "Salt Cell Cleaning & Inspection",
  "Inspect Pool Equipment & Plumbing",
  "Check Pool Light Function",
  "Inspect Pool Deck & Coping",
  "Detailed Service Report",
];

export default function MaintenanceChecklist() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "oklch(0.95 0.005 250)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden" style={{ boxShadow: "0 12px 48px oklch(0 0 0 / 0.12)" }}>
              <img
                src="/images/pool-service-team.webp"
                alt="Captain Jon's pool technician performing maintenance checklist"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Floating stat */}
            <div
              className="absolute -bottom-6 -right-6 rounded-xl p-5 shadow-xl"
              style={{ backgroundColor: "oklch(0.18 0.04 250)" }}
            >
              <div
                className="text-3xl font-black text-white leading-none"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                14
              </div>
              <div
                className="text-xs mt-1"
                style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
              >
                POINT INSPECTION
              </div>
              <div
                className="text-xs mt-0.5"
                style={{ color: "oklch(0.72 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                Every single visit
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="order-1 lg:order-2">
            <span className="section-label mb-3">Our Maintenance Checklist</span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.18 0.04 250)" }}
            >
              What We Do On Every Visit
            </h2>
            <p
              className="mb-8"
              style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif", lineHeight: 1.7 }}
            >
              At Captain Jon's, we pride ourselves on providing high-quality pool maintenance. We strive daily to give each customer the attention their valuable pool deserves. Our comprehensive 14-point inspection is performed on every single visit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {checklistItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: "oklch(0.35 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
                >
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.74 0.155 75)" }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-gold">
                Start Weekly Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
