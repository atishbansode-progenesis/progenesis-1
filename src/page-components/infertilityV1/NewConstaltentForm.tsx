"use client";
import React, { useRef, useState } from "react";
import axios from "axios";
import { API_DOMAIN } from "@/utils/constent/constent";

// Toast Component
interface ToastProps {
    message: string;
    type: "success" | "error";
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-8 right-8 z-50 animate-slideIn">
            <div
                className={`
          flex items-center gap-3 min-w-[320px] px-6 py-4 rounded-2xl shadow-2xl
          backdrop-blur-md border transform transition-all duration-300
          ${type === "success"
                        ? "bg-green-50 border-green-200 text-green-800"
                        : "bg-red-50 border-red-200 text-red-800"
                    }
        `}
            >
                <div
                    className={`
            flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
            ${type === "success" ? "bg-green-500" : "bg-red-500"}
          `}
                >
                    {type === "success" ? (
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </div>

                <div className="flex-1">
                    <p className="font-semibold text-sm">
                        {type === "success" ? "Success!" : "Error!"}
                    </p>
                    <p className="text-sm opacity-90">{message}</p>
                </div>

                <button
                    onClick={onClose}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const ScratchImage = () => {
    return (
        <img
            src="/images/appointment.jpg"
            alt="Consultation"
            className="w-full h-full object-cover rounded-2xl"
        />
    );
};

const NewConstaltentForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredDate: "",
        nearbyCenter: "",
        agreeToTerms: false,
    });

    const svgImage = () => {
        return (
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#2C2C2C" stroke-linecap="square" stroke-linejoin="round" />
            </svg>

        )
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const payload = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                preferredDate: formData.preferredDate,
                nearbyCenter: formData.nearbyCenter,
                agreeToTerms: formData.agreeToTerms,
            };

            await axios.post(API_DOMAIN + "api/form/save/", payload, {
                headers: { "Content-Type": "application/json" },
            });

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                preferredDate: "",
                nearbyCenter: "",
                agreeToTerms: false,
            });

            if (formRef.current) {
                formRef.current.reset();
            }

            setToast({
                message: "Your appointment has been booked successfully!",
                type: "success",
            });
        } catch (error) {
            console.error(error);
            setToast({
                message: "Failed to submit form. Please try again.",
                type: "error",
            });
        }
    };

    return (
        <>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

            <section className="relative p-[16px] lg:p-[120px] py-14 flex justify-center bg-transparent">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="\video\babyvideo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="bg-white rounded-2xl shadow-lg p-4 md:p-10 flex flex-col md:flex-row w-full max-w-6xl gap-10 z-20">
                    <div className="flex-1 text-center">
                        <button className="cursor-pointer bg-[#1656A5]/5 px-2 py-1 rounded-[8px] text-[12px] font-medium text-[#1656A5]">
                            Schedule a Consultation
                        </button>

                        <h2 className="mt-4 text-[#2C2C2C] font-[Manrope] text-[20px] md:text-[32px] font-normal leading-[28px] md:leading-[40px] tracking-[-0.64px] text-center">
                            Just focus on your fertility journey, We got the rest covered!
                        </h2>

                        <form ref={formRef} className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-flow-row md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    required
                                    className="w-full border border-[#000000]/15 rounded-[16px] p-4 placeholder:text-[#2C2C2C]/50 text-[14px] focus:outline-none"
                                    onChange={handleChange}
                                    value={formData.firstName}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required
                                    className="w-full border border-[#000000]/15 rounded-[16px] p-4 placeholder:text-[#2C2C2C]/50 text-[14px] focus:outline-none"
                                    onChange={handleChange}
                                    value={formData.lastName}
                                />
                            </div>

                            <div className="grid grid-flow-row md:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email ID"
                                    required
                                    className="w-full border border-[#000000]/15 rounded-[16px] p-4 placeholder:text-[#2C2C2C]/50 text-[14px] focus:outline-none"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91"
                                    required
                                    className="w-full border border-[#000000]/15 rounded-[16px] p-4 placeholder:text-[#2C2C2C]/50 text-[14px] focus:outline-none"
                                    onChange={handleChange}
                                    value={formData.phone}
                                />
                            </div>

                            <div className="grid grid-flow-row md:grid-cols-2 gap-4">
                                <input
                                    type="date"
                                    name="preferredDate"
                                    required
                                    className="w-full border border-[#000000]/15 rounded-[16px] p-4 placeholder:text-[#2C2C2C]/50 text-[14px] focus:outline-none"
                                    onChange={handleChange}
                                    value={formData.preferredDate}
                                />
                                <select
                                    name="nearbyCenter"
                                    required
                                    className="w-full border border-[#000000]/15 rounded-[16px] p-4 pr-10 placeholder:text-[#2C2C2C]/50 text-[14px] focus:outline-none appearance-none bg-white"
                                    style={{
                                        backgroundImage: `url(${svgImage()})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1rem center',
                                        backgroundSize: '12px',
                                    }}
                                    onChange={handleChange}
                                    value={formData.nearbyCenter}
                                >
                                    <option value="">Nearby Center</option>
                                    <option value="center1">Center 1</option>
                                    <option value="center2">Center 2</option>
                                    <option value="center3">Center 3</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="agreeToTerms"
                                    name="agreeToTerms"
                                    className="h-4 w-4 "
                                    onChange={handleChange}
                                    checked={formData.agreeToTerms}
                                    required
                                />
                                <label htmlFor="agreeToTerms" className="text-sm text-gray-600">

                                    <p className="text-[#2C2C2C]/50 text-[14px] font-[Manrope]">Clicking means you agree to our Privacy Policy and T&C.</p>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="px-6 py-3 rounded-[16px] bg-[#1656A5] text-[#F9F9F9] 
                   font-[Manrope] text-[14px] font-medium leading-[24px] 
                   tracking-[-0.28px] backdrop-blur-[7.5px] transition 
                   hover:bg-[#134a91] block mx-auto"
                            >
                                Book Appointment
                            </button>
                        </form>
                    </div>

                    <div className="flex-1 relative">
                        <ScratchImage />
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
        </>
    );
};

export default NewConstaltentForm;