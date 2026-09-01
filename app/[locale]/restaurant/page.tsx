import Hero from "@/components/Hero";
import LinkButton from "@/components/LinkButton";
import Image from "next/image";

import type { PageProp } from "@/types/i18n";
import { createPageHelpers } from "@/lib/metadata";

const { generateMetadata, getPageMessages } = createPageHelpers("restaurant");

export { generateMetadata };

const RestaurantPage = async ({ params }: PageProp) => {
  const { locale } = await params;
  const restaurant = await getPageMessages(params);
  return (
    <div className="page-layout text-center">
      <h1>{restaurant.title}</h1>
      <Hero
        imageSrc="/photos/restau/restau-du-potager-steeve-josch.WEBP"
        imageAlt={restaurant.atmosphere.imageAlt}
        firstParagraph={restaurant.atmosphere.firstParagraph}
        textPosition="right"
      />
      <Hero
        imageSrc="/photos/restau/produits-fermiers.JPG"
        imageAlt={restaurant.solidarity.imageAlt}
        firstParagraph={restaurant.solidarity.firstParagraph}
        textPosition="left"
      />
      <Hero
        imageSrc="/photos/restau/tartes-flambees-au-restau-du-potager.JPG"
        imageAlt={restaurant.menu.imageAlt}
        firstParagraph={restaurant.menu.firstParagraph}
        textPosition="right"
      />
      <Hero
        imageSrc="/photos/restau/produits-frais-au-restau-du-potager.JPG"
        imageAlt={restaurant.produce.imageAlt}
        firstParagraph={restaurant.produce.firstParagraph}
        textPosition="left"
      />
      <LinkButton href={`/${locale}/contact`}>{restaurant.button}</LinkButton>
      <Image
        src="/leaf-divider.png"
        alt={restaurant.image}
        width={500}
        height={50}
        className="mx-auto mb-10 mt-10"
      />
      {/* <h1 className="font-bold text-2xl">{restaurant.menuTitle}</h1> */}
    </div>
  );
};
export default RestaurantPage;
