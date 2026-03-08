import { Navbar } from "@/components/Navbar";
import { CertificatesSection } from "@/sections/CertificatesSection";
import { ContactSection } from "@/sections/ContactSection";
import { EducationSection } from "@/sections/EducationSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { FooterSection } from "@/sections/FooterSection";
import { FutureVisionSection } from "@/sections/FutureVisionSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { StrengthsSection } from "@/sections/StrengthsSection";
import { SummarySection } from "@/sections/SummarySection";

const Index = () => {
  return (
    <div className="page-shell">
      <div className="page-noise" />
      <Navbar />
      <main>
        <HeroSection />
        <SummarySection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <FutureVisionSection />
        <EducationSection />
        <StrengthsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
