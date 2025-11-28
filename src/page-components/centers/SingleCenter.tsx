"use client";
import React, { useEffect, useMemo, useState, Suspense } from "react";
import { Center } from "@/data/centers";
import { useRouter } from "next/navigation";
import CenterDoctorsSection from "./SingleCenterDoctors";
import TestimonialsCenters from "./TestimonialCenters";
import AppointmentForm from "../about/AppointmentForm";
import CenterCarousel from "./CenterCarousel";
import FAQCenters from "../about/FAQCenters";
import InfoGridCenters from "./InfoGridCenters";
import Detailing from "./Detailing";
import TextSection from "./TextSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import axios from "axios";
import Script from "next/script";
import { generateMedicalClinicSchema } from "@/utils/constent/schemaGenerator";

interface SingleCenterProps {
  selectedSlug?: string;
  center?: Center;
  centers?: Center[];
}

const infoGridCenters = {
  tag: "Our Expertise",
  heading:
    "Advanced fertility treatments backed <br/> by innovation and compassionate care",
  items: [
    {
      id: 1,
      title: "IVF & ICSI",
      description:
        "Personalized fertility solutions using advanced lab technology to ensure the highest success rates.",
    },
    {
      id: 2,
      title: "IUI Treatment",
      description:
        "A minimally invasive and effective first-line approach for couples beginning their parenthood journey.",
    },
    {
      id: 3,
      title: "Blastocyst Culture & Transfer",
      description:
        "Carefully nurtured embryos transferred at the most viable stage for improved implantation outcomes.",
    },
    {
      id: 4,
      title: "Laser Assisted Hatching (LAH)",
      description:
        "Precision technique that enhances embryo implantation by aiding the natural hatching process.",
    },
    {
      id: 5,
      title: "Donor Programs",
      description:
        "Safe and confidential oocyte and embryo donation programs designed to support complex fertility cases.",
    },
    {
      id: 6,
      title: "Laparoscopy & Hysteroscopy",
      description:
        "State-of-the-art diagnostic and surgical procedures to identify and treat underlying fertility issues.",
    },
  ],
};

