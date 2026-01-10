// import React from "react";
// import {
//   FaBullhorn,
//   FaChartLine,
//   FaPaintBrush,
//   FaWrench,
//   FaLaptopCode,
//   FaSass,
//   FaFacebook,
//   FaGoogle,
//   FaTiktok,
//   FaLinkedin,
//   FaLink,
//   FaVideo,
//   FaLightbulb,
//   FaChartBar,
//   FaFileAlt,
//   FaExchangeAlt,
//   FaFileExcel,
//   FaWordpress,
//   FaShopify,
//   FaFunnelDollar,
//   FaQuestionCircle,
//   FaSearch,
// } from "react-icons/fa";
// import { SiCanva, SiWebflow, SiAdobe } from "react-icons/si";
//
// import AnimatedItem from "@/components/AnimatedItem";
//
// const sections = [
//   {
//     icon: <FaBullhorn className="text-[50px] text-blue-500 mb-3" />,
//     title: "Ad Platforms",
//     items: [
//       {
//         name: "Meta Ads Manager (Facebook & Instagram)",
//         icon: <FaFacebook className="w-4 h-4 text-blue-600" />,
//       },
//       {
//         name: "Google Ads",
//         icon: <FaGoogle className="w-4 h-4 text-red-500" />,
//       },
//       {
//         name: "TikTok Ads Manager",
//         icon: <FaTiktok className="w-4 h-4 text-black" />,
//       },
//       {
//         name: "LinkedIn Ads (Perfect for B2B clients)",
//         icon: <FaLinkedin className="w-4 h-4 text-blue-700" />,
//       },
//     ],
//   },
//   {
//     icon: <FaChartLine className="text-[50px] text-green-500 mb-3" />,
//     title: "Analytics & Tracking",
//     items: [
//       {
//         name: "Google Analytics 4 (GA4)",
//         icon: <FaGoogle className="w-4 h-4 text-yellow-500" />,
//       },
//       {
//         name: "Meta Pixel",
//         icon: <FaFacebook className="w-4 h-4 text-blue-600" />,
//       },
//       {
//         name: "Google Tag Manager",
//         icon: <FaGoogle className="w-4 h-4 text-blue-500" />,
//       },
//       { name: "UTM Links", icon: <FaLink className="w-4 h-4 text-gray-500" /> },
//     ],
//   },
//   {
//     icon: <FaPaintBrush className="text-[50px] text-pink-500 mb-3" />,
//     title: "Creative Tools",
//     items: [
//       {
//         name: "Canva (quick designs & social content)",
//         icon: <SiCanva className="w-4 h-4 text-blue-400" />,
//       },
//       {
//         name: "CapCut (video editing for ads)",
//         icon: <FaVideo className="w-4 h-4 text-black" />,
//       },
//       {
//         name: "Adobe Photoshop (advanced design work)",
//         icon: <SiAdobe className="w-4 h-4 text-red-600" />,
//       },
//       {
//         name: "ChatGPT (for creative ad copy ideas)",
//         icon: <FaLightbulb className="w-4 h-4 text-yellow-400" />,
//       },
//     ],
//   },
//   {
//     icon: <FaWrench className="text-[50px] text-yellow-500 mb-3" />,
//     title: "Optimization & Reporting",
//     items: [
//       {
//         name: "Google Looker Studio (for interactive dashboards)",
//         icon: <FaChartBar className="w-4 h-4 text-blue-500" />,
//       },
//       {
//         name: "Meta Ads Reporting",
//         icon: <FaFileAlt className="w-4 h-4 text-gray-700" />,
//       },
//       {
//         name: "A/B Testing Tools (like Meta’s built-in testing features)",
//         icon: <FaExchangeAlt className="w-4 h-4 text-green-500" />,
//       },
//       {
//         name: "Google Sheets / Excel (manual tracking, custom reports)",
//         icon: <FaFileExcel className="w-4 h-4 text-green-700" />,
//       },
//     ],
//   },
//   {
//     icon: <FaLaptopCode className="text-[50px] text-blue-500 mb-3" />,
//     title: "Website & Landing Page Builders",
//     items: [
//       {
//         name: "WordPress",
//         icon: <FaWordpress className="w-4 h-4 text-blue-600" />,
//       },
//       {
//         name: "Webflow",
//         icon: <SiWebflow className="w-4 h-4 text-blue-500" />,
//       },
//       {
//         name: "Shopify – For eCommerce stores",
//         icon: <FaShopify className="w-4 h-4 text-green-600" />,
//       },
//       {
//         name: "ClickFunnels / Systeme.io / LeadPages – For high-converting funnels",
//         icon: <FaFunnelDollar className="w-4 h-4 text-yellow-600" />,
//       },
//     ],
//   },
//   {
//     icon: <FaSass className="text-[50px] text-blue-500 mb-3" />,
//     title: "Market Research & Planning",
//     items: [
//       {
//         name: "Google Trends – To explore trending topics and keywords",
//         icon: <FaChartLine className="w-4 h-4 text-blue-500" />,
//       },
//       {
//         name: "AnswerThePublic – For finding customer questions and content ideas",
//         icon: <FaQuestionCircle className="w-4 h-4 text-orange-500" />,
//       },
//       {
//         name: "SimilarWeb – To analyze competitors’ traffic sources",
//         icon: <FaSearch className="w-4 h-4 text-purple-500" />,
//       },
//     ],
//   },
// ];
//
// const ToolsSection = () => {
//   return (
//     <section className="bg-[#1C2124] p-4 pt-10 pb-10">
//       <div className="xl:container xl:mx-auto">
//         <div className={"text-center"}>
//           <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#EF6C00]">
//             Tools I Use:
//           </h2>
//           <p className="text-lg text-gray-300 mb-12">
//             The platforms and tools that power every successful campaign.
//           </p>
//         </div>
//
//         <div className="grid md:grid-cols-2 gap-4">
//           {sections.map((section, index) => (
//             <AnimatedItem
//               key={index}
//               index={index}
//               className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition"
//             >
//               <div className="flex flex-col items-center justify-center">
//                 {section.icon}
//                 <h3 className="text-xl text-black font-semibold mb-3">
//                   {section.title}
//                 </h3>
//                 <ul className=" space-y-2 text-gray-700 ">
//                   {section.items.map((item, i) => (
//                     <li key={i} className={"flex items-center gap-2"}>
//                       {item.icon}
//                       {item.name}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </AnimatedItem>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default ToolsSection;
//
//
// import React from "react";
// import {
//   FaBullhorn,
//   FaChartLine,
//   FaPaintBrush,
//   FaWrench,
//   FaLaptopCode,
//   FaSass,
//   FaFacebook,
//   FaGoogle,
//   FaTiktok,
//   FaLinkedin,
//   FaLink,
//   FaVideo,
//   FaLightbulb,
//   FaChartBar,
//   FaFileAlt,
//   FaExchangeAlt,
//   FaFileExcel,
//   FaWordpress,
//   FaShopify,
//   FaFunnelDollar,
//   FaQuestionCircle,
//   FaSearch,
// } from "react-icons/fa";
// import { SiCanva, SiWebflow, SiAdobe } from "react-icons/si";
//
// const sections = [
//   {
//     icon: <FaBullhorn className="text-5xl text-blue-500" />,
//     title: "Ad Platforms",
//     gradient: "from-blue-500/10 to-purple-500/10",
//     items: [
//       {
//         name: "Meta Ads Manager (Facebook & Instagram)",
//         icon: <FaFacebook className="w-4 h-4 text-blue-600" />,
//       },
//       {
//         name: "Google Ads",
//         icon: <FaGoogle className="w-4 h-4 text-red-500" />,
//       },
//       {
//         name: "TikTok Ads Manager",
//         icon: <FaTiktok className="w-4 h-4 text-gray-900" />,
//       },
//       {
//         name: "LinkedIn Ads (Perfect for B2B clients)",
//         icon: <FaLinkedin className="w-4 h-4 text-blue-700" />,
//       },
//     ],
//   },
//   {
//     icon: <FaChartLine className="text-5xl text-green-500" />,
//     title: "Analytics & Tracking",
//     gradient: "from-green-500/10 to-emerald-500/10",
//     items: [
//       {
//         name: "Google Analytics 4 (GA4)",
//         icon: <FaGoogle className="w-4 h-4 text-yellow-500" />,
//       },
//       {
//         name: "Meta Pixel",
//         icon: <FaFacebook className="w-4 h-4 text-blue-600" />,
//       },
//       {
//         name: "Google Tag Manager",
//         icon: <FaGoogle className="w-4 h-4 text-blue-500" />,
//       },
//       { name: "UTM Links", icon: <FaLink className="w-4 h-4 text-gray-500" /> },
//     ],
//   },
//   {
//     icon: <FaPaintBrush className="text-5xl text-pink-500" />,
//     title: "Creative Tools",
//     gradient: "from-pink-500/10 to-rose-500/10",
//     items: [
//       {
//         name: "Canva (quick designs & social content)",
//         icon: <SiCanva className="w-4 h-4 text-blue-400" />,
//       },
//       {
//         name: "CapCut (video editing for ads)",
//         icon: <FaVideo className="w-4 h-4 text-gray-900" />,
//       },
//       {
//         name: "Adobe Photoshop (advanced design work)",
//         icon: <SiAdobe className="w-4 h-4 text-red-600" />,
//       },
//       {
//         name: "ChatGPT (for creative ad copy ideas)",
//         icon: <FaLightbulb className="w-4 h-4 text-yellow-400" />,
//       },
//     ],
//   },
//   {
//     icon: <FaWrench className="text-5xl text-amber-500" />,
//     title: "Optimization & Reporting",
//     gradient: "from-amber-500/10 to-orange-500/10",
//     items: [
//       {
//         name: "Google Looker Studio (for interactive dashboards)",
//         icon: <FaChartBar className="w-4 h-4 text-blue-500" />,
//       },
//       {
//         name: "Meta Ads Reporting",
//         icon: <FaFileAlt className="w-4 h-4 text-gray-700" />,
//       },
//       {
//         name: "A/B Testing Tools (like Meta's built-in testing features)",
//         icon: <FaExchangeAlt className="w-4 h-4 text-green-500" />,
//       },
//       {
//         name: "Google Sheets / Excel (manual tracking, custom reports)",
//         icon: <FaFileExcel className="w-4 h-4 text-green-700" />,
//       },
//     ],
//   },
//   {
//     icon: <FaLaptopCode className="text-5xl text-indigo-500" />,
//     title: "Website & Landing Page Builders",
//     gradient: "from-indigo-500/10 to-blue-500/10",
//     items: [
//       {
//         name: "WordPress",
//         icon: <FaWordpress className="w-4 h-4 text-blue-600" />,
//       },
//       {
//         name: "Webflow",
//         icon: <SiWebflow className="w-4 h-4 text-blue-500" />,
//       },
//       {
//         name: "Shopify – For eCommerce stores",
//         icon: <FaShopify className="w-4 h-4 text-green-600" />,
//       },
//       {
//         name: "ClickFunnels / Systeme.io / LeadPages – For high-converting funnels",
//         icon: <FaFunnelDollar className="w-4 h-4 text-yellow-600" />,
//       },
//     ],
//   },
//   {
//     icon: <FaSass className="text-5xl text-violet-500" />,
//     title: "Market Research & Planning",
//     gradient: "from-violet-500/10 to-purple-500/10",
//     items: [
//       {
//         name: "Google Trends – To explore trending topics and keywords",
//         icon: <FaChartLine className="w-4 h-4 text-blue-500" />,
//       },
//       {
//         name: "AnswerThePublic – For finding customer questions and content ideas",
//         icon: <FaQuestionCircle className="w-4 h-4 text-orange-500" />,
//       },
//       {
//         name: "SimilarWeb – To analyze competitors' traffic sources",
//         icon: <FaSearch className="w-4 h-4 text-purple-500" />,
//       },
//     ],
//   },
// ];
//
// const ToolsSection = () => {
//   return (
//     <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 py-20 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
//       </div>
//
//       <div className="xl:container xl:mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <div className="inline-block mb-4">
//             <span className="text-sm font-semibold tracking-wider text-orange-400 uppercase bg-orange-400/10 px-4 py-2 rounded-full border border-orange-400/20">
//               My Tech Stack
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
//             Tools I Use
//           </h2>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//             The platforms and tools that power every successful campaign
//           </p>
//         </div>
//
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {sections.map((section, index) => (
//             <div
//               key={index}
//               className={`group relative bg-gradient-to-br ${section.gradient} backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10`}
//             >
//               {/* Glassmorphism overlay */}
//               <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-md"></div>
//
//               <div className="relative z-10">
//                 <div className="flex flex-col items-center text-center mb-6">
//                   <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                     {section.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-1">
//                     {section.title}
//                   </h3>
//                   <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//
//                 <ul className="space-y-3 text-left">
//                   {section.items.map((item, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-200 group/item"
//                     >
//                       <span className="mt-1 flex-shrink-0 opacity-70 group-hover/item:opacity-100 transition-opacity">
//                         {item.icon}
//                       </span>
//                       <span className="text-sm leading-relaxed">{item.name}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//
//               {/* Hover glow effect */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default ToolsSection;

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

const sections = [
  {
    icon: <FaBullhorn className="text-5xl" />,
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
        icon: <FaTiktok className="w-4 h-4 text-white" />,
      },
      {
        name: "LinkedIn Ads (Perfect for B2B clients)",
        icon: <FaLinkedin className="w-4 h-4 text-blue-700" />,
      },
    ],
  },
  {
    icon: <FaChartLine className="text-5xl" />,
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
      { name: "UTM Links", icon: <FaLink className="w-4 h-4 text-gray-400" /> },
    ],
  },
  {
    icon: <FaPaintBrush className="text-5xl" />,
    title: "Creative Tools",
    items: [
      {
        name: "Canva (quick designs & social content)",
        icon: <SiCanva className="w-4 h-4 text-blue-400" />,
      },
      {
        name: "CapCut (video editing for ads)",
        icon: <FaVideo className="w-4 h-4 text-white" />,
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
    icon: <FaWrench className="text-5xl" />,
    title: "Optimization & Reporting",
    items: [
      {
        name: "Google Looker Studio (for interactive dashboards)",
        icon: <FaChartBar className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "Meta Ads Reporting",
        icon: <FaFileAlt className="w-4 h-4 text-gray-400" />,
      },
      {
        name: "A/B Testing Tools (like Meta's built-in testing features)",
        icon: <FaExchangeAlt className="w-4 h-4 text-green-500" />,
      },
      {
        name: "Google Sheets / Excel (manual tracking, custom reports)",
        icon: <FaFileExcel className="w-4 h-4 text-green-700" />,
      },
    ],
  },
  {
    icon: <FaLaptopCode className="text-5xl" />,
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
    icon: <FaSass className="text-5xl" />,
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
        name: "SimilarWeb – To analyze competitors' traffic sources",
        icon: <FaSearch className="w-4 h-4 text-purple-500" />,
      },
    ],
  },
];

const ToolsSection = () => {
  return (
    <section id={"tools"} className="bg-[#0a0a0a] min-h-screen py-10 px-5 relative overflow-hidden">
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EF6C00] via-transparent to-transparent opacity-5"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>

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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative bg-[#0f0f0f] border border-[#1f1f1f] rounded-3xl p-8 transition-all duration-700 hover:border-[#EF6C00] hover:border-opacity-50 hover:-translate-y-2 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EF6C00] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>

              {/* Number indicator */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-[#EF6C00] opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                {index + 1}
              </div>

              {/* Icon container */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#EF6C00] to-[#FF8F00] p-[1px] group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full rounded-2xl bg-[#0a0a0a] flex items-center justify-center text-[#EF6C00]">
                    {section.icon}
                  </div>
                </div>

                {/* Animated ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#EF6C00] opacity-0 group-hover:opacity-30 scale-110 group-hover:scale-125 transition-all duration-700"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-white text-xl font-bold mb-6 group-hover:text-[#EF6C00] transition-colors duration-300">
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#a0a0a0] hover:text-white transition-colors duration-200 group/item"
                    >
                      <span className="mt-1 flex-shrink-0 opacity-70 group-hover/item:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                      <span className="text-sm leading-relaxed">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#EF6C00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;