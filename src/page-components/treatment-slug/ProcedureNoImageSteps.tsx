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
    <div id="procedure" className=" bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-4 csLg:px-[120px] csLg:py-[80px]">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
            {tag}
          </span>
          <h2
  className="text-[#2C2C2C] font-manrope font-normal text-[32px] leading-[40px] tracking-[-0.64px] md:text-[40px] md:leading-[56px] mb-12 whitespace-pre-line"
>
  {heading}
</h2>

        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1656A50D]  rounded-2xl p-4 md:p-6  shadow-sm  transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="text-[#1656A5] text-[16px] md:text-[32px] md:text-5xl font-normal mb-10 md:mb-20">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Step Content */}
             <div className="text-left">
  <h3 className="text-[#2C2C2C] text-lg md:text-[16px] font-semibold mb-[8px]">
    {step.title}
  </h3>
  <p className="text-[#2C2C2C]/70 text-sm md:text-[16px] leading-relaxed">
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