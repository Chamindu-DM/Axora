'use client';
import { useState } from "react";
import Image from 'next/image';

interface AdvantageItemProps {
  title: string;
  description: string;
  imageName: string;
  iconContainer: string;
}

function AdvantageItem({ title, description, imageName, iconContainer }: AdvantageItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`w-96 p-2 bg-white rounded-2xl flex flex-col justify-start items-start gap-4 transition-all duration-300 ${isHovered ? 'shadow-xl scale-[1.02]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="self-stretch h-56 relative bg-gray-200 rounded-lg outline outline-1 outline-offset-[-1px] outline-black/5 overflow-hidden">
        <Image
          src={`/images/${imageName}.png`}
          alt={title}
          width={432}
          height={226}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch p-2 inline-flex justify-start items-center gap-4">
          <div className="p-2 bg-gradient-to-b from-neutral-700 to-black rounded-[32px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-neutral-700 flex justify-start items-center gap-2">
            <Image
              src={`/icons/${iconContainer}.svg`}
              alt={`${title} icon`}
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <div className="justify-center text-black text-2xl font-medium font-['Instrument_Sans'] tracking-tight">{title}</div>
        </div>
        <div className="self-stretch p-2 inline-flex justify-center items-center gap-2">
          <div className="flex-1 justify-center text-black text-lg font-normal font-['Instrument_Sans'] tracking-tight">{description}</div>
        </div>
      </div>
    </div>
  );
}

const advantageItems = [
  {
    title: "Cost Savings",
    description: "Up to 50% lower cost compared to hiring locally — without compromising quality or precision.",
    imageName: "Cost Savings",
    iconContainer: "HandCoins"
  },
  {
    title: "Australian Standards",
    description: "All drawings and models are fully compliant with Australian codes and industry regulations.",
    imageName: "Australian Standards",
    iconContainer: "ShieldCheck"
  },
  {
    title: "Expert Team",
    description: "Experienced drafters, modelers, and engineers dedicated to delivering exceptional results.",
    imageName: "Expert Team",
    iconContainer: "UsersThree"
  },
  {
    title: "Fast Turnaround",
    description: "Quick delivery timelines to keep your projects on track — with zero sacrifice to accuracy.",
    imageName: "Fast Turnaround",
    iconContainer: "ClockClockwise"
  },
  {
    title: "On-Site Availability",
    description: "Option for on-site engineers in Melbourne for seamless project coordination.",
    imageName: "On-Site Availability",
    iconContainer: "MapPinLine"
  },
  {
    title: "Uncompromised Quality",
    description: "Every project undergoes rigorous quality checks to ensure accuracy and excellence.",
    imageName: "Uncompromised Quality",
    iconContainer: "Certificate"
  }
];

export default function ServicesDetail() {
  return (
    <div data-layer="Portfolio Section" className="PortfolioSection self-stretch px-8 py-20 bg-gray-200 flex flex-col justify-center items-center gap-8">
        <div data-layer="About Title" className="AboutTitle self-stretch justify-center text-black text-base font-medium font-['Instrument_Sans'] uppercase">The Axora Engineering Advantage</div>
        <div data-layer="Portfolio Subtitle" className="PortfolioSubtitle self-stretch justify-center text-black text-6xl font-semibold font-['Instrument_Sans'] uppercase mb-8">Why leading architects, builders, and developers trust us.</div>

        <div data-layer="Advantage Container" className="self-stretch inline-flex justify-center items-start gap-4 flex-wrap content-start">
          {advantageItems.map((item, index) => (
            <AdvantageItem
              key={index}
              title={item.title}
              description={item.description}
              imageName={item.imageName}
              iconContainer={item.iconContainer}
            />
          ))}
        </div>
    </div>
  );
}