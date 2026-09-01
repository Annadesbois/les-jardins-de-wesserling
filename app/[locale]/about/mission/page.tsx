import Link from "next/link";

import Hero from "@/components/Hero";
import LinkButton from "@/components/LinkButton";

import { createPageHelpers } from "@/lib/metadata";
import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("mission");

export { generateMetadata };

const MissionPage = async ({ params }: PageProp) => {
  const { locale } = await params;
  const mission = await getPageMessages(params);

  return (
    <div className="page-layout text-justify">
      <h1>{mission.title}</h1>

      <Hero
        imageSrc="/photos/asso/mission-sociale-1.JPG"
        imageAlt={mission.insertionWorksite.imageAlt}
        title={mission.insertionWorksite.title}
        firstParagraph={
          <>
            {mission.insertionWorksite.firstParagraphStart}{" "}
            <Link
              href="https://travail-emploi.gouv.fr/les-ateliers-et-chantiers-dinsertion-aci"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {mission.insertionWorksite.aciLinkLabel}
            </Link>{" "}
            {mission.insertionWorksite.firstParagraphEnd}
          </>
        }
        secondParagraph={
          <>
            {mission.insertionWorksite.secondParagraphStart}{" "}
            <Link
              href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2284"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {mission.insertionWorksite.iaeLinkLabel}
            </Link>
            {mission.insertionWorksite.secondParagraphMiddle}{" "}
            <Link
              href="https://www.economie.gouv.fr/ess"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {mission.insertionWorksite.essLinkLabel}
            </Link>
            {mission.insertionWorksite.secondParagraphEnd}
          </>
        }
      />

      <Hero
        imageSrc="/photos/asso/mission-sociale-2.jpg"
        imageAlt={mission.employees.imageAlt}
        title={mission.employees.title}
        textPosition="left"
        firstParagraph={mission.employees.firstParagraph}
        secondParagraph={mission.employees.secondParagraph}
        thirdParagraph={mission.employees.thirdParagraph}
      />

      <h3 className="text-primary font-bold text-3xl p-3 rounded-4xl text-center mt-8 mb-4">
        {mission.application.title}
      </h3>

      <p className="font-bold">{mission.application.introduction}</p>

      <ul>
        <li>{mission.application.eligibility.longTermUnemployed}</li>
        <li>{mission.application.eligibility.youngAndSenior}</li>
        <li>{mission.application.eligibility.singleParents}</li>
        <li>{mission.application.eligibility.rsaRecipients}</li>
        <li>{mission.application.eligibility.disabledPeople}</li>
        <li>{mission.application.eligibility.newcomers}</li>
      </ul>

      <p className="font-bold text-center">
        {mission.application.applicationProcess}
      </p>

      <p className="font-bold text-center">
        {mission.application.franceTravailInfo}
      </p>

      <LinkButton href={`/${locale}/contact`} className="text-xl mt-4">
        {mission.application.contactButton}
      </LinkButton>
    </div>
  );
};

export default MissionPage;
