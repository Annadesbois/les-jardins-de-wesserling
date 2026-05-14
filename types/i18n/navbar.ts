import type { Locale } from "@/lib/i18n.config";

export type NavbarHomeMessages = {
  label: string;
};

export type NavbarGardenMessages = {
  label: string;
};

export type NavbarRestaurantMessages = {
  label: string;
  restaurantStyle: string;
  values: string;
  menu: string;
  bookingAccess: string;
};

export type NavbarFestiveEntertainmentMessages = {
  label: string;
};

export type NavbarAboutMessages = {
  label: string;
  association: string;
  mission: string;
  partners: string;
  supportUs: string;
};

export type NavbarSimpleSectionMessages = {
  label: string;
};

export type NavbarMessages = {
  home: NavbarHomeMessages;
  garden: NavbarGardenMessages;
  restaurant: NavbarRestaurantMessages;
  festiveEntertainment: NavbarFestiveEntertainmentMessages;
  about: NavbarAboutMessages;
  contact: NavbarSimpleSectionMessages;
};

export type NavbarProps = {
  locale: Locale;
  messages: NavbarMessages;
};
