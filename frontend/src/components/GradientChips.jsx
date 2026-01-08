import React from "react";

const GradientChips = () => {
  const items = [
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Web Analytics",
  ];

  return (
    <div className="flex pt-3 flex-wrap gap-3">
      {items.map((item, index) => (
        <span
          key={index}
          className="
            px-4 py-2  font-bold rounded-full
            bg-gradient-to-r from-[#EF6C00] via-[#FF9F1C] to-[#FFD166]
            text-black  shadow-md
            hover:scale-105 hover:shadow-lg
            transition-all duration-300
          "
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default GradientChips;
