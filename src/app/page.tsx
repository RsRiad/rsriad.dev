import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar />
      <HeroSection />
    </main>
  );
}