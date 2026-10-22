import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/projects/CaseStudyTemplate";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Probability of Default — Credit Scoring — Oli Bakala",
  description:
    "Binary classification model for credit risk assessment. Case study covering class imbalance, evaluation methodology, and results: F1 0.7805, ROC-AUC 0.9487, Recall 0.6531.",
};

export default function CreditScoringPage() {
  const study = caseStudies["credit-scoring"];
  return <CaseStudyTemplate study={study} />;
}
