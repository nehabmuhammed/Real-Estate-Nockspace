"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "2025", label: "Year Commissioned" },
    { value: "160", label: "Square Meters" },
    { value: "3", label: "Levels of Living" },
    { value: "∞", label: "Views of Canyon" },
  ];

  return (
    <section id="about" className="bg-[#f5f4ef] py-24 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="w-10 h-px bg-stone-400 inline-block" />
          <span className="text-xs font-inter uppercase tracking-[0.3em] text-stone-500 font-medium">
            02 — Philosophy
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="font-oswald font-bold text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.9] tracking-tight text-[#111] mb-8"
            >
              A FORM THAT
              <br />
              DEFIES
              <br />
              CONVENTION.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-inter text-base md:text-lg text-stone-600 leading-relaxed mb-6 max-w-md"
            >
              Where unmatched structural integrity merges with architectural innovation, this
              &quot;Antigravity&quot; approach challenges traditional design. We believe a structure&apos;s
              permanence is achieved through its relationship to its environment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-inter text-base text-stone-500 leading-relaxed mb-12 max-w-md"
            >
              Explore the gravity-defying architecture where form and function find perfect
              balance — raw concrete meets local stone, glass meets sky, silence meets grandeur.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="border-t border-stone-300 pt-4"
                >
                  <p className="font-oswald font-bold text-3xl text-[#111] mb-1">{s.value}</p>
                  <p className="font-inter text-xs text-stone-500 uppercase tracking-widest">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <Image
              src="/about_cliffs.png"
              alt="Canyon cliffs — the landscape of Guardians of Capital"
              fill
              className="object-cover object-center"
            />
            {/* Overlay label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
              <p className="font-oswald font-bold text-white text-2xl uppercase tracking-wide">
                Canyonlands, Utah
              </p>
              <p className="font-inter text-white/70 text-sm mt-1">36°59&apos;N 109°51&apos;W</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
