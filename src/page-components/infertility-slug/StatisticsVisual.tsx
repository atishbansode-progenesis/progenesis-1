// components/InfertilityIssues/StatisticsVisual.tsx
import React from "react";

interface StatCircle {
  value: string;
  description: string;
  circleClass: string;
  textClass: string;
}

interface StatisticsVisualProps {
  tag: string;
  heading: string;
  blueCircleData: StatCircle;
  greenCircleData: StatCircle;
  skyCircleData: StatCircle;
  staticsData: any;
}

export default function StatisticsVisual({ tag, heading, blueCircleData, greenCircleData, skyCircleData, staticsData }: StatisticsVisualProps) {
  return (
    <section className="w-full px-[16px] lg:px-[80px] xl:px-[120px] py-10 md:py-20">
      <div className="relative flex flex-col gap-2 items-start">
        {/* Tag */}
        <span className="py-2 px-4 rounded-[8px] text-[#1656A5] bg-[#1656A50D] text-[12px] leading-[18px] font-medium lg:leading-[20px]">
          {tag}
        </span>

        {/* Heading */}
        <h2 className="text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] tracking-tighter font-normal max-w-[650px]">{heading}</h2>
        <p className="text-[16px] leading-[24px] font-normal lg:hidden mb-6">{staticsData?.subHeading}</p>
      </div>

      {/* Circle Visualization Section */}
      <div className="relative h-[30vh] lg:h-[80vh] lg:-top-32">
        {/* Circle 1 */}
        <div className="absolute rounded-full bg-[#C3DCFB] w-[38vw] h-[38vw] right-[2vw] -top-[1vw] lg:w-[26vw] lg:h-[26vw] lg:right-[13vw] lg:top-[0vh]">
          <div className="flex justify-between pt-[2vh] border-t border-t-[rgba(122,122,122,0.5)] 
        lg:w-[32.14vw] absolute transform lg:translate-x-[36%] lg:top-[40%]">
            <p className="text-[3.33vw] font-medium leading-[2.92vw]" dangerouslySetInnerHTML={{__html: blueCircleData.value}} />
            <p className="text-[0.83vw] font-normal leading-[1.25vw] max-w-[15.31vw]" dangerouslySetInnerHTML={{__html: blueCircleData.description}} />
          </div>
        </div>

        {/* Circle 2 */}
        <div className="absolute rounded-full bg-[#E5F1FF] w-[30vw] h-[30vw] left-[35vw] top-[15vw] lg:w-[20vw] lg:h-[20vw] lg:top-[18vh] lg:left-[30vw]">
          <div className="flex justify-between pt-[2vh] border-t border-t-[rgba(122,122,122,0.5)] 
        lg:w-[35.31vw] absolute transform lg:-translate-x-[60%] lg:top-[40%]">
            <p className="text-[0.83vw] font-normal leading-[1.25vw] max-w-[15.31vw]" dangerouslySetInnerHTML={{__html: skyCircleData.description}} />
            <p className="text-[3.33vw] font-medium leading-[2.92vw]" dangerouslySetInnerHTML={{__html: skyCircleData.value}} />
          </div>
        </div>

        {/* Circle 3 */}
        <div className="absolute rounded-full bg-[#E4F8B6] w-[28vw] h-[28vw] top-[31vw] left-[55vw] lg:w-[22vw] lg:h-[22vw] lg:top-[40vh] lg:left-[45vw]">
          <div className="flex justify-between pt-[2vh] border-t border-t-[rgba(122,122,122,0.5)] 
        lg:w-[32.14vw] absolute transform lg:translate-x-[20%] lg:top-[40%]">
            <p className="text-[3.33vw] font-medium leading-[2.92vw]" dangerouslySetInnerHTML={{__html: greenCircleData.value}} />
            <p className="text-[0.83vw] font-normal leading-[1.25vw] max-w-[15.31vw]" dangerouslySetInnerHTML={{__html: greenCircleData.description}} />
          </div>
        </div>
      </div>
    </section>
  );
}