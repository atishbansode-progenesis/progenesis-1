"use client";
import React, { useRef, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { SelectCalendarIcon, SelectFieldArrowDown } from "./icons";
import "./form-styles.css";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
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

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onClose }) => {
  const isPopupMode = !!onClose;
  const router = useRouter();
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formFields, setFormFields] = useState<any[]>([]);
  const [formData, setFormData] = useState<any>({});
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const dateInputRef =  useRef<HTMLInputElement>(null);

  // Capture UTM parameters from URL
  useEffect(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      if (key.toLowerCase().startsWith('utm')) {
        params[key] = value;
      }
    });
    setUtmParams(params);
  }, [searchParams]);

  // Timeout promise helper
  const timeoutPromise = (promise: Promise<any>, ms: number) =>
    Promise.race([
      promise,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), ms)
      ),
    ]);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await timeoutPromise(
          axios.get(apiUrl + "/api/forms/", {
            headers: {
              "Content-Type": "application/json",
            },
          }),
          6000
        );
        if (Array.isArray(response.data) && response.data.length > 0) {
          setFormFields(response.data[0].fields);
          setApiError(false);
          
          // Set default date to today for date fields
          const dateField = response.data[0].fields.find((field: any) => field.type === "date");
          if (dateField) {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();
            const formattedDate = `${dd}/${mm}/${yyyy}`; // Format: DD/MM/YYYY
            setFormData((prev: any) => ({ ...prev, [dateField.name]: formattedDate }));
          }
        } else {
          throw new Error("No form fields found");
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
        message:
          "We are unable to book appointment at this moment. Please try again later.",
        type: "error",
      });
      return;
    }

    setIsSubmitLoading(true);
    try {
      // Prepare payload with form data and UTM parameters inside fields object
      const fieldsData: any = { 
        ...formData  // Spread form fields
      };
      
      // Add UTM parameters under "params" key if they exist
      if (Object.keys(utmParams).length > 0) {
        fieldsData.params = utmParams;
      }

      const payload = { fields: fieldsData };

      console.log("payload", payload);

      await timeoutPromise(
        axios.post(
          apiUrl + "/api/form/save/",
          payload,
          { headers: { "Content-Type": "application/json" } }
        ),
        6000
      );

      // Reset form data with default date
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      const formattedDate = `${dd}/${mm}/${yyyy}`;
      
      const dateField = formFields.find((field: any) => field.type === "date");
      const defaultData = dateField ? { [dateField.name]: formattedDate } : {};
      setFormData(defaultData);

      // Reset the form element itself
      if (formRef.current) {
        formRef.current.reset();
      }

      // Redirect to thank you page after successful submission
      router.push('/thank-you');
      
      if (isPopupMode) {
        setIsFormOpen(false); // Close the form
      }
    } catch (error: any) {
      console.error(error);

      // Show error toast
      setToast({
        message:
          error.message === "Timeout"
            ? "We are unable to book appointment at this moment. Please try again later."
            : "Failed to submit form. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitLoading(false);
    }
  };

  // Separate fields by type
  const nonCheckboxFields = formFields.filter((f) => f.type !== "checkbox");
  const checkboxFields = formFields.filter((f) => f.type === "checkbox");

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
      const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        
        if (value.length >= 2) {
          value = value.slice(0, 2) + '/' + value.slice(2);
        }
        if (value.length >= 5) {
          value = value.slice(0, 5) + '/' + value.slice(5, 9);
        }
        
        handleChange(field.name, value);
      };

      return (
        <div className="relative w-full">
          <input
            ref={dateInputRef}
            type="text"
            placeholder="DD/MM/YYYY"
            value={formData[field.name] || ""}
            onChange={handleDateChange}
            maxLength={10}
            className={`${containerClass} appearance-none focus:outline-none focus:ring-0 pr-10`}
            disabled={isSubmitLoading}
          />

          {/* Custom Calendar Icon */}
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => dateInputRef.current?.focus()}
          >
            <SelectCalendarIcon />
          </div>
        </div>
      );
    }

    if (field.type === "select") {
      return (
        <div className="relative w-full">
          <select
            required={field.required}
            className={`${containerClass} appearance-none focus:outline-none focus:ring-0`}
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

          {/* Custom SVG Arrow */}
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <SelectFieldArrowDown />
          </div>
        </div>
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
    <label
      key={idx}
      htmlFor={field.name}
      className="text-[16px] leading-[24px] tracking-tight font-normal text-[#2C2C2C80] cursor-pointer"
    >
      <input
        type="checkbox"
        id={field.name}
        className="h-4 w-4 cursor-pointer mr-2"
        onChange={(e) => handleChange(field.name, e.target.checked)}
        checked={formData[field.name] || false}
        required={field.required}
        disabled={isSubmitLoading}
      />
      {field.options && field.options.length > 0 ? (
        <>
          {field.options[0].label
            .split(/(\bPrivacy Policy\b|\bT&C\b)/g)
            .map((part: string, i: number) => {
              if (part === "Privacy Policy") {
                return (
                  <a
                    key={i}
                    href="/privacy-policy"
                    className="text-blue-600 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {part}
                  </a>
                );
              }
              if (part === "T&C") {
                return (
                  <a
                    key={i}
                    href="/privacy-policy"
                    className="text-blue-600 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {part}
                  </a>
                );
              }
              return <span key={i}>{part}</span>;
            })}
        </>
      ) : (
        <>
          Clicking means you agree to our{" "}
          <a
            href="/privacy-policy"
            className="text-blue-600 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Privacy Policy
          </a>
          {" "}and{" "}
          <a
            href="/terms-and-conditions"
            className="text-blue-600 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            T&C
          </a>
        </>
      )}
    </label>
  );

  const renderFormContent = () => {
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
      <form
        ref={formRef}
        className={`flex flex-col gap-4 justify-between h-full`}
        onSubmit={handleSubmit}
      >
        <ul className="flex flex-col gap-4 flex-1 max-h-[250px] lg:max-h-[400px] overflow-y-auto overflow-x-hidden pb-4 lg:pb-0">
          {groupedFields.map((row, rowIdx) => (
            <li key={rowIdx} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {row.map((field, idx) => (
                <div key={idx} className="w-full">
                  {renderField(
                    field,
                    "w-full border border-[#00000026] p-4 rounded-[16px] focus:ring-0 focus:outline-none"
                  )}
                </div>
              ))}
            </li>
          ))}
        </ul>

        {checkboxFields.map((field, idx) => renderCheckbox(field, idx))}

        <button
          type="submit"
          disabled={isSubmitLoading || apiError}
          className="cursor-pointer rounded-[16px] h-[56px] overflow-hidden p-2 bg-[#1656A5] text-white min-w-[158px] disabled:cursor-not-allowed disabled:bg-[#1656A5] disabled:text-[#F9F9F9] text-[14px] leading-[24px] font-medium flex items-center gap-1 justify-center mx-auto"
        >
          {isSubmitLoading && (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
          )}
          {isSubmitLoading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    );
  };

  if (isPopupMode) {
    return (
      <>
        {isFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 ">
            <div className="w-[90%] lg:w-[800px] shadow-lg">
              <div className="bg-white rounded-2xl shadow-lg py-10 px-6 flex flex-row items-center justify-between relative max-h-[90vh]">
                <button
                  onClick={onClose}
                  disabled={isLoading}
                  className="absolute cursor-pointer top-4 right-6 text-gray-600 hover:text-black text-xl font-bold"
                >
                  ✕
                </button>
                <div className="flex flex-col text-center gap-2 flex-1">
                  <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full w-fit mx-auto">
                    Schedule a Consultation
                  </span>
                  <h2 className="text-[#2C2C2C] font-[Manrope] text-[16px] lg:text-[32px] font-normal leading-[20px] lg:leading-[40px] tracking-[-0.64px] text-center">
                    Just focus on your fertility journey,{" "}
                    <br className="hidden lg:block" /> We got the rest covered!
                  </h2>
                  <div className="flex-1 mt-4">
                    {!isLoading ? (
                      renderFormContent()
                    ) : (
                      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#1656A5] mx-auto"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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

  return (
    <div className="relative w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="\video\babyvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute inset-0 bg-black/40"></div>

      <section className="relative p-4 lg:p-[120px] py-[80px] flex flex-col lg:flex-row justify-center bg-transparent">
        <div className="bg-transparent lg:bg-white rounded-[10px] lg:rounded-[16px] lg:p-4 grid grid-cols-1 lg:grid-cols-2 min-h-[626px] max-w-[1200px]">
          <div className="bg-white lg:bg-transparent p-4 lg:p-0 rounded-[16px] lg:rounded-[0px] h-full flex flex-col gap-8 justify-between lg:p-8">
            <div className="space-y-2 text-center">
              <div className="text-[12px] w-fit font-medium text-[#1656A5] bg-[#1656A50D] px-3 py-1 rounded-full mx-auto">
                Schedule a Consultation
              </div>

              <h2 className="text-[19px] font-normal text-[#2C2C2C] leading-[23px] lg:text-[32px] lg:leading-[40px] ">
                Just focus on your fertility journey,{" "}
                <br className="lg:hidden" /> We got the rest covered!
              </h2>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#1656A5]"></div>
              </div>
            ) : (
              renderFormContent()
            )}
          </div>

          <div className="flex-1 relative bg-[url('/images/HomeAppointment.jpg')] bg-cover top-4 bg-center  lg:rounded-[0px] rounded-[16px] h-[443px] lg:h-auto mt-4 lg:mt-0"></div>
        </div>
      </section>

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
    </div>
  );
};

export default AppointmentForm;
