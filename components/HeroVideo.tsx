"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 240], [1, 0.35]);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover">
          {/* Replace with your actual video URL */}
          <source src="/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Department Text at Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 pb-16 flex justify-center items-end h-full "
        style={{ opacity }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, delay: 0.08, ease: EASE_STANDARD }}>
        <div className="text-center px-4">
          {/* <p className="font-mono mb-2 text-white/85 text-3xl">Department of</p> */}
          <h1 className="text-white uppercase font-mono font-extralight text-8xl tracking-widest">
            Computer Science
          </h1>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.a
        href="#placement"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 will-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.32, delay: 0.18, ease: EASE_STANDARD }}
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 0.32, repeat: Infinity, ease: EASE_STANDARD }}
          className="type-label text-center text-white/75">
          Scroll
          <svg
            className="w-5 h-5 mx-auto mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.a> */}
    </motion.div>
  );
}
