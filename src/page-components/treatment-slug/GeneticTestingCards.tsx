import React from 'react';

interface TestingCard {
  abbreviation: string;
  title: string;
  description: string;
}

interface GeneticTestingCardsProps {
  tag: string;
  heading: string;
  cards: TestingCard[];
}

const GeneticTestingCards: React.FC<GeneticTestingCardsProps> = ({ tag, heading, cards }) => {
  return (
    <div id="types-of-testing" className="bg-[#FFFFFF] px-4 py-4 csLg:px-[120px] csLg:py-[80px]">
      <div className="mx-auto">
        {/* Header */}
        <div className=" mb-[32px] md:mb-[60px]">
          <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            {tag}
          </span>
          <h2 className="text-gray-900 text-[24px] md:text-[40px] md:text-5xl font-normal leading-tight max-w-2xl">
            {heading}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#DDEBFF] rounded-[16px] p-3 md:p-6  border border-blue-100"
            >
              {/* Abbreviation */}
              <div className="text-[#2C2C2C] text-[16px] md:text-[24px] font-normal mb-6">
                {card.abbreviation}
              </div>


              {/* Title */}
              <h3 className="text-[#2C2C2C] text-[16px] md:text-[24px]  font-normal mb-4 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#2C2C2C]/70 text-[16px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneticTestingCards;
