"use client"
import { useState } from "react";

const ProductsAndServices = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (tab: number) => {
    setTabIndex(tab);
  };

  return (
    <div className="text-white my-20">
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
      <div>
        <div className={`bg-red-500 transition-opacity ${tabIndex === 0 ? "opacity-100 w-20 h-20" : "opacity-0 w-0 h-0"}`}>
          
        </div>
        <div className={`bg-red-500 transition-opacity ${tabIndex === 1 ? "opacity-100 w-20 h-20" : "opacity-0 w-0 h-0"}`}>tab2</div>
        <div className={`bg-red-500 transition-opacity ${tabIndex === 2 ? "opacity-100 w-20 h-20" : "opacity-0 w-0 h-0"}`}>tab3</div>
        <div className={`bg-red-500 transition-opacity ${tabIndex === 3 ? "opacity-100 w-20 h-20" : "opacity-0 w-0 h-0"}`}>tab4</div>
      </div>
    </div>
  );
};

export default ProductsAndServices;
