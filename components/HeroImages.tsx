"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroImage = {
  src: string;
  alt: string;
};

type HeroImagesProps = {
  images: HeroImage[];
};

const HeroImages = ({ images }: HeroImagesProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isPaused) return;

    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, images.length, isPaused]);

  return (
    <div
      className="relative aspect-[4/3] h-full w-full overflow-hidden rounded-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentImage
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroImages;
