"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const images = [
  {
    src: "/gallery_exterior.png",
    title: "Canyon Exterior",
    desc: "Embedded into the living rock — a seamless marriage of architecture and terrain.",
    tag: "Exterior",
  },
  {
    src: "/gallery_livingroom.png",
    title: "Great Room",
    desc: "Panoramic canyon views frame the open-plan living space where comfort meets grandeur.",
    tag: "Interior",
  },
  {
    src: "/gallery_suite.png",
    title: "Master Suite",
    desc: "Wake to the drama of the canyon. Floor-to-ceiling glass transforms dawn into theatre.",
    tag: "Interior",
  },
  {
    src: "/pool_house.png",
    title: "Infinity Pool",
    desc: "A cantilevered pool over the desert basin — the ultimate statement of defiance.",
    tag: "Amenities",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);
  const sliderRef = useRef(null);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prevLightbox = () =>
    setLightbox((prev) => (prev - 1 + images.length) % images.length);
  const nextLightbox = () =>
    setLightbox((prev) => (prev + 1) % images.length);

  const slide = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="bg-[#111] py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-stone-600 inline-block" />
              <span className="text-xs font-inter uppercase tracking-[0.3em] text-stone-500 font-medium">
                03 — Gallery
              </span>
            </div>
            <h2 className="font-oswald font-bold text-white uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tight">
              THE RESIDENCE
              <br />
              IN FULL.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => slide(-1)}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => slide(1)}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 md:-mx-12 md:px-12"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="relative shrink-0 w-[340px] md:w-[420px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <Image src={img.src} alt={img.title} fill className="object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="font-inter text-xs font-semibold uppercase tracking-widest text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {img.tag}
                </span>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <ZoomIn size={16} />
                </div>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-oswald font-bold text-white text-2xl uppercase tracking-tight mb-1">
                  {img.title}
                </p>
                <p className="font-inter text-white/70 text-sm leading-snug">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3"
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3"
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="font-oswald font-bold text-white text-3xl uppercase tracking-tight">
                  {images[lightbox].title}
                </p>
                <p className="font-inter text-white/70 text-base mt-1">
                  {images[lightbox].desc}
                </p>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`h-1 rounded-full transition-all ${i === lightbox ? "w-8 bg-white" : "w-3 bg-white/30"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
