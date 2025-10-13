import React from "react";
import { User, FileText, Users, Activity } from "lucide-react";

interface CardItem {
  icon: string;
  title: string;
}

interface OvulationCardsProps {
  tag?: string;
  heading: string;
  cards: CardItem[];
}

export const OvulationCards: React.FC<OvulationCardsProps> = ({ tag, heading, cards }) => {
  return (
    <section className="px-4 md:px-20 xl:px-32 py-20 w-full bg-white">
      {tag && (
        <span className="inline-block text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
          {tag}
        </span>
      )}
      
      <h2 className="text-gray-900 font-normal mb-12 text-3xl leading-tight tracking-tight md:text-4xl md:leading-tight">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        {cards.map((card, idx) => (
         <div
         key={idx}
         className="flex flex-col gap-2 rounded-[12px] bg-[#EEF5FF] border border-[#E6E6E6] p-6 hover:shadow-md transition"
       >
         <img src={card.icon} alt={card.title} className="w-[50px] h-[50px]" />
         <h3 className="text-[#2C2C2C] font-[Manrope] text-[32px] leading-[40px] tracking-[-0.64px] font-normal">
           {card.title}
         </h3>
       </div>
        ))}
      </div>
    </section>
  );
};