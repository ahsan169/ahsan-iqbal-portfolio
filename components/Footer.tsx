import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { navLinks, siteConfig, socialLinks } from "@/data/site";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  mail: Mail,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-14">
      <div className="section-container flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div>
          <span className="font-display text-lg font-bold text-text">
            {siteConfig.logo}
          </span>
          <p className="mt-2 text-sm text-muted">Full-Stack &amp; AI Developer</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-start">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-accent"
              >
                {link.label.replace(" Me", "")}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
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
                className="flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-transform duration-200 ease-smooth hover:-translate-y-1"
              >
                <Icon size={16} color={isLight ? "#0a0908" : "#ffffff"} />
              </a>
            );
          })}
        </div>
      </div>

      <p className="section-container mt-10 text-center text-xs text-muted sm:text-left">
        © {year} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
