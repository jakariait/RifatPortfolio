"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  { image: "/client1.jpeg" },
  { image: "/client2.jpeg" },
  { image: "/client3.jpeg" },
  { image: "/client4.jpeg" },
  { image: "/client5.jpeg" },
  { image: "/client6.jpeg" },
  { image: "/client7.jpeg" },
  { image: "/client8.jpeg" },
  { image: "/client9.jpeg" },
];

const Testimonials = () => {
  return (
    <div  className="bg-[#1C2124] p-4 pt-10 pb-10 scroll-mt-20">
      <div className="xl:container xl:mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#EF6C00] mb-10">
          What Clients Say:
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            340: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img src={item.image} alt={`Client ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Testimonials;
