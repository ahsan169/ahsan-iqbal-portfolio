"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { contactContent, siteConfig, socialLinks } from "@/data/site";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "submitting" | "success";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  // Wire this up to your preferred backend once you're ready — a Next.js
  // API route (app/api/contact/route.ts), Resend, Formspree, or EmailJS
  // all work fine with this same form markup.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  };

  const linkedin = socialLinks.find((s) => s.icon === "linkedin");
  const github = socialLinks.find((s) => s.icon === "github");

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="bg-glow -right-24 bottom-0 h-80 w-80 bg-accent/10"
        aria-hidden="true"
      />
      <div className="section-container relative grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading number="06" title={contactContent.heading} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-md leading-relaxed text-muted"
          >
            {contactContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 space-y-4"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-sm text-text transition-colors duration-200 hover:text-accent"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Mail size={16} />
              </span>
              {siteConfig.email}
            </a>
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text transition-colors duration-200 hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Linkedin size={16} />
                </span>
                LinkedIn
              </a>
            )}
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text transition-colors duration-200 hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Github size={16} />
                </span>
                GitHub
              </a>
            )}
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="glass-card rounded-card p-7 sm:p-9"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-2 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text outline-none transition-colors duration-200 focus:border-accent"
                placeholder="Your full name"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className="mb-2 block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text outline-none transition-colors duration-200 focus:border-accent"
                placeholder="you@company.com"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="company" className="mb-2 block text-sm text-muted">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text outline-none transition-colors duration-200 focus:border-accent"
                placeholder="Company name (optional)"
              />
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="projectType"
                className="mb-2 block text-sm text-muted"
              >
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text outline-none transition-colors duration-200 focus:border-accent"
              >
                <option value="" disabled>
                  Select a project type
                </option>
                {contactContent.projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text outline-none transition-colors duration-200 focus:border-accent"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 w-full rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-text transition-colors duration-200 hover:bg-accent-hover disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-sm text-accent" role="status">
              Thanks — your message has been captured. Connect this form to
              your email provider to start receiving it in your inbox.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
