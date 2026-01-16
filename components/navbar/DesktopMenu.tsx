import Link from "next/link";

import { FaChevronDown } from "react-icons/fa";
import { NavigationMenu } from "radix-ui";

import type { NavbarProps } from "@/types/i18n";

const DesktopMenu = ({ locale, messages }: NavbarProps) => {
  const { home, vegetableGarden, restaurant, reviews, contact } =
    messages;
  const base = `/${locale}`;

  return (
    <NavigationMenu.Root className="relative">
      <NavigationMenu.List className="flex items-center md:ml-2 lg:gap-2 font-bold">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href={base} className="menu-link">
              {home.label}
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {vegetableGarden.label}
            <FaChevronDown
              className="w-3 h-3 transition-transform duration-250 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="fabric-surface-light menu-sub-content absolute min-w-max top-full left-0 p-2 mt-2">
            <ul className="space-y-1">
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/vegetable-garden/wesserling-park`}
                    className="block menu-link"
                  >
                    {vegetableGarden.wesserlingPark}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/vegetable-garden/wesserling-park`}
                    className="block menu-link"
                  >
                    {vegetableGarden.description}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {restaurant.label}
            <FaChevronDown
              className="w-3 h-3 transition-transform duration-250 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="fabric-surface-light menu-sub-content absolute min-w-max top-full left-0 p-2 mt-2">
            <ul className="space-y-1">
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/restaurant/restaurant-style`}
                    className="block menu-link"
                  >
                    {restaurant.restaurantStyle}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href={`${base}/contact`} className="menu-link">
              {contact.label}
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default DesktopMenu;
