"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dataIcons1 from "../../assets/Images/solution/01.svg"
import dataIcons2 from "../../assets/Images/solution/02.svg"
import dataIcons3 from "../../assets/Images/solution/03.svg"
import dataIcons4 from "../../assets/Images/solution/04.svg"
import dataIcons5 from "../../assets/Images/solution/05.svg"
import dataIcons6 from "../../assets/Images/solution/06.svg"
import dataIcons7 from "../../assets/Images/solution/07.svg"
import Image from "next/image";


const SolutionsSection = () => {
  const pagination = {
    clickable: true,
  };

  const solutionsData = [
    {
      title: "Industrial Manufacturing",
      icon: dataIcons1
    },
    {
      title: "Aerospace & Defense",
      icon: dataIcons2
    },
    {
      title: "Automotive",
      icon: dataIcons3
    },
    {
      title: "Apparel & Footwear",
      icon: dataIcons4
    },
    {
      title: "Food & Beverage",
      icon: dataIcons5
    },
    {
      title: "Distribution",
      icon: dataIcons6
    },
    {
      title: "Health Care",
      icon: dataIcons7
    },
    {
      title: "High Tech",
      icon: dataIcons5
    },

  ]
  return (
    <div className="container mx-auto">
      <p className="text-white text-4xl text-center mb-6">Solutions Spotlight for Industries</p>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={7}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={pagination}
        className="w-full min-h-48"
      >
        {
          solutionsData.map((data, index) => (
            <SwiperSlide key={index} className="h-60 ">
              <div className="text-white flex flex-col justify-center items-center !w-28">
              <Image alt="icon" src={data.icon} width={80} height={80} />
              <p className="text-center">{data.title}</p>
              </div>
            
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  );
};

export default SolutionsSection;
