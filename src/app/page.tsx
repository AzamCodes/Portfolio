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

      {/* Light Mode: Black Line, Dark Mode: Gradient Line */}
      <div
        className="h-[1px] mx-auto w-full bg-black 
  dark:bg-gradient-to-r 
  dark:from-black dark:via-neutral-600 dark:to-black 
  sm:dark:from-transparent sm:dark:via-neutral-600 sm:dark:to-transparent"
      />

      <SkillSection id="skills" />

      {/* Light Mode: Black Line with Fade, Dark Mode: Gradient with Fade */}
      <div
        className="h-[1px] mx-auto w-full bg-black 
  dark:bg-gradient-to-r 
  dark:from-black dark:via-neutral-600 dark:to-black 
  sm:dark:from-transparent sm:dark:via-neutral-600 sm:dark:to-transparent"
      />

      <CardRevealSection id="services" />

      {/* Light Mode: Fade from Transparent to Black, Dark Mode: Gradient with Fade */}
      <div
        className="h-[1px] mx-auto w-full bg-black 
  dark:bg-gradient-to-r 
  dark:from-black dark:via-neutral-600 dark:to-black 
  sm:dark:from-transparent sm:dark:via-neutral-600 sm:dark:to-transparent"
      />

      <LinkPreviewSection />

      {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] mx-auto w-2/3" /> */}
      <div
        className="h-[1px] mx-auto w-full bg-black 
  dark:bg-gradient-to-r 
  dark:from-black dark:via-neutral-600 dark:to-black 
  sm:dark:from-transparent sm:dark:via-neutral-600 sm:dark:to-transparent"
      />

      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}
