export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  gradient: string; // Beautiful rich gradient fallback if physical image is not found/loaded
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: "credosis",
    title: "Credosis",
    description: "Credosis is a trust-first software engineering company specializing in custom software, SaaS platforms, AI-powered automation, and full-stack web solutions. The company helps startups and enterprises build scalable, high-performance digital products through modern engineering practices, intelligent automation, and reliable system architecture designed for long-term growth.",
    image: "https://ik.imagekit.io/glowaura/CredosisHero.png",
    gradient: "from-[#00d2ff] to-[#0072ff]",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Node.js"],
    liveUrl: "https://www.credosis.com",
    githubUrl: "", 
    featured: true
  },
  {
    id: "glowaura",
    title: "GlowAura",
    description: "A premium multi-vendor e-commerce marketplace for beauty and wellness products, featuring real-time store management, Stripe-powered checkout, interactive analytics dashboards, and an elegant rose-themed UI with glassmorphism design.",
    image: "https://ik.imagekit.io/glowaura/GlowHero.png",
    gradient: "from-[#e11d48] to-[#f59e0b]",
    tags: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe", "Clerk", "Inngest", "ImageKit", "Recharts"],
    liveUrl: "https://glow-aura.vercel.app/",
    githubUrl: "https://github.com/rsriad/glowaura",
    featured: true
  },
  {
    id: "deepscribe-ai",
    title: "DeepScribe Clinical AI",
    description: "An LLM-powered assistant that transcribes doctor-patient conversations and automatically generates structured clinical summaries, reducing administrative load by 40%.",
    image: "/images/projects/deepscribe.png",
    gradient: "from-[#f59e0b] to-[#ef4444]", // Amber to Red
    tags: ["Next.js", "Python", "FastAPI", "PyTorch", "OpenAI API", "PostgreSQL"],
    liveUrl: "https://deepscribe.rsriad.dev",
    githubUrl: "https://github.com/rsriad/deepscribe-clinical-ai",
    featured: false
  },
  {
    id: "portfolio-builder",
    title: "Sleek Portfolio Engine",
    description: "A highly customizable portfolio framework designed for engineers and academic researchers, built with optimal SEO, responsive grid systems, and subtle animations.",
    image: "/images/projects/portfolio.png",
    gradient: "from-[#06b6d4] to-[#3b82f6]", // Cyan to Blue
    tags: ["Astro", "Tailwind CSS", "Framer Motion", "TypeScript", "Markdown"],
    liveUrl: "https://rsriad.dev",
    githubUrl: "https://github.com/rsriad/my_portfolio",
    featured: false
  }
];
