"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SolutionsSection = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <div className="h-[40vh]">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={6}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={pagination}
        className="w-full h-full"
      >
        <SwiperSlide className="h-[50px] bg-red-400">Slide 1</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-green-400">Slide 2</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-yellow-400">Slide 3</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-orange-400">Slide 4</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-red-400">Slide 1</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-green-400">Slide 2</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-yellow-400">Slide 3</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-orange-400">Slide 4</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-red-400">Slide 1</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-green-400">Slide 2</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-yellow-400">Slide 3</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-orange-400">Slide 4</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-red-400">Slide 1</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-green-400">Slide 2</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-yellow-400">Slide 3</SwiperSlide>
        <SwiperSlide className="h-[50px] bg-orange-400">Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SolutionsSection;
