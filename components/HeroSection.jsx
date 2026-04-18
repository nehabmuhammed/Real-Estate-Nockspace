"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const navLinks = [
  { label: "Projects", href: "#gallery" },
  { label: "Browse Properties", href: "#specs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    // Elegant background parallax (moves down slightly on scroll)
    gsap.to(bgRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Content parallax (moves up slightly on scroll, pulling away from bg)
    gsap.to(contentRef.current, {
      yPercent: -15,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: heroRef });

  const words = ["GUARDIANS", "OF CAPITAL"];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black"
    >
      {/* BG Image with extra height for parallax movement */}
      <div ref={bgRef} className="absolute inset-0 -top-[15%] h-[130%] w-full z-0">
        <Image
          src="/hero_bg.png"
          alt="Canyon Architecture"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      </div>

      {/* ─── NAVBAR ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform-gpu ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4"
            : "py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 text-white"
          >
            <div className="w-8 h-8 bg-white flex items-center justify-center rotate-45 rounded-sm shrink-0">
              <span className="-rotate-45 font-bold text-black text-base leading-none font-oswald">G</span>
            </div>
            <span className="font-oswald font-semibold text-sm tracking-[0.2em] uppercase hidden sm:block">
              Guardians
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                className="text-white/80 hover:text-white text-sm font-inter font-medium tracking-wide transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Book Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-stone-100 transition-colors font-inter"
          >
            Book a Viewing
            <Calendar size={15} />
          </motion.a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMobileOpen(false)}
                className="text-white text-4xl font-oswald font-bold tracking-tight uppercase"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold font-inter"
            >
              Book a Viewing <Calendar size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── HERO CONTENT ─── */}
      <div ref={contentRef} className="relative w-full h-full">
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full flex flex-col justify-end pb-12 px-6 md:px-12 max-w-[1440px] mx-auto">
          {/* Big Title */}
          <div className="mb-8">
            {loaded &&
              words.map((word, wi) => (
                <div key={wi} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: wi * 0.18 + 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="font-oswald font-bold text-white uppercase leading-[0.88] tracking-tight
                               text-[clamp(3.5rem,10vw,10rem)]"
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}
          </div>

          {/* Bottom Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6"
          >
            {/* Left — Wireframe + Stats */}
            <div className="flex items-end gap-6 text-white">
              <div className="w-24 h-24 md:w-36 md:h-36 relative opacity-60 mix-blend-screen shrink-0">
                <Image src="/wireframe.png" alt="Architectural wireframe" fill className="object-contain object-bottom" />
              </div>
              <div className="pb-1">
                <p className="text-xs text-white/60 font-inter uppercase tracking-widest mb-1">House Area</p>
                <p className="font-oswald font-bold text-4xl md:text-5xl tracking-tight">160 M²</p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex flex-col gap-1">
                    <button className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition text-xs">▲</button>
                    <button className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition text-xs">▼</button>
                  </div>
                  <div>
                    <p className="text-sm font-inter font-medium">House Type C</p>
                    <p className="text-sm font-inter text-white/60">– Comfort Line</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — US Map */}
            <div className="w-40 h-28 relative opacity-80 hidden sm:block">
              <Image src="/us_map.png" alt="Location map — Utah, USA" fill className="object-contain object-bottom" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
