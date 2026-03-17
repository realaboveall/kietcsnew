"use client";

import { motion } from "framer-motion";
import { useRef, useState, type CSSProperties } from "react";
import FacultyCard from "./FacultyCard";

const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

const faculty = [
  {
    name: "Dr. Ajay Kumar Shrivastava",
    designation: "Dean & Professor",
    imageUrl: "/CS/Dr. Ajay Kr. Shrivastava_5986.png",
    expertise: "Computer Science",
  },
  {
    name: "Dr. Gaurav Dubey",
    designation: "Professor",
    imageUrl: "/CS/Dr. Gaurav Dubey_21324.png",
    expertise: "Computer Science",
  },
  {
    name: "Dr. Akash Rajak",
    designation: "Professor",
    imageUrl: "/CS/Dr. Akash Rajak_6071.jpg.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Dr. Raj Kumar",
    designation: "Program Head cum Associate Professor",
    imageUrl: "/CS/Dr Raj Kumar_21160.png",
    expertise: "Computer Science",
  },
  {
    name: "Dr. Rishabh",
    designation: "Program Head (1st Yr) & Associate Professor",
    imageUrl: "/CS/Dr. Rishabh_21532.png",
    expertise: "Computer Science",
  },
  {
    name: "Dr. Abhishek Goyal",
    designation: "Associate Professor",
    imageUrl: "/CS/Dr. Abhishek Goyal_21330.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Dr. Aatif Jamshed",
    designation: "Associate Professor",
    imageUrl: "/CS/Dr. Aatif Jamshed_21746.png",
    expertise: "Computer Science",
  },
  {
    name: "Dr. Sunil Kumar",
    designation: "Associate Professor",
    imageUrl: "/CS/Dr. Sunil Kumar_21833.png",
    expertise: "Computer Science",
  },
  {
    name: "Ms. Arti Sharma",
    designation: "Assistant Professor",
    imageUrl: "/CS/Ms. Arti Sharma_21004.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Ms. Shivani",
    designation: "Assistant Professor",
    imageUrl: "/CS/Ms. Shivani_21145.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Sreesh Gaur",
    designation: "Program Head (1st Yr) & Assistant Professor",
    imageUrl: "/CS/Mr. Sreesh Gaur_21327.png",
    expertise: "Computer Science",
  },
  {
    name: "Dr. Akash Goel",
    designation: "Associate Professor",
    imageUrl: "/CS/Dr. Akash Goel_21331.JPG.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Pawan Kumar Pal",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Pawan Kr. Pal_21338.JPG.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Dr. Anurag Mishra",
    designation: "Associate Professor",
    imageUrl: "/CS/Dr.Anurag Mishra_21340.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Amit Kumar Singh Sanger",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Amit Kr. Singh Sanger_21413.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Vivek Kumar Sharma",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Vivek Kr. Sharma_21509.jpg.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Anmol Jain",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Anmol Jain_21540.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Puneet Kumar Goyal",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Puneet Kumar Goyal_21541.jpg.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Kuldeep Kumar Atariya",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Kuldeep Kr. Atariya_21586.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Bhagwan Krishna Gupta",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Bhagvan Krishna Gupta_21617.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Rajendra Kumar Patel",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Rajendra Kr. Patel_21657.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Rohan Rathore",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Rohan_21658.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Ms. Swati",
    designation: "Assistant Professor",
    imageUrl: "/CS/Ms. Swati_21769.JPG.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Ms. Kirti Sharma",
    designation: "Assistant Professor",
    imageUrl: "/CS/Ms. Kirti Sharma_21789.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Dheeraj Pandey",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Dheeraj Pandey_21796.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Mohit Singh Tanwar",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Mohit Singh Tanwar_21797.png",
    expertise: "Computer Science",
  },
  {
    name: "Ms. Tarul",
    designation: "Assistant Professor",
    imageUrl: "/CS/Ms. Tarul_21792.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Rahul",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Rahul_21827.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Nishant Raj",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Nishant Raj_21829.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Siddharth Shravan Jha",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Siddharth Shravan Jha_21836.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Ms. Aditi Joshi",
    designation: "Assistant Professor",
    imageUrl: "/logo.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Nikhil Saraswat",
    designation: "Assistant Professor",
    imageUrl: "/logo.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Tarsh Vaibhav",
    designation: "Assistant Professor",
    imageUrl: "/CS/Mr. Tarsh_21880.jpeg",
    expertise: "Computer Science",
  },
  {
    name: "Ms. Priya Raghuvanshi",
    designation: "Assistant Professor",
    imageUrl: "/logo.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Abhishek Sharma",
    designation: "Assistant Professor",
    imageUrl: "/logo.png",
    expertise: "Computer Science",
  },
  {
    name: "Mr. Mayank",
    designation: "Assistant Professor",
    imageUrl: "/logo.png",
    expertise: "Computer Science",
  },
  {
    name: "Dr. Juhi Singh",
    designation: "Assistant Professor",
    imageUrl: "/logo.png",
    expertise: "Computer Science",
  },
  {
    name: "Dr. Om Prakash",
    designation: "Assistant Professor",
    imageUrl: "/logo.png",
    expertise: "Computer Science",
  },
  {
    name: "Ms. Karuna Kaushik",
    designation: "Assistant Professor",
    imageUrl: "/logo.png",
    expertise: "Computer Science",
  },
];

export default function FacultyHighlights() {
  const [showAll, setShowAll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const horizontalScrollStyles: CSSProperties = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  const handleHorizontalScroll = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      setScrollProgress(1);
      return;
    }

    setScrollProgress(scrollLeft / maxScroll);
  };

  return (
    <section className="section-shell bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.32, ease: EASE_STANDARD }}
            className="will-transform">
            <h3 className="type-h3 text-slate-900">
              Faculty Highlights
            </h3>
            <div className="mt-4 h-1 w-20 rounded-full bg-orange-500" />
            <p className="type-body mt-4 max-w-3xl text-slate-600">
              Experienced mentors with a strong mix of academic rigor and
              industry exposure.
            </p>
          </motion.div>

          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-pressed={showAll}
            className="type-button type-interactive self-start rounded-2xl bg-orange-500 px-6 py-3.5 text-white shadow-sm hover:bg-orange-600">
            {showAll ? "Show Horizontal" : "Show All"}
          </button>
        </div>

        <div
          ref={sliderRef}
          onScroll={showAll ? undefined : handleHorizontalScroll}
          style={showAll ? undefined : horizontalScrollStyles}
          className={
            showAll
              ? "grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
              : "flex gap-7 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }>
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
              className={
                showAll
                  ? "will-transform"
                  : "will-transform shrink-0 snap-start"
              }>
              <FacultyCard
                name={member.name}
                designation={member.designation}
                expertise={member.expertise}
                imageUrl={member.imageUrl}
              />
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-6 flex items-center gap-4">
            <span className="type-label text-slate-400">
              Scroll
            </span>
            <div className="h-1.5 w-28 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-orange-500 transition-[width] duration-150"
                style={{ width: `${12 + scrollProgress * 88}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
