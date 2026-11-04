import Hero from "@/components/hero/Hero";
import CapabilitySignal from "@/components/capabilities/CapabilitySignal";
import ProjectSection from "@/components/projects/ProjectSection";
import EngineeringApproach from "@/components/engineering/EngineeringApproach";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import AboutPreview from "@/components/about/AboutPreview";
import CurrentlyBuilding from "@/components/current/CurrentlyBuilding";
import LearningHubPreview from "@/components/learning/LearningHubPreview";
import ContactSection from "@/components/contact/ContactSection";

/* ==========================================================================
   HOMEPAGE — section order per PORTFOLIO_MASTER_SPEC.md §5
   Phase 1–9 complete.
   ========================================================================== */

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilitySignal />
      <ProjectSection />
      <EngineeringApproach />
      <SkillsSection />
      <ExperienceTimeline />
      <AboutPreview />
      <CurrentlyBuilding />
      <LearningHubPreview />
      <ContactSection />
    </>
  );
}
