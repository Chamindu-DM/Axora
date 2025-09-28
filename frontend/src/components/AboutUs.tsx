'use client';
import { useState, useEffect, useRef } from "react";
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

function AboutDescription() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Split text into individual letters
    if (textRef.current) {
      const text = textRef.current.textContent || '';
      textRef.current.innerHTML = '';
      lettersRef.current = [];

      // Split by words first, then by letters to maintain word spacing
      const words = text.split(' ');
      words.forEach((word, wordIndex) => {
        word.split('').forEach((char, charIndex) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.color = 'black'; // Start with black text
          span.style.transition = 'color 0.3s ease, transform 0.3s ease';
          span.style.display = 'inline-block';
          span.style.transformOrigin = 'center bottom';
          span.className = 'letter-span';
          span.setAttribute('data-letter-index', (lettersRef.current.length).toString());
          textRef.current?.appendChild(span);
          lettersRef.current.push(span);
        });

        // Add space after each word (except the last one)
        if (wordIndex < words.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.textContent = ' ';
          spaceSpan.style.color = 'black'; // Start with black text
          spaceSpan.style.transition = 'color 0.3s ease';
          spaceSpan.className = 'letter-span space-span';
          spaceSpan.setAttribute('data-letter-index', (lettersRef.current.length).toString());
          textRef.current?.appendChild(spaceSpan);
          lettersRef.current.push(spaceSpan);
        }
      });
    }

    // Store current container ref for cleanup
    const currentContainer = containerRef.current;

    // Mouse move handler for letter zoom effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!currentContainer) return;

      const rect = currentContainer.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Check each letter for proximity to cursor
      lettersRef.current.forEach((letter) => {
        if (!letter.classList.contains('space-span')) {
          const letterRect = letter.getBoundingClientRect();
          const containerRect = currentContainer.getBoundingClientRect();

          const letterCenterX = letterRect.left + letterRect.width / 2 - containerRect.left;
          const letterCenterY = letterRect.top + letterRect.height / 2 - containerRect.top;

          // Calculate distance from mouse to letter center
          const distance = Math.sqrt(
            Math.pow(mouseX - letterCenterX, 2) + Math.pow(mouseY - letterCenterY, 2)
          );

          // Maximum influence distance (adjust as needed)
          const maxDistance = 80;

          if (distance < maxDistance) {
            // Calculate scale based on distance (closer = larger)
            const scale = 1 + (maxDistance - distance) / maxDistance * 0.8; // Max scale of 1.8x
            letter.style.transform = `scale(${scale})`;
            letter.style.zIndex = '10';
          } else {
            letter.style.transform = 'scale(1)';
            letter.style.zIndex = '1';
          }
        }
      });
    };

    // Reset all letter scales when mouse leaves container
    const handleMouseLeave = () => {
      lettersRef.current.forEach((letter) => {
        if (!letter.classList.contains('space-span')) {
          letter.style.transform = 'scale(1)';
          letter.style.zIndex = '1';
        }
      });
    };

    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMove);
      currentContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Calculate which letters should be highlighted based on scroll
          if (currentContainer && lettersRef.current.length > 0) {
            const containerRect = currentContainer.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate when the container enters and exits the viewport
            const containerTop = containerRect.top;
            const containerBottom = containerRect.bottom;
            const containerHeight = containerRect.height;

            // Animation starts when container is 80% visible and completes when it's fully in view
            const startPoint = viewportHeight * 0.8;
            const animationStart = containerTop - startPoint;
            const animationEnd = containerTop - (viewportHeight * 0.2);

            // Calculate progress (0 to 1)
            let scrollProgress = 0;
            if (animationStart >= 0) {
              scrollProgress = 0; // Haven't started animation yet
            } else if (animationEnd <= 0) {
              scrollProgress = 1; // Animation complete
            } else {
              scrollProgress = Math.abs(animationStart) / Math.abs(animationStart - animationEnd);
            }

            // Ensure progress is between 0 and 1
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));

            // Calculate how many letters should be highlighted
            const totalLetters = lettersRef.current.length;
            const lettersToHighlight = Math.floor(scrollProgress * totalLetters);

            // Update letter colors instead of opacity
            lettersRef.current.forEach((letter, index) => {
              if (index < lettersToHighlight) {
                letter.style.color = 'white';
              } else {
                letter.style.color = 'black';
              }
            });
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial scroll calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (currentContainer) {
        currentContainer.removeEventListener('mousemove', handleMouseMove);
        currentContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative shrink-0 w-full z-[2]" data-name="About Description">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-4 md:px-8 lg:px-16 py-0 relative w-full">
          <div className="w-full relative max-w-7xl mx-auto">
            <p
              ref={textRef}
              className="leading-relaxed text-3xl sm:text-4xl text-white font-['Instrument_Sans:Regular',_sans-serif] font-normal tracking-tight w-full break-words"
              style={{
                fontVariationSettings: "'wdth' 100",
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto'
              }}
            >
              At Axora Engineering, we specialize in transforming ideas into precise, visual, and build-ready solutions. With expertise across drafting, 3D modeling, rendering, and structural analysis, we empower architects, builders, and developers to streamline projects, cut costs, and deliver outstanding results.
            </p>
          </div>
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

export default function AboutUs() {
  return (
    <div id="about" className="bg-black relative shrink-0 w-full z-[5]">
      <div className="flex flex-col items-center justify-center overflow-hidden relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 md:gap-8 isolate items-center justify-center px-4 md:px-8 py-[100px] md:py-[150px] lg:py-[200px] relative w-full">
          <div className="px-4 md:px-8 flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[14px] md:text-[16px] text-white uppercase z-[3]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">ABOUT</p>
          </div>
          <AboutDescription />

          <div className="absolute flex h-[436px] md:h-[654px] lg:h-[872.228px] items-center justify-center left-1/2 translate-x-[-50%] translate-y-[-50%] w-[705px] md:w-[1057px] lg:w-[1410px] z-[1] opacity-30 md:opacity-50 lg:opacity-100" style={{ top: "calc(50% + 0.182px)" }}>
            <div className="flex-none scale-y-[-100%]">
              <GoldenRatioCircles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
