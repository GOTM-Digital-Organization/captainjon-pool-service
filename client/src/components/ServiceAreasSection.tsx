/**
 * ServiceAreasSection — Sarasota & Manatee County service areas
 */

import { MapPin } from "lucide-react";

const sarasotaAreas = [
  { name: "Sarasota", desc: "Gulf Gate, Palmer Ranch, South Sarasota, Bee Ridge" },
  { name: "Venice", desc: "Venice Island, South Venice, Nokomis, Osprey" },
  { name: "Siesta Key", desc: "Luxury pool service on the Key" },
  { name: "Longboat Key", desc: "Waterfront properties & condominiums" },
  { name: "North Port", desc: "North Port & surrounding communities" },
  { name: "Englewood", desc: "Englewood & Rotonda West" },
];

const manateeAreas = [
  { name: "Bradenton", desc: "West Bradenton, Palma Sola, East Bradenton" },
  { name: "Parrish", desc: "Parrish, Ellenton, Fort Hamer Road corridor" },
  { name: "Lakewood Ranch", desc: "Summerfield, Lorraine Lakes, Waterside, Del Webb" },
  { name: "Palmetto", desc: "Palmetto & Terra Ceia" },
  { name: "Anna Maria Island", desc: "Holmes Beach, Bradenton Beach, Anna Maria" },
  { name: "Myakka City", desc: "Myakka City & rural Manatee County" },
];

export default function ServiceAreasSection() {
  return (
    <section
      id="service-areas"
      className="py-20"
      style={{ backgroundColor: "oklch(0.18 0.04 250)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="section-label mb-3"
            style={{ color: "oklch(0.74 0.155 75)" }}
          >
            Where We Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Weekly Pool Service Across{" "}
            <span style={{ color: "oklch(0.74 0.155 75)" }}>Sarasota & Manatee County</span>
          </h2>
          <p
            style={{ color: "oklch(0.72 0.01 250)", fontFamily: "'Open Sans', sans-serif", lineHeight: 1.7 }}
          >
            Captain Jon's provides professional weekly pool service throughout Sarasota County and Manatee County. From Parrish to Venice, Siesta Key to Lakewood Ranch — we're your local pool service experts.
          </p>
        </div>

        {/* Two-county grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sarasota County */}
          <div
            className="rounded-xl p-6 border"
            style={{
              backgroundColor: "oklch(0.22 0.04 250)",
              borderColor: "oklch(0.30 0.04 250)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "oklch(0.74 0.155 75 / 0.15)" }}
              >
                <MapPin className="w-5 h-5" style={{ color: "oklch(0.74 0.155 75)" }} />
              </div>
              <div>
                <h3
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Sarasota County
                </h3>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
                >
                  WEEKLY POOL SERVICE
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {sarasotaAreas.map(({ name, desc }) => (
                <div
                  key={name}
                  className="flex items-start gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: "oklch(0.18 0.04 250)" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.74 0.155 75)" }}
                  />
                  <div>
                    <span
                      className="font-bold text-white text-sm"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {name}
                    </span>
                    <span
                      className="text-xs ml-2"
                      style={{ color: "oklch(0.60 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
                    >
                      — {desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manatee County */}
          <div
            className="rounded-xl p-6 border"
            style={{
              backgroundColor: "oklch(0.22 0.04 250)",
              borderColor: "oklch(0.30 0.04 250)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "oklch(0.55 0.14 220 / 0.15)" }}
              >
                <MapPin className="w-5 h-5" style={{ color: "oklch(0.55 0.14 220)" }} />
              </div>
              <div>
                <h3
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Manatee County
                </h3>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.14 220)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
                >
                  WEEKLY POOL SERVICE
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {manateeAreas.map(({ name, desc }) => (
                <div
                  key={name}
                  className="flex items-start gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: "oklch(0.18 0.04 250)" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.55 0.14 220)" }}
                  />
                  <div>
                    <span
                      className="font-bold text-white text-sm"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {name}
                    </span>
                    <span
                      className="text-xs ml-2"
                      style={{ color: "oklch(0.60 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
                    >
                      — {desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parrish highlight */}
        <div
          className="mt-8 rounded-xl p-6 border text-center"
          style={{
            backgroundColor: "oklch(0.74 0.155 75 / 0.08)",
            borderColor: "oklch(0.74 0.155 75 / 0.3)",
          }}
        >
          <p
            className="text-white font-bold text-lg mb-1"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            📍 Now Serving Parrish, Florida!
          </p>
          <p
            className="text-sm"
            style={{ color: "oklch(0.72 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
          >
            Captain Jon's has expanded to serve the growing Parrish community in northern Manatee County — including North River Ranch, Crosscreek, and surrounding neighborhoods. Call today for availability.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="btn-gold">
            Check Availability in Your Area
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative mt-20 -mb-1">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ display: "block" }} preserveAspectRatio="none">
          <path d="M0,40 C360,10 1080,60 1440,20 L1440,60 L0,60 Z" fill="oklch(0.98 0.003 250)" />
        </svg>
      </div>
    </section>
  );
}
