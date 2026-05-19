import type { Locale } from "@/lib/i18n.config";
import leader from '@/public/logos/feader-leader.jpg';
import eurofeuille from '@/public/logos/eurofeuille_logo.png';
import potagers from '@/public/logos/potagers-de-france.jpg';
import instagram from '@/public/logos/Instagram_Glyph_Gradient.png';

export type FooterMessages = {
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
  abAlt: string;
  eurofeuilleAlt: string;
  potagersAlt: string;
  jardinAlt: string;
  pnrAlt: string;
  fbAria: string;
  fbAlt: string;
  instagramAria: string;
  instagramAlt: string;
};

export type FooterProps = {
  locale: Locale;
  messages: Record<string, unknown>;
};
