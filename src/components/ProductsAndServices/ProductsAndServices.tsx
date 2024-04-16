"use client"
import { useState } from "react";

const ProductsAndServices = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (tab:number) => {
    setTabIndex(tab);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* SECTION HEADER */}
      <div>
        <h1>Products & Services</h1>
        <p>
          The facts of our service and solution provider can vary based on the
          specific company, its offerings, and its market focus.
        </p>
      </div>
      {/* TABS */}
      <div className="border-b border-gray-200 flex gap-2 justify-center items-center">
        <button onClick={() => handleTabChange(0)} className={`${tabIndex === 0 ? "border-b border-white" : "border-b border-transparent"}`}>
          ICT Solutions
        </button>
        <button onClick={() => handleTabChange(1)} className={`${tabIndex === 1 ? "border-b border-white" : "border-b border-transparent"}`}>
          Connectivity
        </button>
        <button onClick={() => handleTabChange(2)} className={`${tabIndex === 2 ? "border-b border-white" : "border-b border-transparent"}`}>
          Cloud Solution
        </button>
        <button onClick={() => handleTabChange(3)} className={`${tabIndex === 3 ? "border-b border-white" : "border-b border-transparent"}`}>
          Data Analytics
        </button>
      </div>

      {/* TAB CONTENT */}
      <div>
      <div className={`bg-red-500 transition-opacity ${tabIndex === 0 ? "opacity-100 w-20 h-20" : "opacity-0 w-0 h-0"} ease-in-out duration-700`}>tab1</div>
        <div className={`bg-red-500 transition-opacity ${tabIndex === 1 ? "opacity-100 w-20 h-20" : "opacity-0 w-0 h-0"} ease-in-out duration-700`}>tab2</div>
        <div className={`bg-red-500 transition-opacity ${tabIndex === 2 ? "opacity-100 w-20 h-20" : "opacity-0 w-0 h-0"} ease-in-out duration-700`}>tab3</div>
        <div className={`bg-red-500 transition-opacity ${tabIndex === 3 ? "opacity-100 w-20 h-20" : "opacity-0 w-0 h-0"} ease-in-out duration-700`}>tab4</div>
      </div>
    </div>
  );
};

export default ProductsAndServices;
