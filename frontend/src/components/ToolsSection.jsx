import React from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaPaintBrush,
  FaWrench,
  FaLaptopCode,
  FaSass,
  FaFacebook,
  FaGoogle,
  FaTiktok,
  FaLinkedin,
  FaLink,
  FaVideo,
  FaLightbulb,
  FaChartBar,
  FaFileAlt,
  FaExchangeAlt,
  FaFileExcel,
  FaWordpress,
  FaShopify,
  FaFunnelDollar,
  FaQuestionCircle,
  FaSearch,
} from "react-icons/fa";
import { SiCanva, SiWebflow, SiAdobe } from "react-icons/si";

import AnimatedItem from "@/components/AnimatedItem";

const sections = [
  {
    icon: <FaBullhorn className="text-[50px] text-blue-500 mb-3" />,
    title: "Ad Platforms",
    items: [
      {
        name: "Meta Ads Manager (Facebook & Instagram)",
        icon: <FaFacebook className="w-4 h-4 text-blue-600" />,
      },
      {
        name: "Google Ads",
        icon: <FaGoogle className="w-4 h-4 text-red-500" />,
      },
      {
        name: "TikTok Ads Manager",
        icon: <FaTiktok className="w-4 h-4 text-black" />,
      },
      {
        name: "LinkedIn Ads (Perfect for B2B clients)",
        icon: <FaLinkedin className="w-4 h-4 text-blue-700" />,
      },
    ],
  },
  {
    icon: <FaChartLine className="text-[50px] text-green-500 mb-3" />,
    title: "Analytics & Tracking",
    items: [
      {
        name: "Google Analytics 4 (GA4)",
        icon: <FaGoogle className="w-4 h-4 text-yellow-500" />,
      },
      {
        name: "Meta Pixel",
        icon: <FaFacebook className="w-4 h-4 text-blue-600" />,
      },
      {
        name: "Google Tag Manager",
        icon: <FaGoogle className="w-4 h-4 text-blue-500" />,
      },
      { name: "UTM Links", icon: <FaLink className="w-4 h-4 text-gray-500" /> },
    ],
  },
  {
    icon: <FaPaintBrush className="text-[50px] text-pink-500 mb-3" />,
    title: "Creative Tools",
    items: [
      {
        name: "Canva (quick designs & social content)",
        icon: <SiCanva className="w-4 h-4 text-blue-400" />,
      },
      {
        name: "CapCut (video editing for ads)",
        icon: <FaVideo className="w-4 h-4 text-black" />,
      },
      {
        name: "Adobe Photoshop (advanced design work)",
        icon: <SiAdobe className="w-4 h-4 text-red-600" />,
      },
      {
        name: "ChatGPT (for creative ad copy ideas)",
        icon: <FaLightbulb className="w-4 h-4 text-yellow-400" />,
      },
    ],
  },
  {
    icon: <FaWrench className="text-[50px] text-yellow-500 mb-3" />,
    title: "Optimization & Reporting",
    items: [
      {
        name: "Google Looker Studio (for interactive dashboards)",
        icon: <FaChartBar className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "Meta Ads Reporting",
        icon: <FaFileAlt className="w-4 h-4 text-gray-700" />,
      },
      {
        name: "A/B Testing Tools (like Meta’s built-in testing features)",
        icon: <FaExchangeAlt className="w-4 h-4 text-green-500" />,
      },
      {
        name: "Google Sheets / Excel (manual tracking, custom reports)",
        icon: <FaFileExcel className="w-4 h-4 text-green-700" />,
      },
    ],
  },
  {
    icon: <FaLaptopCode className="text-[50px] text-blue-500 mb-3" />,
    title: "Website & Landing Page Builders",
    items: [
      {
        name: "WordPress",
        icon: <FaWordpress className="w-4 h-4 text-blue-600" />,
      },
      {
        name: "Webflow",
        icon: <SiWebflow className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "Shopify – For eCommerce stores",
        icon: <FaShopify className="w-4 h-4 text-green-600" />,
      },
      {
        name: "ClickFunnels / Systeme.io / LeadPages – For high-converting funnels",
        icon: <FaFunnelDollar className="w-4 h-4 text-yellow-600" />,
      },
    ],
  },
  {
    icon: <FaSass className="text-[50px] text-blue-500 mb-3" />,
    title: "Market Research & Planning",
    items: [
      {
        name: "Google Trends – To explore trending topics and keywords",
        icon: <FaChartLine className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "AnswerThePublic – For finding customer questions and content ideas",
        icon: <FaQuestionCircle className="w-4 h-4 text-orange-500" />,
      },
      {
        name: "SimilarWeb – To analyze competitors’ traffic sources",
        icon: <FaSearch className="w-4 h-4 text-purple-500" />,
      },
    ],
  },
];

const ToolsSection = () => {
  return (
    <section className="bg-[#1C2124] p-4 pt-10 pb-10">
      <div className="xl:container xl:mx-auto">
        <div className={"text-center"}>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#EF6C00]">
            Tools I Use:
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            The platforms and tools that power every successful campaign.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {sections.map((section, index) => (
            <AnimatedItem
              key={index}
              index={index}
              className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition"
            >
              <div className="flex flex-col items-center justify-center">
                {section.icon}
                <h3 className="text-xl text-black font-semibold mb-3">
                  {section.title}
                </h3>
                <ul className=" space-y-2 text-gray-700 ">
                  {section.items.map((item, i) => (
                    <li key={i} className={"flex items-center gap-2"}>
                      {item.icon}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
