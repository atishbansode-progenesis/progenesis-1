'use client'
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { API_DOMAIN } from '@/utils/constent/constent';

interface AppointmentFormProps {
  onClose?: () => void;
}

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scratchCount, setScratchCount] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.fillStyle = "#1656A5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const scratch = (e: any) => {
      if (revealed) return;

      const rect = canvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();

      setScratchCount((prev) => {
        const newCount = prev + 1;
        if (newCount >= 2) {
          setRevealed(true);
        }
        return newCount;
      });
    };

    canvas.addEventListener("mousemove", scratch);
    canvas.addEventListener("touchmove", scratch);

    return () => {
      canvas.removeEventListener("mousemove", scratch);
      canvas.removeEventListener("touchmove", scratch);
    };
  }, [revealed]);

  useEffect(() => {
    if (revealed && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  }, [revealed]);

  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden">
      <img
        src="/ConsultationForm/contact.png"
        alt="Consultation"
        className="w-full h-full object-cover"
      />
      {!revealed && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}
    </div>
  );
};

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onClose }) => {
  const isPopupMode = !!onClose;
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formFields, setFormFields] = useState<any[]>([]);
  const [formData, setFormData] = useState<any>({});
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  // Timeout promise helper
  const timeoutPromise = (promise: Promise<any>, ms: number) =>
    Promise.race([
      promise,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), ms)
      ),
    ]);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await timeoutPromise(
          axios.get(API_DOMAIN + "api/forms/", {
            headers: {
              "Content-Type": "application/json",
            },
          }),
          6000
        );
        if (Array.isArray(response.data) && response.data.length > 0) {
          setFormFields(response.data[0].fields);
          setApiError(false);
        } else {
          throw new Error('No form fields found');
        }
      } catch (err: any) {
        console.log(err);
        setApiError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFields();
  }, []);

  const handleChange = (name: string, value: string | boolean | string[]) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if form fields failed to load
    if (formFields.length === 0 || apiError) {
      setToast({
        message: "We are unable to book appointment at this moment. Please try again later.",
        type: "error",
      });
      return;
    }

    setIsSubmitLoading(true);
    try {
      await timeoutPromise(
        axios.post(
          API_DOMAIN + "api/form/save/",
          { fields: formData },
          { headers: { "Content-Type": "application/json" } }
        ),
        6000
      );
      
      // Reset form data
      setFormData({});
      
      // Reset the form element itself
      if (formRef.current) {
        formRef.current.reset();
      }
      
      if (isPopupMode) {
        setIsFormOpen(false); // Close the form
        
        // Show success toast after form closes
        setTimeout(() => {
          setToast({
            message: "Your appointment has been booked successfully!",
            type: "success",
          });
        }, 300); // Slight delay to ensure form closes first
      } else {
        // For inline, show toast immediately
        setToast({
          message: "Your appointment has been booked successfully!",
          type: "success",
        });
      }
    } catch (error: any) {
      console.error(error);
      
      // Show error toast
      setToast({
        message: error.message === 'Timeout' 
          ? "We are unable to book appointment at this moment. Please try again later."
          : "Failed to submit form. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitLoading(false);
    }
  };

  // Separate fields by type
  const nonCheckboxFields = formFields.filter(f => f.type !== "checkbox");
  const checkboxFields = formFields.filter(f => f.type === "checkbox");

  // Group fields into rows of 2 for desktop
  const groupedFields: any[][] = [];
  for (let i = 0; i < nonCheckboxFields.length; i += 2) {
    groupedFields.push(nonCheckboxFields.slice(i, i + 2));
  }

  const renderField = (field: any, containerClass: string) => {
    if (["text", "email", "tel"].includes(field.type)) {
      return (
        <input
          type={field.type}
          placeholder={field.placeholder || field.title}
          required={field.required}
          className={containerClass}
          onChange={(e) => handleChange(field.name, e.target.value)}
          value={formData[field.name] || ""}
          disabled={isSubmitLoading}
        />
      );
    }

    if (field.type === "date") {
      return (
        <input
          type="date"
          required={field.required}
          className={containerClass}
          onChange={(e) => handleChange(field.name, e.target.value)}
          value={formData[field.name] || ""}
          disabled={isSubmitLoading}
        />
      );
    }

    if (field.type === "select") {
      return (
        <select
          required={field.required}
          className={containerClass}
          onChange={(e) => handleChange(field.name, e.target.value)}
          value={formData[field.name] || ""}
          disabled={isSubmitLoading}
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
        <div className="flex items-center space-x-4">
          {field.options?.map((opt: any, i: number) => (
            <label key={i} className="flex items-center space-x-2">
              <input
                type="radio"
                name={field.name}
                value={opt.value}
                onChange={(e) => handleChange(field.name, e.target.value)}
                checked={formData[field.name] === opt.value}
                disabled={isSubmitLoading}
              />
              <span className="text-sm text-gray-600">{opt.label}</span>
            </label>
          ))}
        </div>
      );
    }

    return null;
  };

  const renderCheckbox = (field: any, idx: number) => (
    <div key={idx} className="flex items-center justify-center space-x-2">
      <input
        type="checkbox"
        id={field.name}
        className="h-4 w-4"
        onChange={(e) => handleChange(field.name, e.target.checked)}
        checked={formData[field.name] || false}
        required={field.required}
        disabled={isSubmitLoading}
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
  );

  const renderFormContent = (isMobile: boolean, isTablet: boolean) => {
    if (apiError) {
      return (
        <div className="space-y-6 w-full">
          <p className="text-red-600 text-center mt-4 text-lg font-medium">
            Something went wrong. Please try again later.
          </p>
        </div>
      );
    }

    return (
      <form ref={formRef} className={`space-y-6 ${isMobile ? 'w-full' : ''}`} onSubmit={handleSubmit}>
        {/* Grouped fields in 2-column grid for desktop */}
        {groupedFields.map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-flow-row md:grid-cols-2 gap-4">
            {row.map((field, idx) => (
              <div key={idx} className="w-full">
                {renderField(field, "w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 text-gray-700")}
              </div>
            ))}
          </div>
        ))}

        {/* Single fields for mobile/tablet */}
        {!isMobile && !isTablet && nonCheckboxFields.slice(groupedFields.flat().length).map((field, idx) => (
          <div key={idx} className="w-full">
            {renderField(field, "w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 text-gray-700")}
          </div>
        ))}

        {/* Checkboxes */}
        {checkboxFields.map((field, idx) => renderCheckbox(field, idx))}

        <button
          type="submit"
          disabled={isSubmitLoading || apiError}
          className="px-6 py-3 rounded-[16px] bg-[#1656A5] text-[#F9F9F9] 
            font-[Manrope] text-[14px] font-medium leading-[24px] 
            tracking-[-0.28px] backdrop-blur-[7.5px] transition 
            hover:bg-[#134a91] block mx-auto disabled:opacity-50 disabled:cursor-not-allowed w-auto"
        >
          {isSubmitLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
              Booking...
            </div>
          ) : (
            "Book Appointment"
          )}
        </button>
      </form>
    );
  };

  if (isPopupMode) {
    return (
      <>
        {isFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
            {/* Desktop View (1024px and above) */}
            <div className="hidden md:hidden lg:block w-[90%] md:w-[800px] shadow-lg">
              {isLoading ? (
                <div className="bg-white rounded-lg p-6 flex items-center justify-center h-[500px] relative">
                  {/* Close Button - Visible during loading */}
                  <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
                  >
                    ✕
                  </button>
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#1656A5]"></div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-row items-center justify-between relative overflow-y-auto max-h-[90vh]">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
                  >
                    ✕
                  </button>
                  <div className="flex-1 text-center pr-6">
                    <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                      Schedule a Consultation
                    </span>
                    <h2 className="mt-4 text-[#2C2C2C] font-[Manrope] text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-center mb-3">
                      Just focus on your fertility journey, <br /> We got the rest
                      covered!
                    </h2>
                    {renderFormContent(false, false)}
                  </div>
                  <div className="flex-1 relative">
                    <ScratchImage />
                  </div>
                </div>
              )}
            </div>

            {/* Medium View (768px to 1023px) */}
            <div className="hidden md:block lg:hidden xl:hidden w-[90%] md:w-[600px] shadow-lg">
              {isLoading ? (
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-[400px] relative">
                  {/* Close Button - Visible during loading */}
                  <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
                  >
                    ✕
                  </button>
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#1656A5]"></div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center relative overflow-y-auto max-h-[90vh]">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
                  >
                    ✕
                  </button>
                  <div className="flex-1 text-center w-full">
                    <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
                      Schedule a Consultation
                    </span>
                    <h2 className="mt-4 text-[#2C2C2C] font-[Manrope] text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-center mb-3">
                      Just focus on your fertility journey, <br /> We got the rest
                      covered!
                    </h2>
                    {renderFormContent(false, true)}
                    <div className="w-full relative mt-4">
                      <ScratchImage />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile View (up to 767px) */}
            <div className="block md:hidden w-[90%] md:w-[300px] shadow-lg">
              {isLoading ? (
                <div className="bg-white rounded-lg p-3 flex items-center justify-center h-[300px] relative">
                  {/* Close Button - Visible during loading */}
                  <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg font-bold"
                  >
                    ✕
                  </button>
                  <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-[#1656A5]"></div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-3 flex flex-col items-center relative overflow-y-auto max-h-[90vh]">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg font-bold"
                  >
                    ✕
                  </button>
                  <div className="flex-1 text-center w-full">
                    <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
                      Schedule a Consultation
                    </span>
                    <h2 className="mt-4 text-[#2C2C2C] font-[Manrope] text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-center mb-3">
                      Just focus on your fertility journey, <br /> We got the rest
                      covered!
                    </h2>
                    {renderFormContent(true, false)}
                    <div className="w-full relative mt-3">
                      <ScratchImage />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Toast Notification (appears after form closes) */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}

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

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .animate-spin {
            animation: spin 1s linear infinite;
          }
        `}</style>
      </>
    );
  }

  // Inline mode
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
        <div className={`bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row w-full max-w-6xl gap-10 ${isLoading ? 'justify-center items-center min-h-[400px]' : ''}`}>
          {isLoading ? (
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#1656A5]"></div>
          ) : (
            <>
              {/* Left Form */}
              <div className="flex-1 text-center">
                <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
                  Schedule a Consultation
                </span>

                <h2 className="mt-4 text-[#2C2C2C] font-[Manrope] text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-center mb-3">
                  Just focus on your fertility journey, <br /> We got the rest
                  covered!
                </h2>

                {renderFormContent(false, false)}
              </div>

              {/* Right Image with Scratch Effect */}
              <div className="flex-1 relative">
                <ScratchImage />
              </div>
            </>
          )}
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

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </>
  );
};

export default AppointmentForm;