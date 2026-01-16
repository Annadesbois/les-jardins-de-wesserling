import type { Locale } from "@/lib/i18n.config";

export type NavbarHomeMessages = {
  label: string;
};

export type NavbarVegetableGardenMessages = {
  label: string;
  wesserlingPark: string;
  description: string;
};

export type NavbarRestaurantMessages = {
  label: string;
  restaurantStyle: string;
  menu: string;
};

export type NavbarFestiveEntertainmentMessages = {
  label: string;
  village: string;
  hiking: string;
  wesserling: string;
  mill: string;
  lake: string;
  everythingElse: string;
};

export type NavbarSimpleSectionMessages = {
  label: string;
};

export type NavbarMessages = {
  home: NavbarHomeMessages;
  vegetableGarden: NavbarVegetableGardenMessages;
  restaurant: NavbarRestaurantMessages;
  price: NavbarSimpleSectionMessages;
  reviews: NavbarSimpleSectionMessages;
  contact: NavbarSimpleSectionMessages;
};

export type NavbarProps = {
  locale: Locale;
  messages: NavbarMessages;
};
