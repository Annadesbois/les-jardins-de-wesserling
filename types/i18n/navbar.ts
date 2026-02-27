import type { Locale } from "@/lib/i18n.config";

export type NavbarHomeMessages = {
  label: string;
};

export type NavbarVegetableGardenMessages = {
  label: string;
  wesserlingPark: string;
  description: string;
  membership: string;
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
  pacques: string;
  trocJardin: string;
  musique: string;
  cocktails: string;
  nocturnes: string;
  automne: string;
  noel: string;
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
  vegetableGarden: NavbarVegetableGardenMessages;
  restaurant: NavbarRestaurantMessages;
  festiveEntertainment: NavbarFestiveEntertainmentMessages;
  about: NavbarAboutMessages;
  contact: NavbarSimpleSectionMessages;
};

export type NavbarProps = {
  locale: Locale;
  messages: NavbarMessages;
};
