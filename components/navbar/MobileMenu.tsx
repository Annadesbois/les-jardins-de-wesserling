import Link from "next/link";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaChevronRight } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

import LocaleSwitcher from "./LocaleSwitcher";

import type { NavbarProps } from "@/types/i18n";

const MobileMenu = ({ locale, messages }: NavbarProps) => {
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
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/vegetable-garden/description`}
                  className="menu-link block"
                >
                  {vegetableGarden.description}
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
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/restaurant/values`}
                  className="menu-link block"
                >
                  {restaurant.values}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/restaurant/menu`}
                  className="menu-link block"
                >
                  {restaurant.menu}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/restaurant/booking-access`}
                  className="menu-link block"
                >
                  {restaurant.bookingAccess}
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="navigation-menu-trigger">
              <span>{festiveEntertainment.label}</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent
              sideOffset={-9}
              className="menu-sub-content fabric-surface-light py-2 w-44 sm:w-64"
            >
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/festiveEntertainment/pacques`}
                  className="menu-link block"
                >
                  {festiveEntertainment.pacques}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/festiveEntertainment/troc-jardin`}
                  className="menu-link block"
                >
                  {festiveEntertainment.trocJardin}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/festiveEntertainment/musique`}
                  className="menu-link block"
                >
                  {festiveEntertainment.musique}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/festiveEntertainment/cocktails`}
                  className="menu-link block"
                >
                  {festiveEntertainment.cocktails}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/festiveEntertainment/nocturnes`}
                  className="menu-link block"
                >
                  {festiveEntertainment.nocturnes}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/festiveEntertainment/automne`}
                  className="menu-link block"
                >
                  {festiveEntertainment.automne}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/festiveEntertainment/noel`}
                  className="menu-link block"
                >
                  {festiveEntertainment.noel}
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="navigation-menu-trigger">
              <span>{association.label}</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent
              sideOffset={-9}
              className="menu-sub-content fabric-surface-light py-2 w-44 sm:w-64"
            >
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/association/objectives`}
                  className="menu-link block"
                >
                  {association.objectives}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/association/members`}
                  className="menu-link block"
                >
                  {association.members}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/association/history`}
                  className="menu-link block"
                >
                  {association.history}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/association/support-us`}
                  className="menu-link block"
                >
                  {association.supportUs}
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="navigation-menu-trigger">
              <span>{mission.label}</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent
              sideOffset={-9}
              className="menu-sub-content fabric-surface-light py-2 w-44 sm:w-64"
            >
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/mission/social-integration`}
                  className="menu-link block"
                >
                  {mission.socialIntegration}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/mission/employees`}
                  className="menu-link block"
                >
                  {mission.employees}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/mission/activities`}
                  className="menu-link block"
                >
                  {mission.activities}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/mission/applying`}
                  className="menu-link block"
                >
                  {mission.applying}
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="navigation-menu-trigger">
              <span>{partners.label}</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent
              sideOffset={-9}
              className="menu-sub-content fabric-surface-light py-2 w-44 sm:w-64"
            >
              <DropdownMenu.Item asChild>
                <Link href={`${base}/partners/fse`} className="menu-link block">
                  {partners.fse}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/partners/ecomusee-textile`}
                  className="menu-link block"
                >
                  {partners.ecomuseeTextile}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/partners/other-partners`}
                  className="menu-link block"
                >
                  {partners.otherPartners}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/partners/sponsors`}
                  className="menu-link block"
                >
                  {partners.sponsors}
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
