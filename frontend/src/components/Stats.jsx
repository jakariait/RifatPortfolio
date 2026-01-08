"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const stats = [
    { label: "Brands", value: 50 },
    { label: "Industry Served", value: 7 },
    { label: "Years Experience", value: 4 },
    { label: "Ad Spend", value: 4.3, suffix: "M" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // percentage of component visible before triggering
  });

  return (
    <div ref={ref} className=" ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          return (
            <div
              key={index}
              className=" p-2 border border-[#EF6C00]  flex items-center justify-center"
            >
              <div className={`flex flex-col items-center gap-2`}>
                {" "}
                <p className="text-3xl md:text-4xl font-bold text-[#EF6C00]">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  ) : (
                    0
                  )}
                  {stat.suffix || ""}+
                </p>
                <p className=" text-gray-300">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
