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
    <section className="w-full bg-[#FAFAFA] p-[16px] lg:px-[120px] lg:pt-[80px] pb-12 md:pb-0">
      <div className="relative flex flex-col gap-2 items-start">
        {/* Tag */}
         <button className="cursor-pointer bg-[#1656A5]/5 px-2 py-1 rounded-[8px] text-[12px] font-medium text-[#1656A5]">
           {tag}
         </button>

        {/* Heading */}
        <h2 className="text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] tracking-tighter font-normal max-w-[650px]">{heading}</h2>
        <p className="text-[16px] leading-[24px] font-normal lg:hidden mb-6">{staticsData?.subHeading}</p>
      </div>

      {/* Circle Visualization Section */}
      <div className="relative h-[38vh] lg:h-[80vh] lg:-top-32">
        {/* Circle 1 */}
        <div className="absolute rounded-full bg-[#C3DCFB] w-[38vw] h-[38vw] right-[2vw] -top-[1vw] lg:w-[26vw] lg:h-[26vw] lg:right-[13vw] lg:top-[0vh]">
          <div className="hidden lg:flex justify-between pt-[2vh] border-t border-t-[rgba(122,122,122,0.5)] 
        lg:w-[32.14vw] absolute transform lg:translate-x-[36%] lg:top-[40%]">
            <p className="text-[3.33vw] font-medium leading-[2.92vw]" dangerouslySetInnerHTML={{ __html: blueCircleData.value }} />
            <p className="text-[0.83vw] font-normal leading-[1.25vw] max-w-[15.31vw]" dangerouslySetInnerHTML={{ __html: blueCircleData.description }} />
          </div>

          <div className="flex lg:hidden border-t border-t-[rgba(122,122,122,0.5)] w-[237px] absolute transform -translate-x-[71%] top-[30%]">
            <p className="text-[10px] font-normal leading-[16px] max-w-[148px]">{blueCircleData.description}</p>
          </div>
          <p className="text-[16px] font-medium leading-[14px] absolute transform translate-x-[115%] top-[45%] lg:hidden"  dangerouslySetInnerHTML={{ __html: blueCircleData.value }} />
        </div>

        {/* Circle 2 */}
        <div className="absolute rounded-full bg-[#E5F1FF] w-[30vw] h-[30vw] left-[38vw] top-[15vw] lg:w-[20vw] lg:h-[20vw] lg:top-[18vh] lg:left-[30vw]">
          <div className="hidden lg:flex justify-between pt-[2vh] border-t border-t-[rgba(122,122,122,0.5)] 
        lg:w-[35.31vw] absolute transform lg:-translate-x-[60%] lg:top-[40%]">
            <p className="text-[0.83vw] font-normal leading-[1.25vw] max-w-[15.31vw]" dangerouslySetInnerHTML={{ __html: skyCircleData.description }} />
            <p className="text-[3.33vw] font-medium leading-[2.92vw]" dangerouslySetInnerHTML={{ __html: skyCircleData.value }} />
          </div>

          <div className="flex lg:hidden border-t border-t-[rgba(122,122,122,0.5)] w-[52.94vw] absolute transform -translate-x-[70%] top-[75%]">
            <p className="text-[10px] font-normal leading-[16px] max-w-[148px]">{skyCircleData.description}</p>
          </div>
          <p className="lg:hidden text-[16px] font-medium leading-[14px] absolute transform translate-x-[75%] top-[45%]"  dangerouslySetInnerHTML={{ __html: skyCircleData.value }} />
        </div>

        {/* Circle 3 */}
        <div className="absolute rounded-full bg-[#E4F8B6] w-[28vw] h-[28vw] top-[31vw] left-[55vw] lg:w-[22vw] lg:h-[22vw] lg:top-[40vh] lg:left-[45vw]">
          <div className="hidden lg:flex justify-between pt-[2vh] border-t border-t-[rgba(122,122,122,0.5)] 
        lg:w-[32.14vw] absolute transform lg:translate-x-[20%] lg:top-[40%]">
            <p className="text-[3.33vw] font-medium leading-[2.92vw]" dangerouslySetInnerHTML={{ __html: greenCircleData.value }} />
            <p className="text-[0.83vw] font-normal leading-[1.25vw] max-w-[15.31vw]" dangerouslySetInnerHTML={{ __html: greenCircleData.description }} />
          </div>

          <div className="flex lg:hidden border-t border-t-[rgba(122,122,122,0.5)] w-[146px] absolute transform -translate-x-[70%] top-[87%]">
            <p className="text-[10px] font-normal leading-[16px] max-w-[132px]">{greenCircleData.description}</p>
          </div>
          <p className="lg:hidden text-[16px] font-medium leading-[14px] absolute transform translate-x-[67%] top-[40%]"  dangerouslySetInnerHTML={{ __html: greenCircleData.value }} />
        </div>
      </div>
    </section>
  );
}