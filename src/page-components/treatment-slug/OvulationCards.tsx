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
    <section className="px-4 py-4 md:px-[120px] md:py-[80px] w-full bg-white">
      {tag && (
        <span className="inline-block text-xs font-medium text-[#1656A5] bg-[#1656A50D] px-3 py-1 rounded-full mb-4">
          {tag}
        </span>
      )}
      
      <h2 className="text-gray-900 font-normal mb-[32px] md:mb-12 text-3xl leading-tight tracking-tight md:text-4xl md:leading-tight">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full">
        {cards.map((card, idx) => (
         <div
         key={idx}
         className="flex flex-col gap-2 rounded-[12px] bg-[#F2F2F2]  p-6"
       >
         	 <img
          src={card.icon}
          alt={card.title}
          className="w-[19px] h-[19px] md:w-8 md:h-8 object-contain"
        />
         <h3 className="text-[#2C2C2C] font-[Manrope] text-[16px] md:text-[22px]   font-normal">
           {card.title}
         </h3>
       </div>
        ))}
      </div>
    </section>
  );
};