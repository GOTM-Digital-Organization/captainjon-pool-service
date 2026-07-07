/**
 * ChemicalDeliverySection — NEW $45/month chemical delivery service
 * Featured prominently — dark navy background to stand out
 */

import { MessageSquare, Package, Truck, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Snap & Text",
    desc: "Dip a test strip in your pool, snap a photo, and text it to Captain Jon. That's it — no store trip needed.",
  },
  {
    icon: Package,
    step: "02",
    title: "We Analyze",
    desc: "Captain Jon reviews your water chemistry results and prepares the exact chemicals your pool needs — nothing more, nothing less.",
  },
  {
    icon: Truck,
    step: "03",
    title: "We Deliver",
    desc: "Your custom chemical package is delivered right to your door, with clear written instructions for exactly how and when to apply each product.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "You Apply",
    desc: "Follow the simple instructions and enjoy a perfectly balanced pool — without ever leaving home.",
  },
];

const benefits = [
  "Skip the trip to Leslie's Pool Store or Home Depot",
  "No more guessing which chemicals to buy",
  "Expert analysis of your actual water test results",
  "Chemicals delivered with step-by-step instructions",
  "Save time every single week",
  "Only $45/month — less than one store trip",
  "Cancel anytime, no contracts",
  "Text-based — quick and easy",
];

export default function ChemicalDeliverySection() {
  return (
    <section
      id="chemical-delivery"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.18 0.04 250)" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, oklch(0.74 0.155 75) 0%, transparent 50%), radial-gradient(circle at 75% 75%, oklch(0.55 0.14 220) 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="badge-new flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              New Service — Sarasota's First
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Pool Chemical Delivery
            <br />
            <span style={{ color: "oklch(0.74 0.155 75)" }}>For DIY Pool Owners</span>
          </h2>
          <p
            className="text-lg"
            style={{ color: "oklch(0.80 0.01 250)", fontFamily: "'Open Sans', sans-serif", lineHeight: 1.7 }}
          >
            Tired of driving to Leslie's Pool Store or Home Depot every week? Skip the trip. Text Captain Jon a photo of your pool test strip and he'll deliver the exact chemicals you need — with instructions — right to your door.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <div
              className="text-5xl font-black"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.74 0.155 75)" }}
            >
              $45
            </div>
            <div style={{ color: "oklch(0.80 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}>
              <div className="text-xl font-semibold text-white">per month</div>
              <div className="text-sm">Monthly subscription · Cancel anytime</div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div
              key={step}
              className="relative rounded-lg p-6 border"
              style={{
                backgroundColor: "oklch(0.22 0.04 250)",
                borderColor: "oklch(0.30 0.04 250)",
              }}
            >
              <div
                className="text-xs font-bold mb-3 font-display"
                style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
              >
                STEP {step}
              </div>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "oklch(0.74 0.155 75 / 0.15)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "oklch(0.74 0.155 75)" }} />
              </div>
              <h3
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.72 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Two-column: benefits + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Benefits list */}
          <div>
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Why Pool Owners in Sarasota Love This Service
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "oklch(0.80 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
                >
                  <CheckCircle
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.74 0.155 75)" }}
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="sms:+19415843165?body=Hi%20Captain%20Jon!%20I%27m%20interested%20in%20the%20%2445%2Fmonth%20chemical%20delivery%20service."
                className="btn-gold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Text to Subscribe — $45/mo
              </a>
              <a
                href="#contact"
                className="btn-outline-white flex items-center justify-center gap-2"
              >
                Learn More
              </a>
            </div>
            <p
              className="mt-4 text-xs"
              style={{ color: "oklch(0.55 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}
            >
              * Service available in Sarasota & Manatee County. Chemicals not included in subscription price — you pay only for the chemicals you need.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="rounded-xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px oklch(0 0 0 / 0.4)" }}
            >
              <img
                src="/manus-storage/chemical-delivery-service_482a5b15.jpg"
                alt="Captain Jon delivering pool chemicals to a Sarasota home"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-xl"
              style={{ backgroundColor: "oklch(0.74 0.155 75)" }}
            >
              <span
                className="text-2xl font-black leading-none"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.13 0.04 250)" }}
              >
                $45
              </span>
              <span
                className="text-xs font-bold leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.13 0.04 250)" }}
              >
                /month
              </span>
            </div>
          </div>
        </div>

        {/* Comparison callout */}
        <div
          className="mt-14 rounded-xl p-6 md:p-8 border text-center"
          style={{
            backgroundColor: "oklch(0.74 0.155 75 / 0.08)",
            borderColor: "oklch(0.74 0.155 75 / 0.3)",
          }}
        >
          <p
            className="text-lg font-bold text-white mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            🏪 Skip the Store. Save Your Saturday.
          </p>
          <p
            style={{ color: "oklch(0.80 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
          >
            The average DIY pool owner spends <strong className="text-white">45–60 minutes per week</strong> driving to Leslie's Pool Supply or a big box store, waiting for water tests, and buying chemicals — often buying the wrong ones. Captain Jon's chemical delivery service eliminates that entirely. <strong className="text-white">Text a photo. Get the right chemicals delivered. Done.</strong>
          </p>
        </div>
      </div>

      {/* Wave divider bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ display: "block" }} preserveAspectRatio="none">
          <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill="oklch(0.98 0.003 250)" />
        </svg>
      </div>
    </section>
  );
}
