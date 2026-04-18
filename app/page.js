import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import SpecsSection from "@/components/SpecsSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import LocationSection from "@/components/LocationSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* 01 — Hero */}
      <HeroSection />

      {/* 02 — About / Philosophy */}
      <AboutSection />

      {/* 03 — Interactive Gallery */}
      <GallerySection />

      {/* 04 — Property Specifications */}
      <SpecsSection />

      {/* 05 — Floor Plans */}
      <FloorPlansSection />

      {/* 06 — Location Map */}
      <LocationSection />

      {/* 07 — Amenities Grid */}
      <AmenitiesSection />

      {/* 08 — Contact + Footer */}
      <ContactSection />
    </main>
  );
}
