import Image from "next/image";

import Hero from "@/components/Hero";
import LinkButton from "@/components/LinkButton";
import { SingleCardProps } from "@/components/SingleCard";
import ThreeCards from "@/components/ThreeCards";

import { createPageHelpers } from "@/lib/metadata";
import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("home");

export { generateMetadata };

const HomePage = async ({ params }: PageProp) => {
  const { locale } = await params;
  const home = await getPageMessages(params);

  const cards: SingleCardProps[] = [
    {
      title: home.cardOne.title,
      caption: home.cardOne.caption,
      imageSrc: "/restau-du-potager-steeve-josch.webp",
      imageAlt: home.cardOne.imageAlt,
      href: `/${locale}/about/association`,
    },
    {
      title: home.cardTwo.title,
      caption: home.cardTwo.caption,
      imageSrc: "/restau-du-potager-steeve-josch.webp",
      imageAlt: home.cardTwo.imageAlt,
      href: `/${locale}/garden`,
    },
    {
      title: home.cardThree.title,
      caption: home.cardThree.caption,
      imageSrc: "/restau-du-potager-steeve-josch.webp",
      imageAlt: home.cardThree.imageAlt,
      href: `/${locale}/festive-entertainment`,
    },
  ];

  return (
    <div className="page-layout text-center font-bold">
      <h1>
        {home.hero.title}
        <br className="block md:hidden" />
        Jardins de Wesserling
      </h1>
      <Hero
        imageSrc={"/restau-du-potager-steeve-josch.webp"}
        imageAlt={home.hero.imageAlt}
        firstParagraph={home.hero.firstParagraph}
        secondParagraph={home.hero.secondParagraph}
        thirdParagraph={home.hero.thirdParagraph}
        fourthParagraph={home.hero.fourthParagraph}
        fifthParagraph={home.hero.fifthParagraph}
        sixthParagraph={home.hero.sixthParagraph}
        seventhParagraph={home.hero.seventhParagraph}
        textPosition={"right"}
      />
      <Image
        src="/leaf-divider.png"
        alt={home.image}
        width={500}
        height={50}
        className="mx-auto mb-20 mt-6"
      />
      <ThreeCards cards={cards} />
      <LinkButton
        href="https://www.parc-wesserling.fr/billetterie/"
        external
        className="mt-4"
      >
        {home.button}
      </LinkButton>
    </div>
  );
};

export default HomePage;
