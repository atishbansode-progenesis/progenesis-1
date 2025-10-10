import React from "react";

const ResourceCta: React.FC = () => {
  return (
<div
  className="
    relative flex flex-col md:flex-row items-stretch 
    h-[627px] md:h-[400px] w-full 
    bg-[url('/images/babywithhandmobile.png')] md:bg-[url('/images/babywithhandimage.png')] 
    bg-cover bg-center"
>
  <div className="flex-1 flex flex-col md:justify-center px-4 md:pl-[120px] pt-10 ">
    <div className="text-center md:text-left text-[32px] md:text-[2rem] text-[#8dc63f] font-normal leading-[1.2] md:w-[60%]">
      Discover answers, find inspiration, and take the next step in your journey with confidence.
    </div>
  </div>
</div>


  );
};

export default ResourceCta;
