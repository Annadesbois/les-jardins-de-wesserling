import Image from "next/image";

import fse from "@/public/logos/fse.jpeg";
import republicFrancaise from "@/public/logos/republique-francaise.svg";
import grandEst from "@/public/logos/region-grand-est.png";
import alsace from "@/public/logos/collectivite-europeenne-alsace.png";
import thurDoller from "@/public/logos/pays-thur-doller.png";
import leader from "@/public/logos/feader-leader.jpg";
import stAmarin from "@/public/logos/vallée-de-st-amarin.svg";

import type { FooterMessages, FooterProps } from "@/types/i18n";

const Footer = ({ messages }: FooterProps) => {
  const footerMessages = messages as FooterMessages;
  return (
    <footer className="relative flex gap-8 md:gap-12 lg:gap-16 justify-center bg-surface-2 mt-8 py-5">
      <a
        href="https://www.europe-en-france.gouv.fr/fr/fonds-europeens-2014-2020/fonds-social-europeen-fse"
        aria-label={footerMessages.fondsSocialEuropeenAria}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={fse}
          alt={footerMessages.fondsSocialEuropeenAlt}
          width={100}
        />
      </a>
      <a
        href="https://www.republique-francaise.fr/"
        aria-label={footerMessages.republiqueFrancaiseAria}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={republicFrancaise}
          alt={footerMessages.republiqueFrancaiseAlt}
          width={100}
        />
      </a>
      <a
        href="https://www.grandest.fr/"
        aria-label={footerMessages.grandEstAria}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={grandEst} alt={footerMessages.grandEstAlt} width={100} />
      </a>
      <a
        href="https://www.alsace.fr/"
        aria-label={footerMessages.alsaceAria}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={alsace} alt={footerMessages.alsaceAlt} width={100} />
      </a>
      <a
        href="https://www.tourisme-thur-doller.fr/"
        aria-label={footerMessages.thurDollerAria}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={thurDoller}
          alt={footerMessages.thurDollerAlt}
          width={100}
        />
      </a>
      <a
        href="https://www.europe-en-france.gouv.fr/en/leader-accompagne-territoires-ruraux"
        aria-label={footerMessages.giteDeFranceAria}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={leader} alt={footerMessages.giteDeFranceAlt} width={100} />
      </a>
      <a
        href="https://www.saint-amarin.com/"
        aria-label={footerMessages.stAmarinAria}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={stAmarin} alt={footerMessages.stAmarinAlt} width={100} />
      </a>
    </footer>
  );
};
export default Footer;
