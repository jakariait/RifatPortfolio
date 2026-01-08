import Clients from "@/components/Clients";
import Testimonial from "@/components/Testimonials";
import WorkingProcess from "@/components/WorkingProcess";
import ToolsSection from "@/components/ToolsSection";
import Results from "@/components/Results";
import FaqAccordion from "@/components/FaqAccordion";
import PricingPlans from "@/components/PricingSection";
import WhatBusinessOwnersWant from "@/components/WhatBusinessOwnersWant";
import CallToAction from "@/components/CallToAction";
import NewHero from "@/components/NewHero";
import SustainableGrowth from "@/components/SustainableGrowth";

export default function Home() {
  return (
    <div>
      <NewHero />
      <SustainableGrowth/>
      <Clients />
      <Testimonial />
      <Results />
      <WorkingProcess />
      <ToolsSection />
      <WhatBusinessOwnersWant />
      <PricingPlans />
      <FaqAccordion />
      <CallToAction />
    </div>
  );
}
