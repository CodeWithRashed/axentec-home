"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";
import Image from "next/image";

//BANNER IMAGES
import bannerImage1 from "../../assets/Images/hero/01.jpg";
import bannerImage2 from "../../assets/Images/hero/02.jpg";
import bannerImage3 from "../../assets/Images/hero/03.jpg";

export default function SliderComponent() {
  const PaginationOptions = {
    clickable: true,
    type: "bullets",
    bulletClass: "swiper-custom-bullet",
    bulletActiveClass: "swiper-custom-bullet-active",
  };
  return (
    <div className="container mx-auto overflow-hidden">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1.05}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{
          // type: "bullets",
          // bulletClass: "swiper-custom-bullet",
          // bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}

        className="h-screen w-screen overflow-hidden"
      >
        <SwiperSlide className="">
          <div className="w-full h-full relative">
            <Image alt="banner-image" src={bannerImage1} fill className="object-cover" />
            {/* CONTENT  */}
            <div className="bg-red-400 left-0 top-60 text-white absolute">
              <h1 className="text-3xl">Own The Future</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae voluptates adipisci sit voluptate veritatis ab iste earum ullam quia dolorem?</p>
              <a href="#">Find Out More</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-full">
            <Image alt="banner-image" src={bannerImage2} fill className="object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-full">
            <Image alt="banner-image" src={bannerImage3} fill className="object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
