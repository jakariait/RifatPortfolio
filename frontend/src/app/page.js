import Navbar from "@/component/csr/Navbar";
import Hero from "@/component/ssr/Hero";
import Services from "@/component/ssr/Services";
import Clients from "@/component/ssr/Clients";
import Testimonial from "@/component/ssr/Testimonials";
import WorkingProcess from "@/component/ssr/WorkingProcess";
import ToolsSection from "@/component/ssr/ToolsSection";
import Results from "@/component/ssr/Results";
import Footer from "@/component/ssr/Footer";
import FaqAccordion from "@/component/csr/FaqAccordion";
import PricingPlans from "@/component/ssr/PricingSection";
import WhatBusinessOwnersWant from "@/component/ssr/WhatBusinessOwnersWant";
import CallToAction from "@/component/ssr/CallToAction";
import ScrollToTop from "@/component/csr/ScrollToTop";
import GTMPageView from "@/component/csr/GTMPageView";
import WhatsAppButton from "@/component/csr/WhatsAppButton";
import Stats from "@/component/csr/Stats";

export default function Home() {
	return (
		<div>
			<GTMPageView />
			<Navbar />
			<Hero />
			<Stats />
			<Services />
			<Clients />
			<Testimonial />
			<Results />
			<WorkingProcess />
			<ToolsSection />
			<WhatBusinessOwnersWant />
			<PricingPlans />
			<FaqAccordion />
			<CallToAction />
			<Footer />
			<ScrollToTop />
			<WhatsAppButton />
		</div>
	);
}
