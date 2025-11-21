"use client";
import React, { useState } from "react";
import axios from "axios";


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

const ApplyPositionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    education: "",
    center: "",
    experience: "",
    position: "",
    resume: null as File | null,
    terms: false,
  });
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string | boolean | File) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Please enter your full name.";
    if (!formData.contact.trim()) return "Please enter your contact number.";
    if (!formData.email.trim()) return "Please enter your email ID.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Please enter a valid email address.";
    if (!formData.education) return "Please select your education.";
    if (!formData.center) return "Please select a nearby center.";
    if (!formData.experience) return "Please select your total experience.";
    if (!formData.position) return "Please select a position.";
    if (!formData.resume) return "Please attach your resume.";
    if (!formData.terms) return "Please agree to the Terms & Conditions.";

    // File validation
    const allowedTypes = ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf", "application/rtf"];
    if (!allowedTypes.includes(formData.resume.type)) {
      return "Invalid file type. Allowed: doc, docx, pdf, rtf.";
    }
    const maxSize = 3 * 1024 * 1024; // 3 MB
    if (formData.resume.size > maxSize) {
      return "File size exceeds 3 MB.";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setToast({ message: error, type: "error" });
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("full_name", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("contact_number", formData.contact);
      formDataToSend.append("nearby_center", formData.center);
      formDataToSend.append("select_position", formData.position);
      formDataToSend.append("total_experience", formData.experience);
      formDataToSend.append("education", formData.education);
      formDataToSend.append("terms", formData.terms ? "true" : "false");
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      await axios.post(
         process.env.NEXT_PUBLIC_API_URL + "/api/career/apply/",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Form Data:", {
        fullName: formData.fullName,
        contact: formData.contact,
        email: formData.email,
        education: formData.education,
        center: formData.center,
        experience: formData.experience,
        position: formData.position,
        resume: formData.resume,
        terms: formData.terms,
      });

      setSubmitted(true);
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

      {submitted ? (
        <section className="relative p-[16px] lg:p-[120px] py-14 flex justify-center bg-[#FAFAFA]">
          <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-4xl z-20 text-center border border-gray-100">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-[#2C2C2C] font-[Manrope] text-[32px] font-semibold leading-[40px] tracking-[-0.64px] mb-4">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-8 text-base">
              Your application has been submitted successfully. We will get back to you soon.
            </p>
            <button
              onClick={() => window.location.href = "/"}
              className="px-8 py-3 rounded-[16px] bg-[#1656A5] text-[#F9F9F9] 
                 font-[Manrope] text-[14px] font-medium leading-[24px] 
                 tracking-[-0.28px] backdrop-blur-[7.5px] transition 
                 hover:bg-[#134a91] shadow-lg hover:shadow-xl"
            >
              Go to Home
            </button>
          </div>
        </section>
      ) : (
        <section className="relative p-[16px] lg:p-[120px] py-14 flex justify-center bg-[#FAFAFA]">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 w-full max-w-5xl z-20 border border-gray-100">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold text-blue-700 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100">
                Apply for Position
              </span>

              <h2 className="mt-2 text-[#2C2C2C] font-[Manrope] text-[32px] lg:text-[40px] font-semibold leading-[40px] lg:leading-[48px] tracking-[-0.64px] text-center">
                Join Our Team at Progenesis
              </h2>
              <p className="mt-3 text-gray-600 text-base max-w-2xl mx-auto">
                Fill out the form below to apply for your desired position
              </p>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              {/* Education Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Education*</label>
                <select
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                  onChange={(e) => handleChange("education", e.target.value)}
                  value={formData.education}
                >
                  <option value="">Select Education</option>
                  <option value="MBBS">MBBS</option>
                  <option value="MD">MD</option>
                  <option value="MS">MS</option>
                  <option value="DM">DM</option>
                  <option value="MCh">MCh</option>
                  <option value="BDS">BDS</option>
                  <option value="MDS">MDS</option>
                  <option value="BAMS">BAMS</option>
                  <option value="BHMS">BHMS</option>
                  <option value="BPT">BPT</option>
                  <option value="MPT">MPT</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Full Name and Contact - Row on Desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    value={formData.fullName}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number*</label>
                  <input
                    type="tel"
                    placeholder="Enter your contact number"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                    onChange={(e) => handleChange("contact", e.target.value)}
                    value={formData.contact}
                  />
                </div>
              </div>

              {/* Email ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email ID*</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                  onChange={(e) => handleChange("email", e.target.value)}
                  value={formData.email}
                />
              </div>

              {/* Nearby Center and Experience - Row on Desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nearby Center*</label>
                  <select
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                    onChange={(e) => handleChange("center", e.target.value)}
                    value={formData.center}
                  >
                    <option value="">Select Nearby Center</option>
                    <option value="Thane (Mumbai)">Thane (Mumbai)</option>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Experience*</label>
                  <select
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                    onChange={(e) => handleChange("experience", e.target.value)}
                    value={formData.experience}
                  >
                    <option value="">Select Experience</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Year">2 Year</option>
                    <option value="3 Year">3 Year</option>
                    <option value="4 Year">4 Year</option>
                    <option value="5 Year">5 Year</option>
                    <option value="More than 5 Year">More than 5 Year</option>
                  </select>
                </div>
              </div>

              {/* Select Position Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Position*</label>
                <select
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                  onChange={(e) => handleChange("position", e.target.value)}
                  value={formData.position}
                >
                  <option value="">Select Position</option>
                  <option value="IVF Consultant">IVF Consultant</option>
                  <option value="Fellowship in IVF">Fellowship in IVF</option>
                  <option value="Embryologist">Embryologist</option>
                  <option value="Andrologist">Andrologist</option>
                  <option value="Fellowship in Andrology">Fellowship in Andrology</option>
                  <option value="RMO">RMO</option>
                  <option value="PRO">PRO</option>
                  <option value="Pharmacist">Pharmacist</option>
                  <option value="OPD Coordinator">OPD Coordinator</option>
                  <option value="Counselor Cum Financial Counsellor">Counselor Cum Financial Counsellor</option>
                  <option value="Financial Counsellor">Financial Counsellor</option>
                  <option value="Counsellor">Counsellor</option>
                  <option value="Staff Nurse">Staff Nurse</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Attach Resume*</label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".doc,.docx,.pdf,.rtf"
                    onChange={handleFileChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Allowed formats: doc, docx, pdf, rtf. Max size: 3 MB.</p>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-5 w-5 mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  onChange={(e) => handleChange("terms", e.target.checked)}
                  checked={formData.terms}
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 underline font-medium hover:text-blue-700">
                    Terms & Conditions
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full lg:w-auto px-8 py-4 rounded-[16px] bg-[#1656A5] text-[#F9F9F9] 
                     font-[Manrope] text-[15px] font-semibold leading-[24px] 
                     tracking-[-0.28px] backdrop-blur-[7.5px] transition-all
                     hover:bg-[#134a91] shadow-lg hover:shadow-xl block mx-auto transform hover:scale-105"
                >
                  Submit your Application
                </button>
              </div>
            </form>
          </div>
        </section>
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
      `}</style>
    </>
  );
};

export default function ApplyPositionPage() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <ApplyPositionForm />
    </div>
  );
}