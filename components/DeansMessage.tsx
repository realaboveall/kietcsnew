"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

export default function DeansMessage() {
  return (
    <section className="section-shell bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.32, ease: EASE_STANDARD }}>
          <h3 className="type-h3 text-slate-900">
            Dean&apos;s Message
          </h3>
          <div className="mt-4 h-1 w-20 rounded-full bg-orange-500" />

          <div className="type-body mt-7 space-y-5 text-slate-700">
            <p>
              The Department executes 4 years B.Tech. Degree Course. It has
              state-of-the-art &amp; world class facilities, with a clear aim to
              be known as one of the best departments in Computer Science among
              all existing Indian colleges of repute.
            </p>
            <p>
              The department has a strong team of faculty members with high
              dedication towards their commitment in teaching and research.
            </p>
            <p>
              The final year students of the department are performing extremely
              well in the placement activities and have been placed in almost
              all the leading organizations and making the name of the
              department sparkle. I am sure the department will meet its vision
              and mission in the best manner.
            </p>
            <p className="type-small pt-2 text-slate-900">
              - Dr. Ajay Kumar Shrivastava
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.34, ease: EASE_STANDARD }}
          className="justify-self-center lg:justify-self-end">
          <div className="relative h-96 w-76 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 md:h-112 md:w-84">
            <Image
              src="/Sir.png"
              alt="Dr. Ajay Kumar Shrivastava"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 80vw, 330px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
