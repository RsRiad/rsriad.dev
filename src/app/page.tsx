import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { TechStackMarquee } from "@/components/sections/tech-stack-marquee";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ResearchSection } from "@/components/sections/research-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { AchievementsSection } from "@/components/sections/achievements-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <TechStackMarquee />
      <ProjectsSection />
      <ExperienceSection />
      <TechnologySection />
      <EducationSection />
      <ResearchSection />
      <AchievementsSection />
      <Footer />
    </main>
  );
}