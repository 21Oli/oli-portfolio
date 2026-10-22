import Hero from "@/components/hero/Hero";
import CapabilitySignal from "@/components/capabilities/CapabilitySignal";
import ProjectSection from "@/components/projects/ProjectSection";

/* ==========================================================================
   HOMEPAGE
   Phase 1: Foundation
   Phase 2: Navbar + Footer (in layout.tsx)
   Phase 3: Hero + Capability Signal
   Phase 4: Selected Projects
   Additional sections (Skills, Experience, About, etc.) — Phase 6+
   ========================================================================== */

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilitySignal />
      <ProjectSection />
    </>
  );
}
