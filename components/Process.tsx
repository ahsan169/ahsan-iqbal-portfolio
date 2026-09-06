"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading number="04" title="How I Work" />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card glass-card-hover group rounded-card p-8"
            >
              <span className="mb-6 block font-display text-3xl font-bold text-white/10 transition-colors duration-300 group-hover:text-accent">
                {step.number}
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold text-text">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
