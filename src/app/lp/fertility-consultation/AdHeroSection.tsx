"use client";
import React, { useRef, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { SelectFieldArrowDown } from "@/page-components/about/icons";
import { COUNTRIES } from "@/data/countries";
import AppointmentForm from '@/page-components/about/AppointmentForm';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
      <div className={`flex items-center gap-3 min-w-[320px] px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md border transform transition-all duration-300 ${type === "success" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
          {type === "success" ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm">{type === "success" ? "Success!" : "Error!"}</p>
          <p className="text-sm opacity-90">{message}</p>
        </div>
        <button aria-label="close" onClick={onClose} className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Country Code Dropdown Component
interface CountryDropdownProps {
  value: string;
  onChange: (code: string) => void;
  disabled: boolean;
}

const CountryCodeDropdown: React.FC<CountryDropdownProps> = ({ value, onChange, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredCountries = COUNTRIES.filter(
    (country) =>
      country.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.includes(searchTerm)
  );

  const selectedCountry = COUNTRIES.find((c) => c.code === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelect = (code: string) => {
    onChange(code);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        aria-label="country"
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="w-full px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1656A5] transition-all flex items-center justify-between disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
      >
        <div className="flex items-center gap-1">
          {selectedCountry && (
            <>
              <span className="text-lg">{selectedCountry.flag}</span>
              <span className="text-sm font-medium">{selectedCountry.code}</span>
            </>
          )}
          {!selectedCountry && <span className="text-sm text-gray-500">Select country</span>}
        </div>
        <SelectFieldArrowDown />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-300">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1656A5] text-sm"
            />
          </div>
          <ul className="max-h-[250px] overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <li key={country.short}>
                  <button
                    aria-label="country flag"
                    type="button"
                    onClick={() => handleSelect(country.code)}
                    className={`w-full px-2 py-2 text-left hover:bg-blue-50 transition-colors flex items-center gap-3 cursor-pointer ${value === country.code ? "bg-blue-50" : ""}`}
                  >
                    <span className="text-sm">{country.flag}</span>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500">{country.code}</div>
                    </div>
                    {value === country.code && (
                      <svg className="w-5 h-5 text-[#1656A5]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-sm text-gray-500 text-center">No countries found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function AdheroSection({ onBookAppointment }: { onBookAppointment: () => void }) {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentRoute = usePathname();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formFields, setFormFields] = useState<any[]>([]);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Define allowed field names to display (excluding last name)
  const allowedFields = ['first_name', 'firstname', 'name', 'phone', 'mobile', 'contact', 'center', 'location', 'nearby_center'];
  const excludedFields = ['last_name', 'lastname', 'surname'];

  useEffect(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      if (key.toLowerCase().startsWith("utm")) {
        params[key] = value;
      }
    });
    setUtmParams(params);
  }, [searchParams]);

  const timeoutPromise = (promise: Promise<any>, ms: number) =>
    Promise.race([
      promise,
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms)),
    ]);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axios.get(apiUrl + "/api/forms/", {
          headers: { "Content-Type": "application/json" },
        });

        if (Array.isArray(response.data) && response.data.length > 0) {
          let currentTitleWithoutSlash = currentRoute.replace(/(^\/|\/$)/g, "");
          const availableRoutes = response.data.map((form: any) => form.title) || [];

          if (!availableRoutes.includes(currentTitleWithoutSlash)) {
            currentTitleWithoutSlash = "home";
          }

          const currentForm = response.data.find((form: any) => form.title === currentTitleWithoutSlash);

          if (currentForm) {
            // Filter fields to only show allowed ones and exclude last name
            const filteredFields = currentForm.fields.filter((field: any) => 
              allowedFields.some(allowed => field.name.toLowerCase().includes(allowed)) &&
              !excludedFields.some(excluded => field.name.toLowerCase().includes(excluded))
            );
            setFormFields(filteredFields);
          } else {
            throw new Error("No form found for this path");
          }
          setApiError(false);
        } else {
          throw new Error("No form fields found");
        }
      } catch (err) {
        console.error(err);
        setApiError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFields();
  }, [currentRoute]);

  const handleChange = (name: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formFields.length === 0 || apiError) {
      setToast({
        message: "We are unable to book appointment at this moment. Please try again later.",
        type: "error",
      });
      return;
    }

    setIsSubmitLoading(true);
    try {
      const fieldsData: any = { ...formData };

      formFields.forEach((field: any) => {
        if (field.type === "tel") {
          const code = formData[`${field.name}_code`] || "+91";
          fieldsData[field.name] = code + formData[field.name];
        }
      });

      const errors: Record<string, string> = {};
      formFields.forEach((field: any) => {
        if (field.type === "tel") {
          const phone = formData[field.name] || "";
          if (phone.length !== 10) {
            errors[field.name] = "Phone number must be exactly 10 digits.";
          }
        }
      });

      if (Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        setIsSubmitLoading(false);
        return;
      }

      let currentTitleWithoutSlash = currentRoute.replace(/(^\/|\/$)/g, "");
      if (currentTitleWithoutSlash === '') {
        currentTitleWithoutSlash = 'home';
      }

      if (Object.keys(utmParams).length > 0) {
        fieldsData.params = utmParams;
      }
      fieldsData.page = currentTitleWithoutSlash;

      const payload = { fields: fieldsData, title: currentTitleWithoutSlash };

      await timeoutPromise(
        axios.post(apiUrl + "/api/form/save/", payload, {
          headers: { "Content-Type": "application/json" },
        }),
        6000
      );

      setFormData({});

      if (formRef.current) {
        formRef.current.reset();
      }

      router.push("/thank-you");
    } catch (error: any) {
      console.error(error);
      setToast({
        message: error.message === "Timeout" ? "We are unable to book appointment at this moment. Please try again later." : "Failed to submit form. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const renderField = (field: any) => {
    if (["text", "email", "tel"].includes(field.type)) {
      return (
        <div className="w-full">
          <div className="relative w-full">
            {field.type === "tel" && (
              <div className="absolute left-0 top-0 bottom-0 flex items-center z-10 w-24">
                <CountryCodeDropdown
                  value={formData[`${field.name}_code`] || "+91"}
                  onChange={(code) => handleChange(`${field.name}_code`, code)}
                  disabled={isSubmitLoading}
                />
              </div>
            )}
            <input
              type={field.type}
              placeholder={field.type === "tel" ? "Phone number*" : (field.placeholder || field.title) + (field.required ? "*" : "")}
              required={field.required}
              className={`w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${field.type === "tel" ? "pl-24" : ""}`}
              onChange={(e) => {
                if (field.type === "tel") {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  handleChange(field.name, value);
                } else {
                  handleChange(field.name, e.target.value);
                }
              }}
              value={formData[field.name] || ""}
              disabled={isSubmitLoading}
            />
          </div>
          {fieldErrors[field.name] && <p className="text-red-500 text-xs mt-1">{fieldErrors[field.name]}</p>}
        </div>
      );
    }

    if (field.type === "select") {
      let options = field.options || [];
      if (field.name === "country") {
        options = COUNTRIES.map((c) => ({ value: c.value, label: c.label }));
      }
      return (
        <div className="relative w-full">
          <select
            required={field.required}
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
            onChange={(e) => handleChange(field.name, e.target.value)}
            value={formData[field.name] || ""}
            disabled={isSubmitLoading}
          >
            <option value="">{field.title}</option>
            {options?.map((opt: any, i: number) => (
              <option key={i} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <SelectFieldArrowDown />
          </div>
        </div>
      );
    }

    return null;
  };

  const nonCheckboxFields = formFields.filter((f) => f.type !== "checkbox");

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Background Image Section */}
          <div className="relative h-[400px]">
            <div className="absolute inset-0">
              <img src="/images/lp-hero-image-mb.jpg" alt="IVF Treatment Background" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gray-900/30"></div>
            </div>
          </div>
          
          {/* Form Card Overlapping Image and Content Section */}
          <div className="relative -mt-[110px] z-10 px-4 pb-8">
            <div className="max-w-[380px] mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  Book Your Free Consultation
                </h3>
                {isLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#1656A5]"></div>
                  </div>
                ) : apiError ? (
                  <p className="text-red-600 text-center text-sm">Something went wrong. Please try again later.</p>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                    {nonCheckboxFields.map((field, idx) => (
                      <div key={idx}>{renderField(field)}</div>
                    ))}
                    <button
                      type="submit"
                      disabled={isSubmitLoading || apiError}
                      className="w-full bg-[#1656A5] text-white py-3 rounded-lg font-semibold hover:bg-[#124380] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitLoading && (
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                      )}
                      {isSubmitLoading ? "Booking..." : "Book Free Consultation"}
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      By submitting, you agree to our Terms & Privacy Policy
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Content Section Below Form */}
          <div className="bg-gray-100 px-4 pt-4 pb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                Begin your journey towards parenthood
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                India's best IVF center & leading fertility specialists
                offering advanced treatments, personalized care, and proven success rates.
              </p>

              <div className="flex flex-row gap-3 justify-center items-center flex-wrap mb-8">
                <button
                 onClick={onBookAppointment}
                  className="bg-[#1656A5] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#124380] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                >
                  Book Free Consultation
                </button>
                <a href="tel:+919423971620">
                  <button className="bg-white text-blue-600 px-5 py-3 rounded-lg text-sm font-semibold border-2 border-blue-600 hover:bg-gray-100 transition-all cursor-pointer whitespace-nowrap">
                    Call Us Now
                  </button>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="text-green-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-900">21+ Centers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-900">18,000+ Successful IVf </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-900">400+ Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Original) */}
        <div className="hidden lg:block py-20 px-4">
          <div className="absolute inset-0">
            <img src="/images/lp-hero-image.jpg" alt="IVF Treatment Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gray-100/40"></div>
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Begin your journey towards parenthood
                </h1>
                <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
                  India's best IVF center & leading fertility specialists
                  offering advanced treatments, personalized care, and proven success rates.
                </p>

                <div className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center flex-wrap">
                  <button
                    onClick={onBookAppointment}
                    className="bg-[#1656A5] text-white px-5 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#124380] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                  >
                    Book Free Consultation
                  </button>
                  <a href="tel:+919423971620">
                    <button className="bg-white text-blue-600 px-5 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold border-2 border-blue-600 hover:bg-gray-100 transition-all cursor-pointer whitespace-nowrap">
                      Call Us Now
                    </button>
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="text-green-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-900">21+ Centers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-green-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-900">18,000+ Successful IVF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-green-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-900">400+ Specialists</span>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="bg-white rounded-2xl shadow-2xl p-5 w-full max-w-[340px]">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                    Book Your Free Consultation
                  </h3>
                  {isLoading ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#1656A5]"></div>
                    </div>
                  ) : apiError ? (
                    <p className="text-red-600 text-center text-sm">Something went wrong. Please try again later.</p>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                      {nonCheckboxFields.map((field, idx) => (
                        <div key={idx}>{renderField(field)}</div>
                      ))}
                      <button
                        type="submit"
                        disabled={isSubmitLoading || apiError}
                        className="w-full bg-[#1656A5] text-white py-3 rounded-lg font-semibold hover:bg-[#124380] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitLoading && (
                          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                        )}
                        {isSubmitLoading ? "Booking..." : "Book Free Consultation"}
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        By submitting, you agree to our Terms & Privacy Policy
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

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
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </>
  );
}