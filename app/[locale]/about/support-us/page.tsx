import LinkButton from "@/components/LinkButton";
import Image from "next/image";

import type { PageProp } from "@/types/i18n";
import { createPageHelpers } from "@/lib/metadata";

// const { generateMetadata, getPageMessages } = createPageHelpers("support-us");

// export { generateMetadata };

const SupportUsPage = async ({ params }: PageProp) => {
  const { locale } = await params;
  // const supportUs = await getPageMessages(params);

  return (
    <div className="page-layout">
      <h1>Soutenir et participer</h1>
      <article className="mb-8 flex flex-col items-center text-center">
        <h2>Visiter les jardins</h2>
        <Image
          src="/restau-du-potager-steeve-josch.webp"
          alt="Les jardins"
          width={600}
          height={400}
        />
        <p className="my-6">
          Visiter les jardins, acheter ses productions ou consommer au Resto du
          potager est un encouragement pour les salariés en insertion
          professionnelle qui y travaillent.
        </p>
        <LinkButton href={`/${locale}/contact`} className="mt-4">
          Plan d'accès et contact
        </LinkButton>
        <LinkButton
          href="https://www.parc-wesserling.fr/billetterie/"
          external
          className="mt-4"
        >
          Billeterie sur le site du Parc de Wesserling
        </LinkButton>
      </article>
      <article className="mb-8 flex flex-col items-center text-center">
        <h2>Adhérer à l’association</h2>
        <Image
          src="/restau-du-potager-steeve-josch.webp"
          alt="Les jardins"
          width={600}
          height={400}
        />
        <div className="flex flex-col gap-4 my-6">
          <p>
            Adhérer à l’association ou devenir donateur offre un avantage fiscal
            de 66%, l’association étant reconnue d’intérêt public. Cela
            participe au financement des actions en faveur de l’emploi.
          </p>
          <p>
            Pour adhérer à l’association Les Jardins de Wesserling, remplissez
            le bulletin d’adhésion et renvoyez-le avec le règlement par chèque à
            « Association Les Jardins de Wesserling 16 rue de Ranspach 68470
            Husseren-Wesserling ».
          </p>
          <p>
            Le règlement peut également être fait par virement bancaire, ou en
            se rendant sur place dans les bureaux de l’association.
          </p>
        </div>

        <LinkButton href={`/${locale}/contact`} className="mt-4">
          Télécharger le bulletin d'adhésion
        </LinkButton>
      </article>
      <article className="mb-6 flex flex-col items-center text-center">
        <h2>Participer à la vie de l’association</h2>
        <Image
          src="/restau-du-potager-steeve-josch.webp"
          alt="Les jardins"
          width={600}
          height={400}
        />
        <p className="my-6">
          Participer aux activités de l’association contribue à ses objectifs
          d’intérêt public.
        </p>
        <LinkButton href={`/${locale}/contact`} className="mt-4">
          Nous contacter
        </LinkButton>
      </article>
    </div>
  );
};
export default SupportUsPage;
