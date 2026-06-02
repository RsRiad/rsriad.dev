import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { TechStackMarquee } from "@/components/sections/tech-stack-marquee";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <TechStackMarquee />
      <Footer />
    </main>
  );
}