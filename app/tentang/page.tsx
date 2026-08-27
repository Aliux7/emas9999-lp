import type { Metadata } from "next";
import { AboutSection } from "../components/tentang/AboutSection";
import { CTASection } from "../components/shared/CTASection";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Kisah Emas9999 — rumah emas Jakarta yang meracik, mencetak, dan menguji kadar emas 999,9 sejak generasi pendiri.",
};

export default function TentangPage() {
  return (
    <main className="pb-4 md:pb-12">
      <AboutSection />
      <CTASection />
    </main>
  );
}
