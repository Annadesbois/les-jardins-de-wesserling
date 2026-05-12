import Image from "next/image";

type HeroProps = {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  firstParagraph?: string;
  secondParagraph?: string;
  thirdParagraph?: string;
  fourthParagraph?: string;
  fifthParagraph?: string;
  sixthParagraph?: string;
  seventhParagraph?: string;
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

      <section className="flex w-full flex-col md:w-1/2 gap-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="bg-accent p-3 rounded-2xl font-bold">{subtitle}</p>}
        <p>{firstParagraph}</p>
        <p>{secondParagraph}</p>
        <p>{thirdParagraph}</p>
        <p>{fourthParagraph}</p>
        <p>{fifthParagraph}</p>
        <p>{sixthParagraph}</p>
        <p>{seventhParagraph}</p>
      </section>
    </div>
  );
};

export default Hero;
