import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

import type { PageProp } from "@/types/i18n";
import { createPageHelpers } from "@/lib/metadata";
import LinkButton from '@/components/LinkButton';

const { generateMetadata, getPageMessages } = createPageHelpers("garden");

export { generateMetadata };

const GardenPage = async ({ params }: PageProp) => {
  const { locale } = await params;
  const garden = await getPageMessages(params);

  return (
    <div className="page-layout">
      <h1>{garden.title}</h1>
      <section className="text-center">
        <h3 className="pb-10">
          {garden.park.intro1}{" "}
          <Link
            href="https://www.parc-wesserling.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {garden.park.link1}
          </Link>
          {garden.park.intro2}{" "}
          <Link
            href="https://www.erih.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {garden.park.link2}{" "}
          </Link>
          {garden.park.intro3}
        </h3>
        <p>{garden.park.intro4}</p>
        <div className="mt-10 flex flex-col gap-4 md:gap-0">
          <Hero
            imageSrc="/photos/jardins/parc/chateau-du-parc-de-wesserling.JPG"
            imageAlt={garden.park.reception.imageAlt}
            description={garden.park.reception.description}
            textPosition="right"
          />
          <Hero
            imageSrc="/photos/jardins/parc/festival-des-jardins-metisses.JPG"
            imageAlt={garden.park.garden.imageAlt}
            description={garden.park.garden.description}
            textPosition="left"
          />
          <Hero
            imageSrc="/photos/jardins/parc/ferme-du-parc-de-wesserling-anes.JPG"
            imageAlt={garden.park.farm.imageAlt}
            description={garden.park.farm.description}
            textPosition="right"
          />
          <Hero
            imageSrc="/photos/jardins/parc/grande-chaufferie-du-parc-de-wesserling.JPG"
            imageAlt={garden.park.factory.imageAlt}
            description={garden.park.factory.description}
            textPosition="left"
          />
          <Hero
            imageSrc="/photos/jardins/parc/grande-chaufferie-du-parc-de-wesserling.JPG"
            imageAlt={garden.park.shop.imageAlt}
            description={garden.park.shop.description}
            textPosition="right"
          />
        </div>
        <p className="font-bold pt-6">{garden.park.association}</p>
      </section>
      <LinkButton href="https://www.parc-wesserling.fr/billetterie/" external>
        {garden.park.button}
      </LinkButton>
      <Image
        src="/leaf-divider.png"
        alt={garden.image}
        width={500}
        height={50}
        className="mx-auto mb-20 mt-16"
      />
      <section className="md:mt-8">
        <h2 className="text-center">{garden.garden.intro}</h2>
        <div className="mt-10">
          <Hero
            imageSrc="/photos/jardins/potager/allee-centrale-du-potager.JPG"
            imageAlt={garden.garden.centralPath.imageAlt}
            description={garden.garden.centralPath.description}
            textPosition="right"
          />
          <Hero
            imageSrc="/photos/jardins/potager/potager-pedagogique.JPG"
            imageAlt={garden.garden.pedagogy.imageAlt}
            description={garden.garden.pedagogy.description}
            textPosition="left"
          />
          <Hero
            imageSrc="/photos/jardins/potager/plantes-aromatiques.JPG"
            imageAlt={garden.garden.orchard.imageAlt}
            description={garden.garden.orchard.description}
            locale={locale}
            button={{
              href: "/restaurant",
              label: garden.garden.orchard.button,
            }}
            textPosition="right"
          />
          <Hero
            imageSrc="/photos/jardins/potager/banc-pour-se-reposer-dans-les-jardins.JPG"
            imageAlt={garden.garden.accessibility.imageAlt}
            description={garden.garden.accessibility.description}
            textPosition="left"
          />
        </div>
        <p className="text-center">{garden.garden.membership}</p>
        <LinkButton href={`/${locale}/about/support-us`} className="mt-12">
          {garden.garden.button}
        </LinkButton>
      </section>
    </div>
  );
};
export default GardenPage;
