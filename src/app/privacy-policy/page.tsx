"use client";

import React, { useEffect, useState } from "react";

const PrivacyPolicyPage = () => {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "coverage", label: "What This Privacy Policy Covers" },
    { id: "personal-info", label: "Collection & Use of Personal Information" },
    { id: "nonpersonal-info", label: "Collection & Use of Non-personal Information" },
    { id: "sharing", label: "Information Sharing & Disclosure" },
    { id: "consent", label: "Consent" },
    { id: "security", label: "Security" },
    { id: "changes", label: "Changes to this Privacy Policy" },
    { id: "questions", label: "Questions or Suggestions" },
  ];

  const [activeId, setActiveId] = useState("overview");

  // 🔹 Smooth highlight update while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let current = "overview";
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop - 140; // account for header
          if (window.scrollY >= offsetTop) {
            current = section.id;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once at start
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // 🔹 Smooth scroll behavior
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120; // adjust for sticky header
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-full font-manrope text-[#202020]">
{/* 🔹 Hero Section */}
      <section
        className="
          relative w-full px-6 md:px-[80px] xl:px-[120px]
          py-12 md:py-20 lg:py-28 overflow-hidden
          bg-[url('/PrivacyPolicy/privacy-bg.png')] bg-cover bg-center md:bg-none
        "
      >
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-[#E6F0FF] to-white"></div>
        <img
          src="/PrivacyPolicy/privacy-bg.png"
          alt="Hero Background Pattern"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10">
          <h1
            className="
              text-[#252525]
              text-[32px] leading-[40px] tracking-[-0.64px] font-semibold
              md:text-[56px] md:leading-[64px] md:tracking-[-1.12px]
              lg:text-[80px] lg:leading-[88px] lg:tracking-[-1.6px]
              mb-[24px] md:mb-[32px] lg:mb-[40px]
            "
          >
            Privacy Policy
          </h1>
          <h2
            className="
              text-[#202020]
              text-[16px] leading-[24px] tracking-[-0.32px] font-normal
              md:text-[24px] md:leading-[32px] md:tracking-[-0.48px]
              lg:text-[32px] lg:leading-[40px] lg:tracking-[-0.64px]
            "
          >
            Latest Updates on August 2025
          </h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-[80px] xl:px-[120px] py-12 md:py-20 flex flex-col md:flex-row gap-12">
        {/* Mobile Dropdown */}
        {/* <div className="block md:hidden mb-6 w-full">
          <select
            value={activeId}
            onChange={(e) => scrollToSection(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            {sections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.label}
              </option>
            ))}
          </select>
        </div> */}
<div className="block md:hidden mb-6 w-full">
  <select
    value={activeId}
    onChange={(e) => scrollToSection(e.target.value)}
    className="
      w-full 
      rounded-lg 
      px-4 py-3 
      bg-[var(--Chip_Blue,rgba(22,86,165,0.05))]
      text-gray-800 
      text-base 
      appearance-none 
      focus:outline-none 
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    "
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M9 11L12 14L15 11' stroke='%232C2C2C' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 1rem center",
      backgroundSize: "24px",
    }}
  >
    {sections.map((section) => (
      <option key={section.id} value={section.id}>
        {section.label}
      </option>
    ))}
  </select>
</div>

        {/* Sidebar */}
        <aside className="hidden md:block md:w-1/3 sticky top-28 self-start">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`block text-left text-[16px] transition-colors ${
                    activeId === section.id
                      ? "text-[#1656A5] font-semibold"
                      : "text-[#202020] hover:text-[#1656A5]"
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <article className="md:w-3/4 space-y-[56px] md:space-y-[64px] lg:space-y-[80px]">
          {/* Overview */}
          <div id="overview">
            <h3
              className="
    text-[#202020]
    font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px]
    md:text-[28px] md:leading-[36px] md:tracking-[-0.56px] md:font-medium
    lg:font-['Plus Jakarta Sans'] lg:text-[40px] lg:leading-normal lg:font-medium
  mb-[24px]"
            >
              Overview
            </h3>
            <p className="section-body">
              Progenesis Fertility Center, from the house of We Care Hospital Services.
              is Advanced Center for Reproductive Medicine (here onwards described as ‘Progenesis IVF’)
              is the author of this Privacy Policy. This policy demonstrates our commitment to ensure
              the privacy of entities using our website. We urge everyone to read the minutes of our
              Privacy Policy that are explained below and learn about how we treat the personally
              identifiable information that we collect from consenting visitors and users of our website.
            </p>
          </div>

          {/* Coverage */}
          <div id="coverage">
            <h3
              className="
    text-[#202020]
    font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px]
    md:text-[28px] md:leading-[36px] md:tracking-[-0.56px] md:font-medium
    lg:font-['Plus Jakarta Sans'] lg:text-[40px] lg:leading-normal lg:font-medium
  mb-[24px]"
            >
              What This Privacy Policy Covers
            </h3>
            <p className="section-body">
              This Privacy Policy only covers the treatment of personally identifiable information that we
              collect through our website and are operated by Progenesis IVF. Information covered by this
              Privacy Policy includes editors of companies and organizations that are not owned or set up by us,
              or by individuals that we do not employ or associate with, and any third-party websites that our website links to.
            </p>
          </div>

          {/* Personal Info */}
          <div id="personal-info">
            <h3
              className="
    text-[#202020]
    font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px]
    md:text-[28px] md:leading-[36px] md:tracking-[-0.56px] md:font-medium
    lg:font-['Plus Jakarta Sans'] lg:text-[36px] lg:leading-normal lg:font-medium
  mb-[24px]"
            >
              Collection & Use of Personal Information
            </h3>
            <p className="section-body">
              You can use our website without revealing any personal information. However, we will need
              certain personal information if you decide to use Progenesis’s treatment and/or counseling services.
              Where required, this information may comprise your personal contact information. We will use this
              information to reply to your queries, provide you with requested services, and contact you regarding
              new services. By accessing the website of Progenesis and providing us with requested personal
              information, you consent to the collection and the use of information in keeping with this Privacy Policy.
            </p>
          </div>

          {/* Non-personal Info */}
          <div id="nonpersonal-info">
            <h3
              className="
    text-[#202020]
    font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px]
    md:text-[28px] md:leading-[36px] md:tracking-[-0.56px] md:font-medium
    lg:font-['Plus Jakarta Sans'] lg:text-[40px] lg:leading-normal lg:font-medium
  mb-[24px]"
            >
              Collection & Use of Non-personal Information
            </h3>
            <p className="section-body">
              Progenesis automatically receives and stores non-personal information on our server logs
              from your web browser which includes your IP address, cookie information, and the page you requested.
              We may use this information to customize the advertisements and content you see and to fulfill your
              requests for certain services. However, we do not connect this non-personal data to any personal
              information collected from you.
            </p>
          </div>

          {/* Sharing */}
          <div id="sharing">
            <h3
              className="
    text-[#202020]
    font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px]
    md:text-[28px] md:leading-[36px] md:tracking-[-0.56px] md:font-medium
    lg:font-['Plus Jakarta Sans'] lg:text-[40px] lg:leading-normal lg:font-medium
  mb-[24px]"
            >
              Information Sharing & Disclosure
            </h3>
            <p className="section-body">
              Progenesis may disclose your personal information to third parties who work with us to provide
              treatment and counseling services requested by you. We will never sell personal information that we
              possess to any other parties whose privacy policies are not consistent with ours without your knowledge
              and consent with respect to use of personal information.
            </p>
            <p className="section-body">
              We may also disclose your personal information under the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 section-body">
              <li>We have your definite consent to share the information for a specified purpose</li>
              <li>We need to respond to summons, court orders, or any other legal process/function</li>
              <li>We need to protect the personal safety of the users of our website or defend Progenesis’s rights or property</li>
              <li>We find that your actions on our website violate the usage guidelines contained within our Terms of Use or any other similar document</li>
            </ul>
          </div>
          {/* Consent */}
          <div id="consent">
            <h3
              className="
    text-[#202020]
    font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px]
    md:text-[28px] md:leading-[36px] md:tracking-[-0.56px] md:font-medium
    lg:font-['Plus Jakarta Sans'] lg:text-[40px] lg:leading-normal lg:font-medium
 mb-[24px] "
            >
              Consent
            </h3>
            <p className="section-body">
              If you do not agree to the collection, use, or disclosure of your personal information as outlined above,
              please do not provide any personal information to Progenesis. If you have provided personal information
              to Progenesis but no longer consent to its use or disclosure as outlined herein, please notify us at{" "}
              <a href="mailto:progenesisivf.com" className="text-[#1656A5] underline">progenesisivf.com</a>.
            </p>
          </div>

          {/* Security */}
          <div id="security">
            <h3
              className="
    text-[#202020]
    font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px]
    md:text-[28px] md:leading-[36px] md:tracking-[-0.56px] md:font-medium
    lg:font-['Plus Jakarta Sans'] lg:text-[40px] lg:leading-normal lg:font-medium
  mb-[24px]"
            >
              Security
            </h3>
            <p className="section-body">
              Unfortunately, no transmission of data over the Internet is 100% safe and secure. However, your
              Progenesis information is protected for your privacy and security in certain parts of our network,
              as identified in the site itself. We also protect your personal information from unauthorized access
              by implementing access control procedures, network firewalls, and physical security measures.
            </p>
          </div>

          {/* Changes */}
          <div id="changes">
            <h3
              className="
    text-[#202020]
    font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px]
    md:text-[28px] md:leading-[36px] md:tracking-[-0.56px] md:font-medium
    lg:font-['Plus Jakarta Sans'] lg:text-[40px] lg:leading-normal lg:font-medium
  mb-[24px]"
            >
              Changes to this Privacy Policy
            </h3>
            <p className="section-body">
              Progenesis reserves the right to amend this Privacy Policy from time to time, at any time without notifying
              its users. We suggest users to refer to this section periodically and stay updated of any changes. Your continued
              use of our website after any such amendments signifies your acceptance thereof.
            </p>
          </div>

          {/* Questions */}
          <div id="questions">
            <h3
              className="
    text-[#202020]
    font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px]
    md:text-[28px] md:leading-[36px] md:tracking-[-0.56px] md:font-medium
    lg:font-['Plus Jakarta Sans'] lg:text-[40px] lg:leading-normal lg:font-medium
 mb-[24px] "
            >
              Questions or Suggestions
            </h3>
            <p>If you have any questions or suggestions about this Privacy Policy, or regarding your own personal information,
              please contact us at{" "}
              <a href="mailto:sandeep@progenesisivf.com" className="text-[#1656A5] underline">
                sandeep@progenesisivf.com
              </a>.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;

