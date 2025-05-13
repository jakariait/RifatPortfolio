import Navbar from "@/component/csr/Navbar";
import Hero from "@/component/ssr/Hero";
import Services from "@/component/ssr/Services";
import Clients from "@/component/ssr/Clients";
import Testimonial from "@/component/ssr/Testimonials";
import WorkingProcess from "@/component/ssr/WorkingProcess";
import ToolsSection from "@/component/ssr/ToolsSection";
import ProductGallery from "@/component/csr/ProductGallery";

export default function Home() {
  const images = [
    "/result1.jpeg",
    "/result2.jpeg",
    "/result3.jpeg",
    "/result4.jpeg",
    "/result5.jpeg",
    "/result6.jpeg",
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Testimonial />
      <WorkingProcess />
      <ToolsSection />
      <div
        className="md:flex justify-center hidden bg-black  "
        style={{
          backgroundImage: "url('/certificate-bg.png')", // Replace with the path to your background image
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
      >
        <ProductGallery images={images} />
      </div>
      <div
        className={"md:hidden bg-black"}
        style={{
          backgroundImage: "url('/certificate-bg.png')", // Replace with the path to your background image
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
      >
        <ProductGallery images={images} />
      </div>
    </div>
  );
}
