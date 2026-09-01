import Image from "next/image";

import LinkButton from "@/components/LinkButton";

import type { PageProp } from "@/types/i18n";
import { createPageHelpers } from "@/lib/metadata";

const { generateMetadata, getPageMessages } = createPageHelpers("supportUs");

export { generateMetadata };

const SupportUsPage = async ({ params }: PageProp) => {
  const { locale } = await params;
  const supportUs = await getPageMessages(params);

  return (
    <div className="page-layout">
      <h1>{supportUs.title}</h1>

      <article className="mb-8 flex flex-col items-center text-center">
        <h2>{supportUs.visit.title}</h2>

        <Image
          src="/photos/asso/visitez-les-jardins.JPG"
          alt={supportUs.visit.imageAlt}
          width={600}
          height={400}
        />

        <p className="my-6">{supportUs.visit.paragraph}</p>

        <LinkButton href={`/${locale}/contact`} className="mt-4">
          {supportUs.visit.contactButton}
        </LinkButton>

        <LinkButton
          href="https://www.parc-wesserling.fr/billetterie/"
          external
          className="mt-4"
        >
          {supportUs.visit.ticketButton}
        </LinkButton>
      </article>

      <article className="mb-8 flex flex-col items-center text-center">
        <h2>{supportUs.membership.title}</h2>

        <Image
          src="/photos/asso/adherez-a-l'association.JPG"
          alt={supportUs.membership.imageAlt}
          width={600}
          height={400}
        />

        <div className="flex flex-col gap-4 my-6">
          <p>{supportUs.membership.firstParagraph}</p>

          <p>{supportUs.membership.secondParagraph}</p>

          <p>{supportUs.membership.thirdParagraph}</p>
        </div>

        <LinkButton href="/2026-plaquette-adhesion.pdf" external className="mt-4">
          {supportUs.membership.button}
        </LinkButton>
      </article>

      <article className="mb-6 flex flex-col items-center text-center">
        <h2>{supportUs.participation.title}</h2>

        <Image
          src="/photos/asso/devenez-benevole.JPG"
          alt={supportUs.participation.imageAlt}
          width={600}
          height={400}
        />

        <p className="my-6">{supportUs.participation.paragraph}</p>

        <LinkButton href={`/${locale}/contact`} className="mt-4">
          {supportUs.participation.button}
        </LinkButton>
      </article>
    </div>
  );
};

export default SupportUsPage;
