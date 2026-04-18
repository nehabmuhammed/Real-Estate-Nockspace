"use client";

import { motion } from "framer-motion";

const amenities = [
  {
    icon: "🏊",
    title: "Private Infinity Pool",
    desc: "Cantilevered over the canyon ledge — a pool that appears to pour into the desert horizon.",
    tag: "Outdoor",
  },
  {
    icon: "🍷",
    title: "Climate Wine Cellar",
    desc: "A 400-bottle cellar carved into the rock walls, temperature-controlled to perfection.",
    tag: "Interior",
  },
  {
    icon: "🛎",
    title: "24/7 Concierge",
    desc: "Personal concierge services — curated dining, helicopter transfers, and adventure curation.",
    tag: "Service",
  },
  {
    icon: "🚗",
    title: "Underground Parking",
    desc: "Private garage for 4 vehicles accessed by a concealed rock-cut drive.",
    tag: "Infrastructure",
  },
  {
    icon: "🌡",
    title: "Smart Climate Control",
    desc: "Zone-by-zone thermal intelligence — solar-assisted, silent, and invisible.",
    tag: "Technology",
  },
  {
    icon: "🌅",
    title: "Panoramic Observation Deck",
    desc: "A cantilevered rooftop terrace with 360° canyon and sky views — sunrise to stars.",
    tag: "Outdoor",
  },
  {
    icon: "💆",
    title: "Private Spa & Sauna",
    desc: "Finnish sauna and cold plunge hewn into exposed limestone. Silence included.",
    tag: "Wellness",
  },
  {
    icon: "⚡",
    title: "Off-Grid Ready",
    desc: "Solar array, battery storage, and rainwater capture — fully self-sufficient for 21 days.",
    tag: "Sustainability",
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-[#111] py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-10 h-px bg-stone-600 inline-block" />
          <span className="text-xs font-inter uppercase tracking-[0.3em] text-stone-500 font-medium">
            07 — Amenities
          </span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <h2 className="font-oswald font-bold uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tight text-white">
            UNVEILING
            <br />
            AMENITIES THAT
            <br />
            DEFY EXPECTATION.
          </h2>
          <p className="font-inter text-stone-400 text-base max-w-xs leading-relaxed">
            Private mineral springs, panoramic observation decks, and personal
            concierge services curated for the discerning few.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {amenities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 cursor-default
                         hover:bg-white hover:border-white transition-all duration-500"
            >
              {/* Hover tag */}
              <span className="absolute top-5 right-5 font-inter text-[10px] uppercase tracking-widest text-stone-500 group-hover:text-stone-400 transition-colors">
                {a.tag}
              </span>

              {/* Emoji Icon */}
              <div className="text-4xl mb-6">{a.icon}</div>

              <h3 className="font-oswald font-bold text-white uppercase text-xl tracking-tight mb-3 group-hover:text-black transition-colors duration-500">
                {a.title}
              </h3>
              <p className="font-inter text-stone-400 text-sm leading-relaxed group-hover:text-stone-600 transition-colors duration-500">
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
