import Hero from "@/components/Hero";
import Link from "next/link";

import type { PageProp } from "@/types/i18n";
import { createPageHelpers } from "@/lib/metadata";

const { generateMetadata, getPageMessages } = createPageHelpers("festive");

export { generateMetadata };

const FestivePage = async ({ params }: PageProp) => {
  const festive = await getPageMessages(params);
  return (
    <div className="page-layout text-center font-bold">
      <h1>{festive.title}</h1>
      <p className="mb-14">
        {festive.intro.firstPart}
        <Link
          href="https://www.parc-wesserling.fr"
          target="blank"
          rel="noopener noreferrer"
          className="link font-bold"
        >
          {festive.intro.link}
        </Link>
        {festive.intro.secondPart}
      </p>

      <Hero
        images={[
          {
            src: "/photos/events/paques-en-folie.JPG",
            alt: festive.easter.imageAlt,
          },
        ]}
        title={festive.easter.title}
        subtitle={festive.easter.subtitle}
        firstParagraph={festive.easter.firstParagraph}
        secondParagraph={festive.easter.secondParagraph}
        thirdParagraph={festive.easter.thirdParagraph}
        textPosition="right"
      />
      <Hero
        images={[
          {
            src: "/photos/events/troc-jardin.JPG",
            alt: festive.troc.imageAlt,
          },
        ]}
        title={festive.troc.title}
        subtitle={festive.troc.subtitle}
        firstParagraph={festive.troc.firstParagraph}
        secondParagraph={festive.troc.secondParagraph}
        thirdParagraph={festive.troc.thirdParagraph}
        textPosition="left"
      />
      <Hero
        images={[
          {
            src: "/photos/events/festival-des-jardins-metisses.JPG",
            alt: festive.festival.imageAlt,
          },
        ]}
        title={festive.festival.title}
        subtitle={festive.festival.subtitle}
        firstParagraph={festive.festival.firstParagraph}
        secondParagraph={festive.festival.secondParagraph}
        textPosition="right"
      />
      <Hero
        images={[
          {
            src: "/photos/events/fete-de-la-musique.JPG",
            alt: festive.music.imageAlt,
          },
        ]}
        title={festive.music.title}
        subtitle={festive.music.subtitle}
        firstParagraph={festive.music.firstParagraph}
        secondParagraph={festive.music.secondParagraph}
        thirdParagraph={festive.music.thirdParagraph}
        textPosition="left"
      />
      <Hero
        images={[
          {
            src: "/photos/events/soirees-cocktail.JPG",
            alt: festive.cocktail.imageAlt,
          },
        ]}
        title={festive.cocktail.title}
        subtitle={festive.cocktail.subtitle}
        firstParagraph={festive.cocktail.firstParagraph}
        secondParagraph={festive.cocktail.secondParagraph}
        thirdParagraph={festive.cocktail.thirdParagraph}
        textPosition="right"
      />
      <Hero
        images={[
          {
            src: "/photos/events/feeries-nocturnes.jpg",
            alt: festive.nocturnes.imageAlt,
          },
        ]}
        title={festive.nocturnes.title}
        subtitle={
          <>
            {festive.nocturnes.subtitle.text}
            <br />
            <Link
              href="https://www.parc-wesserling.fr"
              target="blank"
              rel="noopener noreferrer"
              className="link"
            >
              {festive.nocturnes.subtitle.link}
            </Link>
          </>
        }
        firstParagraph={festive.nocturnes.firstParagraph}
        secondParagraph={festive.nocturnes.secondParagraph}
        thirdParagraph={festive.nocturnes.thirdParagraph}
        textPosition="left"
      />
      <Hero
        images={[
          {
            src: "/photos/events/fete-d'automne.JPG",
            alt: festive.automne.imageAlt,
          },
        ]}
        title={festive.automne.title}
        subtitle={festive.automne.subtitle}
        firstParagraph={festive.automne.firstParagraph}
        secondParagraph={festive.automne.secondParagraph}
        thirdParagraph={festive.automne.thirdParagraph}
        textPosition="right"
      />
      <Hero
        images={[
          {
            src: "/photos/events/noel-au-jardin.jpg",
            alt: festive.christmas.imageAlt,
          },
        ]}
        title={festive.christmas.title}
        subtitle={
          <>
            {festive.christmas.subtitle.text}
            <br />
            <Link
              href="https://www.parc-wesserling.fr"
              target="blank"
              rel="noopener noreferrer"
              className="link"
            >
              {festive.christmas.subtitle.link}
            </Link>
          </>
        }
        firstParagraph={festive.christmas.firstParagraph}
        secondParagraph={festive.christmas.secondParagraph}
        thirdParagraph={festive.christmas.thirdParagraph}
        textPosition="left"
      />
    </div>
  );
};
export default FestivePage;
