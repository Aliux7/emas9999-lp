import type { Metadata } from "next";
import { PricingSection } from "../components/shared/PricingSection";
import { FAQSection } from "../components/harga/FAQSection";
import { getPrices, shapeRows } from "../lib/prices";

export const metadata: Metadata = {
  title: "Harga",
  description:
    "Harga jual dan beli kembali emas dan perak batangan 999,9 di Emas9999. Diperbarui dua kali sehari.",
};

export default async function HargaPage() {
  const result = await getPrices();
  const { gold, silver } = result.ok
    ? shapeRows(result.data)
    : { gold: [], silver: [] };
  const generatedAt = result.ok ? result.data.generatedAt : null;
  const error = result.ok ? undefined : result.error;

  return (
    <main className="pt-4 md:pt-12">
      <PricingSection gold={gold} silver={silver} generatedAt={generatedAt} error={error} />
      <FAQSection />
    </main>
  );
}
