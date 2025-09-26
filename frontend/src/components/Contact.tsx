'use client';
import { useState } from "react";
import svgPaths from "../imports/svg-inz3yplkns";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
  files: FileList | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  projectDetails?: string;
}

function BackgroundImage() {
  return (
    <div className="relative size-[2000px]" data-name="Background Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2000 2000">
        <g id="Background Image">
          <path d={svgPaths.p2e21fc00} id="Vector" stroke="url(#paint0_radial_1_902)" strokeWidth="1.33959" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(1000 1000) rotate(180) scale(1000)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_902" r="1">
            <stop stopColor="#170036" />
            <stop offset="1" stopColor="#6F00FF" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0 size-[39px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
        <g id="Logo">
          <path clipRule="evenodd" d={svgPaths.p7df8f00} fill="var(--fill-0, #24A1FD)" fillRule="evenodd" id="Rectangle 3" />
          <path clipRule="evenodd" d={svgPaths.p3abe2900} fill="var(--fill-0, white)" fillRule="evenodd" id="Rectangle 2" />
          <path d={svgPaths.p3bedb80} fill="var(--fill-0, #24A1FD)" id="Rectangle 1" />
          <path clipRule="evenodd" d={svgPaths.p3abe2900} fill="var(--fill-0, white)" fillRule="evenodd" id="Rectangle 2_2" />
          <path clipRule="evenodd" d={svgPaths.p939a300} fill="var(--fill-0, #24A1FD)" fillRule="evenodd" id="Rectangle 3_2" />
          <g clipPath="url(#clip0_1_959)" id="Logo Container">
            <path clipRule="evenodd" d={svgPaths.p20163e80} fill="var(--fill-0, #66CB55)" fillRule="evenodd" id="Rectangle 4" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p7df8f00} fill="var(--fill-0, #24A1FD)" fillRule="evenodd" id="Rectangle 2_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_959">
            <rect fill="white" height="12.5741" transform="translate(10.6084 30.1088) rotate(-45)" width="27.5776" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FormField({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  error, 
  required = false,
  options = [],
  isTextarea = false
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  options?: string[];
  isTextarea?: boolean;
}) {
  const baseClasses = "w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-['Instrument_Sans',_sans-serif]";
  const errorClasses = error ? "border-red-500 focus:ring-red-500" : "";

  if (type === "select") {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClasses} ${errorClasses}`}
          required={required}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    );
  }

  if (isTextarea) {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClasses} ${errorClasses} h-32 resize-vertical`}
          placeholder={`Enter ${label.toLowerCase()}`}
          required={required}
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${baseClasses} ${errorClasses}`}
        placeholder={`Enter ${label.toLowerCase()}`}
        required={required}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

function FileUpload({ onFileChange }: { onFileChange: (files: FileList | null) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">Project Files (Optional)</label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
        <div className="flex flex-col items-center gap-4">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <div>
            <p className="text-gray-600 mb-2">Drag & drop your files here or <span className="text-blue-600 underline cursor-pointer">browse</span></p>
            <p className="text-sm text-gray-500">Support for PDF, DWG, JPG, PNG files up to 10MB</p>
          </div>
          <input
            type="file"
            multiple
            accept=".pdf,.dwg,.jpg,.jpeg,.png"
            onChange={(e) => onFileChange(e.target.files)}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    projectDetails: "",
    files: null
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    "CAD Drafting",
    "3D Modeling (Revit, SketchUp)",
    "Rendering & Walkthroughs",
    "BOQ & Estimating",
    "Structural Analysis",
    "Complete Project Package"
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData) => (value: string | FileList | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div id="contact" className="bg-black text-white py-12 md:py-20 relative overflow-hidden font-['Instrument_Sans',_sans-serif] z-[5] w-full max-w-full">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full min-w-full min-h-full">
            <div className="relative w-full h-full" data-name="Background Image">
              <svg className="block w-full h-full object-cover" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 2000 2000">
                <g id="Background Image">
                  <path d={svgPaths.p2e21fc00} id="Vector" stroke="url(#paint0_radial_1_902)" strokeWidth="1.33959" />
                </g>
                <defs>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(1000 1000) rotate(180) scale(1000)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_902_success" r="1">
                    <stop stopColor="#170036" />
                    <stop offset="1" stopColor="#6F00FF" stopOpacity="0.2" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="bg-green-600 text-white p-6 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4 font-['Instrument_Sans',_sans-serif]">Thank You!</h2>
            <p className="text-lg font-['Instrument_Sans',_sans-serif]">Your project brief has been submitted successfully. We&apos;ll get back to you within 24 hours.</p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                service: "",
                projectDetails: "",
                files: null
              });
            }}
            className="bg-white text-black px-6 py-3 rounded-lg font-['Instrument_Sans',_sans-serif] font-medium hover:bg-gray-100 transition-colors"
          >
            Submit Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="bg-black text-white py-12 md:py-20 relative overflow-hidden font-['Instrument_Sans',_sans-serif] z-[5] w-full max-w-full">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full min-w-full min-h-full">
          <div className="relative w-full h-full" data-name="Background Image">
            <svg className="block w-full h-full object-cover" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 2000 2000">
              <g id="Background Image">
                <path d={svgPaths.p2e21fc00} id="Vector" stroke="url(#paint0_radial_1_902)" strokeWidth="1.33959" />
              </g>
              <defs>
                <radialGradient cx="0" cy="0" gradientTransform="translate(1000 1000) rotate(180) scale(1000)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_902" r="1">
                  <stop stopColor="#170036" />
                  <stop offset="1" stopColor="#6F00FF" stopOpacity="0.2" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <Logo />
              <h1 className="text-3xl font-bold font-['Instrument_Sans',_sans-serif]">Axora</h1>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Instrument_Sans',_sans-serif]">Let&apos;s Discuss!</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-['Instrument_Sans',_sans-serif]">
                Let&apos;s create visuals and designs that bring clarity, confidence, and impact to your construction journey.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white uppercase mb-4 font-['Instrument_Sans',_sans-serif]">Contact Information</h3>
                <div className="space-y-3 font-['Instrument_Sans',_sans-serif]">
                  <p className="text-xl md:text-2xl break-words">info@axoraeng.com.au</p>
                  <p className="text-xl md:text-2xl">+61 434 013 836</p>
                  <p className="text-xl md:text-2xl">Melbourne, Australia</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white uppercase mb-4 font-['Instrument_Sans',_sans-serif]">Business Hours</h3>
                <div className="space-y-2 text-gray-300 font-['Instrument_Sans',_sans-serif]">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl p-4 md:p-8 text-black w-full max-w-full">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-['Instrument_Sans',_sans-serif]">Send Project Brief</h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Full Name"
                  value={formData.fullName}
                  onChange={updateFormData("fullName")}
                  error={errors.fullName}
                  required
                />
                <FormField
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={updateFormData("email")}
                  error={errors.email}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={updateFormData("phone")}
                  error={errors.phone}
                  required
                />
                <FormField
                  label="Service Required"
                  type="select"
                  value={formData.service}
                  onChange={updateFormData("service")}
                  error={errors.service}
                  options={serviceOptions}
                  required
                />
              </div>

              <FormField
                label="Project Details"
                value={formData.projectDetails}
                onChange={updateFormData("projectDetails")}
                error={errors.projectDetails}
                isTextarea
                required
              />

              <FileUpload onFileChange={updateFormData("files")} />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 px-6 rounded-lg font-['Instrument_Sans',_sans-serif] font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span className="font-['Instrument_Sans',_sans-serif]">Sending...</span>
                  </>
                ) : (
                  "Send Project Brief"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
