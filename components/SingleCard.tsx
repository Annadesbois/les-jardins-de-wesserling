import Image from "next/image";
import Link from "next/link";

export type SingleCardProps = {
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
  href: `/${string}/${string}`;
};

const SingleCard = ({
  title,
  caption,
  imageSrc,
  imageAlt,
  href,
}: SingleCardProps) => {
  return (
    <Link
      href={href}
      className="group text-center outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm md:text-base">{caption}</p>
        </div>
      </div>
      <h3 className="mt-3 text-lg font-semibold transition-colors group-hover:underline">
        {title}
      </h3>
    </Link>
  );
};

export default SingleCard;
