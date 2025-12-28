"use client";

import React, { useState } from "react";
import FunnelCalculator from "@/components/FunnelCalculator";
import ROICalculator from "@/components/ROICalculator";
import BudgetPlanner from "@/components/BudgetPlanner";
import AnimatedItem from "@/components/AnimatedItem";

const calculators = {
  funnel: { name: "Funnel Calculator", Component: FunnelCalculator },
  roi: { name: "ROI Calculator", Component: ROICalculator },
  budget: { name: "Budget Planner", Component: BudgetPlanner },
};

const Page = () => {
  const [activeCalculator, setActiveCalculator] = useState("roi");

  const ActiveComponent = calculators[activeCalculator].Component;

  return (
    <div className={"bg-black min-h-screen"}>
      <div className="text-center pt-10 px-4">
        <h1 className="text-4xl font-bold text-white">
          Marketing Tools & Calculators
        </h1>
        <p className="text-lg text-gray-300 mt-2 max-w-3xl mx-auto">
          Professional marketing calculators and tools to optimize your Facebook
          Ads performance, calculate ROI, and plan budgets for maximum
          advertising success.
        </p>
      </div>
      <div className="flex justify-center p-4 mt-8">
        <div className="flex items-center justify-center rounded-lg p-1 bg-gray-800">
          {Object.keys(calculators).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCalculator(key)}
              className={`px-3 cursor-pointer sm:px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ease-in-out ${
                activeCalculator === key
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {calculators[key].name}
            </button>
          ))}
        </div>
      </div>
      <div className="py-4">
        <AnimatedItem key={activeCalculator} index={0}>
          <ActiveComponent />
        </AnimatedItem>
      </div>
    </div>
  );
};

export default Page;
