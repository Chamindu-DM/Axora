'use client';
import { useEffect, useRef } from "react";

function AboutDescription() {
    return (
        <p className="leading-relaxed text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-['Instrument_Sans'] font-normal tracking-tight w-full text-left text-black">
            At Axora Engineering, we specialize in transforming ideas into precise, visual, and build-ready solutions. With expertise across drafting, 3D modeling, rendering, and structural analysis, we empower architects, builders, and developers to streamline projects, cut costs, and deliver outstanding results.
        </p>
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
                src="/images/image4.jpg" // Re-using the interior shot
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