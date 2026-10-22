import Hero from "@/components/hero/Hero";
import CapabilitySignal from "@/components/capabilities/CapabilitySignal";
import ProjectSection from "@/components/projects/ProjectSection";
import EngineeringApproach from "@/components/engineering/EngineeringApproach";
import SkillsSection from "@/components/skills/SkillsSection";

/* ==========================================================================
   HOMEPAGE — section order per PORTFOLIO_MASTER_SPEC.md §5
   Phase 1: Foundation
   Phase 2: Navbar + Footer (in layout.tsx)
   Phase 3: Hero + Capability Signal
   Phase 4: Selected Projects
   Phase 5: Case study routes (separate pages)
   Phase 6: Engineering Approach + Skills
   Phase 7+: Experience, About, Currently Building, Learning Hub, Contact
   ========================================================================== */

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilitySignal />
      <ProjectSection />
      <EngineeringApproach />
      <SkillsSection />
    </>
  );
}
