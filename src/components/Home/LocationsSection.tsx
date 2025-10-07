"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";


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
        image: "/LocationsSection/thane.png",
      },
      {
        name: "Andheri",
        address:
          "4th Durolite House, Off New Link Rd, Near Oshiwara Station, Opposite to Laxmi Industrial Complex, Andheri West, Mumbai",
        image: "/LocationsSection/andheri.png",
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
        image: "/LocationsSection/ghatkopar.png",
      },
      {
        name: "Vashi",
        address:
          "Ground Floor, Bhumiraj Costarica, Palm Beach Service Road, Sector 18, Vashi, Navi Mumbai",
        image: "/LocationsSection/vashi.png",
      },
      {
        name: "Virar",
        address:
          "2nd Floor, A-Wing, Shreeram Complex, Tirupati Nagar, Virar West, Virar",
        image: "/LocationsSection/virar.png",
      },
      {
        name: "Kalyan",
        address:
          "Diwadkar Complex, 302, Chatrapati Shivaji Maharaj Chowk, Kalyan(W), JijaMata Colony, Kalyan",
        image: "/LocationsSection/kalyan.png",
      },
      {
        name: "Panvel",
        address:
          "1st Floor, Ganga Kalash, Gandhi Hospital Lane, Near Suruchi Restaurant, Vasudev Balwant Phadke Road, Panvel",
        image: "/LocationsSection/panvel.png",
      },
    ],
  },
  {
    city: "Pune",
    address:
      "Kataria Chambers, ITI Road, Infront of Reliance Digital, Aundh, Pune, Maharashtra 411007",
    image: "/LocationsSection/pune.png",
  },
  {
    city: "Nashik",
    address:
      "IKON, 3rd Floor, Above Westside, Opp. Sun Bird Building, Yeolekar Mala, College Road, Nashik -422 005, Maharashtra",
    image: "/LocationsSection/nashik.png",
  },
  {
    city: "Jalgaon",
    address:
      "1st Floor, Nayantara Arcade, Pimprala Rd, Pratap Nagar, Jalgaon",
    image: "/LocationsSection/jalgaon.png",
  },
  {
    city: "Ahilyanagar",
    address:
      "Shop No 2, First Floor, Diansh Plaza, opp. Mauli Sankul Road, Savedi, Ahilya Nagar, Maharashtra",
    image: "/LocationsSection/ahilyanagar.png",
  },
  {
    city: "Amravati",
    address:
      "3rd floor, Above Raghubir Food Zone, Sharda Vihar, Badnera Road, Amravati, Maharashtra 444605",
    image: "/LocationsSection/amravati.png",
  },
  {
    city: "Kolhapur",
    address:
      "Royal Mirage Arcade, A Wing, Railway Colony Rd, opp. Kolhapur railway station, Railway Colony, New Shahupuri, Kolhapur, Maharashtra 416001",
    image: "/LocationsSection/kolhapur.png",
  },
  {
    city: "Nagpur",
    address:
      "6th Floor, Tower 10, N Ambazari Rd, beside Alankar Theater, Shankar Nagar, Bhagwaghar, Dharampeth, Nagpur, Maharashtra 440002",
    image: "/LocationsSection/nagpur.png",
  },
  {
    city: "Solapur",
    address:
      "KASTURE AGENCIES, 3rd Floor, Unit No 3-B, Kasture Business Centre, Railway lines, Dufferin Chowk, Solapur, Maharashtra 413001",
    image: "/LocationsSection/solapur.png",
  },
];