export default function SingleCenter({ selectedSlug, center, centers }: SingleCenterProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(4.5);
  const [totalReviews, setTotalReviews] = useState(0);
  const [reviewsList, setReviewsList] = useState<{ author: string; text: string; create_time: string; star_rating: string }[]>([]);

  const selectedCenter = useMemo(() => {
    if (center) {
      return center;
    }
    if (!selectedSlug) {
      return undefined;
    }

    const normalizedSlug = selectedSlug.toLowerCase();
    if (centers){
      return centers.find((c:any) => c.slug === normalizedSlug);
    }else{
      return null
    }
  }, [selectedSlug, center]);

  // Generate schema markup
  const schemaMarkup = useMemo(() => {
    if (!selectedCenter) return null;
    
    const baseUrl = "https://progenesisivf.com/"
    
    return generateMedicalClinicSchema({
      center: selectedCenter,
      baseUrl: `${baseUrl}/our-center`
    });
  }, [selectedCenter]);

  const getReviewData = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/average-reviews/"
      );

      const centerData = response.data.results.results.find((data: any) =>
        data.city.toLowerCase() === selectedCenter?.name.toLowerCase()
      );

      if (!centerData) {
        console.warn("No center data found for:", selectedCenter?.name);
        setRating(0);
        setTotalReviews(0);
        setReviewsList([]);
        return response.data;
      }

      setRating(centerData.average_rating);
      setTotalReviews(centerData.total_reviews);

      const reviewsData = centerData.data;

      const extractOriginal = (comment: string): string => {
        if (typeof comment !== "string") return comment ?? "No Review Text";

        const translatedMarker = "(Translated by Google)";
        const originalMarker = "(Original)";

        const originalIdx = comment.indexOf(originalMarker);
        if (originalIdx !== -1) {
          const afterOriginal = comment
            .slice(originalIdx + originalMarker.length)
            .trim();
          return afterOriginal.replace(/^\s*[\r\n]*/, "");
        }

        const translatedIdx = comment.toLowerCase().indexOf(translatedMarker.toLowerCase());
        if (translatedIdx !== -1) {
          const afterTranslated = comment
            .slice(translatedIdx + translatedMarker.length)
            .trim();
          return afterTranslated || "No Review Text";
        }

        return comment;
      };

      const formattedReviews = reviewsData
        .filter((item: any) => item?.comment && typeof item.comment === "string")
        .map((item: any) => {
          const cleanedComment = extractOriginal(item.comment);

          return {
            author: item.reviewer?.displayName || "Unknown Author",
            text: cleanedComment,
            create_time: item.create_time,
            star_rating: item.star_rating,
          };
        });

      setReviewsList(formattedReviews);
      return response.data;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setRating(0);
      setTotalReviews(0);
      setReviewsList([]);
      return null;
    }
  };

  useEffect(() => {
    getReviewData();
  }, [selectedCenter]);

  if (!selectedCenter) {
    return null;
  }

  return (
    <>
      {/* Dynamic Schema Markup */}
      {schemaMarkup && (
        <Script
          id={`schema-${selectedCenter.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaMarkup }}
          strategy="afterInteractive"
        />
      )}

      <div>
        {/* Hero Banner Section */}
        <section
          className="relative w-full h-[500px] bg-cover bg-center flex  flex-col"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${selectedCenter.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="lg:pl-30 pl-4 lg:pt-20 pt-4 max-w-7xl w-full">
            <h1 className="text-white text-[32px] leading-[40px] lg:text-[60px] lg:leading-[66px] font-[Manrope] tracking-tight font-semibold mb-4">
              Progenesis IVF Fertility Center,
            </h1>
            <h2 className="text-white text-[32px] leading-[40px] lg:text-[60px] lg:leading-[66px] font-semibold tracking-tight font-[Manrope] mb-6">
              {selectedCenter.name}
            </h2>
          </div>
          <div className="lg:pl-30 pl-4 pt-5">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#1656A5] lg:p-[8px] p-[8px] h-[40px] w-[150px] lg:h-[56px] lg:w-[188px] text-[12px] lg:text-[14px]  text-[#F9F9F9] rounded-[8px] lg:rounded-[16px]  hover:cursor-pointer transition"
            >
              Book Your Appointment
            </button>
          </div>
        </section>

        {/* Center Details Section */}
        <section className="px-4 py-4 lg:px-[120px] lg:py-[80px] w-full bg-white ">
          <div className=" lg:flex lg:flex-row">
            <div className="w-full ">
              <p className="w-fit rounded-[8px] py-[4px] px-[8px] text-sm text-[#1656A5] bg-[#1656A5]/10 mb-2">
                Our Centers
              </p>
              <h2 className="text-[#2C2C2C] text-[32px] md:text-[48px]  leading-[40px] md:leading-[56px] tracking-tight font-normal mb-6 lg:mb-12 md:pb-6">
                Progenesis IVF Fertility Center, {selectedCenter.name}
              </h2>
              
              {selectedCenter.coordinates && (
                <div className="md:hidden block mb-6 lg:ml-10 w-full h-[400px] lg:h-[600px] overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${selectedCenter.coordinates.lat},${selectedCenter.coordinates.lng}&z=15&output=embed`}
                  ></iframe>
                </div>
              )}

              <div className="grid gap-8 items-start max-w-[415px]">
                <div className="font-[Manrope] lg:gap-20 space-y-6 lg:space-y-[80px] ">
                  {/* Phone Section */}
                  <div className="flex items-center  gap-4">
                    <div className="lg:p-5 rounded-2xl p-2 bg-[#1656A50D] flex items-center justify-center">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.043 25.8332C21.4319 25.8332 18.7166 25.1457 15.8971 23.7707C13.0777 22.3957 10.4388 20.4721 7.98047 17.9998C5.52214 15.5276 3.60547 12.8887 2.23047 10.0832C0.855469 7.27762 0.167969 4.56928 0.167969 1.95817C0.167969 1.44623 0.334635 1.0197 0.667969 0.678586C1.0013 0.337197 1.41797 0.166504 1.91797 0.166504H5.2513C5.72352 0.166504 6.13325 0.312337 6.48047 0.604004C6.82769 0.895671 7.07075 1.27762 7.20964 1.74984L7.95964 5.1665C8.04297 5.63873 8.02908 6.05539 7.91797 6.4165C7.80686 6.77762 7.61241 7.06928 7.33464 7.2915L3.79297 10.4998C4.51519 11.8054 5.29991 13.0068 6.14714 14.104C6.99436 15.2012 7.89019 16.236 8.83464 17.2082C9.83464 18.2082 10.918 19.1387 12.0846 19.9998C13.2513 20.861 14.543 21.6804 15.9596 22.4582L19.418 18.9165C19.6957 18.6109 19.9944 18.4165 20.3138 18.3332C20.6332 18.2498 21.0013 18.2359 21.418 18.2915L24.2513 18.8748C24.7235 18.986 25.1055 19.2221 25.3971 19.5832C25.6888 19.9443 25.8346 20.361 25.8346 20.8332V24.0832C25.8346 24.5832 25.6639 24.9998 25.3226 25.3332C24.9814 25.6665 24.5549 25.8332 24.043 25.8332ZM3.2513 9.4165L6.58464 6.4165C6.72353 6.30539 6.8138 6.15262 6.85547 5.95817C6.89714 5.76373 6.89019 5.58317 6.83464 5.4165L6.08464 1.99984C6.02908 1.77762 5.93186 1.61095 5.79297 1.49984C5.65408 1.38873 5.47352 1.33317 5.2513 1.33317H1.91797C1.7513 1.33317 1.61241 1.38873 1.5013 1.49984C1.39019 1.61095 1.33464 1.74984 1.33464 1.9165C1.33464 3.05539 1.50825 4.26373 1.85547 5.5415C2.20269 6.81928 2.66797 8.11095 3.2513 9.4165ZM17.0846 22.9998C18.2235 23.5832 19.4527 24.0068 20.7721 24.2707C22.0916 24.5346 23.1957 24.6665 24.0846 24.6665C24.2513 24.6665 24.3902 24.611 24.5013 24.4998C24.6124 24.3887 24.668 24.2498 24.668 24.0832V20.8332C24.668 20.611 24.6124 20.4304 24.5013 20.2915C24.3902 20.1526 24.2235 20.0554 24.0013 19.9998L21.168 19.4165C21.0013 19.361 20.8555 19.354 20.7305 19.3957C20.6055 19.4373 20.4735 19.5276 20.3346 19.6665L17.0846 22.9998Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                    </div>

                    <div className="">
                      <div className="mb-1">
                        <span className="text-[16px] text-[#606060]">
                          Reach Out to us at
                        </span>
                      </div>
                      <p className="lg:text-[32px] text-base leading-5 font-normal md:leading-[40px] text-[#1656A5]">
                        {selectedCenter.phone}
                      </p>
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="flex items-start  gap-[16px]">
                    <div className="lg:p-5 rounded-2xl p-2 bg-[#1656A50D] flex justify-center">
                      <svg
                        width="20"
                        height="30"
                        viewBox="0 0 20 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 29.4995C7.38889 29.4995 5.25 29.194 3.58333 28.5828C1.91667 27.9717 1.08333 27.1801 1.08333 26.2078C1.08333 25.7356 1.34028 25.2773 1.85417 24.8328C2.36806 24.3884 3.06944 24.0134 3.95833 23.7078C4.09722 23.6523 4.25 23.6592 4.41667 23.7287C4.58333 23.7981 4.69444 23.9023 4.75 24.0412C4.80556 24.1801 4.79167 24.3259 4.70833 24.4787C4.625 24.6315 4.51389 24.7356 4.375 24.7912C3.90278 24.9578 3.45139 25.1662 3.02083 25.4162C2.59028 25.6662 2.33333 25.9162 2.25 26.1662C2.38889 26.7495 3.1875 27.2565 4.64583 27.687C6.10417 28.1176 7.88889 28.3328 10 28.3328C12.1111 28.3328 13.8958 28.1176 15.3542 27.687C16.8125 27.2565 17.6111 26.7495 17.75 26.1662C17.6667 25.9162 17.4097 25.6662 16.9792 25.4162C16.5486 25.1662 16.0972 24.9578 15.625 24.7912C15.4861 24.7356 15.375 24.6315 15.2917 24.4787C15.2083 24.3259 15.1944 24.1801 15.25 24.0412C15.3056 23.9023 15.4167 23.7981 15.5833 23.7287C15.75 23.6592 15.9028 23.6523 16.0417 23.7078C16.9306 24.0134 17.6319 24.3884 18.1458 24.8328C18.6597 25.2773 18.9167 25.7356 18.9167 26.2078C18.9167 27.1801 18.0833 27.9717 16.4167 28.5828C14.75 29.194 12.6111 29.4995 10 29.4995ZM10.0417 23.0412C12.8194 20.8467 14.8958 18.7148 16.2708 16.6453C17.6458 14.5759 18.3333 12.5551 18.3333 10.5828C18.3333 7.6384 17.4375 5.41618 15.6458 3.91618C13.8542 2.41618 11.9722 1.66618 10 1.66618C8.05556 1.66618 6.18056 2.41618 4.375 3.91618C2.56944 5.41618 1.66667 7.6384 1.66667 10.5828C1.66667 12.5273 2.35417 14.5273 3.72917 16.5828C5.10417 18.6384 7.20833 20.7912 10.0417 23.0412ZM10 23.8745C9.75 23.8745 9.5 23.8259 9.25 23.7287C9 23.6315 8.76389 23.4995 8.54167 23.3328C5.84722 21.1106 3.83333 18.944 2.5 16.8328C1.16667 14.7217 0.5 12.6384 0.5 10.5828C0.5 8.91618 0.784722 7.45785 1.35417 6.20785C1.92361 4.95785 2.66667 3.90923 3.58333 3.06201C4.5 2.21479 5.52083 1.5759 6.64583 1.14535C7.77083 0.71479 8.88889 0.499512 10 0.499512C11.1111 0.499512 12.2292 0.71479 13.3542 1.14535C14.4792 1.5759 15.5 2.21479 16.4167 3.06201C17.3333 3.90923 18.0764 4.95785 18.6458 6.20785C19.2153 7.45785 19.5 8.91618 19.5 10.5828C19.5 12.6384 18.8333 14.7217 17.5 16.8328C16.1667 18.944 14.1528 21.1106 11.4583 23.3328C11.2361 23.4995 11 23.6315 10.75 23.7287C10.5 23.8259 10.25 23.8745 10 23.8745ZM10 12.8745C10.6944 12.8745 11.2847 12.6384 11.7708 12.1662C12.2569 11.694 12.5 11.0967 12.5 10.3745C12.5 9.68007 12.2569 9.08979 11.7708 8.60368C11.2847 8.11757 10.6944 7.87451 10 7.87451C9.33333 7.87451 8.75 8.11757 8.25 8.60368C7.75 9.08979 7.5 9.68007 7.5 10.3745C7.5 11.0967 7.75 11.694 8.25 12.1662C8.75 12.6384 9.33333 12.8745 10 12.8745Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                    </div>

                    <div>
                      <div className="mb-1">
                        <span className="text-[16px] text-[#606060]">
                          Visit the Center
                        </span>
                      </div>
                      <p className="lg:text-[24px] text-base leading-6 tracking-tight font-normal lg:leading-[34px] text-[#1656A5]">
                        {selectedCenter.address}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row flex-wrap gap-3 lg:gap-4 pt-[9px] lg:pt-[52px]">
                    <button
                      onClick={() => {
                        if (selectedCenter.map_uri) {
                          window.open(
                            `https://maps.google.com/?q=${selectedCenter.map_uri}`,
                            "_blank",
                          );
                        }
                      }}
                      disabled={!selectedCenter.map_uri}
                      className=" lg:px-8 lg:py-3 p-[10px] h-10 lg:h-14 w-fit rounded-lg border hover:cursor-pointer border-[#1656A5] text-white bg-[#1656A5] text-sm font-medium hover:bg-white hover:text-[#1656A5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Get Location
                    </button>
                    <button
                      onClick={() => setIsOpen(true)}
                      className="lg:px-8 lg:py-3 p-[10px] h-10 lg:h-14 w-fit rounded-lg border hover:cursor-pointer border-[#1656A5] bg-white text-[#1656A5] text-sm font-medium hover:bg-[#1656A5] hover:text-white transition-colors"
                    >
                      Book an Appointment
                    </button>

                    {isOpen && (
                      <Suspense
                        fallback={
                          <div className="w-full h-64 flex items-center justify-center">
                            Loading...
                          </div>
                        }
                      >
                        <AppointmentForm onClose={() => setIsOpen(false)} />
                      </Suspense>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {selectedCenter.coordinates && (
              <div
                className="hidden md:block lg:ml-10 w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm"
                style={{
                  height: "auto",
                  minHeight: "400px",
                  maxHeight: "fit-content",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: "100%",
                  }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${selectedCenter.coordinates.lat},${selectedCenter.coordinates.lng}&z=15&output=embed`}
                ></iframe>
              </div>
            )}
          </div>
        </section>

        <CenterCarousel
          gallery={selectedCenter.gallery}
          fallbackImage={selectedCenter.image}
        />
        <Detailing />
        <TextSection city={selectedCenter.name} />
        <InfoGridCenters
          tag={infoGridCenters.tag}
          heading={infoGridCenters.heading}
          items={infoGridCenters.items}
        />
        {totalReviews && totalReviews && reviewsList && reviewsList.length > 0 && (
          <TestimonialsSection 
            rating={rating} 
            totalReviews={totalReviews} 
            reviewsList={reviewsList}
          />
        )}
        <CenterDoctorsSection centre={selectedCenter} />
        <TestimonialsCenters />
        {center?.faqs && center.faqs.length > 0 && (
          <FAQCenters data={center.faqs} />
        )}
      </div>
    </>
  );
}