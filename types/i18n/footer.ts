import type { Locale } from "@/lib/i18n.config";

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
