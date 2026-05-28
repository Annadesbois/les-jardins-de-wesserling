import { Metadata } from "next";

import { getMessages } from "@/lib/i18n";
import type { Locale } from "./i18n.config";

import type {
  PageProp,
  MetadataMessages,
  HomeMessages,
  GardenMessages,
  RestaurantMessages,
  FestiveMessages,
  ContactMessages,
} from "@/types/i18n";

type Messages = {
  home: HomeMessages;
  garden: GardenMessages;
  restaurant: RestaurantMessages;
  festive: FestiveMessages;
  contact: ContactMessages;
};

type MessageKey = keyof Messages;

export function createPageHelpers<K extends MessageKey>(messageKey: K) {
  const generateMetadata = async ({ params }: PageProp): Promise<Metadata> => {
    const { locale } = await params;
    const messages = getMessages(locale as Locale);
    const section = messages[messageKey] as Messages[K] & MetadataMessages;

    return {
      title: section.meta.title,
      description: section.meta.description,
    };
  };

  const getPageMessages = async (
    params: Promise<{ locale: string }>
  ): Promise<Messages[K]> => {
    const { locale } = await params;
    const messages = getMessages(locale as Locale) as Messages;
    return messages[messageKey];
  };

  return { generateMetadata, getPageMessages };
}
