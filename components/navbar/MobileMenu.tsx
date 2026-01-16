import Link from "next/link";

import { DropdownMenu } from "radix-ui";
import { FaChevronRight } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

import LocaleSwitcher from "./LocaleSwitcher";

import type { NavbarProps } from "@/types/i18n";

const MobileMenu = ({ locale, messages }: NavbarProps) => {
  const { home, vegetableGarden, restaurant, reviews, contact } = messages;
  const base = `/${locale}`;

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button className="btn-ghost btn p-0 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer">
          <LuMenu size={36} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          align="start"
          className="z-50 rounded-lg fabric-surface-light font-bold text-primary p-0.5 shadow-md"
        >
          <DropdownMenu.Item asChild>
            <Link href={base} className="menu-link block">
              {home.label}
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="navigation-menu-trigger">
              <span>{vegetableGarden.label}</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>

            <DropdownMenu.SubContent
              sideOffset={-9}
              className="menu-sub-content fabric-surface-light py-2 w-44 sm:w-64"
            >
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/vegetable-garden/wesserling-park`}
                  className="menu-link block"
                >
                  {vegetableGarden.wesserlingPark}
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="navigation-menu-trigger">
              <span>{restaurant.label}</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent
              sideOffset={-9}
              className="menu-sub-content fabric-surface-light py-2 w-44 sm:w-64"
            >
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/restaurant/restaurant-style`}
                  className="menu-link block"
                >
                  {restaurant.restaurantStyle}
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Item asChild>
            <Link href={`${base}/contact`} className="menu-link block">
              {contact.label}
            </Link>
          </DropdownMenu.Item>
          <div className="border-t border-secondary my-2 pt-2 flex justify-center">
            <LocaleSwitcher currentLocale={locale} />
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MobileMenu;
