'use client';
import { useState } from "react";

// Replace Figma assets with placeholder images
const imgWorkImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
const imgWorkImage1 = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
const imgWorkImage2 = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
const imgWorkImage3 = "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
const imgWorkImage4 = "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
const imgWorkImage5 = "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
const imgServicesSection = "https://images.unsplash.com/photo-1559625810-9f0c1e7da51e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80";

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  images: Array<{ src: string; title: string; description: string }>;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ isOpen, currentIndex, images, onClose, onNext, onPrev }: LightboxProps) {
  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="relative max-w-5xl max-h-[90vh] w-full mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
        >
          ✕
        </button>

        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('${currentImage.src}')` }} />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{currentImage.title}</h3>
            <p className="text-gray-600">{currentImage.description}</p>
          </div>
        </div>

        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
          disabled={currentIndex === 0}
        >
          ‹
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
          disabled={currentIndex === images.length - 1}
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkImage({
  src,
  title,
  description,
  onClick,
  className = "",
  location,
  client,
  year
}: {
  src: string;
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
  location?: string;
  client?: string;
  year?: string;
}) {
  return (
    <div
      className={`WorkImage ${className} cursor-pointer group relative overflow-hidden`}
      onClick={onClick}
    >
      <img
        data-layer="Work Image"
        data-hover="off"
        className="w-full h-full object-cover transition-all duration-300"
        src={src}
        alt={title}
        onMouseEnter={(e) => {
          e.currentTarget.setAttribute('data-hover', 'on');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.setAttribute('data-hover', 'off');
        }}
      />

      {/* Project Info Overlay */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
        <div data-layer="Project Info" className="ProjectInfo self-stretch p-4 bg-black/60 inline-flex justify-start items-start gap-4">
          <div data-layer="Project Details" className="ProjectDetails flex-1 inline-flex flex-col justify-start items-start gap-4">
            <div data-layer="Project Title" className="ProjectTitle self-stretch justify-center text-white text-2xl font-medium font-['Rethink_Sans'] tracking-tight">{title}</div>
            <div data-layer="Project Metadata" className="ProjectMetadata self-stretch flex flex-col justify-start items-start gap-1">
              {location && (
                <div data-layer="Location Info" className="LocationInfo self-stretch inline-flex justify-start items-start gap-1">
                  <div data-layer="Location Label" className="LocationLabel justify-center text-white/50 text-base font-medium font-['Instrument_Sans']">Location:</div>
                  <div data-layer="Location Value" className="LocationValue flex-1 justify-center text-white text-base font-medium font-['Instrument_Sans']">{location}</div>
                </div>
              )}
              {client && (
                <div data-layer="Client Info" className="ClientInfo self-stretch inline-flex justify-start items-start gap-1">
                  <div data-layer="Client Label" className="ClientLabel justify-center text-white/50 text-base font-medium font-['Instrument_Sans']">Client:</div>
                  <div data-layer="Client Value" className="ClientValue flex-1 justify-center text-white text-base font-medium font-['Instrument_Sans']">{client}</div>
                </div>
              )}
            </div>
          </div>
          <div data-layer="Year Container" className="YearContainer w-10 self-stretch inline-flex flex-col justify-between items-center">
            <div data-layer="Arrow Icon" className="ArrowIcon w-12 h-12 relative overflow-hidden">
              <svg className="w-7 h-7 absolute left-[10.90px] top-[10.88px] text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            {year && (
              <div data-layer="Year" className="Year self-stretch justify-center text-white/50 text-base font-medium font-['Instrument_Sans']">{year}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const portfolioImages = [
  {
    src: imgWorkImage,
    title: "Hidden Hills",
    description: "Modern residential development with sustainable design features and innovative architectural elements.",
    location: "California, USA",
    client: "Bittoni",
    year: "2024"
  },
  {
    src: imgWorkImage1,
    title: "Skyline Tower",
    description: "State-of-the-art office complex featuring glass facades and energy-efficient systems.",
    location: "New York, USA",
    client: "Urban Developers",
    year: "2023"
  },
  {
    src: imgWorkImage2,
    title: "Industrial Hub",
    description: "Large-scale industrial facility with optimized structural design for maximum efficiency.",
    location: "Melbourne, AUS",
    client: "Manufacturing Co.",
    year: "2024"
  },
  {
    src: imgServicesSection,
    title: "Mixed Plaza",
    description: "Integrated commercial and residential spaces with contemporary design aesthetics.",
    location: "Sydney, AUS",
    client: "Metro Group",
    year: "2023"
  },
  {
    src: imgWorkImage3,
    title: "Learning Center",
    description: "Modern school building designed for collaborative learning and community engagement.",
    location: "Brisbane, AUS",
    client: "Education Board",
    year: "2024"
  },
  {
    src: imgWorkImage4,
    title: "Medical Complex",
    description: "Medical facility with patient-centered design and advanced technical infrastructure.",
    location: "Perth, AUS",
    client: "Health Services",
    year: "2023"
  },
  {
    src: imgWorkImage5,
    title: "Retail District",
    description: "Contemporary retail complex with innovative layout and customer-focused design.",
    location: "Adelaide, AUS",
    client: "Retail Partners",
    year: "2024"
  },
  {
    src: imgWorkImage2,
    title: "Sports Arena",
    description: "Multi-purpose sports facility with flexible spaces and high-performance materials.",
    location: "Gold Coast, AUS",
    client: "Sports Authority",
    year: "2023"
  }
];

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <div data-layer="Portfolio Section" className="PortfolioSection self-stretch px-8 pt-30 pb-20 bg-white inline-flex flex-col justify-start items-start gap-8">
      <div data-layer="Portfolio Title" className="PortfolioTitle self-stretch px-8 justify-center text-black text-6xl font-semibold font-['Instrument_Sans'] uppercase mb-8">
        Showcasing the craft<br/>behind our designs.
      </div>

      <div data-layer="Works Container" className="WorksContainer self-stretch flex flex-col justify-start items-start gap-1">
        {/* First Row - 3 equal images */}
        <div data-layer="Work Item" className="WorkItem self-stretch inline-flex justify-start items-start gap-1">
          <WorkImage
            src={portfolioImages[0].src}
            title={portfolioImages[0].title}
            description={portfolioImages[0].description}
            location={portfolioImages[0].location}
            client={portfolioImages[0].client}
            year={portfolioImages[0].year}
            onClick={() => openLightbox(0)}
            className="flex-1 h-[578px] inline-flex flex-col justify-end items-start"
          />
          <WorkImage
            src={portfolioImages[1].src}
            title={portfolioImages[1].title}
            description={portfolioImages[1].description}
            location={portfolioImages[1].location}
            client={portfolioImages[1].client}
            year={portfolioImages[1].year}
            onClick={() => openLightbox(1)}
            className="flex-1 h-[578px] inline-flex flex-col justify-end items-start"
          />
          <WorkImage
            src={portfolioImages[2].src}
            title={portfolioImages[2].title}
            description={portfolioImages[2].description}
            location={portfolioImages[2].location}
            client={portfolioImages[2].client}
            year={portfolioImages[2].year}
            onClick={() => openLightbox(2)}
            className="flex-1 h-[578px] inline-flex flex-col justify-end items-start"
          />
        </div>

        {/* Second Row - 2 larger images */}
        <div data-layer="Work Item" className="WorkItem self-stretch inline-flex justify-start items-start gap-1">
          <WorkImage
            src={portfolioImages[3].src}
            title={portfolioImages[3].title}
            description={portfolioImages[3].description}
            location={portfolioImages[3].location}
            client={portfolioImages[3].client}
            year={portfolioImages[3].year}
            onClick={() => openLightbox(3)}
            className="flex-1 h-[870px] inline-flex flex-col justify-end items-start"
          />
          <WorkImage
            src={portfolioImages[4].src}
            title={portfolioImages[4].title}
            description={portfolioImages[4].description}
            location={portfolioImages[4].location}
            client={portfolioImages[4].client}
            year={portfolioImages[4].year}
            onClick={() => openLightbox(4)}
            className="flex-1 h-[870px] inline-flex flex-col justify-end items-start"
          />
        </div>

        {/* Third Row - 3 equal images */}
        <div data-layer="Work Item" className="WorkItem self-stretch inline-flex justify-start items-start gap-1">
          <WorkImage
            src={portfolioImages[5].src}
            title={portfolioImages[5].title}
            description={portfolioImages[5].description}
            location={portfolioImages[5].location}
            client={portfolioImages[5].client}
            year={portfolioImages[5].year}
            onClick={() => openLightbox(5)}
            className="flex-1 h-[578px] inline-flex flex-col justify-end items-start"
          />
          <WorkImage
            src={portfolioImages[6].src}
            title={portfolioImages[6].title}
            description={portfolioImages[6].description}
            location={portfolioImages[6].location}
            client={portfolioImages[6].client}
            year={portfolioImages[6].year}
            onClick={() => openLightbox(6)}
            className="flex-1 h-[578px] inline-flex flex-col justify-end items-start"
          />
          <WorkImage
            src={portfolioImages[7].src}
            title={portfolioImages[7].title}
            description={portfolioImages[7].description}
            location={portfolioImages[7].location}
            client={portfolioImages[7].client}
            year={portfolioImages[7].year}
            onClick={() => openLightbox(7)}
            className="flex-1 h-[578px] inline-flex flex-col justify-end items-start"
          />
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        images={portfolioImages}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
