export const siteConfig = {
  name: "Ahsan Iqbal",
  logo: "AHSAN",
  title: "Ahsan Iqbal | Full-Stack & AI Developer",
  description:
    "Ahsan Iqbal is a Full-Stack & AI Developer building scalable web, SaaS, mobile and AI products for startups and ambitious businesses.",
  url: "https://ahsaniqbal.dev",
  email: "ahsanchuadhry143@gmail.com",
  keywords: [
    "Full Stack Developer",
    "AI Developer",
    "SaaS Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "FastAPI Developer",
    "AI SaaS",
    "Web Application Development",
    "Startup Developer",
  ],
};

// `color` is each platform's own brand color, used for the hero/footer
// icon badges so they read as distinct official icons rather than a
// uniform muted row.
export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahsan-iqbal-418951313/",
    icon: "linkedin",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    href: "https://github.com/ahsan169",
    icon: "github",
    color: "#F3F1EC",
  },
  {
    name: "X / Twitter",
    href: "https://twitter.com/",
    icon: "twitter",
    color: "#1D9BF0",
  },
  {
    name: "Email",
    href: "mailto:ahsanchuadhry143@gmail.com",
    icon: "mail",
    color: "#EA4335",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact Me", href: "#contact" },
] as const;

// export const heroContent = {
//   eyebrow: "Hello, I'm Ahsan",
//   headingLine1: "Ahsan",
//   headingLine2: "Iqbal",
//   subtitle: "Full-Stack & AI Developer",
//   description:
//     "I turn ambitious ideas into products people trust — scalable web, SaaS, mobile & AI solutions built to launch fast and grow without limits.",
//   image: "/images/profile.jpg",
// };

export const heroContent = {
  eyebrow: "Hi, my name is",
  headingLine1: "Ahsan",
  headingLine2: "Iqbal",
  roles: [
    "Full-Stack Developer",
    "AI Developer",
    "SaaS Developer",
    "Mobile App Developer",
  ],
  description:
    "I turn ambitious ideas into products people trust — scalable web, SaaS, mobile & AI solutions built to launch fast and grow without limits.",
  image: "/images/hero.jpg",
};

export const services = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "Building scalable web applications with modern frontend and backend technologies.",
    icon: "code",
  },
  {
    number: "02",
    title: "SaaS Development",
    description:
      "From MVP to production-ready SaaS platforms with authentication, billing, dashboards and scalable architecture.",
    icon: "layers",
  },
  {
    number: "03",
    title: "AI Development",
    description:
      "AI-powered applications, chatbots, RAG systems, agents and intelligent automation.",
    icon: "brain-circuit",
  },
  {
    number: "04",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using React Native and Flutter.",
    icon: "smartphone",
  },
  {
    number: "05",
    title: "API & Integrations",
    description:
      "Third-party API integrations, payment systems, CRMs, e-commerce and automation.",
    icon: "plug",
  },
  {
    number: "06",
    title: "DevOps & Deployment",
    description:
      "Production deployment, Docker, cloud infrastructure, SSL, CI/CD and server configuration.",
    icon: "server",
  },
] as const;

export const stats = [
  // { value: 50, suffix: "+", label: "Projects & Builds" },
  // { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 300, suffix: "+", label: "Projects & Builds" },
  { value: 300, suffix: "+", label: "Happy Clients" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "+", label: "Years Learning & Building" },
] as const;

export const aboutContent = {
  photo: "/images/profile.jpg",
  paragraphs: [
    "Ahsan Iqbal helps founders turn bold ideas into products people actually use.",
    "Instead of juggling separate developers for frontend, backend, AI and deployment, you work with one engineer who sees the whole picture — from first sketch to live users. He builds web apps, SaaS platforms, mobile apps and AI tools that are fast, reliable and simple to grow. The goal is always the same: understand what the business actually needs, then build software that earns your customers' trust and keeps working long after launch.",
  ],
  skills: [
    "Full-Stack Development",
    "SaaS Architecture",
    "AI Agents & RAG Systems",
    "API Design & Integrations",
    "Cloud Deployment & DevOps",
  ],
  cta: { label: "Let's Talk", href: "#contact" },
};

