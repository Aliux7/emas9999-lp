import type { Metadata } from "next";
import { PricingSection } from "../components/shared/PricingSection";
import { FAQSection } from "../components/harga/FAQSection";

export const metadata: Metadata = {
  title: "Harga",
  description:
    "Harga jual dan beli kembali emas dan perak batangan 999,9 di Emas9999. Diperbarui dua kali sehari.",
};

export default function HargaPage() {
  return (
    <main className="pt-4 md:pt-12">
      <PricingSection />
      <FAQSection />
    </main>
  );
}
