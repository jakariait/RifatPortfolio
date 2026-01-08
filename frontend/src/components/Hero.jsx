"use client";
import React from "react";
import Link from "next/link";
import SocialIcon from "@/components/SocialIcon";
import { getName, getTitle } from "@/utils/brand";
import AnimatedList from "@/components/AnimatedList";
import TypeWriter from "@/components/TypeWriter";

const Hero = () => {
  return (
    <div id="about" className="bg-black animated-bg scroll-mt-10 pb-30 ">
      <div className="xl:container xl:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
        {/* Left Content */}
        <div className="text-white p-4 flex-1 flex flex-col justify-center gap-10">
          <div>
            <TypeWriter
              text={getName()}
              className="text-[40px] md:text-[70px] text-[#EF6C00] font-bold"
            />

            <TypeWriter
              text={getTitle()}
              className="text-[40px] md:text-[50px] text-gray-50 font-bold leading-tight"
            />
            <img
              src="/hero-img.jpeg"
              alt=""
              className={"lg:hidden pt-5 pb-5"}
            />

            <AnimatedList />
          </div>

          <div
            className={
              "flex flex-col md:flex-row gap-2 items-center  justify-center"
            }
          >
            <a
              href="https://wa.me/8801307217573"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EF6C00] px-6 py-4 rounded-xl font-bold text-white inline-flex items-center gap-2"
            >
              Contact on WhatsApp
            </a>
            <Link
              href="/ebook"
              className="bg-[#EF6C00] px-6 py-4 rounded-xl font-bold text-white inline-flex items-center gap-2"
            >
              Digital Products
            </Link>
          </div>
          <SocialIcon />
        </div>

        {/* Right Side Background Image starting from bottom */}
        <div className="hidden lg:block">
          <img src="/hero-img.jpeg" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