export const projects = [
  {
    title: "AI Finance SaaS",
    description:
      "AI-powered personal finance dashboard with spending insights, cash-flow tracking and smart savings recommendations.",
    image: "/images/projects/ai-finance-saas.jpg",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI"],
    liveHref: "/images/projects/ai-finance-saas.jpg",
    githubHref: "https://github.com/ahsan169",
  },
  {
    title: "LeadGen Pro",
    description:
      "Company research and lead-generation tool with advanced search filters, enrichment and bulk CSV export.",
    image: "/images/projects/leadgen-pro.jpg",
    technologies: ["React", "Django", "PostgreSQL", "REST API"],
    liveHref: "/images/projects/leadgen-pro.jpg",
    githubHref: "https://github.com/ahsan169",
  },
  {
    title: "Sales Pipeline CRM",
    description:
      "Kanban-style sales CRM for managing pipelines, quotes and opportunities across a manufacturing sales team.",
    image: "/images/projects/sales-pipeline-crm.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    liveHref: "/images/projects/sales-pipeline-crm.jpg",
    githubHref: "https://github.com/ahsan169",
  },
  {
    title: "Mobile Banking App",
    description:
      "Cross-platform mobile banking experience covering onboarding, balances, transfers and transaction history.",
    image: "/images/projects/mobile-banking-app.jpg",
    technologies: ["React Native", "TypeScript", "Node.js", "Stripe"],
    liveHref: "/images/projects/mobile-banking-app.jpg",
    githubHref: "https://github.com/ahsan169",
  },
  {
    title: "Housing Price Prediction",
    description:
      "Machine-learning application comparing four models to estimate property prices from housing datasets.",
    image: "/images/projects/housing-price-prediction.jpg",
    technologies: ["Python", "scikit-learn", "Pandas", "Flask"],
    liveHref: "/images/projects/housing-price-prediction.jpg",
    githubHref: "https://github.com/ahsan169",
  },
  {
    title: "Flight Delay Prediction",
    description:
      "Machine-learning application for predicting flight delays and arrival punctuality from historical flight data.",
    image: "/images/projects/flight-delay-prediction.jpg",
    technologies: ["Python", "scikit-learn", "Pandas", "FastAPI"],
    liveHref: "/images/projects/flight-delay-prediction.jpg",
    githubHref: "https://github.com/ahsan169",
  },
  {
    title: "WooCommerce / WordPress Sync API",
    description:
      "FastAPI-based middleware that syncs multi-language WordPress and WooCommerce content through one unified endpoint.",
    image: "/images/projects/woocommerce-sync-platform.jpg",
    technologies: ["FastAPI", "WooCommerce API", "WordPress API", "JSON Schema"],
    liveHref: "/images/projects/woocommerce-sync-platform.jpg",
    githubHref: "https://github.com/ahsan169",
  },
  {
    title: "Asset Library",
    description:
      "Document and asset management tool with tagging, organization metadata and quick search across file types.",
    image: "/images/projects/asset-library.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    liveHref: "/images/projects/asset-library.jpg",
    githubHref: "https://github.com/ahsan169",
  },
  {
    title: "Web3 Token Platform",
    description:
      "Crypto token landing page and dashboard with a phased roadmap, referral system and wallet connect flow.",
    image: "/images/projects/web3-token-platform.jpg",
    technologies: ["Next.js", "Ethers.js", "Tailwind CSS", "Framer Motion"],
    liveHref: "/images/projects/web3-token-platform.jpg",
    githubHref: "https://github.com/ahsan169",
  },
] as const;

export const techCategories = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Flutter", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Python", "Django", "Django REST Framework", "FastAPI", "Node.js", "Express.js"],
  },
  {
    category: "AI",
    items: ["OpenAI", "Anthropic", "Ollama", "DeepSeek", "RAG", "Embeddings", "Qdrant", "Pinecone", "AI Agents"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Nginx", "AWS", "DigitalOcean", "Hetzner", "Vercel", "Railway", "Render"],
  },
  {
    category: "Integrations",
    items: ["Stripe", "PayPal", "Razorpay", "Shopify", "WooCommerce", "Twilio", "SendGrid", "HubSpot"],
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business, users and product requirements.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Define the technical architecture, stack and development approach.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop the frontend, backend, integrations and AI functionality.",
  },
  {
    number: "04",
    title: "Test",
    description: "Test functionality, performance, security and edge cases.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Deploy the application to production with proper infrastructure.",
  },
  {
    number: "06",
    title: "Scale",
    description: "Improve performance, reliability and features as the product grows.",
  },
] as const;

export const contactContent = {
  heading: "Let's Build Something",
  description:
    "Have a product idea, SaaS concept or business problem that needs a technical solution? Let's turn it into something real.",
  projectTypes: [
    "Web Application",
    "SaaS Platform",
    "AI / Chatbot / Agent",
    "Mobile App",
    "API / Integration",
    "Other",
  ],
};

export const fiverr = {
  gigUrl: "https://www.fiverr.com/s/Zomo4E4",
  rating: 4.8,
  reviewCount: 34,
  fiveStarCount: 30,
};

export const testimonials = [
  {
    name: "digitalpomegran",
    country: "United States",
    countryCode: "us",
    rating: 5,
    duration: "3 weeks",
    when: "1 year ago",
    review:
      "Well-written Python code and a full knowledge of WordPress. Well done, and we look forward to working with you again.",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/2374747/original/logo_400.png",
  },
  {
    name: "rajpilaka",
    country: "United States",
    countryCode: "us",
    rating: 5,
    duration: "1 day",
    when: "11 months ago",
    review:
      "The work provided here had all the necessary detail and was delivered at a timely manner despite a last minute request by me. I highly recommend to anyone!",
    avatar: "",
  },
  {
    name: "abigailj1397",
    country: "United Kingdom",
    countryCode: "gb",
    rating: 5,
    duration: "3 days",
    when: "1 year ago",
    review:
      "I am very happy with the quality Ahsan was able to deliver. He was very meticulous in understanding my needs and I appreciate his speed in delivery.",
    avatar: "",
  },
  {
    name: "mrsoftwareguy",
    country: "United States",
    countryCode: "us",
    rating: 5,
    duration: "3 days",
    when: "1 year ago",
    review:
      "Ahsan is an expert and a great Fiverr. 3 others failed where he succeeded. If your project is challenging, Ahsan it the Fiverr you want.",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/4b008f72bfd53c11828ebe7027d60d06-1650118418812/7e3f764e-865b-46f4-9d52-eeb22afc65d8.jpg",
  },
  {
    name: "rapidforce1",
    country: "United Kingdom",
    countryCode: "gb",
    rating: 5,
    duration: "6 days",
    when: "1 year ago",
    review:
      "Ahsan honestly exceeded expectations. We gave a very difficult coding task and he fully integrated what we needed on out website. Communication was extremely clear too.",
    avatar: "",
  },
  {
    name: "ezbez123",
    country: "United States",
    countryCode: "us",
    rating: 5,
    duration: "3 days",
    when: "9 months ago",
    review:
      "Once again, Ahsan did exceptional work for me. He really is the best!",
    avatar: "",
  },
] as const;
