"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./RecruiterWall.module.css";

const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

const recruiters = [
  { name: "Microsoft", logo: "/companies/microsoft.svg" },
  { name: "Google", logo: "/companies/google.svg" },
  { name: "Amazon", logo: "/companies/amazon.svg" },
  { name: "Adobe", logo: "/companies/adobe.svg" },
  { name: "TCS", logo: "/companies/tcs.svg" },
  { name: "Infosys", logo: "/companies/infosys.svg" },
  { name: "Wipro", logo: "/companies/wipro.svg" },
  { name: "Accenture", logo: "/companies/accenture.svg" },
  { name: "Capgemini", logo: "/companies/capgemini.svg" },
  { name: "Cognizant", logo: "/companies/cognizant.svg" },
  { name: "HCL", logo: "/companies/hcl.svg" },
  { name: "Paytm", logo: "/companies/paytm.svg" },
  { name: "Deloitte", logo: "/companies/deloitte.svg" },
  { name: "ZS Associates", logo: "/companies/zs-associates.svg" },
  { name: "Nagarro", logo: "/companies/nagarro.svg" },
  { name: "Publicis Sapient", logo: "/companies/publicis-sapient.svg" },
];

export default function RecruiterWall() {
  const loopedRecruiters = [...recruiters, ...recruiters];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-transparent ">
      {/* <div className="max-w-7xl mx-auto mb-12">
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
      </div> */}

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.25, ease: EASE_STANDARD }}
          className={styles.marqueeWrap}>
          <div className={styles.marqueeTrack}>
            {loopedRecruiters.map((company, idx) => (
              <div className={styles.logoCard} key={`${company.name}-${idx}`}>
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={140}
                  height={40}
                  className={styles.logoImage}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <p className="mt-4 text-xs text-slate-500">
          Trusted by top recruiters across domains.
        </p>
      </div>
    </section>
  );
}
