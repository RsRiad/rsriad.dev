"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/profile-card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Shine } from "@/components/ui/shine";
import { DiaTextReveal } from "@/components/ui/text-reveal";
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
                <span className="text-gray-400 dark:text-gray-500">
                  Hey I&apos;m{" Riad."}
                </span>
{/* 
                <DiaTextReveal
                  className="
                    text-[2.5rem]
                    sm:text-4xl
                    md:text-5xl
                    lg:text-[3rem]
                    font-bold
                    tracking-tight
                    leading-[1.08]
                    inline-block
                  "
                  colors={["#22d3ee", "#818cf8", "#f472b6", "#34d399"]}
                  text="Riad."
                /> */}
              </div>
              <span className="text-gray-900 dark:text-white block mt-1">
                Welcome to my slice of the web!
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={item}
            className="space-y-3 text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-lg"
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
                Next.js, React, Java Script, C++
              </span>
              , and modern full-stack technologies, solving 600+ competitive
              programming problems.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-6 py-5 text-sm font-semibold group shadow-sm"
            >
              <Link href="#projects" className="flex items-center gap-2">
                View Projects
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
            <Shine className="rounded-full">
              <Button
                variant="outline"
                asChild
                className="rounded-full px-6 py-5 text-sm font-semibold border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200"
              >
                <Link href="/documents/CV.pdf" download>
                  Download CV
                </Link>
              </Button>
            </Shine>
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
