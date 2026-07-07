/**
 * TestimonialsSection — Navy authority band with editorial testimonials
 * Gulf Coast Authority theme
 */

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael T.",
    location: "Lakewood Ranch, FL",
    text: "Captain Jon has been servicing our pool for over a year now. The water is always crystal clear and he's incredibly reliable. Best pool service we've had in Sarasota.",
    rating: 5,
  },
  {
    name: "Sandra R.",
    location: "Bradenton, FL",
    text: "We switched to Captain Jon's after two bad experiences with other companies. Night and day difference. He actually shows up every week, on time, and our pool looks amazing.",
    rating: 5,
  },
  {
    name: "David & Karen M.",
    location: "Parrish, FL",
    text: "So glad Captain Jon expanded to Parrish! We've been looking for a reliable pool service out here. He's professional, thorough, and the price is fair. Highly recommend.",
    rating: 5,
  },
  {
    name: "Patricia L.",
    location: "Sarasota, FL",
    text: "I tried the new chemical delivery service and it's brilliant. I just text a photo of my test strip and he drops off exactly what I need. Saves me a trip to Leslie's every week!",
    rating: 5,
  },
  {
    name: "Robert H.",
    location: "Venice, FL",
    text: "Honest, fair, and very skilled. No contracts, no pressure — just excellent pool service. Our pool has never looked better. Captain Jon is the real deal.",
    rating: 5,
  },
  {
    name: "Jennifer W.",
    location: "Siesta Key, FL",
    text: "We have a large pool that requires extra attention. Captain Jon's Gold Plan is perfect — twice a week service keeps it in perfect condition. Worth every penny.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "oklch(0.18 0.04 250)" }}
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
                What Customers Say
              </span>
            </div>
            <h2
              className="font-black text-white leading-tight"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.1,
              }}
            >
              Trusted by Pool Owners Across
              <br />
              <span style={{ color: "oklch(0.74 0.155 75)" }}>Sarasota & Manatee</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: "oklch(0.74 0.155 75)" }} />
              ))}
            </div>
            <div>
              <div
                className="text-white font-bold text-lg leading-none"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                5.0 Average
              </div>
              <div
                className="text-xs"
                style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, location, text, rating }) => (
            <div
              key={name}
              className="rounded-sm p-6 flex flex-col border"
              style={{
                backgroundColor: "oklch(0.22 0.04 250)",
                borderColor: "oklch(0.30 0.04 250)",
              }}
            >
              {/* Quote icon + stars */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-6 h-6 opacity-30 text-white" />
                <div className="flex gap-0.5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "oklch(0.74 0.155 75)" }} />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1 mb-5"
                style={{ color: "oklch(0.82 0.01 250)", fontFamily: "'Open Sans', sans-serif", fontStyle: "italic" }}
              >
                "{text}"
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "oklch(0.30 0.04 250)" }}>
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    backgroundColor: "oklch(0.74 0.155 75)",
                    color: "oklch(0.13 0.04 250)",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {name.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-bold text-sm text-white"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.55 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative mt-20 -mb-1">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ display: "block" }} preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="oklch(0.95 0.005 250)" />
        </svg>
      </div>
    </section>
  );
}
