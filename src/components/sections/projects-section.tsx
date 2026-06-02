"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, ProjectItem } from "@/data/projects";
import { Safari } from "@/components/ui/safari";
import { Lens } from "@/components/ui/lens";

// A reusable ProjectCard component
export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        group relative flex flex-col justify-between h-full
        border border-neutral-200/80 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/10 backdrop-blur-sm 
        rounded-3xl p-5 sm:p-6 
        hover:border-neutral-300 dark:hover:border-neutral-700 
        hover:bg-white dark:hover:bg-neutral-900/30 
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] dark:hover:shadow-none 
        transition-all duration-350
      "
    >
      <div>
        {/* Project Image Container */}
        <div className="relative w-full mb-6 flex items-center justify-center">
          <Lens zoomFactor={2} lensSize={100} isStatic={false} ariaLabel="Zoom Area">
            <Safari
              url={project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : "project"}
              imageSrc={project.image}
              className="w-full size-full"
            />
          </Lens>

          {/* Top Right Action Button */}
          {(project.liveUrl || project.githubUrl) && (
            <Link
              href={project.liveUrl || project.githubUrl || "#"}
              target="_blank"
              className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-md text-gray-900 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-sm border border-white/20 z-10"
              aria-label="Open Project"
            >
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          )}
        </div>

        {/* Project Header */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-[14px] sm:text-[15px] text-gray-500 dark:text-gray-400 mt-2.5 mb-5 leading-relaxed font-normal">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-2.5 py-1 bg-neutral-100/80 dark:bg-neutral-800/40 text-neutral-600 dark:text-neutral-300 rounded-full border border-neutral-200/20 dark:border-neutral-700/20 select-none"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Footer Links (Fallback when image links are not hovered) */}
        <div className="flex items-center gap-4 pt-1 border-t border-neutral-100 dark:border-neutral-800/50">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  // Only show the 2 projects marked as featured on the home page
  const homeProjects = projects.filter(p => p.featured).slice(0, 2);

  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Heading */}
      <div className="flex flex-col mb-12 sm:mb-16">
        <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-black dark:text-white ">
          <span className="text-gray-400 dark:text-gray-500">Projects </span>
          that bridge code and intelligence
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 text-base max-w-xl">
          A selected showcase of applications, tools, and research implementations built using modern full-stack methodologies.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {homeProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Explore More Button */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <Link
          href="/projects"
          className="
            group/explore inline-flex items-center gap-2.5 px-8 py-4 rounded-full
            border border-neutral-300 dark:border-neutral-850 hover:border-neutral-400 dark:hover:border-neutral-700
            bg-white dark:bg-neutral-900/10 hover:bg-neutral-50 dark:hover:bg-neutral-900/40 text-neutral-800 dark:text-neutral-200
            text-[14px] sm:text-sm font-semibold transition-all duration-300
            hover:scale-[1.02] active:scale-[0.98] shadow-sm select-none
          "
        >
          <span>Explore More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/explore:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
