import React from "react";

const ResourceCta: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch  bg-gradient-to-r from-[#f6fbf5] via-[#f6fbf5] to-[#e3eef7]">
      

      {/* Text block with spacing */}
      <div className="md:order-1 section-spacing flex-1 w-full flex flex-col justify-center">
        <div className="text-center md:text-left text-[32px] md:text-[2rem] text-[#8dc63f] font-normal leading-[1.2]">
          Discover answers, find inspiration, and take the next step in your journey with confidence.
        </div>
      </div>

      {/* Image block (flush left on desktop) */}
      <div className="order-1 md:order-2 w-full md:w-auto flex justify-center md:justify-end relative">

        <img
          src="\images\babywithhandimage.png"
          alt="Resources illustration"
          className="w-full md:h-full md:max-w-[420px] object-cover "
        />
      </div>
    </div>
  );
};

export default ResourceCta;
