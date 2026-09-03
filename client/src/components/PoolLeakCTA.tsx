/**
 * PoolLeakCTA — Internal homeowner leak detection pathway.
 * Gulf Coast Authority motif: navy service panel, gold anchor details, no real-estate inspections.
 */

import { ArrowRight, Droplets } from "lucide-react";

export default function PoolLeakCTA() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: "oklch(0.95 0.005 250)" }}
    >
      <div className="container">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.13 0.04 250) 0%, oklch(0.20 0.05 240) 100%)",
            boxShadow: "0 12px 48px oklch(0 0 0 / 0.15)",
          }}
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            {/* Icon */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "oklch(0.74 0.155 75 / 0.15)", border: "1px solid oklch(0.74 0.155 75 / 0.3)" }}
            >
              <Droplets className="w-10 h-10" style={{ color: "oklch(0.74 0.155 75)" }} />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif" }}
              >
                Also From Captain Jon's
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Is Your Sarasota Pool Losing Water?
              </h2>
              <p
                className="text-base mb-2"
                style={{ color: "oklch(0.80 0.01 250)", fontFamily: "'Open Sans', sans-serif", lineHeight: 1.6 }}
              >
                Captain Jon&apos;s team provides professional <strong className="text-white">pool leak detection and repair</strong> throughout Sarasota and Manatee County. We use non-invasive diagnostics to find the source and explain the repair options clearly.
              </p>
              <p
                className="text-sm"
                style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                Losing more than ¼" of water per day? Unexplained water bill spikes? Call the specialist.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="/pool-leak-detection"
                className="btn-gold flex items-center gap-2 whitespace-nowrap"
              >
                Pool Leak Detection
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+19415843165"
                className="text-center text-sm"
                style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Open Sans', sans-serif" }}
              >
                Call (941) 584-3165
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
