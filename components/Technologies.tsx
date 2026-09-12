"use client";

import { motion } from "framer-motion";
import { techCategories } from "@/data/site";

export default function Technologies() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl"
        >
          Technologies I Use
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card glass-card-hover rounded-card p-6"
            >
              <h3 className="mb-4 font-display text-base font-semibold text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
