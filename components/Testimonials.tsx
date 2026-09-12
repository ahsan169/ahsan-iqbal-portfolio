"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { fiverr, testimonials } from "@/data/site";
import SectionHeading from "./SectionHeading";

function TestimonialAvatar({ name, avatar }: { name: string; avatar: string }) {
  const [failed, setFailed] = useState(false);

  const fallback = (
    <span
      aria-hidden="true"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-display text-sm font-bold text-accent"
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );

  if (!avatar || failed) return fallback;

  return (
    <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full border border-accent/40">
      <Image
        src={avatar}
        alt={`${name} on Fiverr`}
        fill
        sizes="40px"
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="bg-glow -left-24 bottom-0 h-80 w-80 bg-accent/10"
        aria-hidden="true"
      />

      <div className="section-container relative">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading number="04" title="Client Reviews" />
          <motion.a
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            href={fiverr.gigUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-accent"
                  fill="currentColor"
                />
              ))}
            </span>
            <span className="text-sm font-semibold text-text">
              {fiverr.rating} · {fiverr.reviewCount} reviews on Fiverr
            </span>
            <ArrowUpRight size={16} className="text-muted" />
          </motion.a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card glass-card-hover flex flex-col rounded-card p-6"
            >
              <div className="flex items-center gap-1" aria-label="Rated 5 out of 5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-accent"
                    fill="currentColor"
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{testimonial.review}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <TestimonialAvatar
                    name={testimonial.name}
                    avatar={testimonial.avatar}
                  />
                  <div>
                    <p className="font-display text-sm font-semibold text-text">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                      <img
                        src={`https://flagcdn.com/16x12/${testimonial.countryCode}.png`}
                        alt=""
                        className="h-3 w-[17px] rounded-sm object-cover"
                        aria-hidden="true"
                      />
                      {testimonial.country}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted">
                  {testimonial.duration}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-card border border-white/10 bg-white/[0.03] px-6 py-5 sm:flex-row">
          <div className="flex items-center gap-3 text-sm text-muted">
            <Star size={18} className="text-accent" fill="currentColor" />
            <span>
              <strong className="font-semibold text-text">{fiverr.fiveStarCount}</strong>{" "}
              five-star ratings across {fiverr.reviewCount} Fiverr reviews
            </span>
          </div>
          <a
            href={fiverr.gigUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-text px-5 py-2.5 text-xs font-semibold text-bg transition-colors duration-200 hover:bg-accent hover:text-accent-text"
          >
            View Gig on Fiverr
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}