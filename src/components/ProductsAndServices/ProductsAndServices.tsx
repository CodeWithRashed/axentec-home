"use client"
import Image from "next/image";
import { useState } from "react";
import productBanner from "../../assets/Images/product/banner.jpeg"
import google from "../../assets/Images/product/Apple.png"
import microsoft from "../../assets/Images/product/Microsoft.png"
import robi from "../../assets/Images/product/Robi.png"
import Glyph from "../../assets/Images/product/Glyph.png"
import FindOutMore from "../Shared/FindOutMore";



const ProductsAndServices = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (tab: number) => {
    setTabIndex(tab);
  };

  const textData = [
    {
      title: "Google Workspace",
      image: google,
      description: "Unleashing Productivity, Powering Collaboration."
    },
    {
      title: "Microsoft Solutions",
      image: microsoft,
      description: "Elevate with Microsoft's Innovative Solutions."
    },
    {
      title: "Robi Secure Connect",
      image: robi,
      description: "An efficient & secured point-to-point data connectivity between mobile devices or terminals via Robi network."
    },
    {
      title: "Business Process Automation",
      image: Glyph,
      description: "Robi BPA helps organizational transformation that aims to drive efficiency, provide transparency and f"
    },
  ]

  return (
    <div className="text-white my-20 container mx-auto">
      {/* SECTION HEADER */}
      <div className="space-y-6 flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl text-center font-bold">Products & Services</h1>
        <p className="text-center w-[50%]">
          The facts of our service and solution provider can vary based on the specific company, its offerings, and its market focus.
        </p>
      </div>
      {/* TABS */}
      <div className="border-b border-[#2d2a2a] flex gap-4 justify-center items-center text-2xl">
        <button onClick={() => handleTabChange(0)} className={`${tabIndex === 0 ? "border-b-2 border-white" : "border-b-2 border-transparent"}`}>
          ICT Solutions
        </button>
        <button onClick={() => handleTabChange(1)} className={`${tabIndex === 1 ? "border-b-2 border-white" : "border-b-2 border-transparent"}`}>
          Connectivity
        </button>
        <button onClick={() => handleTabChange(2)} className={`${tabIndex === 2 ? "border-b-2 border-white" : "border-b-2 border-transparent"}`}>
          Cloud Solution
        </button>
        <button onClick={() => handleTabChange(3)} className={`${tabIndex === 3 ? "border-b-2 border-white" : "border-b-2 border-transparent"}`}>
          Data Analytics
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="overflow-hidden mt-8">
        {[1, 2, 3, 4].map((_, index) => (

          <div key={index} className={`transition-opacity overflow-hidden ${tabIndex === index ? "opacity-100 h-full w-full" : "opacity-0 w-0 h-0"} duration-500`}>
            <div className="grid grid-cols-5 gap-5">
              <div className="content col-span-2 w-full h-[80%] bg-gradient-to-tr from-[#3D0059] to-[#4D00B0] rounded-lg" >
               <div className="mt-8">
               {
                  textData.map((data, index) => (
                    <div key={index} className="flex gap-2 px-5 py-3">
                      <div className="icon h-12 min-w-12">
                        <Image alt="" src={data.image} width={48} height={48} className="h-12 w-12 object-contain"/>
                      </div>

                      <div className="content overflow-hidden">
                        <h3 className="text-xl font-bold text-white">{data.title}</h3>
                        <p className="truncate text-base text-white/80">{data.description}</p>
                      </div>

                    </div>
                  ))
                }

                <FindOutMore className="flex justify-start items-start pl-5 mt-8"/>
               </div>
              </div>
              <div className="image col-span-3 w-full h-[80%]  bg-red-500 rounded-lg" >
                <Image alt="" src={productBanner} width={800} height={800} className="object-cover w-full h-full rounded-lg" />
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductsAndServices;
