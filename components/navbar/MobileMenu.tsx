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
    about,
    contact,
  } = messages;

  const base = `/${locale}`;

  const [openSection, setOpenSection] = useState<
    | "vegetableGarden"
    | "restaurant"
    | "festiveEntertainment"
    | "about"
    | null
  >(null);

  const toggleSection = useMemo(
    () => (key: NonNullable<typeof openSection>) => {
      setOpenSection((prev) => (prev === key ? null : key));
    },
    []
  );

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSection(null);
  };


  return (
    <DropdownMenu.Root
      open={menuOpen}
      onOpenChange={(open) => {
        setMenuOpen(open);
        if (!open) setOpenSection(null);
      }}
      modal={false}
    >
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
          className="z-50 rounded-lg bg-surface-2 font-bold text-primary p-0.5 shadow-md w-[calc(100vw-1.5rem)] max-w-[16rem]"
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
                onClick={closeMenu}
              >
                {vegetableGarden.wesserlingPark}
              </Link>
              <Link
                href={`${base}/vegetable-garden/description`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
                onClick={closeMenu}
              >
                {vegetableGarden.description}
              </Link>
              <Link
                href={`${base}/vegetable-garden/membership`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
                onClick={closeMenu}
              >
                {vegetableGarden.membership}
              </Link>
            </div>
          )}

          {/* RESTAURANT */}
          <DropdownMenu.Item asChild>
            <Link href={`${base}/restaurant`} className="menu-link block">
              {restaurant.label}
            </Link>
          </DropdownMenu.Item>

          {/* FESTIVE ENTERTAINMENT */}
          <DropdownMenu.Item asChild>
            <Link href={`${base}/festive-entertainment`} className="menu-link block">
              {festiveEntertainment.label}
            </Link>
          </DropdownMenu.Item>

          {/* ABOUT */}
          <DropdownMenu.Item
            className="navigation-menu-trigger"
            onSelect={(e) => e.preventDefault()}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("about")}
              aria-expanded={openSection === "about"}
            >
              <span>{about.label}</span>
              <FaChevronRight
                className={`h-3 w-3 ml-2 transition-transform ${
                  openSection === "about" ? "rotate-90" : ""
                }`}
              />
            </button>
          </DropdownMenu.Item>

          {openSection === "about" && (
            <div className="pl-4 pb-2">
              <Link
                href={`${base}/about/association`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
                onClick={closeMenu}
              >
                {about.association}
              </Link>
              <Link
                href={`${base}/about/mission`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
                onClick={closeMenu}
              >
                {about.mission}
              </Link>
              <Link
                href={`${base}/about/partners`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
                onClick={closeMenu}
              >
                {about.partners}
              </Link>
              <Link
                href={`${base}/about/support-us`}
                className="menu-link block whitespace-normal wrap-break-word py-2"
                onClick={closeMenu}
              >
                {about.supportUs}
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
