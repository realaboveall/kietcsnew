"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effect - video moves up as user scrolls
  const videoY = useTransform(scrollY, [0, 500], [0, 150]);

  // Hero section shrinks as user scrolls
  const heroHeight = useTransform(scrollY, [0, 500], ["100vh", "60vh"]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: heroHeight }}>
      {/* Video Background with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: videoY }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover">
          {/* Replace with your actual video URL */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-university-campus-students-walking-4932-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Department Text at Bottom */}
      <div>
        {/* <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[0.3em] uppercase">
          Department of
        </h1> */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 pb-16 flex justify-center items-end h-full"
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}>
          <h1 className="text-white md:text-8xl lg:text-8xl font-extralight tracking-[0.3em] uppercase font-mono">
            Computer Science
          </h1>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/70 text-sm tracking-widest">
          <svg
            className="w-6 h-6 mx-auto"
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
      </motion.div> */}
    </motion.div>
  );
}
