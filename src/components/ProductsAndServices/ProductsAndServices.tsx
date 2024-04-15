"use client"
import { useState } from "react";

const ProductsAndServices = () => {
const [tabIndex, setTabIndex] = useState(0)
const handleTabChange = (tab:number)=>{
  setTabIndex(tab)
}
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
        <button onClick={()=>{
          handleTabChange(0)
        }} className={`${tabIndex == 0 ? "border-b border-white" : "border-b border-transparent"}`}>ICT Solutions</button>
        <button onClick={()=>{
          handleTabChange(1)
        }} className={`${tabIndex == 1 ? "border-b border-white" : "border-b border-transparent"}`}>Connectivity</button>
        <button onClick={()=>{
          handleTabChange(2)
        }} className={`${tabIndex == 2 ? "border-b border-white" : "border-b border-transparent"}`}>Cloud Solution</button>
        <button onClick={()=>{
          handleTabChange(3)
        }} className={`${tabIndex == 3 ? "border-b border-white" : "border-b border-transparent"}`}>Data Analytics</button>
      </div>

      {/* TAB CONTENT */}
      <div>
        {tabIndex == 0 && <div>tab1</div>}
        {tabIndex == 1 && <div>tab2</div>}
        {tabIndex == 2 && <div>tab3</div>}
        {tabIndex == 3 && <div>tab4</div>}
      </div>
    </div>
  );
};

export default ProductsAndServices;
