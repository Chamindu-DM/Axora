import { useState } from "react";
import imgServicesSection from "figma:asset/81331d0d9d1b1fb0fca778c863e500c33e127f16.png";

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
      className={`content-stretch flex gap-4 items-start justify-start relative shrink-0 w-full cursor-pointer transition-all duration-300 ${isExpanded ? 'scale-105' : 'hover:scale-102'}`}
      onClick={onToggle}
    >
      <div className="basis-0 flex flex-col font-['Instrument_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] max-w-[360px] min-h-px min-w-px relative shrink-0 text-[36px] text-[rgba(255,255,255,0.5)] text-right tracking-[-0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{number}</p>
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px relative shrink-0">
        <div className={`flex flex-col font-['Instrument_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[64px] tracking-[-0.64px] w-full transition-colors duration-300 ${isExpanded ? 'text-blue-400' : 'text-white hover:text-blue-300'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal]">{title}</p>
        </div>
        {isExpanded && description && (
          <div className="flex flex-col font-['Instrument_Sans:Regular',_sans-serif] font-normal justify-center leading-[1.4] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.8)] w-full animate-fadeIn">
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

  return (
    <div id="services" className="bg-[position:0%_0%,_50%_50%] bg-[rgba(0,0,0,0.7)] bg-size-[auto,cover] relative shrink-0 w-full z-[4]" data-name="Services Section" style={{ backgroundImage: `url('${imgServicesSection}')` }}>
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-center justify-center px-8 py-20 relative w-full">
          <div className="flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Our 3D Rendering Services</p>
          </div>
          <div className="flex flex-col gap-8 w-full max-w-6xl">
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
          <div className="mt-8 text-center">
            <button 
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              onClick={() => {
                const element = document.querySelector('#services-detail');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Detailed Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}