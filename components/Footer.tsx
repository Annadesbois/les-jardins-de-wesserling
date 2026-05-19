import Image from "next/image";

import fse from "@/public/logos/fse.jpeg";
import republicFrancaise from "@/public/logos/republique-francaise.svg";
import grandEst from "@/public/logos/region-grand-est.png";
import alsace from "@/public/logos/collectivite-europeenne-alsace.png";
import thurDoller from "@/public/logos/pays-thur-doller.png";
import leader from "@/public/logos/feader-leader.jpg";
import stAmarin from "@/public/logos/vallée-de-st-amarin.svg";

import ab from "@/public/logos/ab_logo.png";
import eurofeuille from "@/public/logos/eurofeuille_logo.png";
import potagers from "@/public/logos/potagers-de-france.jpg";
import jardin from "@/public/logos/jardin-remarquable.jpg";
import pnr from "@/public/logos/valeur-pnr-logo.png";

import fb from "@/public/logos/Facebook_Logo_Primary.png";
import instagram from "@/public/logos/Instagram_Glyph_Gradient.png";

import type { FooterMessages, FooterProps } from "@/types/i18n";

const Footer = ({ messages }: FooterProps) => {
  const footerMessages = messages as FooterMessages;
  return (
    <footer className="mt-8 bg-surface-2 px-4 py-8">
      <div className="h-px self-stretch bg-primary shadow" />
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        {/* Social media */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/AssociationJW/"
            aria-label={footerMessages.fbAria}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-28 items-center justify-center rounded-xl p-4"
          >
            <Image
              src={fb}
              alt={footerMessages.fbAlt}
              className="h-10 w-auto"
            ></Image>
          </a>
          <a
            href="https://www.instagram.com/lesjardinsdewesserling/"
            aria-label={footerMessages.instagramAria}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-28 items-center justify-center rounded-xl p-4"
          >
            <Image
              src={instagram}
              alt={footerMessages.instagramAlt}
              className="h-10 w-auto"
            ></Image>
          </a>
        </div>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start lg:gap-10">
          {/* Funders */}
          <div className="lg:justify-self-end lg:max-w-md">
            <p className="mb-4 text-center font-bold">
              Nos partenaires financiers
            </p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4  md:grid-cols-5">
              <a
                href="https://www.europe-en-france.gouv.fr/fr/fonds-europeens-2014-2020/fonds-social-europeen-fse"
                aria-label={footerMessages.fondsSocialEuropeenAria}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 items-center justify-center rounded-xl p-4"
              >
                <Image
                  src={fse}
                  alt={footerMessages.fondsSocialEuropeenAlt}
                  className="logo-image"
                />
              </a>
              <a
                href="https://www.republique-francaise.fr/"
                aria-label={footerMessages.republiqueFrancaiseAria}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 items-center justify-center rounded-xl p-4"
              >
                <Image
                  src={republicFrancaise}
                  alt={footerMessages.republiqueFrancaiseAlt}
                  className="logo-image"
                />
              </a>
              <a
                href="https://www.grandest.fr/"
                aria-label={footerMessages.grandEstAria}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 items-center justify-center rounded-xl p-4"
              >
                <Image
                  src={grandEst}
                  alt={footerMessages.grandEstAlt}
                  className="logo-image"
                />
              </a>
              <a
                href="https://www.alsace.fr/"
                aria-label={footerMessages.alsaceAria}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 items-center justify-center rounded-xl p-4"
              >
                <Image
                  src={alsace}
                  alt={footerMessages.alsaceAlt}
                  className="logo-image"
                />
              </a>
              <a
                href="https://www.tourisme-thur-doller.fr/"
                aria-label={footerMessages.thurDollerAria}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 items-center justify-center rounded-xl p-4"
              >
                <Image
                  src={thurDoller}
                  alt={footerMessages.thurDollerAlt}
                  className="logo-image"
                />
              </a>
              <a
                href="https://www.europe-en-france.gouv.fr/en/leader-accompagne-territoires-ruraux"
                aria-label={footerMessages.leaderAria}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 items-center justify-center rounded-xl p-4"
              >
                <Image
                  src={leader}
                  alt={footerMessages.leaderAlt}
                  className="logo-image"
                />
              </a>
              <a
                href="https://www.saint-amarin.com/"
                aria-label={footerMessages.stAmarinAria}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 items-center justify-center rounded-xl p-4"
              >
                <Image
                  src={stAmarin}
                  alt={footerMessages.stAmarinAlt}
                  className="logo-image"
                />
              </a>
            </div>
          </div>

          {/* Separation line */}
          <div className="hidden w-px self-stretch bg-accent lg:block" />

          {/* Certification labels */}
          <div className="lg:justify-self-start lg:max-w-md">
            <p className="mb-4 text-center font-bold">Nos labels de qualité</p>
            <div className="grid grid-cols-3 items-center justify-items-center gap-4 sm:grid-cols-4 md:grid-cols-5">
              <Image
                src={ab}
                alt={footerMessages.abAlt}
                className="logo-image"
              />
              <Image
                src={eurofeuille}
                alt={footerMessages.eurofeuilleAlt}
                className="logo-image"
              />
              <Image
                src={potagers}
                alt={footerMessages.potagersAlt}
                className="logo-image"
              />
              <Image
                src={jardin}
                alt={footerMessages.jardinAlt}
                className="logo-image"
              />
              <Image
                src={pnr}
                alt={footerMessages.pnrAlt}
                className="logo-image"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
