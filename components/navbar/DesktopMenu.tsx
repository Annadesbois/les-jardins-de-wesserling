import Link from "next/link";

import { FaChevronDown } from "react-icons/fa";
import { NavigationMenu } from "radix-ui";

import type { NavbarProps } from "@/types/i18n";

const DesktopMenu = ({ locale, messages }: NavbarProps) => {
  const {
    home,
    vegetableGarden,
    restaurant,
    festiveEntertainment,
    about,
    contact,
  } = messages;
  const base = `/${locale}`;

  return (
    <NavigationMenu.Root className="relative">
      <NavigationMenu.List className="flex items-center md:ml-2 lg:gap-2 font-bold">
        {/* HOME */}
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href={base} className="menu-link">
              {home.label}
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* VEGETABLE GARDEN */}
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {vegetableGarden.label}
            <FaChevronDown
              className="w-3 h-3 transition-transform duration-250 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="bg-surface-2 menu-sub-content absolute min-w-max top-full left-0 p-2 mt-2">
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
                    href={`${base}/vegetable-garden/description`}
                    className="block menu-link"
                  >
                    {vegetableGarden.description}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/vegetable-garden/membership`}
                    className="block menu-link"
                  >
                    {vegetableGarden.membership}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* RESTAURANT */}
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href={`${base}/restaurant`} className="menu-link">
              {restaurant.label}
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* FESTIVE ENTERTAINMENT */}
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {festiveEntertainment.label}
            <FaChevronDown
              className="w-3 h-3 transition-transform duration-250 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="bg-surface-2 menu-sub-content absolute min-w-max top-full left-0 p-2 mt-2">
            <ul className="space-y-1">
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/festive-entertainment/pacques`}
                    className="block menu-link"
                  >
                    {festiveEntertainment.pacques}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/festive-entertainment/troc-jardin`}
                    className="block menu-link"
                  >
                    {festiveEntertainment.trocJardin}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/festive-entertainment/musique`}
                    className="block menu-link"
                  >
                    {festiveEntertainment.musique}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/festive-entertainment/cocktails`}
                    className="block menu-link"
                  >
                    {festiveEntertainment.cocktails}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/festive-entertainment/nocturnes`}
                    className="block menu-link"
                  >
                    {festiveEntertainment.nocturnes}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/festive-entertainment/automne`}
                    className="block menu-link"
                  >
                    {festiveEntertainment.automne}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/festive-entertainment/noel-au-jardin`}
                    className="block menu-link"
                  >
                    {festiveEntertainment.noel}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* ABOUT */}
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {about.label}
            <FaChevronDown
              className="w-3 h-3 transition-transform duration-250 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="bg-surface-2 menu-sub-content absolute min-w-max top-full left-0 p-2 mt-2">
            <ul className="space-y-1">
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/about/association`}
                    className="block menu-link"
                  >
                    {about.association}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/about/mission`}
                    className="block menu-link"
                  >
                    {about.mission}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/about/partners`}
                    className="block menu-link"
                  >
                    {about.partners}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/about/support-us`}
                    className="block menu-link"
                  >
                    {about.supportUs}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* CONTACT */}
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
