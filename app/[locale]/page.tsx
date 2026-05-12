import Hero from "@/components/Hero";
import { SingleCardProps } from "@/components/SingleCard";
import ThreeCards from "@/components/ThreeCards";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("home");

export { generateMetadata };




const HomePage = async ({ params }: PageProp) => {
  const {locale} = await params;
  const home = await getPageMessages(params);

  const cards: SingleCardProps[] = [
    {
      title: "Notre association",
      caption: "Découvrez notre histoire, nos valeurs et notre équipe",
      imageSrc: "/restau-du-potager-steeve-josch.webp",
      imageAlt: "Photo de l'association des Jardins de Wesserling",
      href: `/${locale}/about/association`,
    },
    {
      title: "Visiter les jardins",
      caption:
        "Explorez les différents espaces des Jardins de Wesserling et planifiez votre visite",
      imageSrc: "/restau-du-potager-steeve-josch.webp",
      imageAlt: "Photo des Jardins de Wesserling",
      href: `/${locale}/vegetable-garden/description`,
    },
    {
      title: "Animations festives",
      caption:
        "Participez à nos événements et animations tout au long de l'année",
      imageSrc: "/restau-du-potager-steeve-josch.webp",
      imageAlt: "Photo des jardins en fête",
      href: `/${locale}/festive-entertainment`,
    },
  ];

  return (
    <div className="content-area relative fabric-surface-light flex flex-col gap-6 p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm text-center font-bold">
      <h1 className="text-2xl md:mb-4">
        {home.hero.title}
        <br className="block md:hidden" />
        Jardins de Wesserling
      </h1>
      <Hero
        imageSrc={"/restau-du-potager-steeve-josch.webp"}
        imageAlt={"Restaurant du potager aux Jardins de Wesserling"}
        firstParagraph={
          "Depuis 2000, l’association Les Jardins de Wesserling œuvre à la reconversion du Parc de Wesserling en un lieu vivant, créatif et solidaire, au cœur du Massif Vosgien."
        }
        secondParagraph={
          "À travers les jardins potagers, les animations et les aménagements pédagogiques, l’association valorise ce patrimoine tout en développant l’insertion professionnelle et l’entraide locale."
        }
        thirdParagraph={
          "Aujourd’hui, une vingtaine de personnes en insertion, accompagnées par une équipe salariée et de nombreux bénévoles, participent chaque année à la vie et au développement des jardins."
        }
        fourthParagraph={
          "Les Jardins de Wesserling sont avant tout un espace de partage, de créativité et de transmission, ouvert à toutes celles et ceux qui souhaitent s’impliquer ou simplement découvrir le lieu."
        }
        fifthParagraph="Bienvenue à toutes celles et ceux qui souhaitent nous rejoindre."
        sixthParagraph="Pour le conseil d’administration"
        seventhParagraph="Georgette Tacquard, présidente"
        textPosition={"right"}
      />
      <ThreeCards cards={cards} />
    </div>
  );
};

export default HomePage;
