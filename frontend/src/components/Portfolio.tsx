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
  className = "aspect-[448/568] basis-0 bg-center bg-cover bg-no-repeat content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px shrink-0"
}: {
  src: string;
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <div
      className={`${className} cursor-pointer group relative overflow-hidden rounded-lg transition-transform hover:scale-105`}
      style={{ backgroundImage: `url('${src}')` }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

const portfolioImages = [
  {
    src: imgWorkImage,
    title: "Residential Complex",
    description: "Modern residential development with sustainable design features and innovative architectural elements."
  },
  {
    src: imgWorkImage1,
    title: "Commercial Office Building",
    description: "State-of-the-art office complex featuring glass facades and energy-efficient systems."
  },
  {
    src: imgWorkImage2,
    title: "Industrial Warehouse",
    description: "Large-scale industrial facility with optimized structural design for maximum efficiency."
  },
  {
    src: imgServicesSection,
    title: "Mixed-Use Development",
    description: "Integrated commercial and residential spaces with contemporary design aesthetics."
  },
  {
    src: imgWorkImage3,
    title: "Educational Facility",
    description: "Modern school building designed for collaborative learning and community engagement."
  },
  {
    src: imgWorkImage4,
    title: "Healthcare Center",
    description: "Medical facility with patient-centered design and advanced technical infrastructure."
  },
  {
    src: imgWorkImage5,
    title: "Retail Shopping Center",
    description: "Contemporary retail complex with innovative layout and customer-focused design."
  },
  {
    src: imgWorkImage2,
    title: "Sports Complex",
    description: "Multi-purpose sports facility with flexible spaces and high-performance materials."
  }
];

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" }
  ];

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
    <div id="portfolio" className="bg-white relative shrink-0 w-full z-[3]">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-center justify-center px-8 py-20 relative w-full">
          <div className="text-center mb-8">
            <div className="flex flex-col font-['Instrument_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[normal] relative shrink-0 text-[64px] text-black uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="mb-0">Showcasing the craft</p>
              <p>behind our designs.</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full max-w-7xl">
            {portfolioImages.map((image, index) => (
              <WorkImage
                key={index}
                src={image.src}
                title={image.title}
                description={image.description}
                onClick={() => openLightbox(index)}
                className="aspect-[4/3] bg-center bg-cover bg-no-repeat rounded-lg"
              />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Load More Projects
            </button>
          </div>
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
