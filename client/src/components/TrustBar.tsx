/**
 * TrustBar — Key trust signals below the hero
 */

import { Shield, Clock, Star, DollarSign } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Licensed & Insured", sub: "Florida Certified" },
  { icon: Clock, label: "No Contracts", sub: "Cancel Anytime" },
  { icon: Star, label: "Quality Guaranteed", sub: "48-Hr Guarantee" },
  { icon: DollarSign, label: "Chemicals Included", sub: "No Hidden Fees" },
];

export default function TrustBar() {
  return (
    <section
      id="trust-bar"
      className="py-8 border-b"
      style={{ backgroundColor: "oklch(0.98 0.003 250)", borderColor: "oklch(0.88 0.008 250)" }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(0.74 0.155 75 / 0.12)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "oklch(0.74 0.155 75)" }} />
              </div>
              <div>
                <p
                  className="font-bold text-sm leading-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.18 0.04 250)" }}
                >
                  {label}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.50 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
                >
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
