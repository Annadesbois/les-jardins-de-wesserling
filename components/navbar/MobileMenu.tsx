"use client";

import { useMemo, useState } from "react";
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

  const [openSection, setOpenSection] = useState<
    | "vegetableGarden"
    | "restaurant"
    | "festiveEntertainment"
    | "association"
    | "mission"
    | "partners"
    | null
  >(null);

  const toggleSection = useMemo(
    () => (key: NonNullable<typeof openSection>) => {
      setOpenSection((prev) => (prev === key ? null : key));
    },
    []
  );

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="btn-ghost btn p-0 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer"
        >
          <LuMenu size={36} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          align="start"
          className="z-50 rounded-lg fabric-surface-light font-bold text-primary p-0.5 shadow-md w-[calc(100vw-1.5rem)] max-w-[16rem]"
        >
          {/* HOME */}
          <DropdownMenu.Item asChild>
            <Link href={base} className="menu-link block">
              {home.label}
            </Link>
          </DropdownMenu.Item>

          {/* VEGETABLE GARDEN */}
          <DropdownMenu.Item
            className="navigation-menu-trigger"
            onSelect={(e) => e.preventDefault()}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("vegetableGarden")}
              aria-expanded={openSection === "vegetableGarden"}
            >
              <span>{vegetableGarden.label}</span>
              <FaChevronRight
                className={`h-3 w-3 ml-2 transition-transform ${
                  openSection === "vegetableGarden" ? "rotate-90" : ""
                }`}
              />
            </button>
          </DropdownMenu.Item>

          {openSection === "vegetableGarden" && (
            <div className="pl-4 pb-2">
              <Link
                href={`${base}/vegetable-garden/wesserling-park`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {vegetableGarden.wesserlingPark}
              </Link>
              <Link
                href={`${base}/vegetable-garden/description`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {vegetableGarden.description}
              </Link>
            </div>
          )}

          {/* RESTAURANT */}
          <DropdownMenu.Item
            className="navigation-menu-trigger"
            onSelect={(e) => e.preventDefault()}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("restaurant")}
              aria-expanded={openSection === "restaurant"}
            >
              <span>{restaurant.label}</span>
              <FaChevronRight
                className={`h-3 w-3 ml-2 transition-transform ${
                  openSection === "restaurant" ? "rotate-90" : ""
                }`}
              />
            </button>
          </DropdownMenu.Item>

          {openSection === "restaurant" && (
            <div className="pl-4 pb-2">
              <Link
                href={`${base}/restaurant/restaurant-style`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {restaurant.restaurantStyle}
              </Link>
              <Link
                href={`${base}/restaurant/values`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {restaurant.values}
              </Link>
              <Link
                href={`${base}/restaurant/menu`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {restaurant.menu}
              </Link>
              <Link
                href={`${base}/restaurant/booking-access`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {restaurant.bookingAccess}
              </Link>
            </div>
          )}

          {/* FESTIVE ENTERTAINMENT */}
          <DropdownMenu.Item
            className="navigation-menu-trigger"
            onSelect={(e) => e.preventDefault()}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("festiveEntertainment")}
              aria-expanded={openSection === "festiveEntertainment"}
            >
              <span>{festiveEntertainment.label}</span>
              <FaChevronRight
                className={`h-3 w-3 ml-2 transition-transform ${
                  openSection === "festiveEntertainment" ? "rotate-90" : ""
                }`}
              />
            </button>
          </DropdownMenu.Item>

          {openSection === "festiveEntertainment" && (
            <div className="pl-4 pb-2 max-h-[50vh] overflow-y-auto overscroll-contain">
              <Link
                href={`${base}/festiveEntertainment/pacques`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {festiveEntertainment.pacques}
              </Link>
              <Link
                href={`${base}/festiveEntertainment/troc-jardin`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {festiveEntertainment.trocJardin}
              </Link>
              <Link
                href={`${base}/festiveEntertainment/musique`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {festiveEntertainment.musique}
              </Link>
              <Link
                href={`${base}/festiveEntertainment/cocktails`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {festiveEntertainment.cocktails}
              </Link>
              <Link
                href={`${base}/festiveEntertainment/nocturnes`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {festiveEntertainment.nocturnes}
              </Link>
              <Link
                href={`${base}/festiveEntertainment/automne`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {festiveEntertainment.automne}
              </Link>
              <Link
                href={`${base}/festiveEntertainment/noel`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {festiveEntertainment.noel}
              </Link>
            </div>
          )}

          {/* ASSOCIATION */}
          <DropdownMenu.Item
            className="navigation-menu-trigger"
            onSelect={(e) => e.preventDefault()}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("association")}
              aria-expanded={openSection === "association"}
            >
              <span>{association.label}</span>
              <FaChevronRight
                className={`h-3 w-3 ml-2 transition-transform ${
                  openSection === "association" ? "rotate-90" : ""
                }`}
              />
            </button>
          </DropdownMenu.Item>

          {openSection === "association" && (
            <div className="pl-4 pb-2">
              <Link
                href={`${base}/association/objectives`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {association.objectives}
              </Link>
              <Link
                href={`${base}/association/members`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {association.members}
              </Link>
              <Link
                href={`${base}/association/history`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {association.history}
              </Link>
              <Link
                href={`${base}/association/support-us`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {association.supportUs}
              </Link>
            </div>
          )}

          {/* MISSION */}
          <DropdownMenu.Item
            className="navigation-menu-trigger"
            onSelect={(e) => e.preventDefault()}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("mission")}
              aria-expanded={openSection === "mission"}
            >
              <span>{mission.label}</span>
              <FaChevronRight
                className={`h-3 w-3 ml-2 transition-transform ${
                  openSection === "mission" ? "rotate-90" : ""
                }`}
              />
            </button>
          </DropdownMenu.Item>

          {openSection === "mission" && (
            <div className="pl-4 pb-2">
              <Link
                href={`${base}/mission/social-integration`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {mission.socialIntegration}
              </Link>
              <Link
                href={`${base}/mission/employees`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {mission.employees}
              </Link>
              <Link
                href={`${base}/mission/activities`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {mission.activities}
              </Link>
              <Link
                href={`${base}/mission/applying`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {mission.applying}
              </Link>
            </div>
          )}

          {/* PARTNERS */}
          <DropdownMenu.Item
            className="navigation-menu-trigger"
            onSelect={(e) => e.preventDefault()}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("partners")}
              aria-expanded={openSection === "partners"}
            >
              <span>{partners.label}</span>
              <FaChevronRight
                className={`h-3 w-3 ml-2 transition-transform ${
                  openSection === "partners" ? "rotate-90" : ""
                }`}
              />
            </button>
          </DropdownMenu.Item>

          {openSection === "partners" && (
            <div className="pl-4 pb-2">
              <Link
                href={`${base}/partners/fse`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {partners.fse}
              </Link>
              <Link
                href={`${base}/partners/ecomusee-textile`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {partners.ecomuseeTextile}
              </Link>
              <Link
                href={`${base}/partners/other-partners`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {partners.otherPartners}
              </Link>
              <Link
                href={`${base}/partners/sponsors`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
              >
                {partners.sponsors}
              </Link>
            </div>
          )}

          {/* CONTACT */}
          <DropdownMenu.Item asChild>
            <Link href={`${base}/contact`} className="menu-link block">
              {contact.label}
            </Link>
          </DropdownMenu.Item>

          {/* LOCALE SWITCHER */}
          <div className="border-t border-secondary my-2 pt-2 flex justify-center">
            <LocaleSwitcher currentLocale={locale} />
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MobileMenu;
