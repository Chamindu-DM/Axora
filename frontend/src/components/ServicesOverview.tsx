'use client';
import { useState } from "react";

// Background images for each service
const serviceBackgrounds = [
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3", // CAD Drafting - architectural drawings
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3", // 3D Modeling - modern building
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3", // Rendering - architectural visualization
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3", // BOQ & Estimating - construction site
  "https://images.unsplash.com/photo-1581094289475-9a2a8dc775d2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3"  // Structural Analysis - steel structure
];

// Default background image
const defaultBackground = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface ServiceItemProps {
  number: string;
  title: string;
  description?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

function ServiceItem({ number, title, description, isExpanded, onToggle }: ServiceItemProps) {
  return (
    <div 
      className={`content-stretch flex gap-2 md:gap-4 items-start justify-start relative shrink-0 w-full cursor-pointer transition-all duration-300 ${isExpanded ? 'scale-105' : 'hover:scale-102'}`}
      onClick={onToggle}
    >
      <div className="basis-0 flex flex-col font-['Instrument_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] max-w-[80px] md:max-w-[360px] min-h-px min-w-px relative shrink-0 text-[18px] md:text-[24px] lg:text-[36px] text-[rgba(255,255,255,0.5)] text-right tracking-[-0.18px] md:tracking-[-0.24px] lg:tracking-[-0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{number}</p>
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px relative shrink-0">
        <div className={`flex flex-col font-['Instrument_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[28px] md:text-[44px] lg:text-[64px] tracking-[-0.28px] md:tracking-[-0.44px] lg:tracking-[-0.64px] w-full transition-colors duration-300 ${isExpanded ? 'text-blue-400' : 'text-white hover:text-blue-300'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] break-words">{title}</p>
        </div>
        {isExpanded && description && (
          <div className="flex flex-col font-['Instrument_Sans:Regular',_sans-serif] font-normal justify-center leading-[1.4] relative shrink-0 text-[16px] md:text-[18px] text-[rgba(255,255,255,0.8)] w-full animate-fadeIn">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const services = [
  {
    number: "01.",
    title: "CAD Drafting",
    description: "Precise technical drawings and blueprints using industry-standard CAD software. From concept sketches to detailed construction documents, we deliver accurate 2D and 3D drafting services."
  },
  {
    number: "02.",
    title: "3D Modeling (Revit, SketchUp)",
    description: "Comprehensive 3D modeling services using Revit and SketchUp. Create detailed building information models (BIM) that enhance collaboration and streamline the construction process."
  },
  {
    number: "03.",
    title: "Rendering & Walkthroughs (Lumion, Enscape, Twinmotion)",
    description: "Photorealistic renderings and immersive walkthroughs that bring your designs to life. Perfect for client presentations, marketing materials, and design validation."
  },
  {
    number: "04.",
    title: "BOQ & Estimating",
    description: "Accurate Bill of Quantities and cost estimation services. We provide detailed material takeoffs and cost analysis to help you budget and plan your projects effectively."
  },
  {
    number: "05.",
    title: "Structural Analysis (STAAD.Pro, ETABS, Tekla, SAP2000)",
    description: "Advanced structural analysis and design using industry-leading software. Ensure your structures meet all safety requirements and building codes with our comprehensive analysis services."
  }
];

export default function ServicesOverview() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const handleServiceToggle = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  // Get current background image
  const currentBackground = expandedService !== null ? serviceBackgrounds[expandedService] : defaultBackground;

  return (
    <div
      id="services"
      className="relative shrink-0 w-full z-[4] bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
      data-name="Services Section"
      style={{ backgroundImage: `url('${currentBackground}')` }}
    >
      {/* Black overlay for better text visibility */}
      <div className="absolute inset-0 bg-black-10 bg-opacity-10 transition-opacity duration-700"></div>

      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 md:gap-8 items-center justify-center px-4 md:px-8 py-12 md:py-16 lg:py-20 relative w-full">
          <div className="px-4 md:px-8 flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] md:text-[16px] text-white uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Our 3D Rendering Services</p>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 w-full max-w-6xl">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                number={service.number}
                title={service.title}
                description={service.description}
                isExpanded={expandedService === index}
                onToggle={() => handleServiceToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}