import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { blogs } from "@/data/blogs";
import { TextAnimate } from "@/components/ui/text-animate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

function renderContent(content: string) {
  const lines = content.split("\n");
  let inCodeBlock = false;
  let codeLines: string[] = [];
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle code blocks
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre
            key={`code-${i}`}
            className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/60 rounded-2xl p-5 my-6 overflow-x-auto text-[13px] font-mono text-neutral-800 dark:text-neutral-200 shadow-sm leading-relaxed"
          >
            <code>{codeLines.join("\n")}</code>
          </pre>,
        );
        codeLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    // Handle headings
    if (line.trim().startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3.5 tracking-tight"
        >
          {line.trim().substring(4)}
        </h3>,
      );
      continue;
    }
    if (line.trim().startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 tracking-tight"
        >
          {line.trim().substring(3)}
        </h2>,
      );
      continue;
    }

    // Handle list items
    if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
      const contentStr = line.trim().substring(2);
      elements.push(
        <li
          key={`li-${i}`}
          className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pl-4 py-1 list-disc list-inside leading-relaxed"
        >
          {contentStr}
        </li>,
      );
      continue;
    }

    // Handle empty lines
    if (line.trim() === "") {
      continue;
    }

    // Parse inline code
    const parts = line.split("`");
    const parsedText = parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <code
            key={`inline-code-${index}`}
            className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-xs font-mono font-semibold text-rose-600 dark:text-rose-400 border border-neutral-200/50 dark:border-neutral-800/80"
          >
            {part}
          </code>
        );
      }
      return part;
    });

    elements.push(
      <p
        key={`p-${i}`}
        className="text-sm sm:text-base text-gray-600 dark:text-gray-400 my-4 leading-relaxed font-normal"
      >
        {parsedText}
      </p>,
    );
  }

  return elements;
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300 relative flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Article Wrapper */}
        <article className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40">
          {/* Back button */}
          <Link
            href="/blogs"
            className="
              inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold 
              text-gray-500 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400
              transition-colors duration-200 mb-8 group/back select-none
            "
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover/back:-translate-x-0.5" />
            <span>Back to blogs</span>
          </Link>

          {/* Banner cover */}
          <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-8 shadow-sm bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={blog.image || "https://ik.imagekit.io/credosis/Credosis/Placeholder/what%20makes%20website%20fast.png?updatedAt=1779823481727"}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-bold px-3 py-1 bg-neutral-100/80 dark:bg-neutral-800/40 text-neutral-600 dark:text-neutral-300 rounded-full border border-neutral-200/20 dark:border-neutral-700/20 select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-gray-900 dark:text-white mb-6">
            <TextAnimate animation="blurIn" by="word" once={false}>
              {blog.title}
            </TextAnimate>
          </h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-200/50 dark:border-neutral-800/60 mb-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <span className="text-gray-300 dark:text-neutral-800 select-none">
                •
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By {blog.author.name}</span>
            </div>
          </div>

          {/* Content Body */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {renderContent(blog.content)}
          </div>

          {/* Author Bio Box */}
          <div className="mt-16 p-6 sm:p-8 rounded-3xl border border-neutral-200/60 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/10 backdrop-blur-sm flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-gray-900 dark:text-white">
                Written by {blog.author.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
                {blog.author.role} based in Bangladesh. Specialized in software
                engineering, dynamic frontends, and backend microservice
                environments.
              </p>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
