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
    <section className="w-full bg-[#FAFAFA] px-[16px] lg:px-[80px] xl:px-[120px] py-10 md:py-20 ">
      <div className="relative flex flex-col gap-10 csLg:gap-[80px] items-start ">
        {/* Tag */}
        <div className="grid grid-cols-1 csLg:grid-cols-2  gap-4">
          <div>
            <span className="py-2  px-4 rounded-[8px] text-[#1656A5] bg-[#1656A50D] text-[12px] leading-[18px] font-medium lg:leading-[20px]">
              {properties.tag}
            </span>

            <h2 className="csLg:text-[32px] mt-[10px] max-w-[80%] leading-[32px] font-normal text-[#2C2C2C] font-[manrope] csLg:leading-[48px]">
              {properties.heading}
            </h2>
          </div>


        </div>
        <div className="grid grid-cols-1 csLg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#Fefefe] justify-between rounded-[16px] p-[24px] gap-[18px] flex flex-col items-start min-h-[188px]">
              {card.icon && (


                <img className="  text-center" src={card.icon} alt={card.title} />
              )}
              <h2 className="  csLg:text-[32px] mt-[10px]  leading-[30px] font-normal text-[#2C2C2C] font-[manrope] csLg:leading-[38px]">
                {card.title}
              </h2>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}