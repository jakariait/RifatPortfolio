import Navbar from "@/component/csr/Navbar";
import Hero from "@/component/ssr/Hero";
import Services from "@/component/ssr/Services";
import Clients from "@/component/ssr/Clients";
import Testimonial from "@/component/ssr/Testimonials";


export default function Home() {
  return (
   <div>
     <Navbar/>
     <Hero/>
     <Services/>
     <Clients/>
     <Testimonial/>
   </div>
  );
}
