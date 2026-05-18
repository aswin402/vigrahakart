import { useState } from 'react';

interface ProductGalleryProps {
  image: string;
  name: string;
}

export function ProductGallery({ image, name }: ProductGalleryProps) {
  // We'll generate a few thumbnail variations from the same image since our mock data only has 1 image per product
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Generating 4 identical images for the gallery demo
  const images = [image, image, image, image];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-[4/5] md:aspect-square bg-ivory rounded-lg overflow-hidden border border-border/50 group">
        <img
          src={images[activeImageIndex]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Optional: Add a zoom instruction overlay that fades out */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3 md:gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImageIndex(index)}
            className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all duration-200 ${
              activeImageIndex === index
                ? 'border-temple-red shadow-sm'
                : 'border-transparent opacity-70 hover:opacity-100 hover:border-border'
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={img}
              alt={`${name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
