import React from "react";

const CallToAction = () => {
  return (
    <section id={"contact"} className="bg-[#111] text-white py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#EF6C00] mb-4">
          Let’s Make Your Marketing Work Smarter
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          You’ve seen what I do. 👉 Let’s turn your goals into action.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@elevatewithrfat.com"
            className="bg-[#EF6C00] hover:bg-[#d45f00] text-white font-bold py-3 px-6 rounded-md transition"
          >
            📩 Hire Me
          </a>
          <a
            href="https://wa.me/8801307217573"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EF6C00] hover:bg-[#d45f00] text-white font-bold py-3 px-6 rounded-md transition"
          >
            📞 Schedule a Call
          </a>
          <a
            href="mailto:hello@elevatewithrfat.com"
            className="bg-[#EF6C00] hover:bg-[#d45f00] text-white font-bold py-3 px-6 rounded-md transition"
          >
            🧾 Request Proposal
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
