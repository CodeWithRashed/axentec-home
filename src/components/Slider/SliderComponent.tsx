"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Swiper.css"

export default function SliderComponent() {
  const pagination = {
    clickable: true,
    
  };
  return (
    <div>
   <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1.1}
      centeredSlides={true}
      loop={true}
      navigation
      pagination={pagination}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="h-screen w-screen"
    >
      <SwiperSlide className="h-[500px] bg-red-400">Slide 1</SwiperSlide>
      <SwiperSlide className="h-[500px] bg-green-400">Slide 2</SwiperSlide>
      <SwiperSlide className="h-[500px] bg-yellow-400">Slide 3</SwiperSlide>
      <SwiperSlide className="h-[500px] bg-orange-400">Slide 4</SwiperSlide>
    </Swiper>
    </div>
  );
}
