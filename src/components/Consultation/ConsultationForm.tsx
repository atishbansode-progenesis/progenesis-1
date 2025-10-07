"use client";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { API_DOMAIN } from "@/utils/constent/constent";

// Toast Component
interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
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
          ${
            type === "success"
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

const ConsultationForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formFields, setFormFields] = useState<any[]>([]);
  const [formData, setFormData] = useState<any>({});
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    axios
      .get(API_DOMAIN + "api/forms/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setFormFields(res.data[0].fields);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (name: string, value: string | boolean | string[]) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        API_DOMAIN + "api/form/save/",
        { fields: formData },
        { headers: { "Content-Type": "application/json" } }
      );
      
      // Reset form data
      setFormData({});
      
      // Reset the form element itself
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Show success toast
      setToast({
        message: "Your appointment has been booked successfully!",
        type: "success",
      });
    } catch (error) {
      console.error(error);
      
      // Show error toast
      setToast({
        message: "Failed to submit form. Please try again.",
        type: "error",
      });
    }
  };

  // Group fields into rows of 2
  const groupedFields: any[][] = [];
  const nonCheckboxFields = formFields.filter(f => f.type !== "checkbox");
  
  for (let i = 0; i < nonCheckboxFields.length; i += 2) {
    groupedFields.push(nonCheckboxFields.slice(i, i + 2));
  }

  const checkboxFields = formFields.filter(f => f.type === "checkbox");

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <section className="relative pt-[42px] md:pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px] flex justify-center bg-transparent">
        <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row w-full max-w-6xl gap-10">
          {/* Left Form */}
          <div className="flex-1 text-center">
            <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
              Schedule a Consultation
            </span>

            <h2 className="mt-4 text-[#2C2C2C] font-[Manrope] text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-center">
              Just focus on your fertility journey, <br /> We got the rest
              covered!
            </h2>

            <form ref={formRef} className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* Grouped fields in 2-column grid */}
              {groupedFields.map((row, rowIdx) => (
                <div key={rowIdx} className="grid grid-flow-row md:grid-cols-2 gap-4">
                  {row.map((field, idx) => {
                    if (["text", "email", "tel"].includes(field.type)) {
                      return (
                        <input
                          key={idx}
                          type={field.type}
                          placeholder={field.placeholder || field.title}
                          required={field.required}
                          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                          onChange={(e) => handleChange(field.name, e.target.value)}
                          value={formData[field.name] || ""}
                        />
                      );
                    }

                    if (field.type === "date") {
                      return (
                        <input
                          key={idx}
                          type="date"
                          required={field.required}
                          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                          onChange={(e) => handleChange(field.name, e.target.value)}
                          value={formData[field.name] || ""}
                        />
                      );
                    }

                    if (field.type === "select") {
                      return (
                        <select
                          key={idx}
                          required={field.required}
                          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                          onChange={(e) => handleChange(field.name, e.target.value)}
                          value={formData[field.name] || ""}
                        >
                          <option value="">{field.title}</option>
                          {field.options?.map((opt: any, i: number) => (
                            <option key={i} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      );
                    }

                    if (field.type === "radio") {
                      return (
                        <div key={idx} className="flex items-center space-x-4">
                          {field.options?.map((opt: any, i: number) => (
                            <label key={i} className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name={field.name}
                                value={opt.value}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                checked={formData[field.name] === opt.value}
                              />
                              <span className="text-sm text-gray-600">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              ))}

              {/* Checkbox (Terms & Conditions) */}
              {checkboxFields.map((field, idx) => (
                <div key={idx} className="flex items-center justify-center space-x-2">
                  <input
                    type="checkbox"
                    id={field.name}
                    className="h-4 w-4"
                    onChange={(e) => handleChange(field.name, e.target.checked)}
                    checked={formData[field.name] || false}
                    required={field.required}
                  />
                  <label htmlFor={field.name} className="text-sm text-gray-600">
                    {field.options && field.options.length > 0 ? (
                      <>
                        {field.options[0].label.split(/(\bPrivacy Policy\b|\bT&C\b)/g).map((part: string, i: number) => {
                          if (part === "Privacy Policy" || part === "T&C") {
                            return (
                              <a key={i} href="#" className="text-blue-600 underline">
                                {part}
                              </a>
                            );
                          }
                          return part;
                        })}
                      </>
                    ) : (
                      <>
                        Clicking means you agree to our{" "}
                        <a href="#" className="text-blue-600 underline">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 underline">
                          T&C.
                        </a>
                      </>
                    )}
                  </label>
                </div>
              ))}

              {/* Button */}
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

          {/* Right Image with Scratch Effect */}
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

export default ConsultationForm;