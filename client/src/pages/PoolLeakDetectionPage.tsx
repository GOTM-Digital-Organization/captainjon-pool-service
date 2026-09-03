/**
 * PoolLeakDetectionPage — Gulf Coast Authority extension
 * Maintains the site’s navy, white, and gold nautical service aesthetic.
 * Scope: homeowner pool leak detection and repair only.
 */

import { useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  Anchor,
  ArrowRight,
  CheckCircle2,
  Clock,
  Droplets,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const phoneHref = "tel:+19415843165";

const warningSigns = [
  "Your pool loses more than ¼ inch of water a day.",
  "You are adding water more than once a week.",
  "You see wet or soggy spots around the pool deck.",
  "Your water bill has increased without another explanation.",
  "Air bubbles are coming from return jets.",
  "The deck is cracking, lifting, sinking, or shifting.",
  "You notice cracks at the shell, coping, fittings, or skimmer.",
  "Algae keeps returning to one isolated part of the pool.",
];

const detectionServices = [
  {
    icon: Droplets,
    title: "Dye Testing",
    description:
      "Visible dye is applied around suspected areas to confirm exactly where water is escaping from the pool shell, fittings, or skimmer.",
  },
  {
    icon: Activity,
    title: "Pressure Testing",
    description:
      "We isolate and pressurize plumbing lines to help identify a leak below the deck without unnecessary digging.",
  },
  {
    icon: Search,
    title: "Electronic Listening",
    description:
      "Electronic listening equipment helps locate the sound of water moving through underground plumbing lines and pool structures.",
  },
  {
    icon: Wrench,
    title: "Pool Leak Repair",
    description:
      "Once the source is identified, we explain the repair options and provide straightforward pricing before any approved work begins.",
  },
  {
    icon: Anchor,
    title: "Spa & Hot Tub Leaks",
    description:
      "We also diagnose pool-spa connections, jets, heater connections, fittings, and shell leaks using the same careful approach.",
  },
];

const processSteps = [
  ["01", "You Call", "Reach Captain Jon’s team directly. We will discuss what you are seeing and schedule a service visit."],
  ["02", "We Inspect", "We examine the pool, equipment, fittings, shell, and accessible plumbing with the right diagnostic tools."],
  ["03", "We Find It", "Dye testing, pressure testing, and electronic listening help pinpoint the most likely leak source."],
  ["04", "We Explain", "You receive clear repair options and upfront pricing before any repair work is approved."],
];

const serviceAreas = [
  "Sarasota",
  "Venice",
  "Siesta Key",
  "Longboat Key",
  "Lakewood Ranch",
  "Bradenton",
  "Parrish",
  "Palmetto",
  "Osprey",
  "Nokomis",
  "North Port",
  "Ellenton",
];

const faqs = [
  {
    q: "How can I tell if my pool is leaking or simply evaporating?",
    a: "A practical first step is a bucket test: place a bucket of pool water on a pool step, mark the water level inside and outside the bucket, then compare both after 24 hours. If the pool level drops noticeably more than the bucket level, a leak may be present. Call Captain Jon’s team to discuss what you are seeing.",
  },
  {
    q: "Do you have to drain the pool to find a leak?",
    a: "In many cases, no. Our diagnostic approach is designed to investigate leaks while the pool is filled and operating, which can avoid unnecessary water loss and protect the pool finish.",
  },
  {
    q: "What pool leak detection methods do you use?",
    a: "Depending on the symptoms and pool system, we use dye testing for visible leak points, pressure testing for plumbing lines, and electronic listening to help identify water escaping from underground pipes or pool structures.",
  },
  {
    q: "Do you serve Parrish and Lakewood Ranch?",
    a: "Yes. Captain Jon’s Pool Service provides pool leak detection and repair for homeowners throughout Sarasota County and Manatee County, including Parrish, Lakewood Ranch, Bradenton, Sarasota, Venice, Siesta Key, and surrounding communities.",
  },
];

const valueCards = [
  {
    icon: ShieldCheck,
    title: "Non-Invasive Focus",
    description: "We start with methods designed to locate the cause without unnecessary damage or disruption.",
  },
  {
    icon: Clock,
    title: "Fast Local Response",
    description: "We schedule promptly and offer same-day availability when the route and schedule allow.",
  },
  {
    icon: CheckCircle2,
    title: "Upfront Repair Options",
    description: "Before repair work begins, you receive clear choices and pricing to approve.",
  },
  {
    icon: MapPin,
    title: "Homeowner Service Area",
    description: "Focused on Sarasota County and Manatee County pools, spas, and accessible plumbing.",
  },
];

function setMeta(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = content;
}

export default function PoolLeakDetectionPage() {
  useEffect(() => {
    const originalTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content;
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.content;
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.content;

    document.title = "Pool Leak Detection Sarasota & Manatee County | Captain Jon's Pool Service";
    setMeta('meta[name="description"]', "Pool leak detection and repair for Sarasota and Manatee County homeowners. Captain Jon’s team uses non-invasive dye, pressure, and electronic testing. Serving Sarasota, Bradenton, Parrish, Lakewood Ranch, Venice and more. Call (941) 584-3165.");
    setMeta('meta[property="og:title"]', "Pool Leak Detection & Repair | Captain Jon's Pool Service");
    setMeta('meta[property="og:description"]', "Suspect a pool leak? Captain Jon’s team uses non-invasive diagnostics to find and repair leaks across Sarasota and Manatee County.");
    setMeta('meta[property="og:url"]', "https://captainjonspoolservice.com/pool-leak-detection");
    const canonicalElement = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalElement) canonicalElement.href = "https://captainjonspoolservice.com/pool-leak-detection";

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
        <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32" style={{ backgroundColor: "oklch(0.13 0.04 250)" }}>
          <img src="/images/hero-captain-jon.webp" alt="Captain Jon's pool service technician at a Sarasota-area pool" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.11 0.04 250 / .96) 0%, oklch(0.12 0.04 250 / .86) 42%, oklch(0.13 0.04 250 / .38) 100%)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, oklch(0.74 0.155 75 / .35), transparent 24%), radial-gradient(circle at 88% 62%, oklch(0.54 0.14 230 / .64), transparent 34%)" }} />
          <div className="absolute -right-10 -bottom-12 opacity-15" aria-hidden="true"><Anchor className="w-96 h-96 text-white" strokeWidth={0.8} /></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6" style={{ color: "oklch(0.74 0.155 75)" }}>
                <span className="h-px w-10" style={{ backgroundColor: "currentColor" }} />
                <span className="uppercase text-xs font-bold tracking-[0.2em]" style={{ fontFamily: "'Oswald', sans-serif" }}>Sarasota & Manatee County</span>
              </div>
              <h1 className="text-white font-black leading-[0.98] mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.7rem, 7vw, 5.4rem)", letterSpacing: "-0.045em" }}>
                Pool Leak Detection <span style={{ color: "oklch(0.74 0.155 75)" }}>&amp; Repair</span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl leading-relaxed mb-9" style={{ color: "oklch(0.88 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}>
                If your pool is losing water, Captain Jon’s local team uses non-invasive diagnostics to find the source—without guessing, unnecessary deck damage, or draining your pool in most cases.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={phoneHref} className="btn-gold inline-flex items-center gap-2 px-7 py-4"><Phone className="w-4 h-4" /> Call (941) 584-3165</a>
                <a href="/#contact" className="btn-outline-white inline-flex items-center gap-2 px-7 py-4">Request a Leak Quote <ArrowRight className="w-4 h-4" /></a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-9 text-sm" style={{ color: "oklch(0.75 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}>
                <span>✓ Non-invasive methods</span><span>✓ Upfront repair options</span><span>✓ Same-day appointments when available</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-px left-0 right-0 z-20" aria-hidden="true">
            <svg viewBox="0 0 1440 84" preserveAspectRatio="none" className="block h-12 w-full md:h-16"><path d="M0,36 C280,84 520,0 780,35 C1050,70 1240,10 1440,42 L1440,84 L0,84 Z" fill="oklch(0.98 0.003 250)" /></svg>
          </div>
        </section>

        <section className="py-20 md:py-28" style={{ backgroundColor: "oklch(0.98 0.003 250)" }}>
          <div className="container grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4"><AlertTriangle className="w-5 h-5" style={{ color: "oklch(0.74 0.155 75)" }} /><span className="section-label">Don&apos;t Ignore the Signs</span></div>
              <h2 className="font-black leading-tight mb-5" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 4vw, 3.4rem)", color: "oklch(0.18 0.04 250)", letterSpacing: "-0.04em" }}>Is Your Pool <span style={{ color: "oklch(0.74 0.155 75)" }}>Leaking?</span></h2>
              <p className="leading-relaxed" style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}>Some evaporation is normal in Florida. Persistent water loss or changes around the deck deserve a professional inspection before the problem becomes more expensive.</p>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 border-t border-l" style={{ borderColor: "oklch(0.85 0.01 250)" }}>
              {warningSigns.map((sign, index) => <div key={sign} className="border-r border-b p-6 md:p-7" style={{ borderColor: "oklch(0.85 0.01 250)", backgroundColor: index % 2 ? "oklch(0.96 0.005 250)" : "oklch(1 0 0)" }}><span className="block text-xs font-bold tracking-[0.18em] mb-3" style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif" }}>WARNING SIGN 0{index + 1}</span><p className="font-semibold leading-snug" style={{ color: "oklch(0.22 0.04 250)", fontFamily: "'Montserrat', sans-serif" }}>{sign}</p></div>)}
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "oklch(0.18 0.04 250)" }}>
          <div className="absolute inset-y-0 right-0 w-2/5 opacity-20" aria-hidden="true" style={{ background: "linear-gradient(135deg, transparent 20%, oklch(0.58 0.16 230 / .72) 20% 21%, transparent 21% 45%, oklch(0.58 0.16 230 / .4) 45% 46%, transparent 46%)" }} />
          <div className="container">
            <div className="max-w-2xl mb-12"><span className="section-label">What We Do</span><h2 className="text-white font-black leading-tight mt-4" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>Accurate Diagnosis. <span style={{ color: "oklch(0.74 0.155 75)" }}>Clear Next Steps.</span></h2></div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-px" style={{ backgroundColor: "oklch(0.74 0.155 75 / .35)" }}>
              {detectionServices.map(({ icon: Icon, title, description }) => <article key={title} className="p-7 min-h-72" style={{ backgroundColor: "oklch(0.18 0.04 250)" }}><div className="w-11 h-11 flex items-center justify-center border mb-10" style={{ borderColor: "oklch(0.74 0.155 75 / .55)", color: "oklch(0.74 0.155 75)" }}><Icon className="w-5 h-5" /></div><h3 className="text-white text-lg font-bold mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>{title}</h3><p className="text-sm leading-relaxed" style={{ color: "oklch(0.72 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}>{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28" style={{ backgroundColor: "oklch(1 0 0)" }}>
          <div className="container">
            <div className="max-w-2xl mb-12"><span className="section-label">Simple Process</span><h2 className="font-black leading-tight mt-4" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "oklch(0.18 0.04 250)", letterSpacing: "-0.04em" }}>How We Find Your <span style={{ color: "oklch(0.74 0.155 75)" }}>Pool Leak</span></h2></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-l border-t" style={{ borderColor: "oklch(0.85 0.01 250)" }}>
              {processSteps.map(([number, title, copy]) => <div key={number} className="p-7 md:p-8 border-r border-b min-h-64" style={{ borderColor: "oklch(0.85 0.01 250)" }}><span className="block text-5xl font-black leading-none mb-10" style={{ color: "oklch(0.74 0.155 75 / .42)", fontFamily: "'Oswald', sans-serif" }}>{number}</span><h3 className="font-bold text-xl mb-3" style={{ color: "oklch(0.18 0.04 250)", fontFamily: "'Montserrat', sans-serif" }}>{title}</h3><p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}>{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28" style={{ backgroundColor: "oklch(0.95 0.005 250)" }}>
          <div className="container grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-2"><span className="section-label">Local. Experienced. Straightforward.</span><h2 className="font-black leading-tight mt-4 mb-5" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 4vw, 3.4rem)", color: "oklch(0.18 0.04 250)", letterSpacing: "-0.04em" }}>Leak Detection for <span style={{ color: "oklch(0.74 0.155 75)" }}>Local Pool Owners.</span></h2><p className="leading-relaxed" style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}>Captain Jon’s Pool Service provides practical diagnostics and repair guidance for homeowners across Sarasota and Manatee County. You get a clear explanation of what we find and what happens next.</p></div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {valueCards.map(({ icon: Icon, title, description }) => <div key={title} className="border-t pt-5" style={{ borderColor: "oklch(0.74 0.155 75 / .55)" }}><Icon className="w-5 h-5 mb-4" style={{ color: "oklch(0.74 0.155 75)" }} /><h3 className="font-bold mb-2" style={{ color: "oklch(0.18 0.04 250)", fontFamily: "'Montserrat', sans-serif" }}>{title}</h3><p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}>{description}</p></div>)}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28" style={{ backgroundColor: "oklch(1 0 0)" }}>
          <div className="container grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2"><span className="section-label">Where We Work</span><h2 className="font-black leading-tight mt-4 mb-5" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 4vw, 3.4rem)", color: "oklch(0.18 0.04 250)", letterSpacing: "-0.04em" }}>Pool Leak Detection Across <span style={{ color: "oklch(0.74 0.155 75)" }}>Two Counties.</span></h2><p className="leading-relaxed" style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}>From waterfront pools to screened lanais, Captain Jon’s team serves homeowners throughout Sarasota County and Manatee County.</p></div>
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-px" style={{ backgroundColor: "oklch(0.85 0.01 250)" }}>{serviceAreas.map((area) => <div key={area} className="p-5 flex items-center gap-3" style={{ backgroundColor: "oklch(1 0 0)" }}><MapPin className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.74 0.155 75)" }} /><span className="text-sm font-bold" style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.22 0.04 250)" }}>{area}</span></div>)}</div>
          </div>
        </section>

        <section className="py-20 md:py-28" style={{ backgroundColor: "oklch(0.98 0.003 250)" }}>
          <div className="container grid lg:grid-cols-5 gap-12"><div className="lg:col-span-2"><span className="section-label">Common Questions</span><h2 className="font-black leading-tight mt-4" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 4vw, 3.4rem)", color: "oklch(0.18 0.04 250)", letterSpacing: "-0.04em" }}>Pool Leak <span style={{ color: "oklch(0.74 0.155 75)" }}>FAQs</span></h2></div><div className="lg:col-span-3 space-y-6">{faqs.map(({ q, a }) => <article key={q} className="border-l-4 pl-6 py-1" style={{ borderColor: "oklch(0.74 0.155 75)" }}><h3 className="font-bold text-lg mb-2" style={{ color: "oklch(0.18 0.04 250)", fontFamily: "'Montserrat', sans-serif" }}>{q}</h3><p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}>{a}</p></article>)}</div></div>
        </section>

        <section className="py-20 md:py-28" style={{ backgroundColor: "oklch(0.13 0.04 250)" }}>
          <div className="container text-center max-w-4xl"><Anchor className="w-10 h-10 mx-auto mb-6" style={{ color: "oklch(0.74 0.155 75)" }} /><h2 className="text-white font-black leading-tight mb-5" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.2rem, 5vw, 4.2rem)", letterSpacing: "-0.045em" }}>Your Pool Should Hold Water. <span style={{ color: "oklch(0.74 0.155 75)" }}>Let&apos;s Find Out Why It Isn&apos;t.</span></h2><p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "oklch(0.78 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}>Call Captain Jon’s team to discuss the symptoms, request a quote, and schedule pool leak detection in Sarasota or Manatee County.</p><div className="flex flex-wrap justify-center gap-4"><a href={phoneHref} className="btn-gold inline-flex items-center gap-2 px-7 py-4"><Phone className="w-4 h-4" /> Call (941) 584-3165</a><a href="/#contact" className="btn-outline-white inline-flex items-center gap-2 px-7 py-4">Request a Leak Quote <ArrowRight className="w-4 h-4" /></a></div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
