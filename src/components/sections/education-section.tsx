"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { ChevronDown, GraduationCap } from "lucide-react";
import { educations } from "@/data/education";

export function EducationSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const activeEducation = educations.find((edu) => edu.id === expandedId);

  return (
    <BlurFade inView delay={0.1}>
      <section id="education" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Heading & Image Panel */}
        <div className="lg:col-span-6 flex flex-col lg:sticky lg:top-28">
          {/* Header */}
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-black dark:text-white mb-6">
            <TextAnimate animation="blurIn" by="word" once as="span" className="text-gray-400 dark:text-gray-500">
              Education
            </TextAnimate>{" "}
            <TextAnimate animation="blurIn" by="word" once delay={0.15} as="span">
              builds the foundation.
            </TextAnimate>
          </h2>

          {/* Subtitle */}
          <h3 className="text-base font-semibold tracking-wide text-gray-900 dark:text-neutral-200 mb-4">
            Academic background
          </h3>

          {/* <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-[15px] leading-relaxed max-w-md mb-10">
            My academic journey has been a blend of rigorous coursework, hands-on programming challenges, and research exploration. It has equipped me with strong problem-solving skills and a solid computer science foundation.
          </p> */}
          <div className={`border border-neutral-200/80 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 backdrop-blur-sm rounded-[2rem] p-4 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-none overflow-hidden relative mt-8 lg:mt-0 w-full transition-all duration-500 ease-in-out ${
            activeEducation ? "aspect-[4/3] md:aspect-video" : "aspect-square"
          }`}>
            <AnimatePresence mode="wait">
              {activeEducation ? (
                <motion.div
                  key={activeEducation.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full absolute inset-0 p-4"
                >
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <Image
                      src={activeEducation.image || "/images/placeholder.png"}
                      alt={activeEducation.institution}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-white font-bold text-xl drop-shadow-md">
                        {activeEducation.institution}
                      </h4>
                      <p className="text-neutral-200 text-sm mt-1 drop-shadow-md">
                        {activeEducation.degree}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 grid-rows-2 gap-3 w-full h-full absolute inset-0 p-4"
                >
                  {educations.slice(0, 3).map((edu, index) => (
                    <div
                      key={edu.id}
                      className={`relative rounded-[1.2rem] overflow-hidden w-full h-full ${
                        index === 0 ? "col-span-2 row-span-1" : "col-span-1 row-span-1"
                      }`}
                    >
                      <Image
                      src={edu.image || "/images/placeholder.png"}
                        alt={edu.institution}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300" />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            {educations.map((edu) => {
              const isExpanded = expandedId === edu.id;
              return (
                <div
                  key={edu.id}
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
                    onClick={() => toggleExpand(edu.id)}
                    className="w-full text-left px-5 sm:px-6 py-5 flex items-start justify-between gap-4 select-none focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex gap-4">
                      {/* Icon Block */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-[0.8rem] bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center text-neutral-900 dark:text-white mt-0.5 border border-neutral-200/50 dark:border-neutral-700/50">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      
                      {/* Text Content Block */}
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 dark:text-white text-base sm:text-lg leading-snug">
                          {edu.institution}
                        </span>
                        <span className="text-[15px] text-gray-600 dark:text-gray-400 mt-1">
                          {edu.degree}
                        </span>
                        <span className="text-[14px] text-gray-400 font-mono tracking-tight mt-1">
                          {edu.period}
                        </span>
                        <span className="text-[14px] text-gray-500 mt-1">
                          Grade: {edu.grade}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 mt-1">
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-400 dark:text-gray-500 hidden sm:block"
                      >
                        <ChevronDown className="w-5 h-5" />
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
                          {/* Description */}
                          <p className="text-gray-700 dark:text-neutral-300 text-[13px] sm:text-[14px] leading-relaxed mt-4">
                            {edu.description}
                          </p>

                          {/* Activities and Societies */}
                          {edu.activities && (
                            <div className="mt-4">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                                Activities & Societies
                              </h4>
                              <p className="text-gray-600 dark:text-neutral-400 text-[13px] sm:text-[14px] leading-relaxed">
                                {edu.activities}
                              </p>
                            </div>
                          )}

                          {/* Skills */}
                          {edu.skills && edu.skills.length > 0 && (
                            <div className="mt-5">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2.5">
                                Skills Acquired
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {edu.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[11px] font-semibold px-2.5 py-1 bg-neutral-100/80 dark:bg-neutral-800/40 text-neutral-600 dark:text-neutral-300 rounded-full border border-neutral-200/20 dark:border-neutral-700/20 select-none"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      </section>
    </BlurFade>
  );
}
