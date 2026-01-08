import Clients from "@/components/Clients";
import Testimonial from "@/components/Testimonials";
import ToolsSection from "@/components/ToolsSection";
import Results from "@/components/Results";
import FaqAccordion from "@/components/FaqAccordion";
import PricingPlans from "@/components/PricingSection";
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
      <ToolsSection />
      <PricingPlans />
      <FaqAccordion />
      <CallToAction />
    </div>
  );
}
