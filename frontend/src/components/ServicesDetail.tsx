'use client';
import { useState } from "react";

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function ServiceCard({ title, description, features, icon, isActive, onClick }: ServiceDetailProps) {
  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer ${isActive ? 'ring-2 ring-blue-500 scale-105' : 'hover:shadow-xl hover:scale-102'}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-100 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      {isActive && (
        <div className="animate-fadeIn">
          <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <span className="text-blue-500 mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function DraftingIcon() {
  return (
    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
  );
}

function ModelingIcon() {
  return (
    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function RenderingIcon() {
  return (
    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 11H7v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2zm0-2h8v11H9V9z"/>
      <path d="M21 6V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2V6a2 2 0 0 1 2-2h12z"/>
    </svg>
  );
}

function EstimatingIcon() {
  return (
    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );
}

function StructuralIcon() {
  return (
    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

const serviceDetails = [
  {
    title: "CAD Drafting",
    description: "Professional technical drawings and blueprints created with precision and attention to detail. Our CAD drafting services cover everything from initial concept sketches to detailed construction documents.",
    features: [
      "2D floor plans and elevations",
      "Detailed construction drawings",
      "As-built documentation",
      "Technical specifications",
      "Shop drawings and fabrication details",
      "Compliance with Australian standards"
    ],
    icon: <DraftingIcon />
  },
  {
    title: "3D Modeling (Revit, SketchUp)",
    description: "Comprehensive 3D modeling services using industry-leading software. We create detailed building information models (BIM) that enhance collaboration and streamline the construction process.",
    features: [
      "Architectural 3D models",
      "BIM coordination and clash detection",
      "Parametric modeling",
      "Family creation and customization",
      "Model-based quantity takeoffs",
      "4D scheduling integration"
    ],
    icon: <ModelingIcon />
  },
  {
    title: "Rendering & Walkthroughs",
    description: "Photorealistic renderings and immersive virtual walkthroughs that bring your designs to life. Perfect for client presentations, marketing materials, and design validation.",
    features: [
      "Photorealistic exterior renderings",
      "Interior visualization",
      "360° panoramic views",
      "Interactive virtual walkthroughs",
      "Animation and fly-throughs",
      "VR-ready content creation"
    ],
    icon: <RenderingIcon />
  },
  {
    title: "BOQ & Estimating",
    description: "Accurate Bill of Quantities and cost estimation services. We provide detailed material takeoffs and cost analysis to help you budget and plan your projects effectively.",
    features: [
      "Detailed material takeoffs",
      "Cost estimation and budgeting",
      "Quantity surveying",
      "Value engineering analysis",
      "Change order management",
      "Progress tracking and reporting"
    ],
    icon: <EstimatingIcon />
  },
  {
    title: "Structural Analysis",
    description: "Advanced structural analysis and design using industry-leading software. Ensure your structures meet all safety requirements and building codes with comprehensive analysis services.",
    features: [
      "Structural design calculations",
      "Load analysis and modeling",
      "Seismic and wind analysis",
      "Foundation design",
      "Steel and concrete detailing",
      "Compliance certification"
    ],
    icon: <StructuralIcon />
  }
];

export default function ServicesDetail() {
  const [activeService, setActiveService] = useState<number>(0);

  return (
    <div id="services-detail" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Service Offerings</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of engineering design and visualization services. 
            Click on each service to learn more about what we offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceDetails.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              isActive={activeService === index}
              onClick={() => setActiveService(activeService === index ? -1 : index)}
            />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss your project requirements and how we can help bring your vision to life.
            </p>
            <button 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}