'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

// Center interface

export interface Center {
  id: number;
  slug: string;
  name: string;
  city: string;
  state: string;
  address: string;
  image: string;
  phone?: string;
  email?: string;
  services?: string[];
  mapUri: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  
}

// Centers data

export const centersData: Center[] = [
  // Mumbai Region
  {
    id: 1,
    slug: "best-ivf-center-in-thane",
    name: "Thane",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "16, First Floor, Dosti Imperia, Ghodbunder Road, Opp R Mall, Manpada, Thane West 400607",
    image: "/images/Thane.png",
    phone: "+91 1234567890",
    email: "thane@progenesis.in",
    services: ["IVF", "IUI", "ICSI", "Fertility Preservation"],
    mapUri: "LuyNRTcTaR1bH88y9",
    coordinates: { lat: 19.2319173, lng: 72.97594 },
    gallery: Array.from({ length: 9 }, (_, i) => `/AllCentersImage/Thane/Thane${i + 1}.jpg`)
  },
  {
    id: 2,
    slug: "best-ivf-center-in-andheri",
    name: "Andheri",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "4th Durolite House, Off New Link Rd, Near Oshiwara Station, Opposite to Laxmi Industrial Complex, Andheri West, Mumbai",
    image: "/images/Andheri.png",
    phone: "+91 1234567891",
    email: "andheri@progenesis.in",
    mapUri: "Qsk6P3KPvZwhi9Zb7",
    services: ["IVF", "IUI", "Surrogacy", "Egg Freezing"],
    coordinates: { lat: 19.13711948, lng: 72.8323002 },
    gallery: Array.from({ length: 14 }, (_, i) => `/AllCentersImage/Andheri/Andheri${i + 1}.jpg`)
  },
  {
    id: 3,
    slug: "best-ivf-center-in-ghatkopar",
    name: "Ghatkopar",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "Shop Zone Building, Mahatma Gandhi Road, Ghatkopar West, Mumbai 400077",
    image: "/images/Ghatkopar.png",
    phone: "+91 1234567896",
    email: "ghatkopar@progenesis.in",
    services: ["IVF", "IUI", "Genetic Counseling"],
    mapUri: "bu9UrQbqCwHokn148",
    coordinates: { lat: 19.0858784, lng: 72.9051982 },
    gallery: Array.from({ length: 13 }, (_, i) => `/AllCentersImage/Ghatkopar/Ghatkopar${i + 1}.jpg`)
  },
  {
    id: 4,
    slug: "best-ivf-center-in-virar",
    name: "Virar",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "Virar Medical Complex, Near Virar Station, Virar West 401303",
    image: "/images/virar.jpg",
    phone: "+91 1234567898",
    email: "virar@progenesis.in",
    services: ["IVF", "Fertility Assessment", "Egg Freezing"],
    mapUri: "acG2v3Y8xdZcK64EA",
    coordinates: { lat: 19.4530572, lng: 72.7986412 },
    gallery: Array.from({ length: 8 }, (_, i) => `/AllCentersImage/Virar/Virar${i + 1}.jpg`)
  },
  {
    id: 5,
    slug: "best-ivf-center-in-kalyan",
    name: "Kalyan",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "Kalyan Health Clinic, Near Kalyan Station, Kalyan West 421301",
    image: "/images/kalyan.webp",
    phone: "+91 1234567899",
    email: "kalyan@progenesis.in",
    services: ["IVF", "IUI", "Fertility Preservation"],
    mapUri: "wYmnqje6hZPsmSyX6",
    coordinates: { lat: 19.2406614, lng: 73.1296727 },
    gallery: Array.from({ length: 13 }, (_, i) => `/AllCentersImage/Kalyan/Kalyan${i + 1}.JPG`)
  },
  {
    id: 6,
    slug: "best-ivf-center-borivali",
    name: "Borivali",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "201, Sunshine Plaza, Near Station, Borivali West, Mumbai 400092",
    image: "/images/Borivali.png",
    phone: "+91 1234567892",
    email: "borivali@progenesis.in",
    services: ["IVF", "Fertility Assessment", "Genetic Testing"],
    mapUri: "qqZZDcf3K1Hw62838",
    coordinates: { lat: 19.2221387, lng: 72.8485524 },
    gallery: Array.from({ length: 12 }, (_, i) => `/AllCentersImage/Borivali/Borivali${i + 1}.png`)
  },
  {
    id: 7,
    slug: "best-ivf-center-in-vashi",
    name: "Vashi",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "Ground Floor, Bhumiraj Costarica, Palm Beach Service Road, Vashi, Navi Mumbai 400703",
    image: "/images/Vashi.png",
    phone: "+91 1234567897",
    email: "vashi@progenesis.in",
    services: ["IVF", "IUI", "Surrogacy"],
    mapUri: "zLSUwhnYjK2WfRZi7",
    coordinates: { lat: 19.0565633, lng: 73.0035369 },
    gallery: Array.from({ length: 11 }, (_, i) => `/AllCentersImage/Vashi/Vashi${i + 1}.jpg`)
  },
  {
    id: 8,
    slug: "best-ivf-center-in-panvel",
    name: "Panvel",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "Panvel Medical Center, Near Panvel Station, Panvel 410206",
    image: "/images/Panvel.jpg",
    phone: "+91 1234567800",
    email: "panvel@progenesis.in",
    services: ["IVF", "IUI", "Genetic Testing"],
    mapUri: "X9cFyp1dBKFnmv459",
    coordinates: { lat: 18.9879311, lng: 73.1141176 },
    gallery: Array.from({ length: 8 }, (_, i) => `/AllCentersImage/Panvel/Panvel${i + 1}.jpg`)
  },

  // Rest of Maharashtra
  {
    id: 9,
    slug: "best-ivf-center-in-pune",
    name: "Pune",
    city: "Pune",
    state: "MAHARASHTRA",
    address: "Crystal Plaza, 3rd Floor, Near FC Road, Shivajinagar, Pune 411005",
    image: "/images/Pune.jpg",
    phone: "+91 1234567893",
    email: "pune@progenesis.in",
    services: ["IVF", "IUI", "Fertility Counseling"],
    mapUri: "gSE6EkZSCW6G5aNz6",
    coordinates: { lat: 18.5542529, lng: 73.8092704 },
    gallery: Array.from({ length: 8 }, (_, i) => `/AllCentersImage/Pune/Pune${i + 1}.jpg`)
  },
  {
    id: 10,
    slug: "best-ivf-center-in-nashik",
    name: "Nashik",
    city: "Nashik",
    state: "MAHARASHTRA",
    address: "IKON, 3rd Floor, Above Westside, Opp. Sun Bird Building, Yeolekar Mala, College Road, Nashik 422005",
    image: "/images/Nasik.jpg",
    phone: "+91 1234567894",
    email: "nashik@progenesis.in",
    services: ["IVF", "Fertility Treatment", "Embryology"],
    mapUri: "zyXCS6dEsjRpndD88",
    coordinates: { lat: 20.0009439, lng: 73.7620231 },
    gallery: Array.from({ length: 11 }, (_, i) => `/AllCentersImage/Nashik/Nashik${i + 1}.jpg`)
  },
  {
    id: 11,
    slug: "best-ivf-center-in-jalgaon",
    name: "Jalgaon",
    city: "Jalgaon",
    state: "MAHARASHTRA",
    address: "Jalgaon Medical Hub, Near Railway Station, Jalgaon 425001",
    image: "/images/Jalgaon.jpg",
    phone: "+91 1234567895",
    email: "jalgaon@progenesis.in",
    services: ["IVF", "IUI", "Fertility Consultation"],
    mapUri: "koq52L9pCqt9AyDM8",
    coordinates: { lat: 21.00143072, lng: 75.5610411 },
    gallery: Array.from({ length: 9 }, (_, i) => `/AllCentersImage/Jalgaon/Jalgaon${i + 1}.jpg`)
  },
  {
    id: 12,
    slug: "best-ivf-center-in-ahilyanagar",
    name: "Ahilyanagar",
    city: "Ahilyanagar",
    state: "MAHARASHTRA",
    address: "Shop No 2, First Floor, Diansh Plaza, opp. Mauli Sankul Road, Savedi, Ahilyanagar, Maharashtra 414003",
    image: "/images/Ahilyanagar.jpg",
    phone: "+91 1234567805",
    email: "ahmednagar@progenesis.in",
    services: ["IVF", "IUI", "Fertility Counseling"],
    mapUri: "tNr54ErBfVH7mHX67",
    coordinates: { lat: 19.1151738, lng: 74.7296822 },
    gallery: Array.from({ length: 10 }, (_, i) => `/AllCentersImage/Ahilyanagar/Ahilyanagar${i + 1}.JPG`)
  },
  {
    id: 13,
    slug: "best-ivf-center-in-amravati",
    name: "Amravati",
    city: "Amravati",
    state: "MAHARASHTRA",
    address: "3rd floor, Badnera Rd, above Raghubir Food Zone, Sharda Vihar, Amravati, Maharashtra 444605",
    image: "/images/Amravati.jpg",
    phone: "+91 1234567804",
    email: "amravati@progenesis.in",
    services: ["IVF", "Fertility Assessment", "Genetic Testing"],
    mapUri: "rYd1qu5wgL4ycmjV8",
    coordinates: { lat: 20.9157935, lng: 77.7531131 },
    gallery: Array.from({ length: 6 }, (_, i) => `/AllCentersImage/Amravati/Amravati${i + 1}.jpg`)
  },
  {
    id: 14,
    slug: "kolhapur",
    name: "Kolhapur",
    city: "Kolhapur",
    state: "MAHARASHTRA",
    address: "Royal Mirage Arcade, A Wing, Railway Colony Rd, opp. Kolhapur railway station, Railway Colony, New Shahupuri, Kolhapur 416001",
    image: "/images/Kolhapur.jpg",
    phone: "+91 1234567803",
    email: "kolhapur@progenesis.in",
    services: ["IVF", "IUI", "Surrogacy"],
    mapUri: "i1Ap66b3nMNhSZbh8",
    coordinates: { lat: 16.7034419, lng: 74.2377609 },
    gallery: Array.from({ length: 4 }, (_, i) => `/AllCentersImage/Kolhapur/Kolhapur${i + 1}.jpeg`)
  },
  {
    id: 15,
    slug: "best-ivf-center-in-nagpur",
    name: "Nagpur",
    city: "Nagpur",
    state: "MAHARASHTRA",
    address: "6th Floor, Tower 10, N Ambazari Rd, beside Alankar Theater, Bhagwaghar, Dharampeth, Nagpur, Maharashtra 440002",
    image: "/images/Nagpur.jpg",
    phone: "+91 1234567802",
    email: "nagpur@progenesis.in",
    services: ["IVF", "IUI", "Embryology"],
    mapUri: "vsx3HtpkRy9rGUHK8",
    coordinates: { lat: 18.9353097, lng: 73.2963966 },
    gallery: Array.from({ length: 7 }, (_, i) => `/AllCentersImage/Nagpur/Nagpur${i + 1}.jpg`)
  },
  {
    id: 16,
    slug: "best-ivf-center-in-solapur",
    name: "Solapur",
    city: "Solapur",
    state: "MAHARASHTRA",
    address: "KASTURE AGENCIES, 3rd Floor, Unit No 3-B, Kasture Business Centre, Railway lines, Dufferin Chowk, Solapur, Maharashtra 413001",
    image: "/images/Solapur.jpg",
    phone: "+91 1234567801",
    email: "solapur@progenesis.in",
    services: ["IVF", "Fertility Treatment", "Counseling"],
    mapUri: "acwiefbWWf2ZXC5x9",
    coordinates: { lat: 21.0143072, lng: 75.5610411 },
    gallery: Array.from({ length: 5 }, (_, i) => `/AllCentersImage/Solapur/Solapur${i + 1}.jpg`)
  }
];



