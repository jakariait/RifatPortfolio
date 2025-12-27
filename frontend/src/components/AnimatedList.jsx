"use client";
import { motion } from "framer-motion";

export default function AnimatedList() {
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
      "Built systems, not just campaigns — with a deep focus on creative testing, custom audiences, and funnel-based strategies.",
  ];
  return (
    <motion.ul className="space-y-4 mt-6 text-gray-300 list-disc pl-6">
      {listItems.map((item, index) => {
        const fromLeft = index % 2 === 0;

        return (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-lg md:text-xl"
          >
            {item}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
