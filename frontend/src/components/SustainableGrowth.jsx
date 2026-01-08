export default function SustainableGrowth() {
  const strategies = [
    {
      icon: (
        <svg
          className="w-14 h-14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="12" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M9 6h6M6 9v6M9 18h6" />
        </svg>
      ),
      title: "Strategy & Media Planning",
      subtitle: "Foundation of Success",
      description:
        "Before any budget is spent, I take the time to understand your business, market, and audience. Based on that research, I build a clear media plan that outlines the right platforms, budget distribution, messaging angles, and creative direction.",
      metrics: ["ROI-Focused", "Data-Driven", "Market Insight"],
    },
    {
      icon: (
        <svg
          className="w-14 h-14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Execution & Optimization",
      subtitle: "Precision in Action",
      description:
        "Once the strategy is set, I launch and manage campaigns with a structured approach. Ads are tested, refined, and optimized continuously, with funnel-based retargeting in place to improve performance over time.",
      metrics: ["A/B Testing", "Real-Time Optimization", "Conversion Focus"],
    },
    {
      icon: (
        <svg
          className="w-14 h-14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "Analysis, Reporting & Growth",
      subtitle: "Measurable Results",
      description:
        "I review performance data regularly and turn insights into clear next steps. What works gets scaled, what doesn't gets fixed, and decisions are always aligned with long-term business growth.",
      metrics: ["Performance Tracking", "Strategic Scaling", "Growth Focused"],
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-10 px-5 relative overflow-hidden">
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EF6C00] via-transparent to-transparent opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>

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
        <div className="text-center mb-7">
          <div className="inline-block ">
            <span className="text-white text-sm font-semibold tracking-[0.3em] uppercase border border-[#EF6C00] border-opacity-30 px-6 py-2 rounded-full bg-[#EF6C00] bg-opacity-5 backdrop-blur-sm">
              My Process
            </span>
          </div>
          <h1 className="text-white mt-4 text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
            How I Drive
            <span className="block text-[#EF6C00] mt-2">
              Sustainable Growth
            </span>
          </h1>
          <p className="text-[#808080] text-lg md:text-xl max-w-3xl mx-auto ">
            A proven framework that transforms marketing spend into measurable
            business results
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="group relative bg-[#0f0f0f] border border-[#1f1f1f] rounded-3xl p-10 transition-all duration-700 hover:border-[#EF6C00] hover:border-opacity-50 hover:-translate-y-2 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EF6C00] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>

              {/* Number indicator */}
              <div className="absolute top-8 right-8 text-7xl font-bold text-[#EF6C00] opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                {index + 1}
              </div>

              {/* Icon container */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#EF6C00] to-[#FF8F00] p-[1px] group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full rounded-2xl bg-[#0a0a0a] flex items-center justify-center text-[#EF6C00]">
                    {strategy.icon}
                  </div>
                </div>

                {/* Animated ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#EF6C00] opacity-0 group-hover:opacity-30 scale-110 group-hover:scale-125 transition-all duration-700"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-[#EF6C00] transition-colors duration-300">
                    {strategy.title}
                  </h3>
                  <p className="text-[#EF6C00] text-sm font-medium tracking-wide">
                    {strategy.subtitle}
                  </p>
                </div>

                <p className="text-white leading-relaxed mb-8 text-base">
                  {strategy.description}
                </p>

                {/* Metrics tags */}
                <div className="flex flex-wrap gap-2">
                  {strategy.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-4 py-2 bg-[#1a1a1a] text-[#EF6C00] rounded-lg border border-[#2a2a2a] font-medium group-hover:border-[#EF6C00] group-hover:border-opacity-30 transition-all duration-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#EF6C00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="relative -mt-10 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] rounded-3xl p-12 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Ready to Scale Your Business?
            </h2>
            <p className="text-[#a0a0a0] text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how data-driven strategies can transform your
              marketing ROI
            </p>
            <a
              href="https://wa.me/8801307217573"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-[#EF6C00] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(239,108,0,0.4)] hover:-translate-y-1 inline-block"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8F00] to-[#EF6C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
