'use client';
import { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/svg-inz3yplkns";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

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
  const magnifierRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Mouse Follower only for this section
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
      container: document.body, // Use document.body instead of containerRef.current for better tracking
      speed: 0.3,
      ease: 'expo.out',
      visible: false,
      className: 'about-cursor',
      innerClassName: 'about-cursor-inner'
    });

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
          span.style.opacity = '0.5';
          span.style.transition = 'opacity 0.3s ease';
          span.className = 'letter-span';
          span.setAttribute('data-letter-index', (lettersRef.current.length).toString());
          textRef.current?.appendChild(span);
          lettersRef.current.push(span);
        });

        // Add space after each word (except the last one)
        if (wordIndex < words.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.textContent = ' ';
          spaceSpan.style.opacity = '0.5';
          spaceSpan.style.transition = 'opacity 0.3s ease';
          spaceSpan.className = 'letter-span space-span';
          spaceSpan.setAttribute('data-letter-index', (lettersRef.current.length).toString());
          textRef.current?.appendChild(spaceSpan);
          lettersRef.current.push(spaceSpan);
        }
      });
    }

    // Create magnifier element
    if (containerRef.current) {
      const magnifier = document.createElement('div');
      magnifier.className = 'text-magnifier';
      magnifier.style.cssText = `
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.8);
        border: 3px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      `;

      const magnifiedText = document.createElement('div');
      magnifiedText.className = 'magnified-text';
      magnifiedText.style.cssText = `
        position: absolute;
        white-space: pre-wrap;
        font-size: 1.8em;
        color: white;
        font-weight: 500;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        text-align: center;
        width: 180px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
        padding: 10px;
        box-sizing: border-box;
      `;

      magnifier.appendChild(magnifiedText);
      containerRef.current.appendChild(magnifier);
      magnifierRef.current = magnifier;
    }

    // Store current container ref for cleanup
    const currentContainer = containerRef.current;

    // Mouse move handler for magnifier
    const handleMouseMove = (e: MouseEvent) => {
      if (!magnifierRef.current || !currentContainer) return;

      const rect = currentContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      magnifierRef.current.style.left = `${x - 100}px`;
      magnifierRef.current.style.top = `${y - 100}px`;

      // Get text under cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor && elementUnderCursor.classList.contains('letter-span')) {
        const magnifiedTextEl = magnifierRef.current.querySelector('.magnified-text') as HTMLElement;
        if (magnifiedTextEl) {
          // Get surrounding text
          const letterIndex = parseInt(elementUnderCursor.getAttribute('data-letter-index') || '0');
          const start = Math.max(0, letterIndex - 10);
          const end = Math.min(lettersRef.current.length, letterIndex + 10);

          let surroundingText = '';
          for (let i = start; i < end; i++) {
            surroundingText += lettersRef.current[i]?.textContent || '';
          }

          magnifiedTextEl.textContent = surroundingText;
        }
      }
    };

    // Add hover effects for cursor and magnifier
    const handleMouseEnter = () => {
      cursor.show();
      cursor.addState('-magnifier');
      if (magnifierRef.current) {
        magnifierRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      cursor.hide();
      cursor.removeState('-magnifier');
      if (magnifierRef.current) {
        magnifierRef.current.style.opacity = '0';
      }
    };

    if (currentContainer) {
      currentContainer.addEventListener('mouseenter', handleMouseEnter);
      currentContainer.addEventListener('mouseleave', handleMouseLeave);
      currentContainer.addEventListener('mousemove', handleMouseMove);
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

            // Update letter opacities
            lettersRef.current.forEach((letter, index) => {
              if (index < lettersToHighlight) {
                letter.style.opacity = '1';
              } else {
                letter.style.opacity = '0.5';
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
        currentContainer.removeEventListener('mouseenter', handleMouseEnter);
        currentContainer.removeEventListener('mouseleave', handleMouseLeave);
        currentContainer.removeEventListener('mousemove', handleMouseMove);
      }
      if (magnifierRef.current) {
        magnifierRef.current.remove();
      }
      cursor.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative shrink-0 w-full z-[2]" data-name="About Description">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-4 md:px-8 lg:px-16 py-0 relative w-full">
          <div className="w-full relative max-w-7xl mx-auto">
            <p
              ref={textRef}
              className="leading-relaxed text-3xl sm:text-4xl text-white font-['Instrument_Sans:Regular',_sans-serif] font-normal tracking-tight cursor-none w-full break-words"
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
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 isolate items-center justify-center px-8 py-[200px] relative w-full">
          <div className="flex flex-col font-['Instrument_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-white uppercase z-[3]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">ABOUT</p>
          </div>
          <AboutDescription />

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