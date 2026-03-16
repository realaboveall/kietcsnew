"use client";

import { motion } from "framer-motion";

const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

const kpis = [
  { label: "Highest Package", value: "₹44 LPA", change: "+10%" },
  { label: "Average Package", value: "₹8.6 LPA", change: "+1.2 LPA" },
  { label: "Placement Rate", value: "91%", change: "+6%" },
  { label: "Offers Received", value: "512", change: "+74" },
];

const yearlyPlacement = [
  { year: "2022", placement: 81, avgLpa: 6.1 },
  { year: "2023", placement: 85, avgLpa: 6.8 },
  { year: "2024", placement: 88, avgLpa: 7.5 },
  { year: "2025", placement: 91, avgLpa: 8.6 },
];

export default function PlacementAnalysis() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.32, ease: EASE_STANDARD }}
          className="mb-14 will-transform">
          <p className="text-orange-600 uppercase tracking-[0.25em] text-xs mb-4">
            Placement Cell
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Placement Analysis
          </h2>
          <p className="text-slate-600 mt-4 text-lg max-w-3xl">
            A transparent snapshot of outcomes with year-on-year growth in
            package quality, offer count, and recruiter trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {kpis.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.28,
                delay: index * 0.04,
                ease: EASE_STANDARD,
              }}
              whileHover={{ scale: 1.02 }}
              className="analysis-kpi rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="text-3xl font-semibold mt-1">{item.value}</p>
              <p className="text-orange-600 text-sm mt-2">{item.change} YoY</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {yearlyPlacement.map((row, index) => (
            <motion.div
              key={row.year}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.28,
                delay: index * 0.04,
                ease: EASE_STANDARD,
              }}
              whileHover={{ scale: 1.02 }}
              className="analysis-year rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-slate-500 text-sm">Batch {row.year}</p>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                  <span>Placement %</span>
                  <span>{row.placement}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: row.placement / 100 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.32,
                      delay: 0.08 + index * 0.03,
                      ease: EASE_STANDARD,
                    }}
                    className="analysis-highlight h-full origin-left bg-linear-to-r from-orange-500 to-orange-400 will-transform"
                  />
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">Average CTC</p>
              <p className="text-xl font-semibold">₹{row.avgLpa} LPA</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
