"use client";

import Image from "next/image";
import { useState } from "react";

type HeroImage = {
  src: string;
  alt: string;
};

type HeroImagesProps = {
  images: HeroImage[];
};

const HeroImages = ({ images }: HeroImagesProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const hasMultipleImages = images.length > 1;

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setCurrentImage((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="relative aspect-[4/3] h-full w-full overflow-hidden rounded-xl">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/40 px-3 py-2 shadow transition-colors hover:bg-white/70"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/40 px-3 py-2 shadow transition-colors hover:bg-white/70"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default HeroImages;
