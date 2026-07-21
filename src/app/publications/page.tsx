"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Search, BookOpen, FileText, MapPin, ExternalLink, Award, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { publications, PublicationItem } from "@/data/publications";
import { TextAnimate } from "@/components/ui/text-animate";
import { Input } from "@/components/ui/input";

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"All" | "Conference" | "Thesis">("All");

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.type.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = selectedType === "All" || pub.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

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
                Academic
              </TextAnimate>{" "}
              <TextAnimate animation="blurIn" by="word" once={false} delay={0.15} as="span">
                Publications.
              </TextAnimate>
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore peer-reviewed conference papers, thesis research, and technical publications in algorithm design, online optimization, and machine learning.
            </p>

            {/* Search Input */}
            <div className="relative w-full max-w-md mt-8">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 z-10" />
              <Input
                type="text"
                placeholder="Search publications by title, venue, or location..."
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

        {/* Listing & Filters */}
        <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pb-24">
          {/* Type Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(["All", "Conference", "Thesis"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${
                  selectedType === type
                    ? "bg-rose-600 border-rose-600 text-white shadow-sm shadow-rose-600/10"
                    : "bg-white/50 dark:bg-neutral-900/10 border-neutral-200/80 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-neutral-900/30"
                }`}
              >
                {type === "All" ? "All Publications" : type === "Conference" ? "Conferences" : "Thesis"}
              </button>
            ))}
          </div>

          {/* Publications List */}
          {filteredPublications.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredPublications.map((pub: PublicationItem) => (
                <div
                  key={pub.id}
                  className="
                    flex flex-col justify-between
                    border border-neutral-200/80 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/20 backdrop-blur-sm
                    rounded-2xl p-6 sm:p-7
                  "
                >
                  <div>
                    {/* Header Badges */}
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

                    {/* Paper Title */}
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white leading-snug">
                      <Link
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pub.title}
                      </Link>
                    </h2>

                    {/* Authors */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-300 mt-2 font-medium">
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

                  {/* Footer Action Link */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between">
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                      Year: {pub.year}
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
          ) : (
            <div className="flex flex-col items-center justify-center py-16 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl bg-white/30 dark:bg-neutral-900/5 backdrop-blur-sm">
              <BookOpen className="w-10 h-10 text-neutral-300 dark:text-neutral-700 mb-3" />
              <p className="text-sm font-semibold text-neutral-400 dark:text-neutral-500">
                No publications found matching your search query.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
