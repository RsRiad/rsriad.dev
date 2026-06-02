import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { techStack } from "@/data/tech-stack";

const firstRow = techStack.slice(0, Math.ceil(techStack.length / 2));
const secondRow = techStack.slice(Math.ceil(techStack.length / 2));

function TechCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        whitespace-nowrap
        rounded-full
        border
        border-neutral-200
        bg-background
        px-5
        py-3
        text-sm
        font-medium
        shadow-sm
        transition-colors
        hover:bg-neutral-100
        dark:border-neutral-800
        dark:hover:bg-neutral-900
      "
    >
      <Image
        src={icon}
        alt={name}
        width={20}
        height={20}
        className="size-5 object-contain"
      />

      <span>{name}</span>
    </div>
  );
}

export function TechStackMarquee() {
  return (
    <section className="mx-auto w-full max-w-5xl overflow-hidden py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-6">
        {/* Left Side */}
        <div className="relative shrink-0 w-full xl:w-auto text-center xl:text-left z-10">
  <h2 className="text-2xl sm:text-3xl font-light tracking-tight">
    My tech <span className="font-bold">stack</span>
  </h2>

  {/* Outer fade */}
  <div
    className="
      pointer-events-none
      absolute
      top-0
      -right-28
      h-full
      w-28
      bg-gradient-to-r
      from-background
      via-background/70
      to-transparent
      blur-md
    "
  />
</div>

        {/* Right Side */}
        <div className="relative flex min-w-0 w-full flex-1 flex-col justify-center overflow-hidden">
          {/* Top Row */}
          <Marquee pauseOnHover className="[--duration:28s]">
            {firstRow.map((item) => (
              <TechCard key={item.name} name={item.name} icon={item.icon} />
            ))}
          </Marquee>

          {/* Bottom Row */}
          <Marquee reverse pauseOnHover className="mt-4 [--duration:28s]">
            {secondRow.map((item) => (
              <TechCard key={item.name} name={item.name} icon={item.icon} />
            ))}
          </Marquee>

          {/* Left Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 xl:w-40 bg-gradient-to-r from-background to-transparent z-10" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 xl:w-40 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
