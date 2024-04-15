"use client"

import { useEffect, useState } from "react";
import logo from "../../assets/Images/logo/logo.svg"
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import Image from "next/image";
import "./NavbarComponent.css"
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
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO / NAV START  */}
        <div>
          <Image
            src={logo}
            width={128}
            height={64}
            alt="robi-logo"
            className="cursor-pointer"
          />
        </div>


{/* NAV CENTER */}
        <div>
          <ul className="flex gap-8">
            <li className="group relative dropdown cursor-pointer font-bold text-base tracking-wide py-5 abiss">
              <div className="text-white flex gap-2 items-center">
                <a className="font-medium text-[16px]">About Us</a>
                <IoIosArrowDown />
              </div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul
                  className="relative top-[22px] bg-green-500 shadow p-6 w-[200px] rounded-lg"
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(37.5px)",
                  }}
                >
                  <li className="py-1">
                    <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                      Our Story
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                      Management Body
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="block text-[16px] font-medium text-white cursor-pointer">
                      Achievements
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="group relative dropdown cursor-pointer font-bold text-base tracking-wide py-5 abiss">
              <div className="text-white flex gap-2 items-center">
                <a className="font-medium text-[16px]">Products and services</a>
                <IoIosArrowDown />
              </div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul
                  className="relative top-[22px] bg-green-500 shadow p-6 w-[200px] rounded-lg bg-[]"
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(37.5px)",
                  }}
                >
                  <li className="py-1">
                    <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                      Cloud Solutions
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                      IoT and Smart Solutions
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="block text-[16px] font-medium text-white cursor-pointer">
                      AdTech and Data Analytics
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="group relative dropdown cursor-pointer font-bold text-base tracking-wide py-5 abiss">
              <div className="text-white flex gap-2 items-center">
                <a className="font-medium text-[16px]">Newsroom</a>
                <IoIosArrowDown />
              </div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul
                  className="relative top-[22px] bg-green-500 shadow p-6 w-[200px] rounded-lg"
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(37.5px)",
                  }}
                >
                  <li className="py-1">
                    <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                      Connectivity
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                      ICT Solutions
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                      Cloud Solutions
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="block text-[16px] font-medium text-white cursor-pointer">
                      Selfcare Portal
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="text-white font-medium text-[16px] cursor-pointer py-5">
              Contact Us
            </li>

            <li className="text-white font-medium text-[16px] cursor-pointer py-5">
              Career
            </li>
          </ul>
        </div>


{/* NAV END */}
        <div >
          <IoIosSearch/>
        </div>
      </div>
    </div>

  );
};

export default NavbarComponent;
