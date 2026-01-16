import React, { use } from "react";
import ImageComponent from "@/components/ImageComponent";
import { Building2, ChartNoAxesCombined } from "lucide-react";

async function getCaseStudy(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${baseUrl}/casestudy/${slug}`, {
      cache: "no-store", // Ensures data is fetched on every request, behaving like SSR
    });

    if (!res.ok) {
      console.error("Failed to fetch case study:", res.status, res.statusText);
      return null;
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching case study:", error);
    return null;
  }
}

export default function Page({ params }) {
  const { slug } = use(params);
  const caseStudyData = use(getCaseStudy(slug));

  if (!caseStudyData || !caseStudyData.success) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0a0a0a] text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Case Study Not Found</h1>
          <p className="text-gray-400">
            Sorry, we could&#39;t find the case study you&#39;re looking for.
          </p>
        </div>
      </div>
    );
  }

  const caseStudy = caseStudyData.data;

  return (
    <div className="bg-[#0a0a0a] text-white py-5 md:px-5 relative overflow-hidden">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EF6C00] via-transparent to-transparent opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#EF6C00 1px, transparent 1px), linear-gradient(90deg, #EF6C00 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="xl:container min-h-screen xl:mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-white text-sm font-semibold tracking-[0.3em] uppercase border border-[#EF6C00] border-opacity-30 px-6 py-2 rounded-full bg-[#EF6C00] bg-opacity-5 backdrop-blur-sm">
              Case Study Details
            </span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {caseStudy.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white border border-[#1f1f1f] rounded-3xl p-8">
            {/* Key Results */}
            {caseStudy.keyResults && (
              <div className="mb-10 flex flex-col items-center justify-center">
                <div className={"text-[#EF6C00] flex items-center gap-4 mb-4"}>
                  <ChartNoAxesCombined className="text-[#EF6C00]" />
                  <h2 className="text-2xl font-semibold">Key Results</h2>
                </div>
                <p className="text-black whitespace-pre-wrap text-lg">
                  {caseStudy.keyResults}
                </p>
              </div>
            )}

            <ImageComponent
              imageName={caseStudy.caseStudyThumbnail}
              altName={caseStudy.title}
              className={"pb-5 rounded-2xl"}
            />

            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 ">
                Description
              </h2>
              <div
                className="prose prose-invert max-w-none  rendered-html"
                dangerouslySetInnerHTML={{ __html: caseStudy.description }}
              />
              <div className={"text-black"}>
                {caseStudy.description}
              </div>
            </div>
          </div>

          {/* Client Details Sidebar */}
          <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-3xl p-8 flex flex-col gap-6 self-start">
            <div className={"flex gap-4 text-2xl font-bold items-center"}>
              <Building2 size={28} className="text-[#EF6C00]" />
              <h1 className="text-white">Client Details</h1>
            </div>

            {caseStudy.brandLogo && (
              <div className="w-24 h-24 mx-auto rounded-lg bg-gradient-to-br from-[#EF6C00] to-[#FF8F00] p-[1px] flex items-center justify-center">
                <div className="w-full h-full rounded-lg bg-[#0a0a0a] flex items-center justify-center p-2">
                  <ImageComponent
                    imageName={caseStudy.brandLogo}
                    altName={caseStudy.title}
                    className={"object-contain w-full h-full"}
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {caseStudy.brandTitle && (
                <div className={"flex justify-between items-center"}>
                  <span className={"font-bold text-gray-400"}>Client:</span>
                  <p className="text-right">{caseStudy.brandTitle}</p>
                </div>
              )}

              {caseStudy.industry && (
                <div className={"flex justify-between items-center"}>
                  <span className={"font-bold text-gray-400"}>Industry:</span>
                  <span className="text-xs px-3 py-1 bg-[#1a1a1a] text-[#EF6C00] rounded-md border border-[#2a2a2a] font-medium">
                    {caseStudy.industry}
                  </span>
                </div>
              )}

              {caseStudy.founder && (
                <div className={"flex justify-between items-center"}>
                  <span className={"font-bold text-gray-400"}>Founder:</span>
                  <p className="text-right">{caseStudy.founder}</p>
                </div>
              )}

              {caseStudy.businessStarted && (
                <div className={"flex justify-between items-center"}>
                  <span className={"font-bold text-gray-400"}>Since:</span>
                  <p className="text-right">{caseStudy.businessStarted}</p>
                </div>
              )}
            </div>

            {caseStudy.brandWebsite && (
              <a
                href={caseStudy.brandWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-sm font-semibold text-white text-center mt-4"
              >
                <span className="relative z-10 px-5 py-3 bg-[#EF6C00] rounded-xl transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(239,108,0,0.3)] w-full block">
                  Visit Website
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
