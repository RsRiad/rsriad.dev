import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function TechnologySection() {
  return (
    <BlurFade inView delay={0.1}>
      <section
        id="technology"
        className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16"
      >
        {/* Top Header Row */}
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-6 mb-10 sm:mb-14">
         
          {/* Heading Column */}
          <div className="text-left">
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-black dark:text-white">
              <TextAnimate
                animation="blurIn"
                by="word"
                once
                as="span"
                className="text-gray-400 dark:text-gray-500"
              >
                Technology
              </TextAnimate>{" "}
              <TextAnimate
                animation="blurIn"
                by="word"
                once
                delay={0.15}
                as="span"
              >
                &amp; Innovation
              </TextAnimate>
            </h2>
          </div>

           {/* Button Column */}
          <div className="hidden md:flex items-center justify-start">
            <Link href="/blogs" className="no-underline">
              <InteractiveHoverButton className="px-3 py-1 text-neutral-800 dark:text-neutral-200 shadow-sm">
                ●  Blogs
              </InteractiveHoverButton>
            </Link>
          </div>

        </div>

        {/* Bottom Three-Card Grid */}
        <div className="bg-neutral-50/50 dark:bg-neutral-900/10 border border-neutral-200/80 dark:border-neutral-800/50 backdrop-blur-sm p-2 sm:p-3 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-10 gap-2 sm:gap-3 shadow-[0_12px_40px_rgba(0,0,0,0.02)]">
          {/* Card 01 - Gray/White Light Background */}
          <div className="md:col-span-3 bg-white dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/40 rounded-[1.8rem] p-6 sm:p-8 min-h-[260px] sm:min-h-[280px] flex flex-col justify-between text-neutral-900 dark:text-neutral-100 select-none hover:shadow-inner transition-shadow duration-300">
            <span className="text-5xl sm:text-5xl font-bold text-neutral-400 dark:text-neutral-500">01</span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold leading-tight tracking-tight mb-2.5">
                Smarter Solutions with AI Technology
              </h3>
              <p className="text-[11px] sm:text-xs md:text-[13px] text-neutral-500 dark:text-neutral-400 leading-normal font-medium">
                Building custom machine learning models, intelligent LLM agents, and automation workflows to solve complex optimization problems.
              </p>
            </div>
          </div>

          {/* Card 02 - Gray/Charcoal Off-white Background */}
          <div className="md:col-span-3 bg-neutral-50/70 dark:bg-neutral-950/40 border border-neutral-200/60 dark:border-neutral-800/40 rounded-[1.8rem] p-6 sm:p-8 min-h-[260px] sm:min-h-[280px] flex flex-col justify-between text-neutral-900 dark:text-neutral-100 select-none hover:shadow-inner transition-shadow duration-300">
            <span className="text-5xl sm:text-5xl font-bold text-neutral-400 dark:text-neutral-500">
              02
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold leading-tight tracking-tight mb-2.5 text-neutral-900 dark:text-neutral-100">
                High-Performance Web Engineering
              </h3>
              <p className="text-[11px] sm:text-xs md:text-[13px] text-neutral-500 dark:text-neutral-400 leading-normal font-normal">
                Developing responsive web applications and backend services using Next.js, React, and modern full-stack technologies.
              </p>
            </div>
          </div>

          {/* Card 03 - Video Card */}
          <div className="md:col-span-4 h-full min-h-[260px] sm:min-h-[280px] rounded-[1.8rem] overflow-hidden relative group shadow-md">
            <video
              src="https://ik.imagekit.io/glowaura/loop1.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>
    </BlurFade>
  );
}
