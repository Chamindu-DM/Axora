'use client';
import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-inz3yplkns";

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

function NavigationLink({ children, href, onClick, onMobileClick }: { children: string; href: string; onClick?: () => void; onMobileClick?: () => void }) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (onClick) {
            onClick();
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (onMobileClick) {
            onMobileClick();
        }
    };

    return (
        <div className="box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0">
            <div className="flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap cursor-pointer hover:text-blue-600 transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal] whitespace-pre" onClick={handleClick}>{children}</p>
            </div>
        </div>
    );
}

function Arrow() {
    return (
        <div className="relative shrink-0 size-6" data-name="Arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Arrow">
                    <path d={svgPaths.p1d1acb00} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p2e6eafc0} fill="var(--fill-0, black)" id="Vector" />
                </g>
            </svg>
        </div>
    );
}

function ProjectLink({ onMobileClick }: { onMobileClick?: () => void }) {
    const handleClick = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (onMobileClick) {
            onMobileClick();
        }
    };

    return (
        <div
            className="bg-black box-border content-stretch flex gap-4 items-center justify-center pl-4 pr-2 py-2 relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-800 transition-colors"
            data-name="Project Link"
            onClick={handleClick}
        >
            <div className="flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal] whitespace-pre">Discuss the project</p>
            </div>
            <Arrow />
        </div>
    );
}

function HamburgerMenu({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
    return (
        <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer"
            onClick={onClick}
            aria-label="Toggle menu"
        >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
    );
}

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className={`backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] shrink-0 sticky top-0 w-full z-[7] transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`} data-name="NavBar">
            <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex items-center justify-between px-8 py-2 relative w-full">
                    <div className="box-border content-stretch flex gap-4 items-center justify-start px-0 py-2 relative shrink-0">
                        <Logo />
                        <NavigationLink href="#portfolio">Gallery</NavigationLink>
                        <NavigationLink href="#portfolio">Cases</NavigationLink>
                        <NavigationLink href="#about">Studio</NavigationLink>
                        <NavigationLink href="#services">Services</NavigationLink>
                    </div>
                    <ProjectLink />
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex items-center justify-between px-4 py-2 relative w-full">
                    <Logo />
                    <HamburgerMenu isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
                    <div className="flex flex-col items-center py-4 space-y-2">
                        <NavigationLink href="#portfolio" onMobileClick={closeMobileMenu}>Gallery</NavigationLink>
                        <NavigationLink href="#portfolio" onMobileClick={closeMobileMenu}>Cases</NavigationLink>
                        <NavigationLink href="#about" onMobileClick={closeMobileMenu}>Studio</NavigationLink>
                        <NavigationLink href="#services" onMobileClick={closeMobileMenu}>Services</NavigationLink>
                        <div className="pt-4">
                            <ProjectLink onMobileClick={closeMobileMenu} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}