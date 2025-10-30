import React, { useState } from "react";
import NavigationTabs from "@/page-components/infertility-slug/NavigationTabs";

const tabs = [
  { id: "financial", label: "Financial Support" },
  { id: "care", label: "We Take Care of You" },
  { id: "stats", label: "Stats and Metrics" },
];

const EmiNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState("financial");

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - 20;
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

export default EmiNav;
