/**
 * ContactSection — Lead capture form + contact info
 * Form submissions go to jongreen67@gmail.com
 */

import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, MessageSquare } from "lucide-react";

const cities = [
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
  "Myakka City",
  "Other",
];

const services = [
  "Weekly Pool Service (Silver — 1x/week)",
  "Weekly Pool Service (Gold — 2x/week)",
  "Chemical Delivery Subscription ($12/mo)",
  "Pool Repair",
  "Green Pool / Algae Cleanup",
  "Other",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Use Formspree or mailto fallback
    try {
      const res = await fetch("https://formspree.io/f/xpwzgpkz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `New Pool Service Inquiry — ${formData.service || "General"} — ${formData.city}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback: open mailto
        window.location.href = `mailto:jongreen67@gmail.com?subject=Pool Service Inquiry - ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ACity: ${formData.city}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
      }
    } catch {
      window.location.href = `mailto:jongreen67@gmail.com?subject=Pool Service Inquiry - ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ACity: ${formData.city}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    }
    setSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{ backgroundColor: "oklch(0.98 0.003 250)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-3">Get In Touch</span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.18 0.04 250)" }}
          >
            Request Your Free Pool Service Quote
          </h2>
          <p style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif", lineHeight: 1.7 }}>
            Serving Sarasota, Bradenton, Parrish, Lakewood Ranch, Venice, and all of Sarasota & Manatee County. Call Captain Jon directly or fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct call */}
            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: "oklch(0.18 0.04 250)",
                borderColor: "oklch(0.30 0.04 250)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.74 0.155 75)", fontFamily: "'Oswald', sans-serif" }}
              >
                Call or Text Captain Jon Directly
              </p>
              <a
                href="tel:+19415843165"
                className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
              >
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(0.74 0.155 75)" }} />
                <span
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  (941) 584-3165
                </span>
              </a>
            </div>

            {/* Info cards */}
            {[
              {
                icon: MessageSquare,
                label: "Text for Chemical Delivery",
                value: "Text a photo of your test strip to (941) 584-3165",
              },
              {
                icon: Mail,
                label: "Email",
                value: "jongreen67@gmail.com",
                href: "mailto:jongreen67@gmail.com",
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Mon–Fri 8am–5pm",
              },
              {
                icon: MapPin,
                label: "Service Area",
                value: "Sarasota County & Manatee County, FL",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-4 rounded-lg border"
                style={{
                  backgroundColor: "oklch(1 0 0)",
                  borderColor: "oklch(0.88 0.008 250)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.74 0.155 75 / 0.12)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "oklch(0.74 0.155 75)" }} />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-0.5"
                    style={{ color: "oklch(0.55 0.02 250)", fontFamily: "'Oswald', sans-serif" }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium hover:underline"
                      style={{ color: "oklch(0.18 0.04 250)", fontFamily: "'Open Sans', sans-serif" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.18 0.04 250)", fontFamily: "'Open Sans', sans-serif" }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="rounded-xl p-10 text-center border h-full flex flex-col items-center justify-center gap-4"
                style={{
                  backgroundColor: "oklch(1 0 0)",
                  borderColor: "oklch(0.88 0.008 250)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.55 0.20 145 / 0.12)" }}
                >
                  <Send className="w-8 h-8" style={{ color: "oklch(0.55 0.20 145)" }} />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: "oklch(0.18 0.04 250)" }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "oklch(0.45 0.02 250)", fontFamily: "'Open Sans', sans-serif" }}>
                  Captain Jon will be in touch within 24 hours. For faster response, call or text (941) 584-3165.
                </p>
                <a href="tel:+19415843165" className="btn-gold mt-2">
                  Call Now for Fastest Response
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl p-6 md:p-8 border space-y-5"
                style={{
                  backgroundColor: "oklch(1 0 0)",
                  borderColor: "oklch(0.88 0.008 250)",
                  boxShadow: "0 4px 24px oklch(0 0 0 / 0.06)",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                      style={{ color: "oklch(0.40 0.02 250)", fontFamily: "'Oswald', sans-serif" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-2.5 rounded-sm border text-sm outline-none transition-colors"
                      style={{
                        borderColor: "oklch(0.88 0.008 250)",
                        fontFamily: "'Open Sans', sans-serif",
                        color: "oklch(0.18 0.04 250)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                      style={{ color: "oklch(0.40 0.02 250)", fontFamily: "'Oswald', sans-serif" }}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(941) 555-0000"
                      className="w-full px-4 py-2.5 rounded-sm border text-sm outline-none transition-colors"
                      style={{
                        borderColor: "oklch(0.88 0.008 250)",
                        fontFamily: "'Open Sans', sans-serif",
                        color: "oklch(0.18 0.04 250)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                    style={{ color: "oklch(0.40 0.02 250)", fontFamily: "'Oswald', sans-serif" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-sm border text-sm outline-none transition-colors"
                    style={{
                      borderColor: "oklch(0.88 0.008 250)",
                      fontFamily: "'Open Sans', sans-serif",
                      color: "oklch(0.18 0.04 250)",
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                      style={{ color: "oklch(0.40 0.02 250)", fontFamily: "'Oswald', sans-serif" }}
                    >
                      Your City *
                    </label>
                    <select
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-sm border text-sm outline-none transition-colors"
                      style={{
                        borderColor: "oklch(0.88 0.008 250)",
                        fontFamily: "'Open Sans', sans-serif",
                        color: formData.city ? "oklch(0.18 0.04 250)" : "oklch(0.60 0.01 250)",
                        backgroundColor: "oklch(1 0 0)",
                      }}
                    >
                      <option value="">Select your city...</option>
                      {cities.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                      style={{ color: "oklch(0.40 0.02 250)", fontFamily: "'Oswald', sans-serif" }}
                    >
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-sm border text-sm outline-none transition-colors"
                      style={{
                        borderColor: "oklch(0.88 0.008 250)",
                        fontFamily: "'Open Sans', sans-serif",
                        color: formData.service ? "oklch(0.18 0.04 250)" : "oklch(0.60 0.01 250)",
                        backgroundColor: "oklch(1 0 0)",
                      }}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                    style={{ color: "oklch(0.40 0.02 250)", fontFamily: "'Oswald', sans-serif" }}
                  >
                    Tell Us About Your Pool
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Pool size, current issues, how often it's been serviced, etc."
                    className="w-full px-4 py-2.5 rounded-sm border text-sm outline-none transition-colors resize-none"
                    style={{
                      borderColor: "oklch(0.88 0.008 250)",
                      fontFamily: "'Open Sans', sans-serif",
                      color: "oklch(0.18 0.04 250)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full flex items-center justify-center gap-2 py-3.5"
                  style={{ opacity: submitting ? 0.7 : 1 }}
                >
                  <Send className="w-4 h-4" />
                  {submitting ? "Sending..." : "Request Free Quote"}
                </button>

                <p
                  className="text-xs text-center"
                  style={{ color: "oklch(0.60 0.01 250)", fontFamily: "'Open Sans', sans-serif" }}
                >
                  Or call/text directly: <a href="tel:+19415843165" className="underline">(941) 584-3165</a>. We respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
