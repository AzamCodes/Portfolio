import CardRevealSection from "@/components/CardRevealSection";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LinkPreviewSection from "@/components/LinkPreviewSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectSection id="projects" />
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent  h-[1px] mx-auto w-2/3" />
      <SkillSection id="skills" />
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent  h-[1px] mx-auto w-2/3" />

      <CardRevealSection id="services" />
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent  h-[1px] mx-auto w-2/3" />

      <LinkPreviewSection />

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent  h-[1px] mx-auto w-2/3" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}