interface CenterCardProps {
  name: string;
  address: string;
  image: string;
}

const CenterCard: React.FC<CenterCardProps> = ({ name, address, image }) => {
  const router = useRouter();
  
  const centerData = React.useMemo(() => {
    const center = centersData.find(center => center.name === name);
    if (!center) {
      console.warn(`Center data not found for: ${name}`);
      return {
        id: 0,
        slug: (name || 'unknown-center')
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-'),
        name: name || 'Unknown Center',
        city: '',
        state: '',
        address: address || 'Address not available',
        image: image || '',
        timings: { weekdays: 'Not available', weekends: 'Not available' },
        services: [],
        coordinates: undefined
      };
    }
    return center;
  }, [name, address, image]);

  return (
    <div onClick={() => {
              router.push(`/${centerData.slug}`);
            }}
     className="flex flex-col hover:cursor-pointer md:flex-row cslg:gap-4 bg-[#FFFFFF] hover:bg-[#1656A50D]  rounded-[16px] overflow-hidden transition-shadow">
      {/* Image Container */}
      <div className=" px-4 pt-4 csLg:p-4 relative w-full  h-[100%] md:h-[444px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between p-4 relative lg:p-4 md:p-6 w-full">
        {/* Center Name and Address */}
        <div className='w-auto lg:max-w-[400px] lg:h-[196px]'>
          <h3 className="text-[24px] md:text-[30px] font-normal font-manrope text-[#1656A5] mb-2">
            {name}
          </h3>
          <div className='max-w-[535px]'><p className="text-[#6B7280] text-[14px] lg:text-[24px] leading-[22px] lg:leading-[40px]  font-normal md:text-[32px] md:leading-[40px] tracking-tight mb-4">
            {address}
          </p></div>


          {/* Services */}
          {centerData.services && centerData.services.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-start justify-between flex-col md:flex-row gap-3 -mt-5 lg:mt-7 ">
          <button 
            onClick={() => {
              if (centerData.coordinates) {
                window.open(`https://www.google.com/maps?q=${centerData.coordinates.lat},${centerData.coordinates.lng}`, '_blank');
              } else if (centerData.address) {
                // If no coordinates, try to open maps with the address
                window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centerData.address)}`, '_blank');
              }
            }}
            disabled={!centerData.coordinates && !centerData.address}
            className={`h-10 lg:text-[16px] text-[14px] font-medium hover:cursor-auto flex items-center underline decoration-[#2C2C2C] justify-center gap-2 ${
              !centerData.coordinates && !centerData.address
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#2C2C2C] hover:text-[#1656A5] transition-colors'}
                  lg:mt-4
                
            }`}
          >
            {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg> */}
            {centerData.coordinates ? 'Get Location' : 'View on Map'}
          </button>


<button
  className="flex items-center justify-center w-[121px] h-[40px] rounded-[8px] border border-[#1656A5] px-[10px] py-[10px] bg-white  transition-colors whitespace-nowrap
             lg:w-[158px] lg:h-[56px] lg:rounded-[16px] lg:px-2 lg:py-2"
>
  <span className="font-manrope font-medium text-[12px] leading-[20px] text-[#1656A5] text-center lg:text-sm lg:leading-[24px]">
    Book Appointment
  </span>
</button>




        </div>
      </div>
    </div>
  );
};

export default CenterCard;







// src/data/centers-data.ts or src/lib/centers-data.ts

export interface Center {
  id: number;
  slug: string;
  name: string;
  city: string;
  state: string;
  address: string;
  image: string;
  phone?: string;
  email?: string;
  services?: string[];
  mapUri: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  gallery?: string[];
}

// export const centersData: Center[] = [
//   {
//     id: 1,
//     slug: "andheri",
//     name: "Andheri",
//     city: "Mumbai",
//     state: "MAHARASHTRA",
//     address: "4th Durolite House, Off New Link Rd, Near Oshiwara Station, Opposite to Laxmi Industrial Complex, Andheri West, Mumbai",
//     image: "/images/Andheri.png",
//     phone: "+91 1234567891",
//     email: "andheri@progenesis.in",
//     mapUri: "Qsk6P3KPvZwhi9Zb7",
//     services: ["IVF", "IUI", "Surrogacy", "Egg Freezing"],
//     coordinates: { lat: 19.13711948, lng: 72.8323002 },
//     gallery: Array.from({ length: 14 }, (_, i) => `/AllCentersImage/Andheri/Andheri${i + 1}.jpg`)
//   },
//   {
//     id: 2,
//     slug: "thane",
//     name: "Thane",
//     city: "Mumbai",
//     state: "MAHARASHTRA",
//     address: "16, First Floor, Dosti Imperia, Ghodbunder Road, Opp R Mall, Manpada, Thane West 400607",
//     image: "/images/Thane.png",
//     phone: "+91 1234567890",
//     email: "thane@progenesis.in",
//     services: ["IVF", "IUI", "ICSI", "Fertility Preservation"],
//     mapUri: "LuyNRTcTaR1bH88y9",
//     coordinates: { lat: 19.2319173, lng: 72.97594 },
//     gallery: Array.from({ length: 9 }, (_, i) => `/AllCentersImage/Thane/Thane${i + 1}.jpg`)
//   },
//   {
//     id: 3,
//     slug: "borivali",
//     name: "Borivali",
//     city: "Mumbai",
//     state: "MAHARASHTRA",
//     address: "201, Sunshine Plaza, Near Station, Borivali West, Mumbai 400092",
//     image: "/images/Borivali.png",
//     phone: "+91 1234567892",
//     email: "borivali@progenesis.in",
//     services: ["IVF", "Fertility Assessment", "Genetic Testing"],
//     mapUri: "qqZZDcf3K1Hw62838",
//     coordinates: { lat: 19.2221387, lng: 72.8485524 },
//     gallery: Array.from({ length: 12 }, (_, i) => `/AllCentersImage/Borivali/Borivali${i + 1}.png`)
//   },
//   {
//     id: 4,
//     slug: "pune",
//     name: "Pune",
//     city: "Pune",
//     state: "MAHARASHTRA",
//     address: "Crystal Plaza, 3rd Floor, Near FC Road, Shivajinagar, Pune 411005",
//     image: "/images/Pune.jpg",
//     phone: "+91 1234567893",
//     email: "pune@progenesis.in",
//     services: ["IVF", "IUI", "Fertility Counseling"],
//     mapUri: "gSE6EkZSCW6G5aNz6",
//     coordinates: { lat: 18.5542529, lng: 73.8092704 },
//     gallery: Array.from({ length: 8 }, (_, i) => `/AllCentersImage/Pune/Pune${i + 1}.jpg`)
//   },
//   {
//     id: 5,
//     slug: "nashik",
//     name: "Nashik",
//     city: "Nashik",
//     state: "MAHARASHTRA",
//     address: "IKON, 3rd Floor, Above Westside, Opp. Sun Bird Building, Yeolekar Mala, College Road, Nashik 422005",
//     image: "/images/Nasik.jpg",
//     phone: "+91 1234567894",
//     email: "nashik@progenesis.in",
//     services: ["IVF", "Fertility Treatment", "Embryology"],
//     mapUri: "zyXCS6dEsjRpndD88",
//     coordinates: { lat: 20.0009439, lng: 73.7620231 },
//     gallery: Array.from({ length: 11 }, (_, i) => `/AllCentersImage/Nashik/Nashik${i + 1}.jpg`)
//   },
//   {
//     id: 6,
//     slug: "jalgaon",
//     name: "Jalgaon",
//     city: "Jalgaon",
//     state: "MAHARASHTRA",
//     address: "Jalgaon Medical Hub, Near Railway Station, Jalgaon 425001",
//     image: "/images/Jalgaon.jpg",
//     phone: "+91 1234567895",
//     email: "jalgaon@progenesis.in",
//     services: ["IVF", "IUI", "Fertility Consultation"],
//     mapUri: "koq52L9pCqt9AyDM8",
//     coordinates: { lat: 21.00143072, lng: 75.5610411 },
//     gallery: Array.from({ length: 9 }, (_, i) => `/AllCentersImage/Jalgaon/Jalgaon${i + 1}.jpg`)
//   },
//   {
//     id: 7,
//     slug: "ghatkopar",
//     name: "Ghatkopar",
//     city: "Mumbai",
//     state: "MAHARASHTRA",
//     address: "Shop Zone Building, Mahatma Gandhi Road, Ghatkopar West, Mumbai 400077",
//     image: "/images/Ghatkopar.png",
//     phone: "+91 1234567896",
//     email: "ghatkopar@progenesis.in",
//     services: ["IVF", "IUI", "Genetic Counseling"],
//     mapUri: "bu9UrQbqCwHokn148",
//     coordinates: { lat: 19.0858784, lng: 72.9051982 },
//     gallery: Array.from({ length: 13 }, (_, i) => `/AllCentersImage/Ghatkopar/Ghatkopar${i + 1}.jpg`)
//   },
//   {
//     id: 8,
//     slug: "vashi",
//     name: "Vashi",
//     city: "Mumbai",
//     state: "MAHARASHTRA",
//     address: "Ground Floor, Bhumiraj Costarica, Palm Beach Service Road, Vashi, Navi Mumbai 400703",
//     image: "/images/Vashi.png",
//     phone: "+91 1234567897",
//     email: "vashi@progenesis.in",
//     services: ["IVF", "IUI", "Surrogacy"],
//     mapUri: "zLSUwhnYjK2WfRZi7",
//     coordinates: { lat: 19.0565633, lng: 73.0035369 },
//     gallery: Array.from({ length: 11 }, (_, i) => `/AllCentersImage/Vashi/Vashi${i + 1}.jpg`)
//   },
//   {
//     id: 9,
//     slug: "virar",
//     name: "Virar",
//     city: "Mumbai",
//     state: "MAHARASHTRA",
//     address: "Virar Medical Complex, Near Virar Station, Virar West 401303",
//     image: "/images/virar.jpg",
//     phone: "+91 1234567898",
//     email: "virar@progenesis.in",
//     services: ["IVF", "Fertility Assessment", "Egg Freezing"],
//     mapUri: "acG2v3Y8xdZcK64EA",
//     coordinates: { lat: 19.4530572, lng: 72.7986412 },
//     gallery: Array.from({ length: 8 }, (_, i) => `/AllCentersImage/Virar/Virar${i + 1}.jpg`)
//   },
//   {
//     id: 10,
//     slug: "kalyan",
//     name: "Kalyan",
//     city: "Mumbai",
//     state: "MAHARASHTRA",
//     address: "Kalyan Health Clinic, Near Kalyan Station, Kalyan West 421301",
//     image: "/images/kalyan.webp",
//     phone: "+91 1234567899",
//     email: "kalyan@progenesis.in",
//     services: ["IVF", "IUI", "Fertility Preservation"],
//     mapUri: "wYmnqje6hZPsmSyX6",
//     coordinates: { lat: 19.2406614, lng: 73.1296727 },
//     gallery: Array.from({ length: 13 }, (_, i) => `/AllCentersImage/Kalyan/Kalyan${i + 1}.jpg`)
//   },
//   {
//     id: 11,
//     slug: "panvel",
//     name: "Panvel",
//     city: "Mumbai",
//     state: "MAHARASHTRA",
//     address: "Panvel Medical Center, Near Panvel Station, Panvel 410206",
//     image: "/images/Panvel.jpg",
//     phone: "+91 1234567800",
//     email: "panvel@progenesis.in",
//     services: ["IVF", "IUI", "Genetic Testing"],
//     mapUri: "X9cFyp1dBKFnmv459",
//     coordinates: { lat: 18.9879311, lng: 73.1141176 },
//     gallery: Array.from({ length: 8 }, (_, i) => `/AllCentersImage/Panvel/Panvel${i + 1}.jpg`)
//   },
//   {
//     id: 12,
//     slug: "solapur",
//     name: "Solapur",
//     city: "Solapur",
//     state: "MAHARASHTRA",
//     address: "KASTURE AGENCIES, 3rd Floor, Unit No 3-B, Kasture Business Centre, Railway lines, Dufferin Chowk, Solapur, Maharashtra 413001",
//     image: "/images/Solapur.jpg",
//     phone: "+91 1234567801",
//     email: "solapur@progenesis.in",
//     services: ["IVF", "Fertility Treatment", "Counseling"],
//     mapUri: "acwiefbWWf2ZXC5x9",
//     coordinates: { lat: 21.0143072, lng: 75.5610411 },
//     gallery: Array.from({ length: 5 }, (_, i) => `/AllCentersImage/Solapur/Solapur${i + 1}.jpg`)
//   },
//   {
//     id: 13,
//     slug: "nagpur",
//     name: "Nagpur",
//     city: "Nagpur",
//     state: "MAHARASHTRA",
//     address: "6th Floor, Tower 10, N Ambazari Rd, beside Alankar Theater, Bhagwaghar, Dharampeth, Nagpur, Maharashtra 440002",
//     image: "/images/Nagpur.jpg",
//     phone: "+91 1234567802",
//     email: "nagpur@progenesis.in",
//     services: ["IVF", "IUI", "Embryology"],
//     mapUri: "vsx3HtpkRy9rGUHK8",
//     coordinates: { lat: 18.9353097, lng: 73.2963966 },
//     gallery: Array.from({ length: 7 }, (_, i) => `/AllCentersImage/Nagpur/Nagpur${i + 1}.jpg`)
//   },
//   {
//     id: 14,
//     slug: "kolhapur",
//     name: "Kolhapur",
//     city: "Kolhapur",
//     state: "MAHARASHTRA",
//     address: "Royal Mirage Arcade, A Wing, Railway Colony Rd, opp. Kolhapur railway station, Railway Colony, New Shahupuri, Kolhapur 416001",
//     image: "/images/Kolhapur.jpg",
//     phone: "+91 1234567803",
//     email: "kolhapur@progenesis.in",
//     services: ["IVF", "IUI", "Surrogacy"],
//     mapUri: "i1Ap66b3nMNhSZbh8",
//     coordinates: { lat: 16.7034419, lng: 74.2377609 },
//     gallery: Array.from({ length: 4 }, (_, i) => `/AllCentersImage/Kolhapur/Kolhapur${i + 1}.jpeg`)
//   },
//   {
//     id: 15,
//     slug: "amravati",
//     name: "Amravati",
//     city: "Amravati",
//     state: "MAHARASHTRA",
//     address: "3rd floor, Badnera Rd, above Raghubir Food Zone, Sharda Vihar, Amravati, Maharashtra 444605",
//     image: "/images/Amravati.jpg",
//     phone: "+91 1234567804",
//     email: "amravati@progenesis.in",
//     services: ["IVF", "Fertility Assessment", "Genetic Testing"],
//     mapUri: "rYd1qu5wgL4ycmjV8",
//     coordinates: { lat: 20.9157935, lng: 77.7531131 },
//     gallery: Array.from({ length: 6 }, (_, i) => `/AllCentersImage/Amravati/Amravati${i + 1}.jpg`)
//   },
//   {
//     id: 16,
//     slug: "ahilyanagar",
//     name: "Ahilyanagar",
//     city: "Ahilyanagar",
//     state: "MAHARASHTRA",
//     address: "Shop No 2, First Floor, Diansh Plaza, opp. Mauli Sankul Road, Savedi, Ahilyanagar, Maharashtra 414003",
//     image: "/images/Ahilyanagar.jpg",
//     phone: "+91 1234567805",
//     email: "ahmednagar@progenesis.in",
//     services: ["IVF", "IUI", "Fertility Counseling"],
//     mapUri: "tNr54ErBfVH7mHX67",
//     coordinates: { lat: 19.1151738, lng: 74.7296822 },
//     gallery: Array.from({ length: 10 }, (_, i) => `/AllCentersImage/Ahilyanagar/Ahilyanagar${i + 1}.jpg`)
//   }
// ];
