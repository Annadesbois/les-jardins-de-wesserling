"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroImage = {
  src: string;
  alt: string;
};

type HeroImagesProps = {
  images: HeroImage[];
};

const AUTOPLAY_DELAY = 5000;
const SWIPE_THRESHOLD = 50;

const HeroImages = ({ images }: HeroImagesProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [resetAutoplay, setResetAutoplay] = useState(0);

  const pointerStartX = useRef<number | null>(null);

  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isPaused) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % images.length);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [hasMultipleImages, images.length, isPaused, resetAutoplay]);

  if (images.length === 0) return null;

  const showImage = (index: number) => {
    setCurrentImage(index);
    setResetAutoplay((value) => value + 1);
  };

  const showNextImage = () => {
    setCurrentImage((current) => (current + 1) % images.length);
    setResetAutoplay((value) => value + 1);
  };

  const showPreviousImage = () => {
    setCurrentImage((current) => (current - 1 + images.length) % images.length);
    setResetAutoplay((value) => value + 1);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") return;

    pointerStartX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsPaused(true);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;

    const difference = pointerStartX.current - event.clientX;

    if (difference > SWIPE_THRESHOLD) {
      showNextImage();
    } else if (difference < -SWIPE_THRESHOLD) {
      showPreviousImage();
    }

    pointerStartX.current = null;
    setIsPaused(false);
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
    setIsPaused(false);
  };

  return (
    <div
      className="relative aspect-[4/3] h-full w-full touch-pan-y overflow-hidden rounded-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className={`object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
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
              onClick={() => showImage(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={index === currentImage ? "true" : undefined}
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
