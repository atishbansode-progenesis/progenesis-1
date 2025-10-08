"use client";
import React, { useState } from "react";

type QA = { q: string; a: string };

type Tab = {
  label: string;
  items: QA[];
};

const tabs: Tab[] = [
  {
    label: "General",
    items: [
      {
        q: "What is infertility?",
        a: "Inability to get pregnant after a year under 35, or 6 months over 35, may indicate infertility. Consult a fertility specialist to determine the cause and get treatment.",
      },
      { q: "What causes infertility?", a: "Infertility can be caused by ovulation issues, low sperm count or motility, blocked tubes, hormonal problems, age, lifestyle, or unexplained factors." },
      { q: "What can cause infertility in Women?", a: "Common causes include PCOS, endometriosis, tubal blockage, ovulation disorders, thyroid imbalance, and age-related decline." },
      { q: "How Common is infertility?", a: "Roughly 10–15% of couples experience infertility, and many benefit from timely evaluation and treatment." },
      { q: "What can cause infertility in Men?", a: "Low sperm count, poor motility or morphology, infections, varicocele, hormonal issues, or lifestyle factors can contribute." },
      { q: "When should I seek consultation for infertility?", a: "Seek consultation after 12 months of trying (or 6 months if over 35), or earlier if you have known medical concerns." },
      { q: "What can cause infertility in Men?", a: "Evaluation by a specialist can identify causes and guide options like lifestyle changes, medication, IUI, or IVF." },
      { q: "Can I improve my fertility?", a: "Yes, adopting a healthy lifestyle with balanced nutrition, regular exercise, avoiding tobacco and excessive alcohol, and managing stress can improve fertility outcomes for both men and women." },
    ],
  },
  {
    label: "Pricing & Packages",
    items: [
      { q: "Do you offer packages?", a: "Yes, we offer transparent packages tailored to treatment needs. Contact our team for current details." },
      { q: "Are there financing options?", a: "We can guide you to financing partners and flexible payment schedules where available." },
      { q: "Yes, financing options including installment plans and collaborations with third-party services are available to help patients manage treatment costs.", a: "Are there financing options available?" },
    ],
  },
  {
    label: "Treatment-Specific",
    items: [
      { q: "What is IVF?", a: "IVF involves fertilizing an egg with sperm in a lab and transferring the embryo into the uterus." },
      { q: "What is IUI?", a: "IUI places processed sperm directly into the uterus around ovulation to improve chances of fertilization." },
      { q: "How long does IVF treatment take?", a: "Typically, one IVF cycle spans about 4 to 6 weeks, encompassing ovarian stimulation, egg retrieval, fertilization, embryo culture, and embryo transfer into the uterus." },
      { q: "How many IVF cycles are required?", a: "The number of IVF cycles varies by individual cases, but 1 to 3 cycles are common, with personalized plans based on patient response and success rates." },
      { q: "Is IVF painful?", a: "IVF itself involves minor discomfort; egg retrieval may cause some pain but is conducted under sedation or anesthesia to minimize discomfort." },
    ],
  },
  {
    label: "Fertility-Related",
    items: [
      { q: "Does age affect fertility?", a: "Yes. Fertility declines with age, especially after 35 in women, and gradually in men over time." },
      { q: "Can lifestyle affect fertility?", a: "Nutrition, sleep, stress, weight, and smoking/alcohol can all influence fertility outcomes." },
      { q: "What is male infertility?", a: "Male infertility can be caused by low sperm count, poor motility, hormonal imbalances, or structural issues, and many forms can be treated effectively through medication, surgical correction of abnormalities, or assisted reproductive technologies like ICSI." },
      { q: "How does age affect fertility?", a: "Fertility naturally declines with age, especially in women after age 35, affecting both the quantity and quality of eggs and potentially decreasing IVF success rates." },
      { q: "Are fertility treatments safe?", a: "Most fertility treatments are considered safe with minimal side effects, though risks vary depending on the specific treatment and individual health factors." },
      { q: "Can secondary infertility relate to difficulty conceiving after having one or more biological children and can have different causes than primary infertility?", a: "Yes, secondary infertility relates to difficulty conceiving after having one or more biological children and can have different causes than primary infertility." },
    ],
  },
  {
    label: "Others",
    items: [
      { q: "How long does a consult take?", a: "Typically 30–45 minutes for the first visit, depending on tests and history." },
      { q: "Do I need a referral?", a: "No referral is required. You can book directly with our clinic." },
      { q: "How can I access my fertility test results?", a: "Test results are usually shared through your physician during consultations; many clinics also provide online portals for convenient access to results." },
      { q: "Can I get a second opinion on fertility treatments?", a: "Yes, Progenesis offers second opinions and provides detailed treatment records to support informed decisions." },
      { q: "Can I use a known sperm/egg donor for treatment?", a: "Yes, Progenesis facilitates the use of known donors following thorough medical and psychological screening." },
      { q: "Are donor candidates screened for safety?", a: "Donor candidates undergo comprehensive medical evaluations including genetic testing and screening for infectious diseases to ensure donor and recipient safety." },
    ],
  },
];

const FaQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  // By default, open the first question in the General tab
  const [openIndex, setOpenIndex] = useState(0);

  const handleTab = (idx: number) => {
    setActiveTab(idx);
    // reset open state, open first if available
    setOpenIndex(0);
  };

  const activeItems = tabs[activeTab].items;

  return (
    <section id="faqs" className="section-spacing w-full csLg:h-[850px] bg-[#FAFAFA] px-6 md:px-10 lg:px-[90px] py-10 md:py-14 lg:py-16 font-[Manrope]" >
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] lg:grid-cols-[420px_1fr] gap-6 md:gap-8 lg:gap-10">
        {/* Left intro */}
        <div>
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-2 py-1 rounded-[8px]">FAQ's</span>
          <div style={{paddingBottom:'20px'}}>
          <h2 className="text-[36px] md:text-[48px] font-normal leading-tight text-[#2C2C2C]">
            Quick answers to the
            
            <span className="text-[#94BA3D]"> most common</span>
            <br />
            <span className="text-[#94BA3D]">fertility-related</span>
            <br />
           <span className="text-[#94BA3D]">questions.</span> 
          </h2></div>
          <p className="mt-6 text-[13px] md:text-[16px] font-normal text-[#2C2C2C]">
            Didn’t find what you are looking for?
            <br />
            Checkout <span className="text-[#1656A5] underline decoration-[#2C2C2C80] decoration-[0.5px] ">Patient Resources</span> section to know more.
          </p>
        </div>

        {/* Right content */}
        <div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-6" >
            {tabs.map((t, idx) => {
              const active = idx === activeTab;
              return (
                <button
                  key={t.label}
                  onClick={() => handleTab(idx)}
                  className={`h-[40px] w-auto px-4 rounded-[16px] border text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#1656A5] text-white border-[#1656A5]"
                      : "bg-[#FFFFFF] text-[#1656A5] border-[#1656A5] "
                  }`}
                  
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Accordion list */}
          <div className="space-y-3">
            {activeItems.map((item, i) => {
              const open = i === openIndex;
              return (
                <div
                  key={i}
                  className={`bg-[#FFFFFF] overflow-hidden rounded-[16px] ${
                    open 
                  }`}
                >
                  <button
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-3 text-left md:py-4 py-4 rounded-2xl  text-[14px] md:text-[15px] text-[#2C2C2C]"
                  >
                    <span className="pl-4 pr-2">{item.q}</span>
                    <span className="text-gray-500 pr-2">{open ? <img src='/images/icons/upward.svg' className="w-[10px] h-[10px] object-contain" /> : <img src='/images/icons/downward.svg' className="w-[10px] h-[10px] object-contain" />}</span>
                  </button>
                  {open && (
                    <div className="pl-4 pb-4 pr-4  text-left text-[14px] text-[#4B5563]" >
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

export default FaQ;
