import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/projects/CaseStudyTemplate";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Neural Machine Translation",
  description:
    "Sequence-to-sequence neural machine translation system exploring encoder-decoder architecture and attention mechanisms. Training and evaluation in progress.",
  openGraph: {
    title: "Neural Machine Translation",
    description:
      "Sequence-to-sequence neural machine translation system exploring encoder-decoder architecture and attention mechanisms. Training and evaluation in progress.",
    type: "article",
  },
};

export default function NeuralTranslationPage() {
  const study = caseStudies["neural-translation"];
  return <CaseStudyTemplate study={study} />;
}
