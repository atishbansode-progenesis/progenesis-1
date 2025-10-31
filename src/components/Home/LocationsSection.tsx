

"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";


type SubCity = {
  name: string;
  address: string;
  image: string;
};

type City = {
  city: string;
  address?: string;
  image: string;
  subCities?: SubCity[];
};

const locations: City[] = [
  {
    city: "Mumbai",
    image: "/LocationsSection/mumbai.png",
    subCities: [
      {
        name: "Thane",
        address:
          "16, First Floor, Dosti Imperia Complex , Ghodbunder Road, Opp R Mall, Manpada, Thane (West) - 400607​",
        image: "/LocationsSection/Thane.jpg",
      },
      {
        name: "Andheri",
        address:
          "4th Durolite House, Off New Link Rd, Near Oshiwara Station, Opposite to Laxmi Industrial Complex, Andheri West, Mumbai",
        image: "/LocationsSection/Andheri.jpg",
      },
      {
        name: "Borivali",
        address:
          "Unit no 2, 1st Floor, Volga Building, Rayani Gram, Shimpoli, Borivali West, Mumbai, Maharashtra 400092",
        image: "/LocationsSection/borivali.png",
      },
      {
        name: "Ghatkopar",
        address:
          "1st Floor, Shop Zone Building, Mahatma Gandhi Rd, Ghatkopar West, Mumbai",
        image: "/LocationsSection/Ghatkopar.jpg",
      },
      {
        name: "Vashi",
        address:
          "Ground Floor, Bhumiraj Costarica, Palm Beach Service Road, Sector 18, Vashi, Navi Mumbai",
        image: "/LocationsSection/Vashi.jpg",
      },
      {
        name: "Virar",
        address:
          "2nd Floor, A-Wing, Shreeram Complex, Tirupati Nagar, Virar West, Virar",
        image: "/LocationsSection/Virar.jpg",
      },
      {
        name: "Kalyan",
        address:
          "Diwadkar Complex, 302, Chatrapati Shivaji Maharaj Chowk, Kalyan(W), JijaMata Colony, Kalyan",
        image: "/LocationsSection/Kalyan.jpg",
      },
      {
        name: "Panvel",
        address:
          "1st Floor, Ganga Kalash, Gandhi Hospital Lane, Near Suruchi Restaurant, Vasudev Balwant Phadke Road, Panvel",
        image: "/LocationsSection/Panvel.jpg",
      },
    ],
  },
  {
    city: "Pune",
    address:
      "Kataria Chambers, ITI Road, Infront of Reliance Digital, Aundh, Pune, Maharashtra 411007",
    image: "/LocationsSection/Pune.jpg",
  },
  {
    city: "Nashik",
    address:
      "IKON, 3rd Floor, Above Westside, Opp. Sun Bird Building, Yeolekar Mala, College Road, Nashik -422 005, Maharashtra",
    image: "/LocationsSection/Nashik.jpg",
  },
  {
    city: "Jalgaon",
    address:
      "1st Floor, Nayantara Arcade, Pimprala Rd, Pratap Nagar, Jalgaon",
    image: "/LocationsSection/Jalgaon.jpg",
  },
  {
    city: "Ahilyanagar",
    address:
      "Shop No 2, First Floor, Diansh Plaza, opp. Mauli Sankul Road, Savedi, Ahilya Nagar, Maharashtra",
    image: "/images/ahliyanagr.jpeg",
  },
  {
    city: "Amravati",
    address:
      "3rd floor, Above Raghubir Food Zone, Sharda Vihar, Badnera Road, Amravati, Maharashtra 444605",
    image: "/images/amravati.jpeg ",
  },
  {
    city: "Kolhapur",
    address:
      "Royal Mirage Arcade, A Wing, Railway Colony Rd, opp. Kolhapur railway station, Railway Colony, New Shahupuri, Kolhapur, Maharashtra 416001",
    image: "/LocationsSection/Kolhapur.jpg",
  },
  {
    city: "Nagpur",
    address:
      "6th Floor, Tower 10, N Ambazari Rd, beside Alankar Theater, Shankar Nagar, Bhagwaghar, Dharampeth, Nagpur, Maharashtra 440002",
    image: "/LocationsSection/Nagpur.jpg",
  },
  {
    city: "Solapur",
    address:
      "KASTURE AGENCIES, 3rd Floor, Unit No 3-B, Kasture Business Centre, Railway lines, Dufferin Chowk, Solapur, Maharashtra 413001",
    image: "/LocationsSection/Solapur.jpg",
  },
];

