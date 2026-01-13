import React from "react";
import Image from "next/image";

import metaIcon from "../../public/meta.png";
import googleIcon from "../../public/google.svg";
import tiktokIcon from "../../public/7564186_tiktok_logo_brand_icon.png";
import gtmIcon from "../../public/icons8-google-tag-manager-480.png";
import analyticsIcon from "../../public/google_analytics_image_logo_icon_168152.png";
import shopifyIcon from "../../public/shopify.png";
import woocommerceIcon from "../../public/toppng.com-woocommerce-logo-free-download-857x512.png";
import canvaIcon from "../../public/canva-icon.webp";
import chatgptIcon from "../../public/artificial-intelligence.png";
import capcutIcon from "../../public/capcut.svg";
import notionIcon from "../../public/notion.svg";
import clarityIcon from "../../public/siteIcon.png";
import lookerIcon from "../../public/looker-icon.svg";

const ToolsSection = () => {
  const images = [
    { src: metaIcon, name: "Meta", width: 100, height: 100 },
    { src: googleIcon, name: "Google", width: 80, height: 80 },
    { src: tiktokIcon, name: "TikTok", width: 90, height: 90 },
    { src: gtmIcon, name: "Google Tag Manager", width: 100, height: 100 },
    { src: analyticsIcon, name: "Google Analytics", width: 100, height: 100 },
    { src: shopifyIcon, name: "Shopify", width: 100, height: 100 },
    { src: woocommerceIcon, name: "Woo Commerce", width: 100, height: 100 },
    { src: canvaIcon, name: "Canva", width: 100, height: 100 },
    { src: chatgptIcon, name: "Chat GPT", width: 100, height: 100 },
    { src: capcutIcon, name: "Capcut", width: 100, height: 100 },
    { src: notionIcon, name: "Notion", width: 100, height: 100 },
    { src: clarityIcon, name: "Microsoft Clarity", width: 100, height: 100 },
    { src: lookerIcon, name: "Microsoft Clarity", width: 100, height: 100 },
  ];

  return (
    <section
      id={"tools"}
      className="bg-[#0a0a0a] py-10 px-5 relative overflow-hidden"
    >
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EF6C00] via-transparent to-transparent opacity-5"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>

      <div className="xl:container xl:mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-white text-sm font-semibold tracking-[0.3em] uppercase border border-[#EF6C00] border-opacity-30 px-6 py-2 rounded-full bg-[#EF6C00] bg-opacity-5 backdrop-blur-sm">
              My Tech Stack
            </span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
            Tools I Use to Drive
            <span className="block text-[#EF6C00] mt-2">Campaign Success</span>
          </h2>
          <p className="text-[#808080] text-lg md:text-xl max-w-3xl mx-auto">
            The platforms and tools that power every successful campaign
          </p>
        </div>

        {/* Display Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={image.src}
                alt={image.name}
                width={image.width}
                height={image.height}
                className="object-contain"
              />
              <p className="text-white text-sm mt-2">{image.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
