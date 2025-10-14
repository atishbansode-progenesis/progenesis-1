import React from "react";
import "../about/AboutMain.css";

const CheckIcon = () => (
  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#1656A5] text-[#1656A5]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  </span>
);

const Dash = () => <span className="text-[#2C2C2C]">-</span>;
 
const EmiDocuments = () => {
  return (
    <section id="stats" className="w-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[url('/images/EmiLast.png')] bg-cover opacity-60" />

      <div className="relative section-spacing w-full px-6 md:px-8 lg:px-16 py-10 md:py-14 pt-9">
        {/* Badge */}
        <div className="mb-3">
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] font-medium md:text-[13px] leading-[20px] px-3 py-1 rounded-[8px]">Stats and Metrics</span>
        </div>

        {/* Heading */}
        <h2 className="text-[#2C2C2C] font-normal tracking-tight text-[32px] sm:text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] mb-8 md:pb-8">
          Required Documents
          <br />
          During Application.
        </h2>

        {/* Desktop/Tablet Table */}
        <div className="hidden md:block bg-[#FFFFFF] backdrop-blur-sm rounded-[16px] overflow-hidden border-[#E3ECF7]">
          {/* Head */}
          <div className="grid grid-cols-4 text-[#2C2C2C] p-4">
            <div className="" />
            <div className=" text-center text-[22px]">Adhar Card</div>
            <div className=" text-center text-[22px]">Pan Card</div>
            <div className=" text-center text-[22px]">IT Return Salary Slip</div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-4 items-center bg-[#F5F9FF] p-4">
            <div className=" text-[20px] text-[#2C2C2C]">Address Proof</div>
            <div className=" flex justify-center"><CheckIcon /></div>
            <div className=" flex justify-center"><CheckIcon /></div>
            <div className=" flex justify-center"><Dash /></div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 items-center bg-[#FFFFFF] p-4">
            <div className=" text-[20px] text-[#2C2C2C]">Identity Proof</div>
            <div className=" flex justify-center"><CheckIcon /></div>
            <div className=" flex justify-center"><CheckIcon /></div>
            <div className=" flex justify-center"><Dash /></div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-4 items-center bg-[#F5F9FF] p-4">
            <div className=" text-[20px] text-[#2C2C2C]">Income Proof</div>
            <div className=" flex justify-center"><Dash /></div>
            <div className=" flex justify-center"><Dash /></div>
            <div className=" flex justify-center"><CheckIcon /></div>
          </div>
          <div className=" hidden md:block bg-[#FFFFFF] text-[18px] text-[#2C2C2C] p-4">
          Bank Statement of last 6 month from date of application
          </div>
        </div>

        {/* Desktop/Tablet Note */}
        

        {/* Mobile Layout: Stacked cards */}
        <div className="md:hidden ">
          {/* Address Proof */}
          <div className="bg-[#F5F9FF] rounded-t-[16px] gap-2 p-2">
            <h3 className="text-[#2C2C2C] font-semibold mb-3 pb-2">Address Proof</h3>
            <div className="flex items-center gap-3 mb-2 text-[#2C2C2C] pb-2">
              <CheckIcon />
              <span>Aadhar Card</span>
            </div>
            <div className="flex items-center gap-3 text-[#2C2C2C] pb-2">
              <CheckIcon />
              <span>Pan Card</ span>
            </div>
          </div>

          {/* Identity Proof */}
          <div className="bg-[#FFFFFF] p-2">
            <h3 className="text-[#2C2C2C] font-semibold mb-3 pb-2">Identity Proof</h3>
            <div className="flex items-center gap-3 mb-2 text-[#2C2C2C] pb-2">
              <CheckIcon />
              <span>Aadhar Card</span>
            </div>
            <div className="flex items-center gap-3 text-[#2C2C2C] pb-2">
              <CheckIcon />
              <span>Pan Card</span>
            </div>
          </div>

          {/* Income Proof */}
          <div className="bg-[#F5F9FF] p-2">
            <h3 className="text-[#2C2C2C] font-semibold mb-3 pb-2">Income Proof</h3>
            <div className="flex items-center gap-3 text-[#2C2C2C] pb-2">
              <CheckIcon />
              <span>IT Return Salary Slip</span>
            </div>
          </div>

          {/* Note card */}
          <div className="bg-[#FFFFFF] rounded-b-[16px] p-2 text-[#2C2C2C]">
            Bank Statement of last 6 month from date of application
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiDocuments;
