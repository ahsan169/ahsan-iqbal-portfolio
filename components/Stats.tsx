"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card grid grid-cols-2 gap-px overflow-hidden rounded-card sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 border border-white/[0.03] px-4 py-10 text-center"
            >
              <span className="font-display text-4xl font-bold text-text sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
