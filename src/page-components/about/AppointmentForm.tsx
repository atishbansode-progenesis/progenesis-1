"use client";
import React, { useRef, useEffect, useState, use } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { SelectCalendarIcon, SelectFieldArrowDown } from "./icons";
import "./form-styles.css";
import { COUNTRIES } from "@/data/countries";

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

// Country Code Dropdown Component with Search
interface CountryDropdownProps {
  value: string;
  onChange: (code: string) => void;
  disabled: boolean;
  fieldName: string;
}

const CountryCodeDropdown: React.FC<CountryDropdownProps> = ({
  value,
  onChange,
  disabled,
  fieldName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const getFlagEmoji = (short: string) =>
    short
      .toUpperCase()
      .split("")
      .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
      .join("");

  const filteredCountries = COUNTRIES.filter(
    (country) =>
      country.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.includes(searchTerm)
  );

  const selectedCountry = COUNTRIES.find((c) => c.code === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="w-full px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1656A5] focus:ring-offset-1 transition-all flex items-center justify-between disabled:cursor-not-allowed disabled:opacity-50"
      >
        <div className="flex items-center gap-1">
          {selectedCountry && (
            <>
              <span className="text-lg">{selectedCountry.flag}</span>
              <span className="text-sm font-medium">{selectedCountry.code}</span>
            </>
          )}
          {!selectedCountry && (
            <span className="text-sm text-gray-500">Select country</span>
          )}
        </div>
        <SelectFieldArrowDown />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#00000026] rounded-lg shadow-lg z-50">
          {/* Search Input */}
          <div className="p-3 border-b border-[#00000026]">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-[#00000026] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1656A5] text-sm"
            />
          </div>

          {/* Options List */}
          <ul className="max-h-[250px] overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <li key={country.short}>
                  <button
                    type="button"
                    onClick={() => handleSelect(country.code)}
                    className={`w-full px-2 py-2 text-left hover:bg-[#1656A50D] transition-colors flex items-center gap-3 ${
                      value === country.code ? "bg-[#1656A50D]" : ""
                    }`}
                  >
                    <span className="text-sm">{country.flag}</span>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500">{country.code}</div>
                    </div>
                    {value === country.code && (
                      <svg
                        className="w-5 h-5 text-[#1656A5]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-sm text-gray-500 text-center">
                No countries found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onClose }) => {
  const isPopupMode = !!onClose;
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentRoute = usePathname();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formFields, setFormFields] = useState<any[]>([]);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  const [availableRoutes, setAvailableRoutes] = useState<any[]>([]);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const dateInputRef = useRef<HTMLInputElement>(null);

  const getFlagEmoji = (short: string) =>
    short
      .toUpperCase()
      .split("")
      .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
      .join("");

  // Capture UTM parameters from URL
  useEffect(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      if (key.toLowerCase().startsWith("utm")) {
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
        const response = await axios.get(apiUrl + "/api/forms/", {
          headers: { "Content-Type": "application/json" },
        });

        if (Array.isArray(response.data) && response.data.length > 0) {
          const availableRoutes = response.data.map((form: any) => form.title) || [];
          setAvailableRoutes(availableRoutes);

          let currentTitleWithoutSlash = currentRoute.replace(/(^\/|\/$)/g, "");

          if (!availableRoutes.includes(currentTitleWithoutSlash)) {
            currentTitleWithoutSlash = "home";
          }

          const currentForm = response.data.find(
            (form: any) => form.title === currentTitleWithoutSlash
          );

          if (currentForm) {
            setFormFields(currentForm.fields);

            const dateField = currentForm.fields.find(
              (field: any) => field.type === "date"
            );
            if (dateField) {
              const today = new Date();
              const dd = String(today.getDate()).padStart(2, "0");
              const mm = String(today.getMonth() + 1).padStart(2, "0");
              const yyyy = today.getFullYear();
              const formattedDate = `${dd}/${mm}/${yyyy}`;
              setFormData((prev: any) => ({
                ...prev,
                [dateField.name]: formattedDate,
              }));
            }
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
  }, []);

  const handleChange = (name: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      const fieldsData: any = {
        ...formData,
      };

      formFields.forEach((field: any) => {
        if (field.type === "tel") {
          const code = formData[`${field.name}_code`] || "+91";
          fieldsData[field.name] = code + formData[field.name];
        }
      });

      setFieldErrors({});
      const errors: Record<string, string> = {};
      let currentTitleWithoutSlash = currentRoute.replace(/(^\/|\/$)/g, "");
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

      if (Object.keys(utmParams).length > 0) {
        fieldsData.params = utmParams;
      }
      if (currentTitleWithoutSlash === ''){
        fieldsData.page = 'home'
        currentTitleWithoutSlash = 'home'
      } else {
        fieldsData.page = currentTitleWithoutSlash
      }


      const payload = { fields: fieldsData, title: currentTitleWithoutSlash };

      await timeoutPromise(
        axios.post(apiUrl + "/api/form/save/", payload, {
          headers: { "Content-Type": "application/json" },
        }),
        6000
      );

      const today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();
      const formattedDate = `${dd}/${mm}/${yyyy}`;

      const dateField = formFields.find((field: any) => field.type === "date");
      const defaultData = dateField ? { [dateField.name]: formattedDate } : {};
      setFormData(defaultData);

      if (formRef.current) {
        formRef.current.reset();
      }

      router.push("/thank-you");

      if (isPopupMode) {
        setIsFormOpen(false);
      }
    } catch (error: any) {
      console.error(error);

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

  const nonCheckboxFields = formFields.filter((f) => f.type !== "checkbox");
  const checkboxFields = formFields.filter((f) => f.type === "checkbox");

  const groupedFields: any[][] = [];
  let i = 0;
  while (i < nonCheckboxFields.length) {
    const currentField = nonCheckboxFields[i];

    if (currentField.type === "textarea") {
      groupedFields.push([currentField]);
      i++;
    } else {
      const nextField = nonCheckboxFields[i + 1];
      if (nextField && nextField.type !== "textarea") {
        groupedFields.push([currentField, nextField]);
        i += 2;
      } else if (nextField && nextField.type === "textarea") {
        groupedFields.push([currentField]);
        i++;
      } else {
        groupedFields.push([currentField]);
        i++;
      }
    }
  }

  const renderField = (field: any, containerClass: string) => {
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
                  fieldName={field.name}
                />
              </div>
            )}
            <input
              type={field.type}
              placeholder={
                field.type === "tel"
                  ? "Phone number*"
                  : (field.placeholder || field.title) + (field.required ? "*" : "")
              }
              required={field.required}
              className={`${containerClass} ${field.type === "tel" ? "pl-22" : ""}`}
              onChange={(e) => {
                if (field.type === "tel") {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10); // Only digits, max 10
                  handleChange(field.name, value);
                } else {
                  handleChange(field.name, e.target.value);
                }
              }}
              value={formData[field.name] || ""}
              disabled={isSubmitLoading}
            />
          </div>
          {fieldErrors[field.name] && (
            <p className="text-red-500 text-sm mt-1">{fieldErrors[field.name]}</p>
          )}
        </div>
      );
    }

    if (field.type === "textarea") {
      return (
        <textarea
          placeholder={(field.placeholder || field.title) + (field.required ? "*" : "")}
          required={field.required}
          className={`${containerClass} min-h-[120px] resize-none`}
          onChange={(e) => handleChange(field.name, e.target.value)}
          value={formData[field.name] || ""}
          disabled={isSubmitLoading}
          rows={4}
        />
      );
    }

    if (field.type === "number") {
      return (
        <input
          type="number"
          placeholder={(field.placeholder || field.title) + (field.required ? "*" : "")}
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
        const date = new Date(e.target.value);
        const dd = String(date.getDate()).padStart(2, "0");
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const yyyy = date.getFullYear();
        const formatted = `${dd}/${mm}/${yyyy}`;
        handleChange(field.name, formatted);
      };

      return (
        <div className="relative w-full">
          <input
            ref={dateInputRef}
            type="date"
            placeholder="DD/MM/YYYY"
            min={new Date().toISOString().split('T')[0]}
            value={
              formData[field.name]
                ? new Date(
                    formData[field.name].split("/").reverse().join("-")
                  )
                    .toISOString()
                    .split("T")[0]
                : ""
            }
            onChange={handleDateChange}
            className={`${containerClass} appearance-none focus:outline-none focus:ring-0 pr-10`}
            disabled={isSubmitLoading}
          />

          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() =>
              (dateInputRef.current as any)?.showPicker
                ? (dateInputRef.current as any).showPicker()
                : dateInputRef.current?.focus()
            }
          >
            <SelectCalendarIcon />
          </div>
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
            className={`${containerClass} appearance-none focus:outline-none focus:ring-0`}
            onChange={(e) => handleChange(field.name, e.target.value)}
            value={formData[field.name] || ""}
            disabled={isSubmitLoading}
          >
            <option value="">{field.title}</option>
            {options?.map((opt: any, i: number) => (
              <option key={i} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

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
      className="text-[16px] leading-[24px] tracking-tight font-normal justify-center text-[#2C2C2C80] cursor-pointer flex items-center gap-2"
    >
      <input
        type="checkbox"
        id={field.name}
        className="h-4 w-4 cursor-pointer"
        onChange={(e) => handleChange(field.name, e.target.checked)}
        checked={formData[field.name] || false}
        required={field.required}
        disabled={isSubmitLoading}
      />
      {field.options && field.options.length > 0 ? (
        <span
          dangerouslySetInnerHTML={{
            __html: field.options[0].label
              .replace(
                /\bPrivacy Policy\b/g,
                '<a href="/privacy-policy" class="text-blue-600 hover:underline">$&</a>'
              )
              .replace(
                /\bT&C\b/g,
                '<a href="/terms-and-conditions" class="text-blue-600 hover:underline">$&</a>'
              ),
          }}
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <>
          Clicking means you agree to our{" "}
          <a
            href="/privacy-policy"
            className="text-blue-600 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="/privacy-policy"
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
        <ul className="flex flex-col gap-4 pb-4 lg:pb-0">
          {groupedFields.map((row, rowIdx) => (
            <li
              key={rowIdx}
              className={`grid gap-4 ${
                row.length === 1 && row[0].type === "textarea"
                  ? "grid-cols-1"
                  : row.length === 1
                    ? "grid-cols-1 lg:grid-cols-2"
                    : "grid-cols-1 lg:grid-cols-2"
              }`}
            >
              {row.map((field, idx) => (
                <div
                  key={idx}
                  className={`w-full ${
                    row.length === 1 && row[0].type !== "textarea"
                      ? "lg:col-span-2"
                      : ""
                  }`}
                >
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

          input[type="date"]::-webkit-calendar-picker-indicator {
            display: none;
          }

          input[type="tel"]::placeholder {
            padding-left: 60px;
          }
        `}</style>
      </>
    );
  }

  return (
    <div className="relative w-full">

      <img src="/video/BabyImage.jpeg" alt="" className="absolute top-0 left-0 w-full h-full object-cover" />

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

          <div className="flex-1 relative bg-[url('/images/HomeAppointment.png')] bg-cover bg-center   rounded-[16px] h-[443px] lg:h-auto mt-4 lg:mt-0"></div>
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

        input[type="date"]::-webkit-calendar-picker-indicator {
          display: none;
        }

        input[type="tel"]::placeholder {
          padding-left: 10px;
        }
      `}</style>
    </div>
  );
};

export default AppointmentForm;