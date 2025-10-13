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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            {tag}
          </span>
          <h2 className="text-gray-900 text-3xl md:text-5xl font-normal leading-tight max-w-2xl">
            {heading}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-300 border border-blue-100"
            >
              {/* Abbreviation */}
              <div className="text-gray-900 text-2xl md:text-3xl font-bold mb-6">
                {card.abbreviation}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-4 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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
