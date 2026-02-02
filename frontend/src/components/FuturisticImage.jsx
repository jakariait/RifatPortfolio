import React from "react";

export default function FuturisticImage() {
  return (
    <div className="w-2/3 md:w-full mx-auto">
      <style>{`
        @keyframes rotate-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotate-counter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .circle-1 {
          animation: rotate-clockwise 4s linear infinite;
        }

        .circle-2 {
          animation: rotate-counter 4s linear infinite;
        }
      `}</style>

      <div className="relative w-full aspect-square">
        {/* Circle Wrapper */}
        <div className="absolute inset-0 rounded-full">
          {/* Rotating Circle 1 - Clockwise */}
          <div className="circle-1 absolute inset-0 rounded-full">
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#EF6C00] border-r-[#EF6C00] box-border"
              style={{
                filter:
                  "drop-shadow(0 0 20px #EF6C00) drop-shadow(0 0 40px #EF6C00)",
              }}
            />
          </div>

          {/* Rotating Circle 2 - Counter-clockwise */}
          <div className="circle-2  absolute inset-[2.5%] rounded-full">
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent border-b-[#EF6C00] border-l-[#EF6C00] box-border"
              style={{
                filter:
                  "drop-shadow(0 0 20px #EF6C00) drop-shadow(0 0 40px #EF6C00)",
              }}
            />
          </div>

          {/* Inner Circle with Image */}
          <div className="absolute inset-[5%] rounded-full bg-[#1a1a2e]  flex justify-center items-center z-10 overflow-hidden">
            <img
              src="/hero-img-new.jpeg"
              alt=""
              className="w-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
