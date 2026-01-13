"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Testimonials.css";
import ImageComponent from "@/components/ImageComponent";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${apiURL}/getalltestimonial`)
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, [apiURL]);

  return (
    <div
      id={"testimonial"}
      className="bg-[#0a0a0a] relative p-4 pt-10 pb-10 scroll-mt-20"
    >
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EF6C00] via-transparent to-transparent opacity-5"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EF6C00] rounded-full opacity-10 blur-[120px]"></div>

      <div className="xl:container xl:mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#EF6C00] mb-10">
          What Clients Say:
        </h2>

        {testimonials.length > 0 && (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            rewind={true}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            breakpoints={{
              340: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={item._id || index}>
                <div className="flex justify-center items-center h-full">
                  <ImageComponent
                    imageName={item.imgSrc}
                    alt={`Client ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
