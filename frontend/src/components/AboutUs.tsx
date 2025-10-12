'use client';
import { useEffect, useRef } from "react";

// Assuming svgPaths is correctly imported from a local file.
// Example placeholder if you don't have the file.
const svgPaths = {
    p3ce85280: "M1410 436.114C1410 195.258 1214.74 0 973.886 0C733.03 0 537.772 195.258 537.772 436.114C537.772 676.97 733.03 872.228 973.886 872.228C1087.61 872.228 1190.96 828.691 1269.46 756.985C1185.76 825.842 1083.48 870.091 973.886 870.091C734.113 870.091 539.909 675.887 539.909 436.114C539.909 196.341 734.113 2.13679 973.886 2.13679C1213.66 2.13679 1407.86 196.341 1407.86 436.114C1407.86 545.707 1363.61 647.989 1294.76 731.693C1366.46 653.197 1410 549.851 1410 436.114ZM973.886 537.772C859.155 537.772 764.772 443.388 764.772 328.66C764.772 213.931 859.155 119.547 973.886 119.547C1088.62 119.547 1183 213.931 1183 328.66C1183 443.388 1088.62 537.772 973.886 537.772ZM973.886 535.635C1087.53 535.635 1180.86 442.3 1180.86 328.66C1180.86 214.996 1087.53 121.684 973.886 121.684C860.222 121.684 766.909 214.996 766.909 328.66C766.909 442.3 860.222 535.635 973.886 535.635ZM0 436.114C0 676.97 195.258 872.228 436.114 872.228C676.97 872.228 872.228 676.97 872.228 436.114C872.228 195.258 676.97 0 436.114 0C195.258 0 0 195.258 0 436.114ZM436.114 870.091C196.341 870.091 2.13679 675.887 2.13679 436.114C2.13679 196.341 196.341 2.13679 436.114 2.13679C675.887 2.13679 870.091 196.341 870.091 436.114C870.091 675.887 675.887 870.091 436.114 870.091Z"
};


function AboutDescription() {
    return (
        <p className="leading-relaxed text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-['Instrument_Sans'] font-normal tracking-tight w-full text-left text-black">
            At Axora Engineering, we specialize in transforming ideas into precise, visual, and build-ready solutions. With expertise across drafting, 3D modeling, rendering, and structural analysis, we empower architects, builders, and developers to streamline projects, cut costs, and deliver outstanding results.
        </p>
    );
}

function GoldenRatioCircles() {
    return (
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1410 873">
            <g id="Golden Ratio Circles">
                <path d={svgPaths.p3ce85280} fill="var(--fill-0, #d4d4d4)" id="Union" />
            </g>
        </svg>
    );
}

function ParallaxImages() {
    const image1Ref = useRef<HTMLImageElement>(null);
    const image2Ref = useRef<HTMLImageElement>(null);
    const image3Ref = useRef<HTMLImageElement>(null);
    const image4Ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Ensure this runs only on the client
        if (typeof window === "undefined") return;

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const scrollFactor = 0.1; // Adjust this to control overall parallax speed

                    if (image1Ref.current) {
                        image1Ref.current.style.transform = `translateY(${scrollY * scrollFactor * 1.1}px) rotate(-8deg)`;
                    }
                    if (image2Ref.current) {
                        image2Ref.current.style.transform = `translateY(${scrollY * scrollFactor * 0.8}px) rotate(8deg)`;
                    }
                    if (image3Ref.current) {
                        image3Ref.current.style.transform = `translateY(${scrollY * scrollFactor * 1.3}px) rotate(-8deg)`;
                    }
                    if (image4Ref.current) {
                        image4Ref.current.style.transform = `translateY(${scrollY * scrollFactor * 0.9}px) rotate(8deg)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const commonImageClasses = "absolute w-[320px] h-[180px] origin-center rounded-2xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.25)] border border-black/10 object-cover";
    const transitionClass = "transition-transform duration-100 ease-out";

    return (
        // This container establishes the positioning context for the absolute images
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Image 1 - Top */}
            <img
                ref={image1Ref}
                className={`${commonImageClasses} ${transitionClass}`}
                style={{ top: '0%', left: '10%', transform: 'rotate(-8deg)' }}
                // Use your actual image paths
                src="/images/image1.webp" // Assuming this is the exterior shot
                alt="Exterior view of a modern house by Axora Engineering"
            />

            {/* Image 2 */}
            <img
                ref={image2Ref}
                className={`${commonImageClasses} ${transitionClass}`}
                style={{ top: '25%', left: '25%', transform: 'rotate(8deg)' }}
                // Use your actual image paths
                src="/images/image2.webp" // Assuming this is the interior shot
                alt="Interior living space design by Axora Engineering"
            />

            {/* Image 3 - (Same as Image 1) */}
            <img
                ref={image3Ref}
                className={`${commonImageClasses} ${transitionClass}`}
                style={{ top: '50%', left: '10%', transform: 'rotate(-8deg)' }}
                // Use your actual image paths
                src="/images/image3.webp" // Re-using the exterior shot
                alt="Exterior view of a modern house by Axora Engineering"
            />

            {/* Image 4 - (Same as Image 2) */}
            <img
                ref={image4Ref}
                className={`${commonImageClasses} ${transitionClass}`}
                style={{ top: '75%', left: '25%', transform: 'rotate(8deg)' }}
                // Use your actual image paths
                src="/images/image4.webp" // Re-using the interior shot
                alt="Interior living space design by Axora Engineering"
            />
        </div>
    );
}

export default function AboutUs() {
    return (
        <section id="about" className="bg-white w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-screen py-24 md:py-32">

                    {/* Left Column: Parallax Images */}
                    <div className="w-full h-full flex items-center justify-center">
                        <ParallaxImages />
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="relative flex flex-col justify-center gap-6">
                        {/* Background Golden Ratio SVG */}
                        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10 pointer-events-none -translate-x-10">
                            <GoldenRatioCircles />
                        </div>

                        {/* Text content - needs to be relative and have a z-index to sit on top */}
                        <div className="relative z-10">
                            <p className="font-['Instrument_Sans'] font-medium text-black uppercase tracking-widest mb-4">
                                ABOUT
                            </p>
                            <AboutDescription />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}