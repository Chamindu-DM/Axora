'use client';
import Image from 'next/image';
import svgPaths from "../imports/svg-inz3yplkns";

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
    <div className="flex flex-col gap-4 items-start justify-start">
      <div className="flex flex-col font-['Instrument_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] text-[18px] text-black tracking-[0.18px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{title}</p>
      </div>
      <div className="flex flex-col gap-2 items-start justify-start w-full">
        {children}
      </div>
    </div>
  );
}

function SocialMediaColumn() {
  const socialLinks = [
    { name: 'LinkedIn', icon: '/icons/LinkedIn.png', href: 'https://linkedin.com' },
    { name: 'Behance', icon: '/icons/Behance.png', href: 'https://behance.com' },
    { name: 'Instagram', icon: '/icons/Instagram.png', href: 'https://instagram.com' },
    { name: 'Facebook', icon: '/icons/Facebook.png', href: 'https://facebook.com' }
  ];

  return (
    <div className="flex flex-col gap-4 items-start justify-start w-full lg:w-auto">
      <div className="flex flex-col font-['Instrument_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] text-[18px] text-black tracking-[0.18px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Follow us on</p>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-row gap-4 w-full lg:max-w-[500px]">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 cursor-pointer hover:opacity-75 transition-opacity"
          >
            <Image
              src={social.icon}
              alt={`${social.name} icon`}
              width={24}
              height={24}
              className="shrink-0"
            />
            <span className="font-['Instrument_Sans:Medium',_sans-serif] font-medium text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[1]">
      <div className="relative size-full">
        <div className="box-border flex flex-col gap-8 items-start justify-start pb-6 pt-12 md:pt-20 px-4 md:px-8 relative w-full">

          {/* Main Footer Content */}
          <div className="relative shrink-0 w-full">
            <div className="relative size-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">

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
                  <div className="flex flex-wrap gap-4 items-start justify-start w-full">
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
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-end justify-between w-full">
            <div className="flex flex-col justify-center text-[14px] text-black tracking-[-0.14px] order-2 lg:order-1">
              <p className="leading-[normal] font-['Instrument_Sans:Medium',_sans-serif]">©2025 Axora. All Right Reserved</p>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SocialMediaColumn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}