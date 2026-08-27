import { HeroSection } from "./components/home/HeroSection";
import { StatsSection } from "./components/home/StatsSection";
import { CollectionsSection } from "./components/home/CollectionsSection";
import { PricingSection } from "./components/shared/PricingSection";
import { CTASection } from "./components/shared/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CollectionsSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
