/**
 * HeroSection — Full-bleed dark navy hero with pool background
 * Gulf Coast Authority theme
 */

import { Phone, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".hero-animate");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(30px)";
      setTimeout(() => {
        item.style.transition = "opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "oklch(0.13 0.04 250)" }}
    >
      {/* Background image — Captain Jon cleaning a pool */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-captain-jon.webp"
          alt="Captain Jon Green cleaning a pool in Sarasota Florida"
          className="w-full h-full object-cover"
          style={{ opacity: 0.75 }}
        />
        {/* Lighter gradient overlay so Jon is clearly visible */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, oklch(0.13 0.04 250 / 0.82) 0%, oklch(0.13 0.04 250 / 0.45) 55%, oklch(0.13 0.04 250 / 0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, oklch(0.13 0.04 250 / 0.6) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl" ref={textRef}>
          {/* Location badge */}
          <div className="hero-animate flex items-center gap-2 mb-6">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border"
              style={{
                borderColor: "oklch(0.74 0.155 75 / 0.4)",
                color: "oklch(0.74 0.155 75)",
                backgroundColor: "oklch(0.74 0.155 75 / 0.1)",
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              📍 Serving Sarasota County & Manatee County
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="hero-animate text-white leading-tight mb-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              lineHeight: 1.1,
            }}
          >
            Sarasota's Trusted
            <br />
            <span style={{ color: "oklch(0.74 0.155 75)" }}>Weekly Pool Service</span>
            <br />
            Professionals
          </h1>

          {/* Subheadline */}
          <p
            className="hero-animate mb-8 max-w-xl"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.6,
              color: "oklch(0.92 0.005 250)",
              textShadow: "0 1px 4px oklch(0 0 0 / 0.5)",
            }}
          >
            Professional pool cleaning, chemical balancing & repairs in Sarasota & Manatee County. No contracts. No hidden fees. Just a crystal-clear pool every week.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="btn-gold"
              style={{ fontSize: "0.95rem", padding: "0.875rem 2rem" }}
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+19417043699"
              className="btn-outline-white flex items-center gap-2"
              style={{ fontSize: "0.95rem", padding: "0.875rem 2rem" }}
            >
              <Phone className="w-4 h-4" />
              (941) 704-3699
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="hero-animate flex flex-wrap gap-x-6 gap-y-2"
            style={{ color: "oklch(0.85 0.01 250)", fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem" }}
          >
            {[
              "✓ Licensed & Insured",
              "✓ No Contracts",
              "✓ Chemicals Included",
              "✓ 48-Hr SuperClean Guarantee",
              "✓ Background-Checked Techs",
            ].map((badge) => (
              <span key={badge} className="flex items-center gap-1">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust-bar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ display: "block" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="oklch(0.98 0.003 250)"
          />
        </svg>
      </div>
    </section>
  );
}
