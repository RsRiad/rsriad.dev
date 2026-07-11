export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image?: string;
}

export const blogs: BlogItem[] = [
  {
    id: "nextjs-16-routing",
    slug: "nextjs-16-routing",
    title: "Navigating Next.js 16: The Future of Server Actions and Routing",
    excerpt: "Explore the new architectural paradigms in Next.js 16, including advanced async route parameters, enhanced caching layers, and production patterns for React Server Actions.",
    date: "July 10, 2026",
    readTime: "6 min read",
    tags: ["Next.js", "React 19", "Web Development"],
    author: {
      name: "Md. Rawha Siddiqi Riad",
      avatar: "/images/profile.png",
      role: "Full Stack Developer"
    },
    content: `
Next.js 16 and React 19 bring structural shifts to how developers design, build, and deploy production-ready web applications. In this article, we dive deep into the newly stabilized APIs, routing optimizations, and the patterns that will set your application apart.

### The Shift to Async Routing Parameters

One of the most notable architectural changes in recent Next.js versions is the deprecation of synchronous dynamic routing parameters. In Next.js 16, \`params\` and \`searchParams\` on pages and layouts are returned as Promises, which must be awaited before accessing properties.

\`\`\`tsx
// Modern Next.js 16 Page Pattern
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <div>Post: {slug}</div>;
}
\`\`\`

This change allows Next.js to optimize static site generation (SSG) and dynamic server-side rendering (SSR) pipelines concurrently, minimizing hydration mismatches.

### React Server Actions in Production

Server Actions are now fully integrated and mature. Instead of setting up complex API endpoints for simple state mutations, you can define asynchronous functions that execute directly on the server.

Key benefits of Server Actions:
1. **Zero-API configuration**: Eliminate routing boilerplate.
2. **Progressive enhancement**: Works even if JavaScript hasn't fully loaded on the client yet.
3. **End-to-end type safety**: Share types directly between databases, server files, and client-side forms.

### Best Practices for Caching and Revalidation

Managing cache on the edge is simpler with the new tag-based revalidation. Using \`revalidateTag\` inside a server action or API route allows you to target specific content queries and flush them instantaneously without resetting the entire site cache.

As the ecosystem continues to mature, aligning your codebase with asynchronous patterns is not just recommended—it's essential for future-proofing your applications.
    `
  },
  {
    id: "tailwind-css-v4-performance",
    slug: "tailwind-css-v4-performance",
    title: "Mastering Tailwind CSS v4: Advanced Layouts and CSS variables",
    excerpt: "Discover the power of Tailwind CSS v4's brand-new theme engine, native CSS variables integration, and custom utilities designed for ultra-performance.",
    date: "June 28, 2026",
    readTime: "4 min read",
    tags: ["Tailwind CSS", "CSS", "Frontend"],
    author: {
      name: "Md. Rawha Siddiqi Riad",
      avatar: "/images/profile.png",
      role: "Software Engineer"
    },
    content: `
Tailwind CSS v4 introduces a revolutionary configuration approach. By migrating configuration from JavaScript (\`tailwind.config.js\`) directly into your stylesheets using native CSS \`@theme\` directives, v4 achieves incredibly fast compilation times and allows deep integration with standard web properties.

### The Death of tailwind.config.js

In Tailwind v4, customizing your design system is as simple as writing native CSS variables in your entry CSS file:

\`\`\`css
@import "tailwindcss";

@theme {
  --color-primary-brand: #e11d48;
  --font-display: "Outfit", sans-serif;
  --animate-sparkle: sparkle 2s ease-in-out infinite;
}
\`\`\`

Tailwind automatically compiles these declarations into utilities, allowing you to use classes like \`bg-primary-brand\`, \`font-display\`, and \`animate-sparkle\` immediately.

### Ultra-Performance Caching

By utilizing Rust under the hood for parsing CSS modules, the new build pipeline is up to 10x faster. Incremental builds now take single-digit milliseconds, resulting in a seamless local development experience.

### Modern Layout Patterns

With CSS Grid, Flexbox, and Tailwind's responsive modifiers, layouts are more resilient than ever. Combine container queries with container classes directly in your HTML to design component-relative layouts that look perfect on any screen size.
    `
  },
  {
    id: "ai-assisted-coding-workflows",
    slug: "ai-assisted-coding-workflows",
    title: "Designing the Perfect AI-Assisted Coding Workflow",
    excerpt: "How to leverage advanced agentic AI models to write cleaner code, refactor legacy systems, and build features at lightning speed while maintaining absolute code quality.",
    date: "June 15, 2026",
    readTime: "8 min read",
    tags: ["AI", "Developer Workflows", "Software Engineering"],
    author: {
      name: "Md. Rawha Siddiqi Riad",
      avatar: "/images/profile.png",
      role: "Researcher & Engineer"
    },
    content: `
Artificial intelligence is rapidly shifting from auto-completion prompts to fully autonomous, agentic coding partners. Designing a workflow that respects developer agency while exploiting AI capabilities is critical for modern engineering teams.

### Agentic vs. Copilot Workflows

While standard Copilot tools offer inline suggestions based on your cursor, Agentic workflows utilize stateful contexts, file-system permissions, and run-loop systems. This allows AI assistants to research codebases, draft implementation plans, and automatically verify compilation errors.

### The Role of Implementation Planning

A critical failure mode when working with AI is requesting complex changes blindly. By structuring changes into three distinct phases—**Research**, **Planning**, and **Execution**—you maintain complete control over code quality:

1. **Research**: AI scans references, dependencies, and styles without editing files.
2. **Planning**: Creating a markdown specification outlining precise files to add/modify and test constraints.
3. **Execution**: Safe, line-by-line modifications with strict compilation checks.

### Continuous Verification

Always run test suites (\`vitest\`, \`jest\`) and TypeScript checks (\`tsc\`) automatically after AI edits. AI is extremely effective at writing functional structures, but human verification ensures readability, architecture alignment, and optimal UX polish.
    `
  },
  {
    id: "nextjs-performance-and-ux",
    slug: "nextjs-performance-and-ux",
    title: "What Makes a Next.js Website Load Faster and Feel Smoother",
    excerpt: "From Server Components and next/image to smart caching with useSWR, here's a practical breakdown of everything that actually moves the needle on Next.js performance and user experience.",
    date: "July 11, 2026",
    readTime: "6 min read",
    tags: ["Next.js", "Performance", "React"],
    author: {
      name: "Md. Rawha Siddiqi Riad",
      avatar: "/images/profile.png",
      role: "Software Engineer"
    },
    content: `
Speed isn't a single feature you toggle on — it's the sum of dozens of small decisions across rendering, data fetching, images, fonts, and caching. Next.js gives you the tools to nail all of them, but only if you know which knob to turn. Here's what actually makes a Next.js app fast and keeps it feeling smooth.

### Rendering the Right Way: Server Components First

The App Router defaults every component to a React Server Component, meaning it renders on the server and ships zero JavaScript to the browser unless you explicitly opt into a Client Component with \`"use client"\`. This alone is the single biggest lever for performance — less JavaScript means faster parsing, faster hydration, and a faster Time to Interactive.

\`\`\`tsx
// This runs entirely on the server. No JS bundle cost.
async function ProductList() {
  const products = await getProducts();
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
\`\`\`

Reserve \`"use client"\` for components that truly need interactivity — buttons, forms, dropdowns — and let everything else render on the server.

### Streaming with Suspense

Instead of making users stare at a blank screen while slow data loads, wrap slow sections in \`<Suspense>\` and let Next.js stream the rest of the page immediately.

\`\`\`tsx
<Suspense fallback={<ProductSkeleton />}>
  <ProductList />
</Suspense>
\`\`\`

The shell, navigation, and static content paint instantly, while the slower parts fill in as they resolve — this is what makes a page *feel* fast even when a database query takes a moment.

### Images and Fonts: The Silent Performance Killers

Unoptimized images and web fonts are responsible for the majority of layout shift and slow paints on the web. \`next/image\` automatically serves responsive, lazy-loaded, modern-format (WebP/AVIF) images and reserves layout space to prevent Cumulative Layout Shift:

\`\`\`tsx
import Image from "next/image";

<Image src="/hero.jpg" alt="Hero" width={1200} height={600} priority />
\`\`\`

Similarly, \`next/font\` self-hosts Google Fonts and eliminates render-blocking network requests, while automatically preventing layout shift with proper fallback metrics:

\`\`\`tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
\`\`\`

### Client-Side Data Fetching with useSWR

Not everything belongs on the server — dashboards, live notifications, and user-specific widgets often need client-side fetching that stays fresh without a full reload. This is where \`useSWR\` shines. It handles caching, deduplication, revalidation on focus/reconnect, and stale-while-revalidate behavior out of the box, so your UI shows cached data instantly while quietly fetching updates in the background.

\`\`\`tsx
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

function Notifications() {
  const { data, isLoading } = useSWR("/api/notifications", fetcher, {
    refreshInterval: 5000,
    revalidateOnFocus: true,
  });

  if (isLoading) return <Spinner />;
  return <NotificationList items={data} />;
}
\`\`\`

Because SWR caches responses in memory and reuses them across components, navigating back to a previously visited view feels instantaneous instead of re-fetching from scratch.

### Prefetching and Code Splitting

The \`<Link>\` component automatically prefetches routes in the viewport, so by the time a user clicks, the page is already loaded. Pair this with \`next/dynamic\` to split heavy, rarely-used components — like charts or rich text editors — out of the main bundle:

\`\`\`tsx
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./Chart"), { ssr: false });
\`\`\`

### Caching at the Edge with ISR

Incremental Static Regeneration lets you serve static, CDN-cached pages that quietly regenerate in the background, giving you the speed of static sites with the freshness of dynamic ones:

\`\`\`tsx
export const revalidate = 60; // regenerate at most once every 60 seconds
\`\`\`

### Bringing It All Together

None of these techniques work in isolation — the fastest Next.js apps combine server-rendered shells, streamed slow data, optimized images and fonts, SWR-powered client widgets, and edge caching into one cohesive strategy. Get these fundamentals right, and both your Core Web Vitals and your users will notice the difference.
    `
  },
];
