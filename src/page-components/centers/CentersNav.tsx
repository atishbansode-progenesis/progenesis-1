"use client"

import React, { useState, useRef, useEffect } from 'react';
import CenterCard from './CenterCard';
import { Center } from '@/data/centers';

// Define type for state-city mapping
type StateCityMap = {
  [key: string]: string[];
};

const CENTERS_PER_PAGE = 5;

const CentersNav: React.FC<{ data: Center[] }> = ({ data }) => {
  // State and City data structure
  const stateWithCities: StateCityMap = (() => {
    const stateMap: StateCityMap = {};
    
    data.forEach((center) => {
      if (!stateMap[center.state]) {
        stateMap[center.state] = [];
      }
      if (!stateMap[center.state].includes(center.city)) {
        stateMap[center.state].push(center.city);
      }
    });

    return stateMap;
  })();
  const defaultState = "All";
  const defaultCity = "All";

  const [selectedState, setSelectedState] = useState(defaultState);
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [availableCities, setAvailableCities] = useState<string[]>(["All"]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCenters, setFilteredCenters] = useState<Center[]>(data);

  const stateDropdownRef = useRef<HTMLDivElement>(null);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  const sectionRef = useRef<HTMLElement | null>(null); 

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target as Node)) {
        setIsStateDropdownOpen(false);
      }
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
        setIsCityDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    if(currentPage>1){
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }}
  }, [currentPage]); 

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setIsStateDropdownOpen(false);
    setCurrentPage(1);
    
    if (state === "All") {
      setAvailableCities(["All"]);
      setSelectedCity("All");
      setFilteredCenters(data);
    } else {
      const cities = ["All", ...stateWithCities[state]];
      setAvailableCities(cities);
      setSelectedCity("All");
      setFilteredCenters(data.filter((center: Center) => center.state === state));
    }
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setIsCityDropdownOpen(false);
    setCurrentPage(1);
    
    if (city === "All") {
      if (selectedState === "All") {
        setFilteredCenters(data);
      } else {
        setFilteredCenters(data.filter((center: Center) => center.state === selectedState));
      }
    } else {
      setFilteredCenters(data.filter((center: Center) => center.city === city));
    }
  };

  return (
    <section className="w-full px-4 py-4 lg:px-[120px] lg:py-[80px] overflow-hidden bg-[#F6F6F6]" ref={sectionRef}>
      {/* Badge and Title */}
      <div className='mb-[32px] lg:mb-[80px]'>
        <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">
          Find Our IVF Fertility Clinic Near You
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[36px] font-manrope font-normal text-[#2C2C2C] leading-tight md:leading-[1.2] mt-2">
          With the vision to become the leading chain of IVF - Fertility Clinic around the country, Progenesis has expanded remarkably over the years.
        </h2>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 lg:gap-10 justify-between mb-3 lg:mb-[80px]">
        {/* State + City Dropdowns */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
          {/* State Dropdown */}
          <div className="flex items-center gap-3" ref={stateDropdownRef}>
            <label className="text-sm text-gray-600 font-medium whitespace-nowrap">
              Select State
            </label>
            <div className="relative">
              <button
                onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                className="min-w-[160px] hover:cursor-pointer h-10 px-4 inline-flex items-center justify-between rounded-[8px] text-sm font-medium 
                bg-[#1656A5] text-white shadow transition"
              >
                {selectedState}
                <span
                  className={`ml-2 transition-transform duration-200 ${isStateDropdownOpen ? "rotate-180" : ""}`}
                >
                  <img
                    src="/images/icons/Vector.svg"
                    className="w-[10px] h-[10px] object-contain"
                    alt="arrow"
                  />
                </span>
              </button>

              {/* State Dropdown Menu */}
              {isStateDropdownOpen && (
                <div
                  className="absolute top-[calc(100%+4px)] left-0 w-full max-h-[240px] overflow-y-auto bg-white rounded-[8px] shadow-lg border border-gray-100 z-20"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
                  <button
                    onClick={() => handleStateChange("All")}
                    className={`w-full px-4 py-2.5 text-left hover:cursor-pointer text-sm hover:bg-gray-50 transition-colors
                      ${selectedState === "All" ? "text-[#1656A5] font-medium bg-[#1656A5]/5" : "text-gray-700"}`}
                  >
                    All
                  </button>
                  {Object.keys(stateWithCities).map((state) => (
                    <button
                      key={state}
                      onClick={() => handleStateChange(state)}
                      className={`w-full px-4 py-2.5 text-left hover:cursor-pointer text-sm hover:bg-gray-50 transition-colors
                        ${selectedState === state ? "text-[#1656A5] font-medium bg-[#1656A5]/5" : "text-gray-700"}`}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* City Dropdown */}
          <div className="flex items-center gap-3" ref={cityDropdownRef}>
            <label className="text-sm text-gray-600 font-medium whitespace-nowrap">
              Select City
            </label>
            <div className="relative">
              <button
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className={`min-w-[160px] hover:cursor-pointer h-10 px-4 inline-flex items-center justify-between rounded-[8px] text-sm font-medium transition-colors
                  ${isCityDropdownOpen ? "bg-[#1656A5] text-white" : "bg-[#1656A5] text-white border border-[#1656A5]/60"}`}
              >
                {selectedCity}
                <span
                  className={`ml-2 transition-transform duration-200 ${isCityDropdownOpen ? "rotate-180" : ""}`}
                >
                  <img
                    src="/images/icons/Vector.svg"
                    className="w-[10px] h-[10px] object-contain"
                    alt="arrow"
                  />
                </span>
              </button>

              {/* City Dropdown Menu */}
              {isCityDropdownOpen && (
                <div
                  className="absolute top-[calc(100%+4px)] left-0 w-full max-h-[240px] overflow-y-auto bg-white rounded-[8px] shadow-lg border border-gray-100 z-20"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
                  {availableCities.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleCityChange(city)}
                      className={`w-full hover:cursor-pointer px-4 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors
                        ${selectedCity === city ? "text-[#1656A5] font-medium bg-[#1656A5]/5" : "text-gray-700"}`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Centers Count */}
        <div className="text-sm text-[#2C2C2C]">
          Showing{" "}
          {Math.min(CENTERS_PER_PAGE, filteredCenters.length - (currentPage - 1) * CENTERS_PER_PAGE)}{" "}
          of {filteredCenters.length} Centers
        </div>
      </div>

      {/* Centers List */}
      <div className="flex flex-col gap-6 min-h-[400px]">
        {filteredCenters
          .slice((currentPage - 1) * CENTERS_PER_PAGE, currentPage * CENTERS_PER_PAGE)
          .map((center) => (
            <CenterCard
              key={center.id}
              name={center.name}
              address={center.address}
              image={center.image}
              data={data}
            />
          ))}
      </div>

      {/* Pagination */}
      {filteredCenters.length > CENTERS_PER_PAGE && (
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`h-[56px] w-[56px] flex hover:cursor-pointer items-center justify-center rounded-xl border relative group
              ${currentPage === 1
                ? 'border-[#1656A5] text-gray-400 cursor-not-allowed'
                : 'border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition-colors'}`}
          >
            <img
              src="/icons/left-white.svg"
              alt="left-white"
              width={12}
              height={12}
              className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
            <img
              src="/icons/left.svg"
              alt="left"
              width={12}
              height={12}
              className="opacity-100 group-hover:opacity-0 transition-opacity duration-200"
            />
          </button>

          <div className="flex items-center h-[56px] w-[89px] gap-2 rounded-[12px] justify-center text-center px-4 py-4 bg-[#1656A5]">
            <span className="text-sm text-center font-medium text-[#F2F2F2]">
              {currentPage} of {Math.ceil(filteredCenters.length / CENTERS_PER_PAGE)}
            </span>
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(filteredCenters.length / CENTERS_PER_PAGE))
              )
            }
            disabled={currentPage === Math.ceil(filteredCenters.length / CENTERS_PER_PAGE)}
            className={`h-[56px] w-[56px] hover:cursor-pointer flex items-center justify-center rounded-xl border relative group
              ${currentPage === Math.ceil(filteredCenters.length / CENTERS_PER_PAGE)
                ? 'border-[#1656A5] text-gray-400 cursor-not-allowed'
                : 'border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition-colors'}`}
          >
            <img
              src="/icons/right-white.svg"
              alt="right-white"
              width={12}
              height={12}
              className="absolute opacity-0 group-hover:opacity-100 hover:cursor-pointer transition-opacity duration-200"
            />
            <img
              src="/icons/right.svg"
              alt="right"
              width={12}
              height={12}
              className="opacity-100 group-hover:opacity-0 hover:cursor-pointer transition-opacity duration-200"
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default CentersNav;
