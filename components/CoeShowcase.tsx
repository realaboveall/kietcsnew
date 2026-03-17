"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

const coeImages = ["/"];

export default function CoeShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coeImages.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section-shell bg-slate-100">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.32, ease: EASE_STANDARD }}>
          <p className="type-label text-slate-600">
            Centre of Excellence
          </p>

          <h3 className="type-h1 mt-5 text-slate-900">
            Building the
            <span className="text-orange-500"> Future of Intelligence</span>
            <br />
            with Apple & HP
          </h3>

          <p className="type-body-lg mt-7 max-w-xl text-slate-600">
            Powered by the NVIDIA DGX A100 Supercomputer, KIET enables
            enterprise-grade AI computing for advanced research in the field of
            AI. Students build and deploy complex AI models on industry-level
            GPU infrastructure. A hub for innovation, industry collaboration,
            and next-generation AI excellence.
          </p>

          <button
            type="button"
            className="type-button type-interactive mt-10 rounded-2xl bg-orange-500 px-10 py-4 text-white shadow-md hover:bg-orange-600">
            View More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.34, ease: EASE_STANDARD }}
          className="rounded-3xl border-8 border-white bg-white p-3 shadow-sm">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <div
              className="flex h-full w-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {coeImages.map((src, idx) => (
                <div
                  key={`${src}-${idx}`}
                  className="relative h-full w-full shrink-0">
                  <Image
                    src={src}
                    alt={`COE image ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
