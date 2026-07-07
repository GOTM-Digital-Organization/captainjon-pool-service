/**
 * MobileStickyBar — Fixed bottom CTA bar for mobile users
 * Gulf Coast Authority: navy + gold
 * Only visible on mobile/tablet (hidden on lg+)
 */

import { Phone, MessageCircle } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      style={{
        boxShadow: "0 -4px 24px oklch(0 0 0 / 0.35)",
      }}
    >
      {/* Top accent line */}
      <div style={{ height: "3px", backgroundColor: "oklch(0.74 0.155 75)" }} />

      <div
        className="grid grid-cols-2"
        style={{ backgroundColor: "oklch(0.13 0.04 250)" }}
      >
        {/* Call button */}
        <a
          href="tel:+19415843165"
          className="flex items-center justify-center gap-2.5 py-4 transition-all duration-150 active:scale-95"
          style={{
            backgroundColor: "oklch(0.74 0.155 75)",
            color: "oklch(0.13 0.04 250)",
          }}
        >
          <Phone className="w-4 h-4" strokeWidth={2.5} />
          <div className="flex flex-col leading-none">
            <span
              className="font-black text-sm uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 900 }}
            >
              Call Now
            </span>
            <span
              className="text-xs mt-0.5 opacity-80"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              (941) 584-3165
            </span>
          </div>
        </a>

        {/* Text for Chem Delivery button */}
        <a
          href="sms:+19415843165&body=Hi Captain Jon! I'd like to sign up for the $45/month Chemical Delivery service."
          className="flex items-center justify-center gap-2.5 py-4 transition-all duration-150 active:scale-95"
          style={{
            backgroundColor: "oklch(0.18 0.04 250)",
            color: "oklch(0.95 0.005 250)",
            borderLeft: "1px solid oklch(0.74 0.155 75 / 0.25)",
          }}
        >
          <MessageCircle className="w-4 h-4" strokeWidth={2.5} style={{ color: "oklch(0.74 0.155 75)" }} />
          <div className="flex flex-col leading-none">
            <span
              className="font-black text-sm uppercase tracking-wide text-white"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 900 }}
            >
              Text for Free Chem Delivery
            </span>
            <span
              className="text-xs mt-0.5"
              style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Open Sans', sans-serif" }}
            >
              See details →
            </span>
          </div>
        </a>
      </div>

      {/* Safe area spacer for iOS home indicator */}
      <div
        style={{
          backgroundColor: "oklch(0.13 0.04 250)",
          height: "env(safe-area-inset-bottom, 0px)",
        }}
      />
    </div>
  );
}
