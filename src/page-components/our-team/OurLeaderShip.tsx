"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaThLarge, FaList } from "react-icons/fa"; // Toggle icons

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Narhari S. Malagaonkar",
    role: "Chief Fertility Consultant",
    image: "/DoctorsSection/doctorimage.png",
  },
    {
    id: 2,
    name: "Mr. Prashant Aher",
    role: "Operation Director",
    image: "/images/doctors/Prashant.png",
  },
    {
    id: 3,
    name: "Mr. Sandeep Aher",
    role: "Director of Strategy",
    image: "/images/doctors/Sandeep.png",
  },

]

const LeadershipTeam: React.FC = () => {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="w-full flex flex-col">
      {/* 1️⃣ Hero Section */}
      <section
        className="relative w-full h-[400px] md:h-[550px] flex lg:bg-[url('/images/leadership-bg.png')] bg-[url('/images/leadership-bg_M.png')]  px-6 md:px-24 pt-6 lg:pt-20 bg-cover bg-center"
       
      >
        <div className="relative z-10" >
          {/* Breadcrumb */}
          <nav className="text-sm text-[#606060] mt-5 mb-6 md:mb-11">
            <button
              onClick={() => (window.location.href = "/")}
              className="hover:cursor-pointer"
            >
              Home
            </button>
            <span className="mx-2">›</span>
            <button
              onClick={() => (window.location.href = "/about-progenesis")}
              className="hover:cursor-pointer"
            >
              About Us
            </button>
            <span className="mx-2">›</span>{" "}
            <span className="text-[#1656A5] font-medium">Leadership Team</span>
          </nav>

          {/* Heading */}
          {/* Mobile-only heading (3 lines) */}
          <h1
            className="block md:hidden text-[32px] csLg:text-[80px] leading-[40px] csLg:leading-[88px] tracking-tight font-semibold "
            style={{ color: "#252525", fontFamily: "Manrope" }}
          >
            The Team Leading <br />
            With Expertise & <br />
            Compassion
          </h1>

          {/* Desktop / tablet heading (2 lines) */}
          <h1
            className="hidden  md:block  md:leading-[56px] lg:text-[60px] md:text-5xl lg:leading-[70px] tracking-tight  font-semibold"
            style={{ color: "#252525" }}
          >
            The Team Leading With <br />
            Expertise & Compassion
          </h1>

        </div>
      </section>

      {/* 2️⃣ Team Members Section */}
      <section className="w-full md:px-24 lg:py-16 bg-[#FAFAFA]">
        <div className="px-4 md:px-0 py-4 md:py-0">
        <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A50D] px-3 py-1 rounded-[8px] mb-2">
         Meet The Experts
        </span>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">

          {/* Mobile-only heading (2 lines) */}
          <h2 className="block sm:hidden text-[32px] font-[400] text-[#2C2C2C] tracking-tight leading-[40px] mb-2">
            Our directors lead with <br />
            vision and dedication.
          </h2>

          {/* Desktop / tablet heading (original) */}
          <h2 className="hidden sm:block csLg:text-[48px] text-[32px] csLg:leading-[56px] leasing-[40px] font-[400] tracking-tight text-[#2C2C2C] mb-4">
             Our directors lead with vision
             <br /> and dedication.
          </h2>


          {/* 🔘 Toggle Button */}
          <div className="flex items-center gap-2">
  {/* Grid View Button */}
  <button
    onClick={() => setIsGridView(true)}
    className={` rounded-md cursor-pointer transition ${
      isGridView ? " text-white" : " text-[#606060]"
    }`}
  >
    <img
      src={
        isGridView
          ? "/images/icons/GridBlue.svg"  // active blue icon
          : "/images/icons/GridGray.svg"  // inactive gray icon
      }
      alt="Grid View"
      className="lg:w-13 w-9 h-7 lg:h-12"
    />
  </button>

  {/* List View Button */}
  <button
    onClick={() => setIsGridView(false)}
    className={` rounded-md cursor-pointer transition ${
      !isGridView ? " text-white" : " text-[#606060]"
    }`}
  >
    <img
      src={
        !isGridView
          ? "/images/icons/ListBlue.svg"  // active blue icon
          : "/images/icons/ListGray.svg"  // inactive gray icon
      }
      alt="List View"
      className="lg:w-13 w-9 h-7 lg:h-12"
    />
  </button>
</div>

        </div></div>

        {/* 👥 Team Members */}
        <div
          className={
            isGridView
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[50px]"
          }
        >
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className={`bg-[#FFFFFF] rounded-lg overflow-hidden transition cursor-pointer hover:bg-[#F3F6FA]
                ${isGridView ? "text-center p-4 md:p-6" : "flex items-center lg:max-w-full gap-4 p-4"}`}
            >
              <div
                className={`relative ${isGridView ? "w-full h-96 mb-4" : "lg:w-32 w-24 h-24 lg:h-40 flex-shrink-0"
                  }`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-end rounded-lg"
                />
              </div>
              <div
                className={isGridView ? "" : "lg:max-w-[190px] gap-2"}
                style={{ textAlign: "left" }}
              >
                {isGridView?(
                  <h3 className="text-[32px] leading-[40px] font-normal tracking-tight justify-content-center text-[#1656A5] pb-2">
                  {member.name}
                </h3>
                ):(
                  <h3 className="text-[16px] leading-[24px] font-normal justify-content-center text-[#1656A5] tracking-tight csLg:text-[32px] csLg:leading-[40px] pb-2">
                  {member.name}
                </h3>
                )}
                
                <p className="text-sm text-[#2c2c2c]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
        
      </section>
    </div>
  );
};

export default LeadershipTeam;
