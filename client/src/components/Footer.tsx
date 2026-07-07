/**
 * Footer — Captain Jon's Pool Service
 * Navy background, gold accents, cross-links to poolleaksarasota.com
 */

import { Phone, Mail, Anchor, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "oklch(0.13 0.04 250)" }}>
      {/* Main footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* Square navy box with white anchor — matches poolleaksarasota.com */}
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "oklch(0.22 0.04 250)",
                  border: "2px solid oklch(0.74 0.155 75 / 0.5)",
                  borderRadius: "0",
                }}
              >
                <Anchor className="w-5 h-5" style={{ color: "#ffffff" }} />
              </div>
              <div>
                <div
                  className="text-white font-bold text-base leading-none"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
                >
                  Captain Jon's
                </div>
                <div
                  className="uppercase leading-none mt-0.5"
                  style={{
                    color: "oklch(0.74 0.155 75)",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                  }}
                >
                  Pool Service
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
            >
              Sarasota's trusted local pool service company. Professional weekly pool cleaning, chemical balancing, and repairs in Sarasota & Manatee County, FL.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+19415843165"
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Open Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                (941) 584-3165
              </a>
              <a
                href="mailto:jongreen67@gmail.com"
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                <Mail className="w-4 h-4" />
                jongreen67@gmail.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                "Weekly Pool Cleaning",
                "Chemical Balancing",
                "Pool Repairs",
                "Filter Maintenance",
                "Algae Removal",
                "Salt Cell Cleaning",
                "Chemical Delivery ($45/mo)",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Service Areas
            </h4>
            <ul className="space-y-2">
              {[
                "Sarasota",
                "Bradenton",
                "Parrish",
                "Lakewood Ranch",
                "Venice",
                "Siesta Key",
                "Longboat Key",
                "North Port",
                "Palmetto",
                "Anna Maria Island",
              ].map((area) => (
                <li key={area}>
                  <a
                    href="#service-areas"
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pool Leak Detection cross-promo */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Also From Captain Jon's
            </h4>
            <div
              className="rounded-xl p-4 border mb-4"
              style={{
                backgroundColor: "oklch(0.18 0.04 250)",
                borderColor: "oklch(0.74 0.155 75 / 0.3)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif" }}
              >
                Pool Leak Detection
              </p>
              <p
                className="text-xs mb-3"
                style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'Open Sans', sans-serif", lineHeight: 1.5 }}
              >
                Is your pool losing water? Captain Jon's also specializes in non-invasive pool leak detection & repair throughout Sarasota & Manatee County.
              </p>
              <a
                href="https://poolleaksarasota.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold hover:opacity-80 transition-opacity"
                style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Montserrat', sans-serif" }}
              >
                poolleaksarasota.com
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="tel:+19412533447"
                className="flex items-center gap-1.5 text-xs mt-1 hover:opacity-80 transition-opacity"
                style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                <Phone className="w-3 h-3" />
                (941) 253-3447
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "oklch(0.22 0.04 250)" }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-xs text-center md:text-left"
            style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
          >
            © {currentYear} Captain Jon's Pool Service · Licensed & Insured in Florida · Serving Sarasota County & Manatee County
          </p>
          <p
            className="text-xs text-center md:text-right"
            style={{ color: "oklch(0.40 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
          >
            Sarasota · Bradenton · Parrish · Lakewood Ranch · Venice · Siesta Key · Longboat Key
          </p>
        </div>
      </div>
    </footer>
  );
}
