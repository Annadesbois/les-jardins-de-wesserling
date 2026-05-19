import Hero from "@/components/Hero";
import LinkButton from "@/components/LinkButton";
import Image from "next/image";

import type { PageProp } from "@/types/i18n";
import { createPageHelpers } from "@/lib/metadata";

// const { generateMetadata, getPageMessages } = createPageHelpers("support-us");

// export { generateMetadata };

const RestaurantPage = async ({params}: PageProp) => {
  const { locale } = await params;
  // const resto = await getPageMessages(params);
  return (
    <div className="page-layout text-center">
      <h1>Le Resto du Potager</h1>
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Le Resto du Potager aux Jardins de Wesserling"
        firstParagraph={
          "Le Resto du Potager offre un cadre original, immergé dans la végétation florale, légumière et aromatique, et dans un décor de tissus hérités de l’ancienne Manufacture d’Impression de Wesserling.  C’est un restaurant social, le service est assuré par les personnes en insertion professionnelles."
        }
        textPosition="right"
      />
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Le Resto du Potager aux Jardins de Wesserling"
        firstParagraph={
          "Déjeuner au Resto du Potager, c’est être solidaire des personnes en recherche d’emploi, ainsi que des agriculteurs de la montagne puisqu’une part des produits du Resto provient de leurs fermes. Et plus largement, cela contribue à la mise en valeur du patrimoine industriel remarquable de Wesserling. "
        }
        textPosition="left"
      />
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Le Resto du Potager aux Jardins de Wesserling"
        firstParagraph={
          "Les menus reflètent toutes les saveurs du potager : coupelles de crudités variées, tartes aux légumes, melba aux fruits de saison, soupes, sirops, ... S’y ajoutent les produits des agriculteurs de la montagne environnante : assiettes de charcuteries ou de fromages. "
        }
        textPosition="right"
      />
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Le Resto du Potager aux Jardins de Wesserling"
        firstParagraph={
          "Les légumes, petits fruits, aromates produits dans les jardins sont vendus en frais au Resto du Potager, ou transformés en confitures"
        }
        textPosition="left"
      />
      <LinkButton href={`/${locale}/contact`}>
        Contact et Réservation
      </LinkButton>
      <Image
              src="/leaf-divider.png"
              alt="Feuille de division"
              width={500}
              height={50}
              className="mx-auto mb-20 mt-6"
            />
      <h1 className="font-bold text-2xl">Menu</h1>
    </div>
  );
}
export default RestaurantPage