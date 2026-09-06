"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  number,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <span className="mb-3 block font-body text-sm font-medium text-accent">
        {number}.
      </span>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}
