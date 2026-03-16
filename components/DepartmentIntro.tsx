"use client";

import { motion, type Variants } from "framer-motion";

const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

const cards = [
  {
    title: "Faculty",
    description:
      "Our world-class faculty members are leaders in research and education, dedicated to fostering innovation and excellence in computer science.",
    icon: "👨‍🏫",
  },
  {
    title: "Research",
    description:
      "Cutting-edge research in artificial intelligence, cybersecurity, data science, and software engineering that shapes the future of technology.",
    icon: "🔬",
  },
  {
    title: "Student Projects",
    description:
      "Hands-on experience through innovative projects, hackathons, and collaborations with industry partners that prepare students for successful careers.",
    icon: "💻",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: EASE_STANDARD,
    },
  },
};

export default function DepartmentIntro() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Department Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.32, ease: EASE_STANDARD }}
          className="text-center mb-16 will-transform">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Excellence in Computing
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Pioneering the future of technology through innovative education,
            groundbreaking research, and collaborative excellence. Join us in
            shaping tomorrow&apos;s digital landscape.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.18, ease: EASE_STANDARD }}
              className="group will-transform">
              <div className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow duration-(--motion-normal) ease-(--ease-standard)">
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-[1.02] transition-transform duration-(--motion-normal) ease-(--ease-standard)">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed font-light">
                  {card.description}
                </p>

                {/* Learn More Link */}
                <motion.div className="mt-6 inline-flex items-center text-orange-600 font-medium transition-opacity duration-(--motion-fast) ease-(--ease-standard) group-hover:opacity-90">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
