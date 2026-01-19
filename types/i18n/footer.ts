import type { Locale } from "@/lib/i18n.config";
import leader from '@/public/logos/feader-leader.jpg';

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
};

export type FooterProps = {
  locale: Locale;
  messages: Record<string, unknown>;
};
