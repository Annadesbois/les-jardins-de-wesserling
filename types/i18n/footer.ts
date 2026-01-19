import type { Locale } from "@/lib/i18n.config";

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
  giteDeFranceAria: string;
  giteDeFranceAlt: string;
  stAmarinAria: string;
  stAmarinAlt: string;
};

export type FooterProps = {
  locale: Locale;
  messages: Record<string, unknown>;
};
