"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ProjectCard } from "@/components/sections/projects-section";
import { projects } from "@/data/projects";
import { TextAnimate } from "@/components/ui/text-animate";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300 relative flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <Navbar />

        {/* Header Section */}
        <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div className="flex flex-col items-start">
            {/* Back Button */}
            <Link
              href="/"
              className="
                inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold 
                text-gray-500 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400
                transition-colors duration-200 mb-6 group/back select-none
              "
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover/back:-translate-x-0.5" />
              <span>Back to home</span>
            </Link>

            {/* Title & Description */}
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-black dark:text-white">
              <TextAnimate animation="blurIn" by="word" once={false} as="span" className="text-gray-400 dark:text-gray-500">
                My
              </TextAnimate>{" "}
              <TextAnimate animation="blurIn" by="word" once={false} delay={0.15} as="span">
                projects.
              </TextAnimate>
            </h1>
            
            <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm sm:text-base max-w-2xl leading-relaxed">
              A comprehensive showcase of applications, developer utilities, algorithms, and machine learning implementations I have designed, engineered, and published.
            </p>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}
