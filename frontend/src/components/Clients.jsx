
"use client";

import { useEffect, useState } from "react";
import ImageComponent from "@/components/ImageComponent";
import AnimatedItem from "@/components/AnimatedItem";

const Clients = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      const apiURL = process.env.NEXT_PUBLIC_API_URL;
      try {
        const res = await fetch(`${apiURL}/getallcarousel`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch brands");
        const data = await res.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  if (loading) {
    return (
      <div
        id="testimonial"
        className="bg-[#0a0a0a] py-10 px-5 scroll-mt-20 relative overflow-hidden min-h-[400px]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#EF6C00] via-transparent to-transparent opacity-5"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#EF6C00 1px, transparent 1px), linear-gradient(90deg, #EF6C00 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div className="xl:container xl:mx-auto relative z-10 flex items-center justify-center min-h-[300px]">
          <div className="text-[#EF6C00] text-lg animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="testimonial"
      className="bg-[#0a0a0a] py-10 px-5 scroll-mt-20 relative overflow-hidden"
    >
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EF6C00] via-transparent to-transparent opacity-5"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#EF6C00 1px, transparent 1px), linear-gradient(90deg, #EF6C00 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="xl:container xl:mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-white text-sm font-semibold tracking-[0.3em] uppercase border border-[#EF6C00] border-opacity-30 px-6 py-2 rounded-full bg-[#EF6C00] bg-opacity-5 backdrop-blur-sm">
              Trusted By
            </span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
            Clients I've Had the
            <span className="block text-[#EF6C00] mt-2">Privilege to Work With</span>
          </h2>
          <p className="text-[#808080] text-lg md:text-xl max-w-3xl mx-auto">
            Partnering with brands across industries to deliver measurable results
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {brands.map((brand, index) => (
            <AnimatedItem
              key={index}
              index={index}
              className="group relative bg-[#0f0f0f] border border-[#1f1f1f] rounded-2xl p-6 transition-all duration-500 hover:border-[#EF6C00] hover:border-opacity-50 hover:-translate-y-2 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EF6C00] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              {/* Image container with gradient border */}
              <div className="relative">
                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-[#EF6C00] to-[#FF8F00] p-[2px] group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-xl bg-[#0a0a0a] overflow-hidden">
                    <ImageComponent
                      imageName={brand.imgSrc}
                      alt={`Client ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Animated ring */}
                <div className="absolute inset-0 rounded-xl border-2 border-[#EF6C00] opacity-0 group-hover:opacity-30 scale-105 group-hover:scale-110 transition-all duration-500"></div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#EF6C00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </AnimatedItem>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block relative">
            <a
              href="https://wa.me/8801307217573"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[#EF6C00] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(239,108,0,0.4)] hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <span className="relative z-10">Work With Me</span>
              <svg
                className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8F00] to-[#EF6C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          <p className="text-[#808080] text-sm mt-4">
            Let's discuss how I can help grow your business
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;