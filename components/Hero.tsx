import Image from "next/image";
import React from "react";

type HeroProps = {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle?: React.ReactNode;
  firstParagraph?: React.ReactNode;
  secondParagraph?: React.ReactNode;
  thirdParagraph?: React.ReactNode;
  fourthParagraph?: React.ReactNode;
  fifthParagraph?: React.ReactNode;
  sixthParagraph?: React.ReactNode;
  seventhParagraph?: React.ReactNode;
  textPosition?: "left" | "right";
};

const Hero = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
  fifthParagraph,
  sixthParagraph,
  seventhParagraph,
  textPosition = "right",
}: HeroProps) => {
  const isTextLeft = textPosition === "left";

  return (
    <div
      className={`flex flex-col gap-6 md:items-stretch mb-12 ${
        isTextLeft ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={600}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      <section
        className="flex w-full flex-col gap-3 md:w-1/2 justify-center"
      >
        {title && <h1 className="text-2xl font-bold">{title}</h1>}
        {subtitle && (
          <p className="bg-accent p-3 rounded-2xl font-bold">{subtitle}</p>
        )}
        {firstParagraph && <p>{firstParagraph}</p>}
        {secondParagraph && <p>{secondParagraph}</p>}
        {thirdParagraph && <p>{thirdParagraph}</p>}
        {fourthParagraph && <p>{fourthParagraph}</p>}
        {fifthParagraph && <p>{fifthParagraph}</p>}
        {sixthParagraph && <p>{sixthParagraph}</p>}
        {seventhParagraph && <p>{seventhParagraph}</p>}
      </section>
    </div>
  );
};

export default Hero;
