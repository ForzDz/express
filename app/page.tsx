"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "../components/Navbar";
import ZondaScrollCanvas from "../components/ZondaScrollCanvas";
import ZondaExperience from "../components/ZondaExperience";
import SpecsGrid from "../components/SpecsGrid";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";
import LightEffect from "../components/LightEffect";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Total frames in the sequence
  const TOTAL_FRAMES = 180;
  // Path to images in public folder
  const IMAGE_PATH = "/images/zonda-sequence";

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* SCROLL SEQUENCE (Locked for 600vh) */}
      <section ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Layer 0: Canvas */}
          <div className="absolute inset-0 z-0">
            <ZondaScrollCanvas
              scrollYProgress={scrollYProgress}
              totalFrames={TOTAL_FRAMES}
              imageFolderPath={IMAGE_PATH}
            />
          </div>

          {/* Layer 5: Light Effect - ON TOP OF CAR */}
          <div className="absolute inset-0 z-[7]">
            <LightEffect />
          </div>

          {/* Layer 10: HUD Experience */}
          <div className="absolute inset-0 z-10">
            <ZondaExperience scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>

      {/* REST OF SITE (Scrolls naturally after sequence) */}
      <div className="relative z-20 bg-black">
        <SpecsGrid />
        <Contact />
        <Features />
        <Footer />
      </div>
    </main>
  );
}
