"use client"
import React, { useState } from "react";
import NavigationTabs from "@/page-components/infertility-slug/NavigationTabs";

const tabs = [
  { id: "why", label: "Why Get a Second Opinion?" },
  { id: "how", label: "How a Second Opinion Helps" },
  { id: "numbers", label: "Numbers That Set Us Apart" },
  { id: "care", label: "We Take Care of You" },
];

const OpinionNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState("why");

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - 20; // offset for any sticky header
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
      <NavigationTabs 
        categories={tabs}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
  );
};

export default OpinionNav;
