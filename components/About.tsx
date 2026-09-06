"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import { Check } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { aboutContent } from "@/data/site";
import SectionHeading from "./SectionHeading";
import { section } from "framer-motion/m";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="bg-glow -left-24 bottom-0 h-72 w-72 bg-accent/10"
        aria-hidden="true"
      />

      {/* <div className="section-container relative grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading number="02" title="About Me" />

          <motion.div
            initial={{ opacity: 0, y: 24, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d" }}
            className="glass-card relative mt-8 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-card"
          >
            <Image
              src={aboutContent.photo}
              alt="Portrait of Ahsan Iqbal"
              fill
              sizes="(min-width: 1024px) 20vw, 60vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          </motion.div>
        </div>

        <div> */}
        <div className="section-container relative">
        <SectionHeading number="02" title="About Me" />

        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d" }}
            className="glass-card relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-card"
          >
            <Image
              src={aboutContent.photo}
              alt="Portrait of Ahsan Iqbal"
              fill
              sizes="(min-width: 1024px) 20vw, 60vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          </motion.div>

          <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {aboutContent.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-2xl font-medium leading-snug text-text sm:text-3xl"
                    : "max-w-xl leading-relaxed text-muted"
                }
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {aboutContent.skills.map((skill) => (
              <div
                key={skill}
                className="glass-card flex items-center gap-3 rounded-xl px-4 py-3.5"
              >
                {/* <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check size={14} />
                </span> */}
                 <span className="flex h-6 w-6 shrink-0 items-center justify-center text-accent">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </span>
                <span className="text-sm text-text">{skill}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <a
              href={aboutContent.cta.href}
              className="inline-block rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-text transition-colors duration-200 hover:bg-accent-hover"
            >
              {aboutContent.cta.label}
            </a>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
       
  );
}
