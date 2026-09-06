"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { heroContent, socialLinks } from "@/data/site";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  mail: Mail,
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="bg-glow -top-20 right-0 h-96 w-96 bg-accent/10" aria-hidden="true" />
      <div
        className="bg-glow bottom-0 left-1/3 h-72 w-72 bg-accent/5"
        aria-hidden="true"
      />

      <div className="section-container relative grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.span
            variants={item}
            className="mb-5 inline-block font-body text-sm font-medium tracking-wide text-accent"
          >
            {heroContent.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-text sm:text-7xl lg:text-8xl"
          >
            {heroContent.headingLine1}
            <br />
            {heroContent.headingLine2}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md font-body text-lg font-medium text-muted"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-lg text-base leading-relaxed text-muted"
          >
            {heroContent.description}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              const isLight = social.icon === "github";
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: social.color }}
                  className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform duration-200 ease-smooth hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon
                    size={20}
                    color={isLight ? "#0a0908" : "#ffffff"}
                    strokeWidth={2}
                  />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card relative order-1 mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-card lg:order-2 lg:max-w-none"
        >
          <Image
            src={heroContent.image}
            alt="Portrait of Ahsan Iqbal"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
