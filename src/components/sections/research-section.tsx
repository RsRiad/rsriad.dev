"use client";

import Link from "next/link";
import { publications, PublicationItem } from "@/data/publications";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { FileText, BookOpen, MapPin, ExternalLink, Award, CheckCircle2 } from "lucide-react";

export function ResearchSection() {
  // Show only featured items: Thesis + Turkey ISCO Conference Paper
  const featuredPublications = publications.filter((pub) => pub.featured);

  return (
    <BlurFade inView delay={0.1}>
      <section id="research" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Section Header */}
        <div className="flex flex-col mb-8 sm:mb-10">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-black dark:text-white">
            <TextAnimate animation="blurIn" by="word" once as="span" className="text-gray-400 dark:text-gray-500">
              Research &amp;
            </TextAnimate>{" "}
            <TextAnimate animation="blurIn" by="word" once delay={0.15} as="span">
              Publications
            </TextAnimate>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mt-3">
            Academic thesis and peer-reviewed conference publications in online facility assignment and algorithms.
          </p>
        </div>

        {/* Featured Publications List (Minimal & Clean, No Hover Effects) */}
        <div className="grid grid-cols-1 gap-5">
          {featuredPublications.map((pub: PublicationItem) => (
            <div
              key={pub.id}
              className="
                flex flex-col justify-between
                border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 backdrop-blur-sm
                rounded-2xl p-6 sm:p-7
              "
            >
              <div>
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-semibold rounded-md border border-neutral-200/60 dark:border-neutral-700/60">
                    {pub.type === "Thesis" ? <BookOpen className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                    {pub.type}
                  </span>

                  {pub.status && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-md border border-emerald-200/50 dark:border-emerald-900/40">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {pub.status}
                    </span>
                  )}

                  {pub.isFirstAuthor && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-semibold rounded-md border border-amber-200/50 dark:border-amber-900/40">
                      <Award className="w-3.5 h-3.5" />
                      1st Author
                    </span>
                  )}

                  <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 ml-auto font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                    {pub.location}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white leading-snug">
                  <Link
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pub.title}
                  </Link>
                </h3>

                {/* Authors */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-400 mt-2 font-medium">
                  <span className="text-gray-900 dark:text-white font-semibold">
                    Md. Rawha Siddiqi Riad
                  </span>{" "}
                  et al.
                </p>

                {/* Venue */}
                <p className="mt-2.5 text-xs sm:text-sm text-gray-500 dark:text-neutral-400 font-normal">
                  <span className="font-semibold text-gray-700 dark:text-neutral-300">Venue:</span> {pub.venue}
                </p>
              </div>

              {/* Action Link Button */}
              <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between">
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  {pub.year}
                </span>

                <Link
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold shrink-0"
                >
                  <span>{pub.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button to View All Publications */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link href="/publications">
            <InteractiveHoverButton className="px-3 py-1 text-neutral-800 dark:text-neutral-200 shadow-sm">
              ● All Publications
            </InteractiveHoverButton>
          </Link>
        </div>
      </section>
    </BlurFade>
  );
}