export default function LocationsSection() {
  const [activeLocation, setActiveLocation] = useState<City | SubCity>(locations[1]); // default Pune
  const [openCity, setOpenCity] = useState<string | null>(null);

  const toggleCity = (city: string) => {
    setOpenCity(openCity === city ? null : city);
  };

  return (
    <section className="bg-white py-8 px-6 lg:px-[50px] xl:px-[80px] 2xl:px-[120px] md:py-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-8">
          <div className="md:flex-1">
            <span className="inline-block text-xs md:text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
              Trusted Guidance Everywhere.
            </span>

            <h2 className="mt-2 text-3xl md:text-5xl font-light text-gray-900 leading-snug">
              Trusted care, now across <br />20+ centers near you...
            </h2>
          </div>

          <div className="md:flex-none flex items-end">
            <Link href="/centers">
              <button className="px-4 md:px-6 py-2 border border-blue-600 text-blue-600 rounded-lg transition text-sm hover:bg-blue-600 hover:text-white">
                View all Centers
              </button>
            </Link>
          </div>
        </div>


        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: clickable list */}
          <div className="hidden md:flex md:flex-col md:w-1/3 space-y-4 pr-2 overflow-y-auto h-[450px]">
            {locations.map((loc, idx) => {
              const isOpen = openCity === loc.city;

              // CASE 1: Parent with subCities
              if (loc.subCities) {
                return (
                  <div key={idx} className="w-full">

                    {/* Parent Card */}
                    <button
                      onClick={() => toggleCity(loc.city)}
                      className={`w-full flex justify-between items-center rounded-xl px-5 py-4 transition ${isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-gray-50 text-gray-900"
                        }`}
                    >
                      <span className="text-lg md:text-xl font-semibold">
                        {loc.city}
                      </span>
                      <span
                        className={`flex items-center justify-center w-10 h-10 rounded-full border transition ${isOpen
                            ? "border-white text-white"
                            : "border-black text-black"
                          }`}
                      >
                        {isOpen ? (
                          // Arrow UP
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path d="M9 13L12 10L15 13" stroke="white" strokeLinecap="square" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          // Arrow DOWN
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path d="M9 11L12 14L15 11" stroke="black" strokeLinecap="square" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </button>


                    {/* SubCities */}
                    {isOpen && (
                      <div className="mt-2 space-y-3">
                        {loc.subCities.map((sub, i) => {
                          const isActive =
                            "name" in activeLocation &&
                            activeLocation.name === sub.name;
                          return (
                            <button
                              key={i}
                              onClick={() => setActiveLocation(sub)}
                              className={`rounded-xl p-4 flex justify-between items-center w-full text-left transition ${isActive
                                  ? "bg-[rgba(22,86,165,0.05)]"
                                  : "bg-gray-50"
                                }`}
                            >
                              <div className="pr-3">
                                <h4
                                  className={`text-base font-semibold ${isActive
                                      ? "text-blue-700"
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
                                className={`px-[16px] py-[8px] flex items-center justify-center rounded-full ${isActive
                                    ? "bg-blue-600 text-white"
                                    : "bg-black text-white"
                                  }`}
                              >
                               <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" >
  <path d="M0.563447 6.62744L6.77383 0.627488M6.77383 0.627488L0.563444 0.707495M6.77383 0.627488L6.77383 6.62749" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
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
                  onClick={() => setActiveLocation(loc)}
                  className={`rounded-xl p-5 flex justify-between items-center w-full text-left transition ${isActive
                      ? "bg-[rgba(22,86,165,0.05)]"
                      : "bg-gray-50"
                    }`}
                >
                  <div className="pr-3">
                    <h3
                      className={`text-lg md:text-xl font-semibold ${isActive ? "text-blue-700" : "text-gray-900"
                        }`}
                    >
                      {loc.city}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{loc.address}</p>
                  </div>
                  <div
                    className={`flex items-center justify-center rounded-full px-[16px] py-[8px]  ${isActive
                        ? "bg-blue-600 text-white"
                        : "bg-black text-white"
                      }`}
                  ><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
  <path d="M0.563447 6.62744L6.77383 0.627488M6.77383 0.627488L0.563444 0.707495M6.77383 0.627488L6.77383 6.62749" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Image */}
          <div className="w-full md:w-2/3">
            <div className="relative rounded-2xl overflow-hidden shadow-lg max-w-[1115px] h-[450px]">
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
            </div>

          </div>


        </div>
      </div>
    </section>
  );
}