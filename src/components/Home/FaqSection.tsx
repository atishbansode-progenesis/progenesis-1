import React, { useState } from "react";

const categories = [
  "General",
  "Treatment-Specific",
  "Fertility-Related",
  "Others",
];

const faqs = {
  "General": [
    {
      q: "What is infertility?",
      a: "Inability to get pregnant after a year under 35, or 6 months over 35, may indicate infertility. Consult a fertility specialist to determine the cause and get treatment.",
    },
    {
      q: "What causes infertility?",
      a: "It can be caused by issues in either partner or both. Medical evaluation is required.",
    },
    {
      q: "What can cause infertility in Women?",
      a: "Common causes include ovulation disorders, blocked fallopian tubes, endometriosis, and age-related factors.",
    },
    {
      q: "How Common is Infertility?",
      a: "Roughly 1 in 8 couples experience infertility issues globally.",
    },
    {
      q: "What can cause infertility in Men?",
      a: "Low sperm count, poor motility, lifestyle factors, and hormonal imbalances.",
    },
    {
      q: "When should I seek consultation for infertility?",
      a: "If you’ve been trying for over a year (or 6 months if over 35), it’s time to consult a specialist.",
    },
     {
      q: "Can lifestyle affect fertility?",
      a: "Yes, adopting a healthy lifestyle with balanced nutrition, regular exercise, avoiding tobacco and excessive alcohol, and managing stress can improve fertility outcomes for both men and women.",
    },
  ],
  "Treatment-Specific": [
    {
      q: "What treatments are available for infertility?",
      a: "Treatments include medication for ovulation issues, surgical procedures for blockages, IUI, IVF, and methods to assist fertilization or embryo development.",
    },
    {
      q: "Is IVF the only option at Progenesis?",
      a: "No, Progenesis offers a comprehensive range of treatments including IUI, targeted medications, laparoscopic surgeries, and assisted reproductive techniques in addition to IVF.",
    },
    {
      q: "Is IVF the only option at Progenesis?",
      a: "No, Progenesis offers a comprehensive range of treatments including IUI, targeted medications, laparoscopic surgeries, and assisted reproductive techniques in addition to IVF.",
    },
    {
      q: "How long does IVF treatment take?",
      a: "Typically, one IVF cycle spans about 4 to 6 weeks, encompassing ovarian stimulation, egg retrieval, fertilization, embryo culture, and embryo transfer into the uterus.",
    },
    {
      q: "Is IVF painful?",
      a: "IVF itself involves minor discomfort; egg retrieval may cause some pain but is conducted under sedation or anesthesia to minimize discomfort.",
    },
    {
      q: "How many times can IVF be tried?",
      a: "The number of IVF cycles varies by individual cases, but generally, 1 to 3 cycles are common, with personalized plans based on patient response and success rates.",
    },
    {
      q: "What lifestyle changes improve IVF success?",
      a: "Yes, maintaining a healthy diet, regular physical activity, quitting smoking, and reducing stress levels can positively influence IVF outcomes.",
    },
     {
      q: "Are donor eggs or sperm available?",
      a: "Yes, Progenesis offers donor sperm and egg services for patients who require these options to increase their chances of conception.",
    },
  ],
  "Fertility-Related": [
    {
      q: "When is genetic testing advised?",
      a: "Genetic testing is recommended for couples with a history of genetic disorders, recurrent miscarriages, or unsuccessful IVF attempts to ensure healthier pregnancy outcomes.",
    },
    {
      q: "What does PGT-A mean in fertility treatments?",
      a: "Preimplantation Genetic Testing for Aneuploidy (PGT-A) is a genetic screening performed on embryos to detect chromosomal abnormalities before implantation during IVF.",
    },
    {
      q: "Is male infertility treatable?",
      a: "Many forms of male infertility can be treated effectively through medication, surgical correction of abnormalities, or assisted reproductive technologies like ICSI.",
    },
    {
      q: "How does age affect fertility?",
      a: "Fertility naturally declines with age, especially in women after age 35, affecting both the quantity and quality of eggs and potentially decreasing IVF success rates.",
    },
    {
      q: "Are fertility treatments safe??",
      a: "Most fertility treatments are considered safe with minimal side effects, although risks vary depending on the specific treatment and individual health factors.",
    },
    {
      q: "What is fertility preservation?",
      a: "Fertility preservation involves freezing eggs, sperm, or embryos to maintain reproductive potential, often recommended before medical treatments that may compromise fertility.",
    },
    {
      q: "Can secondary infertility affect couples?",
      a: "Yes, secondary infertility refers to difficulty conceiving after already having one or more biological children and can have different causes than primary infertility.",
    },
  ],
  "Others": [
    {
      q: "How can I access my fertility test results?",
      a: "Test results are usually shared through your physician during consultations; many clinics also provide online portals for convenient access to results.",
    },
    {
      q: "Does Progenesis offer financing for fertility treatments?",
      a: "Yes, financing options including installment plans and collaborations with third-party financial services are available to help patients manage treatment costs.",
    },
    {
      q: "Is genetic counseling available?",
      a: "Genetic counseling services are offered to discuss test results, assess risks, and explore reproductive options based on individual genetic information.",
    },
    {
      q: "Are fertility treatment plans personalized?",
      a: "All treatment plans at Progenesis are tailored to each patient’s unique medical history, diagnosis, and fertility goals to ensure the most effective approach.",
    },
    {
      q: "Can I get second opinions on fertility treatments?",
      a: "Progenesis encourages patients to seek second opinions and provides detailed treatment records to support informed decisions.",
    },
    {
      q: "Can I use a known sperm or egg donor for treatment?",
      a: "Yes, Progenesis facilitates treatment using known donors following thorough medical and psychological screening.",
    },
    {
      q: "How are donor candidates screened for safety?",
      a: "Donor candidates undergo comprehensive medical evaluations including genetic testing and screening for infectious diseases to ensure donor and recipient safety.",
    },
  ],
};

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fafafa] pt-[42px] md:h-auto md:pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px]">
      <div className="mx-auto grid lg:grid-cols-2 gap-1 md:pr-[80px]">
        {/* Header / Intro */}
        <div className="mb-6">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
            FAQ’s
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight">
            Quick answers to the{" "}
            <span className="text-[#94BA3D]">most common fertility-related questions.</span>
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            Didn’t find what you are looking for?<br></br>Checkout {" "}
            <a href="#" className="text-blue-600 font-semibold underline">
              Patient Resources
            </a>{" "}
            section to know more.
          </p>
        </div>


        <div>

          {/* Tabs */}

          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={
                    "px-4 py-2 rounded-lg text-sm font-medium transition focus:outline-none " +
                    (active
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50")
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>


          {/* Accordion */}
          <div className="space-y-3">
            {faqs[activeCategory].map((item, idx) => {
              const opened = openIndex === idx;
              return (
                <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={opened}
                    className="w-full text-left px-4 py-4 flex items-center justify-between"
                  >
                    <span className="text-gray-900 text-base font-medium">{item.q}</span>
                    <span className="ml-3">
                      {opened ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M18 15l-6-6-6 6" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M6 9l6 6 6-6" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>

                  <div
                    className={`px-4 pb-4 transition-all duration-200 ${opened ? "pt-0" : "hidden"
                      }`}
                  >
                    {opened && (
                      <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
