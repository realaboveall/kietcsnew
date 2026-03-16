"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function DepartmentIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Department Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Excellence in Computing
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Pioneering the future of technology through innovative education,
            groundbreaking research, and collaborative excellence. Join us in
            shaping tomorrow's digital landscape.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
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
                <motion.div
                  className="mt-6 inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}>
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
