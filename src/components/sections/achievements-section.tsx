"use client";

import { AchievementStack } from "@/components/ui/achievement-stack";
import { achievements } from "@/data/achievements";
import type { AchievementItem } from "@/data/achievements";
import Link from "next/link";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Calendar, Award } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

export function AchievementsSection() {
  const title = (
    <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-black dark:text-white">
      <span className="text-gray-400 dark:text-gray-500">Achievements & </span>
      Certificates
    </h2>
  );

  const subtitle = (
    <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl leading-relaxed">
      A compilation of academic scholarships, competition achievements, and certified technical milestones documenting my learning journey.
    </p>
  );

  return (
    <BlurFade inView delay={0.1}>
      <section id="achievements" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-1 sm:py-1 relative">
      <div className="absolute inset-0 max-md:hidden top-[150px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>

      <div className="flex flex-col mb-6 sm:mb-8">
        <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-black dark:text-white">
          <TextAnimate animation="blurIn" by="word" once as="span" className="text-gray-400 dark:text-gray-500">
            Achievements &amp;
          </TextAnimate>{" "}
          <TextAnimate animation="blurIn" by="word" once delay={0.15} as="span">
            Certificates
          </TextAnimate>
        </h2>
        <div className="mt-3">{subtitle}</div>
      </div>

      <AchievementStack
        className="max-w-5xl mx-auto"
        items={achievements}
        autoAdvance
        intervalMs={5000}
        pauseOnHover
        showDots
        maxVisible={3}
        cardWidth={480}
        cardHeight={300}
        overlap={0.52}
        spreadDeg={20}
        renderCard={(item: AchievementItem, { active }: { active: boolean }) => (
          <div className="relative h-full w-full">
            <div className="absolute inset-0">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>

            {item.tag && (
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider rounded-full border border-rose-100 dark:border-rose-900/30">
                  <Award className="w-3 h-3" />
                  {item.tag}
                </span>
              </div>
            )}

            {/* Clean floating text with high-contrast shadows */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col justify-end z-10">
              <div 
                className="text-base sm:text-lg font-bold text-white leading-tight"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.7)" }}
              >
                {item.title}
              </div>
              <div 
                className="mt-0.5 text-xs sm:text-sm text-neutral-100 font-medium"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}
              >
                {item.issuer}
              </div>
              <div 
                className="mt-1 flex items-center gap-1.5 text-[11px] sm:text-xs text-neutral-200"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}
              >
                <Calendar className="w-3 h-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]" />
                {item.date}
              </div>
            </div>
          </div>
        )}
      />

      <div className="mt-8 sm:mt-12 flex justify-center mb-10">
        <Link href="/#achievements">
          <InteractiveHoverButton className="px-3 py-1 text-neutral-800 dark:text-neutral-200 shadow-sm">
            ● Explore Achievements
          </InteractiveHoverButton>
        </Link>
      </div>
      </section>
    </BlurFade>
  );
}
