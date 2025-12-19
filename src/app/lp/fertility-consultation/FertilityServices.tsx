import React, { useState } from 'react';

export default function FertilityServices() {
  // State to track the currently open accordion index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Array of services with titles and descriptions
  const services = [
    {
      title: "INFERTILITY ASSESSMENT",
      description: "Get a complete assessment to understand infertility causes and recommended treatments.",
    },
    {
      title: "IN-VITRO FERTILISATION - INTRA CYTOPLASMIC SPERM INJECTION (IVF-ICSI)",
      description: "Advanced techniques for egg fertilization, ensuring the best outcomes.",
    },
    {
      title: "FERTILITY ENHANCING SURGERIES",
      description: "Minimally invasive surgeries to enhance fertility chances.",
    },
    {
      title: "GENETIC TESTING (PGT)",
      description: "State-of-the-art genetic testing for ensuring the health of your future child.",
    },
    {
      title: "FREEZING - EGG, SPERM, EMBRYOS",
      description: "Cryopreservation options for preserving eggs, sperm, or embryos.",
    },
    {
      title: "PRESERVATION FOR CANCER PATIENTS",
      description: "Fertility preservation options available for cancer patients before treatments like chemotherapy.",
    },
  ];

  // Function to toggle accordion open/closed state
  const toggleAccordion = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section
      className="py-16 px-4 bg-gray-50"
      style={{
        backgroundImage: 'url("/images/lp-treatments.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left side (empty, reserved for background) */}
        <div className="lg:w-1/2"></div>

        {/* Content aligned to the center (responsive) */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-8 text-center">
            Fertility Services
          </h2>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                {/* Accordion button */}
                <button
                  className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-100 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-gray-800 font-medium text-sm md:text-base">
                    {service.title}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Accordion content */}
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 text-gray-700 text-sm md:text-base">
                    {service.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}