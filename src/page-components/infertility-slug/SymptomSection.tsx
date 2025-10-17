// components/InfertilityIssues/SymptomSection.tsx
import React from "react";

interface Card {
  title: string;
  icon: string | null;
}

interface StatisticsVisualProps {
  properties: {
    tag: string;
    heading: string;
    subText1: string;
    subText2: string;
    card1: Card;
    card2: Card;
    card3: Card;
  };
}

export default function SymptomSection({ properties }: StatisticsVisualProps) {
  const cards = [properties.card1, properties.card2, properties.card3];

  return (
    <section className="w-full bg-[#FAFAFA] p-[16px] lg:p-[120px]">
      <div className="relative w-full justify-center flex flex-col gap-10 csLg:gap-[80px] csLg:items-start items-center ">
        {/* Tag */}
        <div className="grid w-full grid-cols-1 csLg:grid-cols-2  gap-4">
          <div>
            <span className="py-2  px-4 rounded-[8px] text-[#1656A5] bg-[#1656A50D] text-[12px] leading-[18px] font-medium lg:leading-[20px]">
              {properties.tag}
            </span>

            <h2 className="csLg:text-[32px] mt-[10px] max-w-[80%] leading-[32px] font-normal text-[#2C2C2C] font-[manrope] csLg:leading-[48px]">
              {properties.heading}
            </h2>
          </div>

        </div>
        <div className="grid grid-cols-1 csLg:grid-cols-3  w-full">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#Fefefe] w-full rounded-[16px] p-[24px] gap-[10px] lg:gap-[18px] flex flex-col items-start ">
              {card.icon && (


                <img className="w-[19px] h-[19px] md:w-[28px] md:h-[28px] object-contain" src={card.icon} alt={card.title} />

                
              )}
              <h2 className="  csLg:text-[24px]  leading-[30px] font-normal text-[#2C2C2C]  csLg:leading-[38px]">
                {card.title}
              </h2>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}