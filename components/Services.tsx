"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code,
  Layers,
  Plug,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/site";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  layers: Layers,
  "brain-circuit": BrainCircuit,
  smartphone: Smartphone,
  plug: Plug,
  server: Server,
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="bg-glow -left-32 top-10 h-72 w-72 bg-accent/10"
        aria-hidden="true"
      />

      <div className="section-container relative">
        <SectionHeading number="01" title="Services" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-card group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-card p-7 transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-accent hover:bg-accent"
              >
                <div className="flex items-center justify-between">
                  {/* <span className="font-display text-sm font-semibold text-muted transition-colors duration-300 group-hover:text-accent-text/70"> */}
                  <span className="font-display text-sm font-semibold text-muted transition-colors duration-300 group-hover:text-white/70">
                   {service.number}
                  </span>
                  {/* <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-accent transition-all duration-300 group-hover:rotate-6 group-hover:bg-accent-text/15 group-hover:text-accent-text"> */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-accent transition-all duration-300 group-hover:rotate-6 group-hover:bg-white/15 group-hover:text-white">
                    <Icon size={20} />
                  </div>
                </div>

                <div>
                  {/* <h3 className="mb-2 font-display text-xl font-semibold text-text transition-colors duration-300 group-hover:text-accent-text"> */}
                  <h3 className="mb-2 font-display text-xl font-semibold text-text transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                  {/* <p className="text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-accent-text/80"> */}
                   <p className="text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/80">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
