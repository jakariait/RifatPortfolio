import Clients from "@/components/Clients";
import Testimonial from "@/components/Testimonials";
import ToolsSection from "@/components/ToolsSection";
import FaqAccordion from "@/components/FaqAccordion";
import PricingPlans from "@/components/PricingSection";
import CallToAction from "@/components/CallToAction";
import NewHero from "@/components/NewHero";
import SustainableGrowth from "@/components/SustainableGrowth";
import CaseStudy from "@/components/CaseStudy";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <NewHero />
      <SustainableGrowth/>
      <Clients />
      <Testimonial />
      <CaseStudy  isHomepage={true}/>
      <ToolsSection />
      <PricingPlans />
      <FaqAccordion />
      <CallToAction />
    </div>
  );
}
