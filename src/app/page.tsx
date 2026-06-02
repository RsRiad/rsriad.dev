import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { TechStackMarquee } from "@/components/sections/tech-stack-marquee";
import { ExperienceSection } from "@/components/sections/experience-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <TechStackMarquee />
      <ExperienceSection />
      <Footer />
    </main>
  );
}