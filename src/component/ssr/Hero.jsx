import React from 'react';

const listItems = [
  "Started my Digital Marketing career in 2019\n" +
  "Focused on performance marketing from the beginning, working across Meta Ads and Google Ads to generate measurable growth for businesses.\n",
  "Worked with diverse sectors like eCommerce, Fashion, Health, Real Estate, and Education\n" +
  "Managed full-funnel ad strategies and helped brands scale profitably with data-backed campaigns and consistent optimization.\n",
  "Completed multiple certifications in Facebook Ads, Google Ads, and Web Analytics\n" +
  "Continuously upskilled through hands-on practice and professional training to stay ahead in a rapidly evolving industry.\n",
  "Moved into a strategic role, managing ad budgets for scaling businesses and established brands\n" +
  "Handled monthly ad spends ranging from a few hundred dollars to high five figures, always optimizing for conversions and ROI.\n",
  "Shifted focus to long-term growth partnerships with brands looking for sustainable and scalable performance\n" +
  "Built systems, not just campaigns — with a deep focus on creative testing, custom audiences, and funnel-based strategies."
];



const Hero = () => {
  return (
    <div className="bg-black">
      <div className="xl:container xl:mx-auto flex flex-col md:flex-row items-stretch min-h-[600px]">
        {/* Left Content */}
        <div className="text-white p-4 flex-1 flex flex-col justify-center">
          <h1 className="text-[40px] md:text-[70px] text-[#EF6C00] font-bold">Ridwan Haque Rifat</h1>
          <h2 className="text-[40px] md:text-[50px] text-gray-50 font-bold leading-tight">
            <span className="block md:inline">Performance</span>{' '}
            <span className="block md:inline">Marketing</span>{' '}
            <span className="block md:inline">Specialist</span>
          </h2>

          <img src="/rifat black bg.png" alt="" className={"lg:hidden"}/>
          
          <ul className="mt-6 space-y-4 text-gray-300 list-disc pl-6">
            {listItems.map((item, index) => (
              <li key={index} className="text-lg md:text-xl">{item}</li>
            ))}
          </ul>
        </div>

        {/* Right Side Background Image starting from bottom */}
        <div
          className="flex-1 bg-no-repeat bg-contain bg-bottom hidden lg:block"
          style={{
            backgroundImage: `url('/rifat black bg.png')`,
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
