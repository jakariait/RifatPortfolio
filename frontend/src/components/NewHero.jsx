"use client";
import React from "react";
import { getName } from "@/utils/brand";
import SocialIcon from "@/components/SocialIcon";
import { motion } from "framer-motion";
import FuturisticImage from "@/components/FuturisticImage";
import GradientChips from "@/components/GradientChips";
import Stats from "@/components/Stats";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const leftVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 10,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const NewHero = () => {
  return (
    <div id="about" className="bg-black animated-bg scroll-mt-10 py-10 px-4 overflow-hidden">
      <div
        className={
          "grid  grid-cols-1 xl:container  xl:mx-auto md:grid-cols-3 gap-5"
        }
      >
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={"flex flex-col gap-2 col-span-2 order-last md:order-none"}
        >
          <h1 className="text-3xl text-white font-bold">Hello It's Me</h1>

          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#EF6C00] via-[#FF9F1C] to-[#FFD166] bg-clip-text text-transparent">
            {getName()}
          </h1>

          <h2 className="text-3xl text-gray-50 font-bold leading-tight">
            Paid Ads & Performance Marketing Strategist
          </h2>

          <h3 className="text-xl text-gray-50  leading-tight">
            Driving sustainable growth through data-driven paid ads, analytics,
            and scalable acquisition systems.
          </h3>

          <div className={"flex flex-col gap-6"}>
            <GradientChips />
            <Stats />

            <div
              className={
                "grid md:grid-cols-2 gap-4 items-center justify-center"
              }
            >
              <a
                href="https://wa.me/8801307217573"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-4 rounded-xl font-bold text-black inline-flex items-center justify-center gap-2
                  bg-gradient-to-r from-[#EF6C00] via-[#FF9F1C] to-[#FFD166]
                  shadow-lg hover:shadow-xl hover:scale-105
                  transition-all duration-300
                           "
              >
                Let's Book A Call
                <ArrowRight />
                <FaWhatsapp className={"w-6 h-6"} />
              </a>
              <SocialIcon />
            </div>
          </div>
        </motion.div>

        <div className="gap-4 items-center justify-center order-first md:order-none">
          {/* Right Image */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FuturisticImage />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
