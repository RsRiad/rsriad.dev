"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Search, BookOpen } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { BlogCard } from "@/components/ui/blog-card";
import { blogs } from "@/data/blogs";
import { TextAnimate } from "@/components/ui/text-animate";
import { Input } from "@/components/ui/input";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags from the blog posts
  const uniqueTags = useMemo(() => {
    const tagsSet = new Set<string>();
    blogs.forEach((blog) => {
      blog.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  // Filter blogs based on search query and selected tag
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = !selectedTag || blog.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300 relative flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <Navbar />

        {/* Header Section */}
        <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pt-32 pb-8 sm:pt-40 sm:pb-12">
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
                blogs.
              </TextAnimate>
            </h1>
            
            <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm sm:text-base max-w-2xl leading-relaxed">
              Sharing thoughts, research, design updates, and architectural walkthroughs on engineering clean, modular software systems.
            </p>

            {/* Search Input */}
            <div className="relative w-full max-w-md mt-8">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 z-10" />
              <Input
                type="text"
                placeholder="Search articles by title or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full h-11 pl-10 pr-4 py-3 rounded-full text-sm font-medium
                  bg-white/50 dark:bg-neutral-900/10 backdrop-blur-sm
                  border border-neutral-200/80 dark:border-neutral-800
                  text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                  focus-visible:border-rose-500 dark:focus-visible:border-rose-400
                  focus-visible:ring-rose-500/20 dark:focus-visible:ring-rose-400/20
                  
                "
              />
            </div>
          </div>
        </section>

        {/* Filter Badges & Listing */}
        <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pb-24">
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                !selectedTag
                  ? "bg-rose-600 border-rose-600 text-white shadow-sm shadow-rose-600/10"
                  : "bg-white/50 dark:bg-neutral-900/10 border-neutral-200/80 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-neutral-900/30"
              }`}
            >
              All Topics
            </button>
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  selectedTag === tag
                    ? "bg-rose-600 border-rose-600 text-white shadow-sm shadow-rose-600/10"
                    : "bg-white/50 dark:bg-neutral-900/10 border-neutral-200/80 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-neutral-900/30"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Blogs Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl bg-white/30 dark:bg-neutral-900/5 backdrop-blur-sm">
              <BookOpen className="w-10 h-10 text-neutral-300 dark:text-neutral-700 mb-3" />
              <p className="text-sm font-semibold text-neutral-400 dark:text-neutral-500">
                No blog posts found matching your criteria.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}
