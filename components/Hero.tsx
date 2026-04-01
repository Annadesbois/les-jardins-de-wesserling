import Image from "next/image";

type HeroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  textPosition?: "left" | "right";
};

const Hero = ({
  imageSrc,
  imageAlt,
  title,
  description,
  textPosition = "right",
}: HeroProps) => {
  const isTextLeft = textPosition === "left";

  return (
    <div
      className={`flex flex-col items-center gap-6 md:items-stretch ${
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

      <section className="flex w-full flex-col justify-center md:w-1/2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-4 text-base leading-relaxed">{description}</p>
      </section>
    </div>
  );
};

export default Hero;
