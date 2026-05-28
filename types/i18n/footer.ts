import type { Locale } from "@/lib/i18n.config";
import sm4 from '@/public/logos/sm4.png';
import alliance from '@/public/logos/fondation-alliance-cairpsa-carpreca.jpg';
import patrimoine from '@/public/logos/fondation-du-patrimoine.png';
import total from '@/public/logos/total-energies.jpg';

export type FooterMessages = {
  financialPartners: string;
  fondsSocialEuropeenAria: string;
  fondsSocialEuropeenAlt: string;
  republiqueFrancaiseAria: string;
  republiqueFrancaiseAlt: string;
  grandEstAria: string;
  grandEstAlt: string;
  alsaceAria: string;
  alsaceAlt: string;
  thurDollerAria: string;
  thurDollerAlt: string;
  leaderAria: string;
  leaderAlt: string;
  stAmarinAria: string;
  stAmarinAlt: string;
  sm4Alt: string;
  allianceAlt: string;
  patrimoineAlt: string;
  totalAlt: string;
  hermesAlt: string;
  abAlt: string;
  eurofeuilleAlt: string;
  potagersAlt: string;
  jardinAlt: string;
  pnrAlt: string;
  fbAria: string;
  fbAlt: string;
  instagramAria: string;
  instagramAlt: string;
  certifications: string;
};

export type FooterProps = {
  locale: Locale;
  messages: Record<string, unknown>;
};
