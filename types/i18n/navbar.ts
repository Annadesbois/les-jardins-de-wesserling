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

export type NavbarAssociationMessages = {
  label: string;
  objectives: string;
  members: string;
  history: string;
  partners: string;
  supportUs: string;
};

export type NavbarMissionMessages = {
  label: string;
  socialIntegration: string;
  employees: string;
  activities: string;
  applying: string;
};

export type NavbarPartnersMessages = {
  label: string;
  fse: string;
  ecomuseeTextile: string;
  otherPartners: string;
  sponsors: string;
};

export type NavbarSimpleSectionMessages = {
  label: string;
};

export type NavbarMessages = {
  home: NavbarHomeMessages;
  vegetableGarden: NavbarVegetableGardenMessages;
  restaurant: NavbarRestaurantMessages;
  festiveEntertainment: NavbarFestiveEntertainmentMessages;
  association: NavbarAssociationMessages;
  mission: NavbarMissionMessages;
  partners: NavbarPartnersMessages;
  contact: NavbarSimpleSectionMessages;
};

export type NavbarProps = {
  locale: Locale;
  messages: NavbarMessages;
};
