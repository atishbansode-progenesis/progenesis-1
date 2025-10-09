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
    name: "Dr. Narhari S. Malgaonkar",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/dr-narhari.png",
  },
  {
    id: 2,
    name: "Mr. Prashant Aher",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/prashant-aher.png",
  },
  {
    id: 3,
    name: "Mr. Sandeep Aher",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/sandeep-aher.png",
  },
  {
    id: 4,
    name: "Dr. Sneha Patil",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/dr-sneha.png",
  },
  {
    id: 5,
    name: "Dr. Ramesh Kulkarni",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/dr-ramesh.png",
  },
  {
    id: 6,
    name: "Dr. Kavita Joshi",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/dr-kavita.png",
  },
];

const LeadershipTeam: React.FC = () => {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="w-full flex flex-col">
      {/* 1️⃣ Hero Section */}
      <section
        className="relative w-full h-[250px] md:h-[350px] flex items-center justify-start px-6 md:px-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/leadership-bg.png')",
        }}
      >
        <div className="relative z-10">
          <nav className="text-sm text-gray-600 mb-2">
            <button
              onClick={() => (window.location.href = "/")}
              className="hover:cursor-pointer"
            >
              Home
            </button>
            <span className="mx-1">›</span>
            <button
              onClick={() => (window.location.href = "/about-us")}
              className="hover:cursor-pointer"
            >
              About Us
            </button>
            <span className="mx-1">›</span>{" "}
            <span className="text-[#1656A5] font-medium">Leadership Team</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            The Team Leading With <br /> Expertise & Compassion
          </h1>
        </div>
      </section>

      {/* 2️⃣ Team Members Section */}
      <section className="w-full px-6 md:px-24 py-16 bg-[#FAFAFA]">
        <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A50D] px-3 py-1 rounded-full mb-6">
          The Experts
        </span>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Our directors lead with vision and dedication.
          </h2>

          {/* 🔘 Toggle Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 rounded-md ${
                isGridView
                  ? "bg-[#1656A5] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              <FaThLarge />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 rounded-md ${
                !isGridView
                  ? "bg-[#1656A5] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              <FaList />
            </button>
          </div>
        </div>

        {/* 👥 Team Members */}
        <div
          className={
            isGridView
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className={`bg-[#FFFFFF] radius-[16px] lg:radius-[12px]  rounded-lg overflow-hidden transition 
                lg:hover:bg-[#F3F6FA]
                ${isGridView ? "text-center p-6" : "flex items-center lg:max-w-fit gap-4 p-4"}`}
            >
              <div
                className={`relative ${
                  isGridView ? "w-full h-60 mb-4" : "w-24 h-24 flex-shrink-0 "
                }`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className={isGridView ? "" : "lg:max-w-[190px]"}>
                <h3 className="text-lg font-semibold  text-[#1656A5]">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeadershipTeam;
