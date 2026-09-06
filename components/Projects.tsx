"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Plus } from "lucide-react";
import { projects } from "@/data/site";
import SectionHeading from "./SectionHeading";

const INITIAL_COUNT = 4;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="bg-glow -right-24 top-24 h-80 w-80 bg-accent/10"
        aria-hidden="true"
      />

      <div className="section-container relative">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading number="03" title="My Projects" />
        </div>

        <div
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 [perspective:1600px]"
        >
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                rotateX: 3,
                rotateY: -3,
                scale: 1.015,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-card glass-card-hover group overflow-hidden rounded-card"
            >
              {/* <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div> */}
               <div className="relative aspect-[4/3] overflow-hidden bg-black/30">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain p-3 transition-transform duration-500 ease-smooth group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-text">
                  {project.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2.5">
                  <a
                    href={project.liveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-text px-4 py-2 text-xs font-semibold text-bg transition-colors duration-200 hover:bg-accent hover:text-accent-text"
                  >
                    View Project
                    <ArrowUpRight size={14} />
                  </a>
                  {project.githubHref && (
                    <a
                      href={project.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source on GitHub`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-text transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <Plus
                size={16}
                className={`transition-transform duration-300 ${showAll ? "rotate-45" : ""}`}
              />
              {showAll ? "Show Less" : `See More (${projects.length - INITIAL_COUNT})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
