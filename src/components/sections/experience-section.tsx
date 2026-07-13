"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { Mail, ChevronDown } from "lucide-react";
import { experiences } from "@/data/experience";
import { PrimaryActionButton, DownloadCVButton } from "@/components/ui/action-buttons";

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>("kemik");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <BlurFade inView delay={0.1}>
      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-2 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Heading & Accordion */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Header */}
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-black dark:text-white mb-10 sm:mb-12">
             <TextAnimate animation="blurIn" by="word" once as="span" className="text-gray-400 dark:text-gray-500">
               Experience
             </TextAnimate>{" "}
             <TextAnimate animation="blurIn" by="word" once delay={0.15} as="span">
               that speaks for itself.
             </TextAnimate>
          </h2>

          {/* Subtitle */}
          <h3 className="text-base font-semibold tracking-wide text-gray-900 dark:text-neutral-200 mb-5">
            My work history
          </h3>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            {experiences.map((exp) => {
              const isExpanded = expandedId === exp.id;
              return (
                <div
                  key={exp.id}
                  className={`
                    border rounded-[1.5rem] overflow-hidden transition-all duration-300
                    ${isExpanded 
                      ? "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-sm" 
                      : "border-neutral-200/60 dark:border-neutral-900/80 bg-white/50 dark:bg-neutral-900/10 hover:border-neutral-300 dark:hover:border-neutral-800 hover:bg-white dark:hover:bg-neutral-900/30"
                    }
                  `}
                >
                  {/* Card Header (Toggle Button) */}
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 select-none focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex flex-col pr-2">
                      <span className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">
                        {exp.company}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        {exp.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {exp.period}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-400 dark:text-gray-500 hidden sm:block"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Card Body (Expanded Content) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-neutral-100 dark:border-neutral-800/80">
                          {/* Brief Lead Paragraph */}
                          <p className="text-gray-900 dark:text-neutral-200 text-[14px] sm:text-[15px] font-semibold leading-relaxed mt-4 mb-4">
                            {exp.description}
                          </p>

                          {/* Bullet Points */}
                          <ul className="space-y-3 pl-1">
                            {exp.points.map((point, index) => (
                              <li
                                key={index}
                                className="flex gap-2 text-[13px] sm:text-[14px] text-gray-700 dark:text-neutral-400 leading-relaxed items-start"
                              >
                                <span className="text-gray-900 dark:text-white select-none pt-0.5 shrink-0">
                                  •
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Sticky Contact Card */}
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <div className="border border-neutral-200/80 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 backdrop-blur-sm rounded-[2rem] p-6 sm:p-8 flex flex-col items-start shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-none">
            {/* Avatar / Profile Image */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800">
              <Image
                src="/images/profile.png"
                alt="Md. Rawha Siddiqi Riad"
                fill
                sizes="64px"
                className="object-cover"
                loading="eager"
              />
            </div>

            {/* Content Headers */}
            <div className="mt-6">
              <h4 className="text-gray-400 dark:text-gray-500 font-light text-lg">
                Have any questions?
              </h4>
              <h3 className=" text-2xl sm:text-3xl font-normal tracking-tight text-gray-900 dark:text-white mt-1 leading-snug">
                Feel free to contact me.
              </h3>
            </div>

            {/* Paragraph Description */}
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-[15px] leading-relaxed mt-4 mb-8">
              Whether you&apos;re looking to collaborate, or just want to connect, I&apos;m always open to discussing ideas and building thoughtful, user-focused experiences.
            </p>

            {/* Button Actions */}
            <div className="flex flex-wrap gap-3 w-full">
              <PrimaryActionButton
                href="mailto:rsriad00@gmail.com"
                icon={<Mail className="w-4 h-4" />}
              >
                Contact me
              </PrimaryActionButton>
              <DownloadCVButton />
            </div>
          </div>
        </div>

      </div>
      </section>
    </BlurFade>
  );
}
