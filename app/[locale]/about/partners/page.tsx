import Image from "next/image";
import Link from "next/link";

import fse from "@/public/logos/fse.jpeg";
import republicFrancaise from "@/public/logos/republique-francaise.svg";
import grandEst from "@/public/logos/region-grand-est.png";
import alsace from "@/public/logos/collectivite-europeenne-alsace.png";
import thurDoller from "@/public/logos/pays-thur-doller.png";
import stAmarin from "@/public/logos/vallée-de-st-amarin.svg";
import alliance from "@/public/logos/fondation-alliance-cairpsa-carpreca.jpg";
import sm4 from "@/public/logos/sm4.png";
import total from "@/public/logos/total-energies.jpg";
import patrimoine from "@/public/logos/fondation-du-patrimoine.png";
import hermes from "@/public/logos/fondation-hermes.png";

import type { PageProp } from "@/types/i18n";
import { createPageHelpers } from "@/lib/metadata";

const { generateMetadata, getPageMessages } = createPageHelpers("partners");

export { generateMetadata };

const PartnersPage = async ({ params }: PageProp) => {
  const partners = await getPageMessages(params);

  return (
    <div className="page-layout">
      <section>
        <h1 className="pb-8">{partners.title}</h1>

        <h2>{partners.financialPartners.title}</h2>

        <p className="text-justify">
          {partners.financialPartners.firstParagraph}
        </p>

        <div className="flex flex-wrap relative gap-6 md:gap-8 lg:gap-12 py-14 px-3 md:px-14 justify-center items-center">
          <Image
            src={stAmarin}
            alt={partners.financialPartners.logos.stAmarinAlt}
            width={70}
          />

          <Image
            src={thurDoller}
            alt={partners.financialPartners.logos.thurDollerAlt}
            width={70}
          />

          <Image
            src={alsace}
            alt={partners.financialPartners.logos.alsaceAlt}
            width={70}
          />

          <Image
            src={republicFrancaise}
            alt={partners.financialPartners.logos.republiqueFrancaiseAlt}
            width={70}
          />

          <Image
            src={fse}
            alt={partners.financialPartners.logos.fondsSocialEuropeenAlt}
            width={70}
          />
        </div>

        <p className="text-justify">
          {partners.financialPartners.secondParagraph}
        </p>

        <div className="flex flex-wrap relative gap-6 md:gap-8 lg:gap-12 py-14 px-3 md:px-14 justify-center items-center">
          <Image
            src={grandEst}
            alt={partners.financialPartners.logos.grandEstAlt}
            width={70}
          />

          <Image
            src={sm4}
            alt={partners.financialPartners.logos.sm4Alt}
            width={70}
          />

          <Image
            src={alliance}
            alt={partners.financialPartners.logos.allianceAlt}
            width={70}
          />

          <Image
            src={patrimoine}
            alt={partners.financialPartners.logos.fondationPatrimoineAlt}
            width={70}
          />

          <Image
            src={total}
            alt={partners.financialPartners.logos.totalEnergiesAlt}
            width={70}
          />

          <Image
            src={hermes}
            alt={partners.financialPartners.logos.hermesAlt}
            width={70}
          />
        </div>
      </section>

      <section className="text-justify">
        <h2>
          <Link
            href="https://www.europe-en-france.gouv.fr/fr/fonds-europeens-2014-2020/fonds-social-europeen-fse"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {partners.fse.title}
          </Link>
        </h2>

        <p>{partners.fse.firstParagraph}</p>

        <p>{partners.fse.secondParagraph}</p>

        <p>{partners.fse.thirdParagraph}</p>

        <ul className="space-y-2">
          <li>
            {partners.fse.firstListItemStart}{" "}
            <Link
              href="https://fse.gouv.fr/programmes-nationaux/le-programme-national-fse"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {partners.fse.nationalProgrammeLinkLabel}
            </Link>
            {partners.fse.firstListItemEnd}
          </li>

          <li>
            {partners.fse.secondListItemStart}{" "}
            <Link
              href="https://fse.gouv.fr/programmes-nationaux/le-programme-national-seaa"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {partners.fse.foodAidProgrammeLinkLabel}
            </Link>
            {partners.fse.secondListItemEnd}
          </li>

          <li>
            {partners.fse.thirdListItemStart}{" "}
            <Link
              href="https://www.europe-en-france.gouv.fr/fr/programmes-europeens-2021-2027"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {partners.fse.learnMoreLinkLabel}
            </Link>
            {partners.fse.thirdListItemEnd}
          </li>
        </ul>

        <p>{partners.fse.fourthParagraph}</p>

        <ul className="space-y-2">
          <li>
            {partners.fse.firstListItem}{" "}
          </li>

          <li>
            {partners.fse.secondListItem}{" "}
          </li>

          <li>
            {partners.fse.thirdListItem}{" "}
          </li>
        </ul>

      </section>

      <section className="text-justify space-y-6">
        <h2>{partners.technicalPartners.title}</h2>

        <h3>{partners.technicalPartners.textileParkAssociation.title}</h3>

        <p>
          {partners.technicalPartners.textileParkAssociation.firstParagraph}
        </p>

        <p>
          {partners.technicalPartners.textileParkAssociation.secondParagraph}
        </p>

        <p>
          {partners.technicalPartners.textileParkAssociation.thirdParagraph}
        </p>

        <h3 className="pt-6">
          {partners.technicalPartners.otherAssociations.title}
        </h3>

        <p>{partners.technicalPartners.otherAssociations.paragraph}</p>
      </section>
    </div>
  );
};

export default PartnersPage;
