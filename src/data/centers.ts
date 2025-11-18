export interface Center {
  id: number;
  slug: string;
  name: string;
  city: string;
  state: string;
  address: string;
  pinCode: string;
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
  availableDoctors: number[];
  metadata?: {
    title: string;
    description: string;
  };
}

export const centersData: Center[] = [
  // Mumbai Region
  {
    id: 1,
    slug: "best-ivf-center-in-thane",
    name: "Thane",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "16, First Floor, Dosti Imperia, Ghodbunder Road, Opp R Mall, Manpada, Thane West 400607",
    pinCode: "400607",
    image: "/LocationsSection/Thane.jpg",
    phone: "+91 94239 71620",
    email: "thane@progenesis.in",
    services: ["IVF", "IUI", "ICSI", "Fertility Preservation"],
    mapUri: "LuyNRTcTaR1bH88y9",
    coordinates: { lat: 19.2319173, lng: 72.97594 },
    gallery: Array.from({ length: 9 }, (_, i) => `/AllCentersImage/Thane/Thane${i + 1}.jpg`),
    availableDoctors: [0, 1, 4],
    metadata: {
      title: "Best IVF center in Thane | Top Fertility Clinic in Thane",
      description: "Best IVF center in Thane offers advanced fertility treatment, including IVF, ICSI, and IUI. schedule a consultation from fertility specialist in thane."
    }
  },
  {
    id: 2,
    slug: "best-ivf-center-in-andheri",
    name: "Andheri",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "4th Durolite House, Off New Link Rd, Near Oshiwara Station, Opposite to Laxmi Industrial Complex, Andheri West, Mumbai",
    pinCode: "400053",
    image: "/LocationsSection/Andheri.jpg",
    phone: "+91 94239 71620",
    email: "andheri@progenesis.in",
    mapUri: "Qsk6P3KPvZwhi9Zb7",
    services: ["IVF", "IUI", "Surrogacy", "Egg Freezing"],
    coordinates: { lat: 19.13711948, lng: 72.8323002 },
    gallery: Array.from({ length: 14 }, (_, i) => `/AllCentersImage/Andheri/Andheri${i + 1}.jpg`),
    availableDoctors: [0, 7],
    metadata: {
      title: "Best IVF center in Andheri | Top Fertility Clinic in Andheri",
      description: "Best IVF center in Andheri offers advanced fertility treatment, including IVF, ICSI, and IUI. schedule a consultation from fertility specialist in Andheri."
    }
  },
  {
    id: 3,
    slug: "best-ivf-center-in-ghatkopar",
    name: "Ghatkopar",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "Shop Zone Building, Mahatma Gandhi Road, Ghatkopar West, Mumbai 400077",
    pinCode: "400077",
    image: "/LocationsSection/Ghatkopar.jpg",
    phone: "+91 94239 71620",
    email: "ghatkopar@progenesis.in",
    services: ["IVF", "IUI", "Genetic Counseling"],
    mapUri: "bu9UrQbqCwHokn148",
    coordinates: { lat: 19.0858784, lng: 72.9051982 },
    gallery: Array.from({ length: 13 }, (_, i) => `/AllCentersImage/Ghatkopar/Ghatkopar${i + 1}.jpg`),
    availableDoctors: [0],
    metadata: {
      title: "Best IVF center in Ghatkopar | Top Fertility Clinic in Ghatkopar",
      description: "Best IVF center in Ghatkopar offers advanced fertility treatment, including IVF, ICSI, and IUI. schedule a consultation from fertility specialist in Ghatkopar."
    }
  },
  {
    id: 4,
    slug: "best-ivf-center-in-virar",
    name: "Virar",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "2nd Floor, A-Wing, Shreeram Complex, Tirupati Nagar, Virar West, Virar",
    pinCode: "401303",
    image: "/LocationsSection/Virar.png",
    phone: "+91 94239 71620",
    email: "virar@progenesis.in",
    services: ["IVF", "Fertility Assessment", "Egg Freezing"],
    mapUri: "acG2v3Y8xdZcK64EA",
    coordinates: { lat: 19.4530572, lng: 72.7986412 },
    gallery: Array.from({ length: 8 }, (_, i) => `/AllCentersImage/Virar/Virar${i + 1}.jpg`),
    availableDoctors: [0, 10],
    metadata: {
      title: "Best IVF center in Virar | Top Fertility Clinic in Virar",
      description: "Best IVF center in Virar offers advanced fertility treatment, including IVF, ICSI, and IUI. schedule a consultation from fertility specialist in Virar."
    }
  },
  {
    id: 5,
    slug: "best-ivf-center-in-kalyan",
    name: "Kalyan",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "Diwadkar Complex, 302, Chatrapati Shivaji Maharaj Chowk, Kalyan(W), JijaMata Colony, Kalyan",
    pinCode: "421301",
    image: "/LocationsSection/Kalyan.png",
    phone: "+91 94239 71620",
    email: "kalyan@progenesis.in",
    services: ["IVF", "IUI", "Fertility Preservation"],
    mapUri: "wYmnqje6hZPsmSyX6",
    coordinates: { lat: 19.2406614, lng: 73.1296727 },
    gallery: Array.from({ length: 13 }, (_, i) => `/AllCentersImage/Kalyan/Kalyan${i + 1}.JPG`),
    availableDoctors: [0, 8],
    metadata: {
      title: "Best IVF Center in Kalyan - Progenesis IVF Fertility Center",
      description: "Looking for the best IVF center in Kalyan? schedule a consultation with our fertility experts and start your journey towards parenthood."
    }
  },
  {
    id: 6,
    slug: "best-ivf-center-in-borivali",
    name: "Borivali",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "Unit no 2, 1st Floor, Volga Building, Rayani Gram, Shimpoli, Borivali West, Mumbai, Maharashtra 400092",
    pinCode: "400092",
    image: "/LocationsSection/Borivali.png",
    phone: "+91 94239 71620",
    email: "borivali@progenesis.in",
    services: ["IVF", "Fertility Assessment", "Genetic Testing"],
    mapUri: "qqZZDcf3K1Hw62838",
    coordinates: { lat: 19.2221387, lng: 72.8485524 },
    gallery: Array.from({ length: 12 }, (_, i) => `/AllCentersImage/Borivali/Borivali${i + 1}.png`),
    availableDoctors: [0, 2],
    metadata: {
      title: "Best IVF Center in Borivali | Fertility Clinic in Borivali",
      description: "Best IVF center in Borivali offers advanced fertility treatment, including IVF, ICSI, & IUI. Book a consultation from fertility specialist in Borivali."
    }
  },
  {
    id: 7,
    slug: "best-ivf-center-in-vashi",
    name: "Vashi",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "Ground Floor, Bhumiraj Costarica, Palm Beach Service Road, Vashi, Navi Mumbai 400703",
    pinCode: "400703",
    image: "/LocationsSection/Vashi.jpg",
    phone: "+91 94239 71620",
    email: "vashi@progenesis.in",
    services: ["IVF", "IUI", "Surrogacy"],
    mapUri: "zLSUwhnYjK2WfRZi7",
    coordinates: { lat: 19.0565633, lng: 73.0035369 },
    gallery: Array.from({ length: 11 }, (_, i) => `/AllCentersImage/Vashi/Vashi${i + 1}.jpg`),
    availableDoctors: [0, 5],
    metadata: {
      title: "Best IVF center in Vashi | Top Fertility Clinic in Vashi",
      description: "Best IVF center in Vashi offers advanced fertility treatment, including IVF, ICSI, and IUI. schedule a consultation from fertility specialist in Vashi."
    }
  },
  {
    id: 8,
    slug: "best-ivf-center-in-panvel",
    name: "Panvel",
    city: "Mumbai",
    state: "MAHARASHTRA",
    address: "1st Floor, Ganga Kalash, Gandhi Hospital Lane, Near Suruchi Restaurant, Vasudev Balwant Phadke Road, Panvel",
    pinCode: "401107",
    image: "/LocationsSection/Panvel.jpg",
    phone: "+91 94239 71620",
    email: "panvel@progenesis.in",
    services: ["IVF", "IUI", "Genetic Testing"],
    mapUri: "X9cFyp1dBKFnmv459",
    coordinates: { lat: 18.9879311, lng: 73.1141176 },
    gallery: Array.from({ length: 8 }, (_, i) => `/AllCentersImage/Panvel/Panvel${i + 1}.jpg`),
    availableDoctors: [0, 9],
    metadata: {
      title: "Best IVF center in Panvel | Top Fertility Clinic in Panvel",
      description: "Best IVF center in Panvel offers advanced fertility treatment, including IVF, ICSI, and IUI. schedule a consultation from fertility specialist in Panvel."
    }
  },
  // Rest of Maharashtra
  {
    id: 9,
    slug: "best-ivf-center-in-pune",
    name: "Pune",
    city: "Pune",
    state: "MAHARASHTRA",
    address: "Infront of Reliance Digital, Kataria Chambers, ITI Rd, Sanewadi, Aundh, Pune 411007",
    pinCode: "411007",
    image: "/LocationsSection/Pune.jpg",
    phone: "+91 94239 71620",
    email: "pune@progenesis.in",
    services: ["IVF", "IUI", "Fertility Counseling"],
    mapUri: "gSE6EkZSCW6G5aNz6",
    coordinates: { lat: 18.5542529, lng: 73.8092704 },
    gallery: Array.from({ length: 8 }, (_, i) => `/AllCentersImage/Pune/Pune${i + 1}.jpg`),
    availableDoctors: [0, 11],
    metadata: {
      title: "Best IVF Center in Pune | Top IVF Clinic & Hospital in Pune",
      description: "Searching for the best IVF center in Pune? Our Top IVF Clinic offers advanced fertility treatment to help couples overcome infertility."
    }
  },
  {
    id: 10,
    slug: "best-ivf-center-in-nashik",
    name: "Nashik",
    city: "Nashik",
    state: "MAHARASHTRA",
    address: "IKON, 3rd Floor, Above Westside, Opp. Sun Bird Building, Yeolekar Mala, College Road, Nashik 422005",
    pinCode: "422005",
    image: "/LocationsSection/Nashik.jpg",
    phone: "+91 94239 71620",
    email: "nashik@progenesis.in",
    services: ["IVF", "Fertility Treatment", "Embryology"],
    mapUri: "zyXCS6dEsjRpndD88",
    coordinates: { lat: 20.0009439, lng: 73.7620231 },
    gallery: Array.from({ length: 11 }, (_, i) => `/AllCentersImage/Nashik/Nashik${i + 1}.jpg`),
    availableDoctors: [0, 12],
    metadata: {
      title: "Best IVF Center in Nashik - Progenesis IVF Fertility Center",
      description: "Looking for the best IVF center in Nashik? schedule a consultation with our fertility experts and start your journey towards parenthood."
    }
  },
  {
    id: 11,
    slug: "best-ivf-center-in-jalgaon",
    name: "Jalgaon",
    city: "Jalgaon",
    state: "MAHARASHTRA",
    address: "1st Floor, Nayantara Arcade, Pimprala Rd, Pratap Nagar, Jalgaon",
    pinCode: "422005",
    image: "/LocationsSection/Jalgaon.png",
    phone: "+91 94239 71620",
    email: "jalgaon@progenesis.in",
    services: ["IVF", "IUI", "Fertility Consultation"],
    mapUri: "koq52L9pCqt9AyDM8",
    coordinates: { lat: 21.00143072, lng: 75.5610411 },
    gallery: Array.from({ length: 9 }, (_, i) => `/AllCentersImage/Jalgaon/Jalgaon${i + 1}.jpg`),
    availableDoctors: [0, 18],
    metadata: {
      title: "Best IVF Center in Jalgaon - Progenesis IVF Fertility Center",
      description: "Looking for the best IVF center in Jalgaon? schedule a consultation with our fertility experts and start your journey towards parenthood."
    }
  },
  {
    id: 12,
    slug: "best-ivf-center-in-ahilyanagar",
    name: "Ahilyanagar",
    city: "Ahilyanagar",
    state: "MAHARASHTRA",
    address: "Shop No 2, First Floor, Diansh Plaza, opp. Mauli Sankul Road, Savedi, Ahilyanagar, Maharashtra 414003",
    pinCode: "414003",
    image: "/LocationsSection/ahliyanagr.jpg",
    phone: "+91 94239 71620",
    email: "ahmednagar@progenesis.in",
    services: ["IVF", "IUI", "Fertility Counseling"],
    mapUri: "tNr54ErBfVH7mHX67",
    coordinates: { lat: 19.1151738, lng: 74.7296822 },
    gallery: Array.from({ length: 10 }, (_, i) => `/AllCentersImage/Ahilyanagar/Ahilyanagar${i + 1}.JPG`),
    availableDoctors: [0, 15],
    metadata: {
      title: "Best IVF Center in Ahilyanagar | Fertility Clinic in Ahilyanagar",
      description: "Best IVF center in Ahilyanagar offers advanced fertility treatment, including IVF, ICSI, & IUI. Book a consultation from fertility specialist in Ahilyanagar."
    }
  },
  {
    id: 13,
    slug: "best-ivf-center-in-amravati",
    name: "Amravati",
    city: "Amravati",
    state: "MAHARASHTRA",
    address: "3rd floor, Badnera Rd, above Raghubir Food Zone, Sharda Vihar, Amravati, Maharashtra 444605",
    pinCode: "444605",
    image: "/LocationsSection/Amravati.jpg",
    phone: "+91 94239 71620",
    email: "amravati@progenesis.in",
    services: ["IVF", "Fertility Assessment", "Genetic Testing"],
    mapUri: "rYd1qu5wgL4ycmjV8",
    coordinates: { lat: 20.9157935, lng: 77.7531131 },
    gallery: Array.from({ length: 6 }, (_, i) => `/AllCentersImage/Amravati/Amravati${i + 1}.jpg`),
    availableDoctors: [0, 16],
    metadata: {
      title: "Best IVF Center in Amravati | Fertility Clinic in Amravati",
      description: "Best IVF center in Amravati offers advanced fertility treatment, including IVF, ICSI, & IUI. Book a consultation from fertility specialist in Amravati."
    }
  },
  {
    id: 14,
    slug: "best-ivf-center-in-kolhapur",
    name: "Kolhapur",
    city: "Kolhapur",
    state: "MAHARASHTRA",
    address: "Royal Mirage Arcade, A Wing, Railway Colony Rd, opp. Kolhapur railway station, Railway Colony, New Shahupuri, Kolhapur 416001",
    pinCode: "416001",
    image: "/LocationsSection/Kolhapur.png",
    phone: "+91 94239 71620",
    email: "kolhapur@progenesis.in",
    services: ["IVF", "IUI", "Surrogacy"],
    mapUri: "i1Ap66b3nMNhSZbh8",
    coordinates: { lat: 16.7034419, lng: 74.2377609 },
    gallery: Array.from({ length: 4 }, (_, i) => `/AllCentersImage/Kolhapur/Kolhapur${i + 1}.jpeg`),
    availableDoctors: [0],
    metadata: {
      title: "Best IVF Center in Kolhapur | Fertility Clinic in Kolhapur",
      description: "Best IVF center in Kolhapur offers advanced fertility treatment, including IVF, ICSI, & IUI. Book a consultation from fertility specialist in Kolhapur."
    }
  },
  {
    id: 15,
    slug: "best-ivf-center-in-nagpur",
    name: "Nagpur",
    city: "Nagpur",
    state: "MAHARASHTRA",
    address: "6th Floor, Tower 10, N Ambazari Rd, beside Alankar Theater, Bhagwaghar, Dharampeth, Nagpur, Maharashtra 440002",
    pinCode: "440002",
    image: "/LocationsSection/Nagpur.png",
    phone: "+91 94239 71620",
    email: "nagpur@progenesis.in",
    services: ["IVF", "IUI", "Embryology"],
    mapUri: "vsx3HtpkRy9rGUHK8",
    coordinates: { lat: 18.9353097, lng: 73.2963966 },
    gallery: Array.from({ length: 7 }, (_, i) => `/AllCentersImage/Nagpur/Nagpur${i + 1}.jpg`),
    availableDoctors: [0, 13, 14],
    metadata: {
      title: "Best IVF Center in Nagpur | Fertility Clinic in Nagpur",
      description: "Best IVF center in Nagpur offers advanced fertility treatment, including IVF, ICSI, & IUI. Book a consultation from fertility specialist in Nagpur."
    }
  },
  {
    id: 16,
    slug: "best-ivf-center-in-solapur",
    name: "Solapur",
    city: "Solapur",
    state: "MAHARASHTRA",
    address: "KASTURE AGENCIES, 3rd Floor, Unit No 3-B, Kasture Business Centre, Railway lines, Dufferin Chowk, Solapur, Maharashtra 413001",
    pinCode: "413001",
    image: "/LocationsSection/Solapur.png",
    phone: "+91 94239 71620",
    email: "solapur@progenesis.in",
    services: ["IVF", "Fertility Treatment", "Counseling"],
    mapUri: "acwiefbWWf2ZXC5x9",
    coordinates: { lat: 21.0143072, lng: 75.5610411 },
    gallery: Array.from({ length: 5 }, (_, i) => `/AllCentersImage/Solapur/Solapur${i + 1}.jpg`),
    availableDoctors: [0, 17],
    metadata: {
      title: "Best IVF Center in Solapur | Fertility Clinic in Solapur",
      description: "Best IVF center in Solapur offers advanced fertility treatment, including IVF, ICSI, & IUI. Book a consultation from fertility specialist in Solapur."
    }
  }
];
