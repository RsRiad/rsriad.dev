"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogItem } from "@/data/blogs";

export function BlogCard({ blog }: { blog: BlogItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        group relative flex flex-col justify-between h-full
        border border-neutral-200/80 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/10 backdrop-blur-sm 
        rounded-2xl p-4 sm:p-5 
        hover:border-neutral-300 dark:hover:border-neutral-700 
        hover:bg-white dark:hover:bg-neutral-900/30 
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] dark:hover:shadow-none 
        cursor-pointer
      "
    >
      <Link
        href={`/blogs/${blog.slug}`}
        className="flex flex-col h-full justify-between"
      >
        <div>
          {/* Slim Cover Image Banner */}
          <div className="relative w-full aspect-[21/10] rounded-xl overflow-hidden mb-4 bg-neutral-100 dark:bg-neutral-900">
            <Image
              src={blog.image || "https://ik.imagekit.io/credosis/Credosis/Placeholder/what%20makes%20website%20fast.png?updatedAt=1779823481727"}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          {/* Date & Read Time */}
          <div className="flex items-center gap-3 text-[11px] text-gray-400 dark:text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{blog.date}</span>
            </div>
            <span className="text-gray-300 dark:text-neutral-800 select-none">
              •
            </span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Blog Title */}
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300 line-clamp-2">
            {blog.title}
          </h3>

          {/* Blog Excerpt */}
          <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-2 mb-4 leading-relaxed font-normal line-clamp-2">
            {blog.excerpt}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-bold px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800/40 text-neutral-500 dark:text-neutral-400 rounded-md border border-neutral-200/10 dark:border-neutral-700/10 select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Card Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800/50">
            <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
              {blog.author.name}
            </span>

            <div className="inline-flex items-center gap-0.5 text-xs font-semibold text-rose-600 dark:text-rose-400 group-hover:translate-x-0.5 transition-transform duration-300">
              <span>Read post</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
