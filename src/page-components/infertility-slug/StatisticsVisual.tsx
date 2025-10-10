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
  circles: StatCircle[];
}

export default function StatisticsVisual({ tag, heading, circles }: StatisticsVisualProps) {
  return (
    <section className="w-full px-[12px] md:px-[80px] xl:px-[120px] py-10 md:py-20">
      <div className="relative flex flex-col gap-2 items-start">
        {/* Tag */}
        <span className="py-2 px-4 rounded-[8px] text-[#1656A5] bg-[#1656A50D]">
          {tag}
        </span>

        {/* Heading */}
        <h2 className="text-[48px] leading-[56px] tracking-tighter font-normal" dangerouslySetInnerHTML={{__html: heading}} />
      </div>

      {/* Circle Visualization Section */}
      <div className="relative lg:h-[80vh] -top-32">
        {/* Circle 1 */}
        <div className="absolute rounded-full bg-[#C3DCFB] w-[26vw] h-[26vw] right-[13vw] top-[0vh]">
          <div className="flex justify-between pt-[2vh] border-t border-t-[rgba(122,122,122,0.5)] 
        w-[32.14vw] absolute transform translate-x-[36%] top-[40%]">
            <p className="text-[3.33vw] font-medium leading-[2.92vw]">60–70%</p>
            <p className="text-[0.83vw] font-normal leading-[1.25vw] max-w-[15.31vw]">
              Switching to IVF or ICSI can raise success rates to 60–70% per cycle in suitable cases.
            </p>
          </div>
        </div>

        {/* Circle 2 */}
        <div className="absolute rounded-full bg-[#E5F1FF] w-[20vw] h-[20vw] top-[18vh] left-[30vw]">
          <div className="flex justify-between pt-[2vh] border-t border-t-[rgba(122,122,122,0.5)] 
        w-[35.31vw] absolute transform -translate-x-[60%] top-[40%]">
            <p className="text-[0.83vw] font-normal leading-[1.25vw] max-w-[15.31vw]">
              The success rate of a single IUI cycle is only 5–10%, meaning multiple attempts are often needed.
            </p>
            <p className="text-[3.33vw] font-medium leading-[2.92vw]">5–10%</p>
          </div>
        </div>

        {/* Circle 3 */}
        <div className="absolute rounded-full bg-[#E4F8B6] w-[22vw] h-[22vw] top-[40vh] left-[45vw]">
          <div className="flex justify-between pt-[2vh] border-t border-t-[rgba(122,122,122,0.5)] 
        w-[32.14vw] absolute transform translate-x-[20%] top-[40%]">
            <p className="text-[3.33vw] font-medium leading-[2.92vw]">
              3–4<br /> Cycles
            </p>
            <p className="text-[0.83vw] font-normal leading-[1.25vw] max-w-[15.31vw]">
              If you’ve had 3–4 failed IUI cycles, it’s time to consult your doctor about advanced options.
            </p>
          </div>
        </div>
      </div>


    </section>
  );
}