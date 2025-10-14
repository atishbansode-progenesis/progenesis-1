"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ArrowDownProps {
  open: boolean;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className={`text-white transition-transform duration-300 ease-in-out ${
      open ? "rotate-180" : "rotate-0"
    }`}
  >
    <path
      d="M9 11L12 14L15 11"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

const Footer: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const renderList = (key: string, items: { label: string; href: string }[]) => (
    <ul
      className={`ml-2 md:ml-0 mt-2 space-y-2 text-sm md:text-base leading-6 text-white/70 transition-all duration-300 ease-in-out
        ${openDropdown === key ? "block" : "hidden md:group-hover:block"}`}
    >
      {items.map((it) => (
        <li key={it.label}>
          <Link
            href={it.href}
            className="hover:text-white block transition-colors duration-200"
          >
            {it.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer
  className="relative w-full min-h-[120vh] flex flex-col justify-between bg-center bg-cover bg-no-repeat bg-fixed text-white overflow-hidden"
  style={{ backgroundImage: "url('/footer.png')" }}
>

  
{/* <footer className="relative w-full h-[130vh] md:h-[120vh] flex flex-col justify-between bg-center bg-cover bg-no-repeat text-white overflow-hidden" style={{ backgroundImage: "url('/footer.png')" }}> */}



{/* </footer><footer className="relative w-full min-h-[120vh] flex flex-col justify-between bg-center bg-cover bg-no-repeat bg-fixed text-white overflow-hidden" style={{ backgroundImage: "url('/footer.png')" }}> */}



      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-screen-2xl w-full mx-auto px-6 md:px-20 pt-10 md:pt-20 pb-10">
        {/* Logo */}
        <div className="mb-10 md:mb-20">
          <Link href="/">
            <img
              src="/footer.svg"
              alt="Progenesis Logo"
              className="w-40 md:w-64 object-contain"
            />
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-8 md:gap-x-12 lg:gap-x-20">
          {/* About */}
          <div>
            <h3 className="text-base md:text-lg font-[Manrope] font-semibold leading-6 mb-4">
              About
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Centers", href: "/centers" },
                { label: "Doctors", href: "/doctors" },
                { label: "Careers", href: "/careers" },
                { label: "Success Stories", href: "/success-stories" },
              ].map((it) => (
                <li key={it.label}>
                  <Link
                    href={it.href}
                    className="text-base font-[Manrope] leading-6 text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infertility Dropdowns */}
          <div>
            <h3 className="text-base md:text-lg font-[Manrope] font-semibold leading-6 mb-4">
              Infertility
            </h3>

            {/* Female Infertility */}
            <div
              className="mb-4 group"
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("femaleInf")}
                className="flex cursor-pointer justify-between items-center w-full text-left hover:opacity-90"
              >
                <span>Female Infertility</span>
                <ArrowDown open={openDropdown === "femaleInf"} />
              </button>
              {renderList("femaleInf", [
                { label: "Repeated IUI Failure", href: "/infertility/female/repeated-iui-failures/" },
                { label: "Repeated IVF Failure", href: "/infertility/female/repeated-ivf-failures/" },
                { label: "Pregnancy after Menopause", href: "/infertility/female/pregnancy-after-menopause/" },
                { label: "Low AMH", href: "/infertility/female/low-amh/" },
                { label: "PCOS", href: "/infertility/female/pcos/" },
                { label: "Tubal Blockage", href: "/infertility/female/tubal-blockage/" },
                { label: "Fibroids", href: "/infertility/female/fibroids/" },
                { label: "Endometriosis", href: "/infertility/female/endometriosis/" },
              ])}
            </div>

            {/* Male Infertility */}
            <div className="group" onMouseLeave={() => setOpenDropdown(null)}>
              <button
                type="button"
                onClick={() => toggleDropdown("maleInf")}
                className="flex cursor-pointer justify-between items-center w-full text-left hover:opacity-90"
              >
                <span>Male Infertility</span>
                <ArrowDown open={openDropdown === "maleInf"} />
              </button>
              {renderList("maleInf", [
                { label: "Azoospermia", href: "/infertility/male/azoospermia/" },
                { label: "Low Sperm Count", href: "/infertility/male/low-sperm-count/" },
                { label: "Erectile Dysfunction (ED)", href: "/infertility/male/erectile-dysfunction/" },
              ])}
            </div>
          </div>

          {/* Treatments Dropdowns */}
          <div>
            <h3 className="text-base md:text-lg font-[Manrope] font-semibold leading-6 mb-4">
              Treatments
            </h3>

            {[
              {
                key: "advTreat",
                label: "Advanced Treatments",
                items: [
                  { label: "IMSI", href: "/treatments/advanced/imsi" },
                  { label: "PICSI", href: "/treatments/advanced/picsi" },
                  { label: "LAH", href: "/treatments/advanced/lah" },
                  { label: "Blastocyst Transfer", href: "/treatments//advanced/blastocyst-transfer" },
                  { label: "Sequential Embryo Transfer", href: "/treatments/advanced/sequential-embryo-transfer/" },
                  { label: "PGD/PGS/PGT-A", href: "/treatments/advanced/pgd-pgs-pgt-a/" },
                  { label: "Class-1000 Modular Lab", href: "/treatments/advanced/class-1000-modular-lab/" },
                  { label: "Trigas Incubators", href: "/treatments/advanced/trigas-incubators/" },
                  { label: "Witness System", href: "/treatments/advanced/witness-system/" },
                  { label: "Cryopreservation of Human Gametes", href: "/treatments/advanced/cryopreservation/" },
                ],
              },
              {
                key: "infTreat",
                label: "Infertility Treatments",
                items: [
                  { label: "Ovulation Induction", href: "/treatments/infertility/ovulation-induction/" },
                  { label: "IUI", href: "/treatments/infertility/artificial-insemination-iui-treatment/" },
                  { label: "IVF", href: "/treatments/infertility/ivf/" },
                  { label: "IVF–ICSI", href: "/treatmentsinfertility/ivf-icsi/" },
                  { label: "Frozen Embryo Transfer", href: "/treatments/infertility/frozen-embryo-transfer/" },
                  { label: "Fertility Surgery", href: "/treatments/infertility/fertility-surgery/" },
                ],
              },
              {
                key: "fPres",
                label: "Fertility Preservation",
                items: [
                  { label: "Female Fertility Preservation", href: "/treatments/preservation/female-fertility-preservation/" },
                  { label: "Male Fertility Preservation", href: "/treatments/preservation/male-fertility-preservation/" },
                  { label: "Embryo Preservation", href: "/treatments/preservation/egg-embryo-freezing/" },
                ],
              },
              {
                key: "fEval",
                label: "Fertility Evaluation",
                items: [
                  { label: "Female Analysis", href: "/treatments/evaluation/female-analysis-complete-reproductive-health-check/" },
                  { label: "Male Analysis", href: "/treatments/evaluation/male-analysis/" },
                ],
              },
            ].map((section) => (
              <div
                key={section.key}
                className="mb-4 group"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown(section.key)}
                  className="flex cursor-pointer justify-between items-center w-full text-left hover:opacity-90"
                >
                  <span>{section.label}</span>
                  <ArrowDown open={openDropdown === section.key} />
                </button>
                {renderList(section.key, section.items)}
              </div>
            ))}
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="text-base md:text-lg font-[Manrope] font-semibold leading-6 mb-4">
              Patient Resources
            </h3>
            <ul className="space-y-2">
              {[
                { label: "International Patients", href: "/international-patients" },
                { label: "EMI Options", href: "/emi-options" },
                { label: "Second Opinion", href: "/second-opinion" },
                { label: "Online Consultation", href: "/online-consultation" },
              ].map((it) => (
                <li key={it.label}>
                  <Link
                    href={it.href}
                    className="text-base font-[Manrope] leading-6 text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Training */}
          <div>
            <h3 className="text-base md:text-lg font-[Manrope] font-semibold leading-6 mb-4">
              Legal & Training
            </h3>
            <ul className="space-y-2">
              {[{ label: "Privacy Policy", href: "/privacy-policy" }].map((it) => (
                <li key={it.label}>
                  <Link
                    href={it.href}
                    className="text-base font-[Manrope] leading-6 text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section (original restored) */}
        <div className="mt-auto w-full pb-10">
          <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <p className="text-base md:text-2xl leading-6 md:leading-10 font-normal max-w-sm md:max-w-2xl">
              Aiming to be the benchmark for reproductive health care services.
            </p>

            <div className="flex items-center gap-4">
              {["/linkedin.svg", "/insta.svg", "/facebook.svg", "/threads.svg", "/twitter.svg"].map(
                (icon, i, arr) => (
                  <React.Fragment key={icon + i}>
                    <a href="#" className="hover:opacity-100 opacity-80">
                      <img src={icon} className="w-8 h-8" alt="social" />
                    </a>
                    {i !== arr.length - 1 && (
                      <div className="h-6 w-px bg-[#685C52] md:bg-white" />
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          </div>

          <div className="mt-2 w-full">
            <div className="w-full max-w-sm md:max-w-[1680px] h-px bg-white opacity-25" />
          </div>

          <div className="pt-2">
            <p className="text-sm md:text-base leading-6 text-white/50">
              © {new Date().getFullYear()} All Rights Reserved. Progenesis Fertility Center.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

