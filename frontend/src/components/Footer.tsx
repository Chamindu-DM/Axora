'use client';
import svgPaths from "../imports/svg-inz3yplkns";

// Use proper SVG imports from the public folder
const linkedInIcon = "/icons/linkedin.svg";
const behanceIcon = "/icons/behance.svg";
const instagramIcon = "/icons/instagram.svg";
const facebookIcon = "/icons/facebook.svg";

function FooterLink({ children, icon, href }: { children: string; icon?: React.ReactNode; href?: string }) {
  const handleClick = () => {
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full cursor-pointer hover:text-blue-600 transition-colors" onClick={handleClick}>
      {icon || (
        <div className="relative shrink-0 size-6" data-name="Arrow">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Arrow">
              <path d={svgPaths.p19639300} fill="var(--fill-0, black)" id="Vector" />
            </g>
          </svg>
        </div>
      )}
      <div className="basis-0 flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{children}</p>
      </div>
    </div>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Instrument_Sans:Bold',_sans-serif] font-bold h-7 justify-center leading-[0] relative shrink-0 text-[18px] text-black tracking-[0.18px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{title}</p>
      </div>
      <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
        {children}
      </div>
    </div>
  );
}

function SocialMediaColumn() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Instrument_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-black text-nowrap tracking-[0.18px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Follow us on</p>
      </div>
      <div className="content-stretch flex items-start justify-start max-w-[500px] relative shrink-0 w-full">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-75 transition-opacity">
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex gap-2 items-center justify-start p-[4px] relative w-full">
              <div className="bg-center bg-cover bg-no-repeat shrink-0 size-6" style={{ backgroundImage: `url('${linkedInIcon}')` }} />
              <div className="basis-0 flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-75 transition-opacity">
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex gap-2 items-center justify-start p-[4px] relative w-full">
              <div className="bg-center bg-cover bg-no-repeat shrink-0 size-6" style={{ backgroundImage: `url('${behanceIcon}')` }} />
              <div className="basis-0 flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">Behance</p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-75 transition-opacity">
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex gap-2 items-center justify-start p-[4px] relative w-full">
              <div className="bg-center bg-cover bg-no-repeat shrink-0 size-6" style={{ backgroundImage: `url('${instagramIcon}')` }} />
              <div className="basis-0 flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">Instagram</p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 cursor-pointer hover:opacity-75 transition-opacity">
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex gap-2 items-center justify-start p-[4px] relative w-full">
              <div className="bg-center bg-cover bg-no-repeat shrink-0 size-6" style={{ backgroundImage: `url('${facebookIcon}')` }} />
              <div className="basis-0 flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[1]">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start pb-6 pt-20 px-8 relative w-full">
          
          {/* Main Footer Content */}
          <div className="relative shrink-0 w-full">
            <div className="relative size-full">
              <div className="box-border content-stretch flex gap-12 items-start justify-start p-[8px] relative w-full">
                
                {/* Services Column */}
                <FooterColumn title="Services">
                  <FooterLink href="#services">CAD Drafting</FooterLink>
                  <FooterLink href="#services">3D Modeling (Revit, SketchUp)</FooterLink>
                  <FooterLink href="#services">Rendering & Walkthroughs (Lumion, Enscape, Twinmotion)</FooterLink>
                  <FooterLink href="#services">BOQ & Estimating</FooterLink>
                  <FooterLink href="#services">Structural Analysis (STAAD.Pro, ETABS, Tekla, SAP2000)</FooterLink>
                </FooterColumn>

                {/* Solutions Column */}
                <FooterColumn title="Solutions">
                  <FooterLink href="#about">For Home Builders</FooterLink>
                  <FooterLink href="#about">For Millwork Manufacturers</FooterLink>
                  <FooterLink href="#about">For Architects</FooterLink>
                  <FooterLink href="#about">For Interior Designers</FooterLink>
                </FooterColumn>

                {/* Software & Platforms Column */}
                <FooterColumn title="Software & Platforms">
                  <div className="content-start flex flex-wrap gap-4 items-start justify-start relative shrink-0 w-full">
                    <FooterLink href="#services">Revit</FooterLink>
                    <FooterLink href="#services">SketchUp</FooterLink>
                    <FooterLink href="#services">Lumion</FooterLink>
                    <FooterLink href="#services">Enscape</FooterLink>
                    <FooterLink href="#services">Twinmotion</FooterLink>
                    <FooterLink href="#services">STAAD.Pro</FooterLink>
                    <FooterLink href="#services">ETABS</FooterLink>
                    <FooterLink href="#services">Tekla</FooterLink>
                    <FooterLink href="#services">SAP2000</FooterLink>
                  </div>
                </FooterColumn>

              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="content-stretch flex gap-16 items-end justify-start relative shrink-0 w-full">
            <div className="basis-0 flex flex-col font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-black tracking-[-0.14px]">
              <p className="leading-[normal]">©2025 Axora. All Right Reserved</p>
            </div>
            <SocialMediaColumn />
          </div>
        </div>
      </div>
    </div>
  );
}