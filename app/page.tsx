import { HeroSection } from "./components/home/HeroSection";
import { StatsSection } from "./components/home/StatsSection";
import { CollectionsSection } from "./components/home/CollectionsSection";
import { PricingSection } from "./components/shared/PricingSection";
import { CTASection } from "./components/shared/CTASection";
import { getPrices, shapeRows } from "./lib/prices";

export default async function Home() {
  const result = await getPrices();
  const { gold, silver } = result.ok
    ? shapeRows(result.data)
    : { gold: [], silver: [] };
  const generatedAt = result.ok ? result.data.generatedAt : null;
  const error = result.ok ? undefined : result.error;

  return (
    <>
      <HeroSection />
      <StatsSection />
      <CollectionsSection />
      <PricingSection gold={gold} silver={silver} generatedAt={generatedAt} error={error} />
      <CTASection />
    </>
  );
}
