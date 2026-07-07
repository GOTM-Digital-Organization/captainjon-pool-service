/**
 * Navbar — Gulf Coast Authority theme
 * Transparent over hero, transitions to navy on scroll
 * Congruent with poolleaksarasota.com
 */

import { useState, useEffect } from "react";
import { Phone, Menu, X, Anchor } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Chem Delivery", href: "#chemical-delivery" },
    { label: "Service Plans", href: "#plans" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "oklch(0.13 0.04 250)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px oklch(0 0 0 / 0.3)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — matches poolleaksarasota.com: square navy box + white anchor + text lockup */}
          <a href="/" className="flex items-center gap-3 group">
            {/* Square navy box with white anchor — identical to poolleaksarasota.com */}
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: "42px",
                height: "42px",
                backgroundColor: "oklch(0.18 0.04 250)",
                border: "2px solid oklch(0.74 0.155 75 / 0.6)",
                borderRadius: "0",
              }}
            >
              <Anchor className="w-5 h-5" style={{ color: "#ffffff" }} />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="text-white font-bold leading-none"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "1rem" }}
              >
                Captain Jon's
              </span>
              <span
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
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://poolleaksarasota.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide border-l border-white/20 pl-6"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Pool Leak Detection →
            </a>
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+19415843165"
              className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "oklch(0.74 0.155 75)",
                color: "oklch(0.13 0.04 250)",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
              }}
            >
              <Phone className="w-4 h-4" />
              (941) 584-3165
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            backgroundColor: "oklch(0.13 0.04 250)",
            borderColor: "oklch(0.30 0.04 250)",
          }}
        >
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white py-2 text-base font-medium transition-colors"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://poolleaksarasota.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-base font-medium transition-colors border-t border-white/10 mt-2 pt-4"
              style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Open Sans', sans-serif" }}
            >
              Pool Leak Detection →
            </a>
            <a
              href="tel:+19415843165"
              className="flex items-center justify-center gap-2 py-3 rounded-sm text-base font-bold mt-2"
              style={{
                backgroundColor: "oklch(0.74 0.155 75)",
                color: "oklch(0.13 0.04 250)",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
              }}
            >
              <Phone className="w-5 h-5" />
              Call (941) 584-3165
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
