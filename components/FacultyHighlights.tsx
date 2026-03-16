"use client";

import { motion } from "framer-motion";

const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

const faculty = [
  {
    name: "Dr. Neha Sharma",
    role: "Professor, Artificial Intelligence",
    achievements: ["40+ publications", "2 patents", "NPTEL mentor"],
  },
  {
    name: "Prof. Rohit Verma",
    role: "Associate Professor, Cybersecurity",
    achievements: ["Lead - Security Lab", "Industry consultant", "CTF coach"],
  },
  {
    name: "Dr. Aditi Gupta",
    role: "Professor, Data Science",
    achievements: ["Research grant PI", "PhD supervisor", "IEEE senior member"],
  },
  {
    name: "Prof. Karan Malhotra",
    role: "Assistant Professor, Systems",
    achievements: [
      "Open-source contributor",
      "Cloud specialist",
      "Hackathon jury",
    ],
  },
];

export default function FacultyHighlights() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.32, ease: EASE_STANDARD }}
          className="mb-12 will-transform">
          <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Faculty Highlights
          </h3>
          <div className="mt-4 h-1 w-20 bg-orange-500 rounded-full" />
          <p className="text-slate-600 mt-3 max-w-3xl">
            Experienced mentors with a strong mix of academic rigor and industry
            exposure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.28,
                delay: index * 0.04,
                ease: EASE_STANDARD,
              }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm will-transform transition-shadow duration-(--motion-normal) ease-(--ease-standard) hover:shadow-md">
              <div className="size-12 rounded-full bg-linear-to-r from-orange-500 to-orange-400 text-white grid place-items-center font-semibold mb-4">
                {member.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {member.name}
              </h4>
              <p className="text-sm text-orange-700 mt-1">{member.role}</p>

              <ul className="mt-4 space-y-2">
                {member.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-slate-400" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