export default function LocationsSection() {
  const router = useRouter();
  const [activeLocation, setActiveLocation] = useState<City | SubCity>(locations[0]); // default Mumbai
  const [openCity, setOpenCity] = useState<string | null>("Mumbai"); // default Mumbai expanded

  const toggleCity = (city: string) => {
    setOpenCity(openCity === city ? null : city);
  };

  return (
    <section className="bg-white py-8 px-4 lg:px-[50px] xl:px-[80px] 2xl:px-[120px] md:py-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start csLg:items-end justify-between gap-6 mb-8">
          <div className="md:flex-1">
            <span className="inline-block text-xs md:text-sm font-medium text-[#1656a5] bg-[#1656A50D] px-3 py-1 rounded-[8px] mb-2 md:mb-0">
              Trusted Guidance Everywhere.
            </span>

            <h2 className="mt-2 text-3xl md:text-5xl font-light text-gray-900 leading-snug">
              Trusted care, now across <br />21+ centers near you...
            </h2>
          </div>

          <div className="md:flex-none flex items-start csLg:items-end">
            <Link href="/centers">
              <button className="cursor-pointer px-4 md:px-6 py-2 border border-[#1656a5] text-[#1656a5] rounded-lg transition text-sm hover:bg-[#1656a5] hover:text-white">
                View all Centers
              </button>
            </Link>
          </div>
        </div>


        {/* Content */}
        <div className=" hidden csLg:flex flex-col md:flex-row gap-8">
          {/* Left: clickable list */}
          <div className="hidden md:flex md:flex-col md:w-1/3 space-y-4 pr-2 overflow-y-auto h-[450px] cursor-pointer">
            {locations.map((loc, idx) => {
              const isOpen = openCity === loc.city;

              // CASE 1: Parent with subCities
              if (loc.subCities) {
                return (
                  <div key={idx} className="w-full">

                    {/* Parent Card */}
                    <motion.button
                      onClick={() => toggleCity(loc.city)}
                      onMouseEnter={() => setActiveLocation(loc)}
                      animate={{
                        backgroundColor: isOpen ? "#1656a5" : "rgb(249, 250, 251)",
                        color: isOpen ? "white" : "rgb(17, 24, 39)"
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-full flex justify-between items-center rounded-xl px-5 py-4 cursor-pointer`}
                    >
                      <span className="text-lg md:text-[32px] tracking-tight md:leading-[40px] font-normal">
                        {loc.city}
                      </span>
                      <motion.span
                        animate={{
                          borderColor: isOpen ? "white" : "black",
                          color: isOpen ? "white" : "black",
                          rotate: isOpen ? 180 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-center justify-center w-14 h-10 rounded-full border`}
                      >
                        {/* Arrow DOWN */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path d="M9 11L12 14L15 11" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
                        </svg>
                      </motion.span>
                    </motion.button>


                    {/* SubCities */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 space-y-3 overflow-hidden"
                        >
                          {loc.subCities.map((sub, i) => {
                            const isActive =
                              "name" in activeLocation &&
                              activeLocation.name === sub.name;
                            return (
                              <button
                                key={i}
                                onClick={() => router.push(`/centers/${sub.name}`)}
                                onMouseEnter={() => setActiveLocation(sub)}
                                className={`rounded-xl p-4 flex justify-between items-center w-full text-left transition cursor-pointer ${isActive
                                  ? "bg-[rgba(22,86,165,0.05)]"
                                  : "bg-gray-50"
                                  }`}
                              >
                                <div className="pr-3">
                                  <h4
                                    className={`text-[32px] font-normal tracking-tight leading-[40px] ${isActive
                                      ? "text-[#1656a5]"
                                      : "text-gray-900"
                                      }`}
                                  >
                                    {sub.name}
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {sub.address}
                                  </p>
                                </div>
                                <div
                                  className={`flex items-center justify-center rounded-full px-[24px] py-[16px]  ${isActive
                                    ? "bg-[#1656a5] text-white"
                                    : "bg-black text-white"
                                    }`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                  >
                                    <path
                                      d="M0.563447 6.62744L6.77383 0.627488M6.77383 0.627488L0.563444 0.707495M6.77383 0.627488L6.77383 6.62749"
                                      stroke="white"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>

                                </div>
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // CASE 2: Normal single city
              const isActive =
                "city" in activeLocation &&
                activeLocation.city === loc.city;
              return (
                <button
                  key={idx}
                  onClick={() => router.push(`/centers/${loc.city}`)}
                  onMouseEnter={() => setActiveLocation(loc)}
                  className={`rounded-xl p-5 flex justify-between items-center w-full text-left transition cursor-pointer ${isActive
                    ? "bg-[rgba(22,86,165,0.05)]"
                    : "bg-gray-50"
                    }`}
                >
                  <div className="pr-3">
                    <h3
                      className={`text-lg md:text-[32px] tracking-tight leading-[40px] font-normal ${isActive ? "text-[#1656a5]" : "text-[#2C2C2C]"
                        }`}
                    >
                      {loc.city}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{loc.address}</p>
                  </div>
                  <div
                    className={`flex items-center justify-center rounded-full px-[24px] py-[16px]  ${isActive
                      ? "bg-[#1656a5] text-white"
                      : "bg-black text-white"
                      }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <path
                        d="M0.563447 6.62744L6.77383 0.627488M6.77383 0.627488L0.563444 0.707495M6.77383 0.627488L6.77383 6.62749"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Image */}
          <div className="w-full md:w-2/3">
            <div className="relative rounded-2xl overflow-hidden shadow-lg max-w-[1115px] h-[450px]">
              <motion.div className="relative w-full h-full">
                <motion.div
                  key={activeLocation.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeLocation.image || "/LocationsSection/location.png"}
                    alt={
                      "city" in activeLocation
                        ? activeLocation.city
                        : activeLocation.name
                    }
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Horizontal Swiper */}
        <div className="csLg:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>
            {locations.flatMap((loc) =>
              loc.subCities ? loc.subCities.map((sub, idx) => (
                <div key={`${loc.city}-${idx}`} className="snap-center shrink-0 w-[85vw] flex flex-col bg-white ">
                  {/* Image */}
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={sub.image || "/LocationsSection/location.png"}
                      alt={sub.name}
                      fill
                      className="object-cover rounded-[16px]"
                    />
                  </div>

                  {/* Card Details */}
                  <div className="p-5 mt-4 flex justify-between items-center bg-[#1656A50D] rounded-[16px] p-6">
                    <div className="flex-1">
                      <div className="flex justify-between items-center" >

                        <h3 className="text-[32px] font-normal text-[#2C2C2C] mb-2">
                          {sub.name}
                        </h3>
                        <div
                          className={`flex w-[56px] items-center justify-center rounded-full px-[24px] py-[16px]  
                          
                           bg-black text-white
                        `}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                          >
                            <path
                              d="M0.563447 6.62744L6.77383 0.627488M6.77383 0.627488L0.563444 0.707495M6.77383 0.627488L6.77383 6.62749"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                        </div>
                      </div>
                      <p className="text-[14px] text-[#606060] mt-4">
                        {sub.address}
                      </p>

                    </div>

                  </div>
                </div>
              )) : []
            )}
          </div>
        </div>
      </div>
    </section>
  );
}