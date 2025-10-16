import React from "react";

interface CardItem {
  icon: string;
  title: string;
  description: string;
}

interface OvulationCardsProps {
  tag?: string;
  heading: string;
  cards: CardItem[];
}

export const OvulationCardsWithDesc: React.FC<OvulationCardsProps> = ({ tag, heading, cards }) => {
  return (
    <section id="types-of-testing" className="px-4 py-4 csLg:px-[120px] csLg:py-[80px] w-full bg-white">
      {tag && (
        <span className="inline-block text-xs font-medium text-[#1656A5] bg-[#1656A50D] px-3 py-1 rounded-full mb-2">
          {tag}
        </span>
      )}
      
      <h2 className="text-gray-900 font-normal mb-[32px] md:mb-[80px] text-3xl leading-tight tracking-tight md:text-[40px] md:leading-tight">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 rounded-[12px] bg-[#F2F2F2] p-3 lg:p-5"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-[19px] h-[19px] md:w-8 md:h-8 object-contain lg:mb-[6px]"
            />
            <h3 className="text-[#2C2C2C] font-[Manrope] text-[24px] leading-[40px] tracking-[-0.64px] font-normal">
              {card.title}
            </h3>
            <p className="text-[#606060] font-[Manrope] text-[16px] leading-[24px] opacity-80">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Example usage
export default function App() {
  const sampleCards = [
    {
      icon: "https://via.placeholder.com/32",
      title: "Track Your Cycle",
      description: "Monitor your menstrual cycle patterns and get personalized insights about your fertility window."
    },
    {
      icon: "https://via.placeholder.com/32",
      title: "Ovulation Predictions",
      description: "Receive accurate predictions about your ovulation days based on your cycle history."
    },
    {
      icon: "https://via.placeholder.com/32",
      title: "Fertility Reports",
      description: "Access detailed reports and analytics to better understand your reproductive health."
    },
    {
      icon: "https://via.placeholder.com/32",
      title: "Reminders & Alerts",
      description: "Get timely notifications for important dates and health tracking reminders."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <OvulationCardsWithDesc
        tag="FEATURES"
        heading="Everything you need to understand your cycle"
        cards={sampleCards}
      />
    </div>
  );
}