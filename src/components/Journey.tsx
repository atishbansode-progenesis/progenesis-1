'use client';

import React, { useState } from 'react';

const tabItems = [
  {
    storyNumber: '01',
    title: 'Connect With Us',
    heading: 'Begin your treatment journey',
    description: [
    'Fill the form and our team will guide you ',
    'Clear answers to your doubts ',
    'A personalized treatment plan ',
    'Duration with checklist ',
    'Pre & post-treatment guidance ',
  ],
    image: '/InternationalPatients/connect.png',
  },
  {
    storyNumber: '02',
    title: 'Secure Your Visa',
    heading: 'Confirm your treatment & travel',
    description:
      'Once treatment and travel dates are confirmed, we issue a letter for your medical visa. Sharing your flight details with us is essential at this stage.',
    image: '/InternationalPatients/Visa.png',
  },
  {
    storyNumber: '03',
    title: 'Arrive & Begin Treatment',
    heading: 'We’re with you at every step',
    description:
      'Upon arrival in India, our team welcomes you, helps complete airport formalities, and arranges your appointment at Progenesis.',
    image: '/InternationalPatients/arrive.png',
  },
];

const Journey: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id='why-1' className="w-full bg-white">
      <div className="section-spacing">
        {/* Desktop layout: visible on large screens and above */}
        <div className="hidden lg:grid lg:grid-cols-[400px_1fr] csLg:grid-cols-[400px_1fr] gap-6 lg:gap-10 justify-between">
          {/* Left Column: Heading + Tab List */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Heading */}
            <div>
              <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 mb-2 rounded-[8px]" >Your Journey, Made Simple</span>
              <h2 className="text-[32px] leading-[40px] lg:text-5xl font-normal text-[#2C2C2C] lg:leading-[56px] tracking-tight font-[Manrope]">
                Your Steps to Begin
              </h2>
            </div>

            {/* Tab List */}
            <div className="flex flex-col pt-4">
              {tabItems.map((item, index) => (
              <div key={index}>
              <div className="h-[1px] w-full bg-[#A5A5A5] relative">
              {activeTab === index && (
              <div className="absolute left-0 top-[-1px] h-[2px] w-32 bg-[#1656A5]" />
              )}
               </div>
              <div
              onClick={() => setActiveTab(index)}
              className="flex items-center justify-between cursor-pointer py-3 lg:flex-nowrap lg:gap-4"
              >
              <span
              className={`text-[16px] leading-[24px] md:text-[24px] lg:text-[32px] lg:leading-[40px] font-medium font-[Manrope] tracking-tight lg:whitespace-nowrap ${
              activeTab === index ? "text-[#1656A5]" : "text-[#606060]"
              }`}
              >
              {item.title}
              </span>
              <span
              className={`w-2 h-2 rounded-full ml-4 ${
              activeTab === index ? "bg-[#1656A5]" : "bg-gray-400"
              }`}
              />
              </div>
              {/* Separator line (after every tab) */}
              {index === tabItems.length - 1 && (
              <div className="h-[1px] w-full bg-[#A5A5A5] relative">
              </div>
              )}

        
              </div>
              ))}
            </div>

          </div>

          {/* Right Column: Paragraph + Image + Info Box */}
          <div className="flex flex-col gap-10">
            {/* Paragraph (top of right column) */}
            <p className="text-[16px] leading-[24px] lg:text-[32px] lg:leading-[40px] text-[#2C2C2C] tracking-tight font-[Manrope]">
             A clear, step-by-step process to make your fertility treatment in India smooth, transparent, and stress-free.
            </p>

            {/* Image + Info Box */}
            <div className="flex flex-col lg:flex-row gap-4  md:gap-6 lg:gap-8 w-auto max-w-full overflow-hidden">
                {/* Image */}
              <div className="w-full bg-[#E8EFF6] lg:max-w-[480px] csLg:h-[450px] xl:max-w-[520px] aspect-[4/3] rounded-[8px] md:rounded-[12px] lg:rounded-[16px] overflow-hidden flex-shrink-0 flex items-center justify-center">
               <img
                src={tabItems[activeTab].image}
                alt={tabItems[activeTab].title}
                className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out"
                />
              </div>

              {/* Info Box */}
              <div className="flex flex-col justify-start gap-4 w-full lg:flex-1 lg:max-w-[440px] xl:max-w-[400px] pt-2.5 px-4">
                <h3 className="text-[#94BA3D]">{tabItems[activeTab].storyNumber}</h3>
                <h3 className="text-[#1656A5] font-medium text-3xl md:text-[28px] lg:text-[32px] leading-tight font-[Manrope]">
                {tabItems[activeTab].heading}
                </h3>
                <p className="text-base text-gray-700 leading-6 tracking-tight font-[Manrope]">
                {tabItems[activeTab].description}
               </p>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile & tablet layout: visible below large screens */}
        <div className="flex flex-col gap-6 md:gap-8 lg:hidden">
          {/* Mobile heading */}
          <div>
            <span className="inline-block bg-[#E9F0FF] text-[#1656A5] text-[12px] px-3 py-2 rounded-[8px]">Your Journey, Made Simple</span>
            <h2 className="text-3xl font-normal text-[#2C2C2C] leading-[42px] tracking-tight font-[Manrope]">
             Your Steps to Begin
            </h2>
          </div>

          {/* Intro paragraph */}
          <p className="text-base leading-[28px] text-[#2C2C2C] tracking-tight font-[Manrope]">
            A clear, step-by-step process to make your fertility treatment in India smooth, transparent, and stress-free.
          </p>

          {/* All stories stacked */}
          {tabItems.map((item) => (
            <div key={item.storyNumber} className="flex flex-col gap-5 w-full">
              

              {/* Info Box */}
              <div className="flex flex-col gap-2 pt-2.5">
                <h3 className='text-[#94BA3D]'>{item.storyNumber}</h3>
                <h3 className="text-[#1656A5] font-medium text-2xl leading-tight font-[Manrope]">
                  {item.heading}
                </h3>
                <p className="text-base text-gray-700 leading-6 tracking-tight font-[Manrope]">
                  {item.description}
                </p>
              </div>
              {/* Image */}
              <div className="w-full bg-[#E8EFF6] aspect-[4/3] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Journey;
