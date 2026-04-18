"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { value: "2025", label: "Year Commissioned" },
    { value: "160", label: "Square Meters" },
    { value: "3", label: "Levels of Living" },
    { value: "∞", label: "Views of Canyon" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] } 
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 40 },
    show: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] } 
    },
  };

  return (
    <section id="about" className="bg-[#f5f4ef] py-24 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="flex items-center gap-4 mb-16"
        >
          <span className="w-10 h-px bg-stone-400 inline-block" />
          <span className="text-xs font-inter uppercase tracking-[0.3em] text-stone-500 font-medium">
            02 — Philosophy
          </span>
        </motion.div>

        {/* Two-column layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left: Text */}
          <div className="flex flex-col">
            <motion.h2
              variants={itemVariants}
              className="font-oswald font-bold text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.9] tracking-tight text-[#111] mb-8"
            >
              A FORM THAT
              <br />
              DEFIES
              <br />
              CONVENTION.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-inter text-base md:text-lg text-stone-600 leading-relaxed mb-6 max-w-md"
            >
              Where unmatched structural integrity merges with architectural innovation, this
              &quot;Antigravity&quot; approach challenges traditional design. We believe a structure&apos;s
              permanence is achieved through its relationship to its environment.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-inter text-base text-stone-500 leading-relaxed mb-12 max-w-md"
            >
              Explore the gravity-defying architecture where form and function find perfect
              balance — raw concrete meets local stone, glass meets sky, silence meets grandeur.
            </motion.p>

            {/* Stats Grid */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={itemVariants}
                  className="border-t border-stone-300 pt-4"
                >
                  <p className="font-oswald font-bold text-3xl text-[#111] mb-1">{s.value}</p>
                  <p className="font-inter text-xs text-stone-500 uppercase tracking-widest">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            variants={imageVariants}
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
        </motion.div>
      </div>
    </section>
  );
}
