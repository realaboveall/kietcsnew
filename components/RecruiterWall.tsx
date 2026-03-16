"use client";

import { motion } from "framer-motion";

const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

const recruiters = [
  "Microsoft",
  "Google",
  "Amazon",
  "Adobe",
  "TCS",
  "Infosys",
  "Wipro",
  "Accenture",
  "Capgemini",
  "Cognizant",
  "HCL",
  "Paytm",
  "Deloitte",
  "ZS Associates",
  "Nagarro",
  "Publicis Sapient",
];

export default function RecruiterWall() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.32, ease: EASE_STANDARD }}
          className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight will-transform">
          Companies That Visit Campus
        </motion.h3>
        <div className="mt-4 h-1 w-20 bg-orange-500 rounded-full" />
        <p className="text-slate-600 mt-3 max-w-2xl">
          Strategic hiring partners across product engineering, consulting,
          fintech, and AI.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {recruiters.map((name, idx) => (
            <motion.div
              key={`${name}-${idx}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.22,
                delay: idx * 0.02,
                ease: EASE_STANDARD,
              }}
              whileHover={{ scale: 1.02 }}
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-800 font-medium whitespace-nowrap shadow-sm hover:border-orange-300 hover:text-orange-700 transition-colors duration-(--motion-fast) ease-(--ease-standard)">
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
