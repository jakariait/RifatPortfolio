import React, { use } from "react";
import ImageComponent from "@/components/ImageComponent";
import { Building2 } from "lucide-react";

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
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Case Study Not Found</h1>
          <p>
            Sorry, we could&#39;t find the case study you&#39;re looking for.
          </p>
        </div>
      </div>
    );
  }

  const caseStudy = caseStudyData.data;

  return (
    <div className="xl:container h-screen xl:mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{caseStudy.title}</h1>

      <div className={"grid grid-cols-3 gap-4"}>
        <div className={"col-span-2"}>
          <div className="">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Key Results</h2>
              <p className="text-gray-600 whitespace-pre-wrap">
                {caseStudy.keyResults}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Description</h2>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudy.description }}
              />
            </div>
          </div>
        </div>

        <div className={"flex flex-col gap-2"}>
          <div className={"flex gap-2 text-2xl font-bold items-center"}>
            <Building2 />
            <h1>Client Details</h1>
          </div>

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

          {caseStudy.brandLogo && (
            <div className={"flex gap-2"}>
              <span className={"font-bold"}>Client:</span>
              <p>{caseStudy.brandTitle}</p>
            </div>
          )}

          {caseStudy.industry && (
            <div className={"flex gap-2"}>
              <span className={"font-bold"}>Industry:</span>
              <p>{caseStudy.industry}</p>
            </div>
          )}

          {caseStudy.founder && (
            <div className={"flex gap-2"}>
              <span className={"font-bold"}>Founder:</span>
              <p>{caseStudy.founder}</p>
            </div>
          )}

          {caseStudy.businessStarted && (
            <div className={"flex gap-2"}>
              <span className={"font-bold"}>Business Started:</span>
              <p>{caseStudy.businessStarted}</p>
            </div>
          )}

          {caseStudy.brandWebsite && (
            <a
              href={caseStudy.brandWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
