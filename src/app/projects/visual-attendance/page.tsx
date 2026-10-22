import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/projects/CaseStudyTemplate";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "AI-Powered Visual Attendance System — Oli Bakala",
  description:
    "Production-oriented computer vision system for live employee face recognition and attendance tracking. Case study covering the pipeline, architecture, implementation status, and planned work.",
};

export default function VisualAttendancePage() {
  const study = caseStudies["visual-attendance"];
  return <CaseStudyTemplate study={study} />;
}
