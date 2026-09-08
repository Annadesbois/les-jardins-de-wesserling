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

  const image = images[currentImage];

  return (
    <div className="relative h-full w-full">
      <Image
        src={image.src}
        alt={image.alt}
        width={800}
        height={600}
        className="h-full w-full rounded-xl object-cover"
      />

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/30 hover:bg-white/60 px-3 py-2 shadow"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/30 hover:bg-white/60 px-3 py-2 shadow"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default HeroImages;
