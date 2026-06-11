"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { educations } from "@/data/education";

export function EducationSection() {
  const [expandedId, setExpandedId] = useState<string | null>("aiub");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Header */}
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-black dark:text-white mb-6">
            <span className="text-gray-400 dark:text-gray-500">Education </span>
            shapes the foundation.
          </h2>

          {/* Subtitle */}
          <h3 className="text-base font-semibold tracking-wide text-gray-900 dark:text-neutral-200 mb-4">
            Academic background
          </h3>

          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-[15px] leading-relaxed max-w-md">
            My academic journey has been a blend of rigorous coursework, hands-on programming challenges, and research exploration. It has equipped me with strong problem-solving skills and a solid computer science foundation.
          </p>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-7 flex flex-col gap-4 w-full">
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
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col pr-2">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-bold text-gray-900 dark:text-white text-base sm:text-lg leading-snug">
                        {edu.institution}
                      </span>
  
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      {edu.degree}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {edu.period}
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
                        {/* Description */}
                        <span className="text-[11px] font-semibold text-rose-650 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded-md border border-rose-100/50 dark:border-rose-900/30">
                        Grade: {edu.grade}
                      </span>
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
    </section>
  );
}
