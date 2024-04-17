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
const bannerImages = [{
  image: bannerImage1,
},
{
  image: bannerImage2,
},
{
  image: bannerImage3,
}]

  return (
    <div className="w-screen mx-auto overflow-hidden">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1.07}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{
          clickable: true,
        }}

        className="h-screen w-screen overflow-hidden"
      >

        {
          bannerImages.map((image, index) =>(
            <SwiperSlide key={index} className="">
            <div className="w-full h-full relative">
              <Image alt="banner-image" src={image.image} fill className="object-cover absolute w-full h-full top-0 left-0" />
              {/* CONTENT  */}
              <div className="text-white z-30 relative h-full w-full flex justify-center items-start flex-col">
                <div className="w-[50%] space-y-4 ml-8">
                  <h1 className="text-5xl">Own The Future</h1>
                  <p>How can network modernization help communications service providers in their sustainability strategies?</p>
                  <div>
                    <a href="#" className="text-2xl">Find Out More <span className="bg-white text-black px-1 py-0">{`>`}</span></a>
  
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ))
        }
      
      
      
       
      </Swiper>
    </div>
  );
}
