/**
 * AboutSection — Captain Jon Green professional profile
 * Gulf Coast Authority: editorial asymmetric layout, navy + gold
 */

import { Shield, Award, Clock, Anchor } from "lucide-react";

const credentials = [
  { icon: Shield, label: "Licensed & Insured", detail: "Florida Licensed Pool Contractor" },
  { icon: Award, label: "15+ Years Experience", detail: "Sarasota & Manatee County Expert" },
  { icon: Clock, label: "Reliable Every Week", detail: "No missed visits. No excuses." },
  { icon: Anchor, label: "Local, Not a Franchise", detail: "Family-run crew, not a call center" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "oklch(0.98 0.003 250)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo side */}
          <div className="relative">
            {/* Gold accent border offset */}
            <div
              className="absolute -top-3 -left-3 w-full h-full"
              style={{
                border: "3px solid oklch(0.74 0.155 75 / 0.4)",
                borderRadius: "0",
                zIndex: 0,
              }}
            />
            <div className="relative z-10 overflow-hidden" style={{ borderRadius: "0" }}>
              <img
                src="/manus-storage/captain-jon-about-v2_050c44ee.jpg"
                alt="Captain Jon Green — Pool Service Professional, Sarasota FL"
                className="w-full object-cover"
                style={{ maxHeight: "520px", objectPosition: "top center" }}
              />
              {/* Name plate overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-4"
                style={{
                  background: "linear-gradient(to top, oklch(0.13 0.04 250 / 0.95) 0%, transparent 100%)",
                }}
              >
                <p
                  className="text-white font-black text-xl leading-none"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
                >
                  Captain Jon Green
                </p>
                <p
                  className="text-xs uppercase tracking-widest mt-1"
                  style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                >
                  Owner & Pool Service Professional
                </p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "oklch(0.74 0.155 75)" }} />
              <span
                className="text-xs uppercase tracking-widest font-bold"
                style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif" }}
              >
                About Captain Jon
              </span>
            </div>

            <h2
              className="font-black leading-tight mb-5"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "oklch(0.18 0.04 250)",
                lineHeight: 1.1,
              }}
            >
              Sarasota's Pool Guy —
              <br />
              <span style={{ color: "oklch(0.74 0.155 75)" }}>Not a Franchise. Not a Call Center.</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.40 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                Captain Jon Green leads a tight-knit, family-run crew — currently including his son — built on the same standards of quality and reliability that Jon has delivered across Sarasota and Manatee County for over 15 years. This isn't a franchise or a faceless company. Every pool is treated like it's their own.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.40 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                From Sarasota and Siesta Key to Bradenton, Parrish, and Lakewood Ranch, Jon knows the local water chemistry, the Florida climate challenges, and exactly what it takes to keep your pool safe, balanced, and beautiful every single week.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.40 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                Captain Jon also runs <a href="https://poolleaksarasota.com" target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.74 0.155 75)", fontWeight: 600 }}>Pool Leak Sarasota</a> — the area's trusted non-invasive pool leak detection service. One trusted name. Two essential services.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {credentials.map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4"
                  style={{
                    backgroundColor: "oklch(1 0 0)",
                    border: "1px solid oklch(0.90 0.005 250)",
                  }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.18 0.04 250)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "oklch(0.74 0.155 75)" }} />
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm leading-none"
                      style={{ color: "oklch(0.18 0.04 250)", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "oklch(0.55 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
                    >
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-gold inline-block mt-8"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
