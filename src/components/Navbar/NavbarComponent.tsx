"use client"

import { useEffect, useState } from "react";
import logo from "../../assets/Images/logo/logo.svg"
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
const NavbarComponent = () => {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    
  }, []);
  return (
    <div
      style={{
        background:
          `radial-gradient(circle, rgba(0,0,0,1) 0%, ${isSolid ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.25)"} 0%, rgba(0,0,0,1) 100%)`,
      }}
      className="w-full text-white flex items-center"
    >
      <div className="flex justify-between items-center w-full overflow-hidden container mx-auto px-5">
        {/* MENU HEAD */}
        <div>
          <div className=""> 
            <Image alt="logo" src={logo} width={200} height={200} className="h-full w-full object-contain"/>
          </div>
        </div>

        {/* MENU CENTER */}
        <ul className="flex gap-3">
          <li>Product & Solutions</li>
          <li>Services</li>
          <li>Industries</li>
          <li>Career</li>
          <li>About</li>
        </ul>

        {/* MENU END */}
        <ul>
          <li>
            <IoIosSearch/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponent;
