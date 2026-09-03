/**
 * FAQSection — Pool Service FAQ
 * Gulf Coast Authority: navy + gold, accordion layout
 * SEO-optimized questions for Sarasota & Manatee County pool service and homeowner leak detection.
 */

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How much does weekly pool service cost in Sarasota?",
    answer:
      "Weekly pool service pricing in Sarasota and Manatee County varies based on pool size, type, and condition. Captain Jon offers competitive flat-rate weekly service with no hidden fees and no contracts. Contact us for a free, no-obligation quote specific to your pool.",
  },
  {
    question: "What is included in Captain Jon's weekly pool service?",
    answer:
      "Every weekly visit includes skimming the surface for debris, brushing the pool walls and steps, vacuuming the pool floor, emptying all skimmer and pump baskets, testing and balancing water chemistry (pH, chlorine, alkalinity, calcium hardness), adding chemicals as needed, and inspecting equipment for any issues. Filter backwashing is performed as necessary.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No contracts — ever. Captain Jon's Pool Service operates on a simple month-to-month basis. We earn your business every single week with quality service, not fine print. Cancel anytime with no penalties.",
  },
  {
    question: "What is the Weekly Pool Chemical Delivery Service and how does it work?",
    answer:
      "The Weekly Pool Chemical Delivery Service is designed for DIY pool owners who currently drive to Leslie's Pool Supply, Home Depot, or other big box stores to get their water tested and buy chemicals. Instead, simply text Captain Jon a photo of your pool test strip each week. He'll analyze the results and personally deliver the exact chemicals your pool needs — right to your door — with clear written instructions on how to apply them. The service fee is just $12/month, plus you pay only for the chemicals your pool actually needs. No more trips. No more guessing. No more buying the wrong stuff.",
  },
  {
    question: "What areas do you serve in Sarasota and Manatee County?",
    answer:
      "Captain Jon serves all of Sarasota County including Sarasota, Venice, Siesta Key, Longboat Key, Osprey, Nokomis, and Englewood — as well as Manatee County including Bradenton, Parrish, Lakewood Ranch, Palmetto, Anna Maria Island, and Ellenton. Not sure if your neighborhood is covered? Just call or text and we'll let you know.",
  },
  {
    question: "Are you licensed and insured to service pools in Florida?",
    answer:
      "Yes. Captain Jon Green is a fully licensed and insured pool service contractor in the state of Florida. You're fully protected on every visit, and you can have complete peace of mind knowing a credentialed professional is caring for your pool.",
  },
  {
    question: "How do I know if my pool needs a leak test?",
    answer:
      "If your pool is losing more than ¼ inch of water per day beyond normal evaporation, you may have a leak. Captain Jon’s team provides non-invasive homeowner pool leak detection and repair throughout Sarasota and Manatee County. Visit our Pool Leak Detection page or call (941) 584-3165 to discuss the symptoms.",
  },
  {
    question: "Do you service saltwater pools?",
    answer:
      "Yes! Captain Jon services both traditional chlorine pools and saltwater pools throughout Sarasota and Manatee County. Saltwater pools still require regular balancing of pH, alkalinity, calcium hardness, and cyanuric acid levels — and we handle all of it.",
  },
  {
    question: "What happens if I'm not happy with a service visit?",
    answer:
      "We stand behind our work with a 48-Hour SuperClean Guarantee. If you're not satisfied with any visit, contact us within 48 hours and we'll return to make it right — at no additional charge. Your satisfaction is non-negotiable.",
  },
  {
    question: "How do I get started with weekly pool service?",
    answer:
      "Getting started is easy. Call or text Captain Jon at (941) 584-3165, or fill out the contact form on this page. We'll schedule a free on-site assessment, give you a flat-rate quote, and can typically begin service within the same week.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-20"
      style={{ backgroundColor: "oklch(0.98 0.003 250)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "oklch(0.74 0.155 75)" }} />
            <span
              className="text-xs uppercase tracking-widest font-bold"
              style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif" }}
            >
              Common Questions
            </span>
          </div>
          <h2
            className="font-black leading-tight mb-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "oklch(0.18 0.04 250)",
              lineHeight: 1.1,
            }}
          >
            Pool Service FAQs —<br />
            <span style={{ color: "oklch(0.74 0.155 75)" }}>Sarasota & Manatee County</span>
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
          >
            Everything you need to know about weekly pool cleaning, chemical delivery, homeowner pool leak detection, and pool care in Southwest Florida.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  border: isOpen
                    ? "1px solid oklch(0.74 0.155 75 / 0.5)"
                    : "1px solid oklch(0.88 0.005 250)",
                  backgroundColor: isOpen ? "oklch(1 0 0)" : "oklch(1 0 0)",
                  transition: "border-color 0.2s ease",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                  style={{ cursor: "pointer" }}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: isOpen ? "oklch(0.74 0.155 75)" : "oklch(0.55 0.02 250)" }}
                    />
                    <span
                      className="font-bold text-sm leading-snug"
                      style={{
                        color: isOpen ? "oklch(0.18 0.04 250)" : "oklch(0.25 0.03 250)",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: isOpen ? 700 : 600,
                      }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-200"
                    style={{
                      color: "oklch(0.74 0.155 75)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {/* Answer panel */}
                <div
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  <div
                    className="px-5 pb-5 pl-12 text-sm leading-relaxed"
                    style={{
                      color: "oklch(0.42 0.02 250)",
                      fontFamily: "'Open Sans', sans-serif",
                      borderTop: "1px solid oklch(0.92 0.004 250)",
                      paddingTop: "12px",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 max-w-3xl">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6"
            style={{
              backgroundColor: "oklch(0.18 0.04 250)",
              borderLeft: "4px solid oklch(0.74 0.155 75)",
            }}
          >
            <div>
              <p
                className="font-bold text-white text-sm"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Still have questions?
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "oklch(0.65 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                Call or text Captain Jon directly — he answers personally.
              </p>
            </div>
            <a
              href="tel:+19415843165"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm uppercase tracking-wider transition-all duration-150 active:scale-95"
              style={{
                backgroundColor: "oklch(0.74 0.155 75)",
                color: "oklch(0.13 0.04 250)",
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              (941) 584-3165
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
