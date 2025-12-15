"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type QA = { q: string; a: string };

const mumbaiFaqs: QA[] = [
  {
    q: "How can I contact Progenesis Fertility Center?",
    a: "You can reach us at the address mentioned above or you can call us on +91-942 397 1620."
  },
  {
    q: "When should I visit the Mumbai Fertility Center?",
    a: "You should visit after 12 months of trying to conceive (or 6 months if you're over 35), or earlier if you have known fertility concerns, irregular periods, or a history of reproductive health issues."
  },
  {
    q: "How should I know if IVF is the right treatment?",
    a: "Our fertility specialists at Mumbai will conduct a comprehensive evaluation including medical history, physical examination, and diagnostic tests to determine if IVF is suitable for your specific situation. We'll discuss all available options before recommending a treatment plan."
  },
  {
    q: "What Advanced Infertility Treatments are available?",
    a: "Our Mumbai center offers advanced treatments including IVF, ICSI, IUI, Blastocyst Culture & Transfer, Laser Assisted Hatching (LAH), Donor Programs, Laparoscopy, and Hysteroscopy. We customize treatment plans based on individual needs."
  },
  {
    q: "What is the cost of IVF in Mumbai?",
    a: "IVF costs vary based on individual treatment requirements and protocols. We offer transparent pricing and customized packages. Please contact our Mumbai center for detailed cost information and available financing options."
  },
  {
    q: "Which is the best IVF center in Mumbai?",
    a: "Progenesis IVF is a leading fertility center in Mumbai with state-of-the-art facilities, experienced specialists, and high success rates. We have multiple centers across Mumbai including locations in Borivali, Thane, Vashi, Andheri, Kalyan, Panvel, and Virar."
  },
  {
    q: "What are the success rates at Mumbai Fertility Center?",
    a: "Success rates vary based on age, medical history, and specific fertility issues. Our Mumbai center maintains high success rates comparable to international standards. Your fertility specialist will discuss expected success rates during your consultation."
  },
  {
    q: "Do you offer consultation packages?",
    a: "Yes, we offer comprehensive consultation packages that include initial assessment, diagnostic tests, and personalized treatment planning. Contact our Mumbai center for current package details and pricing."
  }
];

const MumbaiFaqSection: React.FC = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="bg-[#fafafa] pt-[42px] h-auto md:pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] lg:grid-cols-[420px_1fr] gap-6 md:gap-8 lg:gap-10">
        {/* Left intro */}
        <div>
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-2 py-1 rounded-[8px] mb-4">
            FAQ's
          </span>
          <div style={{ paddingBottom: '20px' }}>
            <h2 className="text-[36px] md:text-[48px] leading-10 font-normal md:leading-[56px] text-[#2C2C2C]">
              Quick answers to the
              <span className="text-[#94BA3D]"> most common</span>
              <br />
              <span className="text-[#94BA3D]">fertility-related</span>
              <br />
              <span className="text-[#94BA3D]">questions.</span>
            </h2>
          </div>
          <p className="mt-6 text-[13px] md:text-[16px] md:leading-6 font-normal text-[#2C2C2C]">
            Didn't find what you are looking for?
            <br />
            Checkout{" "}
            <span
              className="text-[#1656A5] underline decoration-[#2C2C2C80] decoration-[0.5px] cursor-pointer"
              onClick={() => router.push("/blog")}
            >
              Patient Resources
            </span>{" "}
            section to know more.
          </p>
        </div>

        {/* Right content - Accordion list */}
        <div>
          <div className="space-y-3">
            {mumbaiFaqs.map((item, i) => {
              const open = i === openIndex;
              return (
                <div
                  key={i}
                  className="bg-[#FFFFFF] overflow-hidden rounded-[16px]"
                >
                  <button
                    aria-label="expand"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-3 hover:cursor-pointer text-left md:py-4 py-4 rounded-2xl text-[14px] md:text-[15px] text-[#2C2C2C]"
                  >
                    <span className="pl-4 pr-2">{item.q}</span>
                    <span className="text-gray-500 pr-2">
                      {open ? (
                        <img
                          src="/images/icons/upward.svg"
                          alt="upward arrow"
                          className="w-[10px] h-[10px] object-contain"
                        />
                      ) : (
                        <img
                          src="/images/icons/downward.svg"
                          alt="downward image"
                          className="w-[10px] h-[10px] object-contain"
                        />
                      )}
                    </span>
                  </button>
                  {open && (
                    <div className="pl-4 pb-4 pr-4 text-left md:text-[16px] md:leading-6 text-[14px] text-[#4B5563]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MumbaiFaqSection;