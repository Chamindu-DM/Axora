'use client';
import svgPaths from "../imports/svg-inz3yplkns";
// Replace Figma asset with a placeholder image
const imgHeroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80";

function Arrow() {
  return (
    <div className="relative shrink-0 size-6" data-name="Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow">
          <path d={svgPaths.p1d1acb00} fill="var(--fill-0, black)" />
          <path d={svgPaths.p2e6eafc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroButton({ onClick }: { onClick?: () => void }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div 
      className="bg-white box-border content-stretch flex items-center justify-between min-h-10 min-w-[205px] pl-4 pr-2 py-2 relative rounded-[8px] shrink-0 w-full sm:w-[205px] cursor-pointer hover:bg-gray-50 transition-colors group"
      data-name="Hero Button"
      onClick={handleClick}
    >
      <div className="basis-0 flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Discuss the project</p>
      </div>
      <div className="transform group-hover:translate-x-1 transition-transform">
        <Arrow />
      </div>
    </div>
  );
}

function HeroTextContainer() {
  return (
    <div className="max-w-[990px] relative rounded-[8px] shrink-0 w-full" data-name="Hero Text Container">
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 md:gap-6 items-start justify-start max-w-inherit p-[16px] md:p-[16px] relative w-full">
          <div className="flex flex-col font-['Rethink_Sans'] font-bold justify-center leading-[40px] md:leading-[60px] lg:leading-[80px] min-w-full relative shrink-0 text-[32px] md:text-[48px] lg:text-[64px] text-white tracking-[-0.32px] md:tracking-[-0.48px] lg:tracking-[-0.64px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">{`Engineering Design & Visualization`}</p>
            <p>You Can Rely On</p>
          </div>
          <div className="flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[18px] md:text-[20px] lg:text-[24px] text-white tracking-[0.18px] md:tracking-[0.20px] lg:tracking-[0.24px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Delivering high-quality drafting, 3D modeling, and visualization solutions for Australia&apos;s construction and architectural industries.</p>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full sm:w-auto">
            <HeroButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[1440/693.223] bg-[position:0%_0%,_50%_50%] bg-[rgba(0,0,0,0.5)] bg-size-[auto,cover] relative rounded-[16px] shrink-0 w-full" data-name="Hero Image" style={{ backgroundImage: `url('${imgHeroImage}')` }}>
      <div className="flex flex-col justify-end relative size-full">
        <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[1440/693.223] box-border content-stretch flex flex-col gap-2 items-start justify-end p-[8px] relative size-full">
          <HeroTextContainer />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div id="hero" className="relative shrink-0 w-full z-[6]" data-name="Hero Section">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-4 pt-1 px-2 sm:px-4 relative w-full">
          <HeroImage />
        </div>
      </div>
    </div>
  );
}