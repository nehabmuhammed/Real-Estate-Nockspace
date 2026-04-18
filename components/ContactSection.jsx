"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Share2, Globe, AtSign, ArrowUpRight } from "lucide-react";

// Social icon SVGs (platform icons not in this lucide version)
const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconLinkedin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.742l7.732-8.85L2.25 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const ranges = [
  "Under $5M",
  "$5M – $10M",
  "$10M – $20M",
  "$20M+",
  "Inquiry Only",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    range: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#f5f4ef]">
      {/* Contact Form Area */}
      <div className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-stone-400 inline-block" />
            <span className="text-xs font-inter uppercase tracking-[0.3em] text-stone-500 font-medium">
              08 — Contact
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Copy */}
            <div>
              <h2 className="font-oswald font-bold uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tight text-[#111] mb-8">
                SECURE YOUR
                <br />
                VIEWING.
              </h2>
              <p className="font-inter text-stone-500 text-base leading-relaxed mb-12 max-w-md">
                Guardians of Capital is a strictly limited release. We accept
                private inquiries from qualified investors and buyers. Fill in
                your details and our team will reach out within 24 hours.
              </p>
              <div className="space-y-6 border-t border-stone-200 pt-8">
                <div>
                  <p className="font-inter text-xs uppercase tracking-[0.25em] text-stone-400 mb-1">
                    Location
                  </p>
                  <p className="font-inter font-semibold text-[#111]">
                    San Juan County, Utah, USA
                  </p>
                </div>
                <div>
                  <p className="font-inter text-xs uppercase tracking-[0.25em] text-stone-400 mb-1">
                    Availability
                  </p>
                  <p className="font-inter font-semibold text-[#111]">
                    By private appointment only
                  </p>
                </div>
                <div>
                  <p className="font-inter text-xs uppercase tracking-[0.25em] text-stone-400 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:inquiry@guardiansofcapital.com"
                    className="font-inter font-semibold text-[#111] hover:text-stone-500 transition-colors"
                  >
                    inquiry@guardiansofcapital.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-stone-100">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-inter text-xs uppercase tracking-widest text-stone-400 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full border border-stone-200 rounded-xl px-4 py-3.5 font-inter text-sm text-[#111] placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors bg-stone-50"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-xs uppercase tracking-widest text-stone-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full border border-stone-200 rounded-xl px-4 py-3.5 font-inter text-sm text-[#111] placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors bg-stone-50"
                      />
                    </div>
                  </div>

                  {/* Investment Range */}
                  <div>
                    <label className="block font-inter text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Investment Range
                    </label>
                    <select
                      name="range"
                      value={form.range}
                      onChange={handleChange}
                      required
                      className="w-full border border-stone-200 rounded-xl px-4 py-3.5 font-inter text-sm text-[#111] focus:outline-none focus:border-stone-400 transition-colors bg-stone-50 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select your range</option>
                      {ranges.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-inter text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your interest in the property..."
                      className="w-full border border-stone-200 rounded-xl px-4 py-3.5 font-inter text-sm text-[#111] placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors bg-stone-50 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#111] text-white rounded-xl py-4 font-inter font-semibold text-sm hover:bg-stone-800 transition-colors"
                  >
                    Submit Inquiry
                    <Send size={16} />
                  </button>

                  <p className="font-inter text-xs text-stone-400 text-center">
                    By submitting you agree to our{" "}
                    <a href="#" className="underline hover:text-stone-600 transition-colors">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="text-5xl mb-6">✅</div>
                  <h3 className="font-oswald font-bold text-3xl uppercase text-[#111] mb-4">
                    Inquiry Received
                  </h3>
                  <p className="font-inter text-stone-500 text-base max-w-xs mx-auto">
                    Our private team will contact you within 24 hours to arrange
                    your exclusive viewing.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#111] text-white py-14 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-10 border-b border-white/10">
            {/* Logo + tagline */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-white flex items-center justify-center rotate-45 rounded-sm">
                  <span className="-rotate-45 font-bold text-black text-base leading-none font-oswald">G</span>
                </div>
                <span className="font-oswald font-semibold tracking-[0.2em] uppercase text-sm">
                  Guardians of Capital
                </span>
              </div>
              <p className="font-inter text-stone-400 text-sm max-w-xs leading-relaxed">
                Architecture that defies gravity. Living that defines a generation.
              </p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {["Projects", "Browse Properties", "About", "Floor Plans", "Amenities", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                  className="font-inter text-sm text-stone-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Social */}
            <div className="flex items-center gap-4">
              {[
                { Icon: IconInstagram, href: "#", label: "Instagram" },
                { Icon: IconLinkedin, href: "#", label: "LinkedIn" },
                { Icon: IconX, href: "#", label: "X (Twitter)" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/50 transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8">
            <p className="font-inter text-stone-500 text-xs">
              © 2025 Guardians of Capital. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-inter text-stone-500 hover:text-white text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-stone-500 hover:text-white text-xs transition-colors">
                Terms of Service
              </a>
              <a
                href="#hero"
                className="flex items-center gap-1.5 font-inter text-stone-400 hover:text-white text-xs transition-colors group"
              >
                Back to top <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
