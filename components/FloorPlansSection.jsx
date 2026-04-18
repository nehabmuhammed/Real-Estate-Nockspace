"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const levels = [
  {
    id: "level1",
    label: "Level 1",
    tag: "Ground Floor",
    src: "/floor_plan_l1.png",
    rooms: ["Open-Plan Living", "Kitchen", "Dining", "Utility Room", "Garage"],
  },
  {
    id: "level2",
    label: "Level 2",
    tag: "Upper Floor",
    src: "/floor_plan_l2.png",
    rooms: [
      "Master Suite",
      "Bedroom 2",
      "Bedroom 3",
      "Study / Library",
      "Roof Terrace",
    ],
  },
];

export default function FloorPlansSection() {
  const [active, setActive] = useState("level1");
  const current = levels.find((l) => l.id === active);

  return (
    <section id="floorplans" className="bg-[#111] py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-10 h-px bg-stone-600 inline-block" />
          <span className="text-xs font-inter uppercase tracking-[0.3em] text-stone-500 font-medium">
            05 — Floor Plans
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <h2 className="font-oswald font-bold uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tight text-white">
            SPATIAL
            <br />
            LOGIC.
          </h2>

          {/* Toggle Switch */}
          <div className="flex items-center gap-0 border border-white/10 rounded-full p-1">
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setActive(lvl.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-inter font-semibold transition-all duration-300 ${
                  active === lvl.id
                    ? "bg-white text-black"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Floor Plan Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <Image
                src={current.src}
                alt={`${current.label} floor plan`}
                fill
                className="object-contain p-8"
              />
            </div>

            {/* Rooms List */}
            <div>
              <div className="mb-8">
                <span className="font-inter text-xs uppercase tracking-[0.3em] text-stone-500 font-medium">
                  {current.tag}
                </span>
                <h3 className="font-oswald font-bold text-white text-4xl uppercase tracking-tight mt-2">
                  {current.label} Overview
                </h3>
              </div>

              <div className="space-y-0">
                {current.rooms.map((room, i) => (
                  <motion.div
                    key={room}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-center justify-between py-5 border-b border-white/10 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-oswald text-stone-600 text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-inter font-medium text-white/80 group-hover:text-white transition text-base">
                        {room}
                      </span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-600 group-hover:bg-white transition" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <span className="font-inter text-sm text-stone-400">
                  Download Full Floor Plan PDF
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
