"use client";

import { motion } from "framer-motion";
import { MapPin, Plane, Wind, Trees } from "lucide-react";

const markers = [
  { icon: Plane, label: "Canyonlands Airport", distance: "18 min drive", color: "#c1b49a" },
  { icon: Wind, label: "Private Helipad", distance: "On site", color: "#a88b6e" },
  { icon: Trees, label: "Dead Horse Point SP", distance: "12 min drive", color: "#8ca87e" },
  { icon: MapPin, label: "Moab City Centre", distance: "24 min drive", color: "#7b9eb0" },
];

export default function LocationSection() {
  return (
    <section id="location" className="bg-[#f5f4ef] py-24 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-10 h-px bg-stone-400 inline-block" />
          <span className="text-xs font-inter uppercase tracking-[0.3em] text-stone-500 font-medium">
            06 — Location
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14">
          <h2 className="font-oswald font-bold uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tight text-[#111]">
            REMOTE.
            <br />
            UNREACHABLE.
            <br />
            UNMISSABLE.
          </h2>
          <p className="font-inter text-stone-500 text-base max-w-xs leading-relaxed">
            Set deep in the canyon country of San Juan County, Utah — private,
            powerful, and perfectly positioned.
          </p>
        </div>

        {/* Map + Markers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map embed */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] border border-stone-200 bg-stone-800">
            <iframe
              title="Property Location — Canyonlands, Utah"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200124.0!2d-109.8151!3d38.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873740e8f2fa22a3%3A0x1614c1c8e3a4ccf3!2sCanyonlands%20National%20Park!5e1!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(90%) contrast(1.1) brightness(0.85)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Pin overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-white rounded-full border-4 border-[#111] shadow-lg" />
                <div className="w-px h-6 bg-white/80" />
              </div>
            </div>
            {/* Coordinates label */}
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2">
              <p className="font-oswald text-white text-sm font-bold">38°11&apos;N 109°48&apos;W</p>
              <p className="font-inter text-white/60 text-xs">San Juan County, Utah</p>
            </div>
          </div>

          {/* Markers List */}
          <div className="flex flex-col justify-between gap-4">
            {markers.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-center gap-5 p-5 rounded-2xl border border-stone-200 bg-white group hover:border-stone-400 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${m.color}22` }}
                >
                  <m.icon size={20} style={{ color: m.color }} />
                </div>
                <div>
                  <p className="font-inter font-semibold text-[#111] text-sm">{m.label}</p>
                  <p className="font-inter text-stone-400 text-xs mt-0.5">{m.distance}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
