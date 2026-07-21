"use client";

import { motion } from "motion/react";
import { ProfileCard } from "@/components/profile-card";
import { ArrowUpRight } from "lucide-react";
import { PrimaryActionButton, DownloadCVButton } from "@/components/ui/action-buttons";
import { TextAnimate } from "@/components/ui/text-animate";
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen lg:min-h-screen flex items-center pt-24 lg:pt-20 pb-12 lg:pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center w-full">
        {/* Left Column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={item}>
            <h1 className="text-[3rem] sm:text-4xl md:text-5xl lg:text-[3.7rem] font-bold tracking-tight leading-[1.08]">
              <div className="block">
                <TextAnimate animation="blurIn" by="word" once as="span" className="text-gray-500 dark:text-gray-400">
                  Hey I&apos;m Riad.
                </TextAnimate>
              </div>
              <TextAnimate animation="blurIn" by="word" once delay={0.3} as="span" className="text-black dark:text-white block mt-1">
                Welcome to my slice of the web!
              </TextAnimate>
            </h1>
          </motion.div>

          <motion.div
            variants={item}
            className="space-y-3 text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-lg"
          >
            <p>
              I&apos;m a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Full Stack Developer, Software Engineer &amp; Researcher
              </span>{" "}
              with hands-on experience in production-level web applications and
              published research in Machine Learning, LLMs and Combinatorial
              Optimization.
            </p>
            <p>
              Skilled in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Next.js, React, JavaScript, C++
              </span>
              , and modern full-stack technologies, solving 600+ competitive
              programming problems.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <PrimaryActionButton
              href="#projects"
              icon={<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
            >
              View Projects
            </PrimaryActionButton>
            <DownloadCVButton />
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}
