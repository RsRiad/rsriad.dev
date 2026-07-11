"use client";

import { Home } from "lucide-react";
import Image from "next/image";
import { PrimaryActionButton } from "@/components/ui/action-buttons";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      
      {/* Radial blur decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-rose-500/10 dark:bg-rose-500/5 blur-3xl -z-10 pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 max-md:hidden -z-20 h-full w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.03] dark:opacity-[0.02] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <BlurFade inView delay={0.1}>
        {/* SVG Illustration */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-8 select-none pointer-events-none">
          <Image
            src="/images/404-illustration.svg"
            alt="404 Page Not Found"
            fill
            sizes="(max-width: 768px) 256px, 320px"
            className="object-contain dark:opacity-90"
            priority
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 mb-3">
          <TextAnimate animation="slideUp" by="word" once delay={0.2}>
            Whoops! Page not found.
          </TextAnimate>
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed mb-8 px-2">
          The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable. Let&apos;s guide you back.
        </p>

        {/* Return Home Button */}
        <div className="flex justify-center">
          <PrimaryActionButton
            href="/"
            icon={<Home className="w-4 h-4 transition-transform group-hover:scale-110" />}
          >
            Return Home
          </PrimaryActionButton>
        </div>
      </BlurFade>
    </main>
  );
}
