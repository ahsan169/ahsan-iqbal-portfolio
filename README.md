# Ahsan Iqbal — Portfolio

A dark, orange-accented personal portfolio built with Next.js 15, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        Fonts, global <head> metadata (SEO/OG)
  page.tsx           Assembles all sections in order
  globals.css        CSS variable color tokens + base styles
  icon.png           App icon / favicon
components/
  Navbar.tsx          Sticky nav, scroll-spy, mobile menu
  Hero.tsx            Hero section + portrait image
  Services.tsx        Service cards
  Stats.tsx           Animated stats strip
  About.tsx           Bio + skills
  Projects.tsx        Project grid
  Technologies.tsx    Tech stack, grouped by category
  Process.tsx         "How I Work" steps
  Contact.tsx         Contact form UI
  Footer.tsx
  SectionHeading.tsx  Shared "0X. Heading" component
  AnimatedCounter.tsx Count-up animation used in Stats
data/
  site.ts             All copy, links and content — edit this file first
public/images/        Profile photo + project preview images
```

## Things to customize

1. **Your photo** — `public/images/profile.jpg` is used in three places: the navbar logo badge, the hero portrait, and the About section photo. Replace this one file to update it everywhere.
2. **Project images** — the 9 real screenshots you provided live in `public/images/projects/`. Swap any file to update that project's card image, keeping the same filename (or update the `image` path in `data/site.ts`).
3. **All copy** — names, bio, services, stats, project descriptions, tech stack and contact copy all live in `data/site.ts`. Nothing is hardcoded inside the components.
4. **Colors** — every color, including each social icon's brand color, is a CSS variable or a `color` field in `data/site.ts`. The core palette is set at the top of `app/globals.css` (`--color-bg`, `--color-accent`, etc.).
5. **Social links** — update `socialLinks` in `data/site.ts` with your real X/Twitter URL (a placeholder is currently used).
6. **Projects shown by default** — `INITIAL_COUNT` at the top of `components/Projects.tsx` controls how many show before the "See More" button (currently 4 of 9).
7. **Project "View Project" links** — currently point at each project's own screenshot (opened in a new tab) since these aren't deployed live yet. Once you have real URLs, update `liveHref` for each project in `data/site.ts`.

## Design notes

- **Font**: Plus Jakarta Sans throughout, in place of a generic Inter/Space Grotesk pairing.
- **Glass effect**: cards across Services, Projects, Technologies, Process, Stats and the Contact form use a shared `.glass-card` utility (see `app/globals.css`) — a translucent, blurred surface with a soft border, plus blurred orange glow shapes behind several sections for depth.
- **Services cards**: every card turns orange on hover (none are hardcoded active).
- **Project cards**: show a subtle 3D tilt on hover and only display 4 at a time, with the rest behind "See More."

## Wiring up the contact form

The contact form in `components/Contact.tsx` is fully built (validation, states, styling) but only simulates a submission client-side. To make it actually send you messages, pick one:

- **Next.js API route** — add `app/api/contact/route.ts`, forward the form fields to an email service (e.g. [Resend](https://resend.com)), and call `fetch('/api/contact', { method: 'POST', body: ... })` inside `handleSubmit`.
- **Formspree** — point the form's `action` at your Formspree endpoint.
- **EmailJS** — call `emailjs.send(...)` inside `handleSubmit` instead of the placeholder `setTimeout`.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required for the base site.
4. Click **Deploy**.

Alternatively, from the project root:

```bash
npm install -g vercel
vercel
```

## Notes

- Built with the Next.js App Router, TypeScript in strict mode, and Tailwind CSS 3.
- Respects `prefers-reduced-motion` and includes visible keyboard focus states.
- No backend is required to run the site — only the contact form's final send step needs one of the options above.
