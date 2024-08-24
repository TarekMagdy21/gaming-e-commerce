"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "@/assets/homeSlider/image1.png";
import image2 from "@/assets/homeSlider/image2.jpg";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import "./swiper.css";
export const SliderProduct = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      autoplay={{
        delay: 4000, // Set the delay to 10 seconds
        disableOnInteraction: false, // Autoplay will continue after user interactions
      }}
      modules={[Pagination, Autoplay]}
      className="relative"
    >
      <SwiperSlide>
        <div className="relative w-full h-[25rem]">
          <Image
            src={image1}
            alt="first"
            fill
            sizes="100%"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[25rem]">
          <Image
            src={image2}
            alt="second"
            fill
            sizes="100%"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[25rem]">
          <Image
            priority
            src={image1}
            alt="first"
            fill
            sizes="100%"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[25rem]">
          <Image
            src={image2}
            alt="second"
            fill
            sizes="100%"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
