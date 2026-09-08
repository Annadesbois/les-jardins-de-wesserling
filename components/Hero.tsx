import React from "react";

import HeroImages from "./HeroImages";
import LinkButton from "./LinkButton";

type HeroButton = {
  href: string;
  label: string;
  external?: boolean;
};

type HeroImage = {
  src: string;
  alt: string;
};

type HeroProps = {
  locale?: string;
  images: HeroImage[];
  title?: string;
  subtitle?: React.ReactNode;
  description?: string;
  firstParagraph?: React.ReactNode;
  secondParagraph?: React.ReactNode;
  thirdParagraph?: React.ReactNode;
  fourthParagraph?: React.ReactNode;
  fifthParagraph?: React.ReactNode;
  sixthParagraph?: React.ReactNode;
  seventhParagraph?: React.ReactNode;
  textPosition?: "left" | "right";
  button?: HeroButton;
};

const Hero = ({
  locale,
  images,
  title,
  subtitle,
  description,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
  fifthParagraph,
  sixthParagraph,
  seventhParagraph,
  textPosition = "right",
  button,
}: HeroProps) => {
  const isTextLeft = textPosition === "left";

  return (
    <div
      className={`flex flex-col gap-6 md:items-stretch mb-12 ${
        isTextLeft ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-1/2">
        <HeroImages images={images} />
      </div>

      <section className="flex w-full flex-col gap-3 md:w-1/2 justify-center">
        {title && <h1 className="text-2xl font-bold">{title}</h1>}
        {subtitle && (
          <p className="bg-accent p-3 rounded-2xl font-bold">{subtitle}</p>
        )}
        {description && <p className="font-bold text-center">{description}</p>}
        {firstParagraph && <p>{firstParagraph}</p>}
        {secondParagraph && <p>{secondParagraph}</p>}
        {thirdParagraph && <p>{thirdParagraph}</p>}
        {fourthParagraph && <p>{fourthParagraph}</p>}
        {fifthParagraph && <p>{fifthParagraph}</p>}
        {sixthParagraph && <p>{sixthParagraph}</p>}
        {seventhParagraph && <p>{seventhParagraph}</p>}

        {button && (
          <LinkButton
            href={button.external ? button.href : `/${locale}${button.href}`}
            external={button.external}
            className="mt-4"
          >
            {button.label}
          </LinkButton>
        )}
      </section>
    </div>
  );
};

export default Hero;
