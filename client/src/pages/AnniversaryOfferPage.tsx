/**
 * AnniversaryOfferPage — Google Business Profile offer landing page.
 * Purpose: Make a phone redemption action unmistakable for Captain Jon's first-year celebration.
 */

import { useEffect } from "react";
import {
  Anchor,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Droplets,
  Gift,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const phoneHref = "tel:+19417043699";
const phoneDisplay = "(941) 704-3699";
const offerImage = "/manus-storage/captain-jon-pool-transformation_5149f935.png";

function setMeta(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = content;
}

const includedItems = [
  "Weekly professional pool cleaning",
  "Skimming, brushing, vacuuming, and basket service",
  "Water testing and chemical balancing",
  "Equipment check and filter backwashing as necessary",
];

export default function AnniversaryOfferPage() {
  useEffect(() => {
    const originalTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content;
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.content;
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.content;

    document.title = "Free 13th Month of Pool Service | Captain Jon's Loyalty Reward";
    setMeta(
      'meta[name="description"]',
      "Celebrate Captain Jon's one-year business anniversary with a free 13th month of weekly pool service after 12 consecutive paid months. Call (941) 704-3699 to redeem.",
    );
    setMeta('meta[property="og:title"]', "Free 13th Month of Pool Service | Captain Jon's Loyalty Reward");
    setMeta(
      'meta[property="og:description"]',
      "A one-year anniversary thank-you: complete 12 consecutive paid months of weekly pool service with Captain Jon and redeem your 13th month free.",
    );
    setMeta('meta[property="og:url"]', "https://captainjonspoolservice.com/anniversary-offer");
    const canonicalElement = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalElement) canonicalElement.href = "https://captainjonspoolservice.com/anniversary-offer";

    return () => {
      document.title = originalTitle;
      if (description) setMeta('meta[name="description"]', description);
      if (ogTitle) setMeta('meta[property="og:title"]', ogTitle);
      if (ogDescription) setMeta('meta[property="og:description"]', ogDescription);
      if (ogUrl) setMeta('meta[property="og:url"]', ogUrl);
      const link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (link && canonical) link.href = canonical;
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.98 0.003 250)" }}>
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24" style={{ backgroundColor: "oklch(0.13 0.04 250)" }}>
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "radial-gradient(circle at 16% 20%, oklch(0.74 0.155 75 / .65), transparent 24%), radial-gradient(circle at 84% 60%, oklch(0.55 0.14 220 / .72), transparent 32%)",
            }}
          />
          <Anchor className="absolute -bottom-24 -left-14 h-96 w-96 opacity-10" color="white" strokeWidth={0.8} aria-hidden="true" />
          <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="mb-6 inline-flex items-center gap-2 border px-3 py-1.5" style={{ borderColor: "oklch(0.74 0.155 75 / .58)", backgroundColor: "oklch(0.74 0.155 75 / .11)" }}>
                <Sparkles className="h-4 w-4" style={{ color: "oklch(0.74 0.155 75)" }} />
                <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif" }}>
                  One-Year Loyalty Reward
                </span>
              </div>
              <h1 className="mb-6 font-black leading-[0.96] text-white" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(3rem, 6.5vw, 5.55rem)", letterSpacing: "-0.055em" }}>
                Your 13th Month of Pool Service Is <span style={{ color: "oklch(0.74 0.155 75)" }}>Free.</span>
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "oklch(0.89 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}>
                Captain Jon is celebrating one year in business with a thank-you for loyal customers. Complete 12 consecutive paid months of weekly pool service, then receive your 13th month free.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={phoneHref} className="btn-gold inline-flex items-center gap-2 px-7 py-4" aria-label={`Call Captain Jon at ${phoneDisplay} to redeem the loyalty reward`}>
                  <Phone className="h-4 w-4" />
                  Call {phoneDisplay} to Redeem
                </a>
                <a href="#how-to-redeem" className="btn-outline-white inline-flex items-center gap-2 px-7 py-4">
                  See How to Claim <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm" style={{ color: "oklch(0.74 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}>
                <Clock3 className="h-4 w-4 flex-none" style={{ color: "oklch(0.74 0.155 75)" }} />
                Call Captain Jon after your 12th paid month and mention the anniversary loyalty reward.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative border-4" style={{ borderColor: "oklch(0.74 0.155 75 / .75)", boxShadow: "0 24px 70px oklch(0 0 0 / .34)" }}>
                <img src={offerImage} alt="Captain Jon cleaning a pool as green water transitions to crystal-clear blue water" className="aspect-[16/10] w-full object-cover object-center" />
                <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 text-center text-xs font-bold uppercase tracking-[0.16em] sm:text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  <div className="py-3" style={{ backgroundColor: "oklch(0.30 0.09 140 / .94)", color: "oklch(0.95 0.01 140)" }}>Before</div>
                  <div className="py-3" style={{ backgroundColor: "oklch(0.55 0.14 220 / .95)", color: "white" }}>Captain Jon&apos;s Care</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-px left-0 right-0 z-20" aria-hidden="true">
            <svg viewBox="0 0 1440 84" preserveAspectRatio="none" className="block h-12 w-full md:h-16"><path d="M0,36 C280,84 520,0 780,35 C1050,70 1240,10 1440,42 L1440,84 L0,84 Z" fill="oklch(0.98 0.003 250)" /></svg>
          </div>
        </section>

        <section id="how-to-redeem" className="py-20 md:py-28" style={{ backgroundColor: "oklch(0.98 0.003 250)" }}>
          <div className="container grid items-start gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="section-label">Simple Phone Redemption</span>
              <h2 className="mt-4 font-black leading-tight" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.25rem, 4.5vw, 4rem)", color: "oklch(0.18 0.04 250)", letterSpacing: "-0.045em" }}>
                Earn Your 13th Month <span style={{ color: "oklch(0.74 0.155 75)" }}>Free.</span>
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed" style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}>
                There is no online code to enter and no complicated form. After 12 consecutive paid months of weekly service, call Captain Jon and mention the one-year loyalty reward to confirm your free 13th month.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-px sm:grid-cols-3" style={{ backgroundColor: "oklch(0.84 0.01 250)" }}>
              {[
                ["01", "Complete 12 Paid Months", "Stay current on 12 consecutive months of weekly pool service with Captain Jon."],
                ["02", "Call Captain Jon", "Call the number below and mention the Google one-year loyalty reward."],
                ["03", "Enjoy Your Free Month", "Captain Jon will confirm eligibility and apply your free 13th month of weekly pool service."],
              ].map(([number, title, copy]) => (
                <article key={number} className="min-h-64 p-7 md:p-8" style={{ backgroundColor: "white" }}>
                  <span className="block text-5xl font-black leading-none" style={{ color: "oklch(0.74 0.155 75 / .45)", fontFamily: "'Oswald', sans-serif" }}>{number}</span>
                  <h3 className="mt-10 text-xl font-bold" style={{ color: "oklch(0.18 0.04 250)", fontFamily: "'Montserrat', sans-serif" }}>{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28" style={{ backgroundColor: "white" }}>
          <div className="container grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="inline-flex h-12 w-12 items-center justify-center border" style={{ borderColor: "oklch(0.74 0.155 75 / .56)", color: "oklch(0.74 0.155 75)" }}><Gift className="h-6 w-6" /></div>
              <span className="section-label mt-6">The Gold Plan</span>
              <h2 className="mt-4 font-black leading-tight" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.25rem, 4vw, 3.75rem)", color: "oklch(0.18 0.04 250)", letterSpacing: "-0.045em" }}>
                More Clear-Pool Days. <span style={{ color: "oklch(0.74 0.155 75)" }}>On Us.</span>
              </h2>
              <p className="mt-5 leading-relaxed" style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}>
                Weekly service is designed to keep your pool ready to enjoy—not turn your weekends into a maintenance project. Captain Jon&apos;s team provides consistent care throughout Sarasota and Manatee County.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-px sm:grid-cols-2" style={{ backgroundColor: "oklch(0.84 0.01 250)" }}>
              {includedItems.map((item, index) => {
                const Icon = index === 0 ? Droplets : index === 1 ? Sparkles : index === 2 ? ShieldCheck : CalendarCheck;
                return (
                  <div key={item} className="flex gap-4 p-6" style={{ backgroundColor: "oklch(0.98 0.003 250)" }}>
                    <Icon className="mt-0.5 h-5 w-5 flex-none" style={{ color: "oklch(0.74 0.155 75)" }} />
                    <p className="font-semibold leading-snug" style={{ color: "oklch(0.22 0.04 250)", fontFamily: "'Montserrat', sans-serif" }}>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28" style={{ backgroundColor: "oklch(0.18 0.04 250)" }}>
          <div className="container grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3" style={{ color: "oklch(0.74 0.155 75)" }}><MapPin className="h-5 w-5" /><span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ fontFamily: "'Oswald', sans-serif" }}>Sarasota & Manatee County</span></div>
              <h2 className="mt-5 max-w-4xl font-black leading-[1.02] text-white" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 4.25rem)", letterSpacing: "-0.045em" }}>
                Make Your Pool the Easy Part of Your Week.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "oklch(0.78 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}>
                This loyalty reward is available to current residential weekly pool-service customers after 12 consecutive paid months with Captain Jon. Call directly to confirm eligibility and redeem.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a href={phoneHref} className="btn-gold inline-flex items-center gap-2 px-7 py-4"><Phone className="h-4 w-4" /> Call {phoneDisplay}</a>
              <p className="mt-4 text-sm" style={{ color: "oklch(0.68 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}>Mention: “One-Year Loyalty Reward”</p>
            </div>
          </div>
        </section>

        <section className="py-8" style={{ backgroundColor: "oklch(0.95 0.005 250)" }}>
          <div className="container flex flex-col gap-2 text-xs leading-relaxed md:flex-row md:items-center md:justify-between" style={{ color: "oklch(0.46 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}>
            <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 flex-none" style={{ color: "oklch(0.55 0.20 145)" }} /> Offer redemption is completed by phone with Captain Jon.</p>
            <p>Current residential weekly pool-service customers only. Earned after 12 consecutive paid months. One reward per household, per 12-month service period.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
