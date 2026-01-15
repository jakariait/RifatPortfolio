"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageComponent from "@/components/ImageComponent";
import { ChartNoAxesCombined } from "lucide-react";

// Fetch data on the client
async function getCaseStudies() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${apiUrl}/casestudy`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch case studies:", error);
    return { success: false, message: error.message, data: [] };
  }
}

const CaseStudy = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchCaseStudies = async () => {
      setLoading(true);
      const result = await getCaseStudies();
      if (result.success) {
        setCaseStudies(result.data);
      } else {
        setError(result.message);
      }
      setLoading(false);
    };

    fetchCaseStudies();
  }, []);

  // Pagination logic
  const totalCaseStudies = caseStudies.length;
  const totalPages = Math.ceil(totalCaseStudies / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCaseStudies = caseStudies.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      id={"case-study"}
      className="bg-[#0a0a0a] py-10 px-5 relative overflow-hidden"
    >
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EF6C00] via-transparent to-transparent opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>

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
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-7"
        >
          <div className="inline-block ">
            <span className="text-white text-sm font-semibold tracking-[0.3em] uppercase border border-[#EF6C00] border-opacity-30 px-6 py-2 rounded-full bg-[#EF6C00] bg-opacity-5 backdrop-blur-sm">
              Our Work
            </span>
          </div>
          <h1 className="text-white mt-4 text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
            Our Case Studies
          </h1>
          <p className="text-[#808080] text-lg md:text-xl max-w-3xl mx-auto ">
            A showcase of our {totalCaseStudies} successful partnerships and
            measurable results.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto gap-6 mb-10">
          {currentCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-[#0f0f0f] border border-[#1f1f1f] rounded-3xl px-5 py-10 transition-all duration-700 hover:border-[#EF6C00] hover:border-opacity-50 hover:-translate-y-2 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EF6C00] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>

              {/*Case Study Thumbnail*/}
              {caseStudy.caseStudyThumbnail && (
                <ImageComponent
                  imageName={caseStudy.caseStudyThumbnail}
                  alt={caseStudy.name}
                  className={"aspect-square object-contain pb-5"}
                />
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-[#EF6C00] transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                </div>

                {caseStudy.keyResults && (
                  <div className={"flex flex-col gap-4"}>
                    <div className={"text-white flex items-center gap-4"}>
                      <ChartNoAxesCombined />
                      <h2>Key Result</h2>
                    </div>

                    <p className="text-white leading-relaxed mb-8 text-base">
                      {caseStudy.keyResults}
                    </p>
                  </div>
                )}

                {/* Brand Logo and Industry Chip */}
                <div className="flex items-center justify-between gap-4 mb-8">
                  {caseStudy.brandLogo && (
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#EF6C00] to-[#FF8F00] p-[1px] flex items-center justify-center">
                      <div className="w-full h-full rounded-lg bg-[#0a0a0a] flex items-center justify-center p-1">
                        <ImageComponent
                          imageName={caseStudy.brandLogo}
                          altName={caseStudy.title}
                          className={"object-contain w-full h-full"}
                        />
                      </div>
                    </div>
                  )}
                  {caseStudy.industry && (
                    <span className="text-xs px-4 py-2 bg-[#1a1a1a] text-[#EF6C00] rounded-lg border border-[#2a2a2a] font-medium">
                      {caseStudy.industry}
                    </span>
                  )}
                </div>

                <Link
                  href={`/casestudies/${caseStudy.slug}`}
                  className={"flex items-center justify-center"}
                >
                  <div className="group relative inline-block text-sm font-semibold text-white">
                    <span className="relative z-10 px-5 py-3 bg-[#EF6C00] rounded-xl transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(239,108,0,0.3)] ">
                      Read Case Study
                    </span>
                  </div>
                </Link>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#EF6C00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-[#EF6C00] text-white font-semibold rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_10px_30px_rgba(239,108,0,0.3)]"
            >
              Previous
            </button>
            <span className="text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-[#EF6C00] text-white font-semibold rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_10px_30px_rgba(239,108,0,0.3)]"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;
