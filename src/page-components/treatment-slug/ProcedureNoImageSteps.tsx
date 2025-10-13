import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface ProcedureStepsNoImageProps {
  heading: string;
  tag: string;
  steps: Step[];
}

const ProcedureStepsNoImage: React.FC<ProcedureStepsNoImageProps> = ({ heading, tag, steps }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
            {tag}
          </span>
          <h2 className="text-[#2C2C2C] font-manrope font-normal text-[32px] leading-[40px] tracking-[-0.64px] md:text-[48px] md:leading-[56px] mb-12">
            {heading}
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="text-[#1656A5] text-4xl md:text-5xl font-bold mb-8">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Step Content */}
              <div>
                <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ProcedureStepsNoImage;