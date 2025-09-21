'use client';
import { useState } from "react";
import imgWorkImage from "figma:asset/494aad06ff85b717bf8cbceae2e9500be1bc6733.png";
import imgWorkImage1 from "figma:asset/d22b62265f4c60d48b59edec36d2c533644a58ff.png";
import imgWorkImage2 from "figma:asset/f3dd57fbdf37212d5690364194de02bf69abbc13.png";
import imgWorkImage3 from "figma:asset/b31bd5e970fe3ffac659110eeea378a745ff7ed3.png";
import imgWorkImage4 from "figma:asset/b9c7725f6d93f8528b997c7cef96311050774846.png";
import imgWorkImage5 from "figma:asset/9707da56b6d66364034006512d81ed2f99694fd8.png";
import imgServicesSection from "figma:asset/81331d0d9d1b1fb0fca778c863e500c33e127f16.png";
import { StaticImageData } from "next/image";

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  images: Array<{ src: StaticImageData; title: string; description: string }>;
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
          <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('${currentImage.src.src}')` }} />
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
  src: StaticImageData;
  title: string;
  description: string; 
  onClick: () => void; 
  className?: string;
}) {
  return (
    <div 
      className={`${className} cursor-pointer group relative overflow-hidden rounded-lg transition-transform hover:scale-105`}
      style={{ backgroundImage: `url('${src.src}')` }}
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

function WorkItem({ images, startIndex }: { images: typeof portfolioImages; startIndex: number }) {
  return (
    <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0 w-full">
      {images.slice(startIndex, startIndex + 3).map((image, index) => (
        <WorkImage
          key={startIndex + index}
          src={image.src}
          title={image.title}
          description={image.description}
          onClick={() => {}} // Will be handled by parent
        />
      ))}
    </div>
  );
}

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