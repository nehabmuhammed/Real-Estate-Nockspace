"use client";

import { motion } from "framer-motion";
import { Ruler, BedDouble, Bath, Zap, Mountain, Layers } from "lucide-react";

const specs = [
  {
    icon: Ruler,
    label: "Total Area",
    value: "160 M²",
    sub: "Net liveable space",
  },
  {
    icon: BedDouble,
    label: "Bedrooms",
    value: "3 Bed",
    sub: "Including master suite",
  },
  {
    icon: Bath,
    label: "Bathrooms",
    value: "2.5 Bath",
    sub: "Heated travertine floors",
  },
  {
    icon: Zap,
    label: "Sustainability",
    value: "Solar + Smart",
    sub: "Off-grid capable system",
  },
  {
    icon: Mountain,
    label: "Materials",
    value: "Raw + Local",
    sub: "Concrete, glass, canyon stone",
  },
  {
    icon: Layers,
    label: "House Type",
    value: "Type C",
    sub: "Comfort Line series",
  },
];

export default function SpecsSection() {
  return (
    <section id="specs" className="bg-[#f5f4ef] py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-10 h-px bg-stone-400 inline-block" />
          <span className="text-xs font-inter uppercase tracking-[0.3em] text-stone-500 font-medium">
            04 — Specifications
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <h2 className="font-oswald font-bold uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tight text-[#111] max-w-lg">
            EVERY DETAIL.
            <br />
            CONSIDERED.
          </h2>
          <p className="font-inter text-stone-500 text-base max-w-xs leading-relaxed">
            Precision-engineered specifications that reflect the uncompromising
            standards of Guardians of Capital's Comfort Line.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-[#f5f4ef] p-10 group hover:bg-[#111] transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-200 group-hover:bg-white/10 flex items-center justify-center mb-8 transition-colors duration-300">
                <spec.icon size={22} className="text-[#111] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="font-inter text-xs uppercase tracking-[0.25em] text-stone-400 group-hover:text-white/50 mb-3 transition-colors duration-300">
                {spec.label}
              </p>
              <p className="font-oswald font-bold text-3xl text-[#111] group-hover:text-white mb-2 tracking-tight transition-colors duration-300">
                {spec.value}
              </p>
              <p className="font-inter text-sm text-stone-500 group-hover:text-white/50 transition-colors duration-300">
                {spec.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
