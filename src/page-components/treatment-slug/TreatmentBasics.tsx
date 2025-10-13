import React, { JSX } from "react";
import {
  Search,
  Microscope,
  Syringe,
  Lightbulb,
  HeartPulse,
  CheckCircle,
} from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  Search: <Search className="w-6 h-6 text-[#1656A5]" />,
  Microscope: <Microscope className="w-6 h-6 text-[#1656A5]" />,
  Syringe: <Syringe className="w-6 h-6 text-[#1656A5]" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-[#1656A5]" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-[#1656A5]" />,
  CheckCircle: <CheckCircle className="w-6 h-6 text-[#1656A5]" />,
};

interface TreatmentBasicsProps {
  tag?: string;
  heading: string;
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export default function TreatmentBasics({ tag, heading, items }: TreatmentBasicsProps) {
  return (
    <section id="basics" className="px-[12px] md:px-[80px] xl:px-[120px] py-[80px] bg-[#F9FBFF] scroll-mt-[120px]">
      {tag && (
        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-[#2C2C2C] font-[Manrope] font-normal mb-[60px] text-[32px] leading-[40px] tracking-[-0.64px] md:text-[48px] md:leading-[56px] md:tracking-[-0.96px]">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 rounded-[12px] bg-[#EEF5FF] border border-[#E6E6E6] p-6 hover:shadow-md transition"
          >
            {iconMap[item.icon] || null}
            <h3 className="text-[#2C2C2C] font-[Manrope] text-[32px] leading-[40px] tracking-[-0.64px] font-normal">
              {item.title}
            </h3>
            <p className="text-[#606060] font-[Manrope] text-[16px] leading-[24px] opacity-80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
