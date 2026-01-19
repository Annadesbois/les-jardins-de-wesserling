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
    association,
    mission,
    partners,
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
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* RESTAURANT */}
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {restaurant.label}
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
                    href={`${base}/restaurant/restaurant-style`}
                    className="block menu-link"
                  >
                    {restaurant.restaurantStyle}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/restaurant/values`}
                    className="block menu-link"
                  >
                    {restaurant.values}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/restaurant/menu`}
                    className="block menu-link"
                  >
                    {restaurant.menu}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/restaurant/booking-access`}
                    className="block menu-link"
                  >
                    {restaurant.bookingAccess}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
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

        {/* ASSOCIATION */}
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {association.label}
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
                    href={`${base}/association/objectives`}
                    className="block menu-link"
                  >
                    {association.objectives}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/association/members`}
                    className="block menu-link"
                  >
                    {association.members}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/association/history`}
                    className="block menu-link"
                  >
                    {association.history}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/association/support-us`}
                    className="block menu-link"
                  >
                    {association.supportUs}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* MISSION */}
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {mission.label}
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
                    href={`${base}/mission/social-integration`}
                    className="block menu-link"
                  >
                    {mission.socialIntegration}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/mission/employees`}
                    className="block menu-link"
                  >
                    {mission.employees}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/mission/activities`}
                    className="block menu-link"
                  >
                    {mission.activities}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/mission/applying`}
                    className="block menu-link"
                  >
                    {mission.applying}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* PARTNERS */}
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {partners.label}
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
                    href={`${base}/partners/fse`}
                    className="block menu-link"
                  >
                    {partners.fse}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/partners/ecomusee-textile`}
                    className="block menu-link"
                  >
                    {partners.ecomuseeTextile}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/partners/other-partners`}
                    className="block menu-link"
                  >
                    {partners.otherPartners}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/partners/sponsors`}
                    className="block menu-link"
                  >
                    {partners.sponsors}
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
