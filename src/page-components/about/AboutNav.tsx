'use client'
import React, { useState } from "react";
import NavigationTabs from "@/page-components/infertility-slug/NavigationTabs";

const sections = [
  { id: "why-1", label: "The Journey" },
  { id: "our-approach", label: "Our Approach" },
  { id: "our-vision", label: "Our Vision & Mission" },
  { id: "why-choose-us", label: "Why choose us" },
  { id: "impact-growth", label: "Impact & Growth" },
  { id: "faqs", label: "FAQ's" },
];

const AboutNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState("why-1");

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (!element) return;
    // Smooth scroll with a small offset compensation for sticky headers if any
    const y = element.getBoundingClientRect().top + window.scrollY - 20; // 20px breathing room
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <NavigationTabs 
      categories={sections}
      activeTab={activeTab}
      onTabClick={handleTabClick}
    />
  );
};

export default AboutNav;
