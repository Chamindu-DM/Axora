import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-inz3yplkns";

function Icon() {
  return (
    <div className="absolute left-1/2 size-8 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <g filter="url(#filter0_d_1_916)" id="Arrow">
            <path clipRule="evenodd" d={svgPaths.p5dc8900} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.pda09c00} stroke="var(--stroke-0, white)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21.9565" id="filter0_d_1_916" width="15.4354" x="8" y="6.39592">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4049 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_916" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_916" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function AboutImage() {
  return (
    <div className="absolute left-[688px] size-[180px] top-[-87.82px]" data-name="About Image">
      <div className="absolute left-0 mix-blend-exclusion size-[180px] top-0 cursor-pointer transition-all duration-300 ease-in-out hover:mix-blend-multiply hover:scale-110">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 180">
          <g id="Ellipse 422" style={{ mixBlendMode: "exclusion" }}>
            <circle cx="90" cy="90" fill="var(--fill-0, white)" r="90" />
          </g>
        </svg>
      </div>
      <Icon />
    </div>
  );
}

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
      <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4" style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-600 text-sm">{role}</p>
    </div>
  );
}

function AboutDescription() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position
  const textOpacity = Math.min(1, Math.max(0.5, (scrollY / 1000)));

  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="About Description">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-16 py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Instrument_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[0px] text-white tracking-[-0.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] text-[36px] whitespace-pre-wrap">
              <span style={{ fontVariationSettings: "'wdth' 100" }}>{`                                         At Axora Engineering, we specialize in transforming ideas into precise, visual, and build-ready solutions. With expertise across drafting, `}</span>
              <span 
                className="transition-all duration-500 ease-in-out"
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: `rgba(255, 255, 255, ${textOpacity})`
                }}
              >
                3D modeling, rendering, and structural analysis, we empower architects, builders, and developers to streamline projects, cut costs, and deliver outstanding results.
              </span>
            </p>
          </div>
          <AboutImage />
        </div>
      </div>
    </div>
  );
}

function GoldenRatioCircles() {
  return (
    <div className="h-[872.228px] relative w-[1410px]" data-name="Golden Ratio Circles">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1410 873">
        <g id="Golden Ratio Circles">
          <path d={svgPaths.p3ce85280} fill="var(--fill-0, #333333)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Lead Architect",
    image: "/api/placeholder/80/80"
  },
  {
    name: "David Chen",
    role: "Structural Engineer",
    image: "/api/placeholder/80/80"
  },
  {
    name: "Emily Rodriguez",
    role: "3D Visualization Specialist",
    image: "/api/placeholder/80/80"
  },
  {
    name: "Michael Thompson",
    role: "CAD Manager",
    image: "/api/placeholder/80/80"
  }
];

const achievements = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
  { number: "15+", label: "Team Members" }
];

export default function AboutUs() {
  return (
    <div id="about" className="bg-black relative shrink-0 w-full z-[5]">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 isolate items-center justify-center px-8 py-[200px] relative w-full">
          <div className="flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-white uppercase z-[3]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">ABOUT</p>
          </div>
          <AboutDescription />
          
          {/* Company Story Section */}
          <div className="max-w-4xl mx-auto text-center z-[3] mt-16">
            <h2 className="text-4xl font-bold text-white mb-8">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Founded on Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  Established in 2014, Axora Engineering began with a simple mission: to bridge the gap between 
                  innovative design concepts and practical construction solutions. Our founders recognized the need 
                  for high-quality, cost-effective engineering services in the Australian market.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Growing with Technology</h3>
                <p className="text-gray-300 leading-relaxed">
                  Today, we leverage cutting-edge technology and industry best practices to deliver exceptional 
                  results. Our team combines local Australian knowledge with global expertise to serve clients 
                  across residential, commercial, and industrial sectors.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto z-[3] mt-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{achievement.number}</div>
                <div className="text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="max-w-6xl mx-auto z-[3] mt-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-4xl mx-auto z-[3] mt-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Efficiency</h3>
                <p className="text-gray-300">Streamlined processes that save time and reduce costs without compromising quality.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Precision</h3>
                <p className="text-gray-300">Meticulous attention to detail in every drawing, model, and analysis we deliver.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Partnership</h3>
                <p className="text-gray-300">Building lasting relationships through collaboration and exceptional service.</p>
              </div>
            </div>
          </div>

          <div className="absolute flex h-[872.228px] items-center justify-center left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1410px] z-[1]" style={{ top: "calc(50% + 0.182px)" }}>
            <div className="flex-none scale-y-[-100%]">
              <GoldenRatioCircles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}